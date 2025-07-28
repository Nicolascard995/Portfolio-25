'use client'

import React, { useState, useEffect } from 'react'
import { 
  TrendingUp, 
  Calendar, 
  Users, 
  Zap, 
  Activity, 
  Target,
  DollarSign,
  Clock,
  BarChart3,
  RefreshCw
} from 'lucide-react'
import { salesBotAPI, testingAPI } from '@/lib/api'

interface AnalyticsData {
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

const SalesAnalyticsDashboard = () => {
  const [analytics, setAnalytics] = useState<AnalyticsData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null)

  const fetchAnalytics = async () => {
    try {
      setLoading(true)
      setError(null)
      const data = await salesBotAPI.getAnalytics()
      setAnalytics(data)
      setLastUpdated(new Date())
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al cargar analytics')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchAnalytics()
    // Auto-refresh cada 30 segundos
    const interval = setInterval(fetchAnalytics, 30000)
    return () => clearInterval(interval)
  }, [])

  const runSystemTest = async () => {
    try {
      const testResults = await testingAPI.testSalesBot()
      
      if (testResults.success) {
        alert('✅ Sistema funcionando correctamente')
      } else {
        const failedTests = testResults.results
          .filter(r => !r.passed)
          .map(r => `❌ ${r.test}: ${r.error}`)
          .join('\n')
        
        alert(`⚠️ Problemas detectados:\n\n${failedTests}`)
      }
    } catch (error) {
      alert(`❌ Error ejecutando tests: ${error}`)
    }
  }

