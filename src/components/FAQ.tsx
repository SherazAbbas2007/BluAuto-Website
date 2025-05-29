
import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';

const FAQ = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How long does it take to implement AI automation?",
      answer: "Implementation timelines vary based on complexity, but most projects are completed within 4-8 weeks from consultation to deployment."
    },
    {
      question: "Do you provide ongoing support and maintenance?",
      answer: "Yes, we offer comprehensive support packages to ensure your AI systems continue to perform optimally and adapt to your growing needs."
    },
    {
      question: "What types of businesses can benefit from AI automation?",
      answer: "AI automation benefits businesses of all sizes, from startups to enterprises, across industries including e-commerce, finance, healthcare, and more."
    },
    {
      question: "How do you ensure data security and privacy?",
      answer: "We implement enterprise-grade security measures and follow industry best practices to protect your data throughout the automation process."
    },
    {
      question: "What's the ROI of AI automation?",
      answer: "Most clients see a positive ROI within 3-6 months through increased efficiency, reduced manual labor costs, and improved accuracy."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-700" ref={ref}>
      <div className="max-w-4xl mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-slate-200 font-light">
            Get answers to common questions about our AI automation services
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className={`bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl overflow-hidden transition-all duration-700 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <button
                className="w-full p-6 text-left flex items-center justify-between hover:bg-slate-700/50 transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-semibold text-white pr-4">
                  {faq.question}
                </h3>
                <i className={`ph ${openIndex === index ? 'ph-minus' : 'ph-plus'} text-xl text-slate-300 transition-transform`}></i>
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'max-h-96 pb-6' : 'max-h-0'
              }`}>
                <div className="px-6">
                  <p className="text-slate-300 font-light leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
