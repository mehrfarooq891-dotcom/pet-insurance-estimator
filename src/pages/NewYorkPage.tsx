import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ArrowRight, AlertCircle, Building2, Snowflake, Zap } from 'lucide-react';

export const NewYorkPage = () => {
  return (
    <div className="bg-bg">
      {/* Hero Section */}
      <section className="bg-primary-dark relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400 rounded-full blur-[100px] -mr-48 -mt-48" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <Link to="/" className="text-white/60 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest flex items-center gap-2 mb-8">
            ← Home / State Guides
          </Link>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500 text-blue-300 px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase mb-6">
              🇺🇸 New York Hub
            </div>
            <h1 className="text-white text-4xl md:text-6xl font-serif font-bold leading-tight mb-6">
              Pet Insurance Cost in <span className="text-blue-300 underline decoration-blue-300/30 italic">New York</span> 2026
            </h1>
            <p className="text-white/70 text-lg md:text-xl leading-relaxed">
              New York, especially NYC, represents the highest veterinary costs in the United States. Insuring your pet here is a critical financial hedge.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12">
        <div className="space-y-16">
          {/* Market Ovenview */}
          <section className="bg-surface rounded-2xl border border-border p-8 md:p-12 shadow-card">
            <h2 className="text-3xl font-serif text-text-main mb-6 font-bold tracking-tight">NY Market Overview</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
              <div className="bg-warm rounded-xl p-6 border border-border/50">
                <div className="text-blue-500 text-2xl mb-2">🏙️</div>
                <div className="text-sm font-bold text-text-main mb-1">City Premium</div>
                <div className="text-3xl font-serif font-bold text-primary">45% Higher</div>
                <p className="text-[11px] text-text-muted mt-2">NYC premiums are significantly higher than upstate and national averages.</p>
              </div>
              <div className="bg-warm rounded-xl p-6 border border-border/50">
                <div className="text-primary text-2xl mb-2">❄️</div>
                <div className="text-sm font-bold text-text-main mb-1">Winter Index</div>
                <div className="text-3xl font-serif font-bold text-primary">High Ortho Claims</div>
                <p className="text-[11px] text-text-muted mt-2">Icy sidewalks lead to a spike in ligament and fracture injuries.</p>
              </div>
            </div>

            <h3 className="text-xl font-serif font-bold text-text-main mb-6">Average Monthly Premiums (2026)</h3>
            <div className="overflow-hidden rounded-xl border border-border shadow-sm mb-8">
              <table className="w-full text-left text-sm border-collapse">
                <thead>
                  <tr className="bg-primary-pale text-primary">
                    <th className="p-4 uppercase text-[10px] font-extrabold tracking-widest">NY Region</th>
                    <th className="p-4 uppercase text-[10px] font-extrabold tracking-widest">Dog Avg.</th>
                    <th className="p-4 uppercase text-[10px] font-extrabold tracking-widest">Cat Avg.</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[
                    { c: 'Manhattan', d: '$68.50', ct: '$31.20' },
                    { c: 'Brooklyn', d: '$62.10', ct: '$28.40' },
                    { c: 'Buffalo', d: '$42.30', ct: '$18.50' },
                    { c: 'Rochester', d: '$41.80', ct: '$17.90' },
                    { c: 'Albany', d: '$44.20', ct: '$19.20' }
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

          {/* NY Specific Risks */}
          <section className="bg-surface rounded-2xl border border-border p-8 md:p-12 shadow-card">
            <h2 className="text-3xl font-serif text-text-main mb-8 font-bold tracking-tight">NY Metro Pet Hazards</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               {[
                { title: 'Antifreeze Poisoning', icon: <Snowflake className="text-blue-500" />, desc: 'Winter leaks are lethal to urban pets. Treatment costs can exceed $3,500.' },
                { title: 'Leptospirosis', icon: <Zap className="text-yellow-500" />, desc: 'NYC rats carry this bacterial infection. High risk for city dogs.' },
                { title: 'Elevator/Vertical Risk', icon: <Building2 className="text-primary-light" />, desc: 'Falls and elevator accidents are unique high-cost hazards in NY.' }
               ].map((risk) => (
                <div key={risk.title} className="space-y-3">
                  <div className="w-10 h-10 bg-warm rounded-lg flex items-center justify-center text-xl border border-border/50">
                    {risk.icon}
                  </div>
                  <h4 className="font-bold text-text-main">{risk.title}</h4>
                  <p className="text-xs text-text-muted leading-relaxed">{risk.desc}</p>
                </div>
               ))}
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <aside className="space-y-8">
          <div className="bg-primary-dark rounded-2xl p-8 text-white shadow-lg sticky top-24 border border-white/10">
            <h3 className="text-xl font-serif font-bold mb-4">Urgent Market Tip</h3>
            <p className="text-sm text-white/80 leading-relaxed mb-6">
              Vets in Manhattan charge up to 300% more than national averages. Uninsured emergencies here frequently result in "Economic Euthanasia."
            </p>
            <div className="bg-white/5 p-4 rounded-xl border border-white/10 mb-8">
               <div className="text-[10px] font-bold uppercase tracking-widest mb-1 opacity-70">NY MRI Scan Cost</div>
               <div className="text-2xl font-serif font-bold text-blue-300">$2,450</div>
               <div className="text-[10px] opacity-60 italic">Standard NY Metro Price · 2026</div>
            </div>
            <Link to="/#estimator" className="w-full bg-accent hover:bg-accent-light text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-accent/20">
              Calculate Estimate <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
};
