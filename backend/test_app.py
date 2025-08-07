#!/usr/bin/env python3
"""
Script de prueba para verificar que la aplicación puede iniciar correctamente
"""
import os
import sys

print("🔍 Iniciando prueba de la aplicación...")
print(f"📁 Directorio actual: {os.getcwd()}")
print(f"🐍 Python version: {sys.version}")

try:
    print("📦 Importando módulos...")
    from app.main import app
    print("✅ App importada correctamente")
    
    print("🔧 Verificando configuración...")
    from app.core.config import settings
    print(f"✅ Configuración cargada: {settings.PROJECT_NAME}")
    
    print("🚀 Iniciando servidor de prueba...")
    import uvicorn
    
    # Usar puerto de la variable de entorno o 8000 por defecto
    port = int(os.getenv("PORT", 8000))
    print(f"🌐 Escuchando en puerto: {port}")
    
    uvicorn.run(
        "app.main:app",
        host="0.0.0.0",
        port=port,
        log_level="info"
    )
    
except Exception as e:
    print(f"❌ Error: {e}")
    import traceback
    traceback.print_exc()
    sys.exit(1) 