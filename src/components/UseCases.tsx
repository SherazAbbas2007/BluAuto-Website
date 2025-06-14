
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
    <section id="usecases" className="py-32 bg-gradient-to-b from-baby-blue-800 to-baby-blue-700 min-h-screen flex items-center" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className={`text-center mb-24 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 tracking-tight">
            Example Use Cases
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          {useCases.map((category, categoryIndex) => (
            <div 
              key={category.title}
              className={`transition-all duration-700 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${categoryIndex * 0.2}s` }}
            >
              <div className="text-center">
                <h3 className="text-3xl lg:text-4xl font-bold text-white mb-12 tracking-tight min-h-[4rem] flex items-center justify-center">
                  {category.title}
                </h3>
                
                <div className="space-y-12">
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
                          <div className="mb-6 w-20 h-20 lg:w-24 lg:h-24 flex items-center justify-center">
                            <IconComponent size={64} className="text-white lg:w-16 lg:h-16" />
                          </div>
                          <p className="text-white/90 text-xl lg:text-2xl font-medium text-center leading-tight min-h-[4rem] flex items-center justify-center">
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
