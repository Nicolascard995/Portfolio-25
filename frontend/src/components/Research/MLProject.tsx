'use client'

import React, { useEffect } from 'react'
import { FeatureIcons, ContactIcons, SocialIcons } from '../IconSystem'
import { getTranslation } from '@/config/translations'
import { useParams } from 'next/navigation'

declare global {
  interface Window {
    Plotly: any;
  }
}

const MLProject = () => {
  const params = useParams();
  const currentLocale = params.locale as string;

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
        text: getTranslation(currentLocale, 'research.ml_project.algorithms_comparison'),
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
        text: getTranslation(currentLocale, 'research.ml_project.feature_importance'),
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
        text: getTranslation(currentLocale, 'research.ml_project.roc_curve'),
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
        text: getTranslation(currentLocale, 'research.ml_project.confusion_matrix'),
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

  const useCases = getTranslation(currentLocale, 'research.ml_project.use_cases_list')

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center space-y-6">
        <h3 className="text-2xl md:text-3xl font-bold text-gradient">
          {getTranslation(currentLocale, 'research.ml_project.title')}
        </h3>
        <p className="text-lg text-text-secondary max-w-2xl mx-auto">
          {getTranslation(currentLocale, 'research.ml_project.description')}
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
            <h4 className="text-2xl font-bold text-text-primary mb-4">{getTranslation(currentLocale, 'research.ml_project.main_features')}</h4>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div>
              <h5 className="text-lg font-semibold text-accent-mint mb-2">{getTranslation(currentLocale, 'research.ml_project.algorithms.title')}</h5>
              <p className="text-text-secondary">
                {getTranslation(currentLocale, 'research.ml_project.algorithms.description')}
              </p>
            </div>
            <div>
              <h5 className="text-lg font-semibold text-accent-mint mb-2">{getTranslation(currentLocale, 'research.ml_project.datasets.title')}</h5>
              <p className="text-text-secondary">
                {getTranslation(currentLocale, 'research.ml_project.datasets.description')}
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <h5 className="text-lg font-semibold text-accent-mint mb-2">{getTranslation(currentLocale, 'research.ml_project.techniques.title')}</h5>
              <p className="text-text-secondary">
                {getTranslation(currentLocale, 'research.ml_project.techniques.description')}
              </p>
            </div>
            <div>
              <h5 className="text-lg font-semibold text-accent-mint mb-2">{getTranslation(currentLocale, 'research.ml_project.results.title')}</h5>
              <p className="text-text-secondary">
                <span className="text-accent-blue font-bold">{getTranslation(currentLocale, 'research.ml_project.results.description')}</span>
              </p>
            </div>
          </div>
        </div>

        {/* Casos de Uso */}
        <div className="mt-8">
          <h5 className="text-xl font-semibold text-accent-blue mb-4">{getTranslation(currentLocale, 'research.ml_project.use_cases_section')}</h5>
          <p className="text-lg text-text-secondary mb-6">
            {getTranslation(currentLocale, 'research.ml_project.use_cases_description')}
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {useCases.map((useCase: string, index: number) => (
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
          {getTranslation(currentLocale, 'research.ml_project.visualizations')}
        </h4>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="card-glow">
            <div className="text-lg font-semibold text-accent-mint mb-4 text-center">
              {getTranslation(currentLocale, 'research.ml_project.algorithms_comparison')}
            </div>
            <div id="algorithms-bar" className="min-h-[300px]"></div>
          </div>
          
          <div className="card-glow">
            <div className="text-lg font-semibold text-accent-mint mb-4 text-center">
              {getTranslation(currentLocale, 'research.ml_project.feature_importance')}
            </div>
            <div id="feature-importance" className="min-h-[300px]"></div>
          </div>
          
          <div className="card-glow">
            <div className="text-lg font-semibold text-accent-mint mb-4 text-center">
              {getTranslation(currentLocale, 'research.ml_project.roc_curve')}
            </div>
            <div id="roc-curve" className="min-h-[300px]"></div>
          </div>
          
          <div className="card-glow">
            <div className="text-lg font-semibold text-accent-mint mb-4 text-center">
              {getTranslation(currentLocale, 'research.ml_project.confusion_matrix')}
            </div>
            <div id="confusion-matrix" className="min-h-[300px]"></div>
          </div>
        </div>
      </div>

      {/* Stack Tecnológico */}
      <div className="space-y-6">
        <h4 className="text-2xl font-bold text-center text-gradient">
          {getTranslation(currentLocale, 'research.ml_project.tech_stack')}
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

      {/* Enlaces del Proyecto */}
      <div className="text-center space-y-4">
        <h5 className="text-lg font-semibold text-gradient">{getTranslation(currentLocale, 'research.ml_project.project_links')}</h5>
        <div className="flex justify-center gap-6">
          <a 
            href="https://github.com/Nicolascard995/course_ml_MindsDB" 
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
            href="https://www.linkedin.com/in/nicolascardozo95arg/" 
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
        </div>
      </div>
    </div>
  )
}

export default MLProject 