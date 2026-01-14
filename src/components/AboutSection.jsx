import React from 'react';
import { Award, Target } from 'lucide-react';
import './AboutSection.css';

export const AboutSection = () => {
  return (
    <section id="sobre-mi" className="about-section section">
      <div className="container">
        <div className="about-content">
          <div className="about-image-wrapper animate-fade-in">
            <img 
              src="https://customer-assets.emergentagent.com/job_coach-rendimiento/artifacts/07df79dv_MiquelNieto-0513.jpg" 
              alt="Mikel Nieto entrenador"
              className="about-img"
            />
          </div>
          
          <div className="about-text">
            <h2 className="section-title animate-fade-in">Sobre Mí</h2>
            <div className="about-description animate-fade-in delay-100">
              <p>
                Soy <strong>Mikel Nieto</strong>, atleta de la categoría Men´s Physique con 14 años de experiencia en el gimnasio y 8 años compitiendo, además de ingeniero informático de profesión.
              </p>
              <p>
                Desde siempre he compaginado el entrenamiento y la competición con una carrera profesional que exige constancia, responsabilidad y un alto esfuerzo mental. Trabajar en un entorno técnico y exigente me ha enseñado a planificar, ser metódico y mantener el foco incluso en momentos de presión, habilidades que aplico exactamente igual dentro y fuera del gimnasio.
              </p>
              <p>
                Mi camino en el fitness no ha sido de atajos ni soluciones rápidas. Ha sido un proceso de constancia, disciplina y aprendizaje continuo. He vivido en primera persona cada etapa del entrenamiento, desde principiante hasta competidor, entendiendo lo que supone progresar cuando tienes trabajo, obligaciones y una vida más allá del gimnasio.
              </p>
              <p>
                Como entrenador, mi enfoque es realista y sostenible. No prometo transformaciones milagrosas en 30 días. Lo que sí ofrezco es un acompañamiento serio y personalizado, basado en ciencia, experiencia y dedicación, para ayudarte a construir tu mejor versión física de forma natural, duradera y compatible con tu día a día.
              </p>
            </div>

            
            <div className="about-stats animate-fade-in delay-200">
              <div className="stat-card">
                <Award className="stat-icon" size={28} />
                <div className="stat-content">
                  <h3 className="stat-number">8 Años</h3>
                  <p className="stat-label">Compitiendo</p>
                </div>
              </div>
              <div className="stat-card">
                <Target className="stat-icon" size={28} />
                <div className="stat-content">
                  <h3 className="stat-number">14 Años</h3>
                  <p className="stat-label">En el Gimnasio</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
