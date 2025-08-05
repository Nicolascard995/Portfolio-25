'use client'

import React from 'react'
import { FeatureIcons, ContactIcons, SocialIcons, NavigationIcons } from '../IconSystem'
import { getTranslation } from '@/config/translations'
import { useParams } from 'next/navigation'

const FruitClassifierProject = () => {
  const params = useParams();
  const currentLocale = params.locale as string;

  // Estadísticas principales
  const heroStats = [
    { value: '94.2%', label: getTranslation(currentLocale, 'research.fruit_classifier.hero_stats.accuracy') },
    { value: '12ms', label: getTranslation(currentLocale, 'research.fruit_classifier.hero_stats.inference') },
    { value: '60+', label: getTranslation(currentLocale, 'research.fruit_classifier.hero_stats.fruit_types') },
    { value: '30%', label: getTranslation(currentLocale, 'research.fruit_classifier.hero_stats.waste_reduction') }
  ]

  // Propuesta de valor y competencias
  const businessCases = [
    {
      icon: 'target',
      title: getTranslation(currentLocale, 'research.fruit_classifier.competencies.technical.title'),
      description: getTranslation(currentLocale, 'research.fruit_classifier.competencies.technical.description'),
      roi: getTranslation(currentLocale, 'research.fruit_classifier.competencies.technical.roi')
    },
    {
      icon: 'settings',
      title: getTranslation(currentLocale, 'research.fruit_classifier.competencies.architecture.title'),
      description: getTranslation(currentLocale, 'research.fruit_classifier.competencies.architecture.description'),
      roi: getTranslation(currentLocale, 'research.fruit_classifier.competencies.architecture.roi')
    },
    {
      icon: 'monitor',
      title: getTranslation(currentLocale, 'research.fruit_classifier.competencies.experimental.title'),
      description: getTranslation(currentLocale, 'research.fruit_classifier.competencies.experimental.description'),
      roi: getTranslation(currentLocale, 'research.fruit_classifier.competencies.experimental.roi')
    },
    {
      icon: 'cloud',
      title: getTranslation(currentLocale, 'research.fruit_classifier.competencies.deployment.title'),
      description: getTranslation(currentLocale, 'research.fruit_classifier.competencies.deployment.description'),
      roi: getTranslation(currentLocale, 'research.fruit_classifier.competencies.deployment.roi')
    }
  ]

  // Arquitectura técnica
  const flowSteps = [
    { title: getTranslation(currentLocale, 'research.fruit_classifier.flow_steps.capture.title'), desc: getTranslation(currentLocale, 'research.fruit_classifier.flow_steps.capture.desc') },
    { title: getTranslation(currentLocale, 'research.fruit_classifier.flow_steps.preprocess.title'), desc: getTranslation(currentLocale, 'research.fruit_classifier.flow_steps.preprocess.desc') },
    { title: getTranslation(currentLocale, 'research.fruit_classifier.flow_steps.inference.title'), desc: getTranslation(currentLocale, 'research.fruit_classifier.flow_steps.inference.desc') },
    { title: getTranslation(currentLocale, 'research.fruit_classifier.flow_steps.classification.title'), desc: getTranslation(currentLocale, 'research.fruit_classifier.flow_steps.classification.desc') },
    { title: getTranslation(currentLocale, 'research.fruit_classifier.flow_steps.integration.title'), desc: getTranslation(currentLocale, 'research.fruit_classifier.flow_steps.integration.desc') }
  ]

  // Stack tecnológico
  const techStack = [
    {
      title: getTranslation(currentLocale, 'research.fruit_classifier.tech_stack_sections.machine_learning.title'),
      items: getTranslation(currentLocale, 'research.fruit_classifier.tech_stack_sections.machine_learning.items')
    },
    {
      title: getTranslation(currentLocale, 'research.fruit_classifier.tech_stack_sections.performance_optimization.title'),
      items: getTranslation(currentLocale, 'research.fruit_classifier.tech_stack_sections.performance_optimization.items')
    },
    {
      title: getTranslation(currentLocale, 'research.fruit_classifier.tech_stack_sections.software_architecture.title'),
      items: getTranslation(currentLocale, 'research.fruit_classifier.tech_stack_sections.software_architecture.items')
    },
    {
      title: getTranslation(currentLocale, 'research.fruit_classifier.tech_stack_sections.scalable_deployment.title'),
      items: getTranslation(currentLocale, 'research.fruit_classifier.tech_stack_sections.scalable_deployment.items')
    }
  ]

  // Métricas
  const performanceMetrics = [
    { value: '94.2%', label: getTranslation(currentLocale, 'research.fruit_classifier.performance_metrics_labels.accuracy_general') },
    { value: '96.8%', label: getTranslation(currentLocale, 'research.fruit_classifier.performance_metrics_labels.precision_top1') },
    { value: '99.1%', label: getTranslation(currentLocale, 'research.fruit_classifier.performance_metrics_labels.recall_top5') },
    { value: '12ms', label: getTranslation(currentLocale, 'research.fruit_classifier.performance_metrics_labels.average_latency') },
    { value: '11.7MB', label: getTranslation(currentLocale, 'research.fruit_classifier.performance_metrics_labels.model_size') },
    { value: '1000+', label: getTranslation(currentLocale, 'research.fruit_classifier.performance_metrics_labels.images_per_sec') }
  ]

  // Comparación de arquitecturas
  const comparisonData = [
    { 
      metric: getTranslation(currentLocale, 'research.fruit_classifier.comparison_data.accuracy'), 
      resnet: '94.2%', 
      mobilenet: '91.7%', 
      efficientnet: '93.1%', 
      decision: 'ResNet-18 ✓' 
    },
    { 
      metric: getTranslation(currentLocale, 'research.fruit_classifier.comparison_data.latency'), 
      resnet: '12ms', 
      mobilenet: '8ms', 
      efficientnet: '15ms', 
      decision: getTranslation(currentLocale, 'research.fruit_classifier.comparison_data.trade_off') 
    },
    { 
      metric: getTranslation(currentLocale, 'research.fruit_classifier.comparison_data.model_size'), 
      resnet: '44.7MB', 
      mobilenet: '13.4MB', 
      efficientnet: '20.5MB', 
      decision: getTranslation(currentLocale, 'research.fruit_classifier.comparison_data.for_mobile') 
    },
    { 
      metric: getTranslation(currentLocale, 'research.fruit_classifier.comparison_data.training'), 
      resnet: getTranslation(currentLocale, 'research.fruit_classifier.comparison_data.resnet_stable'), 
      mobilenet: getTranslation(currentLocale, 'research.fruit_classifier.comparison_data.mobilenet_slow'), 
      efficientnet: getTranslation(currentLocale, 'research.fruit_classifier.comparison_data.efficientnet_epochs'), 
      decision: 'ResNet-18 ✓' 
    }
  ]

  // Aplicaciones y mejoras
  const realApps = getTranslation(currentLocale, 'research.fruit_classifier.real_applications_list')
  const techFeatures = getTranslation(currentLocale, 'research.fruit_classifier.technical_features_list')
  const improvements = [
    { 
      title: getTranslation(currentLocale, 'research.fruit_classifier.improvements_sections.technical.title'), 
      items: getTranslation(currentLocale, 'research.fruit_classifier.improvements_sections.technical.items') 
    },
    { 
      title: getTranslation(currentLocale, 'research.fruit_classifier.improvements_sections.integration.title'), 
      items: getTranslation(currentLocale, 'research.fruit_classifier.improvements_sections.integration.items') 
    },
    { 
      title: getTranslation(currentLocale, 'research.fruit_classifier.improvements_sections.scaling.title'), 
      items: getTranslation(currentLocale, 'research.fruit_classifier.improvements_sections.scaling.items') 
    }
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
          {getTranslation(currentLocale, 'research.fruit_classifier.title')}
        </h3>
        <p className="text-lg text-text-secondary max-w-2xl mx-auto">
          {getTranslation(currentLocale, 'research.fruit_classifier.description')}
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
        <h4 className="text-xl font-bold text-accent-mint mb-4">{getTranslation(currentLocale, 'research.fruit_classifier.value_proposition')}</h4>
        <p className="text-lg text-text-secondary mb-6">
          <strong>{getTranslation(currentLocale, 'research.fruit_classifier.value_description')}</strong>
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
        <h4 className="text-xl font-bold text-accent-mint mb-6 text-center">{getTranslation(currentLocale, 'research.fruit_classifier.technical_architecture')}</h4>
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
        <h4 className="text-xl font-bold text-center text-gradient">{getTranslation(currentLocale, 'research.fruit_classifier.tech_stack')}</h4>
        <div className="grid md:grid-cols-2 gap-6">
          {techStack.map((tech, index) => (
            <div key={index} className="bg-dark-card border border-border-subtle rounded-xl p-6">
              <h5 className="text-lg font-semibold text-accent-mint mb-4">{tech.title}</h5>
              <ul className="space-y-2">
                {tech.items.map((item: string, itemIndex: number) => (
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
        <h4 className="text-xl font-bold text-center text-gradient">{getTranslation(currentLocale, 'research.fruit_classifier.performance_metrics')}</h4>
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
          <h5 className="text-lg font-semibold text-accent-mint mb-4">{getTranslation(currentLocale, 'research.fruit_classifier.architecture_comparison')}</h5>
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

      {/* Casos de Uso */}
      <div className="card-glow">
        <h4 className="text-xl font-bold text-accent-mint mb-4">{getTranslation(currentLocale, 'research.fruit_classifier.use_cases_section')}</h4>
        <p className="text-lg text-text-secondary mb-6">
          {getTranslation(currentLocale, 'research.fruit_classifier.use_cases_description')}
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {getTranslation(currentLocale, 'research.fruit_classifier.use_cases_list').map((useCase: string, index: number) => (
            <div key={index} className="bg-dark-card border border-border-subtle rounded-lg p-4">
              <p className="text-text-secondary">{useCase}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Aplicaciones y mejoras */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-dark-card border border-border-subtle rounded-xl p-6">
          <h5 className="text-lg font-semibold text-accent-mint mb-4">{getTranslation(currentLocale, 'research.fruit_classifier.real_applications')}</h5>
          <ul className="space-y-2">
            {realApps.map((app: string, i: number) => (
              <li key={i} className="flex items-center space-x-2 text-text-secondary">
                <div className="w-2 h-2 bg-accent-mint rounded-full"></div>
                <span>{app}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-dark-card border border-border-subtle rounded-xl p-6">
          <h5 className="text-lg font-semibold text-accent-blue mb-4">{getTranslation(currentLocale, 'research.fruit_classifier.technical_features')}</h5>
          <ul className="space-y-2">
            {techFeatures.map((feat: string, i: number) => (
              <li key={i} className="flex items-center space-x-2 text-text-secondary">
                <div className="w-2 h-2 bg-accent-mint rounded-full"></div>
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="bg-dark-card border border-border-subtle rounded-xl p-6">
        <h5 className="text-lg font-semibold text-accent-mint mb-4">{getTranslation(currentLocale, 'research.fruit_classifier.improvements')}</h5>
        <div className="grid md:grid-cols-3 gap-4">
          {improvements.map((imp, i) => (
            <div key={i}>
              <h6 className="text-accent-mint font-semibold mb-2">{imp.title}</h6>
              <ul className="space-y-1">
                {imp.items.map((item: string, j: number) => (
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
        <h5 className="text-lg font-semibold text-gradient">{getTranslation(currentLocale, 'research.fruit_classifier.call_to_action')}</h5>
        <p className="text-lg text-text-secondary">{getTranslation(currentLocale, 'research.fruit_classifier.call_description')}</p>
        <p className="text-text-muted">{getTranslation(currentLocale, 'research.fruit_classifier.call_subtitle')}</p>
        <div className="flex flex-wrap justify-center gap-4 mt-4">
          <a href="https://github.com/Nicolascard995/Fruit_Classification_Kaggle" target="_blank" rel="noopener noreferrer" className="btn-ghost btn-icon-right group px-6 py-3">
            <span>{getTranslation(currentLocale, 'research.fruit_classifier.actions.view_repo')}</span>
            <SocialIcons.Github size="sm" className="transition-transform group-hover:translate-x-1" />
          </a>
          <a href="https://medium.com/@nicolascard95/fruit-classification-transfer-learning-with-resnet-1392b7b52040" target="_blank" rel="noopener noreferrer" className="btn-ghost btn-icon-right group px-6 py-3">
            <span>{getTranslation(currentLocale, 'research.fruit_classifier.actions.documentation')}</span>
            <NavigationIcons.ExternalLink size="sm" className="transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default FruitClassifierProject 