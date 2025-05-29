
import React from 'react';
const Hero = () => {
  const scrollToContact = () => {
    console.log('Contact button clicked!'); // Debug log
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth'
      });
    } else {
      console.log('Contact section not found');
    }
  };
  return <section className="min-h-screen bg-hero-gradient flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
        backgroundSize: '20px 20px'
      }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between relative z-10">
        <div className="flex-1 max-w-2xl animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
            Revolutionary AI{' '}
            <span className="block">Trading Automation</span>
          </h1>
          
          <p className="text-xl text-white/80 font-light mb-8 leading-relaxed">
            Connect your wallet, configure your AI assistant, and let advanced algorithms handle your trading strategy while you focus on what matters most.
          </p>
          
          <button onClick={scrollToContact} className="bg-white text-baby-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-baby-blue-50 transition-colors duration-300 uppercase tracking-wide">
            Contact Me
          </button>
        </div>

        {/* Video Placeholder with 16:9 aspect ratio */}
        <div className="hidden lg:block flex-1 ml-12 animate-fade-in-up" style={{
        animationDelay: '0.3s'
      }}>
          <div className="glass-card p-8 aspect-video flex items-center justify-center">
            <div className="text-center text-white/60">
              <i className="ph ph-play-circle text-6xl mb-4"></i>
              <p className="text-lg font-light">Video Coming Soon</p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;
