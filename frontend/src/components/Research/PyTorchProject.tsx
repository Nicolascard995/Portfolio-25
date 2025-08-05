import React from 'react';
import { getTranslation } from '@/config/translations'
import { useParams } from 'next/navigation'

const PyTorchProject = () => {
  const params = useParams();
  const currentLocale = params.locale as string;

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center space-y-6">
        <h3 className="text-2xl md:text-3xl font-bold text-gradient">
          {getTranslation(currentLocale, 'research.pytorch.title')}
        </h3>
        <p className="text-lg text-text-secondary max-w-2xl mx-auto">
          {getTranslation(currentLocale, 'research.pytorch.description')}
        </p>
      </div>

      {/* Visión y Propuesta de Valor (Integración con el estilo existente) */}
      <div className="card-glow">
        <h4 className="text-xl font-bold text-accent-mint mb-4">{getTranslation(currentLocale, 'research.pytorch.why_custom_ai')}</h4>
        <ul className="list-disc pl-6 space-y-2 text-text-secondary">
          {getTranslation(currentLocale, 'research.pytorch.custom_ai_reasons').map((reason: string, index: number) => (
            <li key={index}>{reason}</li>
          ))}
        </ul>
      </div>

      {/* Capacidades Técnicas Clave */}
      <div className="bg-dark-card border border-border-subtle rounded-2xl p-8">
        <h4 className="text-xl font-bold text-accent-mint mb-6 text-center">{getTranslation(currentLocale, 'research.pytorch.technical_capabilities')}</h4>
        <div className="grid md:grid-cols-2 gap-8 text-text-secondary">
          <div>
            <h5 className="font-semibold text-lg mb-2 text-accent-cyan">{getTranslation(currentLocale, 'research.pytorch.ai_modeling.title')}</h5>
            <ul className="list-disc pl-5 space-y-1">
              {getTranslation(currentLocale, 'research.pytorch.ai_modeling.items').map((item: string, index: number) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-lg mb-2 text-accent-cyan">{getTranslation(currentLocale, 'research.pytorch.fullstack_development.title')}</h5>
            <ul className="list-disc pl-5 space-y-1">
              {getTranslation(currentLocale, 'research.pytorch.fullstack_development.items').map((item: string, index: number) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Aplicaciones Reales (Manteniendo la esencia) */}
      <div className="card-glow">
        <h4 className="text-xl font-bold text-accent-mint mb-4">{getTranslation(currentLocale, 'research.pytorch.applications')}</h4>
        <ul className="list-disc pl-6 space-y-2 text-text-secondary">
          {getTranslation(currentLocale, 'research.pytorch.applications_list').map((application: string, index: number) => (
            <li key={index}>{application}</li>
          ))}
        </ul>
      </div>

      {/* Casos de Uso */}
      <div className="card-glow">
        <h4 className="text-xl font-bold text-accent-mint mb-4">{getTranslation(currentLocale, 'research.pytorch.use_cases_section')}</h4>
        <p className="text-lg text-text-secondary mb-6">
          {getTranslation(currentLocale, 'research.pytorch.use_cases_description')}
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {getTranslation(currentLocale, 'research.pytorch.use_cases_list').map((useCase: string, index: number) => (
            <div key={index} className="bg-dark-card border border-border-subtle rounded-lg p-4">
              <p className="text-text-secondary">{useCase}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Métricas Clave y Logros */}
      <div className="bg-dark-card border border-border-subtle rounded-2xl p-8">
        <h4 className="text-xl font-bold text-accent-mint mb-6 text-center">{getTranslation(currentLocale, 'research.pytorch.success_metrics')}</h4>
        <div className="grid md:grid-cols-2 gap-8 text-text-secondary">
          <div>
            <h5 className="font-semibold text-lg mb-2 text-accent-cyan">{getTranslation(currentLocale, 'research.pytorch.model_performance.title')}</h5>
            <ul className="list-disc pl-5 space-y-1">
              {getTranslation(currentLocale, 'research.pytorch.model_performance.items').map((item: string, index: number) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-lg mb-2 text-accent-cyan">{getTranslation(currentLocale, 'research.pytorch.user_impact.title')}</h5>
            <ul className="list-disc pl-5 space-y-1">
              {getTranslation(currentLocale, 'research.pytorch.user_impact.items').map((item: string, index: number) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Cita final */}
      <div className="text-center mt-8">
        <em className="block text-lg text-text-secondary mb-2">
          "{getTranslation(currentLocale, 'research.pytorch.final_quote')}"
        </em>
        <p className="text-sm text-text-muted">
          {getTranslation(currentLocale, 'research.pytorch.final_description')}
        </p>
      </div>

      {/* Enlace al repositorio */}
      <div className="text-center mt-6">
        <a 
          href="https://github.com/Nicolascard995/chatbotpytorch" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-accent-mint underline hover:text-accent-cyan transition-colors"
        >
          {getTranslation(currentLocale, 'research.pytorch.github_link')}
        </a>
      </div>
    </div>
  );
};

export default PyTorchProject;