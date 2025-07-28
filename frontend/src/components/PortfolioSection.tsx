'use client'

import React from 'react'
import { FeatureIcons, NavigationIcons } from './IconSystem'
import { getTranslation } from '@/config/translations'
import { useParams } from 'next/navigation'

const PortfolioSection = () => {
  const params = useParams();
  const currentLocale = params.locale as string;

  const projects = getTranslation(currentLocale, 'portfolio.projects') as any[];

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
              <span className="text-gradient">{getTranslation(currentLocale, 'portfolio.title')}</span>
            </h2>
            <p className="text-lg md:text-xl text-text-secondary leading-relaxed max-w-3xl mx-auto">
              {getTranslation(currentLocale, 'portfolio.description')}
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {projects.map((project, index) => {
              const IconComponent = getIcon(project.icon)
              return (
                <div key={index} className="card-glow group">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className={`w-12 h-12 bg-gradient-to-r ${index % 2 === 0 ? 'from-accent-mint to-accent-blue' : 'from-accent-blue to-accent-mint'} rounded-xl flex items-center justify-center flex-shrink-0`}>
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
                    <div className="text-sm font-medium text-text-muted">{getTranslation(currentLocale, 'portfolio.stack_label')}</div>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech: string, techIndex: number) => (
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
          <div className="flex justify-center">
            <button className="btn-ghost btn-icon-right group">
              <span>{getTranslation(currentLocale, 'portfolio.cta')}</span>
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