from pydantic import BaseModel, EmailStr, Field, validator
from typing import Optional, List, Any, Dict
from datetime import datetime
from enum import Enum


# Esquemas para Chatbot
class ChatRequest(BaseModel):
    """
    Esquema para solicitudes de chat
    """
    mensaje: str = Field(..., min_length=1, max_length=1000, description="Mensaje del usuario")
    session_id: Optional[str] = Field(None, description="ID de sesión para mantener contexto")


class FileAnalysisRequest(BaseModel):
    """
    Esquema para análisis de archivos
    """
    prompt: str = Field(..., min_length=1, max_length=500, description="Pregunta o instrucción para el análisis")
    session_id: Optional[str] = Field(None, description="ID de sesión")
    
    class Config:
        json_schema_extra = {
            "example": {
                "prompt": "Analiza las ventas mensuales y dame insights sobre tendencias",
                "session_id": "sess_123"
            }
        }


class LLMModel(str, Enum):
    """
    Modelos de LLM disponibles
    """
    OPENAI = "openai"
    PYTORCH = "pytorch"
    FALLBACK = "fallback"
    LOCAL = "local"
    HYBRID = "hybrid"


class ChatResponse(BaseModel):
    """
    Respuesta del chatbot
    """
    respuesta: str = Field(..., description="Respuesta del LLM")
    modelo_usado: LLMModel = Field(..., description="Modelo utilizado")
    tokens_utilizados: Optional[int] = Field(None, description="Tokens consumidos")
    tiempo_respuesta: Optional[float] = Field(None, description="Tiempo de respuesta en segundos")
    session_id: str = Field(..., description="ID de sesión")
    datos_grafico: Optional[Dict[str, Any]] = Field(None, description="Datos para gráficos si aplica")
    metadata: Optional[Dict[str, Any]] = Field(None, description="Metadatos adicionales del modelo")


# Esquemas para Leads
class LeadCreate(BaseModel):
    """
    Esquema para crear un lead
    """
    nombre: str = Field(..., min_length=2, max_length=100, description="Nombre completo")
    email: EmailStr = Field(..., description="Email válido")
    mensaje: Optional[str] = Field(None, max_length=1000, description="Mensaje opcional")
    telefono: Optional[str] = Field(None, max_length=20, description="Teléfono opcional")
    empresa: Optional[str] = Field(None, max_length=100, description="Empresa opcional")
    sector: Optional[str] = Field(None, max_length=50, description="Sector de la empresa")
    
    @validator('telefono')
    def validate_phone(cls, v):
        if v and not v.replace('+', '').replace('-', '').replace(' ', '').replace('(', '').replace(')', '').isdigit():
            raise ValueError('Formato de teléfono inválido')
        return v
    
    class Config:
        json_schema_extra = {
            "example": {
                "nombre": "Juan Pérez",
                "email": "juan@empresa.com",
                "mensaje": "Me interesa automatizar mi restaurante",
                "telefono": "+56 9 1234 5678",
                "empresa": "Restaurante El Buen Sabor",
                "sector": "Gastronomía"
            }
        }


class LeadResponse(BaseModel):
    """
    Respuesta después de crear un lead
    """
    mensaje: str = Field(..., description="Mensaje de confirmación")
    lead_id: int = Field(..., description="ID del lead creado")
    fecha_creacion: datetime = Field(..., description="Fecha de creación")


# Esquemas para Blog
class BlogPostCreate(BaseModel):
    """
    Esquema para crear un artículo de blog
    """
    titulo: str = Field(..., min_length=5, max_length=200, description="Título del artículo")
    slug: str = Field(..., min_length=5, max_length=250, description="Slug único para URL")
    resumen: Optional[str] = Field(None, max_length=500, description="Resumen del artículo")
    contenido: str = Field(..., min_length=100, description="Contenido completo en Markdown")
    categoria: Optional[str] = Field(None, max_length=50, description="Categoría del artículo")
    tags: Optional[List[str]] = Field(None, description="Lista de tags")
    imagen_url: Optional[str] = Field(None, max_length=500, description="URL de imagen destacada")
    publicado: bool = Field(False, description="Si está publicado o es borrador")
    meta_description: Optional[str] = Field(None, max_length=160, description="Meta descripción para SEO")
    meta_keywords: Optional[str] = Field(None, max_length=500, description="Palabras clave para SEO")
    
    @validator('slug')
    def validate_slug(cls, v):
        if not v.replace('-', '').replace('_', '').replace('.', '').isalnum():
            raise ValueError('El slug solo puede contener letras, números, guiones y puntos')
        return v.lower()


