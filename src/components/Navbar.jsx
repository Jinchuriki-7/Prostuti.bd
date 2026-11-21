import React from 'react';
import { BookOpen, LogIn, UserPlus, Menu, X } from 'lucide-react';

export default function Navbar({ mobileMenuOpen, setMobileMenuOpen, onOpenAuth }) {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-tr from-emerald-700 to-emerald-500 flex items-center justify-center text-white shadow-md shadow-emerald-600/20 group-hover:scale-105 transition-transform">
              <BookOpen className="w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-xl sm:text-2xl font-bold tracking-tight text-emerald-800">
                  Prostutibd
                </span>
                <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-1.5 py-0.5 rounded">
                  প্রস্তুতি
                </span>
              </div>
              <span className="text-[11px] text-slate-500 hidden sm:block">
                নির্ভুল অনলাইন প্রস্তুতি প্ল্যাটফর্ম
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-700">
            <a href="#home" className="text-emerald-700 font-semibold hover:text-emerald-800 transition">
              হোম
            </a>
            <a href="#categories" className="hover:text-emerald-700 transition">
              পরীক্ষাসমূহ
            </a>
            <a href="#features" className="hover:text-emerald-700 transition">
              বিশেষ সুবিধাসমূহ
            </a>
            <a href="#pricing" className="hover:text-emerald-700 transition">
              প্যাকেজ ও মূল্য
            </a>
            <a href="#testimonials" className="hover:text-emerald-700 transition">
              মতামত
            </a>
            <a href="#faq" className="hover:text-emerald-700 transition">
              প্রশ্নোত্তর
            </a>
          </nav>

          {/* Right Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenAuth}
              className="px-4 py-2 text-sm font-medium text-emerald-700 hover:text-emerald-800 hover:bg-emerald-50 rounded-lg transition flex items-center gap-1.5"
            >
              <LogIn className="w-4 h-4" />
              লগইন
            </button>
            <button
              onClick={onOpenAuth}
              className="px-4 sm:px-5 py-2 sm:py-2.5 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 rounded-lg shadow-sm shadow-emerald-700/20 hover:shadow-md transition flex items-center gap-1.5"
            >
              <UserPlus className="w-4 h-4" />
              ফ্রি শুরু করুন
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-600 hover:text-emerald-700 hover:bg-slate-100 rounded-lg focus:outline-hidden"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <a
            href="#home"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-semibold text-emerald-700"
          >
            হোম
          </a>
          <a
            href="#categories"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-medium text-slate-700 hover:text-emerald-700"
          >
            পরীক্ষাসমূহ
          </a>
          <a
            href="#features"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-medium text-slate-700 hover:text-emerald-700"
          >
            বিশেষ সুবিধাসমূহ
          </a>
          <a
            href="#pricing"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-medium text-slate-700 hover:text-emerald-700"
          >
            প্যাকেজ ও মূল্য
          </a>
          <a
            href="#testimonials"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-medium text-slate-700 hover:text-emerald-700"
          >
            মতামত
          </a>
          <a
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-medium text-slate-700 hover:text-emerald-700"
          >
            প্রশ্নোত্তর
          </a>
          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAuth();
              }}
              className="w-full py-2.5 text-center font-medium text-emerald-700 bg-emerald-50 rounded-lg"
            >
              লগইন করুন
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAuth();
              }}
              className="w-full py-2.5 text-center font-semibold text-white bg-emerald-600 rounded-lg shadow-sm"
            >
              নতুন অ্যাকাউন্ট তৈরি করুন
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
