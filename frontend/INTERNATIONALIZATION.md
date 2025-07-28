# Internacionalización (I18n) - Dozo.Tech

## Resumen

Este proyecto implementa un sistema de internacionalización completo basado en **variables de entorno** para máxima flexibilidad y facilidad de mantenimiento. Soporta Español (es), Inglés (en) y Alemán (de).

## Características

✅ **Detección automática del idioma del navegador**  
✅ **Selector de idioma con persistencia**  
✅ **Variables de entorno para todas las traducciones**  
✅ **SEO optimizado con metadatos por idioma**  
✅ **Navegación sin recarga de página**  
✅ **Fallbacks automáticos**  
✅ **Estructura escalable**

## Configuración

### 1. Variables de Entorno

Copia el archivo `env.example` a `.env.local`:

```bash
cp env.example .env.local
```

### 2. Estructura de Variables

Las variables siguen el patrón:
```
NEXT_PUBLIC_[SECCIÓN]_[CLAVE]_[IDIOMA]
```

Ejemplo:
```
NEXT_PUBLIC_NAV_HOME_ES=Inicio
NEXT_PUBLIC_NAV_HOME_EN=Home
NEXT_PUBLIC_NAV_HOME_DE=Startseite
```

### 3. Idiomas Soportados

- **es**: Español (por defecto)
- **en**: Inglés
- **de**: Alemán

## Uso

### En Componentes

```typescript
import { getTranslation } from '@/config/translations';
import { useParams } from 'next/navigation';

const MyComponent = () => {
  const params = useParams();
  const currentLocale = params.locale as string;
  
  return (
    <h1>{getTranslation(currentLocale, 'hero.title')}</h1>
  );
};
```

### Estructura de Claves

```
navigation.home
navigation.approach
navigation.solutions
navigation.contact

hero.badge
hero.title
hero.subtitle
hero.description
hero.roles.prefix
hero.roles.suffix
hero.roles.list
hero.cta

footer.contact_title
footer.contact_description
footer.placeholder_email
footer.placeholder_message
footer.send_button
footer.copyright
footer.contact_info.email
footer.contact_info.phone
footer.contact_info.location
footer.social.follow_me
footer.social.linkedin
footer.social.github
footer.social.twitter

metadata.title_tag
metadata.description_tag

language_selector.es
language_selector.en
language_selector.de
```

## Middleware

El middleware detecta automáticamente el idioma del navegador y redirige a la URL correspondiente:

- `/` → `/es` (por defecto)
- `/` → `/en` (si el navegador está en inglés)
- `/` → `/de` (si el navegador está en alemán)

## Selector de Idioma

El componente `LanguageSelector` permite cambiar el idioma manualmente:

- Persiste la preferencia en `localStorage`
- Navegación sin recarga
- Indicadores visuales del idioma activo
- Banderas y nombres nativos

## SEO

### Metadatos por Idioma

Cada idioma tiene sus propios metadatos:

```typescript
// Automático en el layout
title: getTranslation(locale, 'metadata.title_tag')
description: getTranslation(locale, 'metadata.description_tag')
```

### URLs Canónicas

```
/es → https://dozo.tech/es
/en → https://dozo.tech/en
/de → https://dozo.tech/de
```

### Etiquetas hreflang

Generadas automáticamente para SEO:

```html
<link rel="alternate" hreflang="es" href="https://dozo.tech/es" />
<link rel="alternate" hreflang="en" href="https://dozo.tech/en" />
<link rel="alternate" hreflang="de" href="https://dozo.tech/de" />
```

## Agregar Nuevas Traducciones

### 1. Agregar Variable de Entorno

```bash
# En .env.local
NEXT_PUBLIC_NEW_SECTION_KEY_ES=Valor en español
NEXT_PUBLIC_NEW_SECTION_KEY_EN=Value in English
NEXT_PUBLIC_NEW_SECTION_KEY_DE=Wert auf Deutsch
```

### 2. Actualizar Configuración

En `src/config/translations.ts`:

```typescript
export const translations = {
  es: {
    // ... otras traducciones
    new_section: {
      key: process.env.NEXT_PUBLIC_NEW_SECTION_KEY_ES || 'Valor por defecto'
    }
  },
  en: {
    // ... otras traducciones
    new_section: {
      key: process.env.NEXT_PUBLIC_NEW_SECTION_KEY_EN || 'Default value'
    }
  },
  de: {
    // ... otras traducciones
    new_section: {
      key: process.env.NEXT_PUBLIC_NEW_SECTION_KEY_DE || 'Standardwert'
    }
  }
};
```

### 3. Usar en Componente

```typescript
const value = getTranslation(currentLocale, 'new_section.key');
```

## Ventajas del Sistema

### 🔧 **Flexibilidad**
- Cambios sin recompilar
- Configuración por entorno
- Fácil mantenimiento

### 🚀 **Performance**
- Sin archivos JSON grandes
- Carga optimizada
- Cache automático

### 🛠 **Desarrollo**
- Hot reload de traducciones
- Fallbacks automáticos
- Debugging fácil

### 🌐 **Escalabilidad**
- Fácil agregar idiomas
- Estructura clara
- Reutilización de claves

## Comandos Útiles

```bash
# Desarrollo
npm run dev

# Construcción
npm run build

# Verificar variables de entorno
npm run build 2>&1 | grep -i "env"

# Limpiar cache
rm -rf .next
```

## Troubleshooting

### Error: "Translation not found"
- Verificar que la variable de entorno existe
- Verificar la estructura de claves
- Usar fallback en la configuración

### Error: "Locale not supported"
- Verificar que el idioma está en `locales`
- Verificar el middleware
- Verificar las redirecciones

### Error: "Component not rendering"
- Verificar que `currentLocale` está definido
- Verificar imports de `getTranslation`
- Verificar que el componente es client-side

## Próximos Pasos

1. **Contenido Dinámico**: Integrar con CMS para blog/portfolio
2. **Más Idiomas**: Agregar francés, italiano, etc.
3. **Analytics**: Rastrear uso de idiomas
4. **Testing**: Tests unitarios para traducciones
5. **CI/CD**: Validación automática de traducciones

---

**¡Sistema de internacionalización completamente funcional y optimizado!** 🎉 