import AnalyticsDemoClient from '@/components/AnalyticsDemoClient'

// Función requerida para export estático con locales dinámicos
export function generateStaticParams() {
  return [
    { locale: 'es' },
    { locale: 'en' },
    { locale: 'de' }
  ]
}

export default function AnalyticsDemoPage() {
  return <AnalyticsDemoClient />
} 