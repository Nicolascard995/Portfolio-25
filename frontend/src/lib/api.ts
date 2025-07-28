/**
 * API Configuration para Dozo.Tech
 * Configuración optimizada para Sales Bot y Analytics
 */

const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api/v1'

// Tipos para TypeScript
interface ChatMessage {
  mensaje: string
  session_id?: string
}

interface ChatResponse {
  respuesta: string
  modelo_usado: string
  tokens_utilizados: number
  tiempo_respuesta: number
  session_id: string
  metadata?: {
    intention?: string
    confidence?: number
    response_type?: string
    conversation_count?: number
    appointment_created?: boolean
    calendar_link?: string
    lead_created?: number | null
    contact_data?: {
      nombre?: string
      email?: string
      telefono?: string
    }
    should_end?: boolean
    model_strategy?: string
  }
}

interface SalesAnalytics {
  total_sessions: number
  appointments_scheduled: number
  leads_captured: number
  conversion_rate: number
  lead_rate: number
  intentions_breakdown: Array<{
    intention: string
    count: number
  }>
  model_usage: Array<{
    model: string
    usage_count: number
    avg_tokens: number
  }>
  optimization_benefits: {
    hybrid_approach: string
    token_savings: string
    faster_responses: string
    better_conversion: string
  }
}

interface LeadData {
  nombre: string
  email: string
  mensaje?: string
  telefono?: string
  empresa?: string
  sector?: string
}

// Utilidades de manejo de errores
const handleApiError = (error: any, context: string) => {
  console.error(`Error en ${context}:`, error)
  
  if (error.response?.status === 404) {
    throw new Error(`Endpoint no encontrado: ${context}`)
  } else if (error.response?.status === 500) {
    throw new Error(`Error del servidor: ${context}`)
  } else if (error.code === 'NETWORK_ERROR') {
    throw new Error(`Error de conexión: ${context}`)
  } else {
    throw new Error(`Error desconocido en ${context}: ${error.message}`)
  }
}

// API de Sales Bot Optimizado
export const salesBotAPI = {
  /**
   * Enviar mensaje al Sales Bot optimizado
   */
  async sendMessage(message: string, sessionId?: string): Promise<ChatResponse> {
    try {
      const response = await fetch(`${API_BASE}/chatbot/sales`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          mensaje: message,
          session_id: sessionId
        })
      })

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`)
      }

      return await response.json()
    } catch (error) {
      handleApiError(error, 'Sales Bot Message')
      throw error
    }
  },

  /**
   * Obtener analytics del Sales Bot
   */
  async getAnalytics(): Promise<SalesAnalytics> {
    try {
      const response = await fetch(`${API_BASE}/chatbot/sales/analytics`)
      
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`)
      }

      return await response.json()
    } catch (error) {
      handleApiError(error, 'Sales Analytics')
      throw error
    }
  },

  /**
   * Obtener estado del sistema
   */
  async getStatus(): Promise<any> {
    try {
      const response = await fetch(`${API_BASE}/chatbot/sales/status`)
      
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`)
      }

      return await response.json()
    } catch (error) {
      handleApiError(error, 'Sales Status')
      throw error
    }
  },

  /**
   * Resetear sesión específica (para testing)
   */
  async resetSession(sessionId: string): Promise<{ message: string }> {
    try {
      const response = await fetch(`${API_BASE}/chatbot/sales/reset-session/${sessionId}`, {
        method: 'DELETE'
      })
      
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`)
      }

      return await response.json()
    } catch (error) {
      handleApiError(error, 'Reset Session')
      throw error
    }
  }
}

// API de Chat General (backup)
export const chatAPI = {
  /**
   * Chat general con OpenAI
   */
  async sendMessage(message: string, sessionId?: string): Promise<ChatResponse> {
    try {
      const response = await fetch(`${API_BASE}/chatbot/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          mensaje: message,
          session_id: sessionId
        })
      })

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`)
      }

      return await response.json()
    } catch (error) {
      handleApiError(error, 'General Chat')
      throw error
    }
  },

  /**
   * Análisis de archivos
   */
  async analyzeFile(file: File, prompt: string, sessionId?: string): Promise<ChatResponse> {
    try {
      const formData = new FormData()
      formData.append('file', file)
      formData.append('prompt', prompt)
      if (sessionId) formData.append('session_id', sessionId)

      const response = await fetch(`${API_BASE}/chatbot/analyze`, {
        method: 'POST',
        body: formData
      })

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`)
      }

      return await response.json()
    } catch (error) {
      handleApiError(error, 'File Analysis')
      throw error
    }
  },

  /**
   * Obtener logs de chat
   */
  async getLogs(limit: number = 100): Promise<any[]> {
    try {
      const response = await fetch(`${API_BASE}/chatbot/logs?limit=${limit}`)
      
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`)
      }

      return await response.json()
    } catch (error) {
      handleApiError(error, 'Chat Logs')
      throw error
    }
  }
}

