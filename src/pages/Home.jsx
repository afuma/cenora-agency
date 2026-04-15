import React from 'react';
import Header from '../components/landing/Header';
import Hero from '../components/landing/Hero';
import SocialProof from '../components/landing/SocialProof';
import Services from '../components/landing/Services';
import Portfolio from '../components/landing/Portfolio';
import CTABanner from '../components/landing/CTABanner';
import Methodology from '../components/landing/Methodology';
import Advantages from '../components/landing/Advantages';
import Pricing from '../components/landing/Pricing';
import FAQ from '../components/landing/FAQ';
import Contact from '../components/landing/Contact';
import Footer from '../components/landing/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-inter">
      <Header />
      <Hero />
      <SocialProof />
      <Services />
      <Portfolio />
      <CTABanner />
      <Methodology />
      <Advantages />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}