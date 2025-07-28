'use client'

import ChatbotFloat from '@/components/ChatbotFloat'

export default function TestChatbot() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Test Chatbot Dozo.Tech</h1>
        <p className="text-gray-600 mb-8">Página de prueba para verificar que el chatbot funciona</p>
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <p className="text-sm text-gray-500">El botón del chatbot debería aparecer en la esquina inferior derecha</p>
        </div>
      </div>
      
      {/* Chatbot */}
      <ChatbotFloat />
    </div>
  )
} 