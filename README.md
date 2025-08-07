# Dozo.Tech Portfolio - Backend

Backend API para el portafolio de Dozo.Tech, construido con FastAPI y Supabase.

## 🚀 Configuración Rápida

### Configuración del Backend

1. **Clonar el repositorio**:
   ```bash
   git clone <repository-url>
   cd dozotech_pf/backend
   ```

2. **Crear entorno virtual**:
   ```bash
   python -m venv venv
   source venv/bin/activate  # En Windows: venv\Scripts\activate
   ```

3. **Instalar dependencias**:
   ```bash
   pip install -r requirements.txt
   # O si usas uv:
   uv sync
   ```

4. **Configurar Supabase**:
   ```bash
   # Crear proyecto en Supabase (https://supabase.com)
   # Ejecutar el script supabase_schema.sql en el SQL Editor
   ```

5. **Configurar variables de entorno**:
   ```bash
   cp env.example .env
   # Editar .env con tus credenciales de Supabase
   ```

6. **Ejecutar el servidor**:
   ```bash
   uvicorn app.main:app --reload
   ```

### Configuración del Frontend

1. **Instalar dependencias**:
   ```bash
   cd frontend
   npm install
   ```

2. **Configurar variables de entorno**:
   ```bash
   cp env.example .env.local
   # Editar .env.local con la URL del backend
   ```

3. **Ejecutar en desarrollo**:
   ```bash
   npm run dev
   ```

---

## 📁 Estructura del Proyecto

```
dozotech_pf/
├── backend/
│   ├── app/
│   │   ├── core/ (configuración, dependencias de IA)
│   │   ├── db/ (conexión a Supabase)
│   │   ├── api/ (endpoints: chatbot, leads, blog)
│   │   ├── main.py (aplicación FastAPI principal)
│   │   └── __init__.py
│   ├── pyproject.toml
│   ├── env.example
│   ├── supabase_schema.sql
│   └── Dockerfile
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/ (Inicio, Soluciones IA, Proyectos, Blog, Contacto)
│   │   ├── styles/
│   │   └── App.js (o index.js)
│   ├── package.json
│   ├── env.example
│   └── next.config.js
├── docker-compose.yml
├── .gitignore
└── README.md
```

---

## 🔧 Dependencias Clave

### Backend (FastAPI)
- `fastapi`, `uvicorn`: Base del API
- `supabase`: Base de datos en la nube
- `pydantic-settings`, `python-dotenv`: Configuración
- `httpx`: Llamadas a APIs externas de LLMs
- `pandas`, `openpyxl`, `xlrd`: Procesamiento de datos
- `openai`: Integración con ChatGPT

### Frontend (React/Next.js)
- `react`, `react-dom`, `next`: Frameworks UI
- `tailwindcss`: Diseño responsivo
- `axios`: Comunicación con backend
- `lucide-react`: Iconos
- `next-intl`: Internacionalización

---

## 🛡️ Seguridad

### Variables de Entorno Requeridas

**Backend (.env)**:
```env
# Supabase Configuration
SUPABASE_URL=your_supabase_project_url
SUPABASE_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

# OpenAI Configuration
OPENAI_API_KEY=your_openai_api_key

# Security
SECRET_KEY=your-secret-key-change-in-production
```

**Frontend (.env.local)**:
```env
NEXT_PUBLIC_API_URL=http://localhost:8000
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### Archivos Sensibles (NO subir a Git)
- `backend/.env`
- `secrets/` (cualquier archivo de credenciales)
- `backend/.venv/`
- `frontend/node_modules/`
- `frontend/.next/`

---

## 🚀 Despliegue

### Backend
- **VPS**: Usar Docker o directamente con uvicorn
- **Cloud**: Google Cloud Run, AWS ECS, Heroku
- **Subdominio**: `api.dozo.tech`

### Frontend
- **Vercel**: Despliegue automático desde GitHub
- **Netlify**: Alternativa gratuita
- **Dominio**: `dozo.tech`

### Base de Datos
- **ElephantSQL**: PostgreSQL gestionado
- **Supabase**: Alternativa con más funcionalidades
- **Google Cloud SQL**: Para proyectos empresariales

---

## 📝 Desarrollo

### Comandos Útiles

```bash
# Backend
cd backend
uvicorn app.main:app --reload  # Desarrollo
pytest  # Tests
black .  # Formateo de código
isort .  # Ordenar imports

# Frontend
cd frontend
npm run dev  # Desarrollo
npm run build  # Build de producción
npm run lint  # Linting
```

### Estructura de APIs

- `GET /health`: Verificación de estado
- `POST /chatbot/analyze`: Análisis de datos con IA
- `POST /chatbot/chat`: Chat con IA
- `POST /leads`: Captura de leads
- `GET /blog/posts`: Lista de artículos del blog

---

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

---

## 📞 Contacto

- **Email**: nicolas@dozo.tech
- **Sitio Web**: [dozo.tech](https://dozo.tech)
- **LinkedIn**: [Nicolás Cardozo](https://linkedin.com/in/nicolascardozo)

---

> Este portafolio demuestra la fusión única entre experiencia práctica en gestión y tecnología de vanguardia, posicionando Dozo.Tech como el arquitecto de eficiencia que las PYMES necesitan en la era de la IA. 