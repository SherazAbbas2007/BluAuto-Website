import React from 'react';
import { useInView } from 'react-intersection-observer';

const Process = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const steps = [
    {
      icon: 'ph-phone',
      title: 'Discovery call',
      description: 'We analyze your business processes and core systems to identify opportunities where AI automation can enhance and streamline your operations.'
    },
    {
      icon: 'ph-flow-arrow',
      title: 'Outline current workflows',
      description: 'We design visual workflows that map your existing systems and manual tasks.'
    },
    {
      icon: 'ph-magnifying-glass',
      title: 'Identify key areas for AI automation',
      description: 'We analyze your workflows to uncover high-impact opportunities that deliver the greatest return on investment.'
    },
    {
      icon: 'ph-gear',
      title: 'Implementation',
      description: 'We use our tech stack to create a custom solution for you, that integrates seamlessly with your existing set up.'
    },
    {
      icon: 'ph-sparkle',
      title: 'Manage',
      description: 'Helping you optimise and scale your automation as your business grows.'
    }
  ];

  return (
    <section id="process" className="py-20 bg-gradient-to-b from-baby-blue-900 to-baby-blue-800" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-white/80 font-medium mb-4 tracking-wide uppercase text-sm">OUR PROCESS</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            How We Automate
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {steps.map((step, index) => (
            <div 
              key={step.title}
              className={`text-center transition-all duration-700 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 0.2}s` }}
            >
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 group">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <i className={`ph ${step.icon} text-2xl text-white`}></i>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3 tracking-tight">
                  {step.title}
                </h3>
                
                <p className="text-white/90 font-light leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
