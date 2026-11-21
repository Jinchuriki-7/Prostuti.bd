import React from 'react';
import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'তানভীর আহমেদ',
      role: '৪৫তম বিসিএস সুপারিশপ্রাপ্ত ক্যাডার',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
      comment:
        'Prostuti BD-র সার্ভার-টাইমার লাইভ মডেল টেস্ট এবং নেগেটিভ মার্কিং সিস্টেম আমাকে আসল বিসিএস হলের মতো টাইম ম্যানেজমেন্ট শেখাতে সবচেয়ে বড় ভূমিকা রেখেছে। বিশেষ করে "ভুল খাতা" ফিচারটি অভাবনীয়!',
      rating: 5,
    },
    {
      name: 'নুসরাত জাহান রিয়া',
      role: 'ঢাকা বিশ্ববিদ্যালয় ভর্তি শিক্ষার্থী (ক ইউনিট)',
      image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=200',
      comment:
        'প্রতিটি প্রশ্নের সাথে পাঠ্যবইয়ের পৃষ্ঠা রেফারেন্স থাকাটা দারুণ এক স্বস্তি। কোনো প্রশ্নে কনফিউশন হলে সাথে সাথেই মূল বইয়ের রেফারেন্স দেখে ক্লিয়ার হয়ে যাওয়া যায়। এআই শিক্ষক ফিচারটিও অসাধারণ।',
      rating: 5,
    },
    {
      name: 'মো. রফিকুল ইসলাম',
      role: 'সমন্বিত ৯ ব্যাংক অফিসার পদে নির্বাচিত',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
      comment:
        'ব্যাংক জবের ম্যাথ এবং অ্যানালিটিক্যালের ব্যাখ্যাগুলো এত সুন্দরভাবে ধাপে ধাপে বুঝিয়ে দেওয়া যে প্রাইভেট টিউটরের অভাব একদমই অনুভব করিনি। Prostuti BD টিমকে আন্তরিক ধন্যবাদ!',
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-16 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-emerald-700 font-bold text-xs uppercase tracking-wider bg-emerald-100/70 px-3 py-1 rounded-full">
            সফল শিক্ষার্থীদের অভিজ্ঞতা
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900">
            যাঁদের প্রস্তুতিতে Prostuti BD সঙ্গী ছিল
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            বিসিএস ক্যাডার, ব্যাংক কর্মকর্তা ও শীর্ষ বিশ্ববিদ্যালয়ে চান্সপ্রাপ্ত শিক্ষার্থীদের বাস্তব মতামত।
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between hover:shadow-lg transition space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <p className="text-slate-600 text-sm leading-relaxed italic">
                  "{item.comment}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-11 h-11 rounded-full object-cover border-2 border-emerald-500"
                />
                <div>
                  <h3 className="font-bold text-sm text-slate-900">{item.name}</h3>
                  <p className="text-xs text-emerald-700 font-medium">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
