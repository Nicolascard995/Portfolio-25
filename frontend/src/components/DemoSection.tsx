'use client'

import React from 'react'
import { FeatureIcons, NavigationIcons } from './IconSystem'
import { getTranslation } from '@/config/translations'
import { useParams } from 'next/navigation'

const DemoSection = () => {
  const params = useParams();
  const currentLocale = params.locale as string;

  const demos = getTranslation(currentLocale, 'demo.projects') as any[];

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
              <span className="text-sm font-mono text-text-secondary">{getTranslation(currentLocale, 'demo.badge')}</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-text-primary tracking-tight">
              <span className="text-gradient">{getTranslation(currentLocale, 'demo.title')}</span>
            </h2>
            <p className="text-lg md:text-xl text-text-secondary leading-relaxed">
              {getTranslation(currentLocale, 'demo.description')}
            </p>
          </div>

          {/* Demos Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {demos.map((demo, index) => {
              const IconComponent = getIcon(demo.icon)
              return (
                <div key={index} className="card-glow group text-left">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className={`w-12 h-12 bg-gradient-to-r ${index % 2 === 0 ? 'from-accent-mint to-accent-blue' : 'from-accent-blue to-accent-mint'} rounded-xl flex items-center justify-center flex-shrink-0`}>
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
                    <span className="mr-2">{demo.cta}</span>
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

        </div>
      </div>
    </section>
  )
}

export default DemoSection 