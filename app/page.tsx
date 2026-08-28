'use client';

import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import LMKHero from '@/components/sections/LMKHero';
import TrustStrip from '@/components/sections/TrustStrip';
import ProblemSelector from '@/components/sections/ProblemSelector';
import ServicesSection from '@/components/sections/ServicesSection';
import SmallJobsStrip from '@/components/sections/SmallJobsStrip';
import WhyLMK from '@/components/sections/WhyLMK';
import AboutLee from '@/components/sections/AboutLee';
import Reputation from '@/components/sections/Reputation';
import Coverage from '@/components/sections/Coverage';
import ContactCTA from '@/components/sections/ContactCTA';
import Footer from '@/components/layout/Footer';
import QuoteModal from '@/components/ui/QuoteModal';
import MobileContactBar from '@/components/ui/MobileContactBar';

export default function HomePage() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const handleOpenQuoteModal = () => setIsQuoteModalOpen(true);
  const handleCloseQuoteModal = () => setIsQuoteModalOpen(false);

  return (
    <main className="min-h-screen flex flex-col bg-[#FCFCFD] text-[#0F1720]">
      {/* 01 NAVBAR */}
      <Navbar onOpenQuoteModal={handleOpenQuoteModal} />

      {/* 02 HERO */}
      <LMKHero onOpenQuoteModal={handleOpenQuoteModal} />

      {/* 03 TRUST / SERVICE STRIP */}
      <TrustStrip />

      {/* 04 SOMETHING NOT WORKING? — PROBLEM SELECTOR */}
      <ProblemSelector onOpenQuoteModal={handleOpenQuoteModal} />

      {/* 05 SERVICES */}
      <ServicesSection onOpenQuoteModal={handleOpenQuoteModal} />

      {/* 06 SMALL JOBS STRIP */}
      <SmallJobsStrip />

      {/* 07 WHY LMK */}
      <WhyLMK />

      {/* 08 ABOUT LEE */}
      <AboutLee />

      {/* 09 REPUTATION */}
      <Reputation />

      {/* 10 COVERAGE */}
      <Coverage />

      {/* 11 FINAL CTA */}
      <ContactCTA onOpenQuoteModal={handleOpenQuoteModal} />

      {/* FOOTER */}
      <Footer />

      {/* MOBILE STICKY CALL & QUOTE BAR */}
      <MobileContactBar onOpenQuoteModal={handleOpenQuoteModal} />

      {/* INTERACTIVE QUOTE MODAL */}
      <QuoteModal isOpen={isQuoteModalOpen} onClose={handleCloseQuoteModal} />
    </main>
  );
}
