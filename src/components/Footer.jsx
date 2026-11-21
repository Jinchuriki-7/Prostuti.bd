import React from 'react';
import { BookOpen } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 text-xs sm:text-sm border-t border-slate-800 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-12 border-b border-slate-800">
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center text-white">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xl font-bold text-white tracking-tight">Prostutibd</span>
                <span className="text-[11px] text-emerald-400 block font-medium">প্রস্তুতি বিডি</span>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              বিসিএস, বিভিন্ন সরকারি-বেসরকারি চাকরির পরীক্ষা, বিশ্ববিদ্যালয় ভর্তি ও অ্যাকাডেমিক পরীক্ষার নির্ভুল প্রস্তুতির আধুনিক অনলাইন প্ল্যাটফর্ম।
            </p>
            <div className="space-y-1 text-xs text-slate-300">
              <p>
                <strong>সাপোর্ট ইমেইল:</strong>{' '}
                <a href="mailto:support@prostutibd.com" className="text-emerald-400 hover:underline">
                  support@prostutibd.com
                </a>
              </p>
              <p className="text-slate-400">ঢাকা, বাংলাদেশ</p>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm">কুইক লিংক</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#home" className="hover:text-emerald-400 transition">হোম পেজ</a></li>
              <li><a href="#categories" className="hover:text-emerald-400 transition">পরীক্ষাসমূহ</a></li>
              <li><a href="#features" className="hover:text-emerald-400 transition">বিশেষ ফিচার</a></li>
              <li><a href="#pricing" className="hover:text-emerald-400 transition">প্যাকেজ ও মেম্বারশিপ</a></li>
              <li><a href="#faq" className="hover:text-emerald-400 transition">প্রশ্নোত্তর</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm">পরীক্ষা প্রস্তুতি</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#categories" className="hover:text-emerald-400 transition">বিসিএস প্রিলিমিনারি ও লিখিত</a></li>
              <li><a href="#categories" className="hover:text-emerald-400 transition">বাংলাদেশ ব্যাংক ও সমন্বিত ব্যাংক</a></li>
              <li><a href="#categories" className="hover:text-emerald-400 transition">প্রাথমিক সহকারী শিক্ষক নিয়োগ</a></li>
              <li><a href="#categories" className="hover:text-emerald-400 transition">১৮তম NTRCA শিক্ষক নিবন্ধন</a></li>
              <li><a href="#categories" className="hover:text-emerald-400 transition">বিশ্ববিদ্যালয় ভর্তি পরীক্ষা</a></li>
              <li><a href="#categories" className="hover:text-emerald-400 transition">এসএসসি ও এইচএসসি বোর্ড ফাইনাল</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm">পলিসি ও নীতিমালা</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#" className="hover:text-emerald-400 transition">ব্যবহারের শর্তাবলী (Terms)</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition">গোপনীয়তা নীতিমালা (Privacy)</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition">রিফান্ড পলিসি (Refund)</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition">পেমেন্ট নিরাপত্তা</a></li>
              <li><a href="mailto:support@prostutibd.com" className="hover:text-emerald-400 transition">হেল্প ও সাপোর্ট সেন্টার</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 Prostuti BD (prostutibd.com). সর্বস্বত্ব সংরক্ষিত।</p>
          <div className="flex items-center gap-4 text-slate-400">
            <span>Bangladeshi Educational Excellence</span>
            <span>•</span>
            <span className="text-emerald-500 font-medium">Verified Platform</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
