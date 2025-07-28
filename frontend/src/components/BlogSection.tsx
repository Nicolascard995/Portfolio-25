'use client'

import React, { useState } from 'react'
import { ContentIcons, NavigationIcons, ActionIcons } from './IconSystem'

const BlogSection = () => {
  const [email, setEmail] = useState('')

  const blogPosts = [
    {
      title: 'Qué procesos automatizar primero si sos una agencia chica',
      excerpt: 'Checklist claro para evitar automatizar lo que no hace falta.',
      category: 'Servicios',
      readTime: '6 min',
      featured: true
    },
    {
      title: 'ChatGPT vs Claude vs Gemini',
      excerpt: 'Cuál elegir según tu contexto (y no solo lo que está de moda).',
      category: 'Tecnología',
      readTime: '8 min'
    },
    {
      title: '3 automatizaciones reales que cambiaron operaciones',
      excerpt: 'Historias reales, sin ROI inflado ni promesas vacías.',
      category: 'Casos Reales',
      readTime: '10 min'
    }
  ]

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implementar suscripción a newsletter
    // console.log('Newsletter subscription:', email)
    setEmail('')
  }

  return (
    <section id="blog" className="section-spacing bg-dark-surface">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16 space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold text-text-primary tracking-tight">
              <span className="text-gradient">Aprendizajes</span> y Automatización
            </h2>
            <p className="text-lg md:text-xl text-text-secondary leading-relaxed max-w-3xl mx-auto">
              Ideas accionables, sin promesas vacías. Historias reales de automatización, 
              eficiencia y decisiones técnicas que sí funcionaron.
            </p>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {blogPosts.map((post, index) => (
              <article key={index} className={`card-interactive ${post.featured ? 'ring-2 ring-accent-mint/20' : ''}`}>
                {post.featured && (
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-2 h-2 bg-accent-mint rounded-full animate-pulse"></div>
                    <span className="text-xs font-mono text-accent-mint">DESTACADO</span>
                  </div>
                )}
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 bg-dark-absolute border border-border-subtle rounded-full text-xs font-medium text-accent-mint">
                      {post.category}
                    </span>
                    <div className="flex items-center space-x-2 text-text-muted text-xs">
                      <ContentIcons.Clock 
                        size="xs"
                        aria-label="Tiempo de lectura"
                      />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-text-primary leading-tight hover:text-gradient transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-text-secondary leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-border-subtle">
                    <div className="flex items-center text-text-muted text-sm">
                      <ContentIcons.Calendar 
                        size="xs" 
                        className="mr-2"
                        aria-label="Fecha"
                      />
                      <span>Próximamente</span>
                    </div>
                    
                    <button className="flex items-center text-accent-mint font-medium hover:text-accent-mint-hover transition-colors group">
                      <span>Leer</span>
                      <NavigationIcons.ArrowRight 
                        size="xs" 
                        className="ml-2 group-hover:translate-x-1 transition-transform"
                        aria-label="Leer artículo"
                      />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Newsletter CTA */}
          <div className="card-glow max-w-2xl mx-auto text-center">
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-text-primary">
                ¿Querés más <span className="text-gradient">aprendizajes accionables</span>?
              </h3>
              
              <p className="text-text-secondary leading-relaxed">
                Ideas prácticas de automatización, casos reales y decisiones técnicas 
                que funcionaron en la vida real.
              </p>
              
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tu@email.com"
                  className="flex-1 input-field"
                  required
                />
                <button type="submit" className="btn-primary group">
                  <span className="mr-2">Suscribirme al boletín</span>
                  <ActionIcons.Send 
                    size="xs" 
                    className="transition-transform group-hover:translate-x-1"
                    aria-label="Suscribirse"
                  />
                </button>
              </form>
              
              <p className="text-text-muted text-sm">
                Sin spam. Ideas útiles cuando tengo algo valioso que compartir.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default BlogSection 