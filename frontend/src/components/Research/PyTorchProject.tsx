import React from 'react';

const PyTorchProject = () => {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center space-y-6">
        <h3 className="text-2xl md:text-3xl font-bold text-gradient">
          🚀 Desarrollo de Soluciones de IA Personalizadas con PyTorch
        </h3>
        <p className="text-lg text-text-secondary max-w-2xl mx-auto">
          Creando inteligencia artificial a medida para transformar la educación, automatizar procesos y generar valor en diversos sectores.
        </p>
      </div>

      {/* Visión y Propuesta de Valor (Integración con el estilo existente) */}
      <div className="card-glow">
        <h4 className="text-xl font-bold text-accent-mint mb-4">¿Por qué IA Personalizada?</h4>
        <ul className="list-disc pl-6 space-y-2 text-text-secondary">
          <li>Adaptabilidad y precisión: desarrollamos modelos de IA que se ajustan con exactitud a las necesidades específicas de cada dominio, superando las limitaciones de soluciones genéricas.</li>
          <li>Control total: garantizamos independencia tecnológica, permitiendo un control absoluto sobre los datos, la arquitectura del modelo y las estrategias de despliegue.</li>
          <li>Privacidad y seguridad: priorizamos la confidencialidad de la información, diseñando sistemas que operan bajo estrictos estándares de privacidad y cumplimiento normativo.</li>
          <li>Eficiencia de costos y escalabilidad: optimizamos los recursos y creamos soluciones escalables que crecen con tu proyecto, ofreciendo un retorno de inversión claro y predecible.</li>
          <li>Innovación continua: facilitamos la iteración rápida y la incorporación de nuevas funcionalidades, asegurando que la solución de IA evolucione al ritmo de tus objetivos.</li>
        </ul>
      </div>

      {/* Capacidades Técnicas Clave */}
      <div className="bg-dark-card border border-border-subtle rounded-2xl p-8">
        <h4 className="text-xl font-bold text-accent-mint mb-6 text-center">Capacidades Técnicas Destacadas</h4>
        <div className="grid md:grid-cols-2 gap-8 text-text-secondary">
          <div>
            <h5 className="font-semibold text-lg mb-2 text-accent-cyan">Modelado de IA con PyTorch</h5>
            <ul className="list-disc pl-5 space-y-1">
              <li>Diseño y entrenamiento de redes neuronales convolucionales y recurrentes.</li>
              <li>Implementación de arquitecturas de modelos personalizadas para PLN (procesamiento de lenguaje natural) y sistemas de recomendación.</li>
              <li>Estrategias de optimización de modelos: regularización (Dropout), ajuste de parámetros y early stopping para prevenir el sobreajuste.</li>
              <li>Manejo de datasets complejos y creación de pipelines de datos eficientes.</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-lg mb-2 text-accent-cyan">Desarrollo Full-Stack y Arquitectura</h5>
            <ul className="list-disc pl-5 space-y-1">
              <li>Diseño de APIs RESTful robustas utilizando FastAPI para la interacción backend-frontend.</li>
              <li>Integración de bases de datos relacionales (PostgreSQL) para persistencia de datos.</li>
              <li>Implementación de microservicios (por ejemplo, servicio de IA, servicio de evaluación de código) para modularidad y escalabilidad.</li>
              <li>Desarrollo de interfaces de usuario interactivas con React y TypeScript, incluyendo editores de código y visualizaciones.</li>
              <li>Uso de Docker para la contenerización y despliegue consistente de aplicaciones.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Aplicaciones Reales (Manteniendo la esencia) */}
      <div className="card-glow">
        <h4 className="text-xl font-bold text-accent-mint mb-4">Aplicaciones y Casos de Uso</h4>
        <ul className="list-disc pl-6 space-y-2 text-text-secondary">
          <li>Asistentes virtuales inteligentes: creación de chatbots especializados para soporte al cliente, educación y automatización interna.</li>
          <li>Sistemas de evaluación automatizada: desarrollo de motores que analizan y proporcionan feedback sobre código o respuestas de usuario.</li>
          <li>Plataformas de aprendizaje adaptativo: implementación de tutores virtuales que personalizan el contenido y el progreso del estudiante.</li>
          <li>Análisis predictivo y motores de recomendación.</li>
          <li>Automatización de procesos de negocio y flujos de trabajo.</li>
        </ul>
      </div>

      {/* Métricas Clave y Logros */}
      <div className="bg-dark-card border border-border-subtle rounded-2xl p-8">
        <h4 className="text-xl font-bold text-accent-mint mb-6 text-center">Métricas de Éxito y Logros Clave</h4>
        <div className="grid md:grid-cols-2 gap-8 text-text-secondary">
          <div>
            <h5 className="font-semibold text-lg mb-2 text-accent-cyan">Desempeño del Modelo y Eficiencia</h5>
            <ul className="list-disc pl-5 space-y-1">
              <li>Precisión del modelo: clasificación superior al 90% en intenciones educativas (o similar, basado en tu implementación).</li>
              <li>Tiempo de respuesta promedio: optimización para respuestas en menos de 500 ms, garantizando una interacción fluida.</li>
              <li>Tasa de confianza: manteniendo una tasa de confianza superior al 75% en las predicciones del modelo.</li>
              <li>Cobertura de intenciones: soporte robusto para 7 intenciones educativas únicas, con un promedio de más de 50 patrones de entrenamiento por intención.</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-lg mb-2 text-accent-cyan">Impacto en el Usuario y Escalabilidad</h5>
            <ul className="list-disc pl-5 space-y-1">
              <li>Usuarios activos: diseñado para soportar más de 50 usuarios concurrentes durante la fase beta.</li>
              <li>Ejercicios completados: capacidad para procesar más de 500 ejercicios interactivos, demostrando la robustez del sistema de evaluación.</li>
              <li>Disponibilidad del sistema: objetivo de un uptime superior al 99% para asegurar la continuidad del servicio.</li>
              <li>Cobertura de conceptos: capacidad para enseñar conceptos fundamentales de programación, con potencial de expansión.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Cita final */}
      <div className="text-center mt-8">
        <em className="block text-lg text-text-secondary mb-2">
          “Transformando desafíos complejos en soluciones de IA inteligentes y con impacto real.”
        </em>
        <p className="text-sm text-text-muted">
          Explora cómo la IA personalizada puede ser el motor de innovación para tu próximo gran proyecto.
        </p>
      </div>
    </div>
  );
};

export default PyTorchProject;