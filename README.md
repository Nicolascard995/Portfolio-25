# Dozo.Tech – Inteligencia en Acción para tu Negocio

## Concepto Central

**Dozo.Tech** es tu aliado estratégico en eficiencia operativa y generación de insights para PYMES, fusionando experiencia práctica en gestión (gastronomía, emprendimiento) con el poder de la Ciencia de Datos y la Inteligencia Artificial.

### Propuesta de Valor Única (PVU)

> "En Dozo.Tech, transformo los desafíos operativos de tu negocio en ventajas competitivas. Mi experiencia como emprendedor y chef, combinada con Ciencia de Datos y Agentes de IA, me permite automatizar tareas, optimizar la gestión de personal y generar insights de mercado que impulsan la eficiencia y la rentabilidad. No solo te muestro los datos, te doy las herramientas para actuar."

---

## 🚀 Instalación y Configuración

### Prerrequisitos

- Python 3.11+
- Node.js 18+
- PostgreSQL
- Git

### Configuración del Backend

1. **Clonar el repositorio**:
   ```bash
   git clone <tu-repositorio>
   cd dozotech_pf
   ```

2. **Configurar el entorno virtual**:
   ```bash
   cd backend
   python -m venv .venv
   source .venv/bin/activate  # En Windows: .venv\Scripts\activate
   ```

3. **Instalar dependencias**:
   ```bash
   pip install -r requirements.txt
   # O si usas uv:
   uv sync
   ```

4. **Configurar variables de entorno**:
   ```bash
   cp .env.example .env
   # Editar .env con tus credenciales reales
   ```

5. **Configurar la base de datos**:
   ```bash
   # Crear base de datos PostgreSQL
   createdb dozotech_db
   
   # Ejecutar migraciones
   alembic upgrade head
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
   cp .env.example .env.local
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
│   │   ├── db/ (conexión a DB, modelos)
│   │   ├── api/ (endpoints: chatbot, leads, blog)
│   │   ├── main.py (aplicación FastAPI principal)
│   │   └── __init__.py
│   ├── pyproject.toml
│   ├── .env.example
│   └── Dockerfile
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/ (Inicio, Soluciones IA, Proyectos, Blog, Contacto)
│   │   ├── styles/
│   │   └── App.js (o index.js)
│   ├── package.json
│   ├── .env.example
│   └── next.config.js
├── docker-compose.yml
├── .gitignore
└── README.md
```

---

## 🔧 Dependencias Clave

### Backend (FastAPI)
- `fastapi`, `uvicorn`: Base del API
- `sqlalchemy`, `psycopg2-binary`: PostgreSQL
- `pydantic-settings`, `python-dotenv`: Configuración
- `httpx`: Llamadas a APIs externas de LLMs
- `pandas`, `openpyxl`, `xlrd`: Procesamiento de datos

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
DATABASE_URL=postgresql://usuario:contraseña@localhost:5432/nombre_base_datos
OPENAI_API_KEY=tu-api-key-de-openai
SECRET_KEY=tu-clave-secreta-muy-larga-y-segura
```

**Frontend (.env.local)**:
```env
NEXT_PUBLIC_BACKEND_URL=http://localhost:8000
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