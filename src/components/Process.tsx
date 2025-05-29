
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
      title: 'Consultation',
      description: 'We learn about your business processes and core technologies to discover opportunities where AI automation can optimise your operations.'
    },
    {
      icon: 'ph-flow-arrow',
      title: 'Map out processes',
      description: 'We create visual process flows of your current systems and manual tasks.'
    },
    {
      icon: 'ph-magnifying-glass',
      title: 'Identify key areas for AI automation',
      description: 'We conduct a comprehensive analysis of your workflows to identify opportunities that will provide you the best ROI.'
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
    <section id="process" className="py-20 bg-gradient-to-b from-baby-blue-50 to-baby-blue-100" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-baby-blue-800 font-medium mb-4 tracking-wide uppercase text-sm">OUR PROCESS</p>
          <h2 className="text-4xl md:text-5xl font-bold text-baby-blue-900 mb-6 tracking-tight">
            How We Automate
          </h2>
        </div>

        <div className="relative">
          {/* Process Line */}
          <div className="hidden md:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-baby-blue-300 via-baby-blue-400 to-baby-blue-300"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div 
                key={step.title}
                className={`text-center transition-all duration-700 ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 0.2}s` }}
              >
                {/* Icon Circle */}
                <div className="relative mx-auto mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-baby-blue-400 to-baby-blue-600 rounded-full flex items-center justify-center mx-auto shadow-lg">
                    <i className={`ph ${step.icon} text-2xl text-white`}></i>
                  </div>
                  {/* Connecting Line */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-16 w-full h-0.5 bg-gradient-to-r from-baby-blue-400 to-baby-blue-300"></div>
                  )}
                </div>
                
                <h3 className="text-xl font-semibold text-baby-blue-900 mb-3 tracking-tight">
                  {step.title}
                </h3>
                
                <p className="text-baby-blue-700 font-light leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
