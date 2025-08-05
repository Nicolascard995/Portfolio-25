#!/bin/bash

echo "🔍 Verificando configuración para despliegue en Render..."

# Verificar que los archivos render.yaml existen
echo "📋 Verificando archivos render.yaml..."
if [ -f "frontend/render.yaml" ]; then
    echo "✅ frontend/render.yaml encontrado"
else
    echo "❌ frontend/render.yaml no encontrado"
    exit 1
fi

if [ -f "backend/render.yaml" ]; then
    echo "✅ backend/render.yaml encontrado"
else
    echo "❌ backend/render.yaml no encontrado"
    exit 1
fi

# Verificar package.json del frontend
echo "📦 Verificando package.json del frontend..."
if [ -f "frontend/package.json" ]; then
    echo "✅ frontend/package.json encontrado"
    if grep -q '"build"' frontend/package.json; then
        echo "✅ Script de build encontrado"
    else
        echo "❌ Script de build no encontrado"
        exit 1
    fi
else
    echo "❌ frontend/package.json no encontrado"
    exit 1
fi

# Verificar requirements.txt del backend
echo "🐍 Verificando requirements.txt del backend..."
if [ -f "backend/requirements.txt" ]; then
    echo "✅ backend/requirements.txt encontrado"
else
    echo "❌ backend/requirements.txt no encontrado"
    exit 1
fi

# Verificar next.config.js
echo "⚙️ Verificando next.config.js..."
if [ -f "frontend/next.config.js" ]; then
    echo "✅ next.config.js encontrado"
    if grep -q "output: 'export'" frontend/next.config.js; then
        echo "✅ Configuración de export estático encontrada"
    else
        echo "❌ Configuración de export estático no encontrada"
        exit 1
    fi
else
    echo "❌ next.config.js no encontrado"
    exit 1
fi

# Verificar que el backend tenga un endpoint de health
echo "🏥 Verificando endpoint de health..."
if grep -q "@app.get(\"/health\")" backend/app/main.py; then
    echo "✅ Endpoint de health encontrado"
else
    echo "❌ Endpoint de health no encontrado"
    exit 1
fi

echo ""
echo "🎉 ¡Todo listo para el despliegue!"
echo ""
echo "📋 Próximos pasos:"
echo "1. Subir cambios a GitHub"
echo "2. Conectar repositorio a Render"
echo "3. Configurar OPENAI_API_KEY en el backend"
echo "4. Esperar a que se complete el despliegue"
echo ""
echo "🔗 URLs esperadas:"
echo "- Frontend: https://dozotech-frontend.onrender.com"
echo "- Backend: https://dozotech-backend.onrender.com"
echo "- Health Check: https://dozotech-backend.onrender.com/health" 