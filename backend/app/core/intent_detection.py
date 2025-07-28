"""
Sistema de detección de intención local para Bot de Ventas Optimizado
Evita usar OpenAI para casos básicos y predecibles
"""
import re
import random
from typing import Dict, Any, Tuple, Optional
from enum import Enum


class IntencionType(str, Enum):
    """Tipos de intención detectables"""
    AGENDAR = "agendar"
    COMPRA = "compra"
    CONSULTAR_SERVICIO = "consultar_servicio"
    SALUDO = "saludo"
    DATOS_CONTACTO = "datos_contacto"
    PRECIO = "precio"
    DESPEDIDA = "despedida"
    DESINTERESADO = "desinteresado"
    DESCONOCIDA = "desconocida"


class IntentDetector:
    """Detector de intención basado en patrones locales"""
    
    # Patrones para cada intención
    PATTERNS = {
        IntencionType.SALUDO: [
            r'\b(hola|buenos?\s?(días?|tardes?|noches?)|qué\s?tal|saludos?|buenas)\b',
            r'\b(hi|hello|hey)\b',
            r'^(hola|buenas|hey)',
        ],
        
        IntencionType.AGENDAR: [
            r'\b(cita|agenda[r]?|reunión|meeting|llamada|demo)\b',
            r'\b(cuando|horario|disponible|calendario)\b',
            r'\b(nos\s?vemos|hablamos|contacta[r]?me)\b',
            r'\b(schedule|appointment)\b',
        ],
        
        IntencionType.COMPRA: [
            r'\b(comprar|compra|adquirir|contratar|precio)\b',
            r'\b(cuánto\s?cuesta|costo|presupuesto|tarifa)\b',
            r'\b(quiero|necesito|me\s?interesa)\s.*(servicio|bot|automatización)',
            r'\b(buy|purchase|hire)\b',
        ],
        
        IntencionType.CONSULTAR_SERVICIO: [
            r'\b(automatizar|automatización|proceso|IA|inteligencia\s?artificial)\b',
            r'\b(bot|chatbot|dashboard|análisis|datos)\b',
            r'\b(n8n|workflow|flujo|optimizar)\b',
            r'\b(ventas|inventario|clientes|gestión)\b',
        ],
        
        IntencionType.DATOS_CONTACTO: [
            r'\b(me\s?llamo|soy|mi\s?nombre\s?es)\s+[A-Za-z]+',
            r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b',
            r'\b(mi\s?email|correo|contacto)\b',
            r'\b(teléfono|celular|whatsapp)\b',
        ],
        
        IntencionType.PRECIO: [
            r'\b(precio|costo|tarifa|cuánto|presupuesto)\b',
            r'\b(gratis|gratuito|free|caro|barato)\b',
            r'\b(plan|paquete|mensual|anual)\b',
        ],
        
        IntencionType.DESPEDIDA: [
            r'\b(adiós|chao|nos\s?vemos|hasta\s?luego|gracias)\b',
            r'\b(bye|goodbye|see\s?you|thanks)\b',
        ],
        
        IntencionType.DESINTERESADO: [
            r'\b(no\s?me\s?interesa|no\s?gracias|ahora\s?no|después)\b',
            r'\b(muy\s?caro|no\s?tengo\s?tiempo|no\s?necesito)\b',
            r'\b(not\s?interested|no\s?thanks|maybe\s?later)\b',
        ]
    }
    
    @classmethod
    def detect_intention(cls, texto: str) -> Tuple[IntencionType, float]:
        """
        Detecta la intención principal del texto
        Returns: (intencion, confidence_score)
        """
        texto_lower = texto.lower()
        scores = {}
        
        for intencion, patterns in cls.PATTERNS.items():
            score = 0
            for pattern in patterns:
                matches = len(re.findall(pattern, texto_lower, re.IGNORECASE))
                score += matches
            
            if score > 0:
                # Normalizar score basado en longitud del texto
                normalized_score = min(score / max(len(texto.split()) / 10, 1), 1.0)
                scores[intencion] = normalized_score
        
        if not scores:
            return IntencionType.DESCONOCIDA, 0.0
        
        # Retornar la intención con mayor score
        best_intention = max(scores, key=scores.get)
        confidence = scores[best_intention]
        
        return best_intention, confidence
    
    @classmethod
    def extract_contact_data(cls, texto: str) -> Dict[str, Optional[str]]:
        """Extrae datos de contacto del texto"""
        data = {
            "nombre": None,
            "email": None,
            "telefono": None
        }
        
        # Extraer email
        email_pattern = r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b'
        email_match = re.search(email_pattern, texto, re.IGNORECASE)
        if email_match:
            data["email"] = email_match.group(0)
        
        # Extraer nombre
        name_patterns = [
            r'\b(?:me\s?llamo|soy|mi\s?nombre\s?es)\s+([A-Za-z\s]{2,30})',
            r'\b(?:nombre|name):\s*([A-Za-z\s]{2,30})',
        ]
        for pattern in name_patterns:
            name_match = re.search(pattern, texto, re.IGNORECASE)
            if name_match:
                data["nombre"] = name_match.group(1).strip()
                break
        
        # Extraer teléfono
        phone_patterns = [
            r'\b(?:\+?56\s?)?[0-9]\s?[0-9]{4}\s?[0-9]{4}\b',
            r'\b(?:\+?[0-9]{1,3}\s?)?[0-9]{3,4}\s?[0-9]{3,4}\s?[0-9]{3,4}\b',
        ]
        for pattern in phone_patterns:
            phone_match = re.search(pattern, texto)
            if phone_match:
                data["telefono"] = phone_match.group(0).strip()
                break
        
        return data


