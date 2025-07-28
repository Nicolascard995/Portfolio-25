'use client'

import React, { useState } from 'react'
import { ActionIcons, NavigationIcons } from './IconSystem'

// Sistema de toast simple inline actualizado
const showToast = (message: string, type: 'success' | 'error' = 'success') => {
  const container = document.querySelector('.toast-container') || (() => {
    const div = document.createElement('div');
    div.className = 'toast-container';
    document.body.appendChild(div);
    return div;
  })();

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.textContent = message;
  container.appendChild(toast);

  setTimeout(() => {
    if (toast.parentNode) {
      toast.style.opacity = '0';
      setTimeout(() => toast.remove(), 300);
    }
  }, 4000);
};

const LeadCaptureFloat = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    empresa: '',
    mensaje: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.nombre || !formData.email) {
      showToast('Por favor completá los campos requeridos', 'error')
      return
    }

    setIsSubmitting(true)

    try {
      // Simular envío - aquí iría la llamada real a la API
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      showToast('¡Listo! Te contacto en 24hs máximo.', 'success')
      setFormData({ nombre: '', email: '', empresa: '', mensaje: '' })
      setIsOpen(false)
    } catch (error) {
      showToast('Error al enviar. Intentá de nuevo.', 'error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      {/* Floating Button actualizado */}
      {!isOpen && (
        <div className="fixed bottom-6 right-6 z-40">
          <button
            onClick={() => setIsOpen(true)}
            className="group card-glow p-4 transition-all duration-300 hover:scale-105"
            aria-label="Agendar consultoría"
          >
            <div className="flex items-center space-x-3">
              <ActionIcons.Calendar 
                size="sm" 
                className="text-accent-mint group-hover:text-accent-mint-hover transition-colors"
                aria-label="Calendario"
              />
              <div className="hidden sm:block">
                <div className="text-sm font-medium text-text-primary">Empezar ahora</div>
                <div className="text-xs text-text-muted font-mono">Gratuito • 30 min</div>
              </div>
            </div>
          </button>
        </div>
      )}

      {/* Lead Capture Widget actualizado */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 max-w-[calc(100vw-3rem)] glass-strong border border-border-muted rounded-2xl shadow-xl z-40 animate-scale-in">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-border-subtle">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-accent-mint to-accent-blue rounded-xl flex items-center justify-center">
                <ActionIcons.Calendar 
                  size="sm" 
                  className="text-dark-absolute"
                  aria-label="Calendario"
                />
              </div>
              <div>
                <div className="text-lg font-semibold text-text-primary">Empezar ahora</div>
                <div className="text-sm text-text-muted">Conversación gratuita de 30 min</div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 rounded-lg hover:bg-dark-surface transition-colors flex items-center justify-center text-text-secondary hover:text-text-primary"
              aria-label="Cerrar formulario"
            >
              <NavigationIcons.X 
                size="xs"
                aria-label="Cerrar"
              />
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div className="space-y-3">
              <input
                type="text"
                name="nombre"
                placeholder="Nombre *"
                value={formData.nombre}
                onChange={handleInputChange}
                className="input-field"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email *"
                value={formData.email}
                onChange={handleInputChange}
                className="input-field"
                required
              />
              <input
                type="text"
                name="empresa"
                placeholder="Empresa (opcional)"
                value={formData.empresa}
                onChange={handleInputChange}
                className="input-field"
              />
              <textarea
                name="mensaje"
                placeholder="¿En qué puedo ayudarte? (opcional)"
                value={formData.mensaje}
                onChange={handleInputChange}
                rows={3}
                className="input-field resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary btn-icon-right w-full group disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <span>Enviando...</span>
              ) : (
                <>
                  <span>Agendar</span>
                  <ActionIcons.Send 
                    size="xs" 
                    className="transition-transform group-hover:translate-x-1"
                    aria-label="Enviar"
                  />
                </>
              )}
            </button>
            
            <p className="text-xs text-text-muted text-center">
              Sin compromiso. Si no te aporto valor, no seguimos.
            </p>
          </form>
        </div>
      )}
    </>
  )
}

export default LeadCaptureFloat 