
import React from 'react';
import { navItems, isActive } from '@/constants/navigationData';
import { scrollToSection } from '@/utils/scrollUtils';

interface MobileNavigationProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
  activeSection: string;
}

const MobileNavigation = ({ isMobileMenuOpen, setIsMobileMenuOpen, activeSection }: MobileNavigationProps) => {
  const handleScrollToSection = (href: string) => {
    scrollToSection(href, () => setIsMobileMenuOpen(false));
  };

  return (
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
                textShadow: isActive(item.href, activeSection) ? '0 0 20px rgba(255,255,255,0.8)' : 'none',
                transform: isActive(item.href, activeSection) ? 'scale(1.05)' : 'scale(1)',
                transition: 'text-shadow 0.3s ease, color 0.2s ease, transform 0.3s ease'
              }} 
              onMouseEnter={(e) => {
                if (!isActive(item.href, activeSection)) {
                  e.currentTarget.style.textShadow = '0 0 20px rgba(255,255,255,0.8)';
                }
              }} 
              onMouseLeave={(e) => {
                if (!isActive(item.href, activeSection)) {
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
  );
};

export default MobileNavigation;
