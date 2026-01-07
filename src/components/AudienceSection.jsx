import React from 'react';
import { Check, X } from 'lucide-react';
import './AudienceSection.css';

export const AudienceSection = () => {
  const forWho = [
    'Estás dispuesto a comprometerte con el proceso',
    'Buscas resultados reales y sostenibles',
    'Valoras la disciplina y la constancia',
    'Quieres entender cómo funciona tu cuerpo',
    'Estás listo para trabajar duro en el gimnasio',
    'Prefieres calidad sobre cantidad'
  ];

  const notForWho = [
    'Buscas soluciones mágicas o atajos',
    'No estás dispuesto a seguir el plan',
    'Quieres resultados sin esfuerzo',
    'Esperas cambios en una semana'
  ];

  return (
    <section id="para-quien" className="audience-section section">
      <div className="container">
        <div className="audience-header">
          <h2 className="section-title animate-fade-in">¿Es Este Entrenamiento Para Ti?</h2>
          <p className="audience-intro animate-fade-in delay-100">
            Trabajo únicamente con personas comprometidas. Si encajas en este perfil, podemos lograr cosas increíbles juntos.
          </p>
        </div>

        <div className="audience-content">
          <div className="audience-card for-card animate-fade-in delay-200">
            <h3 className="audience-card-title">Este programa es para ti si:</h3>
            <ul className="audience-list">
              {forWho.map((item, index) => (
                <li key={index} className="audience-item">
                  <div className="check-icon">
                    <Check size={20} />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="audience-card not-for-card animate-fade-in delay-300">
            <h3 className="audience-card-title">No es para ti si:</h3>
            <ul className="audience-list">
              {notForWho.map((item, index) => (
                <li key={index} className="audience-item">
                  <div className="x-icon">
                    <X size={20} />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};