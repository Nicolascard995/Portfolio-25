import React from 'react';
import { getTranslation } from '@/config/translations'
import { useParams } from 'next/navigation'

const ConvolutionalClassifierProject = () => {
  const params = useParams();
  const currentLocale = params.locale as string;

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center space-y-6">
        <h3 className="text-2xl md:text-3xl font-bold text-gradient">
          {getTranslation(currentLocale, 'research.convolutional_classifier.title')}
        </h3>
        <div className="flex justify-center gap-2 mb-2">
          <img src="https://img.shields.io/badge/python-3.8+-blue.svg" alt="Python 3.8+" />
          <img src="https://img.shields.io/badge/TensorFlow-2.13+-orange.svg" alt="TensorFlow 2.13+" />
          <img src="https://img.shields.io/badge/License-MIT-yellow.svg" alt="MIT License" />
        </div>
        <p className="text-lg text-text-secondary max-w-2xl mx-auto">
          {getTranslation(currentLocale, 'research.convolutional_classifier.description')}
        </p>
      </div>

      {/* Highlights profesionales */}
      <div className="card-glow">
        <h4 className="text-xl font-bold text-accent-mint mb-4">{getTranslation(currentLocale, 'research.convolutional_classifier.professional_highlights')}</h4>
        <ul className="list-disc pl-6 space-y-2 text-text-secondary">
          {getTranslation(currentLocale, 'research.convolutional_classifier.highlights_list').map((highlight: string, index: number) => (
            <li key={index} dangerouslySetInnerHTML={{ __html: highlight }} />
          ))}
        </ul>
      </div>

      {/* Stack Tecnológico */}
      <div className="bg-dark-card border border-border-subtle rounded-2xl p-8">
        <h4 className="text-xl font-bold text-accent-mint mb-6 text-center">{getTranslation(currentLocale, 'research.convolutional_classifier.tech_stack')}</h4>
        <ul className="list-disc pl-6 space-y-2 text-text-secondary">
          {getTranslation(currentLocale, 'research.convolutional_classifier.tech_stack_list').map((tech: string, index: number) => (
            <li key={index} dangerouslySetInnerHTML={{ __html: tech }} />
          ))}
        </ul>
      </div>


      {/* ¿Por qué es profesional? */}
      <div className="bg-dark-card border border-border-subtle rounded-2xl p-8">
        <h4 className="text-xl font-bold text-accent-mint mb-6 text-center">{getTranslation(currentLocale, 'research.convolutional_classifier.why_professional')}</h4>
        <ul className="list-disc pl-6 space-y-2 text-text-secondary">
          {getTranslation(currentLocale, 'research.convolutional_classifier.professional_reasons').map((reason: string, index: number) => (
            <li key={index} dangerouslySetInnerHTML={{ __html: reason }} />
          ))}
        </ul>
      </div>

      {/* Resultados y Métricas */}
      <div className="card-glow">
        <h4 className="text-xl font-bold text-accent-mint mb-4">{getTranslation(currentLocale, 'research.convolutional_classifier.results')}</h4>
        <ul className="list-disc pl-6 space-y-2 text-text-secondary">
          {getTranslation(currentLocale, 'research.convolutional_classifier.results_list').map((result: string, index: number) => (
            <li key={index}>{result}</li>
          ))}
        </ul>
      </div>

      {/* Casos de Uso */}
      <div className="card-glow">
        <h4 className="text-xl font-bold text-accent-mint mb-4">{getTranslation(currentLocale, 'research.convolutional_classifier.use_cases_section')}</h4>
        <p className="text-lg text-text-secondary mb-6">
          {getTranslation(currentLocale, 'research.convolutional_classifier.use_cases_description')}
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {getTranslation(currentLocale, 'research.convolutional_classifier.use_cases_list').map((useCase: string, index: number) => (
            <div key={index} className="bg-dark-card border border-border-subtle rounded-lg p-4">
              <p className="text-text-secondary">{useCase}</p>
            </div>
          ))}
        </div>
      </div>

      {/* KPIs y Resultados Clave */}
      <div className="bg-dark-card border border-border-subtle rounded-2xl p-8">
        <h4 className="text-xl font-bold text-accent-mint mb-6 text-center">{getTranslation(currentLocale, 'research.convolutional_classifier.kpis')}</h4>
        <ul className="list-disc pl-6 space-y-2 text-text-secondary">
          {getTranslation(currentLocale, 'research.convolutional_classifier.kpis_list').map((kpi: string, index: number) => (
            <li key={index} dangerouslySetInnerHTML={{ __html: kpi }} />
          ))}
        </ul>
      </div>

      {/* Footer */}
      <div className="text-center mt-8">
        <b>{getTranslation(currentLocale, 'research.convolutional_classifier.footer')}</b> <br />
                    <a href="https://github.com/Nicolascard995/convolutional_classifierr" target="_blank" className="text-accent-mint underline">{getTranslation(currentLocale, 'research.convolutional_classifier.github_link')}</a>
      </div>
    </div>
  );
};

export default ConvolutionalClassifierProject; 