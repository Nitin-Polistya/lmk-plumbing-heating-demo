import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { DiagnosticsSection } from '@/components/sections/DiagnosticsSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { WhyGasgenicsSection } from '@/components/sections/WhyGasgenicsSection';
import { AboutDarrenSection } from '@/components/sections/AboutDarrenSection';
import { ReviewsSection } from '@/components/sections/ReviewsSection';
import { AreasSection } from '@/components/sections/AreasSection';
import { FinalCTASection } from '@/components/sections/FinalCTASection';

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col bg-[#F7FAFD]">
      {/* Sticky Navigation Header */}
      <Navbar />

      {/* 1. Hero Section (Off White | Content LEFT | Image RIGHT) */}
      <HeroSection />

      {/* 2. Diagnostics Section (Deep Navy | Image LEFT | Content RIGHT) */}
      <DiagnosticsSection />

      {/* 3. Services Section (Off White | Content LEFT | Image RIGHT) */}
      <ServicesSection />

      {/* 4. Why Gasgenics Section (Cool Mist | Image LEFT | Content RIGHT) */}
      <WhyGasgenicsSection />

      {/* 5. About Darren Section (Off White | Content LEFT | Image RIGHT) */}
      <AboutDarrenSection />

      {/* 6. Reviews Section (Deep Navy | Image LEFT | Content RIGHT) */}
      <ReviewsSection />

      {/* 7. Areas Section (Off White | Content LEFT | Image RIGHT) */}
      <AreasSection />

      {/* 8. Final CTA Section (Deep Navy — Centered Conversion) */}
      <FinalCTASection />

      {/* Comprehensive Trade Footer */}
      <Footer />
    </main>
  );
}
