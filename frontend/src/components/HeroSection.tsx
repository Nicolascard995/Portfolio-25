'use client'

import { useState, useEffect, useRef } from 'react';
import { NavigationIcons } from './IconSystem';
import { getTranslation } from '@/config/translations';
import { useParams } from 'next/navigation';

const HeroSection = () => {
  const params = useParams();
  const currentLocale = params.locale as string;
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Función para manejar la carga del video
  const handleVideoLoad = () => {
    setVideoLoaded(true);
  };

  const handleVideoError = () => {
    setVideoLoaded(false);
  };

  // Precargar el video cuando el componente se monta
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
    }
  }, []);

  return (
    <section id="inicio" className="min-h-screen relative overflow-hidden flex items-center">
      {/* Background Video - Full Screen */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster="/img/hero-poster.jpg"
          className="w-full h-full object-cover object-center"
          style={{ 
            objectFit: 'cover',
            objectPosition: 'center'
          }}
          onLoadedData={handleVideoLoad}
          onError={handleVideoError}
          onCanPlay={handleVideoLoad}
          onLoadStart={handleVideoLoad}
          onLoadedMetadata={handleVideoLoad}
        >
          <source src="/img/hero-desktop.mp4" type="video/mp4" />
        </video>
        {/* Fallback background color if video doesn't load */}
        <div 
          className={`absolute inset-0 bg-gradient-to-br from-dark-absolute via-dark-absolute/90 to-dark-absolute transition-opacity duration-200 ${videoLoaded ? 'opacity-0' : 'opacity-100'}`}
        />
      </div>
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-dark-absolute/70 z-0"></div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-absolute/30 to-dark-absolute/80 z-0"></div>
      
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
              <span className="text-gradient block mb-6">{getTranslation(currentLocale, 'hero.title')}</span>
              <span className="block text-2xl md:text-3xl lg:text-4xl font-normal text-text-secondary leading-relaxed">
                {getTranslation(currentLocale, 'hero.description')}
              </span>
            </h1>
          </div>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-6 items-center justify-center">
            <a href={`/${currentLocale}#como-trabajo`} className="btn-primary btn-icon-right text-lg px-8 py-4 rounded-full group">
              <span>{getTranslation(currentLocale, 'hero.cta')}</span>
              <NavigationIcons.ArrowRight 
                size="sm" 
                className="transition-transform group-hover:translate-x-1"
                aria-label="Ir a empezar ahora"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection 