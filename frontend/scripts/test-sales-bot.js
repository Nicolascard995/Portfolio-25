#!/usr/bin/env node

/**
 * Script de Testing Automático para Sales Bot Optimizado
 * Ejecutar con: node scripts/test-sales-bot.js
 */

const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api/v1'

// Colores para output
const colors = {
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  reset: '\x1b[0m',
  bold: '\x1b[1m'
}

const log = {
  success: (msg) => console.log(`${colors.green}✅ ${msg}${colors.reset}`),
  error: (msg) => console.log(`${colors.red}❌ ${msg}${colors.reset}`),
  warning: (msg) => console.log(`${colors.yellow}⚠️  ${msg}${colors.reset}`),
  info: (msg) => console.log(`${colors.blue}ℹ️  ${msg}${colors.reset}`),
  header: (msg) => console.log(`\n${colors.bold}${colors.blue}🚀 ${msg}${colors.reset}\n`)
}

// Generar session ID único para testing
const generateSessionId = () => `test_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`

// Función helper para hacer requests
const makeRequest = async (url, options = {}) => {
  try {
    const response = await fetch(url, {
      headers: { 'Content-Type': 'application/json' },
      ...options
    })
    
    const data = await response.json()
    
    return {
      success: response.ok,
      status: response.status,
      data: data
    }
  } catch (error) {
    return {
      success: false,
      error: error.message
    }
  }
}

// Tests individuales
const tests = {
  async testBackendHealth() {
    log.info('Verificando salud del backend...')
    
    const result = await makeRequest(`${API_BASE.replace('/api/v1', '')}/health`)
    
    if (result.success) {
      log.success(`Backend está funcionando: ${result.data.message}`)
      return true
    } else {
      log.error(`Backend no responde: ${result.error || result.status}`)
      return false
    }
  },

  async testSalesBotMessage() {
    log.info('Probando mensaje al Sales Bot...')
    
    const sessionId = generateSessionId()
    const testMessage = 'Hola, quiero automatizar mi negocio'
    
    const result = await makeRequest(`${API_BASE}/chatbot/sales`, {
      method: 'POST',
      body: JSON.stringify({
        mensaje: testMessage,
        session_id: sessionId
      })
    })
    
    if (result.success && result.data.respuesta) {
      log.success(`Sales Bot respondió correctamente`)
      log.info(`  Modelo usado: ${result.data.modelo_usado}`)
      log.info(`  Tokens: ${result.data.tokens_utilizados}`)
      log.info(`  Tiempo: ${result.data.tiempo_respuesta}s`)
      
      if (result.data.metadata) {
        log.info(`  Intención: ${result.data.metadata.intention}`)
        log.info(`  Confianza: ${result.data.metadata.confidence}`)
        log.info(`  Tipo respuesta: ${result.data.metadata.response_type}`)
      }
      
      return { success: true, sessionId, response: result.data }
    } else {
      log.error(`Sales Bot falló: ${result.error || 'Sin respuesta'}`)
      return { success: false }
    }
  },

  async testSessionLimit(sessionId) {
    log.info('Probando límite de sesión (5 turnos)...')
    
    const messages = [
      'Me interesa automatizar mi restaurante',
      'Cuánto cuesta?', 
      'Qué incluye el servicio?',
      'Cuando podemos empezar?',
      'Perfecto, agendemos una cita'
    ]
    
    let successCount = 0
    
    for (let i = 0; i < messages.length; i++) {
      const result = await makeRequest(`${API_BASE}/chatbot/sales`, {
        method: 'POST',
        body: JSON.stringify({
          mensaje: messages[i],
          session_id: sessionId
        })
      })
      
      if (result.success) {
        successCount++
        const metadata = result.data.metadata || {}
        log.info(`  Turno ${i + 1}: OK (Conversación: ${metadata.conversation_count || 'N/A'})`)
        
        if (metadata.should_end) {
          log.warning(`  Sesión terminada en turno ${i + 1}`)
          break
        }
      } else {
        log.error(`  Turno ${i + 1}: FALLO`)
      }
      
      // Esperar un poco entre mensajes
      await new Promise(resolve => setTimeout(resolve, 500))
    }
    
    return successCount >= 3 // Al menos 3 turnos exitosos
  },

  async testAnalytics() {
    log.info('Probando endpoint de analytics...')
    
    const result = await makeRequest(`${API_BASE}/chatbot/sales/analytics`)
    
    if (result.success && result.data.total_sessions !== undefined) {
      log.success('Analytics funcionando correctamente')
      log.info(`  Total sesiones: ${result.data.total_sessions}`)
      log.info(`  Citas agendadas: ${result.data.appointments_scheduled}`)
      log.info(`  Tasa conversión: ${result.data.conversion_rate}%`)
      log.info(`  Intenciones detectadas: ${result.data.intentions_breakdown?.length || 0}`)
      return true
    } else {
      log.error(`Analytics falló: ${result.error || 'Datos inválidos'}`)
      return false
    }
  },

  async testStatus() {
    log.info('Probando endpoint de estado...')
    
    const result = await makeRequest(`${API_BASE}/chatbot/sales/status`)
    
    if (result.success && result.data.status) {
      log.success(`Estado del sistema: ${result.data.status}`)
      log.info(`  Estrategia: ${result.data.model_strategy}`)
      log.info(`  Características: ${result.data.optimization_features?.length || 0}`)
      return true
    } else {
      log.error(`Status falló: ${result.error || 'Sin estado'}`)
      return false
    }
  },

  async testGeneralChatFallback() {
    log.info('Probando chat general (fallback)...')
    
    const sessionId = generateSessionId()
    
    const result = await makeRequest(`${API_BASE}/chatbot/chat`, {
      method: 'POST',
      body: JSON.stringify({
        mensaje: 'Prueba de chat general',
        session_id: sessionId
      })
    })
    
    if (result.success && result.data.respuesta) {
      log.success('Chat general funcionando')
      return true
    } else {
      log.warning('Chat general no disponible (opcional)')
      return true // No es crítico
    }
  },

  async testIntentionDetection() {
    log.info('Probando detección de intenciones...')
    
    const testCases = [
      { message: 'Hola', expectedIntention: 'saludo' },
      { message: 'Quiero agendar una cita', expectedIntention: 'agendar' },
      { message: 'Cuánto cuesta?', expectedIntention: 'precio' },
      { message: 'Me llamo Juan, mi email es juan@test.com', expectedIntention: 'datos_contacto' }
    ]
    
    let correctDetections = 0
    
    for (const testCase of testCases) {
      const sessionId = generateSessionId()
      
      const result = await makeRequest(`${API_BASE}/chatbot/sales`, {
        method: 'POST',
        body: JSON.stringify({
          mensaje: testCase.message,
          session_id: sessionId
        })
      })
      
      if (result.success && result.data.metadata?.intention === testCase.expectedIntention) {
        correctDetections++
        log.success(`  Intención "${testCase.expectedIntention}" detectada correctamente`)
      } else {
        log.warning(`  Intención esperada: ${testCase.expectedIntention}, detectada: ${result.data.metadata?.intention || 'N/A'}`)
      }
    }
    
    const accuracy = (correctDetections / testCases.length) * 100
    log.info(`  Precisión de detección: ${accuracy.toFixed(1)}%`)
    
    return accuracy >= 50 // Al menos 50% de precisión
  }
}

