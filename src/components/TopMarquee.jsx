import React from 'react';
import { Clock } from 'lucide-react';

export default function TopMarquee() {
  return (
    <div className="bg-emerald-800 text-emerald-100 text-xs sm:text-sm py-2 px-4 border-b border-emerald-900/40">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="bg-emerald-500 text-white font-semibold text-[11px] px-2 py-0.5 rounded-full uppercase tracking-wider animate-pulse">
            নতুন আপডেট
          </span>
          <span className="truncate">
            📢 ৪৭তম বিসিএস, প্রাইমারি শিক্ষক নিয়োগ ও বিশ্ববিদ্যালয় ভর্তি স্পেশাল মডেল টেস্ট সিরিজ চলছে!
          </span>
        </div>
        <div className="flex items-center gap-4 text-xs">
          <span className="hidden md:inline-flex items-center gap-1 text-emerald-200">
            <Clock className="w-3.5 h-3.5" /> ২৪/৭ প্ল্যাটফর্ম সাপোর্ট
          </span>
          <a
            href="mailto:support@prostutibd.com"
            className="text-emerald-300 hover:text-white underline transition"
          >
            support@prostutibd.com
          </a>
        </div>
      </div>
    </div>
  );
}
