
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
              <i className="ph ph-robot text-white text-lg"></i>
            </div>
            <span className="text-xl font-semibold tracking-tight">BluAuto</span>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-400 font-light">
              © 2024 BluAuto. All rights reserved.
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 font-light">
            Transform your business with AI-powered automation
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
