import React from 'react';

export default function Stats() {
  return (
    <section className="py-10 bg-emerald-900 text-white border-y border-emerald-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl font-extrabold text-emerald-300 font-mono">
              ৫০,০০০+
            </div>
            <div className="text-xs sm:text-sm text-emerald-100 font-medium">
              সফল শিক্ষার্থী ও পরীক্ষার্থী
            </div>
          </div>
          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl font-extrabold text-emerald-300 font-mono">
              ৩০,০০০+
            </div>
            <div className="text-xs sm:text-sm text-emerald-100 font-medium">
              ব্যাখ্যাসহ নির্ভুল প্রশ্নব্যাংক
            </div>
          </div>
          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl font-extrabold text-emerald-300 font-mono">
              ১,৫০,০০০+
            </div>
            <div className="text-xs sm:text-sm text-emerald-100 font-medium">
              মডেল টেস্ট সফলভাবে সম্পন্ন
            </div>
          </div>
          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl font-extrabold text-emerald-300 font-mono">
              ৪.৯ / ৫
            </div>
            <div className="text-xs sm:text-sm text-emerald-100 font-medium">
              শিক্ষার্থীদের গড় সন্তুষ্টি রেটিং
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
