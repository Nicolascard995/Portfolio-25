# Backend Dozo.Tech

Backend de la aplicación Dozo.Tech construido con FastAPI y optimizado para Google Cloud Run.

## 🚀 Inicio Rápido

### 1. Activar Entorno Virtual
```bash
# Activar entorno virtual automáticamente
source activate-venv.sh

# O manualmente
source venv/bin/activate
```

### 2. Instalar Dependencias
```bash
pip install -r requirements.txt
```

### 3. Configurar Variables de Entorno
```bash
# Copiar archivo de ejemplo
cp env.example .env

# Editar variables de entorno
nano .env
```

### 4. Ejecutar Servidor de Desarrollo
```bash
# Con recarga automática
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000

# O usando el script
python -m uvicorn app.main:app --reload
```

## 📁 Estructura del Proyecto

```
backend/
├── app/
│   ├── api/
│   │   └── endpoints/          # Endpoints de la API
│   ├── core/
│   │   └── config.py          # Configuración de la aplicación
│   ├── db/
│   │   └── database.py        # Configuración de base de datos
│   ├── models/
│   │   └── ...                # Modelos de datos
│   └── main.py                # Punto de entrada de la aplicación
├── migrations/                 # Migraciones de base de datos
├── requirements.txt            # Dependencias de Python
├── Dockerfile                 # Configuración para Docker
├── .dockerignore              # Archivos a ignorar en Docker
├── deploy-cloud-run.sh        # Script de despliegue automático
├── activate-venv.sh           # Script para activar entorno virtual
└── GOOGLE_CLOUD_RUN_DEPLOYMENT.md  # Documentación de despliegue
```

## 🐳 Docker

### Construir Imagen Localmente
```bash
docker build -t dozotech-backend .
```

### Ejecutar Contenedor Localmente
```bash
docker run -p 8080:8080 --env-file .env dozotech-backend
```

## ☁️ Despliegue en Google Cloud Run

### Despliegue Automático
```bash
# Usar el script de despliegue
./deploy-cloud-run.sh TU_PROJECT_ID us-central1 dozotech-backend
```

### Despliegue Manual
```bash
# 1. Autenticación
gcloud auth login
gcloud config set project TU_PROJECT_ID

# 2. Construir y subir imagen
gcloud builds submit --tag gcr.io/TU_PROJECT_ID/dozotech-backend --region=us-central1 .

# 3. Desplegar en Cloud Run
gcloud run deploy dozotech-backend \
    --image gcr.io/TU_PROJECT_ID/dozotech-backend \
    --platform managed \
    --region us-central1 \
    --allow-unauthenticated \
    --port 8080
```

## 🔧 Configuración

### Variables de Entorno Requeridas

| Variable | Descripción | Ejemplo |
|----------|-------------|---------|
| `DATABASE_URL` | URL de conexión a Supabase | `postgresql://user:pass@host:port/db` |
| `OPENAI_API_KEY` | Clave de API de OpenAI | `sk-...` |
| `SECRET_KEY` | Clave secreta para JWT | `tu-clave-secreta-muy-segura` |
| `CORS_ORIGINS` | URLs permitidas para CORS | `https://dozo.tech,https://www.dozo.tech` |

### Variables Opcionales

| Variable | Descripción | Valor por Defecto |
|----------|-------------|-------------------|
| `ENVIRONMENT` | Entorno de ejecución | `production` |
| `LOG_LEVEL` | Nivel de logging | `info` |
| `PORT` | Puerto del servidor | `8080` |

## 📚 Documentación de la API

Una vez que el servidor esté ejecutándose:

- **Swagger UI**: http://localhost:8000/docs
- **ReDoc**: http://localhost:8000/redoc
- **OpenAPI JSON**: http://localhost:8000/api/v1/openapi.json

## 🧪 Pruebas

### Endpoint de Salud
```bash
curl http://localhost:8000/health
```

### Endpoints Principales
- `GET /` - Información del API
- `GET /health` - Estado del servicio
- `POST /api/v1/chatbot/chat` - Chatbot principal
- `POST /api/v1/chatbot/sales` - Chatbot de ventas
- `POST /api/v1/leads/` - Gestión de leads
- `GET /api/v1/blog/` - Endpoints del blog

## 🔍 Desarrollo

### Estructura de Endpoints
```python
# Ejemplo de endpoint
@router.post("/chat")
async def chat_with_bot(request: ChatRequest):
    # Lógica del chatbot
    return {"response": "Respuesta del bot"}
```

### Agregar Nuevos Endpoints
1. Crear archivo en `app/api/endpoints/`
2. Definir router con FastAPI
3. Importar en `app/main.py`
4. Incluir con `app.include_router()`

## 📊 Monitoreo

### Logs Locales
```bash
# Ver logs en tiempo real
tail -f logs/app.log
```

### Logs en Cloud Run
```bash
# Ver logs en tiempo real
gcloud logs tail --service=dozotech-backend --region=us-central1
```

## 🛠️ Comandos Útiles

```bash
# Activar entorno virtual
source activate-venv.sh

# Instalar dependencias
pip install -r requirements.txt

# Ejecutar servidor de desarrollo
uvicorn app.main:app --reload

# Ejecutar tests
pytest

# Verificar sintaxis
flake8 app/

# Formatear código
black app/

# Desplegar en Cloud Run
./deploy-cloud-run.sh

# Ver logs del servicio
gcloud logs tail --service=dozotech-backend --region=us-central1
```

## 🔒 Seguridad

### Recomendaciones
1. Nunca committear archivos `.env`
2. Usar variables de entorno para secretos
3. Configurar CORS apropiadamente
4. Implementar rate limiting
5. Monitorear logs regularmente

### Variables Sensibles
- `OPENAI_API_KEY`
- `SECRET_KEY`
- `DATABASE_URL`

## 📞 Soporte

Si encuentras problemas:
1. Revisa los logs en Google Cloud Console
2. Verifica la configuración de variables de entorno
3. Contacta a nicolas@dozo.tech

---

**⚠️ Importante**: Recuerda trabajar siempre en el entorno virtual durante el desarrollo local. 