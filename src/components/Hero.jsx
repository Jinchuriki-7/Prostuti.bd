import React, { useState } from 'react';
import { Sparkles, Play, ArrowRight, Clock, RefreshCw, Brain, CheckCircle, AlertCircle, BookOpen } from 'lucide-react';

export default function Hero({ onOpenAuth }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);

  return (
    <section id="home" className="relative overflow-hidden pt-8 pb-16 lg:pt-16 lg:pb-24 bg-gradient-to-b from-emerald-50/50 via-white to-slate-50">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-r from-emerald-200/20 via-teal-200/20 to-green-100/30 blur-3xl -z-10 rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/80 border border-emerald-300 text-emerald-800 text-xs sm:text-sm font-semibold">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span>বাংলাদেশের বিশ্বস্ত ডিজিটাল এক্সাম প্ল্যাটফর্ম</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              বিসিএস, ভর্তি ও অ্যাকাডেমিক পরীক্ষার{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 to-teal-600">
                নির্ভুল প্রস্তুতি
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              লাইভ সার্ভার-টাইমার মডেল টেস্ট, ৩০,০০০+ পাঠ্যবই রেফারেন্সযুক্ত প্রশ্নব্যাংক, স্বয়ংক্রিয় ভুল খাতা এবং ২৪/৭ এআই শিক্ষক সহায়তায় নিজের প্রস্তুতিকে করুন সুদৃঢ়।
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onOpenAuth}
                className="w-full sm:w-auto px-7 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-lg shadow-emerald-700/25 hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 group"
              >
                <Play className="w-4 h-4 fill-white" />
                <span>ফ্রি মডেল টেস্ট দিন</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href="#categories"
                className="w-full sm:w-auto px-6 py-3.5 bg-white hover:bg-slate-50 text-slate-700 font-semibold border border-slate-300 rounded-xl shadow-xs hover:shadow-sm transition-all text-center"
              >
                রুটিন ও সিলেবাস দেখুন
              </a>
            </div>

            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 text-left">
              <div className="flex items-center gap-2.5 p-2.5 rounded-lg bg-white border border-slate-200/80 shadow-xs">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-700 shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h2 className="text-xs font-bold text-slate-800">সার্ভার টাইমার</h2>
                  <p className="text-[11px] text-slate-500">আসল পরীক্ষার পরিবেশ</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-2.5 rounded-lg bg-white border border-slate-200/80 shadow-xs">
                <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center text-amber-700 shrink-0">
                  <RefreshCw className="w-4 h-4" />
                </div>
                <div>
                  <h2 className="text-xs font-bold text-slate-800">স্বয়ংক্রিয় ভুল খাতা</h2>
                  <p className="text-[11px] text-slate-500">ভুল সংশোধন রিভিশন</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-2.5 rounded-lg bg-white border border-slate-200/80 shadow-xs col-span-2 sm:col-span-1">
                <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center text-blue-700 shrink-0">
                  <Brain className="w-4 h-4" />
                </div>
                <div>
                  <h2 className="text-xs font-bold text-slate-800">২৪/৭ এআই শিক্ষক</h2>
                  <p className="text-[11px] text-slate-500">ধাপে ধাপে সমাধান</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Interactive Exam Simulator Card */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden transition-all hover:shadow-2xl">
              <div className="bg-slate-900 text-white p-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                    লাইভ এক্সাম ডেমো
                  </span>
                </div>
                <div className="flex items-center gap-1.5 bg-slate-800 px-2.5 py-1 rounded-md text-emerald-400 font-mono text-xs">
                  <Clock className="w-3.5 h-3.5" />
                  <span>00:44:12</span>
                </div>
              </div>

              <div className="px-5 py-3 bg-emerald-50 border-b border-emerald-100 flex items-center justify-between text-xs text-slate-600">
                <span className="font-semibold text-emerald-900">৪৭তম বিসিএস লাইভ প্রিলিমিনারি</span>
                <span className="bg-emerald-200/70 text-emerald-900 font-medium px-2 py-0.5 rounded">
                  নেগেটিভ: -০.২৫
                </span>
              </div>

              <div className="p-5 space-y-4">
                <div className="flex items-center justify-between text-xs text-slate-500 border-b border-slate-100 pb-2">
                  <span className="font-medium text-emerald-700">বিষয়: বাংলা ভাষা ও সাহিত্য</span>
                  <span>প্রশ্ন ১৮ / ২০০</span>
                </div>

                <p className="text-slate-800 font-semibold text-sm sm:text-base leading-snug">
                  'চৌহদ্দি' শব্দটি কোন দুটি ভাষার শব্দের সমন্বয়ে গঠিত হয়েছে?
                </p>

                <div className="space-y-2 pt-1">
                  {[
                    { id: 'A', text: 'ফারসি + আরবি' },
                    { id: 'B', text: 'সংস্কৃত + ফারসি' },
                    { id: 'C', text: 'আরবি + ফারসি' },
                    { id: 'D', text: 'বাংলা + পর্তুগিজ' },
                  ].map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => {
                        setSelectedOption(opt.id);
                        setShowExplanation(true);
                      }}
                      className={`w-full text-left p-3 rounded-xl border text-sm font-medium transition flex items-center justify-between ${
                        selectedOption === opt.id
                          ? opt.id === 'A'
                            ? 'border-emerald-500 bg-emerald-50 text-emerald-900'
                            : 'border-rose-400 bg-rose-50 text-rose-900'
                          : 'border-slate-200 hover:border-emerald-300 hover:bg-slate-50 text-slate-700'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <span
                          className={`w-6 h-6 rounded-full text-xs flex items-center justify-center font-bold ${
                            selectedOption === opt.id
                              ? opt.id === 'A'
                                ? 'bg-emerald-600 text-white'
                                : 'bg-rose-500 text-white'
                              : 'bg-slate-100 text-slate-600'
                          }`}
                        >
                          {opt.id}
                        </span>
                        <span>{opt.text}</span>
                      </div>
                      {selectedOption === opt.id && (
                        opt.id === 'A' ? (
                          <CheckCircle className="w-5 h-5 text-emerald-600" />
                        ) : (
                          <AlertCircle className="w-5 h-5 text-rose-500" />
                        )
                      )}
                    </button>
                  ))}
                </div>

                {showExplanation ? (
                  <div className="p-3 bg-emerald-50/80 rounded-xl border border-emerald-200 text-xs space-y-1.5 animate-fadeIn">
                    <div className="flex items-center gap-1.5 font-bold text-emerald-900">
                      <CheckCircle className="w-4 h-4 text-emerald-600" />
                      <span>সঠিক উত্তর: (ক) ফারসি + আরবি</span>
                    </div>
                    <p className="text-slate-600 leading-relaxed">
                      <strong className="text-slate-800">ব্যাখ্যা:</strong> ফারসি 'চৌ' (চার) এবং আরবি 'হদ্দ' (সীমা) যুক্ত হয়ে মিশ্র শব্দ 'চৌহদ্দি' গঠিত হয়েছে।
                    </p>
                    <div className="text-[11px] text-emerald-800 font-medium pt-1 border-t border-emerald-200/60 flex items-center gap-1">
                      <BookOpen className="w-3.5 h-3.5 text-emerald-600" />
                      <span>রেফারেন্স: নবম-দশম শ্রেণির বাংলা ব্যাকরণ ও নির্মিতি (পৃষ্ঠা নম্বর: ৩৬)</span>
                    </div>
                  </div>
                ) : (
                  <p className="text-[11px] text-slate-400 text-center italic">
                    সঠিক উত্তর ও পাঠ্যবই রেফারেন্স দেখতে যেকোনো অপশনে ক্লিক করুন
                  </p>
                )}
              </div>

              <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-500 font-medium">লাইভ র‍্যাঙ্কিং সক্রিয়</span>
                <button
                  onClick={onOpenAuth}
                  className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-lg shadow-sm transition"
                >
                  সম্পূর্ণ মডেল টেস্ট শুরু করুন
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
