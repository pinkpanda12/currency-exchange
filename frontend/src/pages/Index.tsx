
import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import TrustIndicators from '../components/TrustIndicators';
import RequestForm from '../components/RequestForm';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <TrustIndicators />
        <RequestForm />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
