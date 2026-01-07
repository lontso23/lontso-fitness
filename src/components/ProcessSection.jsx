import React from 'react';
import { ClipboardList, Dumbbell, TrendingUp, Target } from 'lucide-react';
import './ProcessSection.css';

export const ProcessSection = () => {
  const steps = [
    {
      number: '01',
      icon: ClipboardList,
      title: 'Valoración Inicial',
      description: 'Analizamos tu situación actual, objetivos, experiencia previa y disponibilidad. Esto me permite entender exactamente qué necesitas.'
    },
    {
      number: '02',
      icon: Dumbbell,
      title: 'Plan Personalizado',
      description: 'Diseño un programa de entrenamiento adaptado a ti. Ejercicios, series, repeticiones, descansos... todo ajustado a tus características.'
    },
    {
      number: '03',
      icon: TrendingUp,
      title: 'Seguimiento Continuo',
      description: 'Revisamos tu progreso regularmente. Ajusto el plan según tus avances, asegurando que sigas mejorando de forma constante.'
    },
    {
      number: '04',
      icon: Target,
      title: 'Resultados Sostenibles',
      description: 'Con disciplina y el enfoque correcto, alcanzas tus objetivos y aprendes a mantenerlos a largo plazo. Este es el verdadero éxito.'
    }
  ];

  return (
    <section id="como-funciona" className="process-section section">
      <div className="container">
        <div className="process-header">
          <h2 className="section-title animate-fade-in">¿Cómo Funciona?</h2>
          <p className="process-intro animate-fade-in delay-100">
            Un proceso claro y estructurado para llevarte desde donde estás hasta donde quieres estar.
          </p>
        </div>

        <div className="process-steps">
          {steps.map((step, index) => (
            <div key={index} className={`process-step animate-fade-in delay-${(index + 2) * 100}`}>
              <div className="step-number">{step.number}</div>
              <div className="step-icon-wrapper">
                <step.icon className="step-icon" size={32} />
              </div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
              {index < steps.length - 1 && <div className="step-connector"></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};