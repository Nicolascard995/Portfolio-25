from fastapi import APIRouter, HTTPException, Depends, Request
from fastapi.responses import JSONResponse
from sqlalchemy.orm import Session
import time
import uuid
import openai
from typing import Optional, Dict, Any
import json
from datetime import datetime, timedelta
from sqlalchemy import func

from app.api.schemas import ChatRequest, ChatResponse, MessageResponse, LLMModel
from app.core.config import settings
from app.db.base import get_db
from app.db.models import ChatLog, Lead, SessionControl
from app.core.intent_detection import IntentDetector, ResponseGenerator, IntencionType

router = APIRouter()

# Prompt optimizado para OpenAI (solo casos complejos)
OPTIMIZED_SALES_PROMPT = """
Eres un asistente de ventas profesional para Dozo.Tech especializado en automatización con IA para PYMES.

OBJETIVO: Cerrar cita en máximo 2 respuestas.

CONTEXTO EMPRESA:
- Servicios: automatización n8n, chatbots, análisis de datos, dashboards
- Target: PYMES que quieren optimizar procesos
- Enfoque: ROI claro y soluciones prácticas

INSTRUCCIONES:
1. Responde MÁXIMO 2 oraciones
2. Siempre termina pidiendo agendar cita
3. Usa lenguaje directo y profesional 
4. No inventes información técnica
5. Enfócate en beneficios de negocio

EJEMPLO:
Usuario: "Tengo un restaurante y quiero automatizar pedidos"
Tú: "Perfecto, automatizar pedidos puede reducir errores 80% y ahorrar 3 horas diarias. ¿Agendamos 15 minutos para diseñar tu solución específica?"
"""