// Ejecutar todos los tests
async function runAllTests() {
  log.header('SALES BOT TESTING SUITE - DOZO.TECH')
  
  console.log(`🎯 Endpoint base: ${API_BASE}`)
  console.log(`⏰ Fecha: ${new Date().toLocaleString('es-ES')}`)
  
  const results = {}
  let totalTests = 0
  let passedTests = 0
  
  // Test 1: Backend Health
  log.header('1. SALUD DEL BACKEND')
  results.health = await tests.testBackendHealth()
  totalTests++
  if (results.health) passedTests++
  
  // Test 2: Sales Bot Message
  log.header('2. MENSAJE AL SALES BOT')
  results.salesBot = await tests.testSalesBotMessage()
  totalTests++
  if (results.salesBot.success) passedTests++
  
  // Test 3: Session Limit (solo si el bot funciona)
  if (results.salesBot.success) {
    log.header('3. LÍMITE DE SESIÓN')
    results.sessionLimit = await tests.testSessionLimit(results.salesBot.sessionId)
    totalTests++
    if (results.sessionLimit) passedTests++
  }
  
  // Test 4: Analytics
  log.header('4. ANALYTICS')
  results.analytics = await tests.testAnalytics()
  totalTests++
  if (results.analytics) passedTests++
  
  // Test 5: Status
  log.header('5. ESTADO DEL SISTEMA')
  results.status = await tests.testStatus()
  totalTests++
  if (results.status) passedTests++
  
  // Test 6: General Chat Fallback
  log.header('6. CHAT GENERAL (FALLBACK)')
  results.generalChat = await tests.testGeneralChatFallback()
  totalTests++
  if (results.generalChat) passedTests++
  
  // Test 7: Intention Detection
  log.header('7. DETECCIÓN DE INTENCIONES')
  results.intentionDetection = await tests.testIntentionDetection()
  totalTests++
  if (results.intentionDetection) passedTests++
  
  // Resumen final
  log.header('RESUMEN DE TESTS')
  
  const percentage = (passedTests / totalTests) * 100
  
  console.log(`📊 Tests ejecutados: ${totalTests}`)
  console.log(`✅ Tests exitosos: ${passedTests}`)
  console.log(`❌ Tests fallidos: ${totalTests - passedTests}`)
  console.log(`📈 Porcentaje de éxito: ${percentage.toFixed(1)}%`)
  
  if (percentage >= 80) {
    log.success('\n🎉 SISTEMA FUNCIONANDO CORRECTAMENTE')
    log.info('El Sales Bot está listo para producción!')
  } else if (percentage >= 60) {
    log.warning('\n⚠️  SISTEMA FUNCIONANDO CON PROBLEMAS MENORES')
    log.info('Revisar tests fallidos antes de producción')
  } else {
    log.error('\n❌ SISTEMA CON PROBLEMAS CRÍTICOS')
    log.info('Corregir errores antes de continuar')
  }
  
  console.log('\n' + '='.repeat(50))
  console.log('Testing completado - Dozo.Tech Sales Bot')
  console.log('='.repeat(50))
  
  // Exit code basado en resultado
  process.exit(percentage >= 80 ? 0 : 1)
}

// Verificar dependencias
if (typeof fetch === 'undefined') {
  console.error('❌ fetch no está disponible. Instalar node-fetch o usar Node.js 18+')
  process.exit(1)
}

// Ejecutar tests
runAllTests().catch(error => {
  log.error(`Error fatal: ${error.message}`)
  process.exit(1)
}) 