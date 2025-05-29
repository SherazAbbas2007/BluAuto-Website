
import React from 'react';

const Hero = () => {
  const handleContactClick = () => {
    console.log('Contact Me button clicked!');
    window.open('https://cal.com/sheraz-abbas-cmlcws/book-a-call', '_blank');
  };

  return (
    <section className="min-h-screen bg-hero-gradient flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 flex items-center justify-center gap-8 relative z-10 w-full">
        <div className="flex-1 max-w-2xl animate-fade-in-up text-center lg:text-left">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-8 tracking-tight leading-tight">
            Automate Your{' '}
            <span className="block">Business</span>
          </h1>
          
          <p className="text-2xl text-white/90 font-light mb-10 leading-relaxed">At BluAuto AI, we use advanced AI to streamline operations and deliver scalable B2B growth solutions. Our custom systems cut manual work, boost efficiency, and free teams to focus on strategic growth.</p>
          
          <button onClick={handleContactClick} className="bg-white text-zinc-950 px-13 py-6 text-2xl rounded-2xl font-semibold hover:bg-gray-100 hover:scale-105 transition-all duration-300 tracking-wide hover:shadow-[0_0_20px_rgba(255,255,255,0.6)]">Book a call</button>
        </div>

        {/* Video Placeholder with 16:9 aspect ratio - scaled up by 30% */}
        <div className="hidden lg:block flex-1 animate-fade-in-up max-w-3xl" style={{
          animationDelay: '0.3s'
        }}>
          <div className="glass-card p-10 aspect-video flex items-center justify-center w-full">
            <div className="text-center text-white/60">
              <i className="ph ph-play-circle text-8xl mb-5"></i>
              <p className="text-2xl font-light">Video Coming Soon</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
