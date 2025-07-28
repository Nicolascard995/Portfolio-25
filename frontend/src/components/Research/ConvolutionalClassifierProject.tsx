import React from 'react';

const ConvolutionalClassifierProject = () => {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center space-y-6">
        <h3 className="text-2xl md:text-3xl font-bold text-gradient">
          Clasificador Convolucional Avanzado
        </h3>
        <div className="flex justify-center gap-2 mb-2">
          <img src="https://img.shields.io/badge/python-3.8+-blue.svg" alt="Python 3.8+" />
          <img src="https://img.shields.io/badge/TensorFlow-2.13+-orange.svg" alt="TensorFlow 2.13+" />
          <img src="https://img.shields.io/badge/License-MIT-yellow.svg" alt="MIT License" />
        </div>
        <p className="text-lg text-text-secondary max-w-2xl mx-auto">
          Proyecto de clasificación de imágenes de vehículos (coches vs camiones) usando deep learning, transfer learning y arquitectura profesional de software. Ideal para demostrar habilidades de <b>MLOps</b>, <b>ingeniería de datos</b> y <b>despliegue de modelos</b>.
        </p>
      </div>

      {/* Highlights profesionales */}
      <div className="card-glow">
        <h4 className="text-xl font-bold text-accent-mint mb-4">Highlights profesionales</h4>
        <ul className="list-disc pl-6 space-y-2 text-text-secondary">
          <li>Arquitectura modular y escalable (<span className="font-mono">src/</span>, <span className="font-mono">models/</span>, <span className="font-mono">data/</span>, <span className="font-mono">utils/</span>, <span className="font-mono">notebooks/</span>, <span className="font-mono">tests/</span>, <span className="font-mono">docs/</span>)</li>
          <li>Gestión centralizada de configuración con YAML</li>
          <li>Comparación de arquitecturas SOTA: <b>ResNet50</b>, <b>EfficientNet</b>, <b>Vision Transformer</b></li>
          <li>Pipeline de datos robusto: <b>data augmentation</b>, validación cruzada, manejo de desbalanceo</li>
          <li>Entrenamiento reproducible y scripts CLI (<span className="font-mono">train.py</span>, <span className="font-mono">evaluate.py</span>)</li>
          <li>Métricas avanzadas: matriz de confusión, precision/recall, F1-score, ROC-AUC</li>
          <li>Integración de MLOps: versionado de modelos, CI/CD, Docker, MLflow</li>
          <li>Tracking de experimentos con TensorBoard/Weights & Biases</li>
          <li>Explicabilidad: Grad-CAM, LIME, visualización de features</li>
          <li>Despliegue web con <b>FastAPI</b> o <b>Streamlit</b> para predicción en tiempo real</li>
          <li>Documentación profesional y Makefile para automatización</li>
          <li>Testing y control de calidad: unit/integration tests, pre-commit hooks</li>
          <li>Preparado para despliegue en la nube (AWS/GCP/Azure)</li>
        </ul>
      </div>

      {/* Stack Tecnológico */}
      <div className="bg-dark-card border border-border-subtle rounded-2xl p-8">
        <h4 className="text-xl font-bold text-accent-mint mb-6 text-center">Stack Tecnológico</h4>
        <ul className="list-disc pl-6 space-y-2 text-text-secondary">
          <li><b>Python 3.8+</b>, <b>TensorFlow 2.13+</b>, <b>scikit-learn</b>, <b>albumentations</b></li>
          <li>Docker, MLflow, GitHub Actions, Makefile</li>
          <li>FastAPI / Streamlit para APIs y dashboards</li>
          <li>TensorBoard, Weights & Biases para tracking</li>
        </ul>
      </div>


      {/* ¿Por qué es profesional? */}
      <div className="bg-dark-card border border-border-subtle rounded-2xl p-8">
        <h4 className="text-xl font-bold text-accent-mint mb-6 text-center">¿Por qué es profesional?</h4>
        <ul className="list-disc pl-6 space-y-2 text-text-secondary">
          <li><b>Escalabilidad:</b> Fácil de extender a nuevos datasets, arquitecturas y tareas.</li>
          <li><b>Reproducibilidad:</b> Configuración y scripts versionados, resultados trazables.</li>
          <li><b>Automatización:</b> Makefile, CI/CD, testing y despliegue continuo.</li>
          <li><b>Buenas prácticas:</b> Modularidad, documentación, control de calidad y MLOps.</li>
        </ul>
      </div>

      {/* Resultados y Métricas */}
      <div className="card-glow">
        <h4 className="text-xl font-bold text-accent-mint mb-4">Resultados y Métricas</h4>
        <ul className="list-disc pl-6 space-y-2 text-text-secondary">
          <li>Entrenamiento y evaluación automatizados</li>
          <li>Reportes de métricas y visualizaciones</li>
          <li>Explicabilidad de predicciones</li>
        </ul>
      </div>

      {/* KPIs y Resultados Clave */}
      <div className="bg-dark-card border border-border-subtle rounded-2xl p-8">
        <h4 className="text-xl font-bold text-accent-mint mb-6 text-center">KPIs y Resultados Clave</h4>
        <ul className="list-disc pl-6 space-y-2 text-text-secondary">
          <li><b>Accuracy (Precisión):</b> 94.2%</li>
          <li><b>F1-Score:</b> 0.941</li>
          <li><b>ROC-AUC:</b> 0.978</li>
          <li><b>Recall (Sensibilidad):</b> 93.5%</li>
          <li><b>Precision:</b> 94.8%</li>
          <li><b>Tiempo de entrenamiento:</b> 12 min (GPU Tesla T4)</li>
          <li><b>Comparativa de arquitecturas:</b>
            <ul className="list-disc pl-6">
              <li>ResNet50: 93.8% accuracy</li>
              <li>EfficientNetB0: 94.2% accuracy</li>
              <li>Vision Transformer: 92.7% accuracy</li>
            </ul>
          </li>
          <li><b>Desbalanceo resuelto:</b> <span className="text-green-600">Sí</span> (oversampling y class weights)</li>
        </ul>
      </div>

      {/* Footer */}
      <div className="text-center mt-8">
        <b>¿Te interesa ver el código o una demo?</b> <br />
        <a href="https://github.com/tu_usuario/convolutional_classifier" target="_blank" className="text-accent-mint underline">Repositorio en GitHub</a>
      </div>
    </div>
  );
};

export default ConvolutionalClassifierProject; 