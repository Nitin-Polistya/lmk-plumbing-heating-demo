'use client';

import React, { useRef } from 'react';
import { SectionReveal, ContentItem } from '../motion/SectionReveal';
import { SectionVisual } from '../visual/SectionVisual';
import { Button } from '../ui/Button';
import { ShieldCheck, Star, MessageSquare, Award } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      id="hero"
      data-side="right"
      className="relative w-full min-h-[calc(100svh-80px)] flex items-center overflow-hidden bg-[#F7FAFD] pt-20"
    >
      {/* Section Visual (Right Full-Bleed 54vw) */}
      <SectionVisual
        src="/images/engineer_boiler.png"
        alt="Gasgenics Heating Engineer diagnosing boiler in Wakefield"
        side="right"
        bgColor="#F7FAFD"
        sectionRef={sectionRef}
        priority={true}
        isHero={true}
      />

      {/* Content Container Aligned with 6vw Left Margin & 40vw Max Width */}
      <SectionReveal sectionRef={sectionRef} isHero={true} className="relative z-30 w-full lg:w-[min(40vw,680px)] lg:ml-[6vw] px-4 sm:px-6 lg:px-0 py-12 lg:py-16">
        <div className="space-y-5">
          <ContentItem sectionRef={sectionRef} type="eyebrow" isHero={true}>
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-[#1666D9] px-3.5 py-1.5 rounded-full text-xs font-extrabold tracking-wider uppercase font-mono shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#1666D9] animate-ping" />
              <span>LOCAL HEATING & PLUMBING EXPERTS IN WAKEFIELD</span>
            </div>
          </ContentItem>

          <ContentItem sectionRef={sectionRef} type="heading" isHero={true}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0E2238] tracking-tight leading-[1.08] font-manrope">
              Heating problems<br />diagnosed properly,<br />
              <span className="text-[#1666D9] relative inline-block">
                first time.
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#F47A20]" viewBox="0 0 200 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 8C50 3 150 3 198 8" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
                </svg>
              </span>
            </h1>
          </ContentItem>

          <ContentItem sectionRef={sectionRef} type="paragraph" isHero={true}>
            <p className="text-base sm:text-lg text-[#6B7C8F] leading-relaxed max-w-xl font-normal">
              Boiler repairs, servicing and installations by Darren—your local heating engineer in Wakefield. Fast, honest and reliable service when you need it most.
            </p>
          </ContentItem>

          {/* Action Buttons */}
          <ContentItem sectionRef={sectionRef} type="cta" isHero={true}>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-1">
              <Button variant="call" size="lg" icon="phone">
                Call Darren
              </Button>
              <Button variant="whatsapp" size="lg" icon="whatsapp">
                WhatsApp Darren
              </Button>
            </div>
          </ContentItem>

          {/* Compact Trust Row */}
          <ContentItem sectionRef={sectionRef} type="features" isHero={true}>
            <div className="pt-5 border-t border-[#E8EFF6] flex flex-wrap items-center gap-4 text-xs font-bold text-[#0E2238]">
              <div className="flex items-center gap-1.5">
                <Star className="w-4 h-4 fill-amber-400 text-amber-500" />
                <span>5.0★ Google Rated</span>
              </div>
              <div className="h-4 w-px bg-gray-300 hidden sm:block" />
              <div className="flex items-center gap-1.5 text-[#1666D9]">
                <MessageSquare className="w-4 h-4" />
                <span>122 MyBuilder Reviews</span>
              </div>
              <div className="h-4 w-px bg-gray-300 hidden sm:block" />
              <div className="flex items-center gap-1.5 text-emerald-700">
                <ShieldCheck className="w-4 h-4" />
                <span>Gas Safe Registered</span>
              </div>
              <div className="h-4 w-px bg-gray-300 hidden sm:block" />
              <div className="flex items-center gap-1.5 text-[#F47A20]">
                <Award className="w-4 h-4" />
                <span>Ideal Max Accredited</span>
              </div>
            </div>
          </ContentItem>
        </div>
      </SectionReveal>
    </section>
  );
};