class BlogPostResponse(BaseModel):
    """
    Esquema para respuesta de artículo de blog
    """
    id: int
    titulo: str
    slug: str
    resumen: Optional[str]
    contenido: str
    categoria: Optional[str]
    tags: Optional[List[str]]
    imagen_url: Optional[str]
    publicado: bool
    fecha_creacion: datetime
    fecha_actualizacion: Optional[datetime]
    fecha_publicacion: Optional[datetime]
    vistas: int
    
    class Config:
        from_attributes = True


class BlogPostSummary(BaseModel):
    """
    Esquema para lista resumida de artículos
    """
    id: int
    titulo: str
    slug: str
    resumen: Optional[str]
    categoria: Optional[str]
    imagen_url: Optional[str]
    fecha_publicacion: Optional[datetime]
    vistas: int
    
    class Config:
        from_attributes = True


# Esquemas generales
class MessageResponse(BaseModel):
    """
    Respuesta general con mensaje
    """
    mensaje: str = Field(..., description="Mensaje de respuesta")
    exito: bool = Field(True, description="Indica si la operación fue exitosa")
    datos: Optional[Dict[str, Any]] = Field(None, description="Datos adicionales opcionales")


class ErrorResponse(BaseModel):
    """
    Esquema para respuestas de error
    """
    mensaje: str = Field(..., description="Mensaje de error")
    codigo: str = Field(..., description="Código de error")
    detalles: Optional[str] = Field(None, description="Detalles adicionales del error")


# Nuevos esquemas para Sales Bot Optimizado
class SessionControlResponse(BaseModel):
    """
    Esquema para respuesta de control de sesión
    """
    session_id: str = Field(..., description="ID de sesión")
    turnos_count: int = Field(..., description="Número de turnos usados")
    limite_turnos: int = Field(..., description="Límite máximo de turnos")
    esta_activa: bool = Field(..., description="Si la sesión está activa")
    cita_agendada: bool = Field(..., description="Si se agendó una cita")
    lead_capturado: bool = Field(..., description="Si se capturó un lead")
    tipo_bot: str = Field(..., description="Tipo de bot usado")


class SalesAnalyticsResponse(BaseModel):
    """
    Esquema para analytics del bot de ventas
    """
    total_sessions: int = Field(..., description="Total de sesiones")
    appointments_scheduled: int = Field(..., description="Citas agendadas")
    leads_captured: int = Field(..., description="Leads capturados")
    conversion_rate: float = Field(..., description="Tasa de conversión a citas")
    lead_rate: float = Field(..., description="Tasa de captura de leads")
    intentions_breakdown: List[Dict[str, Any]] = Field(..., description="Desglose por intenciones")
    model_usage: List[Dict[str, Any]] = Field(..., description="Uso por modelo")
    optimization_benefits: Dict[str, str] = Field(..., description="Beneficios de optimización")


class OptimizedChatResponse(ChatResponse):
    """
    Respuesta extendida del chatbot optimizado con metadata adicional
    """
    metadata: Optional[Dict[str, Any]] = Field(None, description="Metadatos adicionales del modelo optimizado")
    
    class Config:
        json_schema_extra = {
            "example": {
                "respuesta": "¡Hola! ¿Te gustaría agendar una llamada para ver cómo ayudarte con automatización?",
                "modelo_usado": "local",
                "tokens_utilizados": 0,
                "tiempo_respuesta": 0.01,
                "session_id": "sess_123",
                "metadata": {
                    "intention": "saludo",
                    "confidence": 0.9,
                    "response_type": "predefined",
                    "conversation_count": 1,
                    "appointment_created": False,
                    "calendar_link": None,
                    "model_strategy": "hybrid_optimized"
                }
            }
        } 