import React from 'react';
import { Lock, EyeOff, ShieldCheck } from 'lucide-react';

export const PrivacyPage = () => {
  return (
    <div className="bg-bg min-h-screen py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-pale rounded-full mb-6">
            <Lock className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-text-main mb-6">Privacy Policy</h1>
          <p className="text-lg text-text-muted">Your anonymity is our core feature.</p>
        </div>

        <section className="bg-surface rounded-3xl border border-border p-8 md:p-12 shadow-card space-y-10">
          <div>
            <h2 className="text-xl font-serif font-bold text-text-main mb-4">No Data Collection</h2>
            <p className="text-sm text-text-muted leading-relaxed">
              PetSecure AI does not collect, store, or sell any personally identifiable information (PII). We do not require names, emails, phone numbers, or addresses to use the estimator.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-serif font-bold text-text-main mb-4">Cookies & Analytics</h2>
            <p className="text-sm text-text-muted leading-relaxed">
              We use minimal, privacy-focused analytics to understand how many people use our tool. We do not use tracking cookies that follow you across the web or build a profile of your browsing habits.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-serif font-bold text-text-main mb-4">Affiliate Disclosure</h2>
            <p className="text-sm text-text-muted leading-relaxed">
              When you click on a provider link, they may use a cookie to track that you came from our site so they can pay us a referral fee. This is handled by the provider and governed by their own privacy policies.
            </p>
          </div>

          <div className="pt-8 border-t border-border flex items-center gap-4 text-xs font-bold text-text-muted uppercase tracking-widest">
            <ShieldCheck className="w-4 h-4 text-primary" />
            <span>Last Updated: April 19, 2026</span>
          </div>
        </section>
      </div>
    </div>
  );
};
