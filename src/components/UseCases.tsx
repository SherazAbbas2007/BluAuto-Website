import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Rocket, BarChart3, Users, DollarSign, Mail, Settings, Edit, User, CheckCircle, Target, Briefcase, ListChecks } from 'lucide-react';
import CustomCrmIcon from './icons/CustomCrmIcon';
import AiAssetGeneratorIcon from './icons/AiAssetGeneratorIcon';
import AiNurtureSystemsIcon from './icons/AiNurtureSystemsIcon';

const UseCases = () => {
  const {
    ref,
    inView
  } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  const useCases = [
    {
      title: 'Lead Generation',
      items: [{
        name: 'AI Cold Email Systems',
        icon: Mail
      }, {
        name: 'Application Systems',
        icon: Settings
      }, {
        name: 'Content Systems',
        icon: Edit
      }]
    }, {
      title: 'Project Management',
      items: [{
        name: 'AI Automated Fulfillment',
        icon: CheckCircle
      }, {
        name: 'AI Onboarding Systems',
        icon: User
      }, {
        name: 'PM Systems',
        icon: BarChart3
      }]
    }, {
      title: 'Hiring Systems',
      items: [{
        name: 'Intake Systems',
        icon: ListChecks
      }, {
        name: 'AI Scoring Systems',
        icon: Target
      }, {
        name: 'Trial Systems',
        icon: Users
      }]
    }, {
      title: 'Sales Administration',
      items: [{
        name: 'Customized CRMs',
        icon: 'custom-crm'
      }, {
        name: 'AI Asset Generators',
        icon: 'ai-asset-generator'
      }, {
        name: 'AI Nurture Systems',
        icon: 'ai-nurture-systems'
      }]
    }
  ];
  
  return <section id="usecases" className="py-10 bg-gradient-to-b from-baby-blue-800 to-baby-blue-700 min-h-screen flex items-center" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className={`text-center mb-12 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 tracking-tight lg:text-6xl">
            Example Use Cases
          </h2>
        </div>

        <div className="space-y-6">
          {useCases.map((category, categoryIndex) => <div key={category.title} className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{
          transitionDelay: `${categoryIndex * 0.2}s`
        }}>
              <div className="border-4 border-white/40 rounded-3xl p-8 bg-black/10 backdrop-blur-sm min-h-[200px]">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-center h-full">
                  {/* Category Title */}
                  <div className="lg:col-span-1 flex items-center justify-center lg:justify-start">
                    <h3 className="text-2xl lg:text-3xl font-bold text-white tracking-tight text-center lg:text-left">
                      {category.title}
                    </h3>
                  </div>
                  
                  {/* Category Items */}
                  <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {category.items.map((item, itemIndex) => {
                  return <div key={item.name} className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{
                    transitionDelay: `${categoryIndex * 0.2 + itemIndex * 0.1}s`
                  }}>
                          <div className="flex flex-col items-center text-center h-full justify-center p-4">
                            <div className="mb-6 w-16 h-16 flex items-center justify-center flex-shrink-0">
                              {item.icon === 'custom-crm' ? (
                                <CustomCrmIcon size={55} className="text-white" />
                              ) : item.icon === 'ai-asset-generator' ? (
                                <AiAssetGeneratorIcon size={55} className="text-white" />
                              ) : item.icon === 'ai-nurture-systems' ? (
                                <AiNurtureSystemsIcon size={55} className="text-white" />
                              ) : (
                                React.createElement(item.icon, { size: 55, className: "text-white" })
                              )}
                            </div>
                            <p className="text-white/90 text-xl lg:text-2xl font-medium leading-tight whitespace-nowrap">
                              {item.name}
                            </p>
                          </div>
                        </div>;
                })}
                  </div>
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};

export default UseCases;
