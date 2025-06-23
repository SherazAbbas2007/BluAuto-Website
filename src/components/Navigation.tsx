
import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { scrollToSection, scrollToTop } from '../utils/scrollUtils';

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

  const navItems = [
    { name: 'Our Process', href: '#process' },
    { name: 'Use Cases', href: '#usecases' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleScrollToSection = (href: string) => {
    scrollToSection(href);
    setIsMobileMenuOpen(false);
  };

  const handleScrollToTop = () => {
    scrollToTop();
    setActiveSection('');
  };

  const handleBookMoreMeetings = () => {
    console.log('Book More Meetings button clicked');
    window.open('https://cal.com/sheraz-bluauto/45-minutes-discovery-call?overlayCalendar=true', '_blank');
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
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo Section - Left Side */}
            <div className="flex items-center cursor-pointer" onClick={handleScrollToTop}>
              <img src="/lovable-uploads/124b600a-111d-4f2c-aaa8-925d05de7cdb.png" alt="BluAuto Logo" className="h-8 w-8 object-contain mr-3" />
              <span className="font-semibold text-white tracking-tight text-2xl">BluAuto</span>
            </div>

            {/* Desktop Navigation - Center */}
            <div className="hidden md:flex items-center justify-center flex-1">
              <div className="flex items-center space-x-8">
                {navItems.map(item => (
                  <button 
                    key={item.name} 
                    onClick={() => handleScrollToSection(item.href)} 
                    className="text-white hover:text-white transition-all duration-300 text-xl font-semibold px-3 py-2" 
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

            {/* Book More Meetings Button - Right Side (Desktop) */}
            <div className="hidden md:block">
              <button 
                onClick={handleBookMoreMeetings}
                className="bg-white text-slate-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 text-lg hover:scale-105"
              >
                Book More Meetings
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              <i className={`ph ${isMobileMenuOpen ? 'ph-x' : 'ph-list'} text-3xl`}></i>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
        <div className={`absolute right-0 top-0 h-full w-80 bg-gradient-to-b from-slate-900 to-slate-800 shadow-xl transform transition-transform duration-300 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex flex-col h-full pt-20 px-6">
            {navItems.map((item, index) => (
              <button 
                key={item.name} 
                onClick={() => handleScrollToSection(item.href)} 
                className={`text-left py-4 text-white/80 hover:text-white font-light transition-all duration-200 border-b border-white/10 animate-fade-in-up text-lg px-2`} 
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
            
            {/* Book More Meetings Button for Mobile */}
            <button 
              onClick={handleBookMoreMeetings}
              className="bg-white text-slate-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 text-lg mt-6 mx-2"
            >
              Book More Meetings
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
