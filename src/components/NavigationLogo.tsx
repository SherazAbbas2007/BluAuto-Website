
import React from 'react';
import { scrollToTop } from '@/utils/scrollUtils';

interface NavigationLogoProps {
  setActiveSection: (section: string) => void;
}

const NavigationLogo = ({ setActiveSection }: NavigationLogoProps) => {
  const handleScrollToTop = () => {
    scrollToTop(() => setActiveSection(''));
  };

  return (
    <div className="flex items-center cursor-pointer" onClick={handleScrollToTop}>
      <img src="/lovable-uploads/124b600a-111d-4f2c-aaa8-925d05de7cdb.png" alt="BluAuto Logo" className="h-8 w-8 object-contain mr-3" />
      <span className="font-semibold text-white tracking-tight text-2xl">BluAuto</span>
    </div>
  );
};

export default NavigationLogo;
