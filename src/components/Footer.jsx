import React from 'react';
import { Instagram } from 'lucide-react';
import './Footer.css';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <img 
              src="https://customer-assets.emergentagent.com/job_coach-rendimiento/artifacts/md9fkiv8_logo.png" 
              alt="Mikel Nieto Logo" 
              className="footer-logo"
            />
            <p className="footer-tagline">
              Nosotros No Fallamos.
            </p>
          </div>

          <div className="footer-social">
            <a 
              href="https://instagram.com/mikel_lontso" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
              aria-label="Instagram"
            >
              <Instagram size={24} />
              <span>@mikel_lontso</span>
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} Mikel Nieto. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};