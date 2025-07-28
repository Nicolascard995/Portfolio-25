from sqlalchemy import Column, Integer, String, Text, DateTime, Boolean
from sqlalchemy.sql import func
from app.db.base import Base


class Lead(Base):
    """
    Modelo para captura de leads del portafolio
    """
    __tablename__ = "leads"
    
    id = Column(Integer, primary_key=True, index=True)
    nombre = Column(String(100), nullable=False, index=True)
    email = Column(String(255), nullable=False, index=True)
    mensaje = Column(Text, nullable=True)
    telefono = Column(String(20), nullable=True)
    empresa = Column(String(100), nullable=True)
    sector = Column(String(50), nullable=True)
    
    # Metadatos
    fecha_creacion = Column(DateTime(timezone=True), server_default=func.now())
    ip_address = Column(String(45), nullable=True)  # IPv6 compatible
    user_agent = Column(String(500), nullable=True)
    processed = Column(Boolean, default=False, nullable=False)
    
    def __repr__(self):
        return f"<Lead(id={self.id}, nombre='{self.nombre}', email='{self.email}')>"


class BlogPost(Base):
    """
    Modelo para artículos del blog
    """
    __tablename__ = "blog_posts"
    
    id = Column(Integer, primary_key=True, index=True)
    titulo = Column(String(200), nullable=False, index=True)
    slug = Column(String(250), nullable=False, unique=True, index=True)
    resumen = Column(String(500), nullable=True)
    contenido = Column(Text, nullable=False)
    
    # Metadatos de contenido
    categoria = Column(String(50), nullable=True, index=True)
    tags = Column(String(500), nullable=True)  # JSON string de tags
    imagen_url = Column(String(500), nullable=True)
    
    # Metadatos de publicación
    publicado = Column(Boolean, default=False, nullable=False)
    fecha_creacion = Column(DateTime(timezone=True), server_default=func.now())
    fecha_actualizacion = Column(DateTime(timezone=True), onupdate=func.now())
    fecha_publicacion = Column(DateTime(timezone=True), nullable=True)
    
    # SEO
    meta_description = Column(String(160), nullable=True)
    meta_keywords = Column(String(500), nullable=True)
    
    # Analytics
    vistas = Column(Integer, default=0, nullable=False)
    
    def __repr__(self):
        return f"<BlogPost(id={self.id}, titulo='{self.titulo}', publicado={self.publicado})>"


class SessionControl(Base):
    """
    Modelo para controlar límites de interacción por sesión
    """
    __tablename__ = "session_control"
    
    id = Column(Integer, primary_key=True, index=True)
    session_id = Column(String(50), nullable=False, unique=True, index=True)
    turnos_count = Column(Integer, default=0, nullable=False)
    limite_turnos = Column(Integer, default=5, nullable=False)
    tipo_bot = Column(String(20), default="sales", nullable=False)  # 'sales', 'chat', 'analyze'
    
    # Control de estado
    esta_activa = Column(Boolean, default=True, nullable=False)
    cita_agendada = Column(Boolean, default=False, nullable=False)
    lead_capturado = Column(Boolean, default=False, nullable=False)
    
    # Metadatos
    fecha_creacion = Column(DateTime(timezone=True), server_default=func.now())
    fecha_ultimo_mensaje = Column(DateTime(timezone=True), server_default=func.now())
    ip_address = Column(String(45), nullable=True)
    
    def __repr__(self):
        return f"<SessionControl(session_id='{self.session_id}', turnos={self.turnos_count}/{self.limite_turnos})>"


class ChatLog(Base):
    """
    Modelo para registrar interacciones del chatbot
    """
    __tablename__ = "chat_logs"
    
    id = Column(Integer, primary_key=True, index=True)
    session_id = Column(String(50), nullable=False, index=True)
    tipo_interaccion = Column(String(20), nullable=False)  # 'chat', 'analyze', 'sales_chat'
    
    # Datos de entrada
    mensaje_usuario = Column(Text, nullable=True)
    archivo_nombre = Column(String(255), nullable=True)
    archivo_tipo = Column(String(10), nullable=True)
    
    # Datos de salida
    respuesta_llm = Column(Text, nullable=True)
    modelo_usado = Column(String(50), nullable=True)  # 'local', 'openai', 'hybrid'
    tokens_utilizados = Column(Integer, nullable=True)
    
    # Nuevos campos para optimización
    intencion_detectada = Column(String(30), nullable=True)  # 'agendar', 'compra', 'saludo', etc.
    respuesta_tipo = Column(String(20), nullable=True)  # 'predefinida', 'llm', 'hibrida'
    
    # Metadatos
    fecha_creacion = Column(DateTime(timezone=True), server_default=func.now())
    tiempo_respuesta = Column(Integer, nullable=True)  # En millisegundos
    ip_address = Column(String(45), nullable=True)
    
    def __repr__(self):
        return f"<ChatLog(id={self.id}, tipo='{self.tipo_interaccion}', modelo='{self.modelo_usado}')>" 