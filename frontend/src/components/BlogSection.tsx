'use client'

import React, { useState } from 'react'
import { ContentIcons, NavigationIcons, ActionIcons } from './IconSystem'
import { getTranslation } from '@/config/translations'
import { useParams } from 'next/navigation'

const BlogSection = () => {
  const params = useParams();
  const currentLocale = params.locale as string;
  const [email, setEmail] = useState('')

  const blogPosts = getTranslation(currentLocale, 'blog.posts') as any[];

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
              <span className="text-gradient">{getTranslation(currentLocale, 'blog.title')}</span>
            </h2>
            <p className="text-lg md:text-xl text-text-secondary leading-relaxed max-w-3xl mx-auto">
              {getTranslation(currentLocale, 'blog.description')}
            </p>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {blogPosts.map((post, index) => (
              <article key={index} className={`card-interactive ${post.featured ? 'ring-2 ring-accent-mint/20' : ''}`}>
                {post.featured && (
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-2 h-2 bg-accent-mint rounded-full animate-pulse"></div>
                    <span className="text-xs font-mono text-accent-mint">{getTranslation(currentLocale, 'blog.featured')}</span>
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
                      <span>{getTranslation(currentLocale, 'blog.coming_soon')}</span>
                    </div>
                    
                    <button className="flex items-center text-accent-mint font-medium hover:text-accent-mint-hover transition-colors group">
                      <span>{getTranslation(currentLocale, 'blog.read_button')}</span>
                      <NavigationIcons.ArrowRight 
                        size="xs" 
                        className="ml-1 transition-transform group-hover:translate-x-1"
                        aria-label="Leer artículo"
                      />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Newsletter Section */}
          <div className="text-center">
            <div className="max-w-md mx-auto space-y-4">
              <p className="text-text-secondary">
                Recibí insights semanales sobre automatización y eficiencia.
              </p>
              
              <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={getTranslation(currentLocale, 'blog.newsletter.placeholder')}
                  className="flex-1 input-field"
                  required
                />
                <button type="submit" className="btn-primary group">
                  <span>{getTranslation(currentLocale, 'blog.newsletter.button')}</span>
                  <ActionIcons.Send 
                    size="xs" 
                    className="ml-2 transition-transform group-hover:translate-x-1"
                    aria-label="Suscribirse"
                  />
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default BlogSection 