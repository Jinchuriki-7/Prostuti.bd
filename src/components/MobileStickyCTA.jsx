import React from 'react';
import { Headphones, ArrowRight, Sparkles } from 'lucide-react';

export default function MobileStickyCTA({ onOpenAuth }) {
  const handleScrollToContact = (e) => {
    e.preventDefault();
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    } else if (onOpenAuth) {
      onOpenAuth();
    }
  };

  return (
    <div
      className="fixed bottom-0 inset-x-0 z-40 p-3 bg-white/95 backdrop-blur-md border-t border-slate-200/90 shadow-[0_-8px_25px_rgba(0,0,0,0.12)] block lg:hidden transition-transform duration-300"
      style={{ paddingBottom: 'calc(0.75rem + env(safe-area-inset-bottom, 0px))' }}
    >
      <div className="max-w-md mx-auto flex items-center gap-2.5">
        <button
          onClick={handleScrollToContact}
          className="flex-1 py-3 px-5 rounded-xl bg-gradient-to-r from-emerald-600 via-emerald-700 to-teal-700 hover:from-emerald-700 hover:to-teal-800 active:scale-[0.98] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-800/25 transition-all duration-200 group"
          aria-label="Get Free Consultation"
        >
          <div className="w-2 h-2 rounded-full bg-emerald-300 animate-ping" />
          <Headphones className="w-4 h-4 text-emerald-200" />
          <span className="tracking-wide">Get Free Consultation</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>

        <button
          onClick={onOpenAuth}
          className="py-3 px-3.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-300 rounded-xl text-xs font-semibold flex items-center justify-center shrink-0 transition"
          title="ফ্রি ট্রায়াল"
        >
          <Sparkles className="w-4 h-4 text-emerald-600" />
        </button>
      </div>
    </div>
  );
}
