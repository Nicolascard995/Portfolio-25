'use client'

import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useParams } from 'next/navigation';

export const useLanguage = () => {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const currentLocale = params.locale as string;
  
  const [preferredLocale, setPreferredLocale] = useState<string>('es');

  useEffect(() => {
    // Cargar preferencia guardada
    const saved = localStorage.getItem('preferred-locale');
    if (saved && ['es', 'en', 'de'].includes(saved)) {
      setPreferredLocale(saved);
    }
  }, []);

  const changeLanguage = (newLocale: string) => {
    // Persistir preferencia
    localStorage.setItem('preferred-locale', newLocale);
    setPreferredLocale(newLocale);
    
    // Navegar sin recarga
    const newPath = pathname.replace(`/${currentLocale}`, `/${newLocale}`);
    router.push(newPath);
  };

  const getPreferredLanguage = () => {
    if (typeof window === 'undefined') return 'es';
    
    // 1. Preferencia guardada
    const saved = localStorage.getItem('preferred-locale');
    if (saved && ['es', 'en', 'de'].includes(saved)) {
      return saved;
    }
    
    // 2. Idioma del navegador
    const browserLang = navigator.language.split('-')[0];
    if (['es', 'en', 'de'].includes(browserLang)) {
      return browserLang;
    }
    
    // 3. Idioma por defecto
    return 'es';
  };

  return {
    currentLocale,
    preferredLocale,
    changeLanguage,
    getPreferredLanguage
  };
}; 