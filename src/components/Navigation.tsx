
import React, { useState, useEffect } from 'react';
const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navItems = [{
    name: 'Our Process',
    href: '#process'
  }, {
    name: 'Use Cases',
    href: '#usecases'
  }, {
    name: 'About',
    href: '#about'
  }, {
    name: 'Contact',
    href: '#contact'
  }];
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return <>
      <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md" style={{
      backgroundColor: 'rgba(7, 90, 134, 0.5)'
    }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo Section - Left Side */}
            <div className="flex items-center cursor-pointer" onClick={scrollToTop}>
              <img src="/lovable-uploads/124b600a-111d-4f2c-aaa8-925d05de7cdb.png" alt="BluAuto Logo" className="h-8 w-8 object-contain mr-3" />
              <span className="font-semibold text-white tracking-tight text-2xl">BluAuto</span>
            </div>

            {/* Desktop Navigation - Center */}
            <div className="hidden md:flex items-center justify-center flex-1">
              <div className="flex items-center space-x-8">
                {navItems.map(item => <button key={item.name} onClick={() => scrollToSection(item.href)} className="text-white hover:text-white transition-all duration-300 text-xl font-semibold hover:shadow-[0_0_15px_rgba(255,255,255,0.5)] rounded-lg px-3 py-2">
                    {item.name}
                  </button>)}
              </div>
            </div>

            {/* Empty div for flex balance */}
            <div className="hidden md:block w-20"></div>

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
            {navItems.map((item, index) => <button key={item.name} onClick={() => scrollToSection(item.href)} className={`text-left py-4 text-white/80 hover:text-white font-light transition-all duration-200 border-b border-white/10 animate-fade-in-up text-lg hover:shadow-[0_0_10px_rgba(255,255,255,0.3)] rounded px-2`} style={{
            animationDelay: `${index * 0.1}s`
          }}>
                {item.name}
              </button>)}
          </div>
        </div>
      </div>
    </>;
};
export default Navigation;
