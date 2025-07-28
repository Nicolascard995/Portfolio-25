from fastapi import APIRouter, HTTPException, Depends, Request
from sqlalchemy.orm import Session
from typing import List
import datetime

from app.api.schemas import LeadCreate, LeadResponse, MessageResponse
from app.core.config import settings
from app.db.base import get_db
from app.db.models import Lead

router = APIRouter()


@router.post("/", response_model=LeadResponse)
async def create_lead(
    lead_data: LeadCreate,
    request: Request,
    db: Session = Depends(get_db)
):
    """
    Crear un nuevo lead desde el formulario de contacto
    """
    try:
        # Obtener información adicional de la request
        client_ip = request.client.host
        user_agent = request.headers.get("user-agent", "")
        
        # Crear nuevo lead
        new_lead = Lead(
            nombre=lead_data.nombre,
            email=lead_data.email,
            mensaje=lead_data.mensaje,
            telefono=lead_data.telefono,
            empresa=lead_data.empresa,
            sector=lead_data.sector,
            ip_address=client_ip,
            user_agent=user_agent[:500] if user_agent else None  # Limitar tamaño
        )
        
        db.add(new_lead)
        db.commit()
        db.refresh(new_lead)
        
        # TODO: Enviar notificación por email a nicolas@dozo.tech
        # await send_lead_notification(new_lead)
        
        return LeadResponse(
            mensaje="¡Gracias por tu interés en Dozo.Tech! Te contactaré pronto para explorar cómo puedo ayudarte a optimizar tu negocio con IA.",
            lead_id=new_lead.id,
            fecha_creacion=new_lead.fecha_creacion
        )
        
    except Exception as e:
        db.rollback()
        raise HTTPException(
            status_code=500,
            detail=f"Error al procesar tu solicitud: {str(e)}"
        )


@router.get("/demo-leads")
async def get_demo_leads():
    """
    Endpoint demo para mostrar ejemplos de leads típicos
    """
    demo_leads = [
        {
            "nombre": "María González",
            "empresa": "Restaurante La Cocina",
            "sector": "Gastronomía",
            "mensaje": "Necesito automatizar el inventario y pedidos",
            "fecha": "2024-01-15"
        },
        {
            "nombre": "Carlos Ruiz",
            "empresa": "Boutique Fashion",
            "sector": "Retail",
            "mensaje": "Quiero implementar análisis predictivo de ventas",
            "fecha": "2024-01-18"
        },
        {
            "nombre": "Ana Silva",
            "empresa": "Clínica Dental Sonrisa",
            "sector": "Salud",
            "mensaje": "Automatizar agendamiento y seguimiento de pacientes",
            "fecha": "2024-01-20"
        },
        {
            "nombre": "Jorge Mendoza",
            "empresa": "Transportes Express",
            "sector": "Logística",
            "mensaje": "Optimizar rutas y gestión de flota con IA",
            "fecha": "2024-01-22"
        }
    ]
    
    return {
        "mensaje": "Ejemplos de leads típicos que recibe Dozo.Tech",
        "total_leads": len(demo_leads),
        "leads": demo_leads,
        "nota": "Estos son ejemplos del tipo de negocios que buscan automatización con IA"
    }


@router.get("/stats")
async def get_lead_stats(db: Session = Depends(get_db)):
    """
    Estadísticas básicas de leads (para dashboard administrativo)
    """
    try:
        total_leads = db.query(Lead).count()
        leads_today = db.query(Lead).filter(
            Lead.fecha_creacion >= datetime.date.today()
        ).count()
        
        # Distribución por sector
        sectores = db.query(Lead.sector).filter(Lead.sector.isnot(None)).all()
        sector_count = {}
        for (sector,) in sectores:
            sector_count[sector] = sector_count.get(sector, 0) + 1
        
        return {
            "total_leads": total_leads,
            "leads_hoy": leads_today,
            "distribucion_sectores": sector_count,
            "mensaje": "Estadísticas de Dozo.Tech - Generando interés en automatización con IA"
        }
        
    except Exception as e:
        return {
            "error": "Error al obtener estadísticas",
            "detalle": str(e),
            "demo_stats": {
                "total_leads": 47,
                "leads_hoy": 3,
                "distribucion_sectores": {
                    "Gastronomía": 18,
                    "Retail": 12,
                    "Salud": 8,
                    "Logística": 5,
                    "Servicios": 4
                }
            }
        }


@router.post("/contact-demo")
async def contact_demo():
    """
    Simulación de envío de formulario de contacto para demos
    """
    import random
    
    sectores = ["Gastronomía", "Retail", "Salud", "Logística", "Servicios", "Manufactura"]
    nombres = ["Ana García", "Luis Pérez", "María Rodríguez", "Carlos López", "Sofia Martínez"]
    
    demo_lead = {
        "nombre": random.choice(nombres),
        "email": f"demo{random.randint(100,999)}@empresa.com",
        "empresa": f"Empresa Demo {random.randint(1,50)}",
        "sector": random.choice(sectores),
        "mensaje": "Estoy interesado en automatizar mis procesos con IA",
        "estado": "Procesado correctamente"
    }
    
    return {
        "mensaje": "✅ Lead demo creado exitosamente",
        "lead": demo_lead,
        "siguiente_paso": "Nicolás se contactará en las próximas 24 horas",
        "nota": "En producción, esto se guardaría en la base de datos y enviaría una notificación"
    }


async def send_lead_notification(lead: Lead):
    """
    Función placeholder para enviar notificación de nuevo lead
    En producción, aquí se implementaría el envío de email
    """
    # TODO: Implementar con SMTP o servicio de email
    print(f"📧 Nuevo lead: {lead.nombre} ({lead.email}) - {lead.empresa}")
    pass 