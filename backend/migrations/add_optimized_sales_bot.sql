-- Migración para Sales Bot Optimizado
-- Fecha: 2024-01-XX
-- Descripción: Agrega tabla SessionControl y nuevos campos a ChatLog

-- 1. Crear tabla de control de sesiones
CREATE TABLE IF NOT EXISTS session_control (
    id SERIAL PRIMARY KEY,
    session_id VARCHAR(50) NOT NULL UNIQUE,
    turnos_count INTEGER DEFAULT 0 NOT NULL,
    limite_turnos INTEGER DEFAULT 5 NOT NULL,
    tipo_bot VARCHAR(20) DEFAULT 'sales' NOT NULL,
    
    -- Control de estado
    esta_activa BOOLEAN DEFAULT TRUE NOT NULL,
    cita_agendada BOOLEAN DEFAULT FALSE NOT NULL,
    lead_capturado BOOLEAN DEFAULT FALSE NOT NULL,
    
    -- Metadatos
    fecha_creacion TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    fecha_ultimo_mensaje TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    ip_address VARCHAR(45)
);

-- 2. Crear índices para optimizar consultas
CREATE INDEX IF NOT EXISTS idx_session_control_session_id ON session_control(session_id);
CREATE INDEX IF NOT EXISTS idx_session_control_tipo_bot ON session_control(tipo_bot);
CREATE INDEX IF NOT EXISTS idx_session_control_fecha_creacion ON session_control(fecha_creacion);

-- 3. Agregar nuevos campos a chat_logs si no existen
ALTER TABLE chat_logs 
ADD COLUMN IF NOT EXISTS intencion_detectada VARCHAR(30),
ADD COLUMN IF NOT EXISTS respuesta_tipo VARCHAR(20);

-- 4. Actualizar comentarios en campos existentes para mayor claridad
COMMENT ON COLUMN chat_logs.tipo_interaccion IS 'Tipo: chat, analyze, sales_chat';
COMMENT ON COLUMN chat_logs.modelo_usado IS 'Modelo: local, openai, hybrid, gpt-3.5-turbo-optimized';

-- 5. Crear índices para optimizar consultas de analytics
CREATE INDEX IF NOT EXISTS idx_chat_logs_intencion ON chat_logs(intencion_detectada);
CREATE INDEX IF NOT EXISTS idx_chat_logs_respuesta_tipo ON chat_logs(respuesta_tipo);
CREATE INDEX IF NOT EXISTS idx_chat_logs_tipo_interaccion ON chat_logs(tipo_interaccion);

-- 6. Comentarios descriptivos para las nuevas tablas
COMMENT ON TABLE session_control IS 'Control de límites y estado de sesiones del bot de ventas';
COMMENT ON COLUMN session_control.session_id IS 'ID único de sesión para tracking';
COMMENT ON COLUMN session_control.turnos_count IS 'Contador de turnos/mensajes en la sesión';
COMMENT ON COLUMN session_control.limite_turnos IS 'Límite máximo de turnos permitidos';
COMMENT ON COLUMN session_control.cita_agendada IS 'Flag si se logró agendar una cita';
COMMENT ON COLUMN session_control.lead_capturado IS 'Flag si se capturaron datos del lead';

-- 7. Datos de ejemplo para testing (opcional)
INSERT INTO session_control (session_id, turnos_count, tipo_bot, cita_agendada, lead_capturado) 
VALUES 
    ('demo_session_001', 3, 'sales', true, true),
    ('demo_session_002', 5, 'sales', false, true),
    ('demo_session_003', 2, 'sales', false, false)
ON CONFLICT (session_id) DO NOTHING;

-- 8. Insertar logs de ejemplo para testing de analytics
INSERT INTO chat_logs (
    session_id, tipo_interaccion, mensaje_usuario, respuesta_llm, 
    modelo_usado, intencion_detectada, respuesta_tipo, tokens_utilizados
) VALUES 
    ('demo_session_001', 'sales_chat', 'Hola', '¡Hola! ¿Te gustaría agendar una llamada?', 'local', 'saludo', 'predefinida', 0),
    ('demo_session_001', 'sales_chat', 'Me interesa automatizar mi restaurante', 'Perfecto, especializo en automatizar restaurantes...', 'gpt-3.5-turbo-optimized', 'consultar_servicio', 'llm', 95),
    ('demo_session_001', 'sales_chat', 'Soy Juan, mi email es juan@resto.com', '¡Gracias Juan! Te envío el calendario...', 'local', 'datos_contacto', 'predefinida', 0),
    ('demo_session_002', 'sales_chat', 'Cuánto cuesta?', 'Los precios dependen del proyecto. ¿Agendamos una consulta?', 'local', 'precio', 'predefinida', 0),
    ('demo_session_003', 'sales_chat', 'Tengo una startup de logística con 50 empleados...', 'Excelente, para startups de logística tengo soluciones específicas...', 'gpt-3.5-turbo-optimized', 'consultar_servicio', 'llm', 120)
ON CONFLICT DO NOTHING; 