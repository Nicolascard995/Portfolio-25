'use client'

import React from 'react'
import { FeatureIcons, NavigationIcons } from './IconSystem'

const PortfolioSection = () => {
  const projects = [
    {
      icon: 'Target',
      title: 'Sistema de Inventario Inteligente',
      description: 'Reducimos roturas de stock y creamos alertas predictivas.',
      sector: 'Gastronomía',
      stack: ['Python', 'FastAPI', 'Google Sheets'],
      color: 'from-accent-mint to-accent-blue'
    },
    {
      icon: 'MessageCircle',
      title: 'Chatbot para atención 24/7',
      description: 'Menos tickets. Mejor experiencia. Automatización con sentido común.',
      sector: 'Retail',
      stack: ['Claude', 'WhatsApp API', 'MongoDB'],
      color: 'from-accent-blue to-accent-mint'
    },
    {
      icon: 'BarChart3',
      title: 'Dashboard de Operaciones',
      description: 'Visualización en tiempo real con alertas automáticas.',
      sector: 'Servicios',
      stack: ['React', 'Pandas', 'Grafana'],
      color: 'from-accent-mint to-accent-blue'
    }
  ]

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Target':
        return FeatureIcons.Target
      case 'MessageCircle':
        return FeatureIcons.MessageCircle
      case 'BarChart3':
        return FeatureIcons.BarChart3
      default:
        return FeatureIcons.Target
    }
  }

  return (
    <section id="portfolio" className="section-spacing bg-dark-surface">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16 space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold text-text-primary tracking-tight">
              <span className="text-gradient">Casos Reales</span>
            </h2>
            <p className="text-lg md:text-xl text-text-secondary leading-relaxed max-w-3xl mx-auto">
              Historias reales de automatización y eficiencia sin promesas exageradas. 
              Sistemas que funcionaron desde el primer día y siguen mejorando.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {projects.map((project, index) => {
              const IconComponent = getIcon(project.icon)
              return (
                <div key={index} className="card-glow group">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className={`w-12 h-12 bg-gradient-to-r ${project.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <IconComponent 
                        size="md" 
                        className="text-dark-absolute"
                        aria-label={`${project.title} icon`}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl font-bold text-text-primary mb-2 leading-tight">
                        {project.title}
                      </h3>
                      <div className="inline-flex items-center px-3 py-1 bg-dark-absolute/50 border border-border-subtle rounded-full">
                        <span className="text-xs font-medium text-accent-mint">{project.sector}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-text-secondary leading-relaxed mb-6">
                    {project.description}
                  </p>
                  
                  {/* Stack */}
                  <div className="space-y-3">
                    <div className="text-sm font-medium text-text-muted">Stack:</div>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-dark-absolute border border-border-subtle rounded-lg text-xs text-text-secondary"
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
          <div className="text-center">
            <button className="btn-primary btn-icon-right group">
              <span>Ver detalles del portfolio</span>
              <NavigationIcons.ArrowRight 
                size="sm" 
                className="transition-transform group-hover:translate-x-1"
                aria-label="Ver portfolio completo"
              />
            </button>
          </div>

        </div>
      </div>
    </section>
  )
}

export default PortfolioSection 