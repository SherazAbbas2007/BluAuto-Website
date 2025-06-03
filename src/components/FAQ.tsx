
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const faqs = [
    {
      question: "How long does it take to implement AI automation?",
      answer: "Implementation timelines vary based on complexity, but most projects are completed within 1-4 weeks from consultation to deployment."
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

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-baby-blue-600 to-baby-blue-500" ref={ref}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight px-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg sm:text-xl text-slate-200 font-light">
            Get answers to common questions about our AI automation services
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`} 
              className={`bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl overflow-hidden transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <AccordionTrigger className="w-full p-4 sm:p-6 text-left flex items-center justify-between hover:bg-slate-700/50 transition-colors font-semibold text-white [&[data-state=open]>svg]:rotate-180 text-lg sm:text-xl lg:text-2xl">
                {faq.question}
              </AccordionTrigger>
              
              <AccordionContent className="px-4 sm:px-6 pb-4 sm:pb-6">
                <p className="leading-relaxed text-base sm:text-lg lg:text-xl font-light text-slate-50">
                  {faq.answer}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
