import React from 'react';
import { CheckCircle, Award, Target, Users, BookOpen, ArrowRight } from 'lucide-react';

export default function WebAppShowcase({ onOpenAuth }) {
  return (
    <section id="about" className="py-16 bg-white scroll-mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-tr from-emerald-50 via-teal-50 to-white rounded-3xl border border-emerald-200/80 p-8 sm:p-12">
          {/* Top Section Header */}
          <div className="max-w-3xl mb-8 space-y-3">
            <span className="text-emerald-700 font-bold text-xs uppercase tracking-wider bg-emerald-100 px-3 py-1 rounded-full">
              আমাদের সম্পর্কে (About Us)
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 leading-snug">
              বাংলাদেশের সেরা পরীক্ষার্থীদের প্রথম পছন্দ — Prostuti BD
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              ২০২১ সালে প্রতিষ্ঠিত Prostuti BD হলো আধুনিক প্রযুক্তিনির্ভর লার্নিং ও পরীক্ষা প্ল্যাটফর্ম, যা শিক্ষার্থীদের পরীক্ষার ভয় দূর করে বাস্তবমুখী মূল্যায়নের মাধ্যমে জাতীয় পর্যায়ে সাফল্য অর্জনে সহায়তা করে।
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Highlights */}
            <div className="space-y-5">
              <div className="space-y-3 text-xs sm:text-sm text-slate-700">
                <div className="flex items-start gap-3 p-3 bg-white/80 rounded-xl border border-emerald-100">
                  <Target className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">আমাদের লক্ষ্য ও উদ্দেশ্য</h3>
                    <p className="text-slate-600 text-xs mt-0.5">
                      প্রতিটি চাকরিপ্রার্থী ও শিক্ষার্থী যেন কোনো ধরনের জটিলতা ছাড়া ঘরে বসেই জাতীয় মানের রিয়েল-টাইম মডেল টেস্টে অংশ নিতে পারেন।
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-white/80 rounded-xl border border-emerald-100">
                  <BookOpen className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">১০০% নির্ভুল প্রশ্ন ও পাঠ্যবই রেফারেন্স</h3>
                    <p className="text-slate-600 text-xs mt-0.5">
                      বিসিএস ক্যাডার ও অভিজ্ঞ শিক্ষকদের দ্বারা প্রস্তুত ৩০,০০০+ প্রশ্নব্যাংক, যেখানে প্রতিটি উত্তরের সাথে সরকারি পাঠ্যবইয়ের রেফারেন্স রয়েছে।
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-white/80 rounded-xl border border-emerald-100">
                  <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">অফলাইন ক্যাশিং ও মাল্টি-ডিভাইস সাপোর্ট</h3>
                    <p className="text-slate-600 text-xs mt-0.5">
                      মোবাইল, ট্যাবলেট কিংবা কম্পিউটার—যেকোনো ডিভাইসে কম গতির ইন্টারনেটেও বাধাহীনভাবে পরীক্ষা দেওয়ার স্মার্ট প্রযুক্তি।
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="#contact"
                  className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm rounded-xl shadow-md transition flex items-center gap-2"
                >
                  <span>পরামর্শের জন্য যোগাযোগ করুন</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <button
                  onClick={onOpenAuth}
                  className="px-6 py-3 bg-white text-slate-700 font-semibold text-xs sm:text-sm border border-slate-300 rounded-xl hover:bg-slate-50 transition"
                >
                  ফ্রি ট্রায়াল শুরু করুন
                </button>
              </div>
            </div>

            {/* Right Graphic Mockup */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-xl p-5 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-slate-300" />
                  <div className="w-3 h-3 rounded-full bg-slate-300" />
                  <div className="w-3 h-3 rounded-full bg-slate-300" />
                  <span className="text-xs text-slate-400 font-mono pl-2">prostutibd.com/about</span>
                </div>
                <span className="text-[11px] text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded">
                  Verified Platform
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 text-left">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <p className="text-[11px] text-slate-500">মোট পরীক্ষার্থী</p>
                  <p className="text-sm font-bold text-slate-800 mt-1">৫০,০০০+ সক্রিয় ইউজার</p>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <p className="text-[11px] text-slate-500">সাফল্যের হার</p>
                  <p className="text-sm font-bold text-emerald-700 mt-1">৯৪.৮% ইতিবাচক ফিডব্যাক</p>
                </div>
              </div>

              <div className="p-4 bg-emerald-50/60 rounded-xl border border-emerald-100 text-xs space-y-2">
                <div className="flex justify-between items-center text-emerald-950 font-bold">
                  <span>জাতীয় ক্যাডার ও ভর্তি র‍্যাঙ্কিং ট্র্যাকিং</span>
                  <span className="text-emerald-700">সক্রিয়</span>
                </div>
                <div className="w-full h-2 bg-emerald-200 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-600 w-[96%]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
