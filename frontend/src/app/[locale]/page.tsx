import HomeClient from '@/components/HomeClient'

// Función requerida para export estático con locales dinámicos
export function generateStaticParams() {
  return [
    { locale: 'es' },
    { locale: 'en' },
    { locale: 'de' }
  ]
}

export default function Home() {
  return <HomeClient />
} 