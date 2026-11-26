# Prostuti BD (প্রস্তুতি) — Landing Page Recreation

[![Live on Firebase](https://img.shields.io/badge/Live%20Demo-Firebase%20Hosting-orange?style=for-the-badge&logo=firebase)](https://prostutibd-2026.web.app)
[![Live on GitHub Pages](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-blue?style=for-the-badge&logo=github)](https://jinchuriki-7.github.io/Prostuti.bd/)
[![React](https://img.shields.io/badge/React-19.x-61DAFB?style=for-the-badge&logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.x-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-8.x-646CFF?style=for-the-badge&logo=vite)](https://vite.dev/)

A pixel-perfect, responsive recreation of **[Prostuti BD (prostutibd.com)](https://prostutibd.com/)** — Bangladesh's premier online competitive examination and academic preparation platform.

---

## 🌐 Live Website Links

- **Primary Live (Firebase):** **[https://prostutibd-2026.web.app](https://prostutibd-2026.web.app)**
- **Mirror Live (GitHub Pages):** **[https://jinchuriki-7.github.io/Prostuti.bd/](https://jinchuriki-7.github.io/Prostuti.bd/)**
- **GitHub Repository:** **[https://github.com/Jinchuriki-7/Prostuti.bd](https://github.com/Jinchuriki-7/Prostuti.bd)**

---

## 🚀 Navigation & Mobile UX Updates

### 📱 Task 2: সার্ভিস পেজের মোবাইল ম্যাচ (Mobile Usability & Responsiveness)
Day 2-এর সার্ভিস পেজটি বাস্তব মোবাইল ডিভাইসে পুঙ্খানুপুঙ্খভাবে পরীক্ষা করে নিম্নলিখিত বাগগুলো সমাধান করা হয়েছে:
- **হরিজন্টাল ওভারফ্লো ও পেজ জুম-আউট সমাধান (Zero Horizontal Overflow):** ক্যাটাগরি ফিল্টার ও নোটিস বারে কন্টেইনার ওভারফ্লো ফিক্স করে ৩২০px–৪১২px সব মোবাইল স্ক্রিনে পারফেক্ট ফুল-উইডথ ফিট নিশ্চিত করা হয়েছে।
- **অটো ডার্ক মোড কালার ইনভার্সন সমাধান (Consistent Light Theme):** `<meta name="color-scheme" content="only light" />` ও CSS রুল দিয়ে ব্রাউজারের ফোর্সড ডার্ক মোড বন্ধ করে আসল লাইট এমারেল্ড থিম বজায় রাখা হয়েছে।
- **মোবাইল স্টিকি CTA ও সেইফ-এরিয়া স্পেসিং:** মোবাইল স্ক্রিনে নিচে ফিক্সড স্টিকি বাটন ("Get Free Consultation") কন্টেন্টকে ওভারল্যাপ না করার জন্য `pb-20` ও `safe-area-inset-bottom` নিশ্চিত করা হয়েছে।

### 1. Two Meaningful Internal Links
Added directly inside the **Services / Exam Preparation Tracks** section (`#services`):
- **Link 1: Services → About Us (`#about`)**: Smoothly directs candidates to the platform background, educational philosophy, and pedagogical mission.
- **Link 2: Services → Contact Us (`#contact`)**: Instantly connects candidates to 24/7 support channels, email consultation (`support@prostutibd.com`), and office address.

### 2. Mobile-Only Sticky CTA Button
- **CTA Label:** `"Get Free Consultation"`
- **Fixed Mobile Experience:** Positioned permanently at the bottom on mobile viewports (`fixed bottom-0 inset-x-0 z-40`), completely hidden on desktop screens (`block lg:hidden`).
- **Smooth Navigation:** Tapping the sticky button smoothly scrolls straight to the dedicated Contact & Consultation section (`#contact`) or triggers the consultation modal.
- **Safe-Area Protection:** Includes `calc(0.75rem + env(safe-area-inset-bottom))` padding and `pb-20 lg:pb-0` page spacing so content is never obscured.

---

## ✨ Key Features & Sections

- **Top Announcement Marquee:** Real-time exam batch notice and 24/7 support channel.
- **Header & Mobile Drawer:** Responsive brand navigation with clean collapsible drawer for mobile users.
- **Hero & Interactive Exam Simulator:** 
  - Live model test card with real-time countdown timer (`00:44:12`) and negative marking indicator (`-০.২৫`).
  - Interactive MCQs with instant answer validation, feedback, and NCTB textbook page citation.
- **Achievement Counters:** ৫০,০০০+ সফল শিক্ষার্থী, ৩০,০০০+ প্রশ্নব্যাংক, ১,৫০,০০০+ মডেল টেস্ট সম্পন্ন, এবং ৪.৯/৫ রেটিং।
- **Dynamic Track Filtering:** বিসিএস (BCS), ব্যাংক জব, প্রাথমিক সহকারী শিক্ষক ও NTRCA, বিশ্ববিদ্যালয় ভর্তি (DU, Medical, BUET), এবং এসএসসি/এইচএসসি।
- **Platform Features Grid:** সার্ভার-টাইমার, স্বয়ংক্রিয় ভুল খাতা (Mistakes Log), ২৪/৭ এআই শিক্ষক, মূল পাঠ্যবই রেফারেন্স, দুর্বলতা অ্যানালিটিক্স, ও প্রিন্ট-রেডি ওএমআর/পিডিএফ।
- **Feature Spotlight Demo:** Interactive tabbed demonstration of the Error Log and AI Tutor.
- **Transparent Pricing:** এসএসসি প্রো (৳২,৩৯০), অল-অ্যাক্সেস মেম্বারশিপ (৳৯৯৯ মেগা সেভার), ও এইচএসসি প্রো (৳৩,৯৯০) সহ বিকাশ এবং নগদ ইনস্ট্যান্ট পেমেন্ট গেটওয়ে।
- **About Us Section:** Highlighting platform reliability, offline caching, and student success metrics.
- **Contact & Consultation Section:** Direct email, 24/7 helpline, and consultation booking.
- **Student Testimonials & FAQ:** Expandable accordion addressing common exam queries.
- **Interactive Registration Modal:** Quick 1-click modal for taking free model tests.

---

## 🛠️ Technology Stack

- **Framework:** React.js 19
- **Build Tool:** Vite 8
- **Styling:** Tailwind CSS v4 (`@tailwindcss/vite`)
- **Icons:** Lucide React
- **Typography:** Hind Siliguri (Google Fonts) + Plus Jakarta Sans
- **Deployment:** Firebase Hosting & GitHub Pages

---

## 🚀 Local Development Setup

```bash
# 1. Clone the repository
git clone https://github.com/Jinchuriki-7/Prostuti.bd.git

# 2. Navigate to project folder
cd Prostuti.bd

# 3. Install dependencies
npm install

# 4. Start local development server
npm run dev

# 5. Build for production
npm run build
```

---

## 📄 License
This project is developed for educational and internship evaluation purposes. All original trademarks and content belong to [Prostuti BD](https://prostutibd.com/).
