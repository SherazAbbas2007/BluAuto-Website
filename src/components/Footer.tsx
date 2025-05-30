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
  return <footer className="bg-gradient-to-b from-slate-800 to-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <span className="font-semibold tracking-tight text-3xl">BluAuto</span>
          </div>
          
          <div className="flex flex-col items-center md:items-end space-y-2">
            {navItems.map(item => <button key={item.name} onClick={() => scrollToSection(item.href)} className="text-slate-300 hover:text-white transition-colors duration-200 font-medium tracking-wide text-xl">
                {item.name}
              </button>)}
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-slate-700 text-center">
          <p className="text-slate-300 font-light">© 2024 BluAuto. All rights reserved.</p>
        </div>
      </div>
    </footer>;
};
export default Footer;