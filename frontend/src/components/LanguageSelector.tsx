'use client'

import { useRouter, usePathname } from 'next/navigation';
import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import { ChevronDown, Globe } from 'lucide-react';
import { getTranslation } from '@/config/translations';

const LanguageSelector = () => {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const currentLocale = params.locale as string;
  
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const locales = [
    { code: 'es', name: getTranslation('es', 'language_selector.es'), flag: '🇪🇸' },
    { code: 'en', name: getTranslation('en', 'language_selector.en'), flag: '🇺🇸' },
    { code: 'de', name: getTranslation('de', 'language_selector.de'), flag: '🇩🇪' }
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleLanguageChange = (newLocale: string) => {
    // Persistir preferencia
    if (typeof window !== 'undefined') {
      localStorage.setItem('preferred-locale', newLocale);
    }
    
    // Navegar sin recarga
    const newPath = pathname.replace(`/${currentLocale}`, `/${newLocale}`);
    router.push(newPath);
    setIsOpen(false);
  };

  const currentLanguage = locales.find(l => l.code === currentLocale);

  if (!mounted) return null;

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 rounded-lg border border-border-subtle bg-dark-card hover:bg-dark-surface transition-all duration-300 text-text-secondary hover:text-accent-mint"
        aria-label="Cambiar idioma"
      >
        <Globe size={16} />
        <span className="text-sm font-medium">{currentLanguage?.flag} {currentLanguage?.name}</span>
        <ChevronDown size={14} className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-48 bg-dark-card border border-border-subtle rounded-lg shadow-lg z-50 animate-slide-down">
          <div className="py-2">
            {locales.map((locale) => (
              <button
                key={locale.code}
                onClick={() => handleLanguageChange(locale.code)}
                className={`w-full text-left px-4 py-2 text-sm transition-colors duration-200 flex items-center space-x-3 ${
                  locale.code === currentLocale
                    ? 'bg-accent-mint text-dark-absolute'
                    : 'text-text-secondary hover:text-accent-mint hover:bg-dark-surface'
                }`}
              >
                <span className="text-lg">{locale.flag}</span>
                <span className="font-medium">{locale.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector; 