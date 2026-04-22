import React, { useState } from 'react';
import { ChevronDown, Star, ExternalLink, ArrowRight } from 'lucide-react';

export const Sidebar = () => {
  return (
    <aside className="flex flex-col gap-8">
      <div className="bg-primary-dark text-white rounded-2xl p-8 flex flex-col gap-8 shadow-hero relative overflow-hidden" id="providers">
        {/* Subtle decorative element */}
        <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary-light/10 rounded-full blur-3xl pointer-events-none" />
        
        <h3 className="text-lg font-serif italic text-white border-b border-white/10 pb-4">Why Insure Early?</h3>
        
        <div className="space-y-6">
          {[
            { tag: 'Privacy Guaranteed', text: 'No email or sign-up needed to see real 2026 data.' },
            { tag: 'Inflation Adjusted', text: 'Rates calculated for modern veterinary overhead.' },
            { tag: 'Precision Mapping', text: 'State-specific factors tied directly to your ZIP.' },
          ].map((item, idx) => (
            <div key={idx} className="flex gap-4 items-start text-[13px] text-white/80 leading-relaxed group">
              <span className="text-accent-light font-bold text-lg leading-none mt-0.5 group-hover:scale-125 transition-transform">✓</span>
              <span><strong className="text-white block mb-0.5">{item.tag}</strong> {item.text}</span>
            </div>
          ))}
        </div>

        <div className="mt-4 bg-white/5 p-5 rounded-xl border-l-4 border-accent shadow-inner">
          <p className="text-[10px] font-bold opacity-60 uppercase tracking-widest mb-1.5">Avg. Emergency Surgery</p>
          <h4 className="text-3xl font-serif font-bold text-accent">$4,850.00</h4>
          <span className="text-[9px] opacity-40 italic tracking-wide">US Urban Metro Average · 2026 Estimates</span>
        </div>

        <div className="text-[13px] italic text-white/50 leading-relaxed border-t border-white/10 pt-6">
          “Insuring Bear at 4 months was the best financial move we made. His leg surgery was $5k, but we only paid $500.”
          <br /><strong className="text-white not-italic mt-2 block font-bold">— Michael R., NYC</strong>
        </div>
      </div>

      <div className="bg-surface rounded-2xl border border-border p-8 shadow-card">
        <h3 className="text-[11px] font-extrabold text-text-main uppercase tracking-[0.2em] mb-6">🏆 Top Providers 2026</h3>
        <div className="space-y-6">
          {[
            { name: 'Lemonade Pet', rating: '4.8', icon: '🍋', link: 'https://lemonade.com/pet', tag: 'Best Tech' },
            { name: 'Spot Pet Insurance', rating: '4.6', icon: '🐾', link: 'https://spotpet.com', tag: 'Fast ROI' },
            { name: 'ASPCA Pet Health', rating: '4.5', icon: '🏥', link: 'https://aspcapetinsurance.com', tag: 'High Trust' },
          ].map((provider) => (
            <div key={provider.name} className="flex items-center justify-between group">
              <div className="flex gap-4 items-center">
                <div className="w-10 h-10 bg-warm rounded-lg flex items-center justify-center text-xl shadow-sm border border-border/50 group-hover:scale-110 transition-transform">
                  {provider.icon}
                </div>
                <div>
                  <div className="text-sm font-bold text-text-main group-hover:text-primary transition-colors">{provider.name}</div>
                  <div className="flex items-center gap-2">
                    <div className="text-[10px] text-accent flex items-center gap-0.5 font-bold">
                      <Star className="w-2.5 h-2.5 fill-current" /> {provider.rating}
                    </div>
                    <span className="text-[9px] text-text-muted font-medium bg-bg px-1.5 py-0.5 rounded border border-border/50">{provider.tag}</span>
                  </div>
                </div>
              </div>
              <a href={provider.link} target="_blank" rel="noopener noreferrer" className="text-[11px] font-extrabold text-primary hover:text-primary-dark transition-colors uppercase tracking-widest border-b border-primary/20 pb-0.5">
                Quote
              </a>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};

export const ProblemSection = () => (
  <section className="bg-surface rounded-2xl border border-border shadow-card p-10 md:p-14">
    <h3 className="text-3xl font-serif text-text-main mb-6 font-bold tracking-tight">The Bill Nobody Plans For</h3>
    <p className="text-text-muted leading-relaxed text-base max-w-3xl mb-10">
      1 out of 3 pets will need emergency care this year. Modern pet insurance turns a $6,000 orthopedic surprise into a manageable $45 monthly investment.
    </p>

    <div className="overflow-hidden rounded-xl border border-border shadow-sm">
      <table className="w-full text-left text-sm border-collapse">
        <thead>
          <tr className="bg-primary-pale/50 text-primary">
            <th className="p-4 uppercase text-[10px] font-extrabold tracking-[0.15em]">Situation</th>
            <th className="p-4 uppercase text-[10px] font-extrabold tracking-[0.15em]">Out of Pocket</th>
            <th className="p-4 uppercase text-[10px] font-extrabold tracking-[0.15em]">With Insurance</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {[
            { s: 'Emergency visit', w: '$1,200–$2,200', i: '$120–$350' },
            { s: 'ACL Surgery', w: '$3,800–$7,500', i: '$380–$900' },
            { s: 'Cancer treatment', w: '$9,000–$20,000', i: '$900–$2,500' },
            { s: 'Foreign Ingestion', w: '$1,500–$4,500', i: '$150–$650' }
          ].map((row, idx) => (
            <tr key={idx} className="hover:bg-warm/30 transition-colors group">
              <td className="p-4 font-serif font-bold text-text-main group-hover:text-primary transition-colors">{row.s}</td>
              <td className="p-4 text-red-600/80 font-medium">{row.w}</td>
              <td className="p-4 text-primary font-bold bg-primary-pale/20">{row.i}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </section>
);

export const TestimonialsSection = () => (
  <section className="bg-primary-dark rounded-2xl p-10 md:p-14 text-white overflow-hidden relative">
    <div className="absolute top-0 right-0 w-64 h-64 bg-primary-light/10 rounded-full blur-[80px] -mr-32 -mt-32" />
    <h3 className="text-3xl font-serif text-white mb-10 font-bold tracking-tight relative z-10 text-center">Pet Parent Perspectives</h3>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
      {[
        { a: 'Sarah M.', l: 'Austin, TX', p: 'Insurance was the only reason we could say yes to chemo. Lexi is still with us today.', b: 'Golden Retriever' },
        { a: 'James T.', l: 'Portland, OR', p: 'Max ate a tennis ball. $3,500 surgery. Best $42/month I\'ve ever spent.', b: 'Labrador' },
        { a: 'Priya K.', l: 'San Diego, CA', p: 'Finally a tool that explains why Frenchie premiums are high.', b: 'French Bulldog' }
      ].map((t, idx) => (
        <div key={idx} className="bg-white/5 backdrop-blur-sm rounded-xl p-7 border border-white/10 flex flex-col justify-between hover:bg-white/10 transition-colors">
          <p className="text-sm text-white/80 italic mb-8 leading-relaxed">"{t.p}"</p>
          <div>
            <div className="text-[13px] font-bold text-white mb-0.5">{t.a}</div>
            <div className="text-[10px] text-white/50 uppercase tracking-widest font-bold font-serif italic">{t.l} · {t.b} owner</div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export const ProviderSection = () => (
  <section className="bg-surface rounded-2xl border border-border p-10 md:p-14 shadow-card">
    <h3 className="text-3xl font-serif text-text-main mb-8 font-bold tracking-tight">Top Providers 2026</h3>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        { name: 'Lemonade Pet', rating: '4.8', icon: '🍋', link: 'https://lemonade.com/pet', tag: 'Best Tech' },
        { name: 'Spot Pet Insurance', rating: '4.6', icon: '🐾', link: 'https://spotpet.com', tag: 'Fast ROI' },
        { name: 'ASPCA Pet Health', rating: '4.5', icon: '🏥', link: 'https://aspcapetinsurance.com', tag: 'High Trust' },
      ].map((provider) => (
        <div key={provider.name} className="flex flex-col gap-6 p-6 bg-warm/30 rounded-2xl border border-border/50 hover:border-primary/20 transition-all group">
          <div className="flex items-center justify-between">
            <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-3xl shadow-sm border border-border/50 group-hover:scale-110 transition-transform">
              {provider.icon}
            </div>
            <div className="text-right">
              <div className="text-[10px] text-accent flex items-center justify-end gap-1 font-bold">
                <Star className="w-3 h-3 fill-current" /> {provider.rating}
              </div>
              <span className="text-[10px] text-text-muted font-bold bg-white px-2 py-1 rounded border border-border/50 uppercase tracking-wider">{provider.tag}</span>
            </div>
          </div>
          <div>
            <div className="text-xl font-bold text-text-main mb-4">{provider.name}</div>
            <a href={provider.link} target="_blank" rel="noopener noreferrer" className="block w-full text-center bg-primary text-white py-3 rounded-lg font-bold text-sm hover:bg-primary-dark transition-all">
              Check Prices
            </a>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export const FaqSection = () => {
  const [openFaq, setOpenFaq] = useState<number>(0);
  const faqs = [
    { q: "How much does pet insurance cost per month?", a: "Most dog owners pay between $30 and $70 per month, while cat insurance averages $15 to $40 per month. High-risk breeds in states like California or New York sit at the top of that range." },
    { q: "Does my pet's age affect premium?", a: "Yes, significantly. After age 7, premiums rise sharply — sometimes doubling. Vets recommend insuring your pet early, ideally before their first birthday." },
    { q: "Which dog breeds cost the most?", a: "Breeds prone to genetic issues like French Bulldogs, English Bulldogs, and Great Danes are among the most expensive. Mixed breeds are often the most affordable." },
    { q: "Is pet insurance worth it if pet is healthy?", a: "Insurance is most valuable when you don't need it yet. Pre-existing conditions aren't covered, so locking in a plan while healthy ensures protection later." }
  ];

  return (
    <section className="bg-surface rounded-2xl border border-border shadow-card p-10 md:p-14">
      <h3 className="text-3xl font-serif text-text-main mb-8 font-bold tracking-tight">Guiding Answers</h3>
      <div className="space-y-2">
        {faqs.map((faq, idx) => (
          <div key={idx} className={`border border-border rounded-xl transition-all overflow-hidden ${openFaq === idx ? 'ring-2 ring-primary/5 border-primary/20 bg-primary-pale/10' : 'hover:border-text-muted/30'}`}>
            <button 
              onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
              className="w-full px-6 py-5 flex items-center justify-between text-left group"
            >
              <span className={`text-[15px] font-bold tracking-tight transition-colors ${openFaq === idx ? 'text-primary' : 'text-text-main'}`}>{faq.q}</span>
              <ChevronDown className={`w-5 h-5 flex-shrink-0 transition-all ${openFaq === idx ? 'rotate-180 text-primary' : 'text-text-muted group-hover:text-text-main'}`} />
            </button>
            <div className={`transition-all duration-300 ${openFaq === idx ? 'max-h-96 opacity-100 py-6' : 'max-h-0 opacity-0 overflow-hidden'}`}>
              <div className="px-6 border-t border-primary/5 pt-5 text-sm text-text-muted leading-relaxed">
                {faq.a}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export const PetBanner = () => (
  <section className="bg-primary-dark relative py-24 px-6 overflow-hidden">
     {/* Decorative background */}
    <div className="absolute inset-0 opacity-10">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-light rounded-full blur-[100px] -ml-48 -mb-48" />
    </div>

    <div className="max-w-4xl mx-auto flex flex-col items-center text-center relative z-10">
      <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-3xl mb-8 flex gap-4 grayscale opacity-80 select-none">
        <span className="text-3xl">🐕</span>
        <span className="text-3xl">🐈</span>
        <span className="text-3xl">🐩</span>
        <span className="text-3xl">🐾</span>
      </div>
      <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 tracking-tight text-white leading-tight">
        Protect Your Family <span className="text-accent underline underline-offset-8 decoration-accent/30 italic">Before</span> the Crisis
      </h2>
      <p className="text-white/70 max-w-xl mb-12 text-base md:text-lg leading-relaxed font-medium">
        The best time to insure was yesterday. The next best time is today. Lock in your rate before any health issues are documented.
      </p>
      <a href="/#estimator" className="bg-accent hover:bg-accent-light text-white font-serif font-bold text-lg py-5 px-12 rounded-xl transition-all shadow-xl shadow-accent/20 active:scale-95 flex items-center gap-3">
        Start Free Estimate <ArrowRight className="w-5 h-5" />
      </a>
      <p className="mt-6 text-[11px] font-bold text-white/30 uppercase tracking-[0.2em]">Zero Sign-up · Instant Results · All Breeds</p>
    </div>
  </section>
);