  if (loading && !analytics) {
    return (
      <div className="bg-white rounded-2xl shadow-strong p-8 border border-neutral-200">
        <div className="animate-pulse space-y-4">
          <div className="h-6 bg-neutral-200 rounded w-1/4"></div>
          <div className="grid grid-cols-4 gap-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-20 bg-neutral-200 rounded"></div>
            ))}
          </div>
          <div className="h-32 bg-neutral-200 rounded"></div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="bg-white rounded-2xl shadow-strong p-8 border border-red-200">
        <div className="text-center">
          <div className="text-red-600 mb-4">
            <Activity className="h-12 w-12 mx-auto" />
          </div>
          <h3 className="text-lg font-semibold text-red-900 mb-2">Error en Analytics</h3>
          <p className="text-red-700 mb-4">{error}</p>
          <button 
            onClick={fetchAnalytics}
            className="btn-primary"
          >
                            <RefreshCw className="h-4 w-4 mr-2" />
            Reintentar
          </button>
        </div>
      </div>
    )
  }

  if (!analytics) return null

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-neutral-900">Sales Bot Analytics</h2>
          <p className="text-neutral-600">
            Dashboard en tiempo real del bot de ventas optimizado
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <button
            onClick={runSystemTest}
            className="btn-secondary text-sm"
          >
            <Activity className="h-4 w-4 mr-2" />
            Test Sistema
          </button>
          <button
            onClick={fetchAnalytics}
            disabled={loading}
            className="btn-primary text-sm"
          >
            <RefreshCw className={`h-4 w-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
            Actualizar
          </button>
        </div>
      </div>

      {/* Métricas Principales */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Total Sessions */}
        <div className="bg-white rounded-xl shadow-strong p-6 border border-neutral-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-neutral-600">Total Sesiones</p>
              <p className="text-2xl font-bold text-neutral-900">{analytics.total_sessions}</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <Users className="h-6 w-6 text-blue-600" />
            </div>
          </div>
        </div>

        {/* Conversion Rate */}
        <div className="bg-white rounded-xl shadow-strong p-6 border border-neutral-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-neutral-600">Tasa Conversión</p>
              <p className="text-2xl font-bold text-green-600">{analytics.conversion_rate}%</p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
              <Target className="h-6 w-6 text-green-600" />
            </div>
          </div>
          <p className="text-xs text-neutral-500 mt-2">
            {analytics.appointments_scheduled} citas agendadas
          </p>
        </div>

        {/* Lead Rate */}
        <div className="bg-white rounded-xl shadow-strong p-6 border border-neutral-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-neutral-600">Captura Leads</p>
              <p className="text-2xl font-bold text-purple-600">{analytics.lead_rate}%</p>
            </div>
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
              <TrendingUp className="h-6 w-6 text-purple-600" />
            </div>
          </div>
          <p className="text-xs text-neutral-500 mt-2">
            {analytics.leads_captured} leads capturados
          </p>
        </div>

        {/* Token Savings */}
        <div className="bg-white rounded-xl shadow-strong p-6 border border-neutral-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-neutral-600">Ahorro Tokens</p>
              <p className="text-2xl font-bold text-orange-600">
                {analytics.optimization_benefits.token_savings}
              </p>
            </div>
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
              <Zap className="h-6 w-6 text-orange-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Intenciones */}
        <div className="bg-white rounded-xl shadow-strong p-6 border border-neutral-200">
          <h3 className="text-lg font-semibold text-neutral-900 mb-4">
            Distribución por Intenciones
          </h3>
          <div className="space-y-3">
            {analytics.intentions_breakdown.map((item, index) => {
              const percentage = analytics.total_sessions > 0 
                ? (item.count / analytics.total_sessions * 100).toFixed(1)
                : '0'
              
              return (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                    <span className="text-sm font-medium text-neutral-700 capitalize">
                      {item.intention}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-neutral-600">{item.count}</span>
                    <span className="text-xs text-neutral-500">({percentage}%)</span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Uso de Modelos */}
        <div className="bg-white rounded-xl shadow-strong p-6 border border-neutral-200">
          <h3 className="text-lg font-semibold text-neutral-900 mb-4">
            Uso de Modelos IA
          </h3>
          <div className="space-y-4">
            {analytics.model_usage.map((model, index) => (
              <div key={index} className="bg-neutral-50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-neutral-800 capitalize">
                    {model.model}
                  </h4>
                  <span className="text-sm text-neutral-600">
                    {model.usage_count} usos
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm text-neutral-600">
                  <span>Promedio tokens:</span>
                  <span className="font-mono">{model.avg_tokens}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Beneficios de Optimización */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-200">
        <h3 className="text-lg font-semibold text-neutral-900 mb-4 flex items-center">
          <BarChart3 className="h-5 w-5 mr-2 text-blue-600" />
          Beneficios de Optimización
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white rounded-lg p-4">
            <div className="flex items-center space-x-3">
              <DollarSign className="h-8 w-8 text-green-600" />
              <div>
                <p className="text-xs text-neutral-600">Ahorro de Costos</p>
                <p className="text-sm font-semibold text-neutral-900">
                  {analytics.optimization_benefits.token_savings}
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-4">
            <div className="flex items-center space-x-3">
              <Clock className="h-8 w-8 text-blue-600" />
              <div>
                <p className="text-xs text-neutral-600">Velocidad</p>
                <p className="text-sm font-semibold text-neutral-900">
                  {analytics.optimization_benefits.faster_responses}
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-4">
            <div className="flex items-center space-x-3">
              <Target className="h-8 w-8 text-purple-600" />
              <div>
                <p className="text-xs text-neutral-600">Conversión</p>
                <p className="text-sm font-semibold text-neutral-900">
                  {analytics.optimization_benefits.better_conversion}
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-4">
            <div className="flex items-center space-x-3">
              <Activity className="h-8 w-8 text-orange-600" />
              <div>
                <p className="text-xs text-neutral-600">Estrategia</p>
                <p className="text-xs font-semibold text-neutral-900">
                  {analytics.optimization_benefits.hybrid_approach}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center text-sm text-neutral-500">
        {lastUpdated && (
          <p>
            Última actualización: {lastUpdated.toLocaleString('es-ES')}
          </p>
        )}
        <p className="mt-1">
          Dashboard del Sales Bot Optimizado - Dozo.Tech
        </p>
      </div>
    </div>
  )
}

export default SalesAnalyticsDashboard 