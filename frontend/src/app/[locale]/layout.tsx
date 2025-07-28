import React from 'react';
import { getTranslation } from '@/config/translations';
import '../../styles/globals.css';

// Configuración de idiomas soportados
const locales = ['es', 'en', 'de'];

// Metadatos optimizados con SEO avanzado
export async function generateMetadata({
  params: { locale }
}: {
  params: { locale: string };
}) {
  const alternates = {
    canonical: `https://dozo.tech/${locale}`,
    languages: {} as Record<string, string>
  };

  locales.forEach(l => {
    alternates.languages[l] = `https://dozo.tech/${l}`;
  });

  return {
    title: getTranslation(locale, 'metadata.title_tag'),
    description: getTranslation(locale, 'metadata.description_tag'),
    alternates,
    openGraph: {
      title: getTranslation(locale, 'metadata.title_tag'),
      description: getTranslation(locale, 'metadata.description_tag'),
      locale: locale,
      alternateLocale: locales.filter(l => l !== locale),
      type: 'website',
      url: `https://dozo.tech/${locale}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: getTranslation(locale, 'metadata.title_tag'),
      description: getTranslation(locale, 'metadata.description_tag'),
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    }
  };
}

export default function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang={locale} className="scroll-smooth">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0D0D0D" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
} 