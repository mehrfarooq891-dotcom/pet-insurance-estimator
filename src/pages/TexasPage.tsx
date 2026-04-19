import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ArrowRight } from 'lucide-react';

export const TexasPage = () => {
  return (
    <div className="bg-bg">
      {/* Hero Section */}
      <section className="bg-primary-dark relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-[100px] -mr-48 -mt-48" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <Link to="/" className="text-white/60 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest flex items-center gap-2 mb-8">
            ← Home / State Guides
          </Link>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent text-accent px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase mb-6">
              🇺🇸 Texas Hub
            </div>
            <h1 className="text-white text-4xl md:text-6xl font-serif font-bold leading-tight mb-6">
              Pet Insurance Cost in <span className="text-accent underline decoration-accent/30 italic">Texas</span> 2026
            </h1>
            <p className="text-white/70 text-lg md:text-xl leading-relaxed">
              From Dallas luxury to Austin sprawl, Texas vet costs sit slightly above the national average — and are rising fast. Here's what Texas pet owners are actually paying in 2026.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12">
        <div className="space-y-16">
          {/* Market Overview */}
          <section className="bg-surface rounded-2xl border border-border p-8 md:p-12 shadow-card">
            <h2 className="text-3xl font-serif text-text-main mb-6 font-bold tracking-tight">Texas Market Dynamics</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
              <div className="bg-warm rounded-xl p-6 border border-border/50">
                <div className="text-accent text-2xl mb-2">🔥</div>
                <div className="text-sm font-bold text-text-main mb-1">Heat Index</div>
                <div className="text-3xl font-serif font-bold text-primary">High Claim Factor</div>
                <p className="text-[11px] text-text-muted mt-2">Heatstroke is a top-5 claim in major TX metros like Houston and San Antonio.</p>
              </div>
              <div className="bg-warm rounded-xl p-6 border border-border/50">
                <div className="text-primary text-2xl mb-2">📈</div>
                <div className="text-sm font-bold text-text-main mb-1">Vet Inflation</div>
                <div className="text-3xl font-serif font-bold text-primary">+8.2% vs. 2025</div>
                <p className="text-[11px] text-text-muted mt-2">Texas veterinary labor costs have outpaced the national average recently.</p>
              </div>
            </div>

            <h3 className="text-xl font-serif font-bold text-text-main mb-6">Average Monthly Premiums (2026)</h3>
            <div className="overflow-hidden rounded-xl border border-border shadow-sm mb-8">
              <table className="w-full text-left text-sm border-collapse">
                <thead>
                  <tr className="bg-primary-pale text-primary">
                    <th className="p-4 uppercase text-[10px] font-extrabold tracking-widest">Texas Region</th>
                    <th className="p-4 uppercase text-[10px] font-extrabold tracking-widest">Dog Avg.</th>
                    <th className="p-4 uppercase text-[10px] font-extrabold tracking-widest">Cat Avg.</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[
                    { c: 'Houston', d: '$48.50', ct: '$22.10' },
                    { c: 'Dallas / Fort Worth', d: '$46.20', ct: '$20.80' },
                    { c: 'Austin', d: '$50.40', ct: '$23.50' },
                    { c: 'San Antonio', d: '$44.80', ct: '$19.40' },
                    { c: 'El Paso', d: '$38.20', ct: '$16.90' }
                  ].map((row) => (
                    <tr key={row.c} className="hover:bg-warm/30 transition-colors">
                      <td className="p-4 font-bold text-text-main">{row.c}</td>
                      <td className="p-4 text-primary font-bold">{row.d}</td>
                      <td className="p-4 text-primary/70">{row.ct}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Texas Specific Risks */}
          <section className="bg-surface rounded-2xl border border-border p-8 md:p-12 shadow-card">
            <h2 className="text-3xl font-serif text-text-main mb-8 font-bold tracking-tight">Localized Health Risks</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
               {[
                { title: 'Venomous Strikes', icon: '🐍', desc: 'Western Diamondback and Coral snakes are severe threats in residential TX. Emergency antivenin costs often exceed $4,500 per visit.' },
                { title: 'Heartworm endemic', icon: '🦟', desc: 'The Gulf Coast region has some of the highest heartworm rates in the US. Monthly prevention is cheaper than the $2k treatment.' }
               ].map((risk) => (
                <div key={risk.title} className="space-y-4">
                  <div className="w-12 h-12 bg-primary-pale rounded-2xl flex items-center justify-center text-2xl border border-primary/10 shadow-sm">
                    {risk.icon}
                  </div>
                  <h4 className="text-lg font-serif font-bold text-text-main">{risk.title}</h4>
                  <p className="text-sm text-text-muted leading-relaxed">{risk.desc}</p>
                </div>
               ))}
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <aside className="space-y-8">
          <div className="bg-primary rounded-2xl p-8 text-white shadow-hero sticky top-24">
            <h3 className="text-xl font-serif font-bold mb-4">TX Owner Insight</h3>
            <p className="text-sm text-white/80 leading-relaxed mb-8">
              "I saved $8,200 when my Lab needed emergency surgery in Dallas. Having the estimate early let me plan my budget with confidence."
            </p>
            <div className="bg-white/10 p-5 rounded-xl border border-white/20 mb-8 backdrop-blur-sm">
               <div className="text-[10px] font-bold uppercase tracking-widest mb-1 opacity-70">TX Median Claims Pay-out</div>
               <div className="text-3xl font-serif font-bold text-accent">$4,120</div>
               <div className="text-[10px] opacity-60 italic mt-1 leading-tight">Average Accident Pay-out 2026</div>
            </div>
            <Link to="/#estimator" className="w-full bg-accent hover:bg-accent-light text-white py-5 rounded-xl font-bold flex items-center justify-center gap-3 transition-all animate-none shadow-xl shadow-accent/20">
              Calculate Estimate <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
};
