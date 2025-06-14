import React from 'react';
import { useInView } from 'react-intersection-observer';
import { X, CheckCircle } from 'lucide-react';
const About = () => {
  const {
    ref,
    inView
  } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  const problems = [{
    title: "Generic Outreach:",
    description: "Broad messaging fails to resonate with prospect's unique pain points."
  }, {
    title: "Missed Opportunities:",
    description: "Overlooking potential clients who need AI automation but don't fit criteria."
  }, {
    title: "Wasted Resources:",
    description: "Time spent on unqualified leads leads to lost revenue and inefficiency."
  }, {
    title: "Advertising Cost Spiral:",
    description: "Generic outreach failure leads to expensive paid ads and inflated CPAs."
  }, {
    title: "Opportunity Cost Creep:",
    description: "While chasing unqualified prospects, competitors implement AI systems and scale efficiently."
  }];
  const solutions = [{
    title: "AI-Powered Personalization:",
    description: "Advanced AI creates targeted messaging for each prospect's specific operational challenges."
  }, {
    title: "Higher Conversion Rates:",
    description: "Prospects engage more when you understand their automation needs completely."
  }, {
    title: "Smart Lead Qualification:",
    description: "AI systems identify and prioritize leads that truly need automation solutions."
  }, {
    title: "Build Authority & Trust:",
    description: "Demonstrating operational understanding positions you as the go-to automation expert."
  }, {
    title: "Accelerated Growth:",
    description: "AI-driven precision targeting shortens sales cycles and accelerates revenue generation."
  }];
  return <section id="about" className="py-20 bg-gradient-to-b from-baby-blue-700 to-baby-blue-600" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Problems Section */}
          <div className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="bg-baby-blue-900/80 backdrop-blur-sm border border-baby-blue-700/50 rounded-xl p-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
                What 99% of B2B agencies do
              </h2>
              
              

              <div className="space-y-6">
                {problems.map((problem, index) => <div key={index} className={`flex items-start space-x-4 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{
                transitionDelay: `${index * 0.1}s`
              }}>
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
                  </div>)}
              </div>
            </div>
          </div>

          {/* Solutions Section */}
          <div className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{
          transitionDelay: '0.3s'
        }}>
            <div className="bg-baby-blue-900/80 backdrop-blur-sm border border-baby-blue-700/50 rounded-xl p-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
                The "BluAuto Way"
              </h2>
              
              

              <div className="space-y-6">
                {solutions.map((solution, index) => <div key={index} className={`flex items-start space-x-4 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{
                transitionDelay: `${0.3 + index * 0.1}s`
              }}>
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
                  </div>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;