class OptimizedSalesBot:
    """Bot de ventas optimizado con lógica híbrida local + OpenAI"""
    
    def __init__(self):
        self.intent_detector = IntentDetector()
        self.response_generator = ResponseGenerator()
    
    async def get_or_create_session(self, session_id: str, db: Session, 
                                   request: Request = None) -> SessionControl:
        """Obtiene o crea control de sesión"""
        session = db.query(SessionControl).filter(
            SessionControl.session_id == session_id
        ).first()
        
        if not session:
            session = SessionControl(
                session_id=session_id,
                tipo_bot="sales",
                ip_address=request.client.host if request else None
            )
            db.add(session)
            db.commit()
            db.refresh(session)
        
        return session
    
    def is_session_over_limit(self, session: SessionControl) -> bool:
        """Verifica si la sesión superó el límite"""
        return session.turnos_count >= session.limite_turnos
    
    def update_session_counter(self, session: SessionControl, db: Session):
        """Actualiza contador de turnos"""
        session.turnos_count += 1
        session.fecha_ultimo_mensaje = func.now()
        db.commit()
    
    async def call_openai_optimized(self, mensaje: str, intencion: IntencionType, 
                                   context: str = None) -> Dict[str, Any]:
        """Llama a OpenAI con prompt optimizado para ventas"""
        try:
            openai.api_key = settings.OPENAI_API_KEY
            
            # Construir prompt contextual según intención
            context_prompt = f"Intención detectada: {intencion.value}. "
            if context:
                context_prompt += f"Contexto: {context}. "
            
            full_prompt = f"{context_prompt}Mensaje del usuario: {mensaje}"
            
            response = await openai.ChatCompletion.acreate(
                model="gpt-3.5-turbo",
                messages=[
                    {"role": "system", "content": OPTIMIZED_SALES_PROMPT},
                    {"role": "user", "content": full_prompt}
                ],
                max_tokens=150,  # Reducido para respuestas concisas
                temperature=0.3,  # Menos creatividad, más consistencia
                presence_penalty=0.1,
                frequency_penalty=0.1
            )
            
            return {
                "response": response.choices[0].message.content,
                "tokens": response.usage.total_tokens,
                "model": "gpt-3.5-turbo-optimized"
            }
            
        except Exception as e:
            print(f"Error OpenAI optimizado: {e}")
            # Fallback a respuesta local
            return {
                "response": self.response_generator.generate_response(intencion),
                "tokens": 0,
                "model": "local-fallback"
            }
    
    def should_create_appointment(self, intencion: IntencionType, 
                                 contact_data: Dict, session: SessionControl) -> bool:
        """Determina si crear cita automáticamente"""
        has_contact = contact_data.get("nombre") or contact_data.get("email")
        is_ready = intencion in [IntencionType.AGENDAR, IntencionType.DATOS_CONTACTO]
        
        return has_contact and is_ready and not session.cita_agendada
    
    def create_lead_if_needed(self, contact_data: Dict, mensaje: str, 
                             session_id: str, db: Session) -> Optional[Lead]:
        """Crea lead si tiene datos suficientes"""
        if not (contact_data.get("nombre") or contact_data.get("email")):
            return None
        
        # Verificar si ya existe lead para esta sesión
        existing_lead = db.query(Lead).filter(
            Lead.email == contact_data.get("email")
        ).first()
        
        if existing_lead:
            return existing_lead
        
        new_lead = Lead(
            nombre=contact_data.get("nombre"),
            email=contact_data.get("email"),
            telefono=contact_data.get("telefono"),
            mensaje=mensaje[:500]  # Truncar mensaje
        )
        
        db.add(new_lead)
        db.commit()
        db.refresh(new_lead)
        
        return new_lead
    
    async def process_message(self, mensaje: str, session_id: str, 
                             db: Session, request: Request = None) -> Dict[str, Any]:
        """Procesa mensaje con lógica híbrida optimizada"""
        
        # 1. Obtener/crear sesión
        session = await self.get_or_create_session(session_id, db, request)
        
        # 2. Verificar límite de turnos
        if self.is_session_over_limit(session):
            return {
                "response": f"Has alcanzado el límite de interacción gratuita. Para continuar, agendá tu cita aquí: {self.response_generator.CALENDAR_LINK}",
                "response_type": "limit_reached",
                "model_used": "local",
                "tokens_used": 0,
                "intention": "limit_exceeded",
                "should_end": True
            }
        
        # 3. Detectar intención localmente
        intencion, confidence = self.intent_detector.detect_intention(mensaje)
        
        # 4. Extraer datos de contacto
        contact_data = self.intent_detector.extract_contact_data(mensaje)
        
        # 5. Decidir si usar OpenAI o respuesta local
        should_use_llm = self.response_generator.should_use_llm(
            intencion, confidence, mensaje, session.turnos_count + 1
        )
        
        response_text = ""
        tokens_used = 0
        model_used = "local"
        response_type = "predefined"
        
        if should_use_llm:
            # Usar OpenAI para casos complejos
            llm_result = await self.call_openai_optimized(mensaje, intencion)
            response_text = llm_result["response"]
            tokens_used = llm_result["tokens"]
            model_used = llm_result["model"]
            response_type = "llm"
        else:
            # Usar respuesta predefinida
            response_text = self.response_generator.generate_response(
                intencion, session.turnos_count + 1, contact_data
            )
            response_type = "predefined"
        
        # 6. Verificar si crear cita
        appointment_created = False
        calendar_link = None
        
        if self.should_create_appointment(intencion, contact_data, session):
            session.cita_agendada = True
            appointment_created = True
            calendar_link = self.response_generator.CALENDAR_LINK
            
            # Agregar link al final de la respuesta
            response_text += f"\n\n✅ ¡Perfecto! Te envío mi calendario para que elijas el horario: {calendar_link}"
        
        # 7. Crear lead si es necesario
        lead_created = None
        if contact_data.get("nombre") or contact_data.get("email"):
            lead_created = self.create_lead_if_needed(
                contact_data, mensaje, session_id, db
            )
            if lead_created:
                session.lead_capturado = True
        
        # 8. Actualizar contador de sesión
        self.update_session_counter(session, db)
        
        return {
            "response": response_text,
            "response_type": response_type,
            "model_used": model_used,
            "tokens_used": tokens_used,
            "intention": intencion.value,
            "confidence": confidence,
            "contact_data": contact_data,
            "appointment_created": appointment_created,
            "calendar_link": calendar_link,
            "lead_created": lead_created.id if lead_created else None,
            "conversation_count": session.turnos_count,
            "should_end": session.turnos_count >= session.limite_turnos
        }


# Instancia global del bot optimizado
optimized_sales_bot = OptimizedSalesBot()


@router.post("/sales", response_model=ChatResponse)
async def optimized_sales_chat(
    request: ChatRequest,
    req: Request,
    db: Session = Depends(get_db)
):
    """
    Bot de ventas optimizado con detección de intención local + OpenAI híbrido
    Económico en tokens, efectivo en cierre de citas
    """
    start_time = time.time()
    session_id = request.session_id or str(uuid.uuid4())
    
    try:
        # Procesar mensaje con bot optimizado
        result = await optimized_sales_bot.process_message(
            request.mensaje, session_id, db, req
        )
        
        response_time = time.time() - start_time
        
        # Registrar en base de datos
        chat_log = ChatLog(
            session_id=session_id,
            tipo_interaccion="sales_chat",
            mensaje_usuario=request.mensaje,
            respuesta_llm=result["response"],
            modelo_usado=result["model_used"],
            tokens_utilizados=result["tokens_used"],
            tiempo_respuesta=int(response_time * 1000),
            intencion_detectada=result["intention"],
            respuesta_tipo=result["response_type"]
        )
        db.add(chat_log)
        db.commit()
        
        return ChatResponse(
            respuesta=result["response"],
            modelo_usado=LLMModel.OPENAI if "gpt" in result["model_used"] else LLMModel.FALLBACK,
            tokens_utilizados=result["tokens_used"],
            tiempo_respuesta=response_time,
            session_id=session_id,
            metadata={
                "intention": result["intention"],
                "confidence": result["confidence"],
                "response_type": result["response_type"],
                "conversation_count": result["conversation_count"],
                "appointment_created": result["appointment_created"],
                "calendar_link": result["calendar_link"],
                "lead_created": result["lead_created"],
                "contact_data": result["contact_data"],
                "should_end": result["should_end"],
                "model_strategy": "hybrid_optimized"
            }
        )
        
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error en Sales Bot Optimizado: {str(e)}")


