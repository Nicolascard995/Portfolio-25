-- Esquema de base de datos para Dozo.Tech en Supabase
-- Ejecutar este script en el SQL Editor de Supabase

-- Tabla de leads
CREATE TABLE IF NOT EXISTS leads (
    id BIGSERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL,
    mensaje TEXT,
    telefono VARCHAR(20),
    empresa VARCHAR(100),
    sector VARCHAR(50),
    fecha_creacion TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    ip_address VARCHAR(45),
    user_agent VARCHAR(500),
    processed BOOLEAN DEFAULT FALSE
);

-- Índices para leads
CREATE INDEX IF NOT EXISTS idx_leads_email ON leads(email);
CREATE INDEX IF NOT EXISTS idx_leads_fecha_creacion ON leads(fecha_creacion);
CREATE INDEX IF NOT EXISTS idx_leads_sector ON leads(sector);

-- Tabla de posts del blog
CREATE TABLE IF NOT EXISTS blog_posts (
    id BIGSERIAL PRIMARY KEY,
    titulo VARCHAR(200) NOT NULL,
    slug VARCHAR(250) NOT NULL UNIQUE,
    resumen VARCHAR(500),
    contenido TEXT NOT NULL,
    categoria VARCHAR(50),
    tags TEXT, -- JSON string
    imagen_url VARCHAR(500),
    publicado BOOLEAN DEFAULT FALSE,
    fecha_creacion TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    fecha_actualizacion TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    fecha_publicacion TIMESTAMP WITH TIME ZONE,
    meta_description VARCHAR(160),
    meta_keywords VARCHAR(500),
    vistas INTEGER DEFAULT 0
);

-- Índices para blog_posts
CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX IF NOT EXISTS idx_blog_posts_publicado ON blog_posts(publicado);
CREATE INDEX IF NOT EXISTS idx_blog_posts_categoria ON blog_posts(categoria);
CREATE INDEX IF NOT EXISTS idx_blog_posts_fecha_publicacion ON blog_posts(fecha_publicacion);

-- Tabla de control de sesiones
CREATE TABLE IF NOT EXISTS session_control (
    id BIGSERIAL PRIMARY KEY,
    session_id VARCHAR(50) NOT NULL UNIQUE,
    turnos_count INTEGER DEFAULT 0,
    limite_turnos INTEGER DEFAULT 5,
    tipo_bot VARCHAR(20) DEFAULT 'sales',
    esta_activa BOOLEAN DEFAULT TRUE,
    cita_agendada BOOLEAN DEFAULT FALSE,
    lead_capturado BOOLEAN DEFAULT FALSE,
    fecha_creacion TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    fecha_ultimo_mensaje TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    ip_address VARCHAR(45)
);

-- Índices para session_control
CREATE INDEX IF NOT EXISTS idx_session_control_session_id ON session_control(session_id);
CREATE INDEX IF NOT EXISTS idx_session_control_tipo_bot ON session_control(tipo_bot);

-- Tabla de logs de chat
CREATE TABLE IF NOT EXISTS chat_logs (
    id BIGSERIAL PRIMARY KEY,
    session_id VARCHAR(50) NOT NULL,
    tipo_interaccion VARCHAR(20) NOT NULL,
    mensaje_usuario TEXT,
    archivo_nombre VARCHAR(255),
    archivo_tipo VARCHAR(10),
    respuesta_llm TEXT,
    modelo_usado VARCHAR(50),
    tokens_utilizados INTEGER,
    intencion_detectada VARCHAR(30),
    respuesta_tipo VARCHAR(20),
    fecha_creacion TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    tiempo_respuesta INTEGER,
    ip_address VARCHAR(45)
);

-- Índices para chat_logs
CREATE INDEX IF NOT EXISTS idx_chat_logs_session_id ON chat_logs(session_id);
CREATE INDEX IF NOT EXISTS idx_chat_logs_tipo_interaccion ON chat_logs(tipo_interaccion);
CREATE INDEX IF NOT EXISTS idx_chat_logs_fecha_creacion ON chat_logs(fecha_creacion);

-- Función para actualizar fecha_actualizacion automáticamente
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.fecha_actualizacion = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Trigger para actualizar fecha_actualizacion en blog_posts
CREATE TRIGGER update_blog_posts_updated_at 
    BEFORE UPDATE ON blog_posts 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

-- Políticas de seguridad RLS (Row Level Security)
-- Nota: Estas políticas deben ajustarse según tus necesidades de seguridad

-- Política para leads (solo inserción pública, lectura solo para autenticados)
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Permitir inserción de leads" ON leads
    FOR INSERT WITH CHECK (true);

CREATE POLICY "Permitir lectura de leads solo a autenticados" ON leads
    FOR SELECT USING (auth.role() = 'authenticated');

-- Política para blog_posts (lectura pública, escritura solo para autenticados)
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Permitir lectura pública de blog posts" ON blog_posts
    FOR SELECT USING (publicado = true);

CREATE POLICY "Permitir escritura de blog posts solo a autenticados" ON blog_posts
    FOR ALL USING (auth.role() = 'authenticated');

-- Política para session_control (lectura/escritura solo para autenticados)
ALTER TABLE session_control ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Permitir acceso a session_control solo a autenticados" ON session_control
    FOR ALL USING (auth.role() = 'authenticated');

-- Política para chat_logs (lectura/escritura solo para autenticados)
ALTER TABLE chat_logs ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Permitir acceso a chat_logs solo a autenticados" ON chat_logs
    FOR ALL USING (auth.role() = 'authenticated'); 