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
            title="Is Pet Insurance Worth It in 2026? We Ran the Real Numbers for 4 Pets"
            excerpt="We analyzed 1,500 real claims across 4 scenarios: a healthy mixed breed, a French Bulldog, a cancer-surviving Golden, and an older feline. Here is when the ROI actually holds up."
            meta="12 min read · Updated April 2026"
            link="/blog-worth-it"
          />
          <BlogCard 
            emoji="🔢"
            tag="Cost Analysis"
            title="How Much Does Pet Insurance Cost? A Complete 2025 Guide"
            excerpt="Wondering what you'll pay to protect your pet? We break down the real numbers, average premiums, customizable plan sliders, and cost-saving tips."
            meta="11 min read · Updated June 2026"
            link="/blog-how-much-costs"
          />
          <BlogCard 
            emoji="🧮"
            tag="Premium Calculator"
            title="Pet Insurance Calculator: How to Estimate Your Monthly Premium"
            excerpt="Gathering a reliable plan estimate shouldn't be guesswork. Learn how online premium adjustment systems compute rates and how to customize sliders for maximum savings."
            meta="11 min read · Updated June 2026"
            link="/blog-calculator-guide"
          />
          <BlogCard 
            emoji="🏷️"
            tag="Quote Analysis"
            title="Dog Insurance Estimate: What Factors Affect Your Quote"
            excerpt="Curious about what determines your dog's coverage rate? Break down how specific breeds, ZIP codes, and age curves drive insurance pricing."
            meta="11 min read · Updated June 2026"
            link="/blog-dog-insurance-factor"
          />
          <BlogCard 
            emoji="⚖️"
            tag="Cost vs Benefit"
            title="Is Pet Insurance Worth It? Cost vs Benefits Breakdown"
            excerpt="Faced with rising veterinary prices and changing premiums, pet parents need a clear financial roadmap. We unpack the math to help you decide."
            meta="11 min read · Updated June 2026"
            link="/blog-worth-it-breakdown"
          />
          <BlogCard 
            emoji="🐱"
            tag="Cost Comparison"
            title="Cat vs Dog Insurance: Which Costs More and Why"
            excerpt="Comparing feline vs. canine coverage? Dive deep into the biological risk profiles, veterinary diagnostics, and regional variables that dictate pricing."
            meta="11 min read · Updated June 2026"
            link="/blog-cat-vs-dog-comparison"
          />
          <BlogCard 
            emoji="🦴"
            tag="Puppy Guide"
            title="Pet Insurance for Puppies: When to Buy and What It Costs"
            excerpt="Welcoming a new puppy? Uncover the life-saving benefits of early enrollment, young canine risk dynamics, and tips for finding affordable rates."
            meta="11 min read · Updated June 2026"
            link="/blog-puppy-insurance"
          />
          <BlogCard 
            emoji="📉"
            tag="Cost Strategies"
            title="How to Lower Your Pet Insurance Premium Without Losing Coverage"
            excerpt="Tired of growing veterinary premium bills? Learn how to strategically adjust plan sliders, review enrollment ages, and optimize coverage without sacrificing safety."
            meta="11 min read · Updated June 2026"
            link="/blog-lower-premiums"
          />
          <BlogCard 
            emoji="🧩"
            tag="Guide & Tips"
            title="Pet Insurance Deductibles Explained: What You Need to Know"
            excerpt="Demystify how deductible options influence your direct bills and out-of-pocket veterinary limits. We translate the fine print into simple, actionable calculations."
            meta="11 min read · Updated June 2026"
            link="/blog-deductibles-guide"
          />
          <BlogCard 
            emoji="👵"
            tag="Senior Care"
            title="Best Pet Insurance for Senior Dogs: Cost Estimates and Tips"
            excerpt="Protect your loyal older dog with strategic coverage comparisons, customizable deductibles, and tailored estimators for their golden years."
            meta="11 min read · Updated June 2026"
            link="/blog-best-senior-dog"
          />
          <BlogCard 
            emoji="⏳"
            tag="Policy Guide"
            title="Pet Insurance Waiting Periods: What Every Owner Should Know"
            excerpt="Learn how waiting periods work, the standard timelines for accidents, illnesses, and joint conditions, and how to protect your pet safely."
            meta="10 min read · Updated June 2026"
            link="/blog-waiting-periods"
          />
          <BlogCard 
            emoji="🩺"
            tag="Policy Guide"
            title="Does Pet Insurance Cover Pre-Existing Conditions?"
            excerpt="Uncover how pre-existing conditions are evaluated, understand the difference between curable and chronic diseases, and learn how to secure custom estimates masterfully."
            meta="11 min read · Updated June 2026"
            link="/blog-pre-existing-conditions-guide"
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
            tag="Guide & Tips"
            title="The Best Age to Get Pet Insurance — And Why Waiting Is More Expensive Than You Think"
            excerpt="The best time to insure your pet is today. Discover how pre-existing condition exclusions and age-based pricing curves make delaying one of the costliest financial decisions you can make."
            meta="10 min read · Updated May 2026"
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
          <BlogCard 
            emoji="🎾"
            tag="Golden Health"
            title="Complete Guide to Pet Insurance for Golden Retriever Owners 2026"
            excerpt="60% of Goldens will face a cancer diagnosis. We explore the essential coverage needs, 2026 rate benchmarks, and why the 'Golden Window' for enrollment is so short."
            meta="12 min read · Updated May 2026"
            link="/blog-golden-retriever"
          />
          <BlogCard 
            emoji="🦴"
            tag="Risk Alert"
            title="French Bulldog Pet Insurance 2026 — Why Accident-Only Plans Are a Costly Mistake"
            excerpt="Frenchies are high-risk nodes for IVDD and BOAS. Learn why saving $20/month on an accident-only plan could leave you with a $10,000 surgical bill."
            meta="10 min read · Updated May 2026"
            link="/blog-french-bulldog"
          />
          <BlogCard 
            emoji="🐕‍🦺"
            tag="Breed Analysis"
            title="German Shepherd Pet Insurance 2026 — The Hip Dysplasia Coverage Question"
            excerpt="19% of German Shepherds suffer from hip dysplasia, with surgeries costing up to $14,000. Discover the critical orthopedic coverage details you must ask before enrolling."
            meta="11 min read · Updated May 2026"
            link="/blog-german-shepherd"
          />
          <BlogCard 
            emoji="🌭"
            tag="Breed Analysis"
            title="Dachshund Pet Insurance 2026 — IVDD Surgery and Why Every Wiener Dog Needs Coverage"
            excerpt="One in four Dachshunds will face spinal surgery. Learn why IVDD coverage is non-negotiable and see 2026 cost benchmarks for your wobbly-walk protector."
            meta="9 min read · Updated May 2026"
            link="/blog-dachshund"
          />
          <BlogCard 
            emoji="🔍"
            tag="Guide & Tips"
            title="Pet Insurance Pre-Existing Conditions Explained — The Rule That Catches Every New Owner Off Guard"
            excerpt="What actually counts as pre-existing? We demystify historical medical record audits, curable vs. incurable clauses, and how to protect your coverage."
            meta="10 min read · Updated May 2026"
            link="/blog-pre-existing"
          />
          <BlogCard 
            emoji="📲"
            tag="Guide & Tips"
            title="How Pet Insurance Claims Work — Step-by-Step Guide for First-Time Claimants"
            excerpt="Filing your first pet insurance claim? Discover how the reimbursement model works, required SOAP medical files, average timelines, and what to do if a claim is denied."
            meta="9 min read · Updated May 2026"
            link="/blog-claims-guide"
          />
          <BlogCard 
            emoji="🧬"
            tag="Breed Analysis"
            title="Mixed Breed Dog Insurance Cost 2026 — Why Mutts Are the Cheapest to Insure"
            excerpt="Your mixed-breed dog represents the absolute best of genetic diversity. Learn how 'hybrid vigor' keeps mutt insurance costs low and why early coverage is still a lifesaver."
            meta="10 min read · Updated May 2026"
            link="/blog-mixed-breed"
          />
          <BlogCard 
            emoji="📊"
            tag="Guide & Tips"
            title="Pet Insurance Deductibles Explained — Annual vs Per Incident (Which Saves You More?)"
            excerpt="Annual vs per-incident: your choice of deductible shapes both your monthly premiums and sudden emergency veterinary bills. Discover which model wins based on real-world calculations."
            meta="10 min read · Updated May 2026"
            link="/blog-deductibles"
          />
          <BlogCard 
            emoji="🐕"
            tag="Breed Analysis"
            title="Labrador Retriever Pet Insurance Cost 2026 — America's Most Popular Dog"
            excerpt="With bottomless stomachs and massive spirits, Labradors are beloved family members. Discover their specific health risks, cost benchmarks, and why rapid accident + illness coverage is a lifesaver."
            meta="10 min read · Updated May 2026"
            link="/blog-labrador"
          />
          <BlogCard 
            emoji="👵"
            tag="Guide & Tips"
            title="Senior Pet Insurance — Should You Insure a Dog or Cat Over Age 8?"
            excerpt="Insuring an older companion is a complicated financial query. Discover the hard truths of rising premium curves, medical history exclusions, and when a savings hybrid wins."
            meta="10 min read · Updated May 2026"
            link="/blog-senior-pet"
          />
          <BlogCard 
            emoji="🍋"
            tag="Product Review"
            title="Lemonade Pet Insurance Review 2026 — Fast Claims, But Is It Right for Your Pet?"
            excerpt="Lemonade completely changed the pet insurance space with artificial intelligence and rapid digital claims. We investigate what works, what falls short, and whether it fits your budget."
            meta="10 min read · Updated May 2026"
            link="/blog-lemonade-review"
          />
          <BlogCard 
            emoji="❤️"
            tag="Breed Analysis"
            title="Cavalier King Charles Spaniel Insurance — The Heart Disease Every Owner Will Face"
            excerpt="Virtually all Cavaliers develop Mitral Valve Disease (MVD) by age 10. Learn why early enrollment is vital to keep your companion fully covered."
            meta="10 min read · Updated June 2026"
            link="/blog-cavalier"
          />
        </div>

        <div className="flex items-center justify-between mt-24 mb-12 border-b border-border pb-6">
          <h2 className="text-2xl font-serif font-bold text-text-main tracking-tight">
             Regional Cost Reports
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <BlogCard 
            emoji="🍎"
            tag="New York Cost Guide"
            title="Pet Insurance in New York 2026 — What NYC, Long Island and Upstate Owners Pay"
            excerpt="New York pet parents face the steepest veterinary rates and premiums in the US. Discover actual 2026 rates across NYC, Long Island, and Upstate."
            meta="11 min read · Updated May 2026"
            link="/blog-new-york-cost"
          />
          <BlogCard 
            emoji="📍"
            tag="California Cost Guide"
            title="How Much Does Pet Insurance Cost in California 2026? City by City Guide"
            excerpt="California has the highest vet costs in the US. Read our comprehensive 2026 city-by-city price map across LA, SF, San Diego, Sacramento, and more."
            meta="10 min read · Updated May 2026"
            link="/blog-california-cost"
          />
          <BlogCard 
            emoji="🤠"
            tag="Texas Cost Guide"
            title="Pet Insurance in Texas 2026 — What Dallas, Houston and Austin Owners Actually Pay"
            excerpt="Texas has a 65% pet ownership rate, but local veterinary costs are spiking. Compare actual 2026 rates for Dallas, Houston, Austin and rural areas."
            meta="9 min read · Updated May 2026"
            link="/blog-texas-cost"
          />
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
