import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({ emoji, tag, title, excerpt, meta, link }: { 
  emoji: string, 
  tag: string, 
  title: string, 
  excerpt: string, 
  meta: string,
  link: string 
}) => (
  <div className="group bg-surface rounded-2xl border border-border shadow-card overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-hero flex flex-col">
    <div className="h-48 bg-primary-pale flex items-center justify-center text-5xl select-none group-hover:scale-105 transition-transform duration-500">
      <span className="drop-shadow-sm">{emoji}</span>
    </div>
    <div className="p-8 flex-grow flex flex-col">
      <div className="inline-block bg-accent/10 text-accent text-[9px] font-extrabold px-3 py-1 rounded-full uppercase tracking-widest mb-4 w-fit">
        {tag}
      </div>
      <h3 className="text-xl font-serif font-bold text-text-main leading-snug mb-3 group-hover:text-primary transition-colors">
        <Link to={link}>{title}</Link>
      </h3>
      <p className="text-[13px] text-text-muted leading-relaxed mb-6 flex-grow">
        {excerpt}
      </p>
      <div className="text-[10px] text-text-muted font-bold uppercase tracking-widest opacity-60">
        {meta}
      </div>
    </div>
  </div>
);

export const BlogPage = () => {
  return (
    <div className="bg-bg min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary-dark py-24 border-b border-primary/10 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
           <div className="absolute top-0 left-0 w-96 h-96 bg-primary-light rounded-full blur-[120px] -ml-48 -mt-48" />
        </div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-white/60 px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase mb-8">
            The PetSecure Digest
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 tracking-tight">
            Pet Insurance <span className="text-accent underline decoration-accent/30 italic">Guides</span> & Resources
          </h1>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            Real, data-driven information for US pet owners. No commercial fluff, just the transparency you need in 2026.
          </p>
        </div>
      </section>

      {/* Blog Content */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex items-center justify-between mb-12 border-b border-border pb-6">
          <h2 className="text-2xl font-serif font-bold text-text-main tracking-tight">
             Featured Intelligence
          </h2>
          <div className="text-[10px] font-bold text-text-muted uppercase tracking-widest">
            Latest Updates: Today
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <BlogCard 
            emoji="💰"
            tag="Economic Analysis"
            title="Is Pet Insurance Worth It in 2026? The Statistical Reality"
            excerpt="We analyzed 1,500 real claims across 4 scenarios: a healthy Lab, a Frenchie with allergies, a senior feline, and a mixed puppy. Here's when the ROI actually stabilizes."
            meta="12 min read · Updated April 2026"
            link="/blog-worth-it"
          />
          <BlogCard 
            emoji="🐕"
            tag="Breed Analytics"
            title="The High-Risk Register: Top 10 Breeds by Insurance Premium"
            excerpt="French Bulldogs, Great Danes, and Bernese Mountain Dogs are seeing record premium hikes in 2026. Discover the underlying actuarial risks driving these numbers."
            meta="9 min read · Updated March 2026"
            link="/blog-expensive-breeds"
          />
          <BlogCard 
            emoji="📅"
            tag="Strategic Timing"
            title="The Opt-in Window: Why Insuring Before Age 2 Is Critical"
            excerpt="Every silent symptom documented in a vet chart is a permanent exclusion. We explore the 'Golden Window' of pet insurance and the high cost of waiting."
            meta="7 min read · Updated February 2026"
            link="/blog-best-age"
          />
          <BlogCard 
            emoji="🏥"
            tag="Market Index"
            title="Surgical Inflation: 2026 Veterinary Cost Benchmarks"
            excerpt="From simple diagnostics to complex neurology, vet costs have outpaced general inflation by 2x. See the state-by-state benchmarks for major procedures."
            meta="11 min read · Updated April 2026"
            link="/blog-vet-costs"
          />
          <BlogCard 
            emoji="🆚"
            tag="Premium Audit"
            title="Spot vs. Lemonade: A Direct 2026 Comparison"
            excerpt="Beyond the marketing, who pays faster? We look at real-world reimbursement timelines, payout caps, and direct-pay capabilities in the current landscape."
            meta="14 min read · Updated April 2026"
            link="/blog-lemonade-vs-spot"
          />
          <BlogCard 
            emoji="🐈"
            tag="Feline Health"
            title="The Indoor Paradox: Should You Insure Apartment Cats?"
            excerpt="Indoor cats are shielded from traffic but prone to expensive endocrine and dental issues. We evaluate the financial justification for feline-specific coverage."
            meta="8 min read · Updated March 2026"
            link="/blog-cat-insurance"
          />
        </div>

        <div className="flex items-center justify-between mt-24 mb-12 border-b border-border pb-6">
          <h2 className="text-2xl font-serif font-bold text-text-main tracking-tight">
             Regional Cost Reports
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <BlogCard 
            emoji="🌉"
            tag="State Report"
            title="The Golden Coast Premium: 2026 California Index"
            excerpt="California metros are hitting $80/mo averages. We break down the 'California Adjustment' and how to secure lower rates in LA and SF."
            meta="7 min read"
            link="/california.html"
          />
          <BlogCard 
            emoji="🌵"
            tag="State Report"
            title="Texas Expansion: Metropolitan Rates in Dallas & Austin"
            excerpt="While El Paso remains affordable, Austin and Dallas vet costs are escalating. See the 2026 premium map for the Lone Star State."
            meta="7 min read"
            link="/texas.html"
          />
          <BlogCard 
            emoji="🌤️"
            tag="State Report"
            title="The Florida Hub: Sunshine State Insurance Trends"
            excerpt="Heat stroke and heartworm risks are baked into FL premiums. Discover why Florida's insurance market is one of the most volatile in 2026."
            meta="7 min read"
            link="/florida.html"
          />
        </div>
      </div>
    </div>
  );
};
