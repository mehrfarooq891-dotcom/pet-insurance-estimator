import React from 'react';
import { Hero } from '../components/Hero';
import { Estimator } from '../components/Estimator';
import { Sidebar, MainContent, PetBanner } from '../components/MainContent';

export const HomePage = () => {
  return (
    <>
      <Hero />
      
      <div id="estimator" className="max-w-7xl mx-auto px-6 py-12 lg:py-24 grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 items-start">
        <div className="space-y-16">
          <Estimator />
          <MainContent />
        </div>
        <div className="sticky top-[90px] hidden lg:block">
          <Sidebar />
        </div>
      </div>

      {/* Mobile Sidebar (appears below main content on small screens) */}
      <div className="lg:hidden max-w-7xl mx-auto px-6 pb-16">
        <Sidebar />
      </div>

      <PetBanner />

      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="bg-white rounded-3xl border-2 border-primary/5 shadow-hero p-10 md:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-pale/50 rounded-full blur-3xl -mr-32 -mt-32" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-serif text-text-main mb-8 tracking-tight">How We Calculate Your Estimate</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-[15px] text-text-muted leading-relaxed">
              <div className="space-y-4">
                <p>
                  Our estimator uses a proprietary weighted algorithm built from aggregated 2026 insurance rate filings, regional veterinary cost indices, and breed-specific genetic health research.
                </p>
                <div className="h-1 w-12 bg-accent rounded-full" />
                <p>
                  We start with a controlled base premium for your pet species, then apply a <span className="text-primary font-serif italic font-bold">Risk-Weighted Multiplier</span> based on documented health vulnerabilities for the selected breed.
                </p>
              </div>
              <div className="space-y-4">
                <p>
                  Adjustments follow a logarithmic age-curve and a localized <span className="text-primary font-serif italic font-bold">ZIP-to-State Index</span> (ZSI) that reflects real-time differences in US surgical and diagnostic pricing.
                </p>
                <p>
                  The result is a statistically probable monthly premium range intended for early-stage financial planning—offering transparency before you enter the traditional quote funnel.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
