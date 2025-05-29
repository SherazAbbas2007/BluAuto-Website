
import React from 'react';
import { useInView } from 'react-intersection-observer';

const UseCases = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const useCases = [
    ['Lead Generation', 'AI Cold Email Systems', 'Application Systems', 'Content Systems'],
    ['Project Management', 'AI Automated Fulfillment', 'AI Onboarding Systems', 'PM Systems'],
    ['Hiring Systems', 'Intake Systems', 'AI Scoring Systems', 'Trial Systems'],
    ['Sales Administration', 'Customized CRMs', 'AI Asset Generators', 'AI Nurture Systems']
  ];

  return (
    <section id="usecases" className="py-20 bg-gradient-to-b from-slate-900 via-slate-700 to-slate-900" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Use Cases
          </h2>
          <p className="text-xl text-slate-200 font-light max-w-3xl mx-auto">
            Discover the various ways AI automation can transform your business operations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {useCases.map((column, colIndex) => (
            <div 
              key={colIndex}
              className={`space-y-6 transition-all duration-700 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${colIndex * 0.2}s` }}
            >
              {column.map((useCase, index) => (
                <div 
                  key={useCase}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:bg-slate-700/50 transition-all duration-300 group cursor-pointer shadow-lg hover:shadow-baby-blue-500/20"
                >
                  <h3 className="text-lg font-semibold text-white group-hover:text-baby-blue-200 transition-colors">
                    {useCase}
                  </h3>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
