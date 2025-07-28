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
      },
      privacy: process.env.NEXT_PUBLIC_FOOTER_LINK_PRIVACY_ES || 'Privacidad',
      terms: process.env.NEXT_PUBLIC_FOOTER_LINK_TERMS_ES || 'Términos',
      cookies: process.env.NEXT_PUBLIC_FOOTER_LINK_COOKIES_ES || 'Cookies'
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
    },
    solutions: {
      title: process.env.NEXT_PUBLIC_SOLUTIONS_TITLE_ES || 'Soluciones Inteligentes que Respiran',
      description: process.env.NEXT_PUBLIC_SOLUTIONS_DESC_ES || 'No implemento IA por moda. Diseño herramientas que resuelven tareas específicas con impacto real. Cada solución está pensada para escalar sin sumar complejidad.',
      badge: process.env.NEXT_PUBLIC_SOLUTIONS_BADGE_ES || 'CÓMO TRABAJO',
      analytics: {
        title: process.env.NEXT_PUBLIC_SOLUTIONS_ANALYTICS_TITLE_ES || 'Análisis accionable',
        description: process.env.NEXT_PUBLIC_SOLUTIONS_ANALYTICS_DESC_ES || 'Tus datos no son para decorar dashboards. Te dicen qué hacer, cuándo y por qué.'
      },
      ai: {
        title: process.env.NEXT_PUBLIC_SOLUTIONS_AI_TITLE_ES || 'Asistentes inteligentes',
        description: process.env.NEXT_PUBLIC_SOLUTIONS_AI_DESC_ES || 'IA que responde, entiende y escala sin necesidad de supervisión constante.'
      },
      integration: {
        title: process.env.NEXT_PUBLIC_SOLUTIONS_INTEGRATION_TITLE_ES || 'Integraciones sin fricción',
        description: process.env.NEXT_PUBLIC_SOLUTIONS_INTEGRATION_DESC_ES || 'Todo se conecta: WhatsApp, Notion, Sheets, APIs. Nada queda suelto.'
      },
      tech_label: process.env.NEXT_PUBLIC_SOLUTIONS_TECH_LABEL_ES || 'Tecnologías:',
      cta: process.env.NEXT_PUBLIC_SOLUTIONS_CTA_ES || 'Ver casos reales'
    },
    approach: {
      badge: process.env.NEXT_PUBLIC_APPROACH_BADGE_ES || 'CÓMO TRABAJO',
      title: process.env.NEXT_PUBLIC_APPROACH_TITLE_ES || 'Mise en place digital',
      main_text: process.env.NEXT_PUBLIC_APPROACH_MAIN_TEXT_ES || 'Como en la cocina: antes de ejecutar, ordenamos.',
      description: process.env.NEXT_PUBLIC_APPROACH_DESC_ES || 'Analizo tus sistemas, identifico los ingredientes (datos) y diseño un flujo limpio, reproducible y escalable.',
      subtitle: process.env.NEXT_PUBLIC_APPROACH_SUBTITLE_ES || 'Esto no es solo automatización.',
      subtitle_description: process.env.NEXT_PUBLIC_APPROACH_SUBTITLE_DESC_ES || 'Es inteligencia operacional: saber dónde intervenir para crecer sin sumar complejidad.',
      cta: process.env.NEXT_PUBLIC_APPROACH_CTA_ES || 'Conocé mis soluciones'
    },
    blog: {
      title: process.env.NEXT_PUBLIC_BLOG_TITLE_ES || 'Aprendizajes y Automatización',
      description: process.env.NEXT_PUBLIC_BLOG_DESC_ES || 'Ideas accionables, sin promesas vacías. Historias reales de automatización, eficiencia y decisiones técnicas que sí funcionaron.',
      featured: process.env.NEXT_PUBLIC_BLOG_FEATURED_ES || 'DESTACADO',
      read_time: process.env.NEXT_PUBLIC_BLOG_READ_TIME_ES || 'min',
      coming_soon: process.env.NEXT_PUBLIC_BLOG_COMING_SOON_ES || 'Próximamente',
      read_button: process.env.NEXT_PUBLIC_BLOG_READ_BUTTON_ES || 'Leer',
      newsletter: {
        placeholder: process.env.NEXT_PUBLIC_BLOG_NEWSLETTER_PLACEHOLDER_ES || 'Tu email para recibir insights',
        button: process.env.NEXT_PUBLIC_BLOG_NEWSLETTER_BUTTON_ES || 'Suscribirse'
      },
      posts: [
        {
          title: process.env.NEXT_PUBLIC_BLOG_POST_1_TITLE_ES || 'Qué procesos automatizar primero si sos una agencia chica',
          excerpt: process.env.NEXT_PUBLIC_BLOG_POST_1_EXCERPT_ES || 'Checklist claro para evitar automatizar lo que no hace falta.',
          category: process.env.NEXT_PUBLIC_BLOG_CATEGORY_SERVICES_ES || 'Servicios',
          readTime: '6 min',
          featured: true
        },
        {
          title: process.env.NEXT_PUBLIC_BLOG_POST_2_TITLE_ES || 'ChatGPT vs Claude vs Gemini',
          excerpt: process.env.NEXT_PUBLIC_BLOG_POST_2_EXCERPT_ES || 'Cuál elegir según tu contexto (y no solo lo que está de moda).',
          category: process.env.NEXT_PUBLIC_BLOG_CATEGORY_TECH_ES || 'Tecnología',
          readTime: '8 min'
        },
        {
          title: process.env.NEXT_PUBLIC_BLOG_POST_3_TITLE_ES || '3 automatizaciones reales que cambiaron operaciones',
          excerpt: process.env.NEXT_PUBLIC_BLOG_POST_3_EXCERPT_ES || 'Historias reales, sin ROI inflado ni promesas vacías.',
          category: process.env.NEXT_PUBLIC_BLOG_CATEGORY_CASES_ES || 'Casos Reales',
          readTime: '10 min'
        }
      ]
    },
    portfolio: {
      title: process.env.NEXT_PUBLIC_PORTFOLIO_TITLE_ES || 'Casos Reales',
      description: process.env.NEXT_PUBLIC_PORTFOLIO_DESC_ES || 'Historias reales de automatización y eficiencia sin promesas exageradas. Sistemas que funcionaron desde el primer día y siguen mejorando.',
      stack_label: process.env.NEXT_PUBLIC_PORTFOLIO_STACK_LABEL_ES || 'Stack:',
      cta: process.env.NEXT_PUBLIC_PORTFOLIO_CTA_ES || 'Ver portfolio completo',
      projects: [
        {
          title: process.env.NEXT_PUBLIC_PORTFOLIO_PROJECT_1_TITLE_ES || 'Sistema de Inventario Inteligente',
          description: process.env.NEXT_PUBLIC_PORTFOLIO_PROJECT_1_DESC_ES || 'Reducimos roturas de stock y creamos alertas predictivas.',
          sector: process.env.NEXT_PUBLIC_PORTFOLIO_SECTOR_GASTRONOMY_ES || 'Gastronomía',
          stack: ['Python', 'FastAPI', 'Google Sheets'],
          icon: 'Target'
        },
        {
          title: process.env.NEXT_PUBLIC_PORTFOLIO_PROJECT_2_TITLE_ES || 'Chatbot para atención 24/7',
          description: process.env.NEXT_PUBLIC_PORTFOLIO_PROJECT_2_DESC_ES || 'Menos tickets. Mejor experiencia. Automatización con sentido común.',
          sector: process.env.NEXT_PUBLIC_PORTFOLIO_SECTOR_RETAIL_ES || 'Retail',
          stack: ['Claude', 'WhatsApp API', 'MongoDB'],
          icon: 'MessageCircle'
        },
        {
          title: process.env.NEXT_PUBLIC_PORTFOLIO_PROJECT_3_TITLE_ES || 'Dashboard de Operaciones',
          description: process.env.NEXT_PUBLIC_PORTFOLIO_PROJECT_3_DESC_ES || 'Visualización en tiempo real con alertas automáticas.',
          sector: process.env.NEXT_PUBLIC_PORTFOLIO_SECTOR_SERVICES_ES || 'Servicios',
          stack: ['React', 'Pandas', 'Grafana'],
          icon: 'BarChart3'
        }
      ]
    },
    demo: {
      badge: process.env.NEXT_PUBLIC_DEMO_BADGE_ES || 'DEMOS EN VIVO',
      title: process.env.NEXT_PUBLIC_DEMO_TITLE_ES || 'Experimentá los Sistemas',
      description: process.env.NEXT_PUBLIC_DEMO_DESC_ES || 'Demos interactivos para que veas cómo funcionan los sistemas antes de implementarlos.',
      projects: [
        {
          title: process.env.NEXT_PUBLIC_DEMO_PROJECT_1_TITLE_ES || 'Demo: Dashboard de ventas con alertas inteligentes',
          description: process.env.NEXT_PUBLIC_DEMO_PROJECT_1_DESC_ES || 'Explorá cómo se visualizan métricas clave en tiempo real con IA simple.',
          cta: process.env.NEXT_PUBLIC_DEMO_PROJECT_1_CTA_ES || 'Probar demo en vivo',
          href: '/demo/analytics',
          icon: 'BarChart3'
        },
        {
          title: process.env.NEXT_PUBLIC_DEMO_PROJECT_2_TITLE_ES || 'Probá un Asistente IA en vivo',
          description: process.env.NEXT_PUBLIC_DEMO_PROJECT_2_DESC_ES || 'Este chatbot demuestra cómo tu negocio podría responder 24/7 sin perder humanidad.',
          cta: process.env.NEXT_PUBLIC_DEMO_PROJECT_2_CTA_ES || 'Probar asistente en vivo',
          href: '/test-chatbot',
          icon: 'MessageCircle'
        }
      ]
    },
    chatbot: {
      initial_message: process.env.NEXT_PUBLIC_CHATBOT_INITIAL_MESSAGE_ES || 'Hola, soy tu asistente de Dozo.Tech 👋\n\n¿En qué puedo ayudarte hoy?',
      response: process.env.NEXT_PUBLIC_CHATBOT_RESPONSE_ES || '¡Gracias por escribirme! 😊\n\nTe responderé muy pronto. Para consultas urgentes, puedes escribirme a nicolas@dozo.tech',
      title: process.env.NEXT_PUBLIC_CHATBOT_TITLE_ES || 'Asistente Dozo.Tech',
      status: process.env.NEXT_PUBLIC_CHATBOT_STATUS_ES || 'En línea',
      placeholder: process.env.NEXT_PUBLIC_CHATBOT_PLACEHOLDER_ES || 'Escribe tu mensaje...',
      send_button: process.env.NEXT_PUBLIC_CHATBOT_SEND_BUTTON_ES || 'Enviar'
    },
    lead_capture: {
      float_button: process.env.NEXT_PUBLIC_LEAD_FLOAT_BUTTON_ES || 'Empezar ahora',
      float_subtitle: process.env.NEXT_PUBLIC_LEAD_FLOAT_SUBTITLE_ES || 'Gratuito • 30 min',
      title: process.env.NEXT_PUBLIC_LEAD_FLOAT_TITLE_ES || 'Agendar consultoría',
      name_placeholder: process.env.NEXT_PUBLIC_LEAD_NAME_PLACEHOLDER_ES || 'Nombre',
      email_placeholder: process.env.NEXT_PUBLIC_LEAD_EMAIL_PLACEHOLDER_ES || 'Email',
      company_placeholder: process.env.NEXT_PUBLIC_LEAD_COMPANY_PLACEHOLDER_ES || 'Empresa (opcional)',
      message_placeholder: process.env.NEXT_PUBLIC_LEAD_MESSAGE_PLACEHOLDER_ES || 'Mensaje (opcional)',
      submit_button: process.env.NEXT_PUBLIC_LEAD_SUBMIT_BUTTON_ES || 'Enviar'
    },
    toast: {
      required_fields: process.env.NEXT_PUBLIC_TOAST_REQUIRED_FIELDS_ES || 'Por favor completá los campos requeridos',
      success: process.env.NEXT_PUBLIC_TOAST_SUCCESS_ES || '¡Listo! Te contacto en 24hs máximo.',
      error: process.env.NEXT_PUBLIC_TOAST_ERROR_ES || 'Error al enviar. Intentá de nuevo.'
    },
    meta: {
      site_name: process.env.NEXT_PUBLIC_META_SITE_NAME_ES || 'Dozo.Tech',
      site_description: process.env.NEXT_PUBLIC_META_SITE_DESCRIPTION_ES || 'Automatización e IA para tu Negocio',
      keywords: process.env.NEXT_PUBLIC_META_KEYWORDS_ES || 'automatización, inteligencia artificial, IA, eficiencia, procesos, negocio, tecnología',
      author: process.env.NEXT_PUBLIC_META_AUTHOR_ES || 'Nicolás Cardozo',
      og_type: process.env.NEXT_PUBLIC_META_OG_TYPE_ES || 'website',
      og_image: process.env.NEXT_PUBLIC_META_OG_IMAGE_ES || 'https://dozo.tech/og-image-es.jpg',
      twitter_card: process.env.NEXT_PUBLIC_META_TWITTER_CARD_ES || 'summary_large_image',
      twitter_site: process.env.NEXT_PUBLIC_META_TWITTER_SITE_ES || '@dozotech',
      twitter_creator: process.env.NEXT_PUBLIC_META_TWITTER_CREATOR_ES || '@nicocard95',
      robots: process.env.NEXT_PUBLIC_META_ROBOTS_ES || 'index, follow',
      canonical: process.env.NEXT_PUBLIC_META_CANONICAL_ES || 'https://dozo.tech/es',
      alternate: process.env.NEXT_PUBLIC_META_ALTERNATE_ES || 'https://dozo.tech/es'
    },
    loading: {
      title: process.env.NEXT_PUBLIC_LOADING_TITLE_ES || 'Cargando...',
      description: process.env.NEXT_PUBLIC_LOADING_DESCRIPTION_ES || 'Preparando tu experiencia'
    },
    error: {
      '404': {
        title: process.env.NEXT_PUBLIC_ERROR_404_TITLE_ES || 'Página no encontrada',
        description: process.env.NEXT_PUBLIC_ERROR_404_DESCRIPTION_ES || 'La página que buscas no existe',
        button: process.env.NEXT_PUBLIC_ERROR_404_BUTTON_ES || 'Volver al inicio'
      },
      '500': {
        title: process.env.NEXT_PUBLIC_ERROR_500_TITLE_ES || 'Error del servidor',
        description: process.env.NEXT_PUBLIC_ERROR_500_DESCRIPTION_ES || 'Algo salió mal en nuestro servidor',
        button: process.env.NEXT_PUBLIC_ERROR_500_BUTTON_ES || 'Intentar de nuevo'
      }
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
      },
      privacy: process.env.NEXT_PUBLIC_FOOTER_LINK_PRIVACY_EN || 'Privacy',
      terms: process.env.NEXT_PUBLIC_FOOTER_LINK_TERMS_EN || 'Terms',
      cookies: process.env.NEXT_PUBLIC_FOOTER_LINK_COOKIES_EN || 'Cookies'
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
    },
    solutions: {
      title: process.env.NEXT_PUBLIC_SOLUTIONS_TITLE_EN || 'Intelligent Solutions That Breathe',
      description: process.env.NEXT_PUBLIC_SOLUTIONS_DESC_EN || 'I don\'t implement AI for fashion. I design tools that solve specific tasks with real impact. Each solution is designed to scale without adding complexity.',
      badge: process.env.NEXT_PUBLIC_SOLUTIONS_BADGE_EN || 'HOW I WORK',
      analytics: {
        title: process.env.NEXT_PUBLIC_SOLUTIONS_ANALYTICS_TITLE_EN || 'Actionable Analytics',
        description: process.env.NEXT_PUBLIC_SOLUTIONS_ANALYTICS_DESC_EN || 'Your data isn\'t for decorating dashboards. It tells you what to do, when and why.'
      },
      ai: {
        title: process.env.NEXT_PUBLIC_SOLUTIONS_AI_TITLE_EN || 'Intelligent Assistants',
        description: process.env.NEXT_PUBLIC_SOLUTIONS_AI_DESC_EN || 'AI that responds, understands and scales without constant supervision.'
      },
      integration: {
        title: process.env.NEXT_PUBLIC_SOLUTIONS_INTEGRATION_TITLE_EN || 'Frictionless Integrations',
        description: process.env.NEXT_PUBLIC_SOLUTIONS_INTEGRATION_DESC_EN || 'Everything connects: WhatsApp, Notion, Sheets, APIs. Nothing is left loose.'
      },
      tech_label: process.env.NEXT_PUBLIC_SOLUTIONS_TECH_LABEL_EN || 'Technologies:',
      cta: process.env.NEXT_PUBLIC_SOLUTIONS_CTA_EN || 'See Real Cases'
    },
    approach: {
      badge: process.env.NEXT_PUBLIC_APPROACH_BADGE_EN || 'HOW I WORK',
      title: process.env.NEXT_PUBLIC_APPROACH_TITLE_EN || 'Digital Mise en Place',
      main_text: process.env.NEXT_PUBLIC_APPROACH_MAIN_TEXT_EN || 'Like in the kitchen: before executing, we organize.',
      description: process.env.NEXT_PUBLIC_APPROACH_DESC_EN || 'I analyze your systems, identify the ingredients (data) and design a clean, reproducible and scalable flow.',
      subtitle: process.env.NEXT_PUBLIC_APPROACH_SUBTITLE_EN || 'This is not just automation.',
      subtitle_description: process.env.NEXT_PUBLIC_APPROACH_SUBTITLE_DESC_EN || 'It\'s operational intelligence: knowing where to intervene to grow without adding complexity.',
      cta: process.env.NEXT_PUBLIC_APPROACH_CTA_EN || 'See My Solutions'
    },
    blog: {
      title: process.env.NEXT_PUBLIC_BLOG_TITLE_EN || 'Learnings and Automation',
      description: process.env.NEXT_PUBLIC_BLOG_DESC_EN || 'Actionable ideas, without empty promises. Real stories of automation, efficiency and technical decisions that actually worked.',
      featured: process.env.NEXT_PUBLIC_BLOG_FEATURED_EN || 'FEATURED',
      read_time: process.env.NEXT_PUBLIC_BLOG_READ_TIME_EN || 'min',
      coming_soon: process.env.NEXT_PUBLIC_BLOG_COMING_SOON_EN || 'Coming Soon',
      read_button: process.env.NEXT_PUBLIC_BLOG_READ_BUTTON_EN || 'Read',
      newsletter: {
        placeholder: process.env.NEXT_PUBLIC_BLOG_NEWSLETTER_PLACEHOLDER_EN || 'Your email to receive insights',
        button: process.env.NEXT_PUBLIC_BLOG_NEWSLETTER_BUTTON_EN || 'Subscribe'
      },
      posts: [
        {
          title: process.env.NEXT_PUBLIC_BLOG_POST_1_TITLE_EN || 'Which processes to automate first if you\'re a small agency',
          excerpt: process.env.NEXT_PUBLIC_BLOG_POST_1_EXCERPT_EN || 'Clear checklist to avoid automating what\'s not needed.',
          category: process.env.NEXT_PUBLIC_BLOG_CATEGORY_SERVICES_EN || 'Services',
          readTime: '6 min',
          featured: true
        },
        {
          title: process.env.NEXT_PUBLIC_BLOG_POST_2_TITLE_EN || 'ChatGPT vs Claude vs Gemini',
          excerpt: process.env.NEXT_PUBLIC_BLOG_POST_2_EXCERPT_EN || 'Which one to choose according to your context (and not just what\'s trendy).',
          category: process.env.NEXT_PUBLIC_BLOG_CATEGORY_TECH_EN || 'Technology',
          readTime: '8 min'
        },
        {
          title: process.env.NEXT_PUBLIC_BLOG_POST_3_TITLE_EN || '3 real automations that changed operations',
          excerpt: process.env.NEXT_PUBLIC_BLOG_POST_3_EXCERPT_EN || 'Real stories, without inflated ROI or empty promises.',
          category: process.env.NEXT_PUBLIC_BLOG_CATEGORY_CASES_EN || 'Real Cases',
          readTime: '10 min'
        }
      ]
    },
    portfolio: {
      title: process.env.NEXT_PUBLIC_PORTFOLIO_TITLE_EN || 'Real Cases',
      description: process.env.NEXT_PUBLIC_PORTFOLIO_DESC_EN || 'Real stories of automation and efficiency without exaggerated promises. Systems that worked from day one and keep improving.',
      stack_label: process.env.NEXT_PUBLIC_PORTFOLIO_STACK_LABEL_EN || 'Stack:',
      cta: process.env.NEXT_PUBLIC_PORTFOLIO_CTA_EN || 'See Full Portfolio',
      projects: [
        {
          title: process.env.NEXT_PUBLIC_PORTFOLIO_PROJECT_1_TITLE_EN || 'Intelligent Inventory System',
          description: process.env.NEXT_PUBLIC_PORTFOLIO_PROJECT_1_DESC_EN || 'We reduced stockouts and created predictive alerts.',
          sector: process.env.NEXT_PUBLIC_PORTFOLIO_SECTOR_GASTRONOMY_EN || 'Gastronomy',
          stack: ['Python', 'FastAPI', 'Google Sheets'],
          icon: 'Target'
        },
        {
          title: process.env.NEXT_PUBLIC_PORTFOLIO_PROJECT_2_TITLE_EN || '24/7 Customer Service Chatbot',
          description: process.env.NEXT_PUBLIC_PORTFOLIO_PROJECT_2_DESC_EN || 'Fewer tickets. Better experience. Automation with common sense.',
          sector: process.env.NEXT_PUBLIC_PORTFOLIO_SECTOR_RETAIL_EN || 'Retail',
          stack: ['Claude', 'WhatsApp API', 'MongoDB'],
          icon: 'MessageCircle'
        },
        {
          title: process.env.NEXT_PUBLIC_PORTFOLIO_PROJECT_3_TITLE_EN || 'Operations Dashboard',
          description: process.env.NEXT_PUBLIC_PORTFOLIO_PROJECT_3_DESC_EN || 'Real-time visualization with automatic alerts.',
          sector: process.env.NEXT_PUBLIC_PORTFOLIO_SECTOR_SERVICES_EN || 'Services',
          stack: ['React', 'Pandas', 'Grafana'],
          icon: 'BarChart3'
        }
      ]
    },
    demo: {
      badge: process.env.NEXT_PUBLIC_DEMO_BADGE_EN || 'LIVE DEMOS',
      title: process.env.NEXT_PUBLIC_DEMO_TITLE_EN || 'Experience the Systems',
      description: process.env.NEXT_PUBLIC_DEMO_DESC_EN || 'Interactive demos so you can see how systems work before implementing them.',
      projects: [
        {
          title: process.env.NEXT_PUBLIC_DEMO_PROJECT_1_TITLE_EN || 'Demo: Sales Dashboard with Intelligent Alerts',
          description: process.env.NEXT_PUBLIC_DEMO_PROJECT_1_DESC_EN || 'Explore how key metrics are visualized in real-time with simple AI.',
          cta: process.env.NEXT_PUBLIC_DEMO_PROJECT_1_CTA_EN || 'Try Live Demo',
          href: '/demo/analytics',
          icon: 'BarChart3'
        },
        {
          title: process.env.NEXT_PUBLIC_DEMO_PROJECT_2_TITLE_EN || 'Try a Live AI Assistant',
          description: process.env.NEXT_PUBLIC_DEMO_PROJECT_2_DESC_EN || 'This chatbot demonstrates how your business could respond 24/7 without losing humanity.',
          cta: process.env.NEXT_PUBLIC_DEMO_PROJECT_2_CTA_EN || 'Try Live Assistant',
          href: '/test-chatbot',
          icon: 'MessageCircle'
        }
      ]
    },
    meta: {
      site_name: process.env.NEXT_PUBLIC_META_SITE_NAME_EN || 'Dozo.Tech',
      site_description: process.env.NEXT_PUBLIC_META_SITE_DESCRIPTION_EN || 'Automation & AI for Your Business',
      keywords: process.env.NEXT_PUBLIC_META_KEYWORDS_EN || 'automation, artificial intelligence, AI, efficiency, processes, business, technology',
      author: process.env.NEXT_PUBLIC_META_AUTHOR_EN || 'Nicolás Cardozo',
      og_type: process.env.NEXT_PUBLIC_META_OG_TYPE_EN || 'website',
      og_image: process.env.NEXT_PUBLIC_META_OG_IMAGE_EN || 'https://dozo.tech/og-image-en.jpg',
      twitter_card: process.env.NEXT_PUBLIC_META_TWITTER_CARD_EN || 'summary_large_image',
      twitter_site: process.env.NEXT_PUBLIC_META_TWITTER_SITE_EN || '@dozotech',
      twitter_creator: process.env.NEXT_PUBLIC_META_TWITTER_CREATOR_EN || '@nicocard95',
      robots: process.env.NEXT_PUBLIC_META_ROBOTS_EN || 'index, follow',
      canonical: process.env.NEXT_PUBLIC_META_CANONICAL_EN || 'https://dozo.tech/en',
      alternate: process.env.NEXT_PUBLIC_META_ALTERNATE_EN || 'https://dozo.tech/en'
    },
    loading: {
      title: process.env.NEXT_PUBLIC_LOADING_TITLE_EN || 'Loading...',
      description: process.env.NEXT_PUBLIC_LOADING_DESCRIPTION_EN || 'Preparing your experience'
    },
    error: {
      '404': {
        title: process.env.NEXT_PUBLIC_ERROR_404_TITLE_EN || 'Page not found',
        description: process.env.NEXT_PUBLIC_ERROR_404_DESCRIPTION_EN || 'The page you\'re looking for doesn\'t exist',
        button: process.env.NEXT_PUBLIC_ERROR_404_BUTTON_EN || 'Back to home'
      },
      '500': {
        title: process.env.NEXT_PUBLIC_ERROR_500_TITLE_EN || 'Server error',
        description: process.env.NEXT_PUBLIC_ERROR_500_DESCRIPTION_EN || 'Something went wrong on our server',
        button: process.env.NEXT_PUBLIC_ERROR_500_BUTTON_EN || 'Try again'
      }
    },
    chatbot: {
      initial_message: process.env.NEXT_PUBLIC_CHATBOT_INITIAL_MESSAGE_EN || 'Hello, I\'m your Dozo.Tech assistant 👋\n\nHow can I help you today?',
      response: process.env.NEXT_PUBLIC_CHATBOT_RESPONSE_EN || 'Thank you for writing to me! 😊\n\nI\'ll respond very soon. For urgent inquiries, you can write to me at nicolas@dozo.tech',
      title: process.env.NEXT_PUBLIC_CHATBOT_TITLE_EN || 'Dozo.Tech Assistant',
      status: process.env.NEXT_PUBLIC_CHATBOT_STATUS_EN || 'Online',
      placeholder: process.env.NEXT_PUBLIC_CHATBOT_PLACEHOLDER_EN || 'Type your message...',
      send_button: process.env.NEXT_PUBLIC_CHATBOT_SEND_BUTTON_EN || 'Send'
    },
    lead_capture: {
      float_button: process.env.NEXT_PUBLIC_LEAD_FLOAT_BUTTON_EN || 'Get Started Now',
      float_subtitle: process.env.NEXT_PUBLIC_LEAD_FLOAT_SUBTITLE_EN || 'Free • 30 min',
      title: process.env.NEXT_PUBLIC_LEAD_FLOAT_TITLE_EN || 'Schedule Consultation',
      name_placeholder: process.env.NEXT_PUBLIC_LEAD_NAME_PLACEHOLDER_EN || 'Name',
      email_placeholder: process.env.NEXT_PUBLIC_LEAD_EMAIL_PLACEHOLDER_EN || 'Email',
      company_placeholder: process.env.NEXT_PUBLIC_LEAD_COMPANY_PLACEHOLDER_EN || 'Company (optional)',
      message_placeholder: process.env.NEXT_PUBLIC_LEAD_MESSAGE_PLACEHOLDER_EN || 'Message (optional)',
      submit_button: process.env.NEXT_PUBLIC_LEAD_SUBMIT_BUTTON_EN || 'Send'
    },
    toast: {
      required_fields: process.env.NEXT_PUBLIC_TOAST_REQUIRED_FIELDS_EN || 'Please complete the required fields',
      success: process.env.NEXT_PUBLIC_TOAST_SUCCESS_EN || 'Done! I\'ll contact you within 24 hours.',
      error: process.env.NEXT_PUBLIC_TOAST_ERROR_EN || 'Error sending. Please try again.'
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
      },
      privacy: process.env.NEXT_PUBLIC_FOOTER_LINK_PRIVACY_DE || 'Datenschutz',
      terms: process.env.NEXT_PUBLIC_FOOTER_LINK_TERMS_DE || 'AGB',
      cookies: process.env.NEXT_PUBLIC_FOOTER_LINK_COOKIES_DE || 'Cookies'
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
    },
    solutions: {
      title: process.env.NEXT_PUBLIC_SOLUTIONS_TITLE_DE || 'Intelligente Lösungen, die atmen',
      description: process.env.NEXT_PUBLIC_SOLUTIONS_DESC_DE || 'Ich implementiere KI nicht aus Mode. Ich entwerfe Tools, die spezifische Aufgaben mit echten Auswirkungen lösen. Jede Lösung ist darauf ausgelegt, zu skalieren, ohne Komplexität hinzuzufügen.',
      badge: process.env.NEXT_PUBLIC_SOLUTIONS_BADGE_DE || 'WIE ICH ARBEITE',
      analytics: {
        title: process.env.NEXT_PUBLIC_SOLUTIONS_ANALYTICS_TITLE_DE || 'Handlungsorientierte Analysen',
        description: process.env.NEXT_PUBLIC_SOLUTIONS_ANALYTICS_DESC_DE || 'Ihre Daten sind nicht zum Dekorieren von Dashboards. Sie sagen Ihnen, was, wann und warum zu tun ist.'
      },
      ai: {
        title: process.env.NEXT_PUBLIC_SOLUTIONS_AI_TITLE_DE || 'Intelligente Assistenten',
        description: process.env.NEXT_PUBLIC_SOLUTIONS_AI_DESC_DE || 'KI, die antwortet, versteht und ohne ständige Aufsicht skaliert.'
      },
      integration: {
        title: process.env.NEXT_PUBLIC_SOLUTIONS_INTEGRATION_TITLE_DE || 'Reibungslose Integrationen',
        description: process.env.NEXT_PUBLIC_SOLUTIONS_INTEGRATION_DESC_DE || 'Alles verbindet sich: WhatsApp, Notion, Sheets, APIs. Nichts bleibt lose.'
      },
      tech_label: process.env.NEXT_PUBLIC_SOLUTIONS_TECH_LABEL_DE || 'Technologien:',
      cta: process.env.NEXT_PUBLIC_SOLUTIONS_CTA_DE || 'Echte Fälle sehen'
    },
    approach: {
      badge: process.env.NEXT_PUBLIC_APPROACH_BADGE_DE || 'WIE ICH ARBEITE',
      title: process.env.NEXT_PUBLIC_APPROACH_TITLE_DE || 'Digitale Mise en Place',
      main_text: process.env.NEXT_PUBLIC_APPROACH_MAIN_TEXT_DE || 'Wie in der Küche: Vor dem Ausführen organisieren wir.',
      description: process.env.NEXT_PUBLIC_APPROACH_DESC_DE || 'Ich analysiere Ihre Systeme, identifiziere die Zutaten (Daten) und entwerfe einen sauberen, reproduzierbaren und skalierbaren Ablauf.',
      subtitle: process.env.NEXT_PUBLIC_APPROACH_SUBTITLE_DE || 'Das ist nicht nur Automatisierung.',
      subtitle_description: process.env.NEXT_PUBLIC_APPROACH_SUBTITLE_DESC_DE || 'Es ist operative Intelligenz: zu wissen, wo man eingreifen muss, um zu wachsen, ohne Komplexität hinzuzufügen.',
      cta: process.env.NEXT_PUBLIC_APPROACH_CTA_DE || 'Meine Lösungen sehen'
    },
    blog: {
      title: process.env.NEXT_PUBLIC_BLOG_TITLE_DE || 'Lernprozesse und Automatisierung',
      description: process.env.NEXT_PUBLIC_BLOG_DESC_DE || 'Umsetzbare Ideen, ohne leere Versprechen. Echte Geschichten über Automatisierung, Effizienz und technische Entscheidungen, die tatsächlich funktioniert haben.',
      featured: process.env.NEXT_PUBLIC_BLOG_FEATURED_DE || 'EMPFOHLEN',
      read_time: process.env.NEXT_PUBLIC_BLOG_READ_TIME_DE || 'Min',
      coming_soon: process.env.NEXT_PUBLIC_BLOG_COMING_SOON_DE || 'Demnächst',
      read_button: process.env.NEXT_PUBLIC_BLOG_READ_BUTTON_DE || 'Lesen',
      newsletter: {
        placeholder: process.env.NEXT_PUBLIC_BLOG_NEWSLETTER_PLACEHOLDER_DE || 'Ihre E-Mail für Erkenntnisse',
        button: process.env.NEXT_PUBLIC_BLOG_NEWSLETTER_BUTTON_DE || 'Abonnieren'
      },
      posts: [
        {
          title: process.env.NEXT_PUBLIC_BLOG_POST_1_TITLE_DE || 'Welche Prozesse zuerst automatisieren, wenn Sie eine kleine Agentur sind',
          excerpt: process.env.NEXT_PUBLIC_BLOG_POST_1_EXCERPT_DE || 'Klare Checkliste, um zu vermeiden, was nicht automatisiert werden muss.',
          category: process.env.NEXT_PUBLIC_BLOG_CATEGORY_SERVICES_DE || 'Dienstleistungen',
          readTime: '6 min',
          featured: true
        },
        {
          title: process.env.NEXT_PUBLIC_BLOG_POST_2_TITLE_DE || 'ChatGPT vs Claude vs Gemini',
          excerpt: process.env.NEXT_PUBLIC_BLOG_POST_2_EXCERPT_DE || 'Welches Sie je nach Kontext wählen sollten (und nicht nur, was trendy ist).',
          category: process.env.NEXT_PUBLIC_BLOG_CATEGORY_TECH_DE || 'Technologie',
          readTime: '8 min'
        },
        {
          title: process.env.NEXT_PUBLIC_BLOG_POST_3_TITLE_DE || '3 echte Automatisierungen, die Operationen verändert haben',
          excerpt: process.env.NEXT_PUBLIC_BLOG_POST_3_EXCERPT_DE || 'Echte Geschichten, ohne aufgeblähtes ROI oder leere Versprechen.',
          category: process.env.NEXT_PUBLIC_BLOG_CATEGORY_CASES_DE || 'Echte Fälle',
          readTime: '10 min'
        }
      ]
    },
    portfolio: {
      title: process.env.NEXT_PUBLIC_PORTFOLIO_TITLE_DE || 'Echte Fälle',
      description: process.env.NEXT_PUBLIC_PORTFOLIO_DESC_DE || 'Echte Geschichten über Automatisierung und Effizienz ohne übertriebene Versprechen. Systeme, die vom ersten Tag an funktioniert haben und sich ständig verbessern.',
      stack_label: process.env.NEXT_PUBLIC_PORTFOLIO_STACK_LABEL_DE || 'Stack:',
      cta: process.env.NEXT_PUBLIC_PORTFOLIO_CTA_DE || 'Vollständiges Portfolio sehen',
      projects: [
        {
          title: process.env.NEXT_PUBLIC_PORTFOLIO_PROJECT_1_TITLE_DE || 'Intelligentes Inventarsystem',
          description: process.env.NEXT_PUBLIC_PORTFOLIO_PROJECT_1_DESC_DE || 'Wir reduzierten Lagerausfälle und erstellten prädiktive Warnungen.',
          sector: process.env.NEXT_PUBLIC_PORTFOLIO_SECTOR_GASTRONOMY_DE || 'Gastronomie',
          stack: ['Python', 'FastAPI', 'Google Sheets'],
          icon: 'Target'
        },
        {
          title: process.env.NEXT_PUBLIC_PORTFOLIO_PROJECT_2_TITLE_DE || '24/7 Kundenservice-Chatbot',
          description: process.env.NEXT_PUBLIC_PORTFOLIO_PROJECT_2_DESC_DE || 'Weniger Tickets. Bessere Erfahrung. Automatisierung mit gesundem Menschenverstand.',
          sector: process.env.NEXT_PUBLIC_PORTFOLIO_SECTOR_RETAIL_DE || 'Einzelhandel',
          stack: ['Claude', 'WhatsApp API', 'MongoDB'],
          icon: 'MessageCircle'
        },
        {
          title: process.env.NEXT_PUBLIC_PORTFOLIO_PROJECT_3_TITLE_DE || 'Operations-Dashboard',
          description: process.env.NEXT_PUBLIC_PORTFOLIO_PROJECT_3_DESC_DE || 'Echtzeitvisualisierung mit automatischen Warnungen.',
          sector: process.env.NEXT_PUBLIC_PORTFOLIO_SECTOR_SERVICES_DE || 'Dienstleistungen',
          stack: ['React', 'Pandas', 'Grafana'],
          icon: 'BarChart3'
        }
      ]
    },
    demo: {
      badge: process.env.NEXT_PUBLIC_DEMO_BADGE_DE || 'LIVE-DEMOS',
      title: process.env.NEXT_PUBLIC_DEMO_TITLE_DE || 'Erleben Sie die Systeme',
      description: process.env.NEXT_PUBLIC_DEMO_DESC_DE || 'Interaktive Demos, damit Sie sehen können, wie Systeme funktionieren, bevor Sie sie implementieren.',
      projects: [
        {
          title: process.env.NEXT_PUBLIC_DEMO_PROJECT_1_TITLE_DE || 'Demo: Verkaufs-Dashboard mit intelligenten Warnungen',
          description: process.env.NEXT_PUBLIC_DEMO_PROJECT_1_DESC_DE || 'Erkunden Sie, wie Schlüsselkennzahlen in Echtzeit mit einfacher KI visualisiert werden.',
          cta: process.env.NEXT_PUBLIC_DEMO_PROJECT_1_CTA_DE || 'Live-Demo testen',
          href: '/demo/analytics',
          icon: 'BarChart3'
        },
        {
          title: process.env.NEXT_PUBLIC_DEMO_PROJECT_2_TITLE_DE || 'Testen Sie einen Live-KI-Assistenten',
          description: process.env.NEXT_PUBLIC_DEMO_PROJECT_2_DESC_DE || 'Dieser Chatbot zeigt, wie Ihr Unternehmen 24/7 antworten könnte, ohne die Menschlichkeit zu verlieren.',
          cta: process.env.NEXT_PUBLIC_DEMO_PROJECT_2_CTA_DE || 'Live-Assistenten testen',
          href: '/test-chatbot',
          icon: 'MessageCircle'
        }
      ]
    },
    meta: {
      site_name: process.env.NEXT_PUBLIC_META_SITE_NAME_DE || 'Dozo.Tech',
      site_description: process.env.NEXT_PUBLIC_META_SITE_DESCRIPTION_DE || 'Automatisierung & KI für Ihr Unternehmen',
      keywords: process.env.NEXT_PUBLIC_META_KEYWORDS_DE || 'Automatisierung, künstliche Intelligenz, KI, Effizienz, Prozesse, Geschäft, Technologie',
      author: process.env.NEXT_PUBLIC_META_AUTHOR_DE || 'Nicolás Cardozo',
      og_type: process.env.NEXT_PUBLIC_META_OG_TYPE_DE || 'website',
      og_image: process.env.NEXT_PUBLIC_META_OG_IMAGE_DE || 'https://dozo.tech/og-image-de.jpg',
      twitter_card: process.env.NEXT_PUBLIC_META_TWITTER_CARD_DE || 'summary_large_image',
      twitter_site: process.env.NEXT_PUBLIC_META_TWITTER_SITE_DE || '@dozotech',
      twitter_creator: process.env.NEXT_PUBLIC_META_TWITTER_CREATOR_DE || '@nicocard95',
      robots: process.env.NEXT_PUBLIC_META_ROBOTS_DE || 'index, follow',
      canonical: process.env.NEXT_PUBLIC_META_CANONICAL_DE || 'https://dozo.tech/de',
      alternate: process.env.NEXT_PUBLIC_META_ALTERNATE_DE || 'https://dozo.tech/de'
    },
    loading: {
      title: process.env.NEXT_PUBLIC_LOADING_TITLE_DE || 'Laden...',
      description: process.env.NEXT_PUBLIC_LOADING_DESCRIPTION_DE || 'Ihre Erfahrung wird vorbereitet'
    },
    error: {
      '404': {
        title: process.env.NEXT_PUBLIC_ERROR_404_TITLE_DE || 'Seite nicht gefunden',
        description: process.env.NEXT_PUBLIC_ERROR_404_DESCRIPTION_DE || 'Die gesuchte Seite existiert nicht',
        button: process.env.NEXT_PUBLIC_ERROR_404_BUTTON_DE || 'Zurück zur Startseite'
      },
      '500': {
        title: process.env.NEXT_PUBLIC_ERROR_500_TITLE_DE || 'Serverfehler',
        description: process.env.NEXT_PUBLIC_ERROR_500_DESCRIPTION_DE || 'Etwas ist auf unserem Server schiefgelaufen',
        button: process.env.NEXT_PUBLIC_ERROR_500_BUTTON_DE || 'Erneut versuchen'
      }
    },
    chatbot: {
      initial_message: process.env.NEXT_PUBLIC_CHATBOT_INITIAL_MESSAGE_DE || 'Hallo, ich bin Ihr Dozo.Tech-Assistent 👋\n\nWie kann ich Ihnen heute helfen?',
      response: process.env.NEXT_PUBLIC_CHATBOT_RESPONSE_DE || 'Vielen Dank für Ihre Nachricht! 😊\n\nIch antworte sehr bald. Für dringende Anfragen können Sie mir an nicolas@dozo.tech schreiben.',
      title: process.env.NEXT_PUBLIC_CHATBOT_TITLE_DE || 'Dozo.Tech-Assistent',
      status: process.env.NEXT_PUBLIC_CHATBOT_STATUS_DE || 'Online',
      placeholder: process.env.NEXT_PUBLIC_CHATBOT_PLACEHOLDER_DE || 'Schreiben Sie Ihre Nachricht...',
      send_button: process.env.NEXT_PUBLIC_CHATBOT_SEND_BUTTON_DE || 'Senden'
    },
    lead_capture: {
      float_button: process.env.NEXT_PUBLIC_LEAD_FLOAT_BUTTON_DE || 'Jetzt starten',
      float_subtitle: process.env.NEXT_PUBLIC_LEAD_FLOAT_SUBTITLE_DE || 'Kostenlos • 30 Min',
      title: process.env.NEXT_PUBLIC_LEAD_FLOAT_TITLE_DE || 'Beratung planen',
      name_placeholder: process.env.NEXT_PUBLIC_LEAD_NAME_PLACEHOLDER_DE || 'Name',
      email_placeholder: process.env.NEXT_PUBLIC_LEAD_EMAIL_PLACEHOLDER_DE || 'E-Mail',
      company_placeholder: process.env.NEXT_PUBLIC_LEAD_COMPANY_PLACEHOLDER_DE || 'Unternehmen (optional)',
      message_placeholder: process.env.NEXT_PUBLIC_LEAD_MESSAGE_PLACEHOLDER_DE || 'Nachricht (optional)',
      submit_button: process.env.NEXT_PUBLIC_LEAD_SUBMIT_BUTTON_DE || 'Senden'
    },
    toast: {
      required_fields: process.env.NEXT_PUBLIC_TOAST_REQUIRED_FIELDS_DE || 'Bitte füllen Sie die erforderlichen Felder aus',
      success: process.env.NEXT_PUBLIC_TOAST_SUCCESS_DE || 'Fertig! Ich kontaktiere Sie innerhalb von 24 Stunden.',
      error: process.env.NEXT_PUBLIC_TOAST_ERROR_DE || 'Fehler beim Senden. Bitte versuchen Sie es erneut.'
    }
  }
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
        console.warn(`Translation key not found: ${key} for locale: ${locale}`);
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
      console.warn(`Translation key not found: ${key} for locale: ${locale}`);
      return key;
    }
  }
  
  return value;
}; 