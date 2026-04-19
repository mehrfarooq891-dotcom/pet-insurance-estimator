import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ArrowRight, AlertCircle, Sun, Wind, Waves } from 'lucide-react';

export const FloridaPage = () => {
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
              🇺🇸 Florida Hub
            </div>
            <h1 className="text-white text-4xl md:text-6xl font-serif font-bold leading-tight mb-6">
              Pet Insurance Cost in <span className="text-accent underline decoration-accent/30 italic">Florida</span> 2026
            </h1>
            <p className="text-white/70 text-lg md:text-xl leading-relaxed">
              Florida's unique tropical climate and high senior pet population mean insurance rates vary significantly by city. See 2026 average premiums for Miami, Orlando, and Tampa.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12">
        <div className="space-y-16">
          {/* Market Ovenview */}
          <section className="bg-surface rounded-2xl border border-border p-8 md:p-12 shadow-card">
            <h2 className="text-3xl font-serif text-text-main mb-6 font-bold tracking-tight">FL Market Overview</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
              <div className="bg-warm rounded-xl p-6 border border-border/50">
                <div className="text-accent text-2xl mb-2">🏖️</div>
                <div className="text-sm font-bold text-text-main mb-1">State Rank</div>
                <div className="text-3xl font-serif font-bold text-primary">#14 Most Expensive</div>
                <p className="text-[11px] text-text-muted mt-2">Florida sits slightly above the national average for pet care costs.</p>
              </div>
              <div className="bg-warm rounded-xl p-6 border border-border/50">
                <div className="text-primary text-2xl mb-2">🌡️</div>
                <div className="text-sm font-bold text-text-main mb-1">Climate Impact</div>
                <div className="text-3xl font-serif font-bold text-primary">High Hazard</div>
                <p className="text-[11px] text-text-muted mt-2">Heat exhaustion and parasites are leading causes of FL claims.</p>
              </div>
            </div>

            <h3 className="text-xl font-serif font-bold text-text-main mb-6">Average Monthly Premiums (2026)</h3>
            <div className="overflow-hidden rounded-xl border border-border shadow-sm mb-8">
              <table className="w-full text-left text-sm border-collapse">
                <thead>
                  <tr className="bg-primary-pale text-primary">
                    <th className="p-4 uppercase text-[10px] font-extrabold tracking-widest">Florida City</th>
                    <th className="p-4 uppercase text-[10px] font-extrabold tracking-widest">Dog Avg.</th>
                    <th className="p-4 uppercase text-[10px] font-extrabold tracking-widest">Cat Avg.</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[
                    { c: 'Miami', d: '$54.20', ct: '$24.50' },
                    { c: 'Orlando', d: '$48.10', ct: '$21.80' },
                    { c: 'Tampa', d: '$46.80', ct: '$20.90' },
                    { c: 'Jacksonville', d: '$44.50', ct: '$19.80' },
                    { c: 'Fort Lauderdale', d: '$52.10', ct: '$23.40' }
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

          {/* Florida Specific Risks */}
          <section className="bg-surface rounded-2xl border border-border p-8 md:p-12 shadow-card">
            <h2 className="text-3xl font-serif text-text-main mb-8 font-bold tracking-tight">Florida Pet Health Hazards</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               {[
                { title: 'Heat Stroke', icon: <Sun className="text-orange-500" />, desc: 'FL humidity puts pets at high risk of rapid overheating during summer.' },
                { title: 'Venomous Wildlife', icon: <Wind className="text-primary-light" />, desc: 'Coral snakes and pygmy rattlesnakes are year-round threats in yards.' },
                { title: 'Red Tide', icon: <Waves className="text-blue-500" />, desc: 'Coastal algal blooms can cause severe neurological issues in dogs.' }
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
          <div className="bg-primary rounded-2xl p-8 text-white shadow-lg sticky top-24">
            <h3 className="text-xl font-serif font-bold mb-4">Did You Know?</h3>
            <p className="text-sm text-white/80 leading-relaxed mb-6">
              Florida has the 2nd highest number of dog-related home insurance claims in the US, largely due to a massive population of "Snowbird" pets.
            </p>
            <div className="bg-white/10 p-4 rounded-xl border border-white/20 mb-8">
               <div className="text-[10px] font-bold uppercase tracking-widest mb-1 opacity-70">FL Claim Highlight</div>
               <div className="text-2xl font-serif font-bold">$6,200</div>
               <div className="text-[10px] opacity-60 italic">Average Heartworm Treatment Cost 2026</div>
            </div>
            <Link to="/#estimator" className="w-full bg-accent hover:bg-accent-light text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-accent/20">
              Get Your Estimate <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
};
