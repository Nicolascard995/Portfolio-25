#!/bin/bash

# Script de despliegue para Google Cloud Run
# Uso: ./deploy-cloud-run.sh [PROJECT_ID] [REGION] [SERVICE_NAME]

set -e

# Configuración por defecto
DEFAULT_PROJECT_ID="intelligent-map-468120-h8"
DEFAULT_REGION="us-central1"
DEFAULT_SERVICE_NAME="dozotech-backend"

# Obtener parámetros
PROJECT_ID=${1:-$DEFAULT_PROJECT_ID}
REGION=${2:-$DEFAULT_REGION}
SERVICE_NAME=${3:-$DEFAULT_SERVICE_NAME}

echo "🚀 Iniciando despliegue en Google Cloud Run..."
echo "📋 Configuración:"
echo "   - Proyecto: $PROJECT_ID"
echo "   - Región: $REGION"
echo "   - Servicio: $SERVICE_NAME"
echo ""

# Verificar que gcloud esté instalado
if ! command -v gcloud &> /dev/null; then
    echo "❌ Error: Google Cloud SDK no está instalado."
    echo "📥 Instala Google Cloud SDK desde: https://cloud.google.com/sdk/docs/install"
    exit 1
fi

# Verificar autenticación
echo "🔐 Verificando autenticación..."
if ! gcloud auth list --filter=status:ACTIVE --format="value(account)" | grep -q .; then
    echo "🔑 Iniciando sesión en Google Cloud..."
    gcloud auth login
fi

# Configurar proyecto
echo "⚙️  Configurando proyecto..."
gcloud config set project $PROJECT_ID

# Habilitar APIs necesarias
echo "🔧 Habilitando APIs necesarias..."
gcloud services enable cloudbuild.googleapis.com
gcloud services enable run.googleapis.com
gcloud services enable artifactregistry.googleapis.com

# Construir y subir imagen
echo "🏗️  Construyendo imagen Docker..."
IMAGE_NAME="gcr.io/$PROJECT_ID/$SERVICE_NAME"
gcloud builds submit --tag $IMAGE_NAME --region=$REGION .

# Desplegar en Cloud Run
echo "🚀 Desplegando en Cloud Run..."
gcloud run deploy $SERVICE_NAME \
    --image $IMAGE_NAME \
    --platform managed \
    --region $REGION \
    --allow-unauthenticated \
    --port 8080 \
    --memory 1Gi \
    --cpu 1 \
    --max-instances 10 \
    --timeout 300

# Obtener URL del servicio
SERVICE_URL=$(gcloud run services describe $SERVICE_NAME --region=$REGION --format="value(status.url)")

echo ""
echo "✅ ¡Despliegue completado exitosamente!"
echo "🌐 URL del servicio: $SERVICE_URL"
echo ""
echo "📝 Próximos pasos:"
echo "1. Configura las variables de entorno en la consola de Google Cloud Run:"
echo "   - SUPABASE_URL"
echo "   - SUPABASE_KEY"
echo "   - SUPABASE_SERVICE_ROLE_KEY"
echo "   - OPENAI_API_KEY"
echo "   - SECRET_KEY"
echo "   - GOOGLE_CALENDAR_ID (opcional)"
echo "   - SMTP_SERVER, SMTP_PORT, SMTP_USERNAME, SMTP_PASSWORD (opcional)"
echo ""
echo "2. Actualiza NEXT_PUBLIC_API_URL en tu frontend con:"
echo "   $SERVICE_URL"
echo ""
echo "3. Prueba el endpoint de salud:"
echo "   $SERVICE_URL/health" 