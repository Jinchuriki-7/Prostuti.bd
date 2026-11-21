import React from 'react';
import { Clock, RefreshCw, Brain, BookOpen, BarChart2, Printer } from 'lucide-react';

export default function Features() {
  return (
    <section id="features" className="py-16 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-emerald-700 font-bold text-xs uppercase tracking-wider bg-emerald-100/70 px-3 py-1 rounded-full">
            অনন্য সুবিধাসমূহ
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900">
            যে প্রযুক্তি আপনার সফলতাকে নিশ্চিত করবে
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            গতানুগতিক পড়ার বাইরে ডিজিটাল লার্নিং ও পরীক্ষা পদ্ধতির মাধ্যমে যেকোনো প্রতিযোগিতামূলক পরীক্ষায় নিজেকে এগিয়ে রাখুন।
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-3 hover:shadow-lg transition">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
              <Clock className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg text-slate-900">লাইভ সার্ভার-টাইমার মডেল টেস্ট</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              নির্দিষ্ট রুটিন অনুযায়ী লাইভ পরীক্ষা অনুষ্ঠিত হয়। সার্ভার টাইমার আসল পরীক্ষার মতো চাপের মধ্যে সঠিক সময় ব্যবস্থাপনার নিখুঁত দক্ষতা তৈরি করে।
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-3 hover:shadow-lg transition">
            <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center">
              <RefreshCw className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg text-slate-900">স্বয়ংক্রিয় ভুল খাতা (Mistakes Log)</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              ভুল করা প্রশ্নগুলো স্বয়ংক্রিয়ভাবে একটি বিশেষ ড্যাশবোর্ডে জমা থাকে। আপনি ভুল সংশোধন না করা পর্যন্ত সিস্টেম আপনাকে পুনরায় প্র্যাকটিস করায়।
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-3 hover:shadow-lg transition">
            <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center">
              <Brain className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg text-slate-900">২৪/৭ এআই শিক্ষক সহায়তা</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              জটিল গণিত, ইংরেজি ব্যাকরণ বা বিজ্ঞানের দুরূহ কনসেপ্টের ওপর তাৎক্ষণিক ধাপে ধাপে বিস্তারিত সমাধান দেবে আমাদের কৃত্রিম বুদ্ধিমত্তা চালিত শিক্ষক।
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-3 hover:shadow-lg transition">
            <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center">
              <BookOpen className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg text-slate-900">মূল পাঠ্যবই পৃষ্ঠা রেফারেন্স</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              ৩০,০০০+ প্রশ্নের প্রতিটিতে মূল বোর্ড পাঠ্যবই ও অধ্যায়ের পৃষ্ঠা নম্বর উল্লেখ থাকে, যাতে কোনো কনফিউশন বা ভুল তথ্যের সুযোগ না থাকে।
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-3 hover:shadow-lg transition">
            <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center">
              <BarChart2 className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg text-slate-900">দুর্বলতা ট্র্যাকিং ও অ্যানালিটিক্স</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              কোন বিষয়ে বা অধ্যায়ে আপনার ভুল বেশি হচ্ছে এবং কোন বিষয়ে সময় বেশি ব্যয় হচ্ছে, তার রিয়েল-টাইম গ্রাফিক্যাল প্রোগ্রেস চার্ট দেখতে পাবেন।
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-3 hover:shadow-lg transition">
            <div className="w-12 h-12 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center">
              <Printer className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-lg text-slate-900">প্রিন্ট রেডি পিডিএফ ও ওএমআর শিট</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              অফলাইনে মডেল টেস্ট দেওয়ার জন্য যেকোনো পরীক্ষার প্রশ্নপত্র এবং ওএমআর ফরম্যাট এক ক্লিকে ডাউনলোড ও প্রিন্ট করার সুবিধা রয়েছে।
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
