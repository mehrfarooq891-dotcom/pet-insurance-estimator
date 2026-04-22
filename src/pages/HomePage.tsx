import React from 'react';
import { Hero } from '../components/Hero';
import { Estimator } from '../components/Estimator';
import { ProblemSection, TestimonialsSection, ProviderSection, FaqSection, PetBanner } from '../components/MainContent';
import { ShieldCheck, Database, Zap } from 'lucide-react';

export const HomePage = () => {
  return (
    <>
      <Hero />
      
      {/* STATS BAR */}
      <div className="bg-primary py-8 border-y border-white/5 shadow-lg relative z-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 items-center">
            {[
              { label: "Breeds Covered", val: "400+", icon: <Zap className="w-4 h-4 text-accent" /> },
              { label: "All 50 States", val: "50", icon: <Database className="w-4 h-4 text-accent" /> },
              { label: "Zero Email Required", val: "Zero", icon: <ShieldCheck className="w-4 h-4 text-accent" /> },
              { label: "2026 Rates Updated", val: "2026", icon: <Zap className="w-4 h-4 text-accent" /> },
            ].map((stat, i) => (
              <div key={i} className="flex items-center justify-center gap-4 text-white group">
                <div className="p-3 bg-white/10 rounded-xl group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-serif font-bold leading-none">{stat.val}</span>
                  <span className="text-[10px] font-bold text-white/50 uppercase tracking-widest mt-1">{stat.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 space-y-24">
        {/* THE TOOL SECTION */}
        <section id="estimator" className="scroll-mt-24">
           <Estimator />
        </section>

        {/* PROBLEM SECTION */}
        <ProblemSection />

        {/* TESTIMONIALS */}
        <TestimonialsSection />

        {/* TOP PROVIDERS 2026 */}
        <ProviderSection />

        {/* FAQ */}
        <FaqSection />

        {/* CALCULATION LOGIC EXPLAINER (Kept for depth/trust) */}
        <div className="bg-warm rounded-3xl border border-border/50 p-10 md:p-16 relative overflow-hidden">
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

      {/* CTA BANNER */}
      <PetBanner />
    </>
  );
};
