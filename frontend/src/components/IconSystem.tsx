'use client'

import React from 'react'
import { LucideIcon } from 'lucide-react'

// Tipos de tamaños según Material Design
type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

// Mapeo de tamaños a clases Tailwind (siguiendo 20dp, 24dp, 40dp, 48dp)
const iconSizeMap: Record<IconSize, string> = {
  xs: 'h-4 w-4',    // 16px (cerca de 20dp para desktop/dense)
  sm: 'h-5 w-5',    // 20px (estándar para UI densa)
  md: 'h-6 w-6',    // 24px (baseline estándar Material)
  lg: 'h-8 w-8',    // 32px (display/headers)
  xl: 'h-10 w-10'   // 40px (grandes elementos destacados)
}

// Tipos de contextos de uso
type IconContext = 'nav' | 'action' | 'feature' | 'social' | 'status' | 'logo'

// Estilos por contexto
const iconContextStyles: Record<IconContext, string> = {
  nav: 'stroke-2',       // Navegación: stroke mediano para legibilidad
  action: 'stroke-2',    // Acciones/botones: stroke mediano
  feature: 'stroke-[1.5]', // Features/contenido: stroke más fino
  social: 'stroke-2',    // Redes sociales: stroke estándar
  status: 'stroke-2',    // Estados/indicadores: stroke visible
  logo: 'stroke-2'       // Logo/branding: stroke consistente
}

interface IconProps {
  icon: LucideIcon
  size?: IconSize
  context?: IconContext
  className?: string
  'aria-label'?: string
}

// Componente base de icono estandarizado
export const Icon: React.FC<IconProps> = ({ 
  icon: IconComponent, 
  size = 'md', 
  context = 'feature',
  className = '',
  'aria-label': ariaLabel,
  ...props 
}) => {
  const sizeClass = iconSizeMap[size]
  const contextClass = iconContextStyles[context]
  
  return (
    <IconComponent 
      className={`${sizeClass} ${contextClass} ${className}`}
      aria-label={ariaLabel}
      {...props} 
    />
  )
}

// Iconos específicos estandarizados según el sitio
export const LogoIcons = {
  Brain: (props: Omit<IconProps, 'icon'>) => <Icon icon={require('lucide-react').Brain} context="logo" {...props} />,
  Zap: (props: Omit<IconProps, 'icon'>) => <Icon icon={require('lucide-react').Zap} context="logo" {...props} />
}

export const NavigationIcons = {
  Menu: (props: Omit<IconProps, 'icon'>) => <Icon icon={require('lucide-react').Menu} context="nav" {...props} />,
  X: (props: Omit<IconProps, 'icon'>) => <Icon icon={require('lucide-react').X} context="nav" {...props} />,
  ArrowRight: (props: Omit<IconProps, 'icon'>) => <Icon icon={require('lucide-react').ArrowRight} context="action" {...props} />,
  ExternalLink: (props: Omit<IconProps, 'icon'>) => <Icon icon={require('lucide-react').ExternalLink} context="action" {...props} />
}

export const FeatureIcons = {
  ChefHat: (props: Omit<IconProps, 'icon'>) => <Icon icon={require('lucide-react').ChefHat} context="feature" {...props} />,
  Settings: (props: Omit<IconProps, 'icon'>) => <Icon icon={require('lucide-react').Settings} context="feature" {...props} />,
  Brain: (props: Omit<IconProps, 'icon'>) => <Icon icon={require('lucide-react').Brain} context="feature" {...props} />,
  Bot: (props: Omit<IconProps, 'icon'>) => <Icon icon={require('lucide-react').Bot} context="feature" {...props} />,
  Link: (props: Omit<IconProps, 'icon'>) => <Icon icon={require('lucide-react').Link} context="feature" {...props} />,
  Target: (props: Omit<IconProps, 'icon'>) => <Icon icon={require('lucide-react').Target} context="feature" {...props} />,
  MessageCircle: (props: Omit<IconProps, 'icon'>) => <Icon icon={require('lucide-react').MessageCircle} context="feature" {...props} />,
  BarChart3: (props: Omit<IconProps, 'icon'>) => <Icon icon={require('lucide-react').BarChart3} context="feature" {...props} />,
  Monitor: (props: Omit<IconProps, 'icon'>) => <Icon icon={require('lucide-react').Monitor} context="feature" {...props} />,
  Cloud: (props: Omit<IconProps, 'icon'>) => <Icon icon={require('lucide-react').Cloud} context="feature" {...props} />,
  Play: (props: Omit<IconProps, 'icon'>) => <Icon icon={require('lucide-react').Play} context="feature" {...props} />
}

export const ActionIcons = {
  Calendar: (props: Omit<IconProps, 'icon'>) => <Icon icon={require('lucide-react').Calendar} context="action" {...props} />,
  Send: (props: Omit<IconProps, 'icon'>) => <Icon icon={require('lucide-react').Send} context="action" {...props} />,
  ArrowLeft: (props: Omit<IconProps, 'icon'>) => <Icon icon={require('lucide-react').ArrowLeft} context="action" {...props} />
}

export const ContactIcons = {
  Mail: (props: Omit<IconProps, 'icon'>) => <Icon icon={require('lucide-react').Mail} context="feature" {...props} />,
  Phone: (props: Omit<IconProps, 'icon'>) => <Icon icon={require('lucide-react').Phone} context="feature" {...props} />,
  MapPin: (props: Omit<IconProps, 'icon'>) => <Icon icon={require('lucide-react').MapPin} context="feature" {...props} />
}

export const SocialIcons = {
  Linkedin: (props: Omit<IconProps, 'icon'>) => <Icon icon={require('lucide-react').Linkedin} context="social" {...props} />,
  Github: (props: Omit<IconProps, 'icon'>) => <Icon icon={require('lucide-react').Github} context="social" {...props} />,
  Twitter: (props: Omit<IconProps, 'icon'>) => <Icon icon={require('lucide-react').Twitter} context="social" {...props} />
}

export const ContentIcons = {
  Calendar: (props: Omit<IconProps, 'icon'>) => <Icon icon={require('lucide-react').Calendar} context="feature" {...props} />,
  Clock: (props: Omit<IconProps, 'icon'>) => <Icon icon={require('lucide-react').Clock} context="feature" {...props} />
}

// Guías de uso
export const IconUsageGuide = {
  // Tamaños recomendados por contexto
  sizes: {
    navigation: 'md',      // 24px para nav principal
    buttons: 'sm',         // 20px para botones estándar
    features: 'md',        // 24px para features/contenido
    highlights: 'lg',      // 32px para elementos destacados
    hero: 'xl'            // 40px para hero/logos grandes
  },
  
  // Principios de diseño
  principles: [
    'Usar outlined style (stroke) para UI densa',
    'Mantener stroke weight consistente (2dp)',
    'Usar tamaños estándar: 20dp, 24dp, 32dp, 40dp',
    'Agrupar iconos por contexto de uso',
    'Mantener coherencia visual en toda la aplicación'
  ]
} 