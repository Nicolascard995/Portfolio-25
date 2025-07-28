'use client'

import React from 'react'
import { FeatureIcons, NavigationIcons } from './IconSystem'
import { getTranslation } from '@/config/translations'
import { useParams } from 'next/navigation'

const ApproachSection = () => {
  const params = useParams();
  const currentLocale = params.locale as string;

  return (
    <section id="como-trabajo" className="section-spacing bg-dark-absolute">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center space-y-16">
          
          {/* Header */}
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-3 glass rounded-full px-6 py-3 border border-border-subtle">
              <FeatureIcons.ChefHat 
                size="sm" 
                className="text-accent-mint"
                aria-label="Chef hat icon"
              />
              <span className="text-sm font-mono text-text-secondary">{getTranslation(currentLocale, 'approach.badge')}</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-text-primary tracking-tight">
              <span className="text-gradient">{getTranslation(currentLocale, 'approach.title')}</span>
            </h2>
          </div>

          {/* Main Content Card */}
          <div className="card-glow max-w-3xl mx-auto text-left">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-accent-mint to-accent-blue rounded-xl flex items-center justify-center flex-shrink-0">
                <FeatureIcons.Settings 
                  size="md" 
                  className="text-dark-absolute"
                  aria-label="Settings icon"
                />
              </div>
              <div className="space-y-4">
                <p className="text-lg md:text-xl text-text-primary leading-relaxed">
                  {getTranslation(currentLocale, 'approach.main_text')}
                </p>
                <p className="text-base md:text-lg text-text-secondary leading-relaxed">
                  {getTranslation(currentLocale, 'approach.description')}
                </p>
              </div>
            </div>
            
            <div className="border-t border-border-subtle pt-6 space-y-4">
              <p className="text-lg md:text-xl text-text-primary font-medium">
                {getTranslation(currentLocale, 'approach.subtitle')}
              </p>
              <p className="text-base md:text-lg text-text-secondary leading-relaxed">
                {getTranslation(currentLocale, 'approach.subtitle_description')}
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="flex justify-center">
            <button className="btn-ghost btn-icon-right group">
              <span>{getTranslation(currentLocale, 'approach.cta')}</span>
              <NavigationIcons.ArrowRight 
                size="sm" 
                className="transition-transform group-hover:translate-x-1"
                aria-label="Ver soluciones"
              />
            </button>
          </div>

        </div>
      </div>
    </section>
  )
}

export default ApproachSection 