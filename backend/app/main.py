import nltk

try:
    nltk.data.find('tokenizers/punkt')
except LookupError:
    nltk.download('punkt')

from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from app.core.config import settings
import time

# Importar routers
from app.api.endpoints import chatbot, leads, blog, sales_chatbot

app = FastAPI(
    title=settings.PROJECT_NAME,
    version=settings.VERSION,
    description=settings.DESCRIPTION,
    openapi_url="/api/v1/openapi.json",
    docs_url="/docs",
    redoc_url="/redoc"
)

# Configuración CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.CORS_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Middleware para logging de requests
@app.middleware("http")
async def log_requests(request: Request, call_next):
    start_time = time.time()
    response = await call_next(request)
    process_time = time.time() - start_time
    response.headers["X-Process-Time"] = str(process_time)
    return response


# Health check endpoint
@app.get("/health")
async def health_check():
    """
    Endpoint de verificación de salud del API
    """
    return {
        "status": "healthy",
        "service": settings.PROJECT_NAME,
        "version": settings.VERSION,
        "message": "Dozo.Tech API funcionando correctamente"
    }


# Root endpoint
@app.get("/")
async def root():
    """
    Endpoint raíz con información del API
    """
    return {
        "message": "Bienvenido a Dozo.Tech API",
        "description": "Inteligencia en Acción para tu Negocio",
        "version": settings.VERSION,
        "docs": "/docs",
        "health": "/health"
    }


# Exception handlers
@app.exception_handler(404)
async def not_found_handler(request: Request, exc):
    return JSONResponse(
        status_code=404,
        content={
            "message": "Endpoint no encontrado",
            "suggestion": "Visita /docs para ver la documentación completa del API"
        }
    )


@app.exception_handler(500)
async def internal_error_handler(request: Request, exc):
    return JSONResponse(
        status_code=500,
        content={
            "message": "Error interno del servidor",
            "suggestion": "Contacta a nicolas@dozo.tech si el problema persiste"
        }
    )


# Incluir routers
app.include_router(chatbot.router, prefix="/api/v1/chatbot", tags=["chatbot"])
app.include_router(sales_chatbot.router, prefix="/api/v1/chatbot", tags=["sales-chatbot"])
app.include_router(leads.router, prefix="/api/v1/leads", tags=["leads"])
app.include_router(blog.router, prefix="/api/v1/blog", tags=["blog"])


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(
        "app.main:app",
        host="0.0.0.0",
        port=8000,
        reload=True,
        log_level="info"
    ) 