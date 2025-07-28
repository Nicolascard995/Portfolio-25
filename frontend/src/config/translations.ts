// Configuración centralizada de traducciones usando variables de entorno
export const translations = {
  es: {
    navigation: {
      home: process.env.NEXT_PUBLIC_NAV_HOME_ES || 'Inicio',
      approach: process.env.NEXT_PUBLIC_NAV_APPROACH_ES || 'Cómo trabajo',
      solutions: process.env.NEXT_PUBLIC_NAV_SOLUTIONS_ES || 'Soluciones',
      contact: process.env.NEXT_PUBLIC_NAV_CONTACT_ES || 'Contacto'
    },
    hero: {
      badge: process.env.NEXT_PUBLIC_HERO_BADGE_ES || 'DOZO.TECH | Sistemas que Respiran',
      title: process.env.NEXT_PUBLIC_HERO_TITLE_ES || 'Automatizá como si fueras',
      subtitle: process.env.NEXT_PUBLIC_HERO_SUBTITLE_ES || '10 personas',
      description: process.env.NEXT_PUBLIC_HERO_DESCRIPTION_ES || 'Sin caos. Sin estructuras innecesarias. Solo procesos que funcionan.',
      roles: {
        prefix: 'No soy solo un...',
        suffix: 'Soy Nico. Y diseño sistemas que respiran.',
        list: [
          'Científico de Datos',
          'Emprendedor',
          'Chef',
          'Consultor de Automatización',
          'Consultor Business Intelligence'
        ]
      },
      cta: process.env.NEXT_PUBLIC_HERO_CTA_ES || 'Empezar ahora'
    },
    footer: {
      contact_title: process.env.NEXT_PUBLIC_FOOTER_CONTACT_TITLE_ES || 'Hablemos de tu próximo gran paso.',
      contact_description: process.env.NEXT_PUBLIC_FOOTER_CONTACT_DESC_ES || 'Transforma tus ideas en resultados tangibles.',
      placeholder_email: process.env.NEXT_PUBLIC_FOOTER_EMAIL_PLACEHOLDER_ES || 'Tu email',
      placeholder_message: process.env.NEXT_PUBLIC_FOOTER_MESSAGE_PLACEHOLDER_ES || '¿Cómo podemos ayudarte?',
      send_button: process.env.NEXT_PUBLIC_FOOTER_SEND_BUTTON_ES || 'Enviar',
      privacy_policy: 'Política de Privacidad',
      terms_of_service: 'Términos de Servicio',
      copyright: process.env.NEXT_PUBLIC_FOOTER_COPYRIGHT_ES || '© 2024 Dozo.Tech. Todos los derechos reservados.',
      contact_info: {
        email: 'nicolas@dozo.tech',
        phone: '+56 9 1234 5678',
        location: 'Santiago, Chile'
      },
      social: {
        follow_me: 'Seguime',
        linkedin: 'LinkedIn',
        github: 'GitHub',
        twitter: 'Twitter'
      }
    },
    metadata: {
      title_tag: process.env.NEXT_PUBLIC_META_TITLE_ES || 'Dozo.Tech | Automatización e IA para tu Negocio',
      description_tag: process.env.NEXT_PUBLIC_META_DESC_ES || 'Impulsa tu negocio con soluciones de IA y automatización a medida. De la estrategia a la implementación, sin complicaciones.'
    },
    common: {
      loading: 'Cargando...',
      error: 'Error',
      success: 'Éxito',
      close: 'Cerrar',
      save: 'Guardar',
      cancel: 'Cancelar'
    },
    language_selector: {
      es: process.env.NEXT_PUBLIC_LANG_ES || 'Español',
      en: process.env.NEXT_PUBLIC_LANG_EN || 'English',
      de: process.env.NEXT_PUBLIC_LANG_DE || 'Deutsch'
    }
  },
  en: {
    navigation: {
      home: process.env.NEXT_PUBLIC_NAV_HOME_EN || 'Home',
      approach: process.env.NEXT_PUBLIC_NAV_APPROACH_EN || 'How I Work',
      solutions: process.env.NEXT_PUBLIC_NAV_SOLUTIONS_EN || 'Solutions',
      contact: process.env.NEXT_PUBLIC_NAV_CONTACT_EN || 'Contact'
    },
    hero: {
      badge: process.env.NEXT_PUBLIC_HERO_BADGE_EN || 'DOZO.TECH | Systems That Breathe',
      title: process.env.NEXT_PUBLIC_HERO_TITLE_EN || 'Automate as if you were',
      subtitle: process.env.NEXT_PUBLIC_HERO_SUBTITLE_EN || '10 people',
      description: process.env.NEXT_PUBLIC_HERO_DESCRIPTION_EN || 'No chaos. No unnecessary structures. Just processes that work.',
      roles: {
        prefix: 'I\'m not just a...',
        suffix: 'I\'m Nico. And I design systems that breathe.',
        list: [
          'Data Scientist',
          'Entrepreneur',
          'Chef',
          'Automation Consultant',
          'Business Intelligence Consultant'
        ]
      },
      cta: process.env.NEXT_PUBLIC_HERO_CTA_EN || 'Get Started Now'
    },
    footer: {
      contact_title: process.env.NEXT_PUBLIC_FOOTER_CONTACT_TITLE_EN || 'Let\'s talk about your next big step.',
      contact_description: process.env.NEXT_PUBLIC_FOOTER_CONTACT_DESC_EN || 'Transform your ideas into tangible results.',
      placeholder_email: process.env.NEXT_PUBLIC_FOOTER_EMAIL_PLACEHOLDER_EN || 'Your email',
      placeholder_message: process.env.NEXT_PUBLIC_FOOTER_MESSAGE_PLACEHOLDER_EN || 'How can we help you?',
      send_button: process.env.NEXT_PUBLIC_FOOTER_SEND_BUTTON_EN || 'Send',
      privacy_policy: 'Privacy Policy',
      terms_of_service: 'Terms of Service',
      copyright: process.env.NEXT_PUBLIC_FOOTER_COPYRIGHT_EN || '© 2024 Dozo.Tech. All rights reserved.',
      contact_info: {
        email: 'nicolas@dozo.tech',
        phone: '+56 9 1234 5678',
        location: 'Santiago, Chile'
      },
      social: {
        follow_me: 'Follow me',
        linkedin: 'LinkedIn',
        github: 'GitHub',
        twitter: 'Twitter'
      }
    },
    metadata: {
      title_tag: process.env.NEXT_PUBLIC_META_TITLE_EN || 'Dozo.Tech | Automation & AI for Your Business',
      description_tag: process.env.NEXT_PUBLIC_META_DESC_EN || 'Boost your business with custom AI and automation solutions. From strategy to implementation, without complications.'
    },
    common: {
      loading: 'Loading...',
      error: 'Error',
      success: 'Success',
      close: 'Close',
      save: 'Save',
      cancel: 'Cancel'
    },
    language_selector: {
      es: process.env.NEXT_PUBLIC_LANG_ES || 'Español',
      en: process.env.NEXT_PUBLIC_LANG_EN || 'English',
      de: process.env.NEXT_PUBLIC_LANG_DE || 'Deutsch'
    }
  },
  de: {
    navigation: {
      home: process.env.NEXT_PUBLIC_NAV_HOME_DE || 'Startseite',
      approach: process.env.NEXT_PUBLIC_NAV_APPROACH_DE || 'Arbeitsweise',
      solutions: process.env.NEXT_PUBLIC_NAV_SOLUTIONS_DE || 'Lösungen',
      contact: process.env.NEXT_PUBLIC_NAV_CONTACT_DE || 'Kontakt'
    },
    hero: {
      badge: process.env.NEXT_PUBLIC_HERO_BADGE_DE || 'DOZO.TECH | Systeme, die atmen',
      title: process.env.NEXT_PUBLIC_HERO_TITLE_DE || 'Automatisieren Sie, als wären Sie',
      subtitle: process.env.NEXT_PUBLIC_HERO_SUBTITLE_DE || '10 Personen',
      description: process.env.NEXT_PUBLIC_HERO_DESCRIPTION_DE || 'Kein Chaos. Keine unnötigen Strukturen. Nur Prozesse, die funktionieren.',
      roles: {
        prefix: 'Ich bin nicht nur ein...',
        suffix: 'Ich bin Nico. Und ich entwerfe Systeme, die atmen.',
        list: [
          'Datenwissenschaftler',
          'Unternehmer',
          'Koch',
          'Automatisierungsberater',
          'Business-Intelligence-Berater'
        ]
      },
      cta: process.env.NEXT_PUBLIC_HERO_CTA_DE || 'Jetzt starten'
    },
    footer: {
      contact_title: process.env.NEXT_PUBLIC_FOOTER_CONTACT_TITLE_DE || 'Lassen Sie uns über Ihren nächsten großen Schritt sprechen.',
      contact_description: process.env.NEXT_PUBLIC_FOOTER_CONTACT_DESC_DE || 'Verwandeln Sie Ihre Ideen in greifbare Ergebnisse.',
      placeholder_email: process.env.NEXT_PUBLIC_FOOTER_EMAIL_PLACEHOLDER_DE || 'Ihre E-Mail',
      placeholder_message: process.env.NEXT_PUBLIC_FOOTER_MESSAGE_PLACEHOLDER_DE || 'Wie können wir Ihnen helfen?',
      send_button: process.env.NEXT_PUBLIC_FOOTER_SEND_BUTTON_DE || 'Senden',
      privacy_policy: 'Datenschutzbestimmungen',
      terms_of_service: 'Nutzungsbedingungen',
      copyright: process.env.NEXT_PUBLIC_FOOTER_COPYRIGHT_DE || '© 2024 Dozo.Tech. Alle Rechte vorbehalten.',
      contact_info: {
        email: 'nicolas@dozo.tech',
        phone: '+56 9 1234 5678',
        location: 'Santiago, Chile'
      },
      social: {
        follow_me: 'Folgen Sie mir',
        linkedin: 'LinkedIn',
        github: 'GitHub',
        twitter: 'Twitter'
      }
    },
    metadata: {
      title_tag: process.env.NEXT_PUBLIC_META_TITLE_DE || 'Dozo.Tech | Automatisierung & KI für Ihr Unternehmen',
      description_tag: process.env.NEXT_PUBLIC_META_DESC_DE || 'Steigern Sie Ihr Geschäft mit maßgeschneiderten KI- und Automatisierungslösungen. Von der Strategie bis zur Umsetzung, unkompliziert.'
    },
    common: {
      loading: 'Laden...',
      error: 'Fehler',
      success: 'Erfolg',
      close: 'Schließen',
      save: 'Speichern',
      cancel: 'Abbrechen'
    },
    language_selector: {
      es: process.env.NEXT_PUBLIC_LANG_ES || 'Español',
      en: process.env.NEXT_PUBLIC_LANG_EN || 'English',
      de: process.env.NEXT_PUBLIC_LANG_DE || 'Deutsch'
    }
  }
};

// Hook personalizado para usar traducciones
export const useTranslations = (locale: string, namespace: string) => {
  const getTranslation = (key: string) => {
    const keys = key.split('.');
    let value: any = translations[locale as keyof typeof translations];
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return key; // Fallback a la clave si no se encuentra
      }
    }
    
    return value;
  };

  return {
    t: getTranslation,
    raw: (key: string) => getTranslation(key)
  };
};

// Función para obtener traducción directa
export const getTranslation = (locale: string, key: string) => {
  const keys = key.split('.');
  let value: any = translations[locale as keyof typeof translations];
  
  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k];
    } else {
      return key; // Fallback a la clave si no se encuentra
    }
  }
  
  return value;
}; 