import React, { useState } from 'react';
import { CheckCircle, Check, Sparkles } from 'lucide-react';

export default function FeatureSpotlight({ onOpenAuth }) {
  const [activeFeatureTab, setActiveFeatureTab] = useState('mistakes');

  return (
    <section className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-emerald-900 to-slate-900 rounded-3xl p-6 sm:p-10 text-white shadow-xl">
          <div className="max-w-3xl mb-8 space-y-2">
            <span className="text-emerald-400 font-bold text-xs uppercase tracking-wider">
              ফিচার স্পটলাইট
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold">
              কীভাবে কাজ করে ‘ভুল খাতা’ ও ‘এআই শিক্ষক’?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              নিচের ট্যাবগুলোতে ক্লিক করে দেখুন আমাদের বিশেষ প্রযুক্তি কীভাবে আপনার রিভিশন সহজ করে তোলে।
            </p>
          </div>

          <div className="flex flex-wrap gap-2 pb-6 border-b border-slate-800">
            <button
              onClick={() => setActiveFeatureTab('mistakes')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition ${
                activeFeatureTab === 'mistakes'
                  ? 'bg-emerald-500 text-white'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              স্বয়ংক্রিয় ভুল খাতা (Mistakes Log)
            </button>
            <button
              onClick={() => setActiveFeatureTab('ai')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition ${
                activeFeatureTab === 'ai'
                  ? 'bg-emerald-500 text-white'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              ২৪/৭ এআই শিক্ষক (AI Tutor)
            </button>
            <button
              onClick={() => setActiveFeatureTab('analytics')}
              className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition ${
                activeFeatureTab === 'analytics'
                  ? 'bg-emerald-500 text-white'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              দুর্বলতা অ্যানালিটিক্স
            </button>
          </div>

          <div className="pt-6">
            {activeFeatureTab === 'mistakes' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <div className="space-y-4">
                  <div className="inline-block bg-amber-500/20 text-amber-300 border border-amber-500/40 text-xs px-2.5 py-1 rounded">
                    স্মার্ট ভুল সংশোধন ইঞ্জিন
                  </div>
                  <h3 className="text-xl font-bold">ভুল উত্তরগুলো আর হারিয়ে যাবে না</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    পরীক্ষায় একটি প্রশ্নের ভুল উত্তর দিলে সাধারণত শিক্ষার্থীরা তা ভুলে যায়। Prostuti BD-র "ভুল খাতা" অ্যালগরিদম প্রতিটি ভুল স্বয়ংক্রিয়ভাবে সেভ করে এবং সেই নির্দিষ্ট অধ্যায় বা বিষয়ের ওপর বিশেষ রিভিশন টেস্ট সাজিয়ে দেয়।
                  </p>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-200">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>ভুল করা প্রশ্নের আলাদা ক্যাটাগরি তৈরি</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>পুনরায় সঠিক উত্তর দেওয়ার পর ভুল খাতা থেকে রিমুভ</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>পরীক্ষার হলের আত্মবিশ্বাস বৃদ্ধি</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-slate-950/80 rounded-xl p-5 border border-slate-800 space-y-3 font-mono text-xs text-slate-300">
                  <div className="flex items-center justify-between text-slate-400 pb-2 border-b border-slate-800">
                    <span>আমার ভুল খাতা (৮টি পেন্ডিং প্রশ্ন)</span>
                    <span className="text-amber-400">রিভিশন বাকি</span>
                  </div>
                  <div className="p-3 bg-slate-900 rounded-lg border border-red-500/30">
                    <span className="text-[11px] text-red-400 font-sans font-bold">ভুল উত্তর দেওয়া হয়েছিল:</span>
                    <p className="text-white font-sans mt-1">
                      'কার্টোগ্রাফি' (Cartography) শব্দের অর্থ কী?
                    </p>
                    <div className="text-[11px] text-emerald-400 mt-2 font-sans flex items-center gap-1">
                      <Check className="w-3.5 h-3.5" /> সঠিক উত্তর: মানচিত্র অঙ্কনবিদ্যা (Map making)
                    </div>
                  </div>
                  <button
                    onClick={onOpenAuth}
                    className="w-full py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded font-sans font-bold text-xs transition"
                  >
                    ভুল খাতা রিভিশন শুরু করুন
                  </button>
                </div>
              </div>
            )}

            {activeFeatureTab === 'ai' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <div className="space-y-4">
                  <div className="inline-block bg-blue-500/20 text-blue-300 border border-blue-500/40 text-xs px-2.5 py-1 rounded">
                    কৃত্রিম বুদ্ধিমত্তা টিউটর
                  </div>
                  <h3 className="text-xl font-bold">যেকোনো সময় যেকোনো প্রশ্নের তাৎক্ষণিক উত্তর</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    মাঝরাতে পড়তে বসে কোনো অংক বা ব্যাকরণের নিয়ম আটকে গেলে আর টিউটরের অপেক্ষা করতে হবে না। এআই শিক্ষক বোতামে চাপলেই ধাপে ধাপে ব্যাখ্যা পেয়ে যাবেন।
                  </p>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-200">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>শর্টকাট মেথড ও বেসিক নিয়ম উভয়ের ব্যাখ্যা</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>বাংলা ও ইংরেজি উভয় ভাষায় স্পষ্ট বিশ্লেষণ</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-slate-950/80 rounded-xl p-5 border border-slate-800 space-y-3 text-xs text-slate-300">
                  <div className="flex items-center gap-2 text-emerald-400 font-semibold border-b border-slate-800 pb-2">
                    <Sparkles className="w-4 h-4" />
                    <span>এআই শিক্ষক রেসপন্স ডেমো</span>
                  </div>
                  <div className="bg-slate-900 p-3 rounded-lg border border-slate-800">
                    <span className="text-slate-400">প্রশ্ন:</span> একটি দ্রব্য ৪০০ টাকায় বিক্রি করায় ২৫% লাভ হলো। ক্রয়মূল্য কত?
                  </div>
                  <div className="bg-emerald-950/40 p-3 rounded-lg border border-emerald-500/30 text-emerald-200 space-y-1">
                    <p className="font-bold text-white">ধাপে ধাপে সমাধান:</p>
                    <p>১. ২৫% লাভে বিক্রয়মূল্য = ১২৫ টাকা</p>
                    <p>২. বিক্রয়মূল্য ১২৫ টাকা হলে ক্রয়মূল্য = ১০০ টাকা</p>
                    <p>৩. বিক্রয়মূল্য ৪০০ টাকা হলে ক্রয়মূল্য = (১০০ × ৪০০) ÷ ১২৫ = <strong className="text-emerald-300">৩২০ টাকা</strong>।</p>
                  </div>
                </div>
              </div>
            )}

            {activeFeatureTab === 'analytics' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <div className="space-y-4">
                  <div className="inline-block bg-purple-500/20 text-purple-300 border border-purple-500/40 text-xs px-2.5 py-1 rounded">
                    পারফরম্যান্স ট্র্যাকার
                  </div>
                  <h3 className="text-xl font-bold">নিজের শক্তি ও দুর্বলতা জানুন স্পষ্টভাবে</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    কোন বিষয়ে আপনি বেশি সময় নিচ্ছেন এবং কোন বিষয়ে আপনার নির্ভুলতার হার কম—গ্রাফিক্যাল চার্ট দেখে সহজেই নিজের দুর্বল জায়গায় জোর দিন।
                  </p>
                </div>
                <div className="bg-slate-950/80 rounded-xl p-5 border border-slate-800 space-y-3 text-xs">
                  <div className="flex justify-between items-center text-slate-400 pb-2 border-b border-slate-800">
                    <span>বিষয়ভিত্তিক নির্ভুলতা (Accuracy)</span>
                    <span className="text-emerald-400">গড়: ৭৮%</span>
                  </div>
                  <div className="space-y-2">
                    <div>
                      <div className="flex justify-between text-[11px] mb-1">
                        <span>বাংলা ভাষা ও সাহিত্য</span>
                        <span className="text-emerald-400 font-bold">৮৮%</span>
                      </div>
                      <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-500 w-[88%]" />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-[11px] mb-1">
                        <span>ইংরেজি সাহিত্য ও গ্রামার</span>
                        <span className="text-amber-400 font-bold">৭২%</span>
                      </div>
                      <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                        <div className="h-full bg-amber-500 w-[72%]" />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-[11px] mb-1">
                        <span>গাণিতিক যুক্তি ও মানসিক দক্ষতা</span>
                        <span className="text-blue-400 font-bold">৮৪%</span>
                      </div>
                      <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-500 w-[84%]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
