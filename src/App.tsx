import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Subjects } from './components/Subjects';
import { Benefits } from './components/Benefits';
import { HowItWorks } from './components/HowItWorks';
import { Testimonials } from './components/Testimonials';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-950">
      <Header />
      <Hero />
      <Subjects />
      <Benefits />
      <HowItWorks />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}
