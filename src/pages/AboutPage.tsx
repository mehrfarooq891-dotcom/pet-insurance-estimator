import React, { useEffect } from 'react';
import { Shield, Zap, UserPlus, MapPin, CheckCircle2 } from 'lucide-react';

export const AboutPage = () => {
  useEffect(() => {
    document.title = "About PetSecure Insurance - Free Pet Insurance Cost Estimator USA";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', "Learn about PetSecure Insurance, the free online pet insurance cost estimator for the USA. Instant results with no registration required.");
    }
  }, []);

  return (
    <div className="bg-bg min-h-screen">
      {/* Section 1 — Hero */}
      <section className="bg-primary py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
            About PetSecure Insurance
          </h1>
          <p className="text-xl md:text-2xl text-white/80 font-medium font-serif italic">
            "Transparency is the heart of healthy pet parenting."
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-20 space-y-24">
        {/* Section 2 — Bio Section (Restored) */}
        <section className="grid grid-cols-1 md:grid-cols-[350px_1fr] gap-12 items-start">
          <div className="relative group">
            <div className="absolute -inset-4 bg-primary/5 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800" 
              alt="Dr. Amanda Collins" 
              className="relative w-full aspect-[4/5] object-cover rounded-2xl shadow-hero border-4 border-white"
            />
            <div className="mt-6 text-center md:text-left">
              <h3 className="font-serif font-bold text-text-main text-2xl">Dr. Amanda Collins</h3>
              <p className="text-xs text-primary font-bold uppercase tracking-[0.2em] mt-1">Founder & Lead Actuary</p>
              <a href="mailto:contact@petsecureinsurance.com" className="text-xs text-text-muted hover:text-primary transition-colors mt-2 block font-medium">contact@petsecureinsurance.com</a>
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-3xl font-serif font-bold text-text-main">The Story Behind the Tool</h2>
              <p className="text-lg text-text-muted leading-relaxed">
                After 12 years in veterinary practice management, I saw too many families forced to make heartbreaking medical decisions based solely on surprise costs. Pet insurance exists to prevent this, but the industry is often opaque and intimidating.
              </p>
              <p className="text-lg text-text-muted leading-relaxed">
                I built PetSecure Insurance to be the "missing first step." We provide honest, data-driven estimates before you ever have to hand over your email address or deal with high-pressure sales calls.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 text-sm font-bold text-primary bg-primary-pale py-4 px-6 rounded-xl border border-primary/10">
                <CheckCircle2 className="w-5 h-5" /> 100% Commission Free
              </div>
              <div className="flex items-center gap-3 text-sm font-bold text-primary bg-primary-pale py-4 px-6 rounded-xl border border-primary/10">
                <CheckCircle2 className="w-5 h-5" /> Real 2026 Rate Data
              </div>
            </div>
          </div>
        </section>

        {/* Section 3 — What We Do */}
        <section className="max-w-4xl mx-auto text-center space-y-6 pt-12 border-t border-border/50">
          <h2 className="text-3xl font-serif font-bold text-text-main">Our Philosophy</h2>
          <p className="text-lg text-text-muted leading-relaxed">
            Most financial tools are locked behind paywalls or require creating an account just to see a simple number. We believe useful tools should be free and instant for everyone. PetSecure Insurance uses localized data from all 50 states to give you a realistic preview of your pet's insurance landscape.
          </p>
        </section>

        {/* Section 4 — Three value cards */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-surface p-8 rounded-2xl border border-border shadow-card text-center space-y-4 hover:border-primary/20 transition-colors">
            <div className="w-12 h-12 bg-primary-pale text-primary rounded-xl flex items-center justify-center mx-auto">
              <Zap size={24} />
            </div>
            <h3 className="text-xl font-bold text-text-main">Instant Speed</h3>
            <p className="text-text-muted leading-relaxed text-sm">
              We don't make you wait for a phone call. Our algorithms work in milliseconds to process breed and regional data.
            </p>
          </div>

          <div className="bg-surface p-8 rounded-2xl border border-border shadow-card text-center space-y-4 hover:border-primary/20 transition-colors">
            <div className="w-12 h-12 bg-primary-pale text-primary rounded-xl flex items-center justify-center mx-auto">
              <Shield size={24} />
            </div>
            <h3 className="text-xl font-bold text-text-main">No Signup</h3>
            <p className="text-text-muted leading-relaxed text-sm">
              We respect your inbox. No email registration is required to access our full suite of estimation tools.
            </p>
          </div>

          <div className="bg-surface p-8 rounded-2xl border border-border shadow-card text-center space-y-4 hover:border-primary/20 transition-colors">
            <div className="w-12 h-12 bg-primary-pale text-primary rounded-xl flex items-center justify-center mx-auto">
              <MapPin size={24} />
            </div>
            <h3 className="text-xl font-bold text-text-main">ZIP-Level Data</h3>
            <p className="text-text-muted leading-relaxed text-sm">
              Vet costs in Manhattan aren't the same as Memphis. Our estimates factor in local economic reality.
            </p>
          </div>
        </section>

        {/* Section 5 — Disclaimer Box */}
        <div className="bg-[#f5f5f5] rounded-2xl p-8 md:p-12 border border-[#ddd] text-center">
          <span className="text-[10px] text-text-muted font-bold uppercase tracking-[0.2em] block mb-2">Disclaimer</span>
          <h2 className="text-lg font-serif font-bold text-text-main mb-4 uppercase tracking-wide">Official Disclaimer</h2>
          <p className="text-sm text-text-muted leading-relaxed max-w-2xl mx-auto">
            PetSecure Insurance is an independent planning tool. We are not an insurance provider or broker. All estimates are for informational and planning purposes only; final policy premiums are determined by the individual carrier based on their formal underwriting process.
          </p>
        </div>
      </div>
    </div>
  );
};

