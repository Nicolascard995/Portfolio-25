'use client'

import React from 'react'
import { useParams } from 'next/navigation'
import { getTranslation } from '@/config/translations'
import { ActionIcons } from '@/components/IconSystem'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  const params = useParams()
  const currentLocale = params.locale as string

  return (
    <div className="min-h-screen flex items-center justify-center bg-dark-absolute">
      <div className="text-center space-y-8 p-8">
        {/* Error Code */}
        <div className="space-y-4">
          <h1 className="text-9xl font-bold text-red-500">500</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto rounded-full"></div>
        </div>

        {/* Error Message */}
        <div className="space-y-4 max-w-md mx-auto">
          <h2 className="text-3xl font-bold text-text-primary">
            {getTranslation(currentLocale, 'error.500.title')}
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed">
            {getTranslation(currentLocale, 'error.500.description')}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="pt-8 space-x-4">
          <button
            onClick={reset}
            className="inline-flex items-center space-x-2 btn-primary group"
          >
            <ActionIcons.RefreshCw 
              size="sm" 
              className="transition-transform group-hover:rotate-180"
              aria-label="Reintentar"
            />
            <span>{getTranslation(currentLocale, 'error.500.button')}</span>
          </button>
          
          <button
            onClick={() => window.location.href = `/${currentLocale}`}
            className="inline-flex items-center space-x-2 btn-secondary group"
          >
            <ActionIcons.Home 
              size="sm" 
              className="transition-transform group-hover:-translate-x-1"
              aria-label="Inicio"
            />
            <span>{getTranslation(currentLocale, 'error.404.button')}</span>
          </button>
        </div>

        {/* Error Details (Development Only) */}
        {process.env.NODE_ENV === 'development' && (
          <details className="mt-8 text-left max-w-md mx-auto">
            <summary className="cursor-pointer text-text-muted hover:text-text-secondary">
              Error Details (Development)
            </summary>
            <pre className="mt-2 p-4 bg-dark-card rounded-lg text-sm text-text-secondary overflow-auto">
              {error.message}
              {error.digest && `\nDigest: ${error.digest}`}
            </pre>
          </details>
        )}

        {/* Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-red-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-red-600/10 rounded-full blur-2xl"></div>
        </div>
      </div>
    </div>
  )
} 