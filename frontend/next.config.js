/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  
  // Configuración de imágenes
  images: {
    domains: ['localhost', 'dozo.tech', 'images.unsplash.com'],
    formats: ['image/webp', 'image/avif'],
  },
  
  // Variables de entorno públicas
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000',
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  },
  
  // Configuración de headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ]
  },
  
  // Optimización para i18n
  experimental: {
    optimizePackageImports: ['next-intl']
  },
  
  // Redirects optimizados para i18n
  async redirects() {
    return [
      {
        source: '/',
        destination: '/es',
        permanent: false,
      },
      {
        source: '/portfolio',
        destination: '/es/proyectos',
        permanent: true,
      },
      {
        source: '/contact',
        destination: '/es/contacto',
        permanent: true,
      },
    ]
  },
  
  // Server Actions are enabled by default in Next.js 14
  // experimental: {
  //   serverActions: true,
  // },
}

module.exports = nextConfig 