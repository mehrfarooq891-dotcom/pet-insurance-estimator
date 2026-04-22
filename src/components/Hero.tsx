import React from 'react';

export const Hero = () => {
  return (
    <section className="bg-primary-dark relative overflow-hidden min-h-[540px] flex items-center">
      {/* Animated gradient background */}
      <div className="absolute inset-0 opacity-40 mix-blend-screen pointer-events-none">
        <div className="absolute top-0 -left-1/4 w-full h-full bg-[radial-gradient(ellipse_80%_60%_at_20%_50%,rgba(74,140,92,0.35)_0%,transparent_60%)]" />
        <div className="absolute top-0 -right-1/4 w-full h-full bg-[radial-gradient(ellipse_60%_80%_at_80%_30%,rgba(26,58,42,0.8)_0%,transparent_70%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1fr_480px] gap-12 items-center relative z-10 w-full py-16">
        <div className="space-y-8 animate-in fade-in slide-in-from-left duration-700">
          <div className="inline-flex items-center gap-3 bg-white/15 backdrop-blur-md border border-white/25 px-4 py-2 rounded-full text-white text-[10px] font-bold tracking-widest uppercase">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse shadow-[0_0_8px_rgba(197,160,89,0.5)]" />
            Updated for 2026 — All 50 States
          </div>
          
          <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-serif font-extrabold leading-[1.1] tracking-tight">
            How Much Does Pet Insurance <span className="italic text-accent-light underline underline-offset-8 decoration-accent/30">Actually Cost</span> for Your Pet?
          </h1>
          
          <p className="text-white/75 text-lg md:text-xl max-w-xl leading-relaxed">
            Get a real monthly estimate in 30 seconds — based on your pet's breed, age, and ZIP code. No email. No sales calls. Just an honest number.
          </p>
          
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            {['No sign-up ever', '400+ breeds', '2026 market rates', 'All 50 US states'].map((text) => (
              <div key={text} className="text-white font-medium text-sm flex items-center gap-2 group cursor-default">
                <span className="text-accent-light font-bold text-lg group-hover:scale-125 transition-transform">✓</span> {text}
              </div>
            ))}
          </div>
        </div>

        <div className="relative h-[440px] hidden lg:block animate-in fade-in slide-in-from-right duration-1000">
          {/* Animated Cards Container */}
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Card 1: Dog */}
            <div className="absolute top-0 left-0 w-[240px] bg-white rounded-2xl shadow-hero border border-border/50 p-4 rotate-[-4deg] animate-bounce-slow h-min">
               <div className="aspect-[4/5] rounded-xl overflow-hidden mb-3">
                 <img src="https://images.unsplash.com/photo-1552053831-71594a27632d?w=400&h=500&fit=crop" alt="Golden Retriever" className="w-full h-full object-cover" />
               </div>
               <div className="text-center font-bold text-text-main text-sm">Golden Retriever — <span className="text-primary italic">From $32/mo 🐕</span></div>
            </div>

            {/* Card 2: Cat */}
            <div className="absolute top-1/4 right-0 w-[200px] bg-white rounded-2xl shadow-hero border border-border/50 p-4 rotate-[6deg] animate-bounce-slow delay-700 h-min z-10">
               <div className="aspect-square rounded-xl overflow-hidden mb-3">
                 <img src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&h=400&fit=crop" alt="Cat" className="w-full h-full object-cover" />
               </div>
               <div className="text-center font-bold text-text-main text-sm">Cat — <span className="text-primary italic">From $18/mo 🐱</span></div>
            </div>

            {/* Card 3: Puppy */}
            <div className="absolute bottom-0 left-12 w-[220px] bg-white rounded-2xl shadow-hero border border-border/50 p-4 rotate-[-2deg] animate-bounce-slow delay-1000 h-min">
               <div className="aspect-[3/2] rounded-xl overflow-hidden mb-3">
                 <img src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=260&fit=crop" alt="Puppy" className="w-full h-full object-cover" />
               </div>
               <div className="text-center font-bold text-text-main text-sm">Puppy — <span className="text-primary italic">From $28/mo 🐶</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
