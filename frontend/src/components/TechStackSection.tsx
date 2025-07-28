'use client'

import React from 'react'
import { FeatureIcons } from './IconSystem'

const TechStackSection = () => {
  const techCategories = [
    {
      icon: 'Brain',
      category: 'IA & Modelos',
      color: 'text-purple-400 bg-purple-500/10',
      technologies: ['Claude', 'GPT-4o', 'Gemini', 'OpenAI API', 'LangChain']
    },
    {
      icon: 'Settings',
      category: 'Automatización & Backend',
      color: 'text-blue-400 bg-blue-500/10',
      technologies: ['Python', 'FastAPI', 'n8n', 'Zapier', 'REST APIs']
    },
    {
      icon: 'BarChart3',
      category: 'Datos & Visualización',
      color: 'text-green-400 bg-green-500/10',
      technologies: ['Pandas', 'SQL', 'Plotly', 'Notion DB', 'Grafana']
    },
    {
      icon: 'Monitor',
      category: 'Interfaz & Frontend',
      color: 'text-orange-400 bg-orange-500/10',
      technologies: ['React', 'Next.js', 'Tailwind CSS', 'Vercel']
    },
    {
      icon: 'Cloud',
      category: 'Infraestructura & DevTools',
      color: 'text-indigo-400 bg-indigo-500/10',
      technologies: ['Git', 'Google Cloud', 'Docker', 'Cursor', 'Figma']
    }
  ]

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Brain':
        return FeatureIcons.Brain
      case 'Settings':
        return FeatureIcons.Settings
      case 'BarChart3':
        return FeatureIcons.BarChart3
      case 'Monitor':
        return FeatureIcons.Monitor
      case 'Cloud':
        return FeatureIcons.Cloud
      default:
        return FeatureIcons.Settings
    }
  }

  return (
    <section className="section-spacing bg-dark-absolute">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16 space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold text-text-primary tracking-tight">
              Herramientas que Uso para Crear <span className="text-gradient">Sistemas que Respiran</span>
            </h2>
            <p className="text-lg md:text-xl text-text-secondary leading-relaxed max-w-3xl mx-auto">
              Uso tecnologías que se adaptan a tu negocio, no al revés. 
              Mi stack técnico es modular, probado y escalable.
            </p>
          </div>

          {/* Tech Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techCategories.map((category, index) => {
              const IconComponent = getIcon(category.icon)
              return (
                <div key={index} className="card group">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${category.color}`}>
                      <IconComponent 
                        size="sm" 
                        aria-label={`${category.category} icon`}
                      />
                    </div>
                    <h3 className="text-lg font-semibold text-text-primary">
                      {category.category}
                    </h3>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-2">
                    {category.technologies.map((tech, techIndex) => (
                      <div
                        key={techIndex}
                        className="px-3 py-2 bg-dark-surface border border-border-subtle rounded-lg text-center hover:border-accent-mint/30 transition-all duration-300 group-hover:bg-dark-surface/80"
                      >
                        <span className="text-sm font-medium text-text-secondary group-hover:text-text-primary transition-colors">
                          {tech}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>

          {/* Bottom Note */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center space-x-2 glass rounded-full px-6 py-3 border border-border-subtle">
              <div className="w-2 h-2 bg-accent-mint rounded-full animate-pulse"></div>
              <span className="text-sm font-mono text-text-secondary">Stack modular adaptado a cada proyecto</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default TechStackSection 