// API de Leads
export const leadsAPI = {
  /**
   * Crear nuevo lead
   */
  async createLead(leadData: LeadData): Promise<any> {
    try {
      const response = await fetch(`${API_BASE}/leads/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(leadData)
      })

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`)
      }

      return await response.json()
    } catch (error) {
      handleApiError(error, 'Create Lead')
      throw error
    }
  },

  /**
   * Obtener estadísticas de leads
   */
  async getStats(): Promise<any> {
    try {
      const response = await fetch(`${API_BASE}/leads/stats`)
      
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`)
      }

      return await response.json()
    } catch (error) {
      handleApiError(error, 'Lead Stats')
      throw error
    }
  }
}

// Utilidades de sesión
export const sessionUtils = {
  generateSessionId(): string {
    return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
  },

  getOrCreateSession(): string {
    if (typeof window === 'undefined') return this.generateSessionId()
    
    let sessionId = localStorage.getItem('dozo_chat_session_id')
    if (!sessionId) {
      sessionId = this.generateSessionId()
      localStorage.setItem('dozo_chat_session_id', sessionId)
    }
    return sessionId
  },

  resetSession(): string {
    if (typeof window === 'undefined') return this.generateSessionId()
    
    localStorage.removeItem('dozo_chat_session_id')
    const newSessionId = this.generateSessionId()
    localStorage.setItem('dozo_chat_session_id', newSessionId)
    return newSessionId
  },

  getCurrentSession(): string | null {
    if (typeof window === 'undefined') return null
    return localStorage.getItem('dozo_chat_session_id')
  }
}

// Configuración para testing
export const testingAPI = {
  /**
   * Probar conectividad con el backend
   */
  async testConnection(): Promise<boolean> {
    try {
      const response = await fetch(`${API_BASE.replace('/api/v1', '')}/health`)
      return response.ok
    } catch {
      return false
    }
  },

  /**
   * Test completo del Sales Bot
   */
  async testSalesBot(): Promise<{
    success: boolean
    results: Array<{
      test: string
      passed: boolean
      error?: string
    }>
  }> {
    const results = []
    let allPassed = true

    // Test 1: Conectividad
    try {
      const isConnected = await this.testConnection()
      results.push({
        test: 'Conectividad Backend',
        passed: isConnected
      })
      if (!isConnected) allPassed = false
    } catch (error) {
      results.push({
        test: 'Conectividad Backend',
        passed: false,
        error: error instanceof Error ? error.message : 'Error desconocido'
      })
      allPassed = false
    }

    // Test 2: Sales Bot Message
    try {
      const sessionId = sessionUtils.generateSessionId()
      const response = await salesBotAPI.sendMessage('Hola', sessionId)
      results.push({
        test: 'Sales Bot Message',
        passed: !!response.respuesta
      })
    } catch (error) {
      results.push({
        test: 'Sales Bot Message',
        passed: false,
        error: error instanceof Error ? error.message : 'Error desconocido'
      })
      allPassed = false
    }

    // Test 3: Analytics
    try {
      const analytics = await salesBotAPI.getAnalytics()
      results.push({
        test: 'Sales Analytics',
        passed: typeof analytics.total_sessions === 'number'
      })
    } catch (error) {
      results.push({
        test: 'Sales Analytics',
        passed: false,
        error: error instanceof Error ? error.message : 'Error desconocido'
      })
      allPassed = false
    }

    return {
      success: allPassed,
      results
    }
  }
}

// Configuración por defecto
export const apiConfig = {
  baseUrl: API_BASE,
  timeout: 10000,
  retries: 3,
  defaultHeaders: {
    'Content-Type': 'application/json'
  }
}

export default {
  salesBot: salesBotAPI,
  chat: chatAPI,
  leads: leadsAPI,
  session: sessionUtils,
  testing: testingAPI,
  config: apiConfig
} 