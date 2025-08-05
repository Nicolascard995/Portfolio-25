import TestChatbotClient from '@/components/TestChatbotClient'

// Función requerida para export estático con locales dinámicos
export function generateStaticParams() {
  return [
    { locale: 'es' },
    { locale: 'en' },
    { locale: 'de' }
  ]
}

export default function TestChatbot() {
  return <TestChatbotClient />
} 