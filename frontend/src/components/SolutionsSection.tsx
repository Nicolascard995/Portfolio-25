'use client'

import React from 'react'
import { FeatureIcons, NavigationIcons } from './IconSystem'

const SolutionsSection = () => {
  const solutions = [
    {
      icon: 'Brain',
      title: 'Análisis accionable',
      description: 'Tus datos no son para decorar dashboards. Te dicen qué hacer, cuándo y por qué.',
      technologies: ['Pandas', 'SQL', 'Grafana', 'Notion'],
      color: 'from-accent-mint to-accent-blue'
    },
    {
      icon: 'Bot',
      title: 'Asistentes inteligentes',
      description: 'IA que responde, entiende y escala sin necesidad de supervisión constante.',
      technologies: ['Claude', 'GPT', 'WhatsApp API', 'n8n'],
      color: 'from-accent-blue to-accent-mint'
    },
    {
      icon: 'Link',
      title: 'Integraciones sin fricción',
      description: 'Todo se conecta: WhatsApp, Notion, Sheets, APIs. Nada queda suelto.',
      technologies: ['Zapier', 'REST APIs', 'Google Sheets'],
      color: 'from-accent-mint to-accent-blue'
    }
  ]

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Brain':
        return FeatureIcons.Brain
      case 'Bot':
        return FeatureIcons.Bot
      case 'Link':
        return FeatureIcons.Link
      default:
        return FeatureIcons.Brain
    }
  }

  return (
    <section id="soluciones" className="section-spacing bg-dark-absolute">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center space-y-16">
          
          {/* Header */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold text-text-primary tracking-tight">
              Soluciones Inteligentes <span className="text-gradient">que Respiran</span>
            </h2>
            <p className="text-lg md:text-xl text-text-secondary leading-relaxed max-w-3xl mx-auto">
              No implemento IA por moda. Diseño herramientas que resuelven tareas específicas con impacto real. 
              Cada solución está pensada para escalar sin sumar complejidad.
            </p>
          </div>

          {/* Solutions Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => {
              const IconComponent = getIcon(solution.icon)
              return (
                <div key={index} className="card-glow text-left group">
                  <div className={`w-12 h-12 bg-gradient-to-r ${solution.color} rounded-xl flex items-center justify-center mb-6`}>
                    <IconComponent 
                      size="md" 
                      className="text-dark-absolute"
                      aria-label={`${solution.title} icon`}
                    />
                  </div>
                  
                  <h3 className="text-xl font-bold text-text-primary mb-4">
                    {solution.title}
                  </h3>
                  
                  <p className="text-text-secondary leading-relaxed mb-6">
                    {solution.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="space-y-3">
                    <div className="text-sm font-medium text-text-muted">Tecnologías:</div>
                    <div className="flex flex-wrap gap-2">
                      {solution.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-dark-surface border border-border-subtle rounded-full text-xs text-text-secondary hover:border-accent-mint/50 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* CTA */}
          <div className="flex justify-center">
            <button className="btn-ghost btn-icon-right group">
              <span>Ver casos reales</span>
              <NavigationIcons.ArrowRight 
                size="sm" 
                className="transition-transform group-hover:translate-x-1"
                aria-label="Ver casos reales"
              />
            </button>
          </div>

        </div>
      </div>
    </section>
  )
}

export default SolutionsSection 