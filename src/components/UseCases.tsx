
import React from 'react';
import { useInView } from 'react-intersection-observer';

const UseCases = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const useCases = [
    {
      title: 'Lead Generation',
      services: [
        'AI Personalised Cold Email Systems',
        'Application Systems',
        'Content Systems'
      ]
    },
    {
      title: 'Hiring Systems',
      services: [
        'Intake Systems',
        'AI Scoring Systems',
        'Trial Systems'
      ]
    },
    {
      title: 'Sales Administration',
      services: [
        'Customized CRMs',
        'AI Asset Generators',
        'AI Nurture Systems'
      ]
    }
  ];

  return (
    <section id="usecases" className="py-20 bg-gradient-to-b from-baby-blue-800 to-baby-blue-700" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Use Cases
          </h2>
          <p className="text-xl text-white/80 font-light max-w-3xl mx-auto">
            Discover the various ways AI automation can transform your business operations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {useCases.map((category, index) => (
            <div 
              key={category.title}
              className={`transition-all duration-700 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 0.2}s` }}
            >
              <div className="bg-baby-blue-900/80 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-baby-blue-900/90 transition-all duration-300 group shadow-lg hover:shadow-white/20 h-full">
                <h3 className="text-2xl font-bold text-white mb-6 text-center group-hover:text-white/90 transition-colors">
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.services.map((service) => (
                    <div 
                      key={service}
                      className="text-white/90 font-medium text-center py-2 px-4 bg-baby-blue-950/80 rounded-lg border border-white/10"
                    >
                      {service}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
