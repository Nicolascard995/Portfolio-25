'use client'

import React, { useState, useEffect, useRef } from 'react'
import { ActionIcons, NavigationIcons, FeatureIcons } from './IconSystem'
import { getTranslation } from '@/config/translations'
import { useParams } from 'next/navigation'

interface Message {
  id: number
  text: string
  isBot: boolean
  timestamp: Date
}

interface ChatbotContext {
  project?: string
  context?: string
}

const ChatbotFloat = () => {
  const params = useParams();
  const currentLocale = params.locale as string;
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState<Message[]>([
    { 
      id: 1, 
      text: getTranslation(currentLocale, 'chatbot.initial_message'), 
      isBot: true,
      timestamp: new Date()
    }
  ])
  const [isLoading, setIsLoading] = useState(false)
  const [sessionId, setSessionId] = useState<string>('')
  const [chatbotContext, setChatbotContext] = useState<ChatbotContext>({})

  // Auto-scroll to bottom
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  // Listen for custom events to open chatbot with context
  useEffect(() => {
    const handleOpenChatbot = (event: CustomEvent) => {
      const { project, context } = event.detail;
      setChatbotContext({ project, context });
      setIsOpen(true);
      
      // Add context message if provided
      if (context) {
        const contextMessage: Message = {
          id: Date.now(),
          text: `👋 Veo que te interesa: ${context}`,
          isBot: true,
          timestamp: new Date()
        };
        setMessages(prev => [...prev, contextMessage]);
      }
    };

    window.addEventListener('openChatbot', handleOpenChatbot as EventListener);
    return () => {
      window.removeEventListener('openChatbot', handleOpenChatbot as EventListener);
    };
  }, []);

  const sendMessage = async () => {
    if (!message.trim() || isLoading) return

    const userMessage: Message = { 
      id: Date.now(), 
      text: message, 
      isBot: false,
      timestamp: new Date()
    }
    setMessages(prev => [...prev, userMessage])
    const currentMessage = message
    setMessage('')
    setIsLoading(true)

    try {
      // Call your backend API
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/chatbot/sales`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          mensaje: currentMessage,
          session_id: sessionId || undefined
        })
      });

      if (!response.ok) {
        throw new Error('Error en la comunicación con el servidor');
      }

      const data = await response.json();
      
      // Update session ID if provided
      if (data.session_id) {
        setSessionId(data.session_id);
      }

      const botMessage: Message = {
        id: Date.now() + 1,
        text: data.respuesta,
        isBot: true,
        timestamp: new Date()
      }
      
      setMessages(prev => [...prev, botMessage])

      // Check if conversation should end
      if (data.metadata?.should_end) {
        const endMessage: Message = {
          id: Date.now() + 2,
          text: "¡Gracias por tu interés! Si necesitas más información, no dudes en contactarme directamente.",
          isBot: true,
          timestamp: new Date()
        }
        setTimeout(() => {
          setMessages(prev => [...prev, endMessage])
        }, 1000)
      }

    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage: Message = {
        id: Date.now() + 1,
        text: "Lo siento, hay un problema técnico. Por favor, intenta de nuevo o contacta directamente a nicolas@dozo.tech",
        isBot: true,
        timestamp: new Date()
      }
      setMessages(prev => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
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
                <div className="text-sm font-medium text-text-primary">{getTranslation(currentLocale, 'chatbot.title')}</div>
                <div className="text-xs text-text-muted">{getTranslation(currentLocale, 'chatbot.status')}</div>
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
            
            {/* Loading indicator */}
            {isLoading && (
              <div className="flex justify-start">
                <div className="max-w-[80%] px-3 py-2 rounded-lg text-sm bg-dark-card text-text-primary border border-border-subtle">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent-mint rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-accent-mint rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 bg-accent-mint rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Auto-scroll anchor */}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-border-subtle">
            <div className="flex space-x-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder={getTranslation(currentLocale, 'chatbot.placeholder')}
                className="flex-1 bg-dark-surface border border-border-subtle rounded-lg px-3 py-2 text-sm text-text-primary placeholder-text-muted focus:outline-none focus:border-accent-mint disabled:opacity-50"
                aria-label="Enviar mensaje"
                disabled={isLoading}
              />
              <button
                onClick={sendMessage}
                disabled={isLoading || !message.trim()}
                className="w-8 h-8 bg-accent-mint rounded-lg flex items-center justify-center text-dark-absolute hover:bg-accent-mint-hover transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Enviar"
              >
                {isLoading ? (
                  <div className="w-4 h-4 border-2 border-dark-absolute border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <ActionIcons.Send 
                    size="xs"
                    aria-label="Enviar"
                  />
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ChatbotFloat 