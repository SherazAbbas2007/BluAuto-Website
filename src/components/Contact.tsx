
import React from 'react';
import { useInView } from 'react-intersection-observer';

const Contact = () => {
  const {
    ref,
    inView
  } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const handleBookCall = () => {
    console.log('Book A Call button clicked');
    window.open('https://cal.com/sheraz-abbas-cmlcws/book-a-call', '_blank');
  };

  const handleEmailClick = () => {
    console.log('Email link clicked');
    window.open('https://mail.google.com/mail/?view=cm&fs=1&to=info@bluauto.io', '_blank');
  };

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-baby-blue-500" ref={ref}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-8 sm:mb-12 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 tracking-tight">
            Contact Us
          </h2>
          <p className="text-white/90 font-medium text-lg sm:text-xl lg:text-2xl leading-relaxed px-4">
            Ready to transform your business with AI automation? Schedule a discovery call, or message us at{' '}
            <button 
              onClick={handleEmailClick}
              className="underline hover:text-white transition-colors duration-200 cursor-pointer break-all"
            >
              info@bluauto.io
            </button>
          </p>
        </div>

        <div className={`text-center transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{
          transitionDelay: '0.3s'
        }}>
          <button onClick={handleBookCall} className="bg-white text-slate-800 px-12 sm:px-16 py-6 sm:py-8 text-lg sm:text-xl lg:text-2xl rounded-2xl font-semibold hover:bg-gray-100 hover:scale-105 transition-all duration-300 tracking-wide hover:shadow-[0_0_20px_rgba(255,255,255,0.6)]">
            Book A Call
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
