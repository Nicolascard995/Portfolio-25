'use client'

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useState } from 'react';
import { LogoIcons, NavigationIcons } from './IconSystem';
import LanguageSelector from './LanguageSelector';
import { getTranslation } from '@/config/translations';

const Header = () => {
  const params = useParams();
  const currentLocale = params.locale as string;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: getTranslation(currentLocale, 'navigation.home'), href: `/${currentLocale}#inicio` },
    { name: getTranslation(currentLocale, 'navigation.approach'), href: `/${currentLocale}#como-trabajo` },
    { name: getTranslation(currentLocale, 'navigation.solutions'), href: `/${currentLocale}#soluciones` },
    { name: getTranslation(currentLocale, 'navigation.contact'), href: `/${currentLocale}#contacto` }
  ];

  return (
    <header className="fixed top-0 w-full glass-strong border-b border-border-subtle z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative group">
              <LogoIcons.Brain 
                size="lg" 
                className="text-accent-mint transition-all duration-300 group-hover:text-accent-mint-hover"
                aria-label="Icono cerebro Dozo.Tech"
              />
              <LogoIcons.Zap 
                size="xs" 
                className="text-accent-blue absolute -top-1 -right-1 animate-pulse"
                aria-label="Icono energía"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-gradient font-dozotech">Dozo.Tech</span>
              <span className="text-xs text-text-muted leading-none font-mono">Sistemas que Respiran</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-text-secondary hover:text-accent-mint transition-all duration-300 font-medium relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent-mint transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageSelector />
            <button className="btn-primary text-sm px-6 py-2">
              Empezar ahora
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-dark-surface transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {isMenuOpen ? (
              <NavigationIcons.X 
                size="md" 
                className="text-text-secondary"
                aria-label="Cerrar menú"
              />
            ) : (
              <NavigationIcons.Menu 
                size="md" 
                className="text-text-secondary"
                aria-label="Abrir menú"
              />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border-subtle glass-strong animate-slide-down">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-text-secondary hover:text-accent-mint transition-all duration-300 font-medium px-4 py-2 hover:bg-dark-surface rounded-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
                  <div className="px-4 py-2">
                    <LanguageSelector />
                  </div>
                </nav>
              </div>
            )}
          </div>
        </header>
      );
    };

    export default Header; 