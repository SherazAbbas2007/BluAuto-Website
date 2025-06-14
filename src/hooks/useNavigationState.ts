
import { useState, useEffect } from 'react';

export const useNavigationState = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Clear active section when at the top (hero section)
      if (window.scrollY < 100) {
        setActiveSection('');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track active section
  useEffect(() => {
    const sections = ['process', 'usecases', 'faq', 'contact'];
    const observerOptions = {
      rootMargin: '-10% 0px -60% 0px',
      threshold: 0.1
    };

    const observers = sections.map(sectionId => {
      const element = document.getElementById(sectionId);
      if (!element) return null;

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && window.scrollY > 100) {
            setActiveSection(sectionId);
          }
        });
      }, observerOptions);

      observer.observe(element);
      return observer;
    });

    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, []);

  return {
    isScrolled,
    isMobileMenuOpen,
    setIsMobileMenuOpen,
    activeSection,
    setActiveSection
  };
};
