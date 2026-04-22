import React from 'react';
import { ShieldCheck, Database, Zap, CheckCircle2, AlertCircle } from 'lucide-react';

export const AboutPage = () => {
  return (
    <div className="bg-bg min-h-screen py-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary-pale text-primary px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase mb-6">
            Meet Our Founder
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-text-main mb-6">
            About <span className="text-primary italic">PetSecure AI</span>
          </h1>
        </div>

        {/* Bio Section */}
        <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-12 items-start mb-20">
          <div className="relative group">
            <div className="absolute -inset-4 bg-primary/5 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <img 
              src="https://randomuser.me/api/portraits/women/44.jpg" 
              alt="Dr. Amanda Collins" 
              className="relative w-full aspect-square object-cover rounded-2xl shadow-hero border-4 border-white"
            />
            <div className="mt-4 text-center">
              <h3 className="font-serif font-bold text-text-main text-lg">Dr. Amanda Collins</h3>
              <p className="text-xs text-text-muted font-bold uppercase tracking-widest">Founder & Lead Actuary</p>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-xl font-serif leading-relaxed text-text-main italic">
              "Every pet owner deserves honest cost information before committing to a policy."
            </p>
            <div className="space-y-4 text-text-muted leading-relaxed">
              <p>
                Dr. Amanda Collins has spent 12 years working with pet owners across the US, helping them navigate the confusing world of pet insurance.
              </p>
              <p>
                A former veterinary practice manager in Austin, TX, she built PetSecure AI to give pet owners honest, unbiased cost estimates before entering the traditional insurance funnel.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="flex items-center gap-3 text-xs font-bold text-primary bg-primary-pale py-3 px-4 rounded-xl border border-primary/10">
                <CheckCircle2 className="w-4 h-4" /> No commissions influence our estimates
              </div>
              <div className="flex items-center gap-3 text-xs font-bold text-primary bg-primary-pale py-3 px-4 rounded-xl border border-primary/10">
                <CheckCircle2 className="w-4 h-4" /> Updated daily with 2026 rate filings
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20 text-center">
          {[
            { label: "Breeds Covered", val: "400+", icon: <Zap className="w-4 h-4" /> },
            { label: "All 50 States", val: "50", icon: <Database className="w-4 h-4" /> },
            { label: "Market Rates", val: "2026", icon: <ShieldCheck className="w-4 h-4" /> },
            { label: "Zero Email Required", val: "Zero", icon: <Zap className="w-4 h-4" /> },
          ].map((stat, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-card border border-border/50 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-3 text-primary opacity-10 group-hover:opacity-30 transition-opacity">
                {stat.icon}
              </div>
              <div className="text-3xl font-serif font-bold text-text-main mb-1">{stat.val}</div>
              <div className="text-[10px] font-bold text-text-muted uppercase tracking-[0.2em]">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Disclaimer Section */}
        <div className="bg-warm rounded-3xl p-8 md:p-12 border border-border/50 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-text-muted border border-border shadow-sm">
              <AlertCircle className="w-6 h-6" />
            </div>
          </div>
          <h2 className="text-xl font-serif font-bold text-text-main mb-4">Official Disclaimer</h2>
          <p className="text-sm text-text-muted leading-relaxed max-w-2xl mx-auto">
            PetSecure AI is not an insurance company. Estimates are for planning purposes only.
          </p>
        </div>
      </div>
    </div>
  );
};
