'use client';

import { motion } from 'framer-motion';
import { Star, ShieldCheck, ThumbsUp } from 'lucide-react';
import { REPUTATION_THEMES } from '@/lib/site-data';

export default function Reputation() {
  return (
    <section id="reviews" className="py-20 lg:py-28 bg-[#EEF2F6] text-[#0F1720]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FCE6F6] border border-[#E317A8]/30 mb-4">
            <Star className="w-3.5 h-3.5 fill-[#E317A8] text-[#E317A8]" />
            <span className="font-mono text-xs font-bold text-[#E317A8] uppercase tracking-wider">
              LOCAL REPUTATION
            </span>
          </div>
          <h2 className="font-['Barlow_Condensed'] text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[#0F1720] leading-none mb-4">
            LOCAL TRUST. <span className="text-[#E317A8]">JOB BY JOB.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#667085] font-normal">
            Built on consistent trade standards, prompt turnarounds, and respectful work in every local home.
          </p>
        </div>

        {/* 4 Theme Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {REPUTATION_THEMES.map((theme, idx) => (
            <motion.div
              key={theme.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-[#FFFFFF] p-6 rounded-2xl border border-[#D9E0E7] shadow-xs hover:border-[#E317A8]/40 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#FCE6F6] flex items-center justify-center mb-4 border border-[#E317A8]/20">
                  <ThumbsUp className="w-5 h-5 text-[#E317A8]" />
                </div>
                <h3 className="font-['Barlow_Condensed'] text-2xl font-extrabold uppercase text-[#0F1720] mb-2 tracking-wide">
                  {theme.title}
                </h3>
                <p className="text-sm text-[#667085] leading-relaxed font-normal">
                  {theme.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#EEF2F6] flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#E317A8] text-[#E317A8]" />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Local Service Guarantee Note */}
        <div className="max-w-2xl mx-auto bg-[#FFFFFF] p-6 rounded-2xl border border-[#D9E0E7] shadow-xs flex items-center gap-4 text-left">
          <div className="w-12 h-12 rounded-xl bg-[#0F1720] text-white flex items-center justify-center shrink-0">
            <ShieldCheck className="w-6 h-6 text-[#E317A8]" />
          </div>
          <div>
            <span className="font-['Barlow_Condensed'] font-extrabold text-lg text-[#0F1720] uppercase block">
              HONEST LOCAL TRADE WORK
            </span>
            <p className="text-xs text-[#667085] leading-normal font-normal">
              Direct service from Lee Kovacs. Every job is assessed cleanly, explained upfront, and completed to standard.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
