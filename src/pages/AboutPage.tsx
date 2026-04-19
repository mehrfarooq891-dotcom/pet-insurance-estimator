import React from 'react';
import { ShieldCheck, Database, Eye, Info } from 'lucide-react';

export const AboutPage = () => {
  return (
    <div className="bg-bg min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary-pale text-primary px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase mb-6">
            Our Mission
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-text-main mb-6">
            Transparency in Pet <span className="text-primary italic">Finance</span>
          </h1>
          <p className="text-lg text-text-muted leading-relaxed">
            PetSecure AI was built to solve a single problem: the lack of transparent, upfront cost data in the pet insurance industry.
          </p>
        </div>

        <section className="bg-surface rounded-3xl border border-border p-8 md:p-12 shadow-card space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-warm rounded-2xl flex items-center justify-center text-primary border border-border/50">
                <Database className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif font-bold text-text-main">The Data Science</h3>
              <p className="text-sm text-text-muted leading-relaxed">
                We aggregate thousands of anonymized data points from public insurance filings, veterinary cost surveys, and regional economic indices to build our 2026 estimation model.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-warm rounded-2xl flex items-center justify-center text-primary border border-border/50">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif font-bold text-text-main">Privacy First</h3>
              <p className="text-sm text-text-muted leading-relaxed">
                Most estimators are "lead magnets" designed to capture your email. We require zero personal information to run an estimate. Your data is your own.
              </p>
            </div>
          </div>

          <div className="pt-12 border-t border-border">
            <h2 className="text-2xl font-serif font-bold text-text-main mb-6">How We Monetize</h2>
            <p className="text-sm text-text-muted leading-relaxed mb-6">
              To keep this tool free and ad-free, we may receive a small referral commission if you choose to click through to a provider from our platform. This does not affect your premium or our data integrity—our algorithm remains strictly objective.
            </p>
            <div className="bg-primary-pale p-6 rounded-2xl border border-primary/5 italic text-sm text-primary">
              "Our goal isn't to sell you a policy; it's to ensure you know the price before you're in the waiting room."
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
