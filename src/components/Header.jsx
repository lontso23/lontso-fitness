import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './Header.css';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="header-content">
          <div className="logo">
            <img 
              src="https://customer-assets.emergentagent.com/job_coach-rendimiento/artifacts/md9fkiv8_logo.png" 
              alt="Mikel Nieto Logo" 
              className="logo-img"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="nav-desktop">
            <button onClick={() => scrollToSection('inicio')} className="nav-link">Inicio</button>
            <button onClick={() => scrollToSection('sobre-mi')} className="nav-link">Sobre mí</button>
            <button onClick={() => scrollToSection('filosofia')} className="nav-link">Filosofía</button>
            <button onClick={() => scrollToSection('para-quien')} className="nav-link">Para quién</button>
            <button onClick={() => scrollToSection('como-funciona')} className="nav-link">Proceso</button>
            <a 
              href="https://forms.gle/vVG2UMMZxQwy1ez86" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-header"
            >
              Valoración Gratuita
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="mobile-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="nav-mobile">
            <button onClick={() => scrollToSection('inicio')} className="nav-link-mobile">Inicio</button>
            <button onClick={() => scrollToSection('sobre-mi')} className="nav-link-mobile">Sobre mí</button>
            <button onClick={() => scrollToSection('filosofia')} className="nav-link-mobile">Filosofía</button>
            <button onClick={() => scrollToSection('para-quien')} className="nav-link-mobile">Para quién</button>
            <button onClick={() => scrollToSection('como-funciona')} className="nav-link-mobile">Proceso</button>
            <a 
              href="https://forms.gle/vVG2UMMZxQwy1ez86" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-mobile"
            >
              Valoración Gratuita
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};