#!/bin/bash

# Script para activar el entorno virtual automáticamente
# Uso: source activate-venv.sh

echo "🐍 Activando entorno virtual..."

# Verificar si el entorno virtual existe
if [ ! -d "venv" ]; then
    echo "❌ Error: No se encontró el entorno virtual 'venv'"
    echo "📦 Creando nuevo entorno virtual..."
    python3 -m venv venv
fi

# Activar el entorno virtual
source venv/bin/activate

# Verificar que se activó correctamente
if [ "$VIRTUAL_ENV" != "" ]; then
    echo "✅ Entorno virtual activado: $VIRTUAL_ENV"
    echo "🐍 Python: $(which python)"
    echo "📦 Pip: $(which pip)"
    
    # Instalar dependencias si no están instaladas
    if [ ! -f "venv/lib/python*/site-packages/fastapi" ]; then
        echo "📥 Instalando dependencias..."
        pip install -r requirements.txt
    fi
    
    echo ""
    echo "🚀 ¡Listo para desarrollar!"
    echo "💡 Comandos útiles:"
    echo "   - python -m uvicorn app.main:app --reload  # Servidor de desarrollo"
    echo "   - ./deploy-cloud-run.sh                     # Desplegar en Cloud Run"
    echo "   - deactivate                                # Desactivar entorno virtual"
else
    echo "❌ Error: No se pudo activar el entorno virtual"
    exit 1
fi 