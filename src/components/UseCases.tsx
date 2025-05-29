import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Rocket, User, BarChart3, Settings, Database, FileText, Headphones, DollarSign } from 'lucide-react';

const UseCases = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const useCases = [
    {
      title: 'Sales Outreach',
      description: 'Maximise engagement with potential leads',
      icon: Rocket
    },
    {
      title: 'Client Onboarding',
      description: 'Streamline onboarding, increase accuracy, and elevate client satisfaction.',
      icon: User
    },
    {
      title: 'Project Management',
      description: 'Simplify workflows, boost efficiency, and maximize resource utilization.',
      icon: BarChart3
    },
    {
      title: 'Workforce Optimisation',
      description: 'Save employees several hours a day by automating their most time-consuming tasks',
      icon: Settings
    },
    {
      title: 'Data Entry',
      description: 'Eliminate manual errors and ensure timely data processing',
      icon: Database
    },
    {
      title: 'Document Creation',
      description: 'Save time on creating various documents (e.g. proposals, contracts etc.) whilst maintaining accuracy and consistency',
      icon: FileText
    },
    {
      title: 'Customer Service',
      description: 'Customer enquiries often follow a repetitive pattern, hence are ideal for automation',
      icon: Headphones
    },
    {
      title: 'Invoicing',
      description: 'Expedite billing and optimise financial management',
      icon: DollarSign
    }
  ];

  return (
    <section id="usecases" className="py-20 bg-gradient-to-b from-baby-blue-800 to-baby-blue-700" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Example Use Cases
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {useCases.map((useCase, index) => {
            const IconComponent = useCase.icon;
            return (
              <div 
                key={useCase.title}
                className={`transition-all duration-700 ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="text-center">
                  <div className="mb-6 flex justify-center">
                    <IconComponent size={72} className="text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-6">
                    {useCase.title}
                  </h3>
                  <p className="text-white/80 text-xl leading-relaxed">
                    {useCase.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
