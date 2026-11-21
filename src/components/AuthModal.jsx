import React from 'react';
import { X, BookOpen } from 'lucide-react';

export default function AuthModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 space-y-5 relative shadow-2xl border border-slate-100">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center space-y-2">
          <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
            <BookOpen className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-slate-900">Prostuti BD তে স্বাগতম</h3>
          <p className="text-xs text-slate-500">
            আপনার ইমেইল বা ফোন নম্বর দিয়ে এখনই ফ্রি মডেল টেস্টে অংশ নিন
          </p>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert('ধন্যবাদ! আপনার রেজিস্ট্রেশন সফল হয়েছে। মডেল টেস্টে স্বাগতম!');
            onClose();
          }}
          className="space-y-4"
        >
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              আপনার পূর্ণ নাম
            </label>
            <input
              type="text"
              required
              placeholder="যেমন: তানভীর আহমেদ"
              className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              ইমেইল অথবা মোবাইল নম্বর
            </label>
            <input
              type="text"
              required
              placeholder="017xxxxxxxx অথবা example@gmail.com"
              className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              প্রস্তুতির বিষয় নির্বাচন করুন
            </label>
            <select className="w-full px-3.5 py-2.5 text-sm border border-slate-300 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-emerald-500 bg-white">
              <option>৪৭তম বিসিএস প্রিলিমিনারি</option>
              <option>বাংলাদেশ ব্যাংক ও অন্যান্য ব্যাংক জব</option>
              <option>প্রাথমিক সহকারী শিক্ষক ও শিক্ষক নিবন্ধন</option>
              <option>বিশ্ববিদ্যালয় ভর্তি পরীক্ষা (DU, Medical, BUET)</option>
              <option>এসএসসি ও এইচএসসি বোর্ড পরীক্ষা</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-md transition"
          >
            ফ্রি টেস্ট শুরু করুন
          </button>
        </form>

        <p className="text-[11px] text-center text-slate-400">
          নিবন্ধন করার মাধ্যমে আপনি আমাদের শর্তাবলী ও গোপনীয়তা নীতিতে সম্মত হচ্ছেন।
        </p>
      </div>
    </div>
  );
}
