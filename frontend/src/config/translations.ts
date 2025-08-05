// Importar las traducciones desde los archivos JSON
import esTranslations from '../../messages/es.json';
import enTranslations from '../../messages/en.json';
import deTranslations from '../../messages/de.json';

// Configuración centralizada de traducciones usando archivos JSON
export const translations = {
  es: esTranslations,
  en: enTranslations,
  de: deTranslations
};

// Hook personalizado para usar traducciones
export const useTranslations = (locale: string, namespace: string) => {
  const getTranslation = (key: string) => {
    const keys = key.split('.');
    let value: any = translations[locale as keyof typeof translations] || translations.es;
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        // En lugar de console.warn, solo retornar la clave
        return key;
      }
    }
    
    return value;
  };

  return { getTranslation };
};

// Función utilitaria para obtener traducciones
export const getTranslation = (locale: string, key: string) => {
  const keys = key.split('.');
  let value: any = translations[locale as keyof typeof translations] || translations.es;
  
  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k];
    } else {
      // En lugar de console.warn, solo retornar la clave
      return key;
    }
  }
  
  return value;
}; 