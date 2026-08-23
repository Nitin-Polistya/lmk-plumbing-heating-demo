'use client';

import React from 'react';
import { SectionReveal } from '../motion/SectionReveal';
import { Button } from '../ui/Button';
import { BUSINESS_DETAILS } from '@/lib/site-data';
import { Phone, MessageSquare, ShieldCheck, Clock, CheckCircle2, Flame, Award } from 'lucide-react';

export const FinalCTASection: React.FC = () => {
  return (
    <section className="bg-[#0E2238] text-white py-20 lg:py-28 relative overflow-hidden">
      
      {/* Dynamic Background Heat Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#1666D9]/20 via-[#F47A20]/15 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#1666D9_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        
        <SectionReveal delay={0.05}>
          <div className="inline-flex items-center gap-2 bg-[#F47A20] text-white px-4 py-1.5 rounded-full text-xs font-extrabold tracking-wider uppercase font-mono shadow-lg">
            <Flame className="w-4 h-4 fill-current animate-bounce" />
            <span>DIRECT OWNER RESPONSE • WAKEFIELD LOCAL</span>
          </div>
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight font-manrope">
            Boiler problem?{' '}
            <span className="text-[#F47A20]">Speak directly with Darren.</span>
          </h2>
        </SectionReveal>

        <SectionReveal delay={0.15}>
          <p className="text-lg sm:text-xl text-[#E8EFF6]/90 max-w-2xl mx-auto font-normal leading-relaxed">
            No call centers, no waiting on hold. Call or message Darren right now for direct advice, transparent pricing, and rapid arrival.
          </p>
        </SectionReveal>

        {/* Prominent Phone Number Banner */}
        <SectionReveal delay={0.2}>
          <div className="bg-[#162F4C] border-2 border-[#1666D9] p-6 sm:p-8 rounded-3xl max-w-xl mx-auto shadow-2xl space-y-4">
            <div className="flex items-center justify-center gap-3 text-[#F47A20]">
              <Phone className="w-8 h-8 animate-pulse" />
              <a
                href={BUSINESS_DETAILS.phoneHref}
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white hover:text-[#5AA9FF] transition-colors font-mono"
              >
                {BUSINESS_DETAILS.phone}
              </a>
            </div>
            
            <p className="text-xs text-[#5AA9FF] font-semibold uppercase tracking-wider">
              Available 7 Days • 7:00 AM – 10:00 PM • Direct Access
            </p>
          </div>
        </SectionReveal>

        {/* Primary Action Buttons */}
        <SectionReveal delay={0.25}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto pt-2">
            <Button variant="call" size="lg" icon="phone" className="w-full sm:w-auto">
              Call Darren Now
            </Button>
            <Button variant="whatsapp" size="lg" icon="whatsapp" className="w-full sm:w-auto">
              WhatsApp Darren
            </Button>
          </div>
        </SectionReveal>

        {/* Trust Bottom Bar */}
        <SectionReveal delay={0.3}>
          <div className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-[#6B7C8F]">
            <span className="flex items-center gap-1.5 text-white font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              Gas Safe Registered
            </span>
            <span className="flex items-center gap-1.5 text-white font-medium">
              <Award className="w-4 h-4 text-[#F47A20]" />
              Ideal Max Accredited
            </span>
            <span className="flex items-center gap-1.5 text-white font-medium">
              <CheckCircle2 className="w-4 h-4 text-[#5AA9FF]" />
              5.0★ 122 MyBuilder Reviews
            </span>
          </div>
        </SectionReveal>

      </div>
    </section>
  );
};
