
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Rocket, BarChart3, Users, DollarSign, Mail, Settings, Database, FileText, User, CheckCircle, Target, Briefcase } from 'lucide-react';

const UseCases = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const useCases = [
    {
      title: 'Lead Generation',
      items: [
        { name: 'AI Cold Email Systems', icon: Mail },
        { name: 'Application Systems', icon: Settings },
        { name: 'Content Systems', icon: FileText }
      ]
    },
    {
      title: 'Project Management',
      items: [
        { name: 'AI Automated Fulfillment', icon: CheckCircle },
        { name: 'AI Onboarding Systems', icon: User },
        { name: 'PM Systems', icon: BarChart3 }
      ]
    },
    {
      title: 'Hiring Systems',
      items: [
        { name: 'Intake Systems', icon: Database },
        { name: 'AI Scoring Systems', icon: Target },
        { name: 'Trial Systems', icon: Users }
      ]
    },
    {
      title: 'Sales Administration',
      items: [
        { name: 'Customized CRMs', icon: Database },
        { name: 'AI Asset Generators', icon: Rocket },
        { name: 'AI Nurture Systems', icon: Briefcase }
      ]
    }
  ];

  return (
    <section id="usecases" className="py-20 bg-gradient-to-b from-baby-blue-800 to-baby-blue-700" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-20 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Example Use Cases
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {useCases.map((category, categoryIndex) => (
            <div 
              key={category.title}
              className={`transition-all duration-700 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${categoryIndex * 0.2}s` }}
            >
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-10 tracking-tight min-h-[3rem] flex items-center justify-center">
                  {category.title}
                </h3>
                
                <div className="space-y-8">
                  {category.items.map((item, itemIndex) => {
                    const IconComponent = item.icon;
                    return (
                      <div 
                        key={item.name}
                        className={`transition-all duration-700 ${
                          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}
                        style={{ transitionDelay: `${(categoryIndex * 0.2) + (itemIndex * 0.1)}s` }}
                      >
                        <div className="flex flex-col items-center px-4">
                          <div className="mb-4 w-16 h-16 flex items-center justify-center">
                            <IconComponent size={48} className="text-white" />
                          </div>
                          <p className="text-white/90 text-lg font-medium text-center leading-tight min-h-[3rem] flex items-center justify-center">
                            {item.name}
                          </p>
                        </div>
                      </div>
                    );
                  })}
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
