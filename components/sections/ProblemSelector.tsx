'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, CheckCircle, AlertTriangle, ArrowRight } from 'lucide-react';
import { PROBLEM_STATES, SITE_CONFIG } from '@/lib/site-data';

interface ProblemSelectorProps {
  onOpenQuoteModal: () => void;
}

export default function ProblemSelector({ onOpenQuoteModal }: ProblemSelectorProps) {
  const [activeTabId, setActiveTabId] = useState<string>('leak');
  const activeProblem = PROBLEM_STATES.find((p) => p.id === activeTabId) || PROBLEM_STATES[0];

  return (
    <section id="problems" className="py-20 lg:py-28 bg-[#0F1720] text-white relative overflow-hidden">
      {/* Background Subtle Accent Gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#E317A8]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FCE6F6]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 pb-8 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#E317A8]/15 border border-[#E317A8]/40 mb-4">
              <AlertTriangle className="w-3.5 h-3.5 text-[#E317A8]" />
              <span className="font-mono text-xs font-bold text-[#E317A8] uppercase tracking-wider">
                URGENT HELP &amp; DIAGNOSTICS
              </span>
            </div>
            <h2 className="font-['Barlow_Condensed'] text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-none">
              SOMETHING <span className="text-[#E317A8]">NOT WORKING?</span>
            </h2>
          </div>
          <p className="text-base text-[#667085] max-w-md mt-4 md:mt-0 font-normal">
            Select what issue you are experiencing at home to view how Lee resolves it. Direct support for urgent leaks and heating faults.
          </p>
        </div>

        {/* Tab Buttons Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
          {PROBLEM_STATES.map((state) => {
            const isActive = state.id === activeTabId;
            return (
              <button
                key={state.id}
                onClick={() => setActiveTabId(state.id)}
                className={`relative p-4 rounded-xl text-left transition-all duration-300 border flex flex-col justify-between ${
                  isActive
                    ? 'bg-[#1A2634] border-[#E317A8] shadow-lg shadow-[#E317A8]/10'
                    : 'bg-[#15202B] border-white/10 hover:border-white/20 hover:bg-[#1A2634]/60'
                }`}
              >
                {/* Active Top Pink Line */}
                {isActive && (
                  <motion.div
                    layoutId="activeTabUnderline"
                    className="absolute top-0 left-4 right-4 h-1 bg-[#E317A8] rounded-b-md"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}

                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`font-mono text-xs font-bold ${
                      isActive ? 'text-[#E317A8]' : 'text-[#667085]'
                    }`}
                  >
                    {state.number}
                  </span>
                  <span
                    className={`w-2 h-2 rounded-full ${
                      isActive ? 'bg-[#E317A8] animate-pulse' : 'bg-white/20'
                    }`}
                  />
                </div>

                <span
                  className={`font-['Barlow_Condensed'] text-xl sm:text-2xl font-extrabold tracking-wider uppercase ${
                    isActive ? 'text-white' : 'text-[#667085]'
                  }`}
                >
                  {state.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Problem Display Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#15202B] rounded-2xl p-6 sm:p-8 lg:p-10 border border-white/10 shadow-2xl">
          
          {/* Left Column: Problem Copy & Bullet Points (7 cols) */}
          <div className="lg:col-span-7 flex flex-col">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProblem.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col"
              >
                <span className="text-xs font-mono font-bold tracking-widest text-[#E317A8] uppercase mb-2">
                  {activeProblem.tagline}
                </span>
                <h3 className="font-['Barlow_Condensed'] text-3xl sm:text-4xl font-extrabold uppercase text-white mb-4">
                  {activeProblem.title} ISSUES
                </h3>
                <p className="text-base sm:text-lg text-[#EEF2F6]/80 leading-relaxed mb-6 font-normal">
                  {activeProblem.description}
                </p>

                {/* Bullets List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {activeProblem.bullets.map((bullet) => (
                    <div
                      key={bullet}
                      className="flex items-center gap-3 p-3 rounded-lg bg-[#1A2634] border border-white/5"
                    >
                      <CheckCircle className="w-4 h-4 text-[#E317A8] shrink-0" />
                      <span className="text-xs sm:text-sm font-semibold text-white">
                        {bullet}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <a
                    href={SITE_CONFIG.phoneLink}
                    className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#E317A8] hover:bg-[#B80E86] text-white font-['Barlow_Condensed'] font-extrabold text-base tracking-wider uppercase transition-all pink-glow"
                  >
                    <Phone className="w-4 h-4" />
                    <span>CALL LEE NOW</span>
                  </a>
                  <button
                    onClick={onOpenQuoteModal}
                    className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#1A2634] hover:bg-white/10 text-white border border-white/20 font-['Barlow_Condensed'] font-extrabold text-base tracking-wider uppercase transition-colors"
                  >
                    <span>ENQUIRE ABOUT THIS</span>
                    <ArrowRight className="w-4 h-4 text-[#E317A8]" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Column: Active Image Stage (5 cols) */}
          <div className="lg:col-span-5 relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProblem.id}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3 }}
                className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] rounded-xl overflow-hidden border border-white/10 shadow-xl"
              >
                <Image
                  src={activeProblem.image}
                  alt={`${activeProblem.title} plumbing and heating service Wakefield`}
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F1720]/80 via-transparent to-transparent" />
                
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-lg bg-[#0F1720]/90 backdrop-blur-md border border-white/10 flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-white uppercase">
                    LMK LOCAL SUPPORT
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[#E317A8] text-white">
                    ACTIVE
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
