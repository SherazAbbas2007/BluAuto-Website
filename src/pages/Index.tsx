
import React from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Process from '@/components/Process';
import UseCases from '@/components/UseCases';
import Testimonials from '@/components/Testimonials';
import About from '@/components/About';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Process />
      <UseCases />
      <Testimonials />
      <About />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
