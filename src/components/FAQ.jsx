import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openFaq, setOpenFaq] = useState(0);

  const faqs = [
    {
      q: 'Prostuti BD তে কীভাবে মডেল টেস্ট দেওয়া যায়?',
      a: 'ওয়েবসাইটে ফ্রি অ্যাকাউন্ট তৈরি করে বা লগইন করে আপনি আপনার কাঙ্ক্ষিত পরীক্ষা (যেমন- বিসিএস, ব্যাংক, প্রাইমারি, ভর্তি বা অ্যাকাডেমিক) নির্বাচন করে সরাসরি লাইভ অথবা সেলফ-পেসড মডেল টেস্টে অংশ নিতে পারেন। পরীক্ষা শেষে স্বয়ংক্রিয়ভাবে ফলাফল, বিস্তারিত ব্যাখ্যা ও আপনার র‍্যাঙ্কিং দেখতে পাবেন।',
    },
    {
      q: 'নেগেটিভ মার্কিং পদ্ধতি কীভাবে কাজ করে?',
      a: 'প্রকৃত সরকারি ও প্রতিযোগিতামূলক পরীক্ষার নিয়মানুযায়ী প্রতিটি ভুল উত্তরের জন্য ০.২৫ নম্বর কাটা যায়। এর ফলে শিক্ষার্থীরা আন্দাজে উত্তর না দিয়ে আসল পরীক্ষার পরিবেশের সাথে অভ্যস্ত হয়ে ওঠে এবং নেগেটিভ মার্কিং কমানোর কৌশল শেখে।',
    },
    {
      q: '‘স্বয়ংক্রিয় ভুল খাতা (Error Notebook)’ কী এবং এটি কীভাবে সাহায্য করে?',
      a: 'যেসব প্রশ্নে আপনি পরীক্ষায় ভুল উত্তর দেন অথবা ছেড়ে দেন, সেগুলো স্বয়ংক্রিয়ভাবে আপনার ব্যক্তিগত ‘ভুল খাতা’তে জমা হয়। আপনি পরবর্তীতে যেকোনো সময় ভুল হওয়া প্রশ্নগুলো আলাদাভাবে রিভিশন দিতে পারেন এবং পুনরায় সঠিক উত্তর না দেওয়া পর্যন্ত সিস্টেম আপনাকে প্র্যাকটিস করাবে।',
    },
    {
      q: 'পাঠ্যবই রেফারেন্স ও ব্যাখ্যা বলতে কী বোঝায়?',
      a: 'Prostuti BD-র প্রতিটি প্রশ্নের উত্তরের নিচে জাতীয় শিক্ষাক্রম ও পাঠ্যপুস্তক বোর্ড (NCTB) অথবা অনুমোদিত রেফারেন্স বইয়ের অধ্যায় ও পৃষ্ঠা নম্বর উল্লেখ থাকে। ফলে কোনো উত্তরের সত্যতা নিয়ে সংশয় থাকে না।',
    },
    {
      q: 'পেমেন্ট পদ্ধতি কী এবং অ্যাকাউন্ট কীভাবে সক্রিয় হয়?',
      a: 'বিকাশ ও নগদ এর মাধ্যমে অত্যন্ত সহজ ও স্বয়ংক্রিয় গেটওয়ে দিয়ে পেমেন্ট করা যায়। পেমেন্ট সম্পন্ন হওয়ার ২ মিনিটের মধ্যেই আপনার প্রো মেম্বারশিপ বা প্যাকেজ স্বয়ংক্রিয়ভাবে অ্যাক্টিভ হয়ে যাবে।',
    },
    {
      q: 'যেকোনো সমস্যা বা সহায়তার জন্য কীভাবে যোগাযোগ করব?',
      a: 'আমাদের সার্বক্ষণিক সাপোর্ট টিম রয়েছে। যেকোনো অ্যাকাউন্টিং, পেমেন্ট বা কনটেন্ট সহায়তার জন্য support@prostutibd.com ঠিকানায় ইমেইল করতে পারেন।',
    },
  ];

  return (
    <section id="faq" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-12">
          <span className="text-emerald-700 font-bold text-xs uppercase tracking-wider bg-emerald-100/70 px-3 py-1 rounded-full">
            সাধারণ জিজ্ঞাসা
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900">
            সচরাচর জিজ্ঞাসিত প্রশ্নাবলী (FAQ)
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Prostuti BD প্ল্যাটফর্ম সম্পর্কে আপনার যেকোনো প্রশ্নের উত্তর এখানে পাবেন।
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="border border-slate-200 rounded-2xl overflow-hidden transition-all bg-white"
            >
              <button
                onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                className="w-full text-left p-5 flex items-center justify-between gap-4 font-semibold text-slate-800 hover:text-emerald-700 transition"
              >
                <span className="text-sm sm:text-base">{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-400 shrink-0 transition-transform ${
                    openFaq === idx ? 'rotate-180 text-emerald-600' : ''
                  }`}
                />
              </button>
              {openFaq === idx && (
                <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
