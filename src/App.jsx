import React, { useState } from 'react';
import TopMarquee from './components/TopMarquee';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import ExamCategories from './components/ExamCategories';
import Features from './components/Features';
import FeatureSpotlight from './components/FeatureSpotlight';
import Pricing from './components/Pricing';
import WebAppShowcase from './components/WebAppShowcase';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import AuthModal from './components/AuthModal';
import MobileStickyCTA from './components/MobileStickyCTA';
import { Mail, Clock, MapPin, Headphones, UserPlus, ArrowRight } from 'lucide-react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);

  const handleOpenAuth = () => {
    setShowAuthModal(true);
  };

  const handleCloseAuth = () => {
    setShowAuthModal(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 flex flex-col pb-20 lg:pb-0">
      {/* 1. Top Announcement Marquee */}
      <TopMarquee />

      {/* 2. Main Navigation Header */}
      <Navbar
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        onOpenAuth={handleOpenAuth}
      />

      {/* 3. Hero Section with Live Simulator */}
      <Hero onOpenAuth={handleOpenAuth} />

      {/* 4. Statistics Counter Strip */}
      <Stats />

      {/* 5. Exam Preparation Tracks (Services) with 2 Internal Links */}
      <ExamCategories onOpenAuth={handleOpenAuth} />

      {/* 6. Core Platform Features */}
      <Features />

      {/* 7. Interactive Feature Spotlight Demo */}
      <FeatureSpotlight onOpenAuth={handleOpenAuth} />

      {/* 8. Pricing & Packages */}
      <Pricing onOpenAuth={handleOpenAuth} />

      {/* 9. About Us Section (Platform & Pedagogy Showcase) */}
      <WebAppShowcase onOpenAuth={handleOpenAuth} />

      {/* 10. Student Testimonials */}
      <Testimonials />

      {/* 11. Frequently Asked Questions */}
      <FAQ />

      {/* 12. Contact Us & Consultation Section */}
      <section
        id="contact"
        className="py-16 bg-gradient-to-r from-emerald-800 via-emerald-900 to-teal-900 text-white scroll-mt-10"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-700/60 border border-emerald-400/40 text-emerald-200 text-xs font-semibold">
            <Headphones className="w-4 h-4 text-emerald-300" />
            <span>যোগাযোগ ও ফ্রি পরামর্শ (Contact & Consultation)</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            আজই শুরু করুন আপনার সাফল্যের প্রস্তুতি
          </h2>
          <p className="text-emerald-100 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            কোনো ধরনের দ্বিধা ছাড়াই আজই জয়েন করুন ৫০,০০০+ শিক্ষার্থীর প্রিয় প্ল্যাটফর্মে। যেকোনো জিজ্ঞাসা বা ক্যারিয়ার পরামর্শে আমাদের টিম সবসময় আপনার পাশে আছে।
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left pt-2 max-w-2xl mx-auto">
            <div className="p-4 bg-white/10 rounded-xl border border-white/15 backdrop-blur-xs">
              <Mail className="w-5 h-5 text-emerald-300 mb-2" />
              <p className="text-xs text-emerald-200 font-medium">সরাসরি ইমেইল</p>
              <a
                href="mailto:support@prostutibd.com"
                className="text-sm font-bold text-white hover:underline truncate block"
              >
                support@prostutibd.com
              </a>
            </div>

            <div className="p-4 bg-white/10 rounded-xl border border-white/15 backdrop-blur-xs">
              <Clock className="w-5 h-5 text-emerald-300 mb-2" />
              <p className="text-xs text-emerald-200 font-medium">সাপোর্ট সময়</p>
              <p className="text-sm font-bold text-white">২৪/৭ সার্বক্ষণিক</p>
            </div>

            <div className="p-4 bg-white/10 rounded-xl border border-white/15 backdrop-blur-xs">
              <MapPin className="w-5 h-5 text-emerald-300 mb-2" />
              <p className="text-xs text-emerald-200 font-medium">হেড অফিস</p>
              <p className="text-sm font-bold text-white">ঢাকা, বাংলাদেশ</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={handleOpenAuth}
              className="w-full sm:w-auto px-8 py-3.5 bg-white hover:bg-emerald-50 text-emerald-900 font-bold rounded-xl shadow-lg hover:shadow-xl transition flex items-center justify-center gap-2 group"
            >
              <UserPlus className="w-4 h-4 text-emerald-700" />
              <span>Get Free Consultation</span>
              <ArrowRight className="w-4 h-4 text-emerald-700 group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="mailto:support@prostutibd.com"
              className="w-full sm:w-auto px-7 py-3.5 bg-emerald-700/60 hover:bg-emerald-700 text-white font-semibold border border-emerald-400/40 rounded-xl transition flex items-center justify-center gap-2"
            >
              <Headphones className="w-4 h-4" />
              <span>ইমেইল সাপোর্ট নিন</span>
            </a>
          </div>
        </div>
      </section>

      {/* 13. Professional Footer */}
      <Footer />

      {/* 14. Interactive Auth & Exam Modal */}
      <AuthModal isOpen={showAuthModal} onClose={handleCloseAuth} />

      {/* 15. Mobile Sticky CTA Button (Hidden on Desktop) */}
      <MobileStickyCTA onOpenAuth={handleOpenAuth} />
    </div>
  );
}
