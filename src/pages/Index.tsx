
import React from 'react';
import ErrorBoundary from '@/components/ErrorBoundary';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ServicesSection from '@/components/ServicesSection';
import PortfolioSection from '@/components/PortfolioSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  console.log('Index page rendering');

  return (
    <ErrorBoundary>
      <div className="min-h-screen">
        <ErrorBoundary fallback={<div className="p-4 text-red-600">Navigation failed to load</div>}>
          <Navigation />
        </ErrorBoundary>
        
        <ErrorBoundary fallback={<div className="min-h-screen flex items-center justify-center"><div>Hero section failed to load</div></div>}>
          <HeroSection />
        </ErrorBoundary>
        
        <ErrorBoundary fallback={<div className="p-4 text-red-600">About section failed to load</div>}>
          <AboutSection />
        </ErrorBoundary>
        
        <ErrorBoundary fallback={<div className="p-4 text-red-600">Skills section failed to load</div>}>
          <SkillsSection />
        </ErrorBoundary>
        
        <ErrorBoundary fallback={<div className="p-4 text-red-600">Services section failed to load</div>}>
          <ServicesSection />
        </ErrorBoundary>
        
        <ErrorBoundary fallback={<div className="p-4 text-red-600">Portfolio section failed to load</div>}>
          <PortfolioSection />
        </ErrorBoundary>
        
        <ErrorBoundary fallback={<div className="p-4 text-red-600">Contact section failed to load</div>}>
          <ContactSection />
        </ErrorBoundary>
        
        <ErrorBoundary fallback={<div className="p-4 text-red-600">Footer failed to load</div>}>
          <Footer />
        </ErrorBoundary>
      </div>
    </ErrorBoundary>
  );
};

export default Index;
