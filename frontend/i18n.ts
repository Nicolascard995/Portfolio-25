import { notFound } from 'next/navigation'
import { getRequestConfig } from 'next-intl/server'

// Define los idiomas soportados
export const locales = ['es', 'en', 'de'] as const
export type Locale = typeof locales[number]

export default getRequestConfig(async ({ locale }) => {
  // Validar que el locale está soportado
  if (!locales.includes(locale as any)) notFound()

  // Importar mensajes desde la carpeta correcta
  const messages = (await import(`./messages/${locale}.json`)).default
  return { messages }
}) 