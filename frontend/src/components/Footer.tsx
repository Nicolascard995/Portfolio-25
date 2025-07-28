'use client'

import React, { useState } from 'react'
import { ActionIcons, SocialIcons } from './IconSystem'
import { getTranslation } from '@/config/translations'
import { useParams } from 'next/navigation'

const Footer = () => {
  const params = useParams();
  const currentLocale = params.locale as string;
  
  const [formData, setFormData] = useState({
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.email || !formData.message) {
      alert('Por favor completá todos los campos')
      return
    }

    setIsSubmitting(true)

    try {
      // Simular envío - aquí iría la llamada real a la API
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      alert('¡Gracias! Te contacto pronto.')
      setFormData({ email: '', message: '' })
    } catch (error) {
      alert('Error al enviar. Intentá de nuevo.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <footer className="bg-dark-card border-t border-border-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Section */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-4">
                {getTranslation(currentLocale, 'footer.contact_title')}
              </h2>
              <p className="text-lg text-text-secondary leading-relaxed">
                {getTranslation(currentLocale, 'footer.contact_description')}
              </p>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                name="email"
                placeholder={getTranslation(currentLocale, 'footer.placeholder_email')}
                value={formData.email}
                onChange={handleInputChange}
                className="w-full input-field"
                required
              />
              <textarea
                name="message"
                placeholder={getTranslation(currentLocale, 'footer.placeholder_message')}
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                className="w-full input-field resize-none"
                required
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary btn-icon-right group"
              >
                <span>{isSubmitting ? 'Enviando...' : getTranslation(currentLocale, 'footer.send_button')}</span>
                <ActionIcons.Send 
                  size="xs" 
                  className="transition-transform group-hover:translate-x-1"
                  aria-label="Enviar"
                />
              </button>
            </form>
          </div>

          {/* Info Section */}
          <div className="space-y-8">
            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-text-primary">Contacto</h3>
              <div className="space-y-2 text-text-secondary">
                <p>Email: nicolas@dozo.tech</p>
                <p>Teléfono: +56 9 1234 5678</p>
                <p>Ubicación: Santiago, Chile</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-text-primary">Seguime</h3>
              <div className="flex space-x-4">
                <a
                  href="https://linkedin.com/in/nicocard95"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-dark-surface border border-border-subtle rounded-lg flex items-center justify-center text-text-secondary hover:text-accent-mint hover:border-accent-mint transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <SocialIcons.Linkedin size="sm" />
                </a>
                <a
                  href="https://github.com/nicocard95"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-dark-surface border border-border-subtle rounded-lg flex items-center justify-center text-text-secondary hover:text-accent-mint hover:border-accent-mint transition-all duration-300"
                  aria-label="GitHub"
                >
                  <SocialIcons.Github size="sm" />
                </a>
                <a
                  href="https://twitter.com/nicocard95"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-dark-surface border border-border-subtle rounded-lg flex items-center justify-center text-text-secondary hover:text-accent-mint hover:border-accent-mint transition-all duration-300"
                  aria-label="Twitter"
                >
                  <SocialIcons.Twitter size="sm" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-border-subtle">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            {/* Copyright */}
            <p className="text-sm text-text-muted">
              {getTranslation(currentLocale, 'footer.copyright')}
            </p>

            {/* Legal Links */}
            <div className="flex space-x-6 text-sm">
              <a
                href={`/${currentLocale}/privacy`}
                className="text-text-muted hover:text-text-secondary transition-colors"
              >
                {getTranslation(currentLocale, 'footer.privacy')}
              </a>
              <a
                href={`/${currentLocale}/terms`}
                className="text-text-muted hover:text-text-secondary transition-colors"
              >
                {getTranslation(currentLocale, 'footer.terms')}
              </a>
              <a
                href={`/${currentLocale}/cookies`}
                className="text-text-muted hover:text-text-secondary transition-colors"
              >
                {getTranslation(currentLocale, 'footer.cookies')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 