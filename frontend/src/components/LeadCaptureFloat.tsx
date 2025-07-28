'use client'

import React, { useState } from 'react'
import { ActionIcons, NavigationIcons } from './IconSystem'
import { getTranslation } from '@/config/translations'
import { useParams } from 'next/navigation'

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
  const params = useParams();
  const currentLocale = params.locale as string;
  
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
      showToast(getTranslation(currentLocale, 'toast.required_fields'), 'error')
      return
    }

    setIsSubmitting(true)

    try {
      // Simular envío - aquí iría la llamada real a la API
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      showToast(getTranslation(currentLocale, 'toast.success'), 'success')
      setFormData({ nombre: '', email: '', empresa: '', mensaje: '' })
      setIsOpen(false)
    } catch (error) {
      showToast(getTranslation(currentLocale, 'toast.error'), 'error')
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
                <div className="text-sm font-medium text-text-primary">{getTranslation(currentLocale, 'lead_capture.float_button')}</div>
                <div className="text-xs text-text-muted font-mono">{getTranslation(currentLocale, 'lead_capture.float_subtitle')}</div>
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
                <h3 className="text-lg font-bold text-text-primary">{getTranslation(currentLocale, 'lead_capture.title')}</h3>
                <p className="text-sm text-text-muted">Consulta gratuita de 30 minutos</p>
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
            <div>
              <input
                type="text"
                name="nombre"
                placeholder={getTranslation(currentLocale, 'lead_capture.name_placeholder')}
                value={formData.nombre}
                onChange={handleInputChange}
                className="w-full input-field"
                required
              />
            </div>
            
            <div>
              <input
                type="email"
                name="email"
                placeholder={getTranslation(currentLocale, 'lead_capture.email_placeholder')}
                value={formData.email}
                onChange={handleInputChange}
                className="w-full input-field"
                required
              />
            </div>
            
            <div>
              <input
                type="text"
                name="empresa"
                placeholder={getTranslation(currentLocale, 'lead_capture.company_placeholder')}
                value={formData.empresa}
                onChange={handleInputChange}
                className="w-full input-field"
              />
            </div>
            
            <div>
              <textarea
                name="mensaje"
                placeholder={getTranslation(currentLocale, 'lead_capture.message_placeholder')}
                value={formData.mensaje}
                onChange={handleInputChange}
                rows={3}
                className="w-full input-field resize-none"
              />
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full btn-primary btn-icon-right group"
            >
              <span>{isSubmitting ? 'Enviando...' : getTranslation(currentLocale, 'lead_capture.submit_button')}</span>
              <ActionIcons.Send 
                size="xs" 
                className="transition-transform group-hover:translate-x-1"
                aria-label="Enviar"
              />
            </button>
          </form>
        </div>
      )}
    </>
  )
}

export default LeadCaptureFloat 