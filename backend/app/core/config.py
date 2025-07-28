from pydantic_settings import BaseSettings
from typing import Optional
from dotenv import load_dotenv
import os

load_dotenv()  # Carga las variables del .env

OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")


class Settings(BaseSettings):
    """
    Configuración principal de la aplicación Dozo.Tech
    """
    # Información de la aplicación
    PROJECT_NAME: str = "Dozo.Tech API"
    VERSION: str = "0.1.0"
    DESCRIPTION: str = "Backend API para el portafolio de Dozo.Tech - Inteligencia en Acción para tu Negocio"
    
    # Base de datos
    DATABASE_URL: str = "postgresql://user:password@localhost:5432/dozotech_db"
    
    # APIs de LLMs
    OPENAI_API_KEY: Optional[str] = OPENAI_API_KEY
    OPENAI_API_URL: str = "https://api.openai.com/v1/chat/completions"
    
    # N8N Configuration
    N8N_WEBHOOK_URL: Optional[str] = None
    N8N_API_KEY: Optional[str] = None
    
    # Configuración de CORS
    ALLOWED_HOSTS: list[str] = ["localhost", "127.0.0.1", "dozo.tech", "*.dozo.tech"]
    CORS_ORIGINS: list[str] = [
        "http://localhost:3000",
        "http://localhost:3001", 
        "https://dozo.tech",
        "https://www.dozo.tech"
    ]
    
    # Configuración de archivos
    MAX_FILE_SIZE: int = 10 * 1024 * 1024  # 10MB
    ALLOWED_FILE_TYPES: list[str] = [".csv", ".xlsx", ".xls", ".json", ".txt"]
    
    # Configuración de seguridad
    SECRET_KEY: str = "your-secret-key-change-in-production"
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 30
    
    # Email configuration (para notificaciones de leads)
    SMTP_SERVER: Optional[str] = None
    SMTP_PORT: int = 587
    SMTP_USERNAME: Optional[str] = None
    SMTP_PASSWORD: Optional[str] = None
    
    # Rate limiting
    RATE_LIMIT_PER_MINUTE: int = 60
    
    # Google Calendar
    GOOGLE_CALENDAR_CREDENTIALS: Optional[str] = os.getenv("GOOGLE_CALENDAR_CREDENTIALS")  # Ruta al archivo JSON de credenciales
    GOOGLE_CALENDAR_ID: Optional[str] = os.getenv("GOOGLE_CALENDAR_ID")  # ID del calendario
    
    class Config:
        env_file = ".env"
        case_sensitive = True


# Instancia global de configuración
settings = Settings() 