class ResponseGenerator:
    """Generador de respuestas predefinidas por intención"""
    
    CALENDAR_LINK = "https://cal.com/nicocard95/30min"  # Link de Calendly/Cal.com
    
    RESPONSES = {
        IntencionType.SALUDO: [
            "¡Hola! Soy el asistente de Dozo.Tech. ¿Te gustaría agendar una llamada breve para ver cómo ayudarte con automatización o IA?",
            "¡Hola! Especializo en automatizar procesos con IA para PYMES. ¿Querés ver cómo puede ayudarte? Podemos agendar una demo de 15 minutos.",
            "¡Buenas! Te ayudo a optimizar tu negocio con automatización. ¿Te interesa agendar una reunión para contarte más?",
        ],
        
        IntencionType.AGENDAR: [
            "¡Perfecto! ¿Me pasás tu nombre y correo? Te envío el link directo para que elijas el horario que mejor te convenga.",
            "Genial. Para agendar necesito tu nombre y email. Así coordinamos una reunión de 30 minutos para ver tu caso específico.",
            "Excelente. ¿Cuál es tu nombre y correo? Te mando las opciones disponibles para esta semana.",
        ],
        
        IntencionType.COMPRA: [
            "Perfecto. ¿Qué tipo de solución estás buscando: automatización de procesos, chatbots o análisis de datos? Podemos agendar una demo personalizada.",
            "Excelente. Para recomendarte la mejor solución, ¿podrías contarme un poco sobre tu negocio? Agendemos una consulta para diseñar algo específico para vos.",
            "Genial. Trabajo con soluciones personalizadas según cada negocio. ¿Agendamos una llamada para entender mejor lo que necesitás?",
        ],
        
        IntencionType.CONSULTAR_SERVICIO: [
            "¡Puedo ayudarte con eso! Especializo en automatizar exactamente ese tipo de procesos. ¿Querés que agendemos una reunión para verlo en detalle?",
            "Perfecto, justo es mi área. Tengo casos similares que te van a interesar. ¿Me pasás tu contacto para enviarte algunos ejemplos y coordinar una demo?",
            "Excelente timing. La semana pasada ayudé a una empresa con algo similar. ¿Te gustaría ver cómo lo resolvimos? Podemos agendar una llamada breve.",
        ],
        
        IntencionType.DATOS_CONTACTO: [
            "¡Gracias! Con esos datos ya puedo enviarte el calendario para agendar. ¿Preferís esta semana o la próxima?",
            "Perfecto. Te voy a enviar las opciones de horario disponibles. ¿Hay algún día/horario que te convenga más?",
            "Excelente. Con tu contacto ya puedo coordinar la reunión. ¿Te parece si buscamos un horario para esta semana?",
        ],
        
        IntencionType.PRECIO: [
            "Los precios dependen del alcance del proyecto. En una reunión de 30 minutos te puedo dar un presupuesto personalizado. ¿Agendamos?",
            "Trabajo con presupuestos personalizados según cada negocio. ¿Te parece si conversamos tu caso específico para darte un precio exacto?",
            "Para darte un precio preciso necesito entender mejor tu proyecto. ¿Podemos agendar una consulta breve para analizarlo juntos?",
        ],
        
        IntencionType.DESPEDIDA: [
            "¡Un placer conversar! Si cambiás de opinión, acá tenés mi calendario directo: {calendar_link}",
            "¡Gracias por tu tiempo! Cualquier cosa, podés agendar directamente acá: {calendar_link}",
            "¡Que tengas buen día! Si necesitás algo más, mi calendario está disponible: {calendar_link}",
        ],
        
        IntencionType.DESINTERESADO: [
            "Entiendo perfectamente. Si en el futuro necesitás automatización, acá tenés mi calendario: {calendar_link}",
            "Sin problema. Si cambiás de opinión o necesitás algo más adelante, podés contactarme directamente: {calendar_link}",
            "Perfecto, quedo disponible para cuando sea el momento adecuado. Mi calendario: {calendar_link}",
        ],
        
        IntencionType.DESCONOCIDA: [
            "¿Podrías contarme un poco más sobre lo que necesitás? Si querés, podemos agendar una llamada para verlo en detalle.",
            "Interesante. Para ayudarte mejor, ¿te parece si agendamos una reunión breve donde me contás más sobre tu proyecto?",
            "Me gustaría entender mejor tu necesidad. ¿Podríamos coordinar una llamada de 15 minutos para que me expliques?",
        ]
    }
    
    @classmethod
    def generate_response(cls, intencion: IntencionType, turno: int = 1, 
                         contact_data: Optional[Dict] = None) -> str:
        """
        Genera respuesta basada en intención y contexto
        """
        # Si supera 5 turnos, respuesta de límite
        if turno > 5:
            return f"Has alcanzado el límite de interacción gratuita. Para continuar, agendá tu cita aquí: {cls.CALENDAR_LINK}"
        
        # Seleccionar respuesta aleatoria de la intención
        responses = cls.RESPONSES.get(intencion, cls.RESPONSES[IntencionType.DESCONOCIDA])
        response = random.choice(responses)
        
        # Aplicar variables
        response = response.format(calendar_link=cls.CALENDAR_LINK)
        
        # Ajustar según turno para generar urgencia
        if turno >= 3 and intencion not in [IntencionType.AGENDAR, IntencionType.DATOS_CONTACTO]:
            response += f" ¿Te parece si agendamos algo breve para no extender tanto el chat?"
        
        if turno >= 4:
            response += f" Acá tenés mi calendario directo: {cls.CALENDAR_LINK}"
        
        return response
    
    @classmethod
    def should_use_llm(cls, intencion: IntencionType, confidence: float, 
                      texto: str, turno: int) -> bool:
        """
        Determina si debe usar LLM para casos complejos
        """
        # Usar LLM si:
        # 1. Confidence muy bajo (no detectó intención clara)
        # 2. Mensaje muy largo y complejo
        # 3. Intención específica de consulta de servicio con detalles técnicos
        # 4. A partir del turno 3 para mantener conversación natural
        
        if confidence < 0.3:
            return True
        
        if len(texto.split()) > 20:
            return True
        
        if intencion == IntencionType.CONSULTAR_SERVICIO and len(texto.split()) > 10:
            return True
        
        if turno >= 3 and intencion not in [IntencionType.SALUDO, IntencionType.AGENDAR]:
            return True
        
        return False 