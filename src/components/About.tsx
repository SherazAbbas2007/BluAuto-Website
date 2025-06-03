
import React from 'react';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-baby-blue-700 to-baby-blue-600" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          <div className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 sm:mb-8 tracking-tight">
              How could AI help you?
            </h2>
            
            <p className="text-lg sm:text-xl text-white/90 font-light mb-6 sm:mb-8 leading-relaxed">
              Transforming manual, inconsistent and time-consuming processes into operational excellence through our AI-powered automation services
            </p>
          </div>

          <div className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{
            transitionDelay: '0.3s'
          }}>
            <div className="bg-baby-blue-900/80 backdrop-blur-sm border border-baby-blue-700/50 rounded-xl p-6 sm:p-8">
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/40 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <i className="ph ph-lightning text-lg sm:text-2xl text-white"></i>
                  </div>
                  <h3 className="font-semibold text-white mb-2 text-lg sm:text-xl">Efficiency</h3>
                  <p className="text-white/80 font-light text-sm sm:text-base lg:text-lg">Automate repetitive tasks</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/40 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <i className="ph ph-chart-line-up text-lg sm:text-2xl text-white"></i>
                  </div>
                  <h3 className="font-semibold text-white mb-2 text-lg sm:text-xl">Growth</h3>
                  <p className="text-white/80 font-light text-sm sm:text-base lg:text-lg">Scale your operations</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/40 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <i className="ph ph-brain text-lg sm:text-2xl text-white"></i>
                  </div>
                  <h3 className="font-semibold text-white mb-2 text-lg sm:text-xl">Intelligence</h3>
                  <p className="text-white/80 font-light text-sm sm:text-base lg:text-lg">Smart decision making</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/40 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <i className="ph ph-clock text-lg sm:text-2xl text-white"></i>
                  </div>
                  <h3 className="font-semibold text-white mb-2 text-lg sm:text-xl">24/7</h3>
                  <p className="text-white/80 font-light text-sm sm:text-base lg:text-lg">Round-the-clock operations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
