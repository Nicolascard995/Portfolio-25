# Despliegue en Render

## Configuración Actual

### Frontend (Next.js)
- **URL**: https://dozotech-frontend.onrender.com
- **Tipo**: Static Site
- **Build Command**: `npm ci && npm run build`
- **Publish Path**: `./out`

### Backend (FastAPI)
- **URL**: https://dozotech-backend.onrender.com
- **Tipo**: Web Service
- **Build Command**: `pip install -r requirements.txt`
- **Start Command**: `uvicorn app.main:app --host 0.0.0.0 --port $PORT --workers 1`

### Base de Datos
- **Nombre**: dozotech-db
- **Tipo**: PostgreSQL
- **Usuario**: dozotech_user

## Variables de Entorno

### Frontend
- `NEXT_PUBLIC_BACKEND_URL`: https://dozotech-backend.onrender.com
- `NEXT_PUBLIC_SITE_URL`: https://dozotech-frontend.onrender.com
- `NEXT_PUBLIC_API_URL`: https://dozotech-backend.onrender.com
- `NODE_ENV`: production
- `NEXT_TELEMETRY_DISABLED`: 1

### Backend
- `DATABASE_URL`: (automático desde la base de datos)
- `OPENAI_API_KEY`: (configurar manualmente)
- `SECRET_KEY`: (generado automáticamente)
- `CORS_ORIGINS`: https://dozotech-frontend.onrender.com,https://dozo.tech,https://www.dozo.tech
- `ENVIRONMENT`: production
- `LOG_LEVEL`: INFO

## Pasos para Desplegar

1. **Conectar repositorio a Render**:
   - Ir a [render.com](https://render.com)
   - Conectar tu repositorio de GitHub
   - Render detectará automáticamente los archivos `render.yaml`

2. **Configurar variables de entorno**:
   - En el servicio del backend, agregar `OPENAI_API_KEY` con tu clave de OpenAI

3. **Desplegar servicios**:
   - Render desplegará automáticamente ambos servicios
   - El backend se desplegará primero
   - El frontend se desplegará después

4. **Verificar despliegue**:
   - Backend: https://dozotech-backend.onrender.com/health
   - Frontend: https://dozotech-frontend.onrender.com

## Configuración de DNS

Una vez que los servicios estén desplegados, podrás configurar tu DNS:

1. **Registrar dominio**: dozo.tech
2. **Configurar CNAME**:
   - `www.dozo.tech` → `dozotech-frontend.onrender.com`
   - `api.dozo.tech` → `dozotech-backend.onrender.com`

## Monitoreo

- **Health Check**: https://dozotech-backend.onrender.com/health
- **Logs**: Disponibles en el dashboard de Render
- **Métricas**: Render proporciona métricas básicas de uso

## Optimizaciones Implementadas

### Frontend
- Export estático para mejor rendimiento
- Headers de cache optimizados
- Imágenes no optimizadas (requerido para export estático)
- Telemetría deshabilitada

### Backend
- Workers limitados a 1 (plan gratuito)
- Health check endpoint
- Auto-deploy habilitado
- CORS configurado para dominios de producción

## Notas Importantes

- El plan gratuito de Render tiene limitaciones de tiempo de ejecución
- Los servicios pueden "dormir" después de 15 minutos de inactividad
- La base de datos PostgreSQL tiene un límite de 1GB en el plan gratuito
- Considera actualizar a un plan pagado para producción 