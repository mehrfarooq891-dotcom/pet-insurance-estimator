import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, User, Share2 } from 'lucide-react';

interface BlogLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
  tag: string;
  date: string;
  readTime: string;
}

export const BlogLayout = ({ children, title, subtitle, tag, date, readTime }: BlogLayoutProps) => {
  return (
    <article className="bg-bg min-h-screen">
      {/* Article Header */}
      <header className="bg-primary-dark pt-24 pb-32 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-[120px] -mr-48 -mb-48" />
        </div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <Link to="/blog.html" className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest mb-10 group">
            <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" /> Back to Intelligence Digest
          </Link>
          
          <div className="inline-block bg-accent/20 border border-accent/30 text-accent text-[9px] font-extrabold px-3 py-1 rounded-full uppercase tracking-[0.2em] mb-6">
            {tag}
          </div>
          
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-8 leading-tight tracking-tight">
            {title}
          </h1>
          
          <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed mb-10">
            {subtitle}
          </p>
          
          <div className="flex items-center justify-center gap-8 text-[11px] font-bold text-white/40 uppercase tracking-[0.15em] border-t border-white/10 pt-8">
            <div className="flex items-center gap-2"><Calendar className="w-3.5 h-3.5" /> {date}</div>
            <div className="flex items-center gap-2"><Clock className="w-3.5 h-3.5" /> {readTime}</div>
            <div className="flex items-center gap-2"><User className="w-3.5 h-3.5" /> By Editorial Team</div>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <div className="max-w-7xl mx-auto px-6 -mt-16 pb-24 grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12 relative z-20">
        <main className="bg-white rounded-3xl p-8 md:p-16 shadow-hero border border-border/50">
          <div className="prose prose-slate max-w-none prose-headings:font-serif prose-headings:text-text-main prose-p:text-[15px] prose-p:leading-relaxed prose-p:text-text-muted prose-strong:text-text-main">
            {children}
          </div>
          
          <div className="mt-16 pt-8 border-t border-border flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="text-xs font-bold text-text-muted uppercase tracking-widest">Share this report:</span>
              <button className="p-2 bg-warm rounded-full hover:bg-primary-pale hover:text-primary transition-colors"><Share2 className="w-4 h-4" /></button>
            </div>
            <Link to="/#estimator" className="text-xs font-bold text-primary underline underline-offset-4 uppercase tracking-widest">
              Run Free Estimate →
            </Link>
          </div>
        </main>

        <aside className="space-y-8">
          <div className="bg-surface rounded-2xl border border-border p-8 sticky top-24">
            <h4 className="text-[10px] font-extrabold text-primary uppercase tracking-widest mb-6">Estimator Tool</h4>
            <p className="text-sm text-text-main font-serif font-bold leading-snug mb-6">
              Ready to see your estimated monthly premium?
            </p>
            <p className="text-xs text-text-muted leading-relaxed mb-8">
              No email required. Takes 30 seconds to run our 2026 cost model.
            </p>
            <Link to="/#estimator" className="block w-full bg-primary text-white text-center py-4 rounded-xl font-bold text-[13px] hover:bg-primary-dark transition-all shadow-lg hover:shadow-primary/20">
              Start Free Estimate
            </Link>
          </div>
        </aside>
      </div>
    </article>
  );
};
