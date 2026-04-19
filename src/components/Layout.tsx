import React from 'react';
import { Link } from 'react-router-dom';
import { PawPrint } from 'lucide-react';

export const Navbar = () => (
  <nav className="bg-surface/95 backdrop-blur-md border-b border-border px-6 sticky top-0 z-50 h-[66px] flex items-center">
    <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
      <Link to="/" className="flex items-center gap-2 text-primary no-underline group">
        <PawPrint className="w-6 h-6 transform group-hover:scale-110 transition-transform" />
        <span className="font-serif text-xl font-bold text-primary">PetSecure AI</span>
      </Link>
      <ul className="hidden lg:flex gap-1.5 list-none items-center">
        <li><Link to="/" className="text-[13px] font-medium text-text-muted hover:bg-primary-pale hover:text-primary px-3 py-2 rounded-lg transition-all">Estimator</Link></li>
        <li><Link to="/blog.html" className="text-[13px] font-medium text-text-muted hover:bg-primary-pale hover:text-primary px-3 py-2 rounded-lg transition-all">Blog</Link></li>
        <li><Link to="/texas.html" className="text-[13px] font-medium text-text-muted hover:bg-primary-pale hover:text-primary px-3 py-2 rounded-lg transition-all">Texas</Link></li>
        <li><Link to="/california.html" className="text-[13px] font-medium text-text-muted hover:bg-primary-pale hover:text-primary px-3 py-2 rounded-lg transition-all">California</Link></li>
        <li><Link to="/florida.html" className="text-[13px] font-medium text-text-muted hover:bg-primary-pale hover:text-primary px-3 py-2 rounded-lg transition-all">Florida</Link></li>
        <li><Link to="/new-york.html" className="text-[13px] font-medium text-text-muted hover:bg-primary-pale hover:text-primary px-3 py-2 rounded-lg transition-all">New York</Link></li>
        <li className="ml-2">
          <Link to="/#estimator" className="bg-primary text-white text-[13px] font-bold px-4 py-2 rounded-lg hover:bg-primary-light transition-colors shadow-sm">
            Free Estimate →
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);

export const Footer = () => (
  <footer className="bg-dark-surface text-white/60 border-t border-white/5 py-12 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-white font-serif text-lg font-bold">
            <PawPrint className="w-5 h-5" />
            <span>PetSecure AI</span>
          </div>
          <p className="text-sm leading-relaxed max-w-xs">
            A free tool helping US pet owners understand insurance costs before they commit. No email, no nonsense.
          </p>
        </div>
        <div>
          <h4 className="text-white text-[11px] font-bold uppercase tracking-widest mb-6">State Guides</h4>
          <ul className="space-y-3 list-none p-0">
            <li><Link to="/texas.html" className="text-sm hover:text-white transition-colors">Texas Rates</Link></li>
            <li><Link to="/california.html" className="text-sm hover:text-white transition-colors">California Rates</Link></li>
            <li><Link to="/florida.html" className="text-sm hover:text-white transition-colors">Florida Rates</Link></li>
            <li><Link to="/new-york.html" className="text-sm hover:text-white transition-colors">New York Rates</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white text-[11px] font-bold uppercase tracking-widest mb-6">Resources</h4>
          <ul className="space-y-3 list-none p-0">
            <li><Link to="/blog.html" className="text-sm hover:text-white transition-colors">Pet Insurance Blog</Link></li>
            <li><Link to="/about" className="text-sm hover:text-white transition-colors">About Tool</Link></li>
            <li><Link to="/faq" className="text-sm hover:text-white transition-colors">FAQ</Link></li>
            <li><Link to="/privacy" className="text-sm hover:text-white transition-colors">Privacy Policy</Link></li>
          </ul>
        </div>
      </div>
      <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <span className="text-xs uppercase tracking-widest font-bold">© 2026 PetSecure AI · US Pet Owners Guide</span>
        <p className="max-w-lg text-[10px] italic text-center md:text-right text-white/30 leading-normal">
          Disclaimer: Estimates are for informational purposes only. Final premiums vary by insurer. 
          We may earn a commission from linked providers. Not insurance advice.
        </p>
      </div>
    </div>
  </footer>
);
