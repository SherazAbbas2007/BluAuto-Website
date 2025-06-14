
import React from 'react';
import { useNavigationState } from '@/hooks/useNavigationState';
import NavigationLogo from './NavigationLogo';
import DesktopNavigation from './DesktopNavigation';
import MobileNavigation from './MobileNavigation';

const Navigation = () => {
  const {
    isScrolled,
    isMobileMenuOpen,
    setIsMobileMenuOpen,
    activeSection,
    setActiveSection
  } = useNavigationState();

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md" style={{
        backgroundColor: 'rgba(7, 90, 134, 0.5)'
      }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo Section - Left Side */}
            <NavigationLogo setActiveSection={setActiveSection} />

            {/* Desktop Navigation - Center */}
            <DesktopNavigation 
              activeSection={activeSection} 
              setIsMobileMenuOpen={setIsMobileMenuOpen} 
            />

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
      <MobileNavigation 
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        activeSection={activeSection}
      />
    </>
  );
};

export default Navigation;
