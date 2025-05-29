
import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const Testimonials = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      initials: "EW",
      quote: "Risk management features are incredible. The AI prevented several major losses during market volatility.",
      metric: "+156% profit increase",
      name: "Emily Watson",
      role: "Day Trader"
    },
    {
      initials: "MJ",
      quote: "The automation has completely transformed my trading strategy. I can finally sleep at night knowing my positions are managed.",
      metric: "+243% portfolio growth",
      name: "Michael Johnson",
      role: "Crypto Investor"
    },
    {
      initials: "SL",
      quote: "BluAuto's AI algorithms consistently outperform my manual trading. The results speak for themselves.",
      metric: "+189% annual return",
      name: "Sarah Lee",
      role: "Professional Trader"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-20 bg-gradient-to-b from-baby-blue-800 to-baby-blue-900" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Trusted by <span className="text-baby-blue-300">Thousands</span>
          </h2>
          <p className="text-xl text-white/80 font-light">
            Real traders, real results, real transformation
          </p>
        </div>

        <div className={`max-w-4xl mx-auto transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.3s' }}>
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 md:p-12 text-center">
            {/* Avatar */}
            <div className="w-20 h-20 bg-baby-blue-400 rounded-full flex items-center justify-center mx-auto mb-8">
              <span className="text-2xl font-bold text-white">
                {testimonials[currentTestimonial].initials}
              </span>
            </div>

            {/* Quote */}
            <blockquote className="text-xl md:text-2xl text-white font-light leading-relaxed mb-8">
              "{testimonials[currentTestimonial].quote}"
            </blockquote>

            {/* Metric */}
            <div className="text-baby-blue-300 text-lg font-semibold mb-6">
              {testimonials[currentTestimonial].metric}
            </div>

            {/* Attribution */}
            <div className="text-white/80">
              <div className="font-medium">{testimonials[currentTestimonial].name}</div>
              <div className="text-sm italic">{testimonials[currentTestimonial].role}</div>
            </div>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial
                    ? 'bg-baby-blue-300'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
