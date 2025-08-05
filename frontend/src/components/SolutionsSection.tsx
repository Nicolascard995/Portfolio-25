'use client'

import React from 'react'
import { FeatureIcons, NavigationIcons } from './IconSystem'
import { getTranslation } from '@/config/translations'
import { useParams } from 'next/navigation'

const SolutionsSection = () => {
  const params = useParams();
  const currentLocale = params.locale as string;

  const solutions = [
    {
      icon: 'Settings',
      title: getTranslation(currentLocale, 'solutions.operational.title'),
      description: getTranslation(currentLocale, 'solutions.operational.description'),
      benefit: getTranslation(currentLocale, 'solutions.operational.benefit'),
      technologies: ['Python', 'PostgreSQL', 'FastAPI', 'Docker'],
      color: 'from-accent-mint to-accent-blue'
    },
    {
      icon: 'BarChart3',
      title: getTranslation(currentLocale, 'solutions.analytics.title'),
      description: getTranslation(currentLocale, 'solutions.analytics.description'),
      benefit: getTranslation(currentLocale, 'solutions.analytics.benefit'),
      technologies: ['Pandas', 'NumPy', 'Scikit-learn', 'TensorFlow'],
      color: 'from-accent-blue to-accent-mint'
    },
    {
      icon: 'Bot',
      title: getTranslation(currentLocale, 'solutions.automation.title'),
      description: getTranslation(currentLocale, 'solutions.automation.description'),
      benefit: getTranslation(currentLocale, 'solutions.automation.benefit'),
      technologies: ['LangChain', 'OpenAI API', 'Pinecone', 'n8n'],
      color: 'from-accent-mint to-accent-blue'
    }
  ]

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Settings':
        return FeatureIcons.Settings
      case 'BarChart3':
        return FeatureIcons.BarChart3
      case 'Bot':
        return FeatureIcons.Bot
      default:
        return FeatureIcons.Settings
    }
  }

  return (
    <section id="soluciones" className="section-spacing bg-dark-absolute">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center space-y-16">
          
          {/* Header */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold text-text-primary tracking-tight">
              {getTranslation(currentLocale, 'solutions.title')}
            </h2>
            <p className="text-lg md:text-xl text-text-secondary leading-relaxed max-w-3xl mx-auto">
              {getTranslation(currentLocale, 'solutions.description')}
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
                  
                  <p className="text-text-secondary leading-relaxed mb-4">
                    {solution.description}
                  </p>
                  
                  <div className="text-sm font-semibold text-accent-mint mb-6">
                    {solution.benefit}
                  </div>
                  
                  {/* Technologies */}
                  <div className="space-y-3">
                    <div className="text-sm font-medium text-text-muted">{getTranslation(currentLocale, 'solutions.tech_label')}</div>
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



        </div>
      </div>
    </section>
  )
}

export default SolutionsSection 