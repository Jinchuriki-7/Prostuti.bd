import React, { useState } from 'react';
import { FileText, Clock, ShieldCheck, Users, ChevronRight, ArrowRight, Info, Mail, Compass } from 'lucide-react';

export default function ExamCategories({ onOpenAuth }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'সবগুলো পরীক্ষা' },
    { id: 'bcs', name: 'বিসিএস (BCS)' },
    { id: 'bank', name: 'ব্যাংক জব' },
    { id: 'primary', name: 'প্রাথমিক ও শিক্ষক নিবন্ধন' },
    { id: 'admission', name: 'বিশ্ববিদ্যালয় ভর্তি' },
    { id: 'academic', name: 'এসএসসি ও এইচএসসি' },
  ];

  const examCards = [
    {
      id: 1,
      category: 'bcs',
      badge: 'সর্বোচ্চ অংশগ্রহণকারী',
      title: '৪৭তম বিসিএস প্রিলিমিনারি পূর্ণাঙ্গ লাইভ মডেল টেস্ট সিরিজ',
      subtitle: 'বিপিএসসি সিলেবাসভিত্তিক ২০০ নম্বরের পূর্ণাঙ্গ মডেল টেস্ট',
      questions: '২০০ প্রশ্ন',
      time: '১২০ মিনিট',
      negative: 'নেগেটিভ মার্কিং -০.২৫',
      participants: '১২,৪৫০+ পরীক্ষার্থী',
      tag: 'বিসিএস প্রিলি',
    },
    {
      id: 2,
      category: 'bank',
      badge: 'নতুন ব্যাচ',
      title: 'বাংলাদেশ ব্যাংক ও সমন্বিত ৯ ব্যাংক অফিসার নিয়োগ টেস্ট',
      subtitle: 'গণিত, ইংরেজি ও সাধারণ জ্ঞানের ওপর স্পেশাল এক্সাম সিরিজ',
      questions: '১০০ প্রশ্ন',
      time: '৬০ মিনিট',
      negative: 'নেগেটিভ মার্কিং -০.২৫',
      participants: '৮,২০০+ পরীক্ষার্থী',
      tag: 'ব্যাংক নিয়োগ',
    },
    {
      id: 3,
      category: 'primary',
      badge: 'জনপ্রিয়',
      title: 'প্রাথমিক সহকারী শিক্ষক নিয়োগ ২০২৬ চূড়ান্ত মডেল টেস্ট',
      subtitle: 'ডিপিই নির্ধারিত মানসম্মত প্রশ্নব্যাংক ও বিষয়ভিত্তিক টেস্ট',
      questions: '৮০ প্রশ্ন',
      time: '৬০ মিনিট',
      negative: 'নেগেটিভ মার্কিং -০.২৫',
      participants: '১৫,৬০০+ পরীক্ষার্থী',
      tag: 'প্রাইমারি নিয়োগ',
    },
    {
      id: 4,
      category: 'admission',
      badge: 'ভর্তি যুদ্ধ',
      title: 'ঢাকা বিশ্ববিদ্যালয় ‘ক’ ও ‘খ’ ইউনিট ভর্তি মডেল টেস্ট ২০২৬',
      subtitle: 'ঢাবি প্রশ্নপদ্ধতির অনুরূপ MCQ এবং ব্যাখ্যাভিত্তিক প্রস্তুতি',
      questions: '১০০ প্রশ্ন',
      time: '৯০ মিনিট',
      negative: 'নেগেটিভ মার্কিং -০.২৫',
      participants: '৯,৩৫০+ পরীক্ষার্থী',
      tag: 'ঢাবি ভর্তি',
    },
    {
      id: 5,
      category: 'admission',
      badge: 'মেডিকেল স্পেশাল',
      title: 'মেডিকেল ও ডেন্টাল ভর্তি পরীক্ষা (MBBS/BDS) লাইভ টেস্ট',
      subtitle: 'পদার্থ, রসায়ন, জীববিজ্ঞান ও সাধারণ জ্ঞান সম্পূর্ণ সিলেবাস',
      questions: '১০০ প্রশ্ন',
      time: '৬০ মিনিট',
      negative: 'নেগেটিভ মার্কিং -০.২৫',
      participants: '৭,৫০০+ পরীক্ষার্থী',
      tag: 'মেডিকেল ভর্তি',
    },
    {
      id: 6,
      category: 'academic',
      badge: 'বোর্ড স্ট্যান্ডার্ড',
      title: 'এইচএসসি ও এসএসসি বোর্ড ফাইনাল পূর্ণাঙ্গ MCQ টেস্ট সিরিজ',
      subtitle: 'মূল পাঠ্যবইয়ের প্রতিটি অধ্যায়ের পৃষ্ঠা রেফারেন্সসহ সমাধান',
      questions: '৩০ প্রশ্ন',
      time: '৩০ মিনিট',
      negative: 'ভুল সংশোধন সুবিধা',
      participants: '১৪,১০০+ শিক্ষার্থী',
      tag: 'বোর্ড ফাইনাল',
    },
  ];

  const filteredExams =
    activeCategory === 'all'
      ? examCards
      : examCards.filter((card) => card.category === activeCategory);

  return (
    <section id="services" className="py-16 bg-white relative w-full overflow-hidden">
      {/* Anchor for backwards compatibility */}
      <div id="categories" className="absolute -top-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <span className="text-emerald-700 font-bold text-xs uppercase tracking-wider bg-emerald-100/70 px-3 py-1 rounded-full">
            আমাদের সার্ভিস ও পরীক্ষা প্রস্তুতি ট্র্যাক
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900">
            যেসব পরীক্ষার পূর্ণাঙ্গ প্রস্তুতি নিতে পারবেন
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            আপনার লক্ষ্য নির্বাচন করুন এবং বিশেষজ্ঞদের তৈরি রুটিন অনুযায়ী বিষয়ভিত্তিক ও পূর্ণাঙ্গ মডেল টেস্টে অংশ নিন।
          </p>
        </div>

        {/* Category Filters */}
        <div className="w-full max-w-full overflow-x-auto pb-4 mb-8 no-scrollbar flex items-center justify-start sm:justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap shrink-0 transition-all ${
                activeCategory === cat.id
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-700/20'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Exam Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredExams.map((exam) => (
            <div
              key={exam.id}
              className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between hover:border-emerald-300 hover:shadow-xl transition-all group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="bg-emerald-50 text-emerald-800 text-xs font-bold px-2.5 py-1 rounded-md border border-emerald-200">
                    {exam.tag}
                  </span>
                  <span className="text-[11px] font-semibold text-amber-700 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-full">
                    {exam.badge}
                  </span>
                </div>

                <div>
                  <h3 className="font-bold text-base sm:text-lg text-slate-900 group-hover:text-emerald-700 transition">
                    {exam.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed">
                    {exam.subtitle}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs text-slate-600 bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <div className="flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{exam.questions}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{exam.time}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
                    <span>{exam.negative}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-blue-600" />
                    <span>{exam.participants}</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100 mt-6 flex items-center justify-between">
                <span className="text-xs font-semibold text-emerald-700">ফ্রি অ্যাক্সেস উপলব্ধ</span>
                <button
                  onClick={onOpenAuth}
                  className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-lg shadow-xs hover:shadow transition flex items-center gap-1"
                >
                  টেস্টে অংশ নিন
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* ========================================================================= */}
        {/* TWO INTERNAL NAVIGATION LINKS (Services -> About Us & Services -> Contact Us) */}
        {/* ========================================================================= */}
        <div className="mt-12 p-5 sm:p-8 bg-gradient-to-r from-emerald-50/90 via-teal-50/70 to-emerald-50/90 border border-emerald-200/90 rounded-2xl sm:rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs w-full max-w-full overflow-hidden">
          <div className="space-y-1.5 text-center md:text-left min-w-0">
            <div className="inline-flex items-center gap-2 text-emerald-900 font-bold text-sm sm:text-base">
              <Compass className="w-5 h-5 text-emerald-600 shrink-0" />
              <span>সার্ভিস সম্পর্কিত বিস্তারিত ও সরাসরি সহায়তা চান?</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl">
              আমাদের শিক্ষণ পদ্ধতি ও প্ল্যাটফর্ম সম্পর্কে বিস্তারিত জানতে পড়ুন অথবা সরাসরি বিশেষজ্ঞ মেন্টরদের সাথে পরামর্শের জন্য যোগাযোগ করুন।
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto shrink-0">
            {/* Internal Link 1: Services -> About Us */}
            <a
              href="#about"
              className="w-full sm:w-auto px-5 py-2.5 bg-white hover:bg-emerald-50/80 text-emerald-800 font-semibold text-xs sm:text-sm border border-emerald-300 rounded-xl transition-all shadow-xs hover:shadow flex items-center justify-center gap-2 group"
              id="internal-link-about"
            >
              <Info className="w-4 h-4 text-emerald-600" />
              <span>আমাদের সম্পর্কে (About Us)</span>
              <ArrowRight className="w-4 h-4 text-emerald-600 group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Internal Link 2: Services -> Contact Us */}
            <a
              href="#contact"
              className="w-full sm:w-auto px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-semibold text-xs sm:text-sm rounded-xl transition-all shadow-md shadow-emerald-700/20 hover:shadow-lg flex items-center justify-center gap-2 group"
              id="internal-link-contact"
            >
              <Mail className="w-4 h-4 text-white" />
              <span>যোগাযোগ করুন (Contact Us)</span>
              <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
