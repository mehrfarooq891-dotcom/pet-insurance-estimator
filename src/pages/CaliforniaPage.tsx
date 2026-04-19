import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ArrowRight, AlertCircle } from 'lucide-react';

export const CaliforniaPage = () => {
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
              🇺🇸 California Hub
            </div>
            <h1 className="text-white text-4xl md:text-6xl font-serif font-bold leading-tight mb-6">
              Pet Insurance Cost in <span className="text-accent underline decoration-accent/30 italic">California</span> 2026
            </h1>
            <p className="text-white/70 text-lg md:text-xl leading-relaxed">
              California represents the highest veterinary cost index in the continental US—40–50% above the national average. Here is the 2026 cost breakdown for LA, SF, and San Diego.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12">
        <div className="space-y-16">
          {/* Market Ovenview */}
          <section className="bg-surface rounded-2xl border border-border p-8 md:p-12 shadow-card">
            <h2 className="text-3xl font-serif text-text-main mb-6 font-bold tracking-tight">CA Market Dynamics</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
              <div className="bg-warm rounded-xl p-6 border border-border/50">
                <div className="text-accent text-2xl mb-2">🐻</div>
                <div className="text-sm font-bold text-text-main mb-1">Cost-of-Care</div>
                <div className="text-3xl font-serif font-bold text-primary">Highest in US</div>
                <p className="text-[11px] text-text-muted mt-2">California premiums reflect extreme overhead for urban vet practices.</p>
              </div>
              <div className="bg-warm rounded-xl p-6 border border-border/50">
                <div className="text-primary text-2xl mb-2">🌪️</div>
                <div className="text-sm font-bold text-text-main mb-1">Climate Risks</div>
                <div className="text-3xl font-serif font-bold text-primary">Significant Claims</div>
                <p className="text-[11px] text-text-muted mt-2">Wildfires, foxtails, and Valley Fever are major CA claim drivers.</p>
              </div>
            </div>

            <h3 className="text-xl font-serif font-bold text-text-main mb-6">Average Monthly Premiums (2026)</h3>
            <div className="overflow-hidden rounded-xl border border-border shadow-sm mb-8">
              <table className="w-full text-left text-sm border-collapse">
                <thead>
                  <tr className="bg-primary-pale text-primary">
                    <th className="p-4 uppercase text-[10px] font-extrabold tracking-widest">California City</th>
                    <th className="p-4 uppercase text-[10px] font-extrabold tracking-widest">Dog Avg.</th>
                    <th className="p-4 uppercase text-[10px] font-extrabold tracking-widest">Cat Avg.</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[
                    { c: 'Los Angeles', d: '$64.20', ct: '$28.50' },
                    { c: 'San Francisco', d: '$72.10', ct: '$32.40' },
                    { c: 'San Diego', d: '$58.80', ct: '$26.10' },
                    { c: 'Sacramento', d: '$48.50', ct: '$20.80' },
                    { c: 'San Jose', d: '$68.40', ct: '$30.20' }
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

          {/* California Specific Risks */}
          <section className="bg-surface rounded-2xl border border-border p-8 md:p-12 shadow-card">
            <h2 className="text-3xl font-serif text-text-main mb-8 font-bold tracking-tight">State Health Hazards</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
               {[
                { title: 'Wildfire Smoke', icon: '🔥', desc: 'Acute respiratory damage from smoke inhalation can cost $4,000+ for oxygen therapy and ICU stays.' },
                { title: 'Dangerous Foxtails', icon: '🌾', desc: 'Summer foxtails embed in paws and ears, often requiring sedation and removal costing $600–$1,200.' },
                { title: 'Valley Fever', icon: '🏜️', desc: 'Fungal soil infection endemic to SoCal. Chronic treatment often costs between $3k and $8k over the pet\'s life.' },
                { title: 'Coyote Attacks', icon: '🐺', desc: 'High risk in urban CA. Emergency surgery for predator attacks is a top-10 accident claim.' }
               ].map((risk) => (
                <div key={risk.title} className="space-y-4">
                  <div className="text-3xl group-hover:scale-110 transition-transform">{risk.icon}</div>
                  <h4 className="text-lg font-serif font-bold text-text-main">{risk.title}</h4>
                  <p className="text-sm text-text-muted leading-relaxed">{risk.desc}</p>
                </div>
               ))}
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <aside className="space-y-8">
          <div className="bg-primary-dark rounded-2xl p-8 text-white shadow-hero sticky top-24 border border-white/10">
            <h3 className="text-xl font-serif font-bold mb-4">CA Market Analysis</h3>
            <p className="text-sm text-white/80 leading-relaxed mb-8">
              "NYC and San Francisco share the highest vet costs globally. For SF pet owners, insurance is less of an option and more of a necessity."
            </p>
            <div className="bg-white/5 p-5 rounded-xl border border-white/10 mb-8 backdrop-blur-sm">
               <div className="text-[10px] font-bold uppercase tracking-widest mb-1 opacity-70">SF Avg. MRI Scan</div>
               <div className="text-3xl font-serif font-bold text-accent">$2,850</div>
               <div className="text-[10px] opacity-60 italic mt-1 leading-tight">San Francisco Metro Estimate · 2026</div>
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
