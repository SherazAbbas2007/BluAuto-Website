
import React from 'react';

const Footer = () => {
  const navItems = [{
    name: 'HOME',
    href: '#'
  }, {
    name: 'OUR PROCESS',
    href: '#process'
  }, {
    name: 'USE CASES',
    href: '#usecases'
  }, {
    name: 'FAQ',
    href: '#about'
  }, {
    name: 'CONTACT',
    href: '#contact'
  }];

  const scrollToSection = (href: string) => {
    if (href === '#') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      return;
    }
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-gradient-to-b from-slate-800 to-slate-900 text-white py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">
          <div className="flex items-center space-x-3">
            <span className="font-semibold tracking-tight text-2xl sm:text-3xl">BluAuto</span>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center md:items-end gap-3 sm:gap-4">
            {navItems.map(item => (
              <button 
                key={item.name} 
                onClick={() => scrollToSection(item.href)} 
                className="text-slate-300 hover:text-white transition-colors duration-200 font-medium tracking-wide text-lg sm:text-xl whitespace-nowrap"
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
        
        <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-slate-700 text-center">
          <p className="text-slate-300 font-light text-sm sm:text-base">© 2025 BluAuto. All rights reserved. Made by Sheraz ☺️</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
