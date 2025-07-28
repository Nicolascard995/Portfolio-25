'use client'

import React from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { getTranslation } from '@/config/translations'
import { ActionIcons } from '@/components/IconSystem'

export default function NotFound() {
  const params = useParams()
  const currentLocale = params.locale as string

  return (
    <div className="min-h-screen flex items-center justify-center bg-dark-absolute">
      <div className="text-center space-y-8 p-8">
        {/* Error Code */}
        <div className="space-y-4">
          <h1 className="text-9xl font-bold text-accent-mint">404</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-mint to-accent-blue mx-auto rounded-full"></div>
        </div>

        {/* Error Message */}
        <div className="space-y-4 max-w-md mx-auto">
          <h2 className="text-3xl font-bold text-text-primary">
            {getTranslation(currentLocale, 'error.404.title')}
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed">
            {getTranslation(currentLocale, 'error.404.description')}
          </p>
        </div>

        {/* Action Button */}
        <div className="pt-8">
          <Link
            href={`/${currentLocale}`}
            className="inline-flex items-center space-x-2 btn-primary group"
          >
            <ActionIcons.Home 
              size="sm" 
              className="transition-transform group-hover:-translate-x-1"
              aria-label="Inicio"
            />
            <span>{getTranslation(currentLocale, 'error.404.button')}</span>
          </Link>
        </div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-accent-mint/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-accent-blue/10 rounded-full blur-2xl"></div>
        </div>
      </div>
    </div>
  )
} 