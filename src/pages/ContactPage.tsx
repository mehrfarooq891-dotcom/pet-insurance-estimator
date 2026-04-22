import React from 'react';
import { Mail, MessageSquare, Send } from 'lucide-react';

export const ContactPage = () => {
  return (
    <div className="bg-bg min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary-pale text-primary px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase mb-6">
            Get In Touch
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-text-main mb-6">
            Have a <span className="text-accent italic">Tool Suggestion?</span>
          </h1>
          <p className="text-text-muted max-w-xl mx-auto leading-relaxed">
            We're always looking for new financial problems to solve. Send us your ideas or feedback.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_350px] gap-12">
          {/* Contact Form Placeholder */}
          <div className="bg-white rounded-3xl border border-border p-8 md:p-12 shadow-hero">
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-text-muted uppercase tracking-widest">Full Name</label>
                  <input type="text" placeholder="John Doe" className="w-full p-4 bg-warm border border-border rounded-xl focus:outline-none focus:border-accent transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-text-muted uppercase tracking-widest">Email Address</label>
                  <input type="email" placeholder="john@example.com" className="w-full p-4 bg-warm border border-border rounded-xl focus:outline-none focus:border-accent transition-colors" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-text-muted uppercase tracking-widest">Message</label>
                <textarea rows={6} placeholder="Tell us about a tool you need..." className="w-full p-4 bg-warm border border-border rounded-xl focus:outline-none focus:border-accent transition-colors resize-none"></textarea>
              </div>
              <button type="button" className="w-full bg-primary text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-primary-light transition-all shadow-hero">
                Send Message <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-primary text-white p-8 rounded-3xl shadow-hero relative overflow-hidden">
               <div className="absolute -top-12 -right-12 w-32 h-32 bg-accent/20 rounded-full blur-3xl pointer-events-none" />
               <h3 className="font-serif font-bold text-xl mb-6 flex items-center gap-3">
                 <MessageSquare className="w-5 h-5 text-accent" /> Reach Out
               </h3>
               <div className="space-y-6">
                 <div className="group">
                    <p className="text-[10px] font-bold text-white/50 uppercase tracking-widest mb-1">Email Us</p>
                    <a href="mailto:hello@toolsvault.ai" className="text-white hover:text-accent font-bold transition-colors">hello@toolsvault.ai</a>
                 </div>
                 <div>
                    <p className="text-[10px] font-bold text-white/50 uppercase tracking-widest mb-1">Social</p>
                    <div className="flex gap-4 mt-2">
                      <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-white/20 cursor-pointer transition-colors">
                        <span className="font-bold text-sm">X</span>
                      </div>
                      <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center hover:bg-white/20 cursor-pointer transition-colors">
                        <span className="font-bold text-sm">LN</span>
                      </div>
                    </div>
                 </div>
               </div>
            </div>

            <div className="bg-warm rounded-3xl p-8 border border-border">
              <h4 className="font-bold text-text-main mb-3">Response Time</h4>
              <p className="text-sm text-text-muted leading-relaxed">
                We're a small team building in public. We typically respond within <span className="text-primary font-bold">48 hours</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
