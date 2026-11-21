import React from 'react';
import { Check, CheckCircle, ShieldCheck } from 'lucide-react';

export default function Pricing({ onOpenAuth }) {
  return (
    <section id="pricing" className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-emerald-700 font-bold text-xs uppercase tracking-wider bg-emerald-100/70 px-3 py-1 rounded-full">
            মেম্বারশিপ প্যাকেজ
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900">
            সাশ্রয়ী মূল্যে সেরা প্রস্তুতি নিশ্চিত করুন
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            বিকাশ ও নগদে এক ক্লিকে ইনস্ট্যান্ট অ্যাক্টিভেশন। কোনো লুকানো চার্জ নেই।
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {/* Package 1: SSC Pro */}
          <div className="bg-white rounded-3xl border border-slate-200 p-7 flex flex-col justify-between hover:shadow-xl transition-all relative">
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full">
                  এসএসসি শিক্ষার্থীদের জন্য
                </span>
                <span className="text-xs font-bold text-amber-700 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded">
                  ৩৩% ছাড়
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900">এসএসসি প্রো (SSC Pro)</h3>
                <p className="text-xs text-slate-500 mt-1">
                  বোর্ড ফাইনাল ও সকল বিষয়ের পূর্ণাঙ্গ অধ্যায়ভিত্তিক প্রস্তুতি
                </p>
              </div>

              <div className="flex items-baseline gap-2">
                <span className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-mono">
                  ৳২,৩৯০
                </span>
                <span className="text-sm text-slate-400 font-medium">/ বছর</span>
              </div>

              <ul className="space-y-3 text-xs sm:text-sm text-slate-600 border-t border-slate-100 pt-5">
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>সকল বিষয়ের অধ্যায়ভিত্তিক MCQ ও CQ প্র্যাকটিস</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>বোর্ড পরীক্ষার অনুরূপ লাইভ মডেল টেস্ট</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>পাঠ্যবই পৃষ্ঠা রেফারেন্সসহ সমাধান</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>স্বয়ংক্রিয় ভুল খাতা ও দুর্বলতা ট্র্যাকিং</span>
                </li>
              </ul>
            </div>

            <div className="pt-8">
              <button
                onClick={onOpenAuth}
                className="w-full py-3 bg-white hover:bg-emerald-50 text-emerald-700 font-bold border-2 border-emerald-600 rounded-xl transition"
              >
                এসএসসি প্রো শুরু করুন
              </button>
            </div>
          </div>

          {/* Package 2: All-Access Membership (Featured) */}
          <div className="bg-gradient-to-b from-emerald-800 to-emerald-950 text-white rounded-3xl p-7 flex flex-col justify-between shadow-2xl relative md:-translate-y-3 border-2 border-emerald-400">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-amber-400 text-slate-950 text-xs font-black px-4 py-1 rounded-full uppercase tracking-wider shadow-md">
              মেগা সেভার — সবচেয়ে জনপ্রিয়!
            </div>

            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-emerald-200 bg-emerald-900/80 px-3 py-1 rounded-full border border-emerald-700">
                  অল-ইন-ওয়ান মেম্বারশিপ
                </span>
                <span className="text-xs font-bold text-amber-300 bg-amber-950/80 border border-amber-600 px-2 py-0.5 rounded">
                  ৫০% ছাড়
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white">অল-অ্যাক্সেস মেম্বারশিপ</h3>
                <p className="text-xs text-emerald-200 mt-1">
                  বিসিএস, ব্যাংক জব, প্রাইমারি, ভর্তি ও সকল মডেল টেস্ট আনলিমিটেড
                </p>
              </div>

              <div className="flex items-baseline gap-2">
                <span className="text-4xl sm:text-5xl font-extrabold text-amber-300 font-mono">
                  ৳৯৯৯
                </span>
                <span className="text-sm text-emerald-300 line-through">৳১,৯৯৯</span>
                <span className="text-sm text-emerald-200 font-medium">/ বছর</span>
              </div>

              <ul className="space-y-3 text-xs sm:text-sm text-emerald-100 border-t border-emerald-700/60 pt-5">
                <li className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-300 shrink-0" />
                  <span>৩০,০০০+ প্রশ্নব্যাংকে সম্পূর্ণ আনলিমিটেড অ্যাক্সেস</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-300 shrink-0" />
                  <span>সকল লাইভ মডেল টেস্ট এবং আর্কাইভ পরীক্ষা</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-300 shrink-0" />
                  <span>অ্যাক্টিভ রিকল ও স্বয়ংক্রিয় ভুল খাতা</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-300 shrink-0" />
                  <span>২৪/৭ এআই শিক্ষক ইনস্ট্যান্ট সমাধান</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-300 shrink-0" />
                  <span>প্রিন্ট-রেডি পিডিএফ ও ওএমআর শিট ডাউনলোড</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-300 shrink-0" />
                  <span>জাতীয় লিডারবোর্ড ও মেধা পুরস্কার পুলে অন্তর্ভুক্তি</span>
                </li>
              </ul>
            </div>

            <div className="pt-8">
              <button
                onClick={onOpenAuth}
                className="w-full py-3.5 bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-200 text-slate-950 font-black rounded-xl shadow-lg transition-transform hover:scale-[1.02]"
              >
                এখনই মেম্বারশিপ চালু করুন
              </button>
            </div>
          </div>

          {/* Package 3: HSC Pro */}
          <div className="bg-white rounded-3xl border border-slate-200 p-7 flex flex-col justify-between hover:shadow-xl transition-all relative">
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full">
                  এইচএসসি শিক্ষার্থীদের জন্য
                </span>
                <span className="text-xs font-bold text-amber-700 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded">
                  ৩৩% ছাড়
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900">এইচএসসি প্রো (HSC Pro)</h3>
                <p className="text-xs text-slate-500 mt-1">
                  বোর্ড ফাইনাল ও বিশ্ববিদ্যালয় ভর্তির প্রাথমিক ফাউন্ডেশন
                </p>
              </div>

              <div className="flex items-baseline gap-2">
                <span className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-mono">
                  ৳৩,৯৯০
                </span>
                <span className="text-sm text-slate-400 font-medium">/ বছর</span>
              </div>

              <ul className="space-y-3 text-xs sm:text-sm text-slate-600 border-t border-slate-100 pt-5">
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>বিজ্ঞান, মানবিক ও বাণিজ্য শাখার টেস্ট সিরিজ</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>বিগত ১০ বছরের সকল বোর্ড প্রশ্ন সমাধান</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>বিশ্ববিদ্যালয় ভর্তি স্ট্যান্ডার্ড স্পেশাল মডেল টেস্ট</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>ব্যক্তিগত মেন্টরিং ও অ্যানালিটিক্স রিপোর্ট</span>
                </li>
              </ul>
            </div>

            <div className="pt-8">
              <button
                onClick={onOpenAuth}
                className="w-full py-3 bg-white hover:bg-emerald-50 text-emerald-700 font-bold border-2 border-emerald-600 rounded-xl transition"
              >
                এইচএসসি প্রো শুরু করুন
              </button>
            </div>
          </div>
        </div>

        {/* Payment Method Banner */}
        <div className="mt-12 bg-white rounded-2xl border border-slate-200 p-5 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-slate-800">১০০% নিরাপদ ও ইনস্ট্যান্ট পেমেন্ট গেটওয়ে</p>
              <p className="text-xs text-slate-500">বিকাশ এবং নগদের মাধ্যমে ২ মিনিটে অ্যাক্টিভেশন সম্পন্ন হয়</p>
            </div>
          </div>
          <div className="flex items-center gap-4 text-xs font-semibold text-slate-600">
            <span className="bg-pink-50 text-pink-700 border border-pink-200 px-3 py-1.5 rounded-lg">
              bKash বিকাশ
            </span>
            <span className="bg-orange-50 text-orange-700 border border-orange-200 px-3 py-1.5 rounded-lg">
              Nagad নগদ
            </span>
            <span className="bg-slate-100 text-slate-700 border border-slate-200 px-3 py-1.5 rounded-lg">
              ভিসা ও মাস্টারকার্ড
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
