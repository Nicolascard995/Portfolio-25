'use client'

import React from 'react'
import { useParams } from 'next/navigation'
import { getTranslation } from '@/config/translations'

export default function Loading() {
  const params = useParams()
  const currentLocale = params.locale as string

  return (
    <div className="min-h-screen flex items-center justify-center bg-dark-absolute">
      <div className="text-center space-y-8 p-8">
        {/* Loading Animation */}
        <div className="relative">
          <div className="w-24 h-24 border-4 border-accent-mint/20 border-t-accent-mint rounded-full animate-spin"></div>
          <div className="absolute inset-0 w-24 h-24 border-4 border-transparent border-t-accent-blue rounded-full animate-spin" style={{ animationDelay: '-0.5s' }}></div>
        </div>

        {/* Loading Text */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-text-primary">
            {getTranslation(currentLocale, 'loading.title')}
          </h2>
          <p className="text-lg text-text-secondary">
            {getTranslation(currentLocale, 'loading.description')}
          </p>
        </div>

        {/* Progress Dots */}
        <div className="flex justify-center space-x-2">
          <div className="w-2 h-2 bg-accent-mint rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
          <div className="w-2 h-2 bg-accent-blue rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-2 h-2 bg-accent-mint rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-accent-mint/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-accent-blue/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
      </div>
    </div>
  )
} 