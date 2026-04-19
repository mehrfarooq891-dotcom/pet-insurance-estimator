import React from 'react';
import { HelpCircle, ChevronRight } from 'lucide-react';

export const FAQPage = () => {
  const faqs = [
    {
      q: "How accurate are these 2026 estimates?",
      a: "Our model is updated monthly to reflect 2026 veterinary inflation and insurance rate filings. While we aim for +/- 10% accuracy, final premiums depend on your pet's specific medical history which only an insurer can evaluate."
    },
    {
      q: "Why don't you ask for my email address?",
      a: "We believe financial planning should be private. We provide the data upfront so you can decide if pet insurance fits your budget before entering a sales funnel."
    },
    {
      q: "Does breed really affect the cost that much?",
      a: "Yes. Certain breeds like French Bulldogs or Great Danes carry significantly higher genetic risks (respiratory or orthopedic), which can triple the premium compared to a mixed-breed dog of the same weight."
    },
    {
      q: "What is the 'State Adjustment'?",
      a: "Veterinary labor and real estate costs vary by state. A surgery in New York City can cost 3x more than the same procedure in rural Ohio. Our tool applies a localized index to reflect these real-world differences."
    }
  ];

  return (
    <div className="bg-bg min-h-screen py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-text-main mb-6">Frequently Asked <span className="text-primary italic">Questions</span></h1>
          <p className="text-lg text-text-muted">Everything you need to know about our estimation logic.</p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-surface rounded-2xl border border-border p-8 shadow-sm hover:shadow-md transition-shadow">
               <div className="flex gap-4">
                  <HelpCircle className="w-6 h-6 text-primary shrink-0" />
                  <div>
                    <h3 className="text-lg font-serif font-bold text-text-main mb-3">{faq.q}</h3>
                    <p className="text-sm text-text-muted leading-relaxed">{faq.a}</p>
                  </div>
               </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
