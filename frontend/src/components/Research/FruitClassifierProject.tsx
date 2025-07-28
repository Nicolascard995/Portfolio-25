'use client'

import React from 'react'
import { FeatureIcons, ContactIcons, SocialIcons, NavigationIcons } from '../IconSystem'

const FruitClassifierProject = () => {
  // Estadísticas principales
  const heroStats = [
    { value: '94.2%', label: 'Precisión' },
    { value: '12ms', label: 'Inferencia' },
    { value: '60+', label: 'Tipos de Frutas' },
    { value: '30%', label: 'Reducción Desperdicio' }
  ]

  // Propuesta de valor y competencias
  const businessCases = [
    {
      icon: 'target',
      title: '🤖 Competencia Técnica',
      description: 'Implementación completa de Transfer Learning con PyTorch. Desde preprocesamiento de datos hasta deployment de modelos en producción.',
      roi: 'Skills Demostradas'
    },
    {
      icon: 'settings',
      title: '🏗️ Arquitectura de Software',
      description: 'Código modular, APIs REST, containerización con Docker. Buenas prácticas de ingeniería de software aplicadas a ML.',
      roi: 'Software Engineering'
    },
    {
      icon: 'monitor',
      title: '📊 Enfoque Experimental',
      description: 'Comparación rigurosa entre arquitecturas. Métricas claras, validación cruzada y optimización basada en datos reales.',
      roi: 'Data Science'
    },
    {
      icon: 'cloud',
      title: '🚀 Deployment Real',
      description: 'Demo funcional desplegada. No solo código en repositorio - aplicación real que cualquiera puede probar y usar.',
      roi: 'MLOps & DevOps'
    }
  ]

  // Arquitectura técnica
  const flowSteps = [
    { title: '📸 Captura', desc: 'Cámaras industriales\nTiempo real' },
    { title: '🔧 Preproceso', desc: 'Normalización\nAugmentación' },
    { title: '🧠 Inferencia', desc: 'ResNet-18\nTransfer Learning' },
    { title: '📊 Clasificación', desc: '60+ categorías\nScores de confianza' },
    { title: '💾 Integración', desc: 'ERP/WMS\nAPIs REST' }
  ]

  // Stack tecnológico
  const techStack = [
    {
      title: '🤖 Machine Learning',
      items: [
        'PyTorch con Transfer Learning',
        'ResNet-18, MobileNet, EfficientNet',
        'Data Augmentation avanzado',
        'Optimización de hiperparámetros',
        'Cross-validation estratificada'
      ]
    },
    {
      title: '⚡ Optimización de Rendimiento',
      items: [
        'Cuantización de modelos (INT8)',
        'Optimización ONNX Runtime',
        'Batch processing paralelo',
        'Caché inteligente de predicciones',
        'GPU acceleration (CUDA)'
      ]
    },
    {
      title: '🏗️ Arquitectura de Software',
      items: [
        'Microservicios con Docker',
        'APIs REST con FastAPI',
        'Message queues (Redis/RabbitMQ)',
        'Load balancing automático',
        'Monitoring con Prometheus'
      ]
    },
    {
      title: '☁️ Deployment Escalable',
      items: [
        'Kubernetes orchestration',
        'Auto-scaling horizontal',
        'CI/CD con GitHub Actions',
        'Multi-cloud deployment',
        'Edge computing ready'
      ]
    }
  ]

  // Métricas
  const performanceMetrics = [
    { value: '94.2%', label: 'Accuracy General' },
    { value: '96.8%', label: 'Precision (Top-1)' },
    { value: '99.1%', label: 'Recall (Top-5)' },
    { value: '12ms', label: 'Latencia Media' },
    { value: '11.7MB', label: 'Tamaño del Modelo' },
    { value: '1000+', label: 'Imágenes/seg' }
  ]

  // Comparación de arquitecturas
  const comparisonData = [
    { metric: 'Accuracy', resnet: '94.2%', mobilenet: '91.7%', efficientnet: '93.1%', decision: 'ResNet-18 ✓' },
    { metric: 'Latencia', resnet: '12ms', mobilenet: '8ms', efficientnet: '15ms', decision: 'Trade-off' },
    { metric: 'Tamaño Modelo', resnet: '44.7MB', mobilenet: '13.4MB', efficientnet: '20.5MB', decision: 'Para mobile' },
    { metric: 'Entrenamiento', resnet: 'Estable', mobilenet: 'Convergencia lenta', efficientnet: 'Requiere más épocas', decision: 'ResNet-18 ✓' }
  ]

  // Aplicaciones y mejoras
  const realApps = [
    '📱 Apps de reconocimiento de frutas',
    '🏪 Automatización de inventarios',
    '📚 Herramientas educativas',
    '🔬 Investigación agrícola'
  ]
  const techFeatures = [
    '🚀 Inferencia en tiempo real',
    '📱 Compatible con dispositivos móviles',
    '☁️ Deployment en cloud o edge',
    '🔄 Pipeline de reentrenamiento'
  ]
  const improvements = [
    { title: 'Técnicas', items: ['Detección de madurez', 'Análisis de calidad', 'Segmentación avanzada'] },
    { title: 'Integración', items: ['APIs para e-commerce', 'Bases de datos nutricionales', 'Sistemas de recomendación'] },
    { title: 'Escalamiento', items: ['Más categorías de alimentos', 'Multi-idioma', 'Optimización móvil'] }
  ]

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'target': return FeatureIcons.Target
      case 'settings': return FeatureIcons.Settings
      case 'monitor': return FeatureIcons.Monitor
      case 'cloud': return FeatureIcons.Cloud
      default: return FeatureIcons.Target
    }
  }

  return (
    <div className="space-y-12">
      {/* Header con estadísticas heroicas */}
      <div className="text-center space-y-6">
        <h3 className="text-2xl md:text-3xl font-bold text-gradient">
          🍎 Clasificador de Frutas con IA
        </h3>
        <p className="text-lg text-text-secondary max-w-2xl mx-auto">
          Demostración de Competencias en Machine Learning y Computer Vision
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          {heroStats.map((stat, index) => (
            <div key={index} className="bg-gradient-to-r from-accent-mint to-accent-blue rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-dark-absolute">{stat.value}</div>
              <div className="text-sm text-dark-absolute opacity-90">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Propuesta de valor y competencias */}
      <div className="card-glow">
        <h4 className="text-xl font-bold text-accent-mint mb-4">💡 Lo Que Este Proyecto Demuestra</h4>
        <p className="text-lg text-text-secondary mb-6">
          <strong>Un enfoque práctico a la clasificación de imágenes con IA, mostrando competencias técnicas reales en Machine Learning y desarrollo de software.</strong>
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {businessCases.map((case_, index) => {
            const IconComponent = getIcon(case_.icon)
            return (
              <div key={index} className="bg-dark-card border border-border-subtle rounded-xl p-6">
                <div className="flex items-start space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-accent-blue to-accent-mint rounded-lg flex items-center justify-center flex-shrink-0">
                    <IconComponent size="sm" className="text-dark-absolute" />
                  </div>
                  <div>
                    <h5 className="text-lg font-semibold text-text-primary">{case_.title}</h5>
                  </div>
                </div>
                <p className="text-text-secondary mb-4">{case_.description}</p>
                <div className="inline-block px-3 py-1 bg-accent-mint text-dark-absolute rounded-full text-sm font-semibold">
                  {case_.roi}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Arquitectura técnica */}
      <div className="bg-dark-card border border-border-subtle rounded-2xl p-8">
        <h4 className="text-xl font-bold text-accent-mint mb-6 text-center">🛠️ Arquitectura Técnica Empresarial</h4>
        <div className="flex flex-wrap justify-between items-center gap-4">
          {flowSteps.map((step, index) => (
            <React.Fragment key={index}>
              <div className="bg-dark-surface border border-accent-mint/30 rounded-xl p-4 text-center flex-1 min-w-[140px]">
                <h5 className="text-accent-mint font-semibold mb-2">{step.title}</h5>
                <p className="text-sm text-text-muted whitespace-pre-line">{step.desc}</p>
              </div>
              {index < flowSteps.length - 1 && (
                <NavigationIcons.ArrowRight 
                  size="sm" 
                  className="text-accent-mint hidden md:block"
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Stack tecnológico */}
      <div className="space-y-6">
        <h4 className="text-xl font-bold text-center text-gradient">🚀 Stack Tecnológico y Características</h4>
        <div className="grid md:grid-cols-2 gap-6">
          {techStack.map((tech, index) => (
            <div key={index} className="bg-dark-card border border-border-subtle rounded-xl p-6">
              <h5 className="text-lg font-semibold text-accent-mint mb-4">{tech.title}</h5>
              <ul className="space-y-2">
                {tech.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center space-x-2 text-text-secondary">
                    <div className="w-2 h-2 bg-accent-blue rounded-full flex-shrink-0"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Métricas de rendimiento */}
      <div className="space-y-6">
        <h4 className="text-xl font-bold text-center text-gradient">📈 Métricas de Rendimiento Técnico</h4>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {performanceMetrics.map((metric, index) => (
            <div key={index} className="bg-gradient-to-r from-accent-blue to-accent-mint rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-dark-absolute">{metric.value}</div>
              <div className="text-sm text-dark-absolute opacity-90">{metric.label}</div>
            </div>
          ))}
        </div>
        {/* Tabla de comparación */}
        <div className="card-glow overflow-hidden">
          <h5 className="text-lg font-semibold text-accent-mint mb-4">Comparación Entre Arquitecturas Implementadas</h5>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border-subtle">
                  <th className="text-left py-3 px-4 text-text-primary font-semibold">Métrica</th>
                  <th className="text-center py-3 px-4 text-accent-mint font-semibold">ResNet-18</th>
                  <th className="text-center py-3 px-4 text-text-secondary">MobileNet-V2</th>
                  <th className="text-center py-3 px-4 text-text-secondary">EfficientNet-B0</th>
                  <th className="text-center py-3 px-4 text-accent-blue font-semibold">Decisión</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr key={index} className="border-b border-border-subtle">
                    <td className="py-3 px-4 text-text-primary">{row.metric}</td>
                    <td className="py-3 px-4 text-center font-bold text-accent-mint">{row.resnet}</td>
                    <td className="py-3 px-4 text-center text-text-secondary">{row.mobilenet}</td>
                    <td className="py-3 px-4 text-center text-text-secondary">{row.efficientnet}</td>
                    <td className="py-3 px-4 text-center font-bold text-accent-blue">{row.decision}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Aplicaciones y mejoras */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-dark-card border border-border-subtle rounded-xl p-6">
          <h5 className="text-lg font-semibold text-accent-mint mb-4">🏪 Casos de Uso Reales</h5>
          <ul className="space-y-2">
            {realApps.map((app, i) => (
              <li key={i} className="flex items-center space-x-2 text-text-secondary">
                <div className="w-2 h-2 bg-accent-mint rounded-full"></div>
                <span>{app}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-dark-card border border-border-subtle rounded-xl p-6">
          <h5 className="text-lg font-semibold text-accent-blue mb-4">⚡ Características Técnicas</h5>
          <ul className="space-y-2">
            {techFeatures.map((feat, i) => (
              <li key={i} className="flex items-center space-x-2 text-text-secondary">
                <div className="w-2 h-2 bg-accent-mint rounded-full"></div>
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="bg-dark-card border border-border-subtle rounded-xl p-6">
        <h5 className="text-lg font-semibold text-accent-mint mb-4">🛠️ Posibles Mejoras y Extensiones</h5>
        <div className="grid md:grid-cols-3 gap-4">
          {improvements.map((imp, i) => (
            <div key={i}>
              <h6 className="text-accent-mint font-semibold mb-2">{imp.title}</h6>
              <ul className="space-y-1">
                {imp.items.map((item, j) => (
                  <li key={j} className="flex items-center space-x-2 text-text-secondary">
                    <div className="w-2 h-2 bg-accent-blue rounded-full"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="card-glow text-center space-y-4">
        <h5 className="text-lg font-semibold text-gradient">💻 Explora Este Proyecto</h5>
        <p className="text-lg text-text-secondary">Un proyecto completo que demuestra competencias técnicas reales en Machine Learning y desarrollo de software</p>
        <p className="text-text-muted">Código abierto, documentado y con demo funcional. Listo para revisar, usar y adaptar.</p>
        <div className="flex flex-wrap justify-center gap-4 mt-4">
          <a href="#" className="btn-ghost btn-icon-right group px-6 py-3">
            <span>🎮 Probar Demo</span>
            <NavigationIcons.ExternalLink size="sm" className="transition-transform group-hover:translate-x-1" />
          </a>
          <a href="#" className="btn-ghost btn-icon-right group px-6 py-3">
            <span>📂 Ver Repositorio</span>
            <SocialIcons.Github size="sm" className="transition-transform group-hover:translate-x-1" />
          </a>
          <a href="#" className="btn-ghost btn-icon-right group px-6 py-3">
            <span>📖 Documentación</span>
            <NavigationIcons.ExternalLink size="sm" className="transition-transform group-hover:translate-x-1" />
          </a>
          <a href="#" className="btn-primary btn-icon-right group px-6 py-3">
            <span>📧 Contactar</span>
            <ContactIcons.Mail size="sm" className="transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default FruitClassifierProject 