import React from 'react';
import { ArrowRight } from 'lucide-react';
import './CTASection.css';

export const CTASection = () => {
  return (
    <section className="cta-section section">
      <div className="container">
        <div className="cta-content animate-fade-in">
          <div className="cta-image-container">
            <img 
              src="https://customer-assets.emergentagent.com/job_coach-rendimiento/artifacts/keja4c3p_MiquelNieto-0556.jpg" 
              alt="Mikel Nieto"
              className="cta-img"
            />
          </div>
          
          <div className="cta-text">
            <h2 className="cta-title">
              Comienza Tu Transformación Hoy
            </h2>
            <p className="cta-description">
              Si estás listo para comprometerte con el proceso y trabajar de forma inteligente hacia tus objetivos, solicita una valoración gratuita. Analizaremos tu situación y veré si puedo ayudarte a alcanzar tu mejor versión.
            </p>
            <div className="cta-features">
              <div className="cta-feature">
                <div className="feature-dot"></div>
                <span>Sin compromisos</span>
              </div>
              <div className="cta-feature">
                <div className="feature-dot"></div>
                <span>100% personalizado</span>
              </div>
              <div className="cta-feature">
                <div className="feature-dot"></div>
                <span>Respuesta en 24-48h</span>
              </div>
            </div>
            <a 
              href="https://forms.gle/vVG2UMMZxQwy1ez86" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-cta"
            >
              Solicitar Valoración Gratuita
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};