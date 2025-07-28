'use client'

import { useState } from 'react';
import { useParams } from 'next/navigation';
import { ContactIcons, SocialIcons, ActionIcons, LogoIcons } from './IconSystem';
import { getTranslation } from '@/config/translations';

const Footer = () => {
  const params = useParams();
  const currentLocale = params.locale as string;
  
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implementar envío de formulario
    // console.log('Formulario enviado:', formData)
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark-surface border-t border-border-subtle">
      <div className="container-custom">
        
        {/* CTA Final Section */}
        <div className="py-20 border-b border-border-subtle">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-5xl font-bold text-text-primary tracking-tight">
                {getTranslation(currentLocale, 'footer.contact_title')}
              </h2>
              <p className="text-lg md:text-xl text-text-secondary leading-relaxed max-w-2xl mx-auto">
                {getTranslation(currentLocale, 'footer.contact_description')}
              </p>
            </div>

            {/* Formulario minimal */}
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4">
              <div className="grid gap-4">
                <input
                  type="text"
                  name="nombre"
                  placeholder="Nombre"
                  value={formData.nombre}
                  onChange={handleInputChange}
                  className="input-field"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder={getTranslation(currentLocale, 'footer.placeholder_email')}
                  value={formData.email}
                  onChange={handleInputChange}
                  className="input-field"
                  required
                />
                <textarea
                  name="mensaje"
                  placeholder={getTranslation(currentLocale, 'footer.placeholder_message')}
                  value={formData.mensaje}
                  onChange={handleInputChange}
                  rows={3}
                  className="input-field resize-none"
                />
              </div>
              <button type="submit" className="btn-primary btn-icon-right w-full group">
                <span>{getTranslation(currentLocale, 'footer.send_button')}</span>
                <ActionIcons.Send 
                  size="sm" 
                  className="transition-transform group-hover:translate-x-1"
                  aria-label="Enviar formulario"
                />
              </button>
            </form>
          </div>
        </div>

        {/* Footer Info */}
        <div className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            
            {/* Brand Section */}
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative group">
                  <LogoIcons.Brain 
                    size="lg" 
                    className="text-accent-mint transition-colors"
                    aria-label="Logo Dozo.Tech"
                  />
                  <LogoIcons.Zap 
                    size="xs" 
                    className="text-accent-blue absolute -top-1 -right-1 animate-pulse"
                    aria-label="Energía"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold text-gradient font-dozotech">Dozo.Tech</span>
                  <span className="text-xs text-text-muted leading-none font-mono">Sistemas que Respiran</span>
                </div>
              </div>
              
              <p className="text-text-secondary mb-6 leading-relaxed">
                Sistemas que no duermen, hechos para escalar. 
                Automatización sin fricción ni caos.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-text-primary mb-4">Contacto</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-text-secondary">
                  <ContactIcons.Mail 
                    size="xs" 
                    className="text-accent-mint"
                    aria-label="Email"
                  />
                  <span>{getTranslation(currentLocale, 'footer.contact_info.email')}</span>
                </div>
                <div className="flex items-center space-x-3 text-text-secondary">
                  <ContactIcons.Phone 
                    size="xs" 
                    className="text-accent-mint"
                    aria-label="Teléfono"
                  />
                  <span>{getTranslation(currentLocale, 'footer.contact_info.phone')}</span>
                </div>
                <div className="flex items-center space-x-3 text-text-secondary">
                  <ContactIcons.MapPin 
                    size="xs" 
                    className="text-accent-mint"
                    aria-label="Ubicación"
                  />
                  <span>{getTranslation(currentLocale, 'footer.contact_info.location')}</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-text-primary mb-4">
                {getTranslation(currentLocale, 'footer.social.follow_me')}
              </h3>
              <div className="flex space-x-4">
                                  <a 
                    href="#" 
                    className="w-10 h-10 bg-dark-card border border-border-subtle rounded-lg flex items-center justify-center text-text-secondary hover:text-accent-mint hover:border-accent-mint transition-all duration-300"
                    aria-label={getTranslation(currentLocale, 'footer.social.linkedin')}
                  >
                    <SocialIcons.Linkedin 
                      size="sm"
                      aria-label={getTranslation(currentLocale, 'footer.social.linkedin')}
                    />
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 bg-dark-card border border-border-subtle rounded-lg flex items-center justify-center text-text-secondary hover:text-accent-mint hover:border-accent-mint transition-all duration-300"
                    aria-label={getTranslation(currentLocale, 'footer.social.github')}
                  >
                    <SocialIcons.Github 
                      size="sm"
                      aria-label={getTranslation(currentLocale, 'footer.social.github')}
                    />
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 bg-dark-card border border-border-subtle rounded-lg flex items-center justify-center text-text-secondary hover:text-accent-mint hover:border-accent-mint transition-all duration-300"
                    aria-label={getTranslation(currentLocale, 'footer.social.twitter')}
                  >
                    <SocialIcons.Twitter 
                      size="sm"
                      aria-label={getTranslation(currentLocale, 'footer.social.twitter')}
                    />
                  </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border-subtle">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-text-muted text-sm">
              {getTranslation(currentLocale, 'footer.copyright')}
            </p>
            <p className="text-text-muted text-sm font-mono">
              Hecho con sistemas que respiran
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 