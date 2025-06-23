
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

  const problems = [
    {
      title: "Generic Outreach:",
      description: "Messaging is too broad and fails to resonate with prospect's unique pain points."
    },
    {
      title: "Missed Opportunities:",
      description: "You might overlook potential clients who need your help but don't fit the usual criteria."
    },
    {
      title: "Wasted Resources:",
      description: "Time and effort are spent on leads that aren't interested, leading to you losing money and time."
    },
    {
      title: "Advertising Cost Spiral:",
      description: "When cold emails flop, companies panic, overspend on PPC, and still don't fix their prospecting problem."
    },
    {
      title: "Opportunity Cost Creep:",
      description: "While your team wastes billable hours chasing unqualified prospects, your competitors are closing deals."
    }
  ];

  const solutions = [
    {
      title: "Personalized Messaging:",
      description: "We speak directly to the issues your prospects face, making them more relevant and timely."
    },
    {
      title: "Better Conversion Rates:",
      description: "Prospects are more likely to buy from you when they see you providing solutions to their problems (simple math)."
    },
    {
      title: "No time wasted on prospection:",
      description: "We target leads that really need your services, making your outreach more effective."
    },
    {
      title: "Build Trust:",
      description: "Showing you understand their challenges and can solve their problem helps build trust and get them on retainers aka long-term relationships for your business."
    },
    {
      title: "Faster Revenue Generation:",
      description: "By targeting only the most relevant prospects, the BluAuto Method shortens the sales cycle, helping you close deals quicker and get cash flowing faster, accelerating revenue growth."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-baby-blue-700 to-baby-blue-600" ref={ref}>
      <div className="max-w-8xl mx-auto px-10">
        {/* Title Section */}
        <div className={`text-center mb-10 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight">Why choose us?</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
          {/* Problems Section */}
          <div className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} flex`}>
            <div className="bg-baby-blue-900/80 backdrop-blur-sm border border-baby-blue-700/50 rounded-xl p-12 flex-1 flex flex-col">
              <h2 className="text-xl md:text-2xl font-bold text-white mb-5 tracking-tight leading-tight">
                What 99% of SDRs/lead gen agencies do
              </h2>
              
              <div className="space-y-5 flex-1">
                {problems.map((problem, index) => (
                  <div 
                    key={index} 
                    className={`flex items-start space-x-3 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} 
                    style={{
                      transitionDelay: `${index * 0.1}s`
                    }}
                  >
                    <div className="flex-shrink-0 w-5 h-5 bg-red-500/20 rounded-full flex items-center justify-center mt-1">
                      <X size={14} className="text-red-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white text-lg mb-2 leading-tight">
                        {problem.title}
                      </h3>
                      <p className="text-white/80 font-light leading-relaxed text-base">
                        {problem.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Solutions Section */}
          <div 
            className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} flex`} 
            style={{
              transitionDelay: '0.3s'
            }}
          >
            <div className="bg-baby-blue-900/80 backdrop-blur-sm border border-baby-blue-700/50 rounded-xl p-12 flex-1 flex flex-col">
              <h2 className="text-xl md:text-2xl font-bold text-white mb-5 tracking-tight leading-tight">
                Whats different about BluAuto?
              </h2>
              
              <div className="space-y-5 flex-1">
                {solutions.map((solution, index) => (
                  <div 
                    key={index} 
                    className={`flex items-start space-x-3 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} 
                    style={{
                      transitionDelay: `${0.3 + index * 0.1}s`
                    }}
                  >
                    <div className="flex-shrink-0 w-5 h-5 bg-green-500/20 rounded-full flex items-center justify-center mt-1">
                      <CheckCircle size={14} className="text-green-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white text-lg mb-2 leading-tight">
                        {solution.title}
                      </h3>
                      <p className="text-white/80 font-light leading-relaxed text-base">
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
