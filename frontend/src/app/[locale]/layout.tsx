import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import { getTranslation } from '@/config/translations'
import { redirect } from 'next/navigation'

const inter = Inter({ subsets: ['latin'] })

// Configuración de idiomas soportados
const supportedLocales = ['es', 'en', 'de']
const defaultLocale = 'es'

// Función para generar metadatos dinámicos
export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const locale = params.locale || defaultLocale
  
  const title = getTranslation(locale, 'meta.site_name') + ' | ' + getTranslation(locale, 'meta.site_description')
  const description = getTranslation(locale, 'meta.site_description')
  const keywords = getTranslation(locale, 'meta.keywords')
  const author = getTranslation(locale, 'meta.author')
  const ogImage = getTranslation(locale, 'meta.og_image')
  const canonical = getTranslation(locale, 'meta.canonical')
  
  // Generar URLs alternativas para hreflang
  const alternates = {
    canonical: canonical,
    languages: {
      'es': 'https://dozo.tech/es',
      'en': 'https://dozo.tech/en',
      'de': 'https://dozo.tech/de',
      'x-default': 'https://dozo.tech/es'
    }
  }

  return {
    title,
    description,
    keywords,
    authors: [{ name: author }],
    openGraph: {
      title,
      description,
      type: getTranslation(locale, 'meta.og_type'),
      url: canonical,
      siteName: getTranslation(locale, 'meta.site_name'),
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title
        }
      ],
      locale: locale,
      alternateLocale: supportedLocales.filter(l => l !== locale)
    },
    twitter: {
      card: getTranslation(locale, 'meta.twitter_card'),
      site: getTranslation(locale, 'meta.twitter_site'),
      creator: getTranslation(locale, 'meta.twitter_creator'),
      title,
      description,
      images: [ogImage]
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1
      }
    },
    alternates,
    verification: {
      google: 'your-google-verification-code',
      yandex: 'your-yandex-verification-code',
      yahoo: 'your-yahoo-verification-code'
    }
  }
}

export default function RootLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  const locale = params.locale

  // Redirigir si el locale no es soportado
  if (!supportedLocales.includes(locale)) {
    redirect(`/${defaultLocale}`)
  }

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        {/* Hreflang tags dinámicos */}
        <link rel="alternate" hrefLang="es" href="https://dozo.tech/es" />
        <link rel="alternate" hrefLang="en" href="https://dozo.tech/en" />
        <link rel="alternate" hrefLang="de" href="https://dozo.tech/de" />
        <link rel="alternate" hrefLang="x-default" href="https://dozo.tech/es" />
        
        {/* Meta tags adicionales */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        
        {/* Preconnect para performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
} 