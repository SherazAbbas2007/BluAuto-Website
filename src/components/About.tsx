
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { X, CheckCircle } from 'lucide-react';

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const problems = [
    {
      title: "Generic Outreach:",
      description: "Messaging is too broad and fails to resonate with prospect's unique pain points and business challenges."
    },
    {
      title: "Missed Opportunities:",
      description: "You might overlook potential clients who need AI automation but don't fit traditional targeting criteria."
    },
    {
      title: "Wasted Resources:",
      description: "Time and effort are spent on unqualified leads, leading to lost revenue and inefficient resource allocation."
    },
    {
      title: "Advertising Cost Spiral:",
      description: "When generic outreach fails to convert, companies panic-pivot to expensive paid ads, burning through budgets on inflated CPAs without solving the core lead qualification problem."
    },
    {
      title: "Opportunity Cost Creep:",
      description: "While your team wastes time chasing unqualified prospects, competitors are implementing AI systems and scaling efficiently."
    }
  ];

  const solutions = [
    {
      title: "AI-Powered Personalization:",
      description: "We use advanced AI to create highly targeted messaging that speaks directly to each prospect's specific operational challenges."
    },
    {
      title: "Higher Conversion Rates:",
      description: "Prospects are more likely to engage when they see you understand their automation needs and can solve their efficiency problems."
    },
    {
      title: "Smart Lead Qualification:",
      description: "Our AI systems identify and prioritize leads that truly need automation solutions, making your outreach laser-focused."
    },
    {
      title: "Build Authority & Trust:",
      description: "Demonstrating deep understanding of their operational challenges positions you as the go-to automation expert, leading to long-term partnerships."
    },
    {
      title: "Accelerated Growth:",
      description: "By targeting only the most relevant prospects with AI-driven precision, BluAuto's approach shortens sales cycles and accelerates revenue generation through automated systems."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-baby-blue-700 to-baby-blue-600" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Problems Section */}
          <div className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="bg-baby-blue-900/80 backdrop-blur-sm border border-baby-blue-700/50 rounded-xl p-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
                What 99% of B2B agencies do
              </h2>
              
              <p className="text-lg text-white/90 font-light mb-8 leading-relaxed">
                Let's target all CTOs at tech companies with 500+ employees and hope for the best.
              </p>

              <div className="space-y-6">
                {problems.map((problem, index) => (
                  <div 
                    key={index}
                    className={`flex items-start space-x-4 transition-all duration-700 ${
                      inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                    style={{ transitionDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex-shrink-0 w-6 h-6 bg-red-500/20 rounded-full flex items-center justify-center mt-1">
                      <X size={16} className="text-red-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white text-lg mb-2">
                        {problem.title}
                      </h3>
                      <p className="text-white/80 font-light leading-relaxed">
                        {problem.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Solutions Section */}
          <div className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.3s' }}>
            <div className="bg-baby-blue-900/80 backdrop-blur-sm border border-baby-blue-700/50 rounded-xl p-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
                The "BluAuto Way"
              </h2>
              
              <p className="text-lg text-white/90 font-light mb-8 leading-relaxed">
                Let's target companies struggling with manual processes, inefficient workflows, or looking to scale their operations with AI automation.
              </p>

              <div className="space-y-6">
                {solutions.map((solution, index) => (
                  <div 
                    key={index}
                    className={`flex items-start space-x-4 transition-all duration-700 ${
                      inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}
                    style={{ transitionDelay: `${0.3 + (index * 0.1)}s` }}
                  >
                    <div className="flex-shrink-0 w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center mt-1">
                      <CheckCircle size={16} className="text-green-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white text-lg mb-2">
                        {solution.title}
                      </h3>
                      <p className="text-white/80 font-light leading-relaxed">
                        {solution.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
