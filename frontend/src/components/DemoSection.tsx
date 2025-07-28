'use client'

import React from 'react'
import { FeatureIcons, NavigationIcons } from './IconSystem'

const DemoSection = () => {
  const demos = [
    {
      icon: 'BarChart3',
      title: 'Demo: Dashboard de ventas con alertas inteligentes',
      description: 'Explorá cómo se visualizan métricas clave en tiempo real con IA simple.',
      action: 'Probar demo en vivo',
      href: '/demo/analytics',
      color: 'from-accent-mint to-accent-blue'
    },
    {
      icon: 'MessageCircle',
      title: 'Probá un Asistente IA en vivo',
      description: 'Este chatbot demuestra cómo tu negocio podría responder 24/7 sin perder humanidad.',
      action: 'Probar asistente en vivo',
      href: '/test-chatbot',
      color: 'from-accent-blue to-accent-mint'
    }
  ]

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'BarChart3':
        return FeatureIcons.BarChart3
      case 'MessageCircle':
        return FeatureIcons.MessageCircle
      default:
        return FeatureIcons.Play
    }
  }

  return (
    <section className="section-spacing bg-dark-surface">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16 space-y-6">
            <div className="inline-flex items-center space-x-2 glass rounded-full px-6 py-3 border border-border-subtle">
              <FeatureIcons.Play 
                size="xs" 
                className="text-accent-mint"
                aria-label="Play icon"
              />
              <span className="text-sm font-mono text-text-secondary">DEMOS EN VIVO</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-text-primary tracking-tight">
              <span className="text-gradient">Experimentá</span> los Sistemas
            </h2>
            <p className="text-lg md:text-xl text-text-secondary leading-relaxed">
              Demos interactivos para que veas cómo funcionan los sistemas antes de implementarlos.
            </p>
          </div>

          {/* Demos Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {demos.map((demo, index) => {
              const IconComponent = getIcon(demo.icon)
              return (
                <div key={index} className="card-glow group text-left">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className={`w-12 h-12 bg-gradient-to-r ${demo.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <IconComponent 
                        size="md" 
                        className="text-dark-absolute"
                        aria-label={`${demo.title} icon`}
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-text-primary mb-2 leading-tight">
                        {demo.title}
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-text-secondary leading-relaxed mb-6">
                    {demo.description}
                  </p>
                  
                  <a
                    href={demo.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost w-full group"
                  >
                    <span className="mr-2">{demo.action}</span>
                    <NavigationIcons.ExternalLink 
                      size="xs" 
                      className="transition-transform group-hover:translate-x-1"
                      aria-label="Abrir demo en nueva ventana"
                    />
                  </a>
                </div>
              )
            })}
          </div>

          {/* Bottom Note */}
          <div className="text-center mt-12">
            <p className="text-text-muted text-sm">
              Estos demos usan datos simulados para mostrar funcionalidades reales
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default DemoSection 