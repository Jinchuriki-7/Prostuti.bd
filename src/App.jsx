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
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 flex flex-col">
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

      {/* 5. Exam Preparation Tracks */}
      <ExamCategories onOpenAuth={handleOpenAuth} />

      {/* 6. Core Platform Features */}
      <Features />

      {/* 7. Interactive Feature Spotlight Demo */}
      <FeatureSpotlight onOpenAuth={handleOpenAuth} />

      {/* 8. Pricing & Packages */}
      <Pricing onOpenAuth={handleOpenAuth} />

      {/* 9. Web App & Multi-Device Experience */}
      <WebAppShowcase onOpenAuth={handleOpenAuth} />

      {/* 10. Student Testimonials */}
      <Testimonials />

      {/* 11. Frequently Asked Questions */}
      <FAQ />

      {/* 12. Bottom CTA Banner */}
      <section className="py-16 bg-gradient-to-r from-emerald-800 to-teal-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            আজই শুরু করুন আপনার সাফল্যের প্রস্তুতি
          </h2>
          <p className="text-emerald-100 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            কোনো ধরনের দ্বিধা ছাড়াই আজই জয়েন করুন ৫০,০০০+ শিক্ষার্থীর প্রিয় ডিজিটাল লার্নিং ও এক্সাম প্ল্যাটফর্ম Prostuti BD-তে।
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={handleOpenAuth}
              className="w-full sm:w-auto px-8 py-3.5 bg-white hover:bg-emerald-50 text-emerald-900 font-bold rounded-xl shadow-lg hover:shadow-xl transition"
            >
              বিনামূল্যে অ্যাকাউন্ট খুলুন
            </button>
            <a
              href="mailto:support@prostutibd.com"
              className="w-full sm:w-auto px-7 py-3.5 bg-emerald-700/60 hover:bg-emerald-700 text-white font-semibold border border-emerald-400/40 rounded-xl transition"
            >
              সরাসরি সাহায্য চান
            </a>
          </div>
        </div>
      </section>

      {/* 13. Professional Footer */}
      <Footer />

      {/* 14. Interactive Auth & Exam Modal */}
      <AuthModal isOpen={showAuthModal} onClose={handleCloseAuth} />
    </div>
  );
}
