import { redirect } from 'next/navigation'

export default function RootHome() {
  // Puedes personalizar el locale por defecto aquí:
  redirect('/es')
  // Alternativamente, podrías detectar el idioma del navegador y redirigir dinámicamente.
  // return <div>Redirigiendo a la versión localizada...</div>
} 