'use client'

import React, { useEffect } from 'react'
import { FeatureIcons, ContactIcons, SocialIcons } from '../IconSystem'

declare global {
  interface Window {
    Plotly: any;
  }
}

const MLProject = () => {
  useEffect(() => {
    // Cargar Plotly dinámicamente
    const script = document.createElement('script')
    script.src = 'https://cdn.plot.ly/plotly-2.27.0.min.js'
    script.onload = () => {
      if (window.Plotly) {
        initPlots()
      }
    }
    document.head.appendChild(script)

    return () => {
      // Cleanup
      if (document.head.contains(script)) {
        document.head.removeChild(script)
      }
    }
  }, [])

  const initPlots = () => {
    // Gráfico 1: Comparación de Algoritmos
    window.Plotly.newPlot('algorithms-bar', [{
      x: ['Random Forest', 'SVM', 'Gradient Boosting', 'XGBoost', 'Logistic Regression'],
      y: [0.982, 0.978, 0.965, 0.943, 0.934],
      type: 'bar',
      marker: {
        color: ['#5EEAD4','#38BDF8','#2DD4BF','#0EA5E9','#14B8A6']
      },
      text: ['98.2%','97.8%','96.5%','94.3%','93.4%'],
      textposition: 'auto',
      textfont: { color: '#FFFFFF' }
    }], {
      title: {
        text: 'Accuracy por Algoritmo',
        font: { color: '#FFFFFF', size: 16 }
      },
      yaxis: {
        title: { text: 'Accuracy', font: { color: '#A1A1AA' } },
        tickformat: ',.0%',
        tickfont: { color: '#A1A1AA' },
        gridcolor: '#27272A'
      },
      xaxis: {
        title: { text: 'Algoritmo', font: { color: '#A1A1AA' } },
        tickfont: { color: '#A1A1AA' }
      },
      paper_bgcolor: 'rgba(0,0,0,0)',
      plot_bgcolor: 'rgba(0,0,0,0)'
    })

    // Gráfico 2: Importancia de Variables
    window.Plotly.newPlot('feature-importance', [{
      x: [0.32, 0.28, 0.18, 0.12, 0.10],
      y: ['worst_concave_points','mean_concave_points','worst_perimeter','worst_area','mean_area'],
      type: 'bar',
      orientation: 'h',
      marker: { color: '#5EEAD4' },
      textfont: { color: '#FFFFFF' }
    }], {
      title: {
        text: 'Importancia de Variables (Random Forest)',
        font: { color: '#FFFFFF', size: 16 }
      },
      xaxis: {
        title: { text: 'Importancia', font: { color: '#A1A1AA' } },
        tickfont: { color: '#A1A1AA' },
        gridcolor: '#27272A'
      },
      yaxis: {
        autorange: 'reversed',
        tickfont: { color: '#A1A1AA' }
      },
      paper_bgcolor: 'rgba(0,0,0,0)',
      plot_bgcolor: 'rgba(0,0,0,0)'
    })

    // Gráfico 3: Curva ROC
    window.Plotly.newPlot('roc-curve', [
      {
        x: [0, 0.05, 0.1, 0.2, 0.4, 0.6, 0.8, 1],
        y: [0, 0.6, 0.8, 0.9, 0.95, 0.98, 0.995, 1],
        type: 'scatter',
        mode: 'lines+markers',
        name: 'Modelo',
        line: { color: '#5EEAD4', width: 3 }
      },
      {
        x: [0,1], 
        y: [0,1], 
        type: 'scatter', 
        mode: 'lines', 
        name: 'Aleatorio', 
        line: { dash: 'dash', color: '#71717A' }
      }
    ], {
      title: {
        text: 'Curva ROC',
        font: { color: '#FFFFFF', size: 16 }
      },
      xaxis: {
        title: { text: 'Tasa de Falsos Positivos', font: { color: '#A1A1AA' } },
        tickfont: { color: '#A1A1AA' },
        gridcolor: '#27272A'
      },
      yaxis: {
        title: { text: 'Tasa de Verdaderos Positivos', font: { color: '#A1A1AA' } },
        tickfont: { color: '#A1A1AA' },
        gridcolor: '#27272A'
      },
      paper_bgcolor: 'rgba(0,0,0,0)',
      plot_bgcolor: 'rgba(0,0,0,0)',
      legend: { font: { color: '#A1A1AA' } }
    })

    // Gráfico 4: Matriz de Confusión
    window.Plotly.newPlot('confusion-matrix', [{
      z: [[88, 2],[3, 107]],
      x: ['Negativo','Positivo'],
      y: ['Negativo','Positivo'],
      type: 'heatmap',
      colorscale: [
        [0, '#1A1A1A'],
        [1, '#5EEAD4']
      ],
      showscale: false,
      text: [[88,2],[3,107]],
      texttemplate: '%{text}',
      textfont: { color: '#FFFFFF', size: 16 },
      hoverinfo: 'z'
    }], {
      title: {
        text: 'Matriz de Confusión',
        font: { color: '#FFFFFF', size: 16 }
      },
      xaxis: {
        title: { text: 'Predicción', font: { color: '#A1A1AA' } },
        tickfont: { color: '#A1A1AA' }
      },
      yaxis: {
        title: { text: 'Real', font: { color: '#A1A1AA' } },
        tickfont: { color: '#A1A1AA' }
      },
      paper_bgcolor: 'rgba(0,0,0,0)',
      plot_bgcolor: 'rgba(0,0,0,0)'
    })
  }

  const techStack = [
    'Python', 'Scikit-learn', 'Pandas', 'Plotly', 'Jupyter', 
    'XGBoost', 'LightGBM', 'TensorFlow'
  ]

  const useCases = [
    '🏥 Diagnóstico Médico (Cáncer de mama)',
    '🍷 Clasificación de Vinos',
    '🚢 Predicción de Supervivencia (Titanic)',
    '❤️ Detección de Enfermedad Cardíaca',
    '🏠 Predicción de Precios Inmobiliarios'
  ]

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center space-y-6">
        <h3 className="text-2xl md:text-3xl font-bold text-gradient">
          🧠 ML Project Avanzado
        </h3>
        <p className="text-lg text-text-secondary max-w-2xl mx-auto">
          Proyecto profesional de Machine Learning con visualización avanzada de datos
        </p>
      </div>

      {/* Características Principales */}
      <div className="card-glow">
        <div className="flex items-start space-x-4 mb-6">
          <div className="w-12 h-12 bg-gradient-to-r from-accent-mint to-accent-blue rounded-xl flex items-center justify-center flex-shrink-0">
            <FeatureIcons.Target 
              size="md" 
              className="text-dark-absolute"
              aria-label="Target icon"
            />
          </div>
          <div>
            <h4 className="text-2xl font-bold text-text-primary mb-4">🌟 Características Principales</h4>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div>
              <h5 className="text-lg font-semibold text-accent-mint mb-2">Algoritmos Implementados</h5>
              <p className="text-text-secondary">
                Clasificación (Random Forest, SVM, XGBoost), Regresión (Ridge, Lasso, Elastic Net), 
                Clustering (K-Means, DBSCAN), Ensemble Methods
              </p>
            </div>
            <div>
              <h5 className="text-lg font-semibold text-accent-mint mb-2">Datasets Utilizados</h5>
              <p className="text-text-secondary">
                Iris, Wine, Breast Cancer, Titanic, Heart Disease, California Housing, sintéticos
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <h5 className="text-lg font-semibold text-accent-mint mb-2">Técnicas Avanzadas</h5>
              <p className="text-text-secondary">
                Feature Engineering, Optimización de Hiperparámetros, Validación Cruzada, 
                Interpretabilidad (SHAP, Importancia de Features)
              </p>
            </div>
            <div>
              <h5 className="text-lg font-semibold text-accent-mint mb-2">Resultados Obtenidos</h5>
              <p className="text-text-secondary">
                <span className="text-accent-blue font-bold">Accuracy promedio 96.2%</span>, 
                reproducibilidad 100%, cobertura de tests 85%
              </p>
            </div>
          </div>
        </div>

        {/* Casos de Uso */}
        <div className="mt-8">
          <h5 className="text-xl font-semibold text-accent-blue mb-4">🎯 Casos de Uso</h5>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-dark-card border border-border-subtle rounded-lg p-4">
                <p className="text-text-secondary">{useCase}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Visualizaciones */}
      <div className="space-y-8">
        <h4 className="text-2xl font-bold text-center text-gradient">
          📊 Galería de Visualizaciones Interactivas
        </h4>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="card-glow">
            <div className="text-lg font-semibold text-accent-mint mb-4 text-center">
              Comparación de Algoritmos
            </div>
            <div id="algorithms-bar" className="min-h-[300px]"></div>
          </div>
          
          <div className="card-glow">
            <div className="text-lg font-semibold text-accent-mint mb-4 text-center">
              Importancia de Variables
            </div>
            <div id="feature-importance" className="min-h-[300px]"></div>
          </div>
          
          <div className="card-glow">
            <div className="text-lg font-semibold text-accent-mint mb-4 text-center">
              Curva ROC
            </div>
            <div id="roc-curve" className="min-h-[300px]"></div>
          </div>
          
          <div className="card-glow">
            <div className="text-lg font-semibold text-accent-mint mb-4 text-center">
              Matriz de Confusión
            </div>
            <div id="confusion-matrix" className="min-h-[300px]"></div>
          </div>
        </div>
      </div>

      {/* Stack Tecnológico */}
      <div className="space-y-6">
        <h4 className="text-2xl font-bold text-center text-gradient">
          🛠️ Stack Tecnológico
        </h4>
        <div className="flex flex-wrap justify-center gap-4">
          {techStack.map((tech, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-dark-card border border-border-subtle rounded-xl text-accent-mint font-semibold hover:border-accent-mint/50 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Contacto y Enlaces */}
      <div className="text-center space-y-4">
        <h5 className="text-lg font-semibold text-gradient">📞 Enlaces del Proyecto</h5>
        <div className="flex justify-center gap-6">
          <a 
            href="https://github.com/tu-usuario/ml-project" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-12 h-12 bg-dark-card border border-border-subtle rounded-lg flex items-center justify-center text-text-secondary hover:text-accent-mint hover:border-accent-mint transition-all duration-300"
            aria-label="GitHub"
          >
            <SocialIcons.Github 
              size="md"
              aria-label="GitHub"
            />
          </a>
          <a 
            href="https://linkedin.com/in/tu-perfil" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-12 h-12 bg-dark-card border border-border-subtle rounded-lg flex items-center justify-center text-text-secondary hover:text-accent-mint hover:border-accent-mint transition-all duration-300"
            aria-label="LinkedIn"
          >
            <SocialIcons.Linkedin 
              size="md"
              aria-label="LinkedIn"
            />
          </a>
          <a 
            href="mailto:nicolas@dozo.tech"
            className="w-12 h-12 bg-dark-card border border-border-subtle rounded-lg flex items-center justify-center text-text-secondary hover:text-accent-mint hover:border-accent-mint transition-all duration-300"
            aria-label="Email"
          >
            <ContactIcons.Mail 
              size="md"
              aria-label="Email"
            />
          </a>
        </div>
      </div>
    </div>
  )
}

export default MLProject 