
import React from 'react';
import { navItems, isActive } from '@/constants/navigationData';
import { scrollToSection } from '@/utils/scrollUtils';

interface DesktopNavigationProps {
  activeSection: string;
  setIsMobileMenuOpen: (open: boolean) => void;
}

const DesktopNavigation = ({ activeSection, setIsMobileMenuOpen }: DesktopNavigationProps) => {
  const handleScrollToSection = (href: string) => {
    scrollToSection(href, () => setIsMobileMenuOpen(false));
  };

  return (
    <div className="hidden md:flex items-center justify-center flex-1">
      <div className="flex items-center space-x-8">
        {navItems.map(item => (
          <button 
            key={item.name} 
            onClick={() => handleScrollToSection(item.href)} 
            className="text-white hover:text-white transition-all duration-300 text-xl font-semibold px-3 py-2" 
            style={{
              textShadow: isActive(item.href, activeSection) ? '0 0 25px rgba(255,255,255,0.9)' : 'none',
              transform: isActive(item.href, activeSection) ? 'scale(1.05)' : 'scale(1)',
              transition: 'text-shadow 0.3s ease, transform 0.3s ease'
            }} 
            onMouseEnter={(e) => {
              if (!isActive(item.href, activeSection)) {
                e.currentTarget.style.textShadow = '0 0 25px rgba(255,255,255,0.9)';
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
  );
};

export default DesktopNavigation;