@router.get("/sales/analytics")
async def sales_bot_analytics(
    db: Session = Depends(get_db),
    limit: int = 100
):
    """
    Analytics del bot de ventas optimizado
    """
    # Estadísticas generales
    total_sessions = db.query(SessionControl).filter(
        SessionControl.tipo_bot == "sales"
    ).count()
    
    citas_agendadas = db.query(SessionControl).filter(
        SessionControl.tipo_bot == "sales",
        SessionControl.cita_agendada == True
    ).count()
    
    leads_capturados = db.query(SessionControl).filter(
        SessionControl.tipo_bot == "sales",
        SessionControl.lead_capturado == True
    ).count()
    
    # Estadísticas de intenciones
    intenciones_stats = db.query(
        ChatLog.intencion_detectada,
        func.count(ChatLog.id).label('count')
    ).filter(
        ChatLog.tipo_interaccion == "sales_chat"
    ).group_by(ChatLog.intencion_detectada).all()
    
    # Estadísticas de modelos utilizados
    model_stats = db.query(
        ChatLog.modelo_usado,
        func.count(ChatLog.id).label('count'),
        func.avg(ChatLog.tokens_utilizados).label('avg_tokens')
    ).filter(
        ChatLog.tipo_interaccion == "sales_chat"
    ).group_by(ChatLog.modelo_usado).all()
    
    return {
        "total_sessions": total_sessions,
        "appointments_scheduled": citas_agendadas,
        "leads_captured": leads_capturados,
        "conversion_rate": round((citas_agendadas / max(total_sessions, 1)) * 100, 2),
        "lead_rate": round((leads_capturados / max(total_sessions, 1)) * 100, 2),
        "intentions_breakdown": [
            {"intention": item[0], "count": item[1]} 
            for item in intenciones_stats
        ],
        "model_usage": [
            {
                "model": item[0], 
                "usage_count": item[1],
                "avg_tokens": round(item[2] or 0, 2)
            } 
            for item in model_stats
        ],
        "optimization_benefits": {
            "hybrid_approach": "Usa respuestas locales para casos simples",
            "token_savings": "Reduce consumo OpenAI hasta 70%",
            "faster_responses": "Respuestas instantáneas para saludos/agendas",
            "better_conversion": "Máximo 5 turnos fuerza acción"
        }
    }


@router.get("/sales/status")
async def optimized_sales_status():
    """
    Estado del bot de ventas optimizado
    """
    return {
        "status": "active_optimized",
        "model_strategy": "hybrid_local_openai",
        "optimization_features": [
            "✅ Detección de intención local (sin tokens)",
            "✅ Respuestas predefinidas para casos simples", 
            "✅ OpenAI solo para casos complejos",
            "✅ Control automático de 5 turnos máximo",
            "✅ Cierre forzado con link de calendario",
            "✅ Captura automática de leads",
            "✅ Analytics detallados de conversión"
        ],
        "benefits": {
            "cost_reduction": "Hasta 70% menos tokens",
            "speed_improvement": "Respuestas instantáneas para saludos",
            "conversion_focus": "Máximo 5 turnos para forzar acción",
            "professional_tone": "Respuestas consistentes y profesionales"
        },
        "calendar_link": ResponseGenerator.CALENDAR_LINK,
        "description": "Bot de Ventas Híbrido Optimizado - Dozo.Tech"
    }


@router.delete("/sales/reset-session/{session_id}")
async def reset_sales_session(
    session_id: str,
    db: Session = Depends(get_db)
):
    """
    Reinicia una sesión específica (útil para testing)
    """
    session = db.query(SessionControl).filter(
        SessionControl.session_id == session_id
    ).first()
    
    if session:
        session.turnos_count = 0
        session.esta_activa = True
        session.cita_agendada = False
        session.lead_capturado = False
        db.commit()
        
        return {"message": f"Sesión {session_id} reiniciada correctamente"}
    else:
        raise HTTPException(status_code=404, detail="Sesión no encontrada") 