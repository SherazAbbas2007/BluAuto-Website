import React from 'react';
import { useInView } from 'react-intersection-observer';
const About = () => {
  const {
    ref,
    inView
  } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  return <section id="about" className="py-20 bg-gradient-to-b from-baby-blue-700 to-baby-blue-600" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">
              How could AI help you?
            </h2>
            
            <p className="text-xl text-white/90 font-light mb-8 leading-relaxed">
              Transforming manual, inconsistent and time-consuming processes into operational excellence through our AI-powered automation services
            </p>
          </div>

          <div className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{
          transitionDelay: '0.3s'
        }}>
            <div className="bg-baby-blue-900/80 backdrop-blur-sm border border-baby-blue-700/50 rounded-xl p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/40 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="ph ph-lightning text-2xl text-white"></i>
                  </div>
                  <h3 className="font-semibold text-white mb-2 text-xl">Efficiency</h3>
                  <p className="text-white/80 font-light text-lg">Automate repetitive tasks</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/40 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="ph ph-chart-line-up text-2xl text-white"></i>
                  </div>
                  <h3 className="font-semibold text-white mb-2 text-xl">Growth</h3>
                  <p className="text-white/80 font-light text-lg">Scale your operations</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/40 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="ph ph-brain text-2xl text-white"></i>
                  </div>
                  <h3 className="font-semibold text-white mb-2 text-xl">Intelligence</h3>
                  <p className="text-white/80 font-light text-lg">Smart decision making</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/40 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="ph ph-clock text-2xl text-white"></i>
                  </div>
                  <h3 className="font-semibold text-white mb-2 text-xl">24/7</h3>
                  <p className="text-white/80 font-light text-lg">Round-the-clock operations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;