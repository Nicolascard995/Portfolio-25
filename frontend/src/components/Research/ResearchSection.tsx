'use client'

import React, { useState } from 'react'
import { FeatureIcons, NavigationIcons, ActionIcons } from '../IconSystem'
import MLProject from './MLProject'
import FruitClassifierProject from './FruitClassifierProject'
import PyTorchProject from './PyTorchProject'
import ConvolutionalClassifierProject from './ConvolutionalClassifierProject'
import { getTranslation } from '@/config/translations'
import { useParams } from 'next/navigation'

const ResearchSection = () => {
  const [activeProject, setActiveProject] = useState(0)
  const params = useParams();
  const currentLocale = params.locale as string;

  const projects = [
    {
      id: 'ml-project',
      title: getTranslation(currentLocale, 'research.projects.ml_project.title'),
      description: getTranslation(currentLocale, 'research.projects.ml_project.description'),
      component: <MLProject />
    },
    {
      id: 'fruit-classifier',
      title: getTranslation(currentLocale, 'research.projects.fruit_classifier.title'),
      description: getTranslation(currentLocale, 'research.projects.fruit_classifier.description'),
      component: <FruitClassifierProject />
    },
    {
      id: 'pytorch',
      title: getTranslation(currentLocale, 'research.projects.pytorch.title'),
      description: getTranslation(currentLocale, 'research.projects.pytorch.description'),
      component: <PyTorchProject />
    },
    {
      id: 'convolutional-classifier',
      title: getTranslation(currentLocale, 'research.projects.convolutional_classifier.title'),
      description: getTranslation(currentLocale, 'research.projects.convolutional_classifier.description'),
      component: <ConvolutionalClassifierProject />
    }
  ]

  return (
    <section id="investigacion" className="section-spacing bg-dark-surface">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16 space-y-6">
            <div className="inline-flex items-center space-x-3 glass rounded-full px-6 py-3 border border-border-subtle">
              <FeatureIcons.Brain 
                size="sm" 
                className="text-accent-mint"
                aria-label="Brain icon"
              />
              <span className="text-sm font-mono text-text-secondary">{getTranslation(currentLocale, 'research.badge')}</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-text-primary tracking-tight">
              <span className="text-gradient">{getTranslation(currentLocale, 'research.title')}</span>
            </h2>
            <p className="text-lg md:text-xl text-text-secondary leading-relaxed max-w-3xl mx-auto">
              {getTranslation(currentLocale, 'research.description')}
            </p>
          </div>

          {/* Navegación de proyectos */}
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-4">
              {projects.map((project, index) => (
                <button
                  key={project.id}
                  onClick={() => setActiveProject(index)}
                  className={`px-6 py-4 rounded-xl transition-all duration-300 flex items-center space-x-3 ${
                    activeProject === index
                      ? 'bg-gradient-to-r from-accent-mint to-accent-blue text-dark-absolute border-2 border-transparent'
                      : 'bg-dark-card border-2 border-border-subtle hover:border-accent-mint/50 text-text-secondary hover:text-text-primary'
                  }`}
                >
                  <span className="text-lg">{project.title}</span>
                  <div className="text-xs opacity-75">
                    {project.description}
                  </div>
                  {activeProject === index && (
                    <NavigationIcons.ArrowRight 
                      size="xs" 
                      className="animate-pulse"
                    />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Contenido del proyecto activo con scroll */}
          <div className="relative">
            <div className="max-h-[80vh] overflow-y-auto custom-scrollbar rounded-2xl border border-border-subtle bg-dark-absolute/50 p-8">
              {projects[activeProject].component}
            </div>
            
            {/* Indicador de scroll */}
            <div className="absolute bottom-4 right-4 text-xs text-text-muted opacity-50">
              {getTranslation(currentLocale, 'research.scroll_indicator')}
            </div>
          </div>

          {/* Navegación adicional */}
          <div className="mt-8 flex justify-center gap-4">
            <button
              onClick={() => setActiveProject(Math.max(0, activeProject - 1))}
              disabled={activeProject === 0}
              className="btn-ghost btn-icon-left px-4 py-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ActionIcons.ArrowLeft size="sm" />
              <span>{getTranslation(currentLocale, 'research.navigation.previous')}</span>
            </button>
            
            <div className="flex items-center space-x-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveProject(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    activeProject === index ? 'bg-accent-mint w-8' : 'bg-border-subtle hover:bg-accent-mint/50'
                  }`}
                  aria-label={`${getTranslation(currentLocale, 'research.navigation.go_to_project')} ${index + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={() => setActiveProject(Math.min(projects.length - 1, activeProject + 1))}
              disabled={activeProject === projects.length - 1}
              className="btn-ghost btn-icon-right px-4 py-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span>{getTranslation(currentLocale, 'research.navigation.next')}</span>
              <NavigationIcons.ArrowRight size="sm" />
            </button>
          </div>

        </div>
      </div>
    </section>
  )
}

export default ResearchSection 