import React from 'react';
const Hero = () => {
  const handleContactClick = () => {
    console.log('Contact Me button clicked!');
    window.open('https://cal.com/sheraz-bluauto/want-to-work-with-me-d', '_blank');
  };
  return <section className="min-h-screen bg-hero-gradient flex items-center justify-center relative overflow-hidden pt-48 sm:pt-52 md:pt-40 lg:pt-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
        backgroundSize: '20px 20px'
      }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center relative z-10 w-full">
        <div className="max-w-6xl xl:max-w-7xl 2xl:max-w-none text-center w-full">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold text-white mb-6 sm:mb-8 tracking-tight leading-tight animate-fade-in-up">
            We build hands-off{' '}
            <span className="block">growth systems for</span>
            <span className="block">B2B Owners.</span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-xl lg:text-2xl text-white/90 font-light mb-8 sm:mb-10 lg:mb-12 leading-relaxed animate-fade-in-up px-4 sm:px-0 max-w-5xl mx-auto" style={{
          animationDelay: '0.3s',
          opacity: 0,
          animationFillMode: 'forwards'
        }}>At BluAuto, we use advanced AI to streamline operations and deliver scalable B2B growth solutions. Our custom systems cut manual work, boost efficiency, and free teams to focus on strategic growth.</p>
          
          <button onClick={handleContactClick} className="bg-white text-zinc-950 px-8 py-5 sm:px-10 sm:py-6 lg:px-12 lg:py-7 text-lg sm:text-xl lg:text-xl rounded-2xl font-semibold hover:bg-gray-100 hover:scale-105 transition-all duration-300 tracking-wide hover:shadow-[0_0_20px_rgba(255,255,255,0.6)] animate-fade-in-up" style={{
          animationDelay: '0.6s',
          opacity: 0,
          animationFillMode: 'forwards'
        }}>
            Book a call
          </button>
        </div>
      </div>
    </section>;
};
export default Hero;