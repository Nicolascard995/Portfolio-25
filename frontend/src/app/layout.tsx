import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dozo.Tech | Nicolás Cardozo - Arquitecto de Eficiencia con IA',
  description: 'Transformo los desafíos operativos de tu negocio en ventajas competitivas. Experiencia emprendedora + Ciencia de Datos + IA = Soluciones que impulsan eficiencia y rentabilidad.',
  keywords: 'inteligencia artificial, automatización, ciencia de datos, PYMES, restaurantes, eficiencia operativa, chatbot, análisis de datos',
  authors: [{ name: 'Nicolás Cardozo', url: 'https://dozo.tech' }],
  creator: 'Nicolás Cardozo',
  publisher: 'Dozo.Tech',
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://dozo.tech',
    title: 'Dozo.Tech - Inteligencia en Acción para tu Negocio',
    description: 'De chef a desarrollador de IA. Automatizo procesos, optimizo operaciones y genero insights que transforman PYMES.',
    siteName: 'Dozo.Tech',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Dozo.Tech - Nicolás Cardozo, Arquitecto de Eficiencia con IA',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dozo.Tech - Inteligencia en Acción para tu Negocio',
    description: 'De chef a desarrollador de IA. Automatizo procesos y genero insights para PYMES.',
    images: ['/twitter-card.jpg'],
    creator: '@dozo_tech',
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
  },
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: 'https://dozo.tech',
    languages: {
      'es-ES': 'https://dozo.tech',
      'en-US': 'https://dozo.tech/en',
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0D0D0D" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Nicolás Cardozo',
              url: 'https://dozo.tech',
              image: 'https://dozo.tech/profile-image.jpg',
              sameAs: [
                'https://linkedin.com/in/nicolas-cardozo',
                'https://github.com/nicolas-cardozo',
                'https://twitter.com/dozo_tech'
              ],
              jobTitle: 'Arquitecto de Eficiencia con IA',
              worksFor: {
                '@type': 'Organization',
                name: 'Dozo.Tech'
              },
              alumniOf: 'Universidad de los Andes',
              knowsAbout: [
                'Inteligencia Artificial',
                'Ciencia de Datos',
                'Automatización de Procesos',
                'Desarrollo de Software',
                'Gestión de Restaurantes'
              ],
              description: 'Especialista en transformar desafíos operativos en ventajas competitivas usando IA y automatización.'
            }),
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <div id="root" className="min-h-screen flex flex-col">
          {children}
        </div>
        
        {/* Analytics scripts placeholder */}
        {process.env.NODE_ENV === 'production' && (
          <>
            {/* Google Analytics */}
            <script
              async
              src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', 'GA_MEASUREMENT_ID');
                `,
              }}
            />
          </>
        )}
      </body>
    </html>
  )
} 