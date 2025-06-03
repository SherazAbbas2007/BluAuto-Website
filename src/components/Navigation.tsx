
import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const Navigation = () => {
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
    const sections = ['process', 'usecases', 'about', 'contact'];
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

  const navItems = [
    { name: 'Our Process', href: '#process' },
    { name: 'Use Cases', href: '#usecases' },
    { name: 'FAQ', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveSection('');
  };

  const isActive = (href: string) => {
    const sectionId = href.replace('#', '');
    return activeSection === sectionId;
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md" style={{
        backgroundColor: 'rgba(7, 90, 134, 0.5)'
      }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo Section - Left Side */}
            <div className="flex items-center cursor-pointer flex-shrink-0" onClick={scrollToTop}>
              <img src="/lovable-uploads/124b600a-111d-4f2c-aaa8-925d05de7cdb.png" alt="BluAuto Logo" className="h-6 w-6 sm:h-8 sm:w-8 object-contain mr-2 sm:mr-3" />
              <span className="font-semibold text-white tracking-tight text-xl sm:text-2xl">BluAuto</span>
            </div>

            {/* Desktop Navigation - Center */}
            <div className="hidden md:flex items-center justify-center flex-1 max-w-2xl mx-4">
              <div className="flex items-center space-x-4 lg:space-x-8">
                {navItems.map(item => (
                  <button 
                    key={item.name} 
                    onClick={() => scrollToSection(item.href)} 
                    className="text-white hover:text-white transition-all duration-300 text-base lg:text-xl font-semibold px-2 lg:px-3 py-2 whitespace-nowrap" 
                    style={{
                      textShadow: isActive(item.href) ? '0 0 25px rgba(255,255,255,0.9)' : 'none',
                      transform: isActive(item.href) ? 'scale(1.05)' : 'scale(1)',
                      transition: 'text-shadow 0.3s ease, transform 0.3s ease'
                    }} 
                    onMouseEnter={(e) => {
                      if (!isActive(item.href)) {
                        e.currentTarget.style.textShadow = '0 0 25px rgba(255,255,255,0.9)';
                      }
                    }} 
                    onMouseLeave={(e) => {
                      if (!isActive(item.href)) {
                        e.currentTarget.style.textShadow = 'none';
                      }
                    }}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Empty div for flex balance */}
            <div className="hidden md:block w-16 lg:w-20 flex-shrink-0"></div>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-white flex-shrink-0" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              <i className={`ph ${isMobileMenuOpen ? 'ph-x' : 'ph-list'} text-2xl sm:text-3xl`}></i>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
        <div className={`absolute right-0 top-0 h-full w-72 sm:w-80 bg-gradient-to-b from-slate-900 to-slate-800 shadow-xl transform transition-transform duration-300 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex flex-col h-full pt-16 sm:pt-20 px-4 sm:px-6">
            {navItems.map((item, index) => (
              <button 
                key={item.name} 
                onClick={() => scrollToSection(item.href)} 
                className={`text-left py-3 sm:py-4 text-white/80 hover:text-white font-light transition-all duration-200 border-b border-white/10 animate-fade-in-up text-base sm:text-lg px-2`} 
                style={{
                  animationDelay: `${index * 0.1}s`,
                  textShadow: isActive(item.href) ? '0 0 20px rgba(255,255,255,0.8)' : 'none',
                  transform: isActive(item.href) ? 'scale(1.05)' : 'scale(1)',
                  transition: 'text-shadow 0.3s ease, color 0.2s ease, transform 0.3s ease'
                }} 
                onMouseEnter={(e) => {
                  if (!isActive(item.href)) {
                    e.currentTarget.style.textShadow = '0 0 20px rgba(255,255,255,0.8)';
                  }
                }} 
                onMouseLeave={(e) => {
                  if (!isActive(item.href)) {
                    e.currentTarget.style.textShadow = 'none';
                  }
                }}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
