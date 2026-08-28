'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Phone, ArrowRight, ShieldCheck, MapPin, CheckCircle2 } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/site-data';

interface LMKHeroProps {
  onOpenQuoteModal: () => void;
}

export default function LMKHero({ onOpenQuoteModal }: LMKHeroProps) {
  return (
    <section id="hero" className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 bg-[#FCFCFD] overflow-hidden scroll-mt-24">
      {/* Background Decorative Lines & Light Rose Accent Gradient */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-[#FCE6F6]/60 blur-3xl opacity-70" />
        <div className="absolute bottom-10 right-0 w-[500px] h-[500px] rounded-full bg-[#EEF2F6]/80 blur-3xl opacity-50" />
        
        {/* Subtle Technical Grid Lines */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#0F1720_1px,transparent_1px),linear-gradient(to_bottom,#0F1720_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Direct Copy (7 cols) */}
          <div className="lg:col-span-7 flex flex-col text-left">
            
            {/* Eyebrow Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-md bg-[#FCE6F6] border border-[#E317A8]/30 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-[#E317A8] animate-pulse" />
              <span className="font-mono text-xs font-bold text-[#E317A8] uppercase tracking-wider">
                PLUMBING • HEATING • BOILERS • WAKEFIELD
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-['Barlow_Condensed'] text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-[#0F1720] uppercase leading-[0.92] tracking-tight mb-6"
            >
              FROM THE{' '}
              <span className="relative inline-block text-[#E317A8]">
                SMALL FIXES
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.7, delay: 0.5 }}
                  className="absolute bottom-1 left-0 right-0 h-2 bg-[#E317A8]/20 -z-10 origin-left rounded"
                />
              </span>
              <br />
              TO THE{' '}
              <span className="relative inline-block bg-clip-text text-transparent bg-gradient-to-r from-[#0F1720] via-[#0F1720] to-[#E317A8]">
                FULL SYSTEM.
              </span>
            </motion.h1>

            {/* Supporting Copy */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg sm:text-xl text-[#667085] leading-relaxed max-w-2xl mb-8 font-normal"
            >
              Local plumbing and heating help from <strong className="text-[#0F1720] font-semibold">Lee Kovacs</strong> — from everyday repairs to boilers, radiators, bathrooms and heating-system upgrades around Wakefield.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10"
            >
              <a
                href={SITE_CONFIG.phoneLink}
                className="flex items-center justify-center gap-3 px-7 py-4 rounded-xl bg-[#0F1720] hover:bg-[#E317A8] text-white font-['Barlow_Condensed'] font-extrabold text-lg tracking-wider uppercase transition-all shadow-md hover:shadow-xl transform hover:-translate-y-0.5 group"
              >
                <Phone className="w-5 h-5 text-[#E317A8] group-hover:text-white transition-colors" />
                <span>CALL / TEXT LEE</span>
                <span className="font-mono text-xs opacity-80 font-normal ml-1">({SITE_CONFIG.phoneDisplay})</span>
              </a>

              <button
                onClick={onOpenQuoteModal}
                className="flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-[#E317A8] hover:bg-[#B80E86] text-white font-['Barlow_Condensed'] font-extrabold text-lg tracking-wider uppercase pink-glow hover:shadow-xl transition-all transform hover:-translate-y-0.5"
              >
                <span>GET A QUOTE</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </motion.div>

            {/* Key Trust Signals Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-6 border-t border-[#D9E0E7]"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#E317A8] shrink-0" />
                <span className="text-xs font-bold text-[#0F1720] font-mono uppercase">Direct with Lee</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#E317A8] shrink-0" />
                <span className="text-xs font-bold text-[#0F1720] font-mono uppercase">No Job Too Small</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <MapPin className="w-4 h-4 text-[#E317A8] shrink-0" />
                <span className="text-xs font-bold text-[#0F1720] font-mono uppercase">Wrenthorpe &amp; Wakefield</span>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Hero Visual Stage (5 cols) */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              {/* Asymmetrical Framing Container */}
              <div className="hero-asymmetric-frame bg-white p-3 border border-[#D9E0E7] shadow-xl">
                <div className="relative aspect-[4/5] sm:aspect-[1/1] lg:aspect-[4/5] rounded-xl overflow-hidden bg-[#0F1720]">
                  <Image
                    src="/images/lee_working.png"
                    alt="LMK Plumbing & Heating Engineer working in Wakefield"
                    fill
                    className="object-cover object-center transform hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F1720]/80 via-transparent to-transparent" />
                  
                  {/* Floating Overlay Badge on Hero Image */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#FFFFFF]/95 backdrop-blur-md border border-[#D9E0E7] shadow-lg flex items-center justify-between">
                    <div>
                      <span className="text-[10px] font-mono font-bold tracking-widest text-[#E317A8] uppercase block">
                        LOCAL TRADE EXCELLENCE
                      </span>
                      <span className="font-['Barlow_Condensed'] font-extrabold text-lg text-[#0F1720] uppercase leading-tight block">
                        LMK PLUMBING &amp; HEATING
                      </span>
                    </div>
                    <div className="w-10 h-10 rounded-lg bg-[#FCE6F6] flex items-center justify-center border border-[#E317A8]/30">
                      <ShieldCheck className="w-5 h-5 text-[#E317A8]" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Corner Pink Accents */}
              <div className="absolute -top-3 -right-3 w-12 h-12 border-t-4 border-r-4 border-[#E317A8] rounded-tr-xl pointer-events-none" />
              <div className="absolute -bottom-3 -left-3 w-12 h-12 border-b-4 border-l-4 border-[#E317A8] rounded-bl-xl pointer-events-none" />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
