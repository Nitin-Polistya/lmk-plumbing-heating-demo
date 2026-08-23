'use client';

import React, { useRef } from 'react';
import { SectionReveal, ContentItem } from '../motion/SectionReveal';
import { SectionVisual } from '../visual/SectionVisual';
import { REVIEW_THEMES } from '@/lib/site-data';
import { Star, MessageSquare, ShieldCheck } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      id="reviews"
      data-side="left"
      className="relative w-full min-h-[clamp(640px,80svh,780px)] flex items-center overflow-hidden bg-[#0E2238] text-white py-12"
    >
      {/* Section Visual (Left Full-Bleed 54vw) */}
      <SectionVisual
        src="/images/workmanship.png"
        alt="Verified customer rating proof and trade workmanship"
        side="left"
        bgColor="#0E2238"
        sectionRef={sectionRef}
      />

      {/* Content Container Aligned with 54vw Left Margin & 40vw Max Width */}
      <SectionReveal sectionRef={sectionRef} className="relative z-30 w-full lg:w-[min(40vw,680px)] lg:ml-[54vw] px-4 sm:px-6 lg:px-0 py-12 lg:py-16">
        <div className="space-y-5">
          <ContentItem sectionRef={sectionRef} type="eyebrow">
            <div className="inline-flex items-center gap-2 bg-[#1666D9]/20 border border-[#1666D9]/40 text-[#5AA9FF] px-3.5 py-1.5 rounded-full text-xs font-extrabold tracking-wider uppercase font-mono">
              <span>VERIFIED FEEDBACK & TRUST PROOF</span>
            </div>
          </ContentItem>

          <ContentItem sectionRef={sectionRef} type="heading">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-manrope">
              Wakefield homeowners<br />know who to call.
            </h2>
          </ContentItem>

          <ContentItem sectionRef={sectionRef} type="paragraph">
            <p className="text-base text-[#E8EFF6]/80">
              Public feedback themes consistently highlight diagnosis, honesty and reliable local service.
            </p>
          </ContentItem>

          {/* Aggregate Proof Strip */}
          <ContentItem sectionRef={sectionRef} type="features">
            <div className="flex flex-wrap items-center gap-3 bg-[#162F4C] p-3.5 rounded-xl border border-white/10 text-xs font-bold font-mono text-[#5AA9FF]">
              <div className="flex items-center gap-1.5 text-amber-400">
                <Star className="w-4 h-4 fill-amber-400" />
                <span>5.0★ Google Rated</span>
              </div>
              <div className="h-3.5 w-px bg-white/20 hidden sm:block" />
              <div className="flex items-center gap-1.5">
                <MessageSquare className="w-4 h-4 text-[#1666D9]" />
                <span>122 MyBuilder Reviews</span>
              </div>
              <div className="h-3.5 w-px bg-white/20 hidden sm:block" />
              <div className="flex items-center gap-1.5 text-emerald-400">
                <ShieldCheck className="w-4 h-4" />
                <span>Gas Safe Registered</span>
              </div>
            </div>
          </ContentItem>

          {/* Review Themes */}
          <ContentItem sectionRef={sectionRef} type="cta">
            <div className="space-y-2.5 pt-1">
              {REVIEW_THEMES.map((theme) => (
                <div
                  key={theme.id}
                  className="bg-[#162F4C]/70 rounded-xl p-3.5 border border-white/10 flex flex-col justify-between space-y-1.5 hover:border-[#1666D9] transition-colors"
                >
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-sm font-bold text-white font-manrope">
                      {theme.title}
                    </h3>
                    <span className="text-[9px] font-bold text-[#5AA9FF] bg-[#1666D9]/30 px-2 py-0.5 rounded-full font-mono">
                      {theme.source}
                    </span>
                  </div>

                  <p className="text-xs text-[#E8EFF6]/80 leading-relaxed font-normal">
                    {theme.summary}
                  </p>
                </div>
              ))}
            </div>
          </ContentItem>
        </div>
      </SectionReveal>
    </section>
  );
};
