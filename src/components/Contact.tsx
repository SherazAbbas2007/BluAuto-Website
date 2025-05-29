import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { toast } from '@/hooks/use-toast';
const Contact = () => {
  const {
    ref,
    inView
  } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    workEmail: '',
    contactNumber: ''
  });
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    toast({
      title: "Message Sent!",
      description: "Thank you for your interest. We'll get back to you soon."
    });

    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      companyName: '',
      workEmail: '',
      contactNumber: ''
    });
  };
  return <section id="contact" className="py-20 bg-baby-blue-500" ref={ref}>
      <div className="max-w-4xl mx-auto px-6">
        <div className={`text-center mb-12 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Contact Us
          </h2>
          <p className="text-xl text-white/90 font-light">
            Ready to transform your business with AI automation? Let's talk.
          </p>
        </div>

        <div className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{
        transitionDelay: '0.3s'
      }}>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <input type="text" name="firstName" placeholder="FIRST NAME *" value={formData.firstName} onChange={handleInputChange} required className="w-full px-4 py-4 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 font-light" />
              </div>
              <div>
                <input type="text" name="lastName" placeholder="LAST NAME *" value={formData.lastName} onChange={handleInputChange} required className="w-full px-4 py-4 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 font-light" />
              </div>
            </div>

            <div>
              <input type="text" name="companyName" placeholder="COMPANY NAME *" value={formData.companyName} onChange={handleInputChange} required className="w-full px-4 py-4 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 font-light" />
            </div>

            <div>
              <input type="email" name="workEmail" placeholder="WORK EMAIL *" value={formData.workEmail} onChange={handleInputChange} required className="w-full px-4 py-4 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 font-light" />
            </div>

            <div>
              <input type="tel" name="contactNumber" placeholder="CONTACT NUMBER *" value={formData.contactNumber} onChange={handleInputChange} required className="w-full px-4 py-4 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 font-light" />
            </div>

            <div className="pt-4">
              <button type="submit" className="bg-white text-slate-800 px-10 py-5 text-lg rounded-lg font-semibold hover:bg-slate-100 transition-all duration-300 uppercase tracking-wide shadow-[0_0_10px_rgba(255,255,255,0.3)] hover:shadow-[0_0_20px_rgba(255,255,255,0.6),0_0_40px_rgba(255,255,255,0.4)] hover:scale-105">Book Now</button>
            </div>
          </form>
        </div>
      </div>
    </section>;
};
export default Contact;