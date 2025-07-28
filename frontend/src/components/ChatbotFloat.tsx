'use client'

import React, { useState } from 'react'
import { ActionIcons, NavigationIcons, FeatureIcons } from './IconSystem'

const ChatbotFloat = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([
    { 
      id: 1, 
      text: 'Hola, soy tu asistente de Dozo.Tech 👋\n\n¿En qué puedo ayudarte hoy?', 
      isBot: true 
    }
  ])

  const sendMessage = () => {
    if (!message.trim()) return

    const newMessage = { id: Date.now(), text: message, isBot: false }
    setMessages(prev => [...prev, newMessage])
    setMessage('')

    setTimeout(() => {
      const botResponse = {
        id: Date.now() + 1,
        text: '¡Gracias por escribirme! 😊\n\nTe responderé muy pronto. Para consultas urgentes, puedes escribirme a nicolas@dozo.tech',
        isBot: true
      }
      setMessages(prev => [...prev, botResponse])
    }, 1200)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  return (
    <>
      {/* Botón flotante */}
      {!isOpen && (
        <div className="fixed bottom-6 left-6 z-40">
          <button
            onClick={() => setIsOpen(true)}
            className="w-16 h-16 bg-gradient-to-r from-accent-mint to-accent-blue rounded-full flex items-center justify-center shadow-glow-mint transition-all duration-300 hover:scale-110 hover:shadow-glow-blue group border-2 border-white/10"
            aria-label="Abrir chat"
          >
            <FeatureIcons.MessageCircle 
              size="lg" 
              className="text-white transition-transform group-hover:scale-110"
              aria-label="Chat"
            />
          </button>
        </div>
      )}

      {/* Chat Widget actualizado */}
      {isOpen && (
        <div className="fixed bottom-6 left-6 w-80 max-w-[calc(100vw-3rem)] glass-strong border border-border-muted rounded-2xl shadow-xl z-40 animate-scale-in">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-border-subtle">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-accent-mint to-accent-blue rounded-full flex items-center justify-center">
                <span className="text-dark-absolute text-sm font-bold">D</span>
              </div>
              <div>
                <div className="text-sm font-medium text-text-primary">Asistente Dozo.Tech</div>
                <div className="text-xs text-text-muted">En línea</div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 rounded-lg hover:bg-dark-surface transition-colors flex items-center justify-center text-text-secondary hover:text-text-primary"
              aria-label="Cerrar chat"
            >
              <NavigationIcons.X 
                size="sm"
                aria-label="Cerrar"
              />
            </button>
          </div>

          {/* Messages */}
          <div className="h-80 overflow-y-auto p-4 space-y-4 custom-scrollbar">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-[80%] px-3 py-2 rounded-lg text-sm whitespace-pre-wrap ${
                    msg.isBot
                      ? 'bg-dark-card text-text-primary border border-border-subtle'
                      : 'bg-accent-mint text-dark-absolute'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-border-subtle">
            <div className="flex space-x-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Escribí tu mensaje..."
                className="flex-1 px-3 py-2 bg-dark-card border border-border-subtle rounded-lg text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent-mint text-sm"
              />
              <button
                onClick={sendMessage}
                className="btn-primary btn-icon-only px-3 py-2 text-sm"
                aria-label="Enviar mensaje"
              >
                <ActionIcons.Send 
                  size="xs"
                  aria-label="Enviar"
                />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ChatbotFloat 