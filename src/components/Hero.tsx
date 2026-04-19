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
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse shadow-[0_0_8px_rgba(74,222,128,0.5)]" />
            Updated for 2026 — All 50 States
          </div>
          
          <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-serif font-extrabold leading-[1.1] tracking-tight">
            How Much Does Pet Insurance <span className="italic text-green-300">Actually Cost</span> for Your Pet?
          </h1>
          
          <p className="text-white/75 text-lg md:text-xl max-w-xl leading-relaxed">
            Get a real monthly estimate in 30 seconds — based on your pet's breed, age, and ZIP code. No email. No sales calls. Just an honest number.
          </p>
          
          <div className="flex flex-wrap gap-3">
            {['No sign-up ever', '400+ breeds', '2026 market rates', 'All 50 US states'].map((text) => (
              <div key={text} className="bg-white/10 border border-white/20 text-white/90 text-[13px] font-medium px-4 py-1.5 rounded-full flex items-center gap-2 transition-colors hover:bg-white/20 cursor-default">
                <span className="text-green-400 font-bold">✓</span> {text}
              </div>
            ))}
          </div>
        </div>

        <div className="relative h-[400px] hidden lg:block animate-in fade-in slide-in-from-right duration-1000">
          {/* Pet Photo Collage */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[280px] rounded-xl overflow-hidden border-4 border-white/20 shadow-2xl z-20 -rotate-3 transition-transform hover:rotate-0 hover:scale-105 duration-500">
            <img 
              src="https://images.unsplash.com/photo-1552053831-71594a27632d?w=400&h=560&fit=crop&crop=face" 
              alt="Golden Retriever" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-2 right-2 bg-accent text-white text-[11px] font-bold px-3 py-1.5 rounded-lg shadow-lg">
              From $32/mo 🐕
            </div>
          </div>
          
          <div className="absolute top-0 right-4 w-[160px] h-[160px] rounded-xl overflow-hidden border-4 border-white/15 shadow-xl z-10 rotate-6 translate-x-4 flex items-center justify-center bg-primary-light transition-transform hover:scale-110 duration-500">
             <img 
              src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=320&h=320&fit=crop&crop=face" 
              alt="Cat" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="absolute bottom-4 left-4 w-[170px] h-[150px] rounded-xl overflow-hidden border-4 border-white/15 shadow-xl z-10 -rotate-6 -translate-x-4 flex items-center justify-center bg-primary-dark transition-transform hover:scale-110 duration-500">
             <img 
              src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=340&h=300&fit=crop&crop=center" 
              alt="Puppy" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="absolute bottom-0 right-12 w-[140px] h-[140px] rounded-xl overflow-hidden border-4 border-white/10 shadow-lg z-0 rotate-12 flex items-center justify-center bg-primary transition-transform hover:scale-110 duration-500">
             <img 
              src="https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?w=280&h=280&fit=crop&crop=face" 
              alt="Small dog" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
