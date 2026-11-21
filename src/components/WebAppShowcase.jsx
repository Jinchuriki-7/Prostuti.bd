import React from 'react';
import { CheckCircle } from 'lucide-react';

export default function WebAppShowcase({ onOpenAuth }) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-tr from-emerald-50 via-teal-50 to-white rounded-3xl border border-emerald-200/80 p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-5">
              <span className="text-emerald-700 font-bold text-xs uppercase tracking-wider bg-emerald-100 px-3 py-1 rounded-full">
                মাল্টি-ডিভাইস এক্সপেরিয়েন্স
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 leading-snug">
                মোবাইল, ট্যাবলেট কিংবা কম্পিউটার — যেকোনো ডিভাইস থেকে পরীক্ষা দিন
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Prostuti BD এর আধুনিক ওয়েব অ্যাপ ড্যাশবোর্ড লোড হয় পলকের মধ্যে। কম গতির ইন্টারনেটেও কোনো ধরনের বাফারিং ছাড়া অনায়াসে পরীক্ষা সম্পন্ন করুন।
              </p>

              <div className="space-y-3 text-xs sm:text-sm text-slate-700 pt-2">
                <div className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>অফলাইন ক্যাশিং টেকনোলজি — ইন্টারনেট ড্রপ করলেও পরীক্ষা বন্ধ হয় না</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>ডার্ক মোড ও রিডিং মোড সুবিধা যাতে চোখের ক্লান্তি না আসে</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>তাৎক্ষণিক ফলাফল ও বিস্তারিত বিষয়ভিত্তিক পর্যালোচনা</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 pt-3">
                <button
                  onClick={onOpenAuth}
                  className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm rounded-xl shadow-md transition"
                >
                  ড্যাশবোর্ডে প্রবেশ করুন
                </button>
                <button
                  onClick={onOpenAuth}
                  className="px-6 py-3 bg-white text-slate-700 font-semibold text-sm border border-slate-300 rounded-xl hover:bg-slate-50 transition"
                >
                  ফ্রি ট্রায়াল শুরু করুন
                </button>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 shadow-xl p-5 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-slate-300" />
                  <div className="w-3 h-3 rounded-full bg-slate-300" />
                  <div className="w-3 h-3 rounded-full bg-slate-300" />
                  <span className="text-xs text-slate-400 font-mono pl-2">prostutibd.com/app/dashboard</span>
                </div>
                <span className="text-[11px] text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded">
                  Active Session
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 text-left">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <p className="text-[11px] text-slate-500">চলমান পরীক্ষা</p>
                  <p className="text-sm font-bold text-slate-800 mt-1">৪৭তম বিসিএস স্পেশাল-৩</p>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <p className="text-[11px] text-slate-500">সর্বশেষ স্কোর</p>
                  <p className="text-sm font-bold text-emerald-700 mt-1">১৬৫.২৫ / ২০০</p>
                </div>
              </div>

              <div className="p-4 bg-emerald-50/60 rounded-xl border border-emerald-100 text-xs space-y-2">
                <div className="flex justify-between items-center text-emerald-950 font-bold">
                  <span>জাতীয় র‍্যাঙ্ক: ১২তম (পরীক্ষার্থী ৮,৪০০)</span>
                  <span className="text-emerald-700">শীর্ষ ১%</span>
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
