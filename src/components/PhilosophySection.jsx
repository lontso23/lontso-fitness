import React from 'react';
import { Dumbbell, LineChart, BookOpen, Users } from 'lucide-react';
import './PhilosophySection.css';

export const PhilosophySection = () => {
  const principles = [
    {
      icon: Dumbbell,
      title: 'Fundamentos Sólidos',
      description: 'Entrenamiento basado en ejercicios compuestos y técnicas probadas. Nada de tendencias pasajeras, solo métodos que funcionan.'
    },
    {
      icon: LineChart,
      title: 'Visión a Largo Plazo',
      description: 'Resultados sostenibles requieren tiempo. Mi objetivo es que logres un físico que puedas mantener toda la vida, no solo unas semanas.'
    },
    {
      icon: BookOpen,
      title: 'Educación Continua',
      description: 'No solo te doy un plan, te enseño el porqué detrás de cada decisión. Entender tu entrenamiento es clave para el éxito.'
    },
    {
      icon: Users,
      title: 'Personalización Total',
      description: 'Cada cuerpo es diferente. Tu plan se adapta a tu genética, experiencia, objetivos y estilo de vida único.'
    }
  ];

  return (
    <section id="filosofia" className="philosophy-section section">
      <div className="container">
        <div className="philosophy-header">
          <h2 className="section-title animate-fade-in">Mi Filosofía de Entrenamiento</h2>
          <p className="philosophy-intro animate-fade-in delay-100">
            El culturismo natural no es sprint, es maratón. Estos son los principios que guían cada uno de mis programas.
          </p>
        </div>

        <div className="principles-grid">
          {principles.map((principle, index) => (
            <div 
              key={index} 
              className={`principle-card animate-fade-in delay-${(index + 2) * 100}`}
            >
              <div className="principle-icon-wrapper">
                <principle.icon className="principle-icon" size={32} />
              </div>
              <h3 className="principle-title">{principle.title}</h3>
              <p className="principle-description">{principle.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};