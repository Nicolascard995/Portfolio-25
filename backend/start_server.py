#!/usr/bin/env python3
"""
Script de inicio para Cloud Run
"""
import os
import uvicorn

if __name__ == "__main__":
    # Obtener el puerto de la variable de entorno PORT (Cloud Run)
    port = int(os.getenv("PORT", 8080))
    
    print(f"🚀 Iniciando DozoTech Backend en puerto {port}")
    print(f"📁 Directorio actual: {os.getcwd()}")
    
    # Iniciar el servidor
    uvicorn.run(
        "app.main:app",
        host="0.0.0.0",
        port=port,
        log_level="info"
    ) 