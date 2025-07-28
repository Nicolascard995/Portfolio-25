import SalesAnalyticsDashboard from '@/components/SalesAnalyticsDashboard'
import Link from 'next/link'
import { ActionIcons } from '@/components/IconSystem'

export default function AnalyticsDemoPage() {
  return (
    <div className="min-h-screen bg-dark-absolute">
      {/* Header simple */}
      <header className="border-b border-border-subtle">
        <div className="container-custom py-4">
          <Link 
            href="/" 
            className="inline-flex items-center text-text-secondary hover:text-accent-mint transition-colors"
          >
            <ActionIcons.ArrowLeft 
              size="xs" 
              className="mr-2"
              aria-label="Volver"
            />
            Volver al inicio
          </Link>
        </div>
      </header>

      {/* Demo Content */}
      <div className="py-8">
        <div className="container-custom mb-8">
          <div className="text-center space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold text-text-primary">
              Demo: <span className="text-gradient">Dashboard de Ventas IA</span>
            </h1>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Dashboard interactivo con datos simulados que muestra cómo visualizar métricas 
              de ventas y automatización en tiempo real.
            </p>
          </div>
        </div>
        
        <SalesAnalyticsDashboard />
      </div>
    </div>
  )
} 