import React from 'react';
import { ArrowRight } from 'lucide-react';
import './HeroSection.css';

export const HeroSection = () => {
  return (
   <section id="inicio" className="hero-section">
    <div className="hero-container">
      <div className="hero-content">
        <div className="hero-text animate-fade-in">
          <h1 className="hero-title">
            Entrenamiento real.
            <br />
            <span className="hero-title-accent">Progreso sostenible.</span>
          </h1>

          <p className="hero-subtitle animate-fade-in delay-100">
            Trabajo contigo paso a paso para construir un físico fuerte, saludable y mantenible en el tiempo.
          </p>

          <div className="hero-cta animate-fade-in delay-200">
            <a 
              href="https://forms.gle/vVG2UMMZxQwy1ez86" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary"
            >
              Solicitar valoración gratuita
              <ArrowRight size={20} />
            </a>
          </div>
        </div>

        <div className="hero-image animate-fade-in delay-300">
          <img 
            src="https://customer-assets.emergentagent.com/job_coach-rendimiento/artifacts/i7hds5in_MensPhysiqueAwards-2995.jpg" 
            alt="Mikel Nieto en competición"
            className="hero-img"
          />
          <div className="hero-image-overlay"></div>
        </div>
      </div>
    </div>
  </section>

  );
};
