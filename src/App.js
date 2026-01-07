import React, { useEffect } from 'react';
import './App.css';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { PhilosophySection } from './components/PhilosophySection';
import { AudienceSection } from './components/AudienceSection';
import { ProcessSection } from './components/ProcessSection';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';

function App() {
  useEffect(() => {
    // Animate elements on scroll
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.animate-fade-in');
    animatedElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="App">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <PhilosophySection />
        <AudienceSection />
        <ProcessSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

export default App;