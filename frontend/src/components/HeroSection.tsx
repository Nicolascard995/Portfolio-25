'use client'

import { useState, useEffect } from 'react';
import { NavigationIcons } from './IconSystem';
import Image from 'next/image';
import { getTranslation } from '@/config/translations';
import { useParams } from 'next/navigation';

const HeroSection = () => {
  const params = useParams();
  const currentLocale = params.locale as string;
  const [activeRoleIndex, setActiveRoleIndex] = useState(0);
  
  // Obtener roles desde las traducciones
  const roles = getTranslation(currentLocale, 'hero.roles.list') as string[];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section id="inicio" className="min-h-screen relative overflow-hidden flex items-center">
      {/* Background Video - Desktop */}
      <div className="absolute inset-0 z-0 hidden md:block">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center"
          poster="/img/hero section 2025.png"
        >
          <source src="/img/hero-desktop.mp4" type="video/mp4" />
          {/* Fallback image if video doesn't load */}
          <Image
            src="/img/hero section 2025.png"
            alt="Dozo.Tech Hero Background Desktop"
            fill
            className="object-cover object-center"
            priority
            quality={90}
          />
        </video>
      </div>
      
      {/* Background Image - Mobile */}
      <div className="absolute inset-0 z-0 md:hidden">
        <Image
          src="/img/hero4mobile.png"
          alt="Dozo.Tech Hero Background Mobile"
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
      </div>
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-dark-absolute/80 z-0"></div>
      
      {/* Gradient overlay */}
      <div className="hero-gradient z-0"></div>
      
      {/* Animated background dots */}
      <div className="absolute inset-0 opacity-5 z-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-accent-mint rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-accent-blue rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-accent-mint rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-1/3 w-1 h-1 bg-accent-blue rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-12 animate-slide-up">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 glass rounded-full px-4 py-2 border border-border-subtle">
            <div className="w-2 h-2 bg-accent-mint rounded-full animate-pulse"></div>
            <span className="text-sm font-mono text-text-secondary">{getTranslation(currentLocale, 'hero.badge')}</span>
          </div>

          {/* Main Headline */}
          <div className="space-y-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-text-primary leading-[1.1] tracking-tight">
              <span className="block mb-4">{getTranslation(currentLocale, 'hero.title')}</span>
              <span className="text-gradient block mb-6">{getTranslation(currentLocale, 'hero.subtitle')}</span>
              <span className="block text-2xl md:text-3xl lg:text-4xl font-normal text-text-secondary leading-relaxed">
                {getTranslation(currentLocale, 'hero.description')}
              </span>
            </h1>
            
            {/* Rotating roles section */}
            <div className="space-y-6 py-8">
              <div className="text-xl md:text-2xl text-text-secondary">
                {getTranslation(currentLocale, 'hero.roles.prefix')}
              </div>
              
              <div className="h-16 flex items-center justify-center">
                <div className="text-2xl md:text-4xl font-semibold tracking-tight text-text-primary transition-all duration-500 ease-in-out">
                  {roles[activeRoleIndex]}
                </div>
              </div>
              
              <div className="space-y-2 text-xl md:text-2xl">
                <div className="font-bold text-white">{getTranslation(currentLocale, 'hero.roles.suffix')}</div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-6 items-center justify-center">
            <button className="btn-primary btn-icon-right text-lg px-8 py-4 rounded-full group">
              <span>{getTranslation(currentLocale, 'hero.cta')}</span>
              <NavigationIcons.ArrowRight 
                size="sm" 
                className="transition-transform group-hover:translate-x-1"
                aria-label="Ir a empezar ahora"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection 