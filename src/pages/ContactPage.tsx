import React, { useEffect } from 'react';
import { Send, Mail } from 'lucide-react';

export const ContactPage = () => {
  useEffect(() => {
    document.title = "Contact PetSecure AI - Get in Touch with Our Team";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', "Contact the team behind PetSecure AI, the free online pet insurance cost estimator for the USA. We're here to help with your questions and suggestions.");
    }
  }, []);

  return (
    <div className="bg-bg min-h-screen">
      {/* Section 1 — Heading */}
      <section className="bg-primary py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl text-white/80 font-medium">
            Have a question or suggestion? We would love to hear from you.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-3xl mx-auto">
          {/* Section 2 — Contact form */}
          <div className="bg-surface p-8 md:p-12 rounded-3xl border border-border shadow-card mb-12">
            <form 
              action="https://formspree.io/f/YOUR_FORMSPREE_ID" 
              method="POST"
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-bold text-text-main uppercase tracking-widest">Name</label>
                  <input 
                    type="text" 
                    id="name"
                    name="name" 
                    required 
                    placeholder="Your Name"
                    className="w-full p-4 bg-warm border border-border rounded-xl focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-bold text-text-main uppercase tracking-widest">Email</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email" 
                    required 
                    placeholder="your@email.com"
                    className="w-full p-4 bg-warm border border-border rounded-xl focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-bold text-text-main uppercase tracking-widest">Subject</label>
                <input 
                  type="text" 
                  id="subject"
                  name="subject" 
                  required 
                  placeholder="How can we help?"
                  className="w-full p-4 bg-warm border border-border rounded-xl focus:outline-none focus:border-accent transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-bold text-text-main uppercase tracking-widest">Message</label>
                <textarea 
                  id="message"
                  name="message" 
                  required 
                  minLength={20}
                  rows={6}
                  placeholder="Write your message here..."
                  className="w-full p-4 bg-warm border border-border rounded-xl focus:outline-none focus:border-accent transition-colors resize-none"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-primary text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-primary-light transition-all shadow-hero"
              >
                Send Message <Send size={20} />
              </button>
            </form>
          </div>

          {/* Section 3 — Info Box */}
          <div className="bg-primary-pale rounded-2xl p-8 text-center border border-primary/10">
            <div className="flex justify-center mb-4 text-primary">
              <Mail size={32} />
            </div>
            <p className="text-lg text-primary font-medium">
              Prefer email? Write to us at: <a href="mailto:contact@toolsvault.com" className="font-bold underline decoration-accent/30 underline-offset-4">contact@toolsvault.com</a>
            </p>
          </div>

          {/* Section 4 — Small SEO text */}
          <footer className="text-center pt-16 mt-12 border-t border-border/50">
            <p className="text-sm text-text-muted italic">
              Contact the team behind PetSecure AI — a free pet insurance cost estimator for USA.
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
};
