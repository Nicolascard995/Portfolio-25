'use client'

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { getTranslation } from '@/config/translations';
import { useParams } from 'next/navigation';

const AboutMeSection = () => {
  const params = useParams();
  const currentLocale = params.locale as string;
  const [activeRoleIndex, setActiveRoleIndex] = useState(0);
  
  // Obtener roles desde las traducciones
  const roles = getTranslation(currentLocale, 'aboutMe.roles.list') as string[];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section id="about-me" className="relative min-h-screen flex items-center">
      
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-8 animate-slide-up">
              <div className="inline-flex items-center space-x-2 glass rounded-full px-4 py-2 border border-border-subtle">
                <div className="w-2 h-2 bg-accent-mint rounded-full animate-pulse"></div>
                <span className="text-sm font-mono text-text-secondary">{getTranslation(currentLocale, 'aboutMe.badge')}</span>
              </div>
              
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold text-text-primary leading-tight">
                  <span className="text-gradient">{getTranslation(currentLocale, 'aboutMe.title')}</span>
                </h2>
                
                <p className="text-xl text-text-secondary leading-relaxed">
                  {getTranslation(currentLocale, 'aboutMe.description1')}
                </p>
                
                <p className="text-lg text-text-secondary leading-relaxed">
                  {getTranslation(currentLocale, 'aboutMe.description2')}
                </p>
              </div>
              
              {/* Rotating roles section */}
              <div className="space-y-4 py-6">
                <div className="text-lg text-text-secondary">
                  {getTranslation(currentLocale, 'aboutMe.roles.prefix')}
                </div>
                
                <div className="h-12 flex items-center">
                  <div className="text-xl md:text-2xl font-semibold tracking-tight text-text-primary transition-all duration-500 ease-in-out">
                    {roles[activeRoleIndex]}
                  </div>
                </div>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-accent-mint">4+</div>
                  <div className="text-sm text-text-secondary">{getTranslation(currentLocale, 'aboutMe.stats.experience')}</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-accent-blue">6+</div>
                  <div className="text-sm text-text-secondary">{getTranslation(currentLocale, 'aboutMe.stats.projects')}</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-accent-mint">1200+</div>
                  <div className="text-sm text-text-secondary">{getTranslation(currentLocale, 'aboutMe.stats.satisfaction')}</div>
                </div>
              </div>
            </div>
            
            {/* Image/Visual Element */}
            <div className="relative">
              <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden border border-border-subtle">
                <Image
                  src="/img/aboutme.jpg"
                  alt="Nicolás Cardozo trabajando"
                  fill
                  className="object-cover object-center"
                  quality={90}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-absolute/80 via-transparent to-transparent"></div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-accent-mint to-accent-blue rounded-full opacity-20 animate-float"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent-blue rounded-full opacity-30 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMeSection 