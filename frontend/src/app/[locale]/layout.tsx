import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import { notFound } from 'next/navigation'

const inter = Inter({ subsets: ['latin'] })

// Configuración de idiomas soportados
const supportedLocales = ['es', 'en', 'de']

// Función para generar metadatos dinámicos
export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const locale = params.locale || 'es'
  
  // Validar que el locale sea soportado
  if (!supportedLocales.includes(locale)) {
    notFound()
  }
  
  // Metadatos básicos por defecto
  const title = 'Dozo.Tech | Nicolás Cardozo - Arquitecto de Eficiencia con IA'
  const description = 'Transformo los desafíos operativos de tu negocio en ventajas competitivas.'
  const canonical = `https://dozo.tech/${locale}`
  
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
    keywords: 'inteligencia artificial, automatización, ciencia de datos, PYMES, eficiencia operativa',
    authors: [{ name: 'Nicolás Cardozo' }],
    openGraph: {
      title,
      description,
      type: 'website',
      url: canonical,
      siteName: 'Dozo.Tech',
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: title
        }
      ],
      locale: locale,
      alternateLocale: supportedLocales.filter(l => l !== locale)
    },
    twitter: {
      card: 'summary_large_image',
      site: '@dozo_tech',
      creator: '@dozo_tech',
      title,
      description,
      images: ['/og-image.jpg']
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
      // google: 'your-google-verification-code', // Descomenta cuando tengas el código de Google Search Console
      // yandex: 'your-yandex-verification-code',
      // yahoo: 'your-yahoo-verification-code'
    }
  }
}

export default function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  const locale = params.locale

  // Redirigir si el locale no es soportado
  if (!supportedLocales.includes(locale)) {
    notFound()
  }

  return (
    <div lang={locale} suppressHydrationWarning>
      {children}
    </div>
  )
} 