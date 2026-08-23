'use client';

import React, { useRef } from 'react';
import { SectionReveal, ContentItem } from '../motion/SectionReveal';
import { SectionVisual } from '../visual/SectionVisual';
import { WHY_US_PILLARS, BUSINESS_DETAILS } from '@/lib/site-data';
import { Phone } from 'lucide-react';

export const WhyGasgenicsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      id="why-us"
      data-side="left"
      className="relative w-full min-h-[clamp(640px,80svh,780px)] flex items-center overflow-hidden bg-[#E8EFF6] py-12"
    >
      {/* Section Visual (Left Full-Bleed 54vw) */}
      <SectionVisual
        src="/images/service_detail.png"
        alt="Reliable trade standards and boiler maintenance"
        side="left"
        bgColor="#E8EFF6"
        sectionRef={sectionRef}
      />

      {/* Content Container Aligned with 54vw Left Margin & 40vw Max Width */}
      <SectionReveal sectionRef={sectionRef} className="relative z-30 w-full lg:w-[min(40vw,680px)] lg:ml-[54vw] px-4 sm:px-6 lg:px-0 py-12 lg:py-16">
        <div className="space-y-5">
          <ContentItem sectionRef={sectionRef} type="eyebrow">
            <div className="inline-flex items-center gap-2 bg-white px-3.5 py-1.5 rounded-full text-xs font-extrabold tracking-wider uppercase font-mono border border-gray-200 text-[#1666D9]">
              <span>WHY CHOOSE GASGENICS</span>
            </div>
          </ContentItem>

          <ContentItem sectionRef={sectionRef} type="heading">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#0E2238] tracking-tight leading-[1.15] font-manrope">
              Local. Reliable.<br />
              <span className="text-[#1666D9]">Done right.</span>
            </h2>
          </ContentItem>

          <ContentItem sectionRef={sectionRef} type="paragraph">
            <p className="text-base text-[#6B7C8F] leading-relaxed font-normal">
              When your heating fails, you want a trade engineer who turns up on time, diagnoses the cause accurately, and provides straightforward recommendations.
            </p>
          </ContentItem>

          {/* Numbered 01 - 04 Pillars */}
          <ContentItem sectionRef={sectionRef} type="features">
            <div className="space-y-0 divide-y divide-[#6B7C8F]/20 border-y border-[#6B7C8F]/20 pt-1">
              {WHY_US_PILLARS.map((pillar) => (
                <div key={pillar.number} className="py-3.5 grid grid-cols-1 sm:grid-cols-12 gap-3 items-start group">
                  <div className="sm:col-span-3">
                    <span className="text-xl sm:text-2xl font-extrabold text-[#1666D9] font-mono block">
                      {pillar.number}
                    </span>
                  </div>
                  <div className="sm:col-span-9 space-y-0.5">
                    <h3 className="text-base font-bold text-[#0E2238] font-manrope group-hover:text-[#1666D9] transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-[#6B7C8F] leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </ContentItem>

          {/* Action */}
          <ContentItem sectionRef={sectionRef} type="cta">
            <div className="pt-1">
              <a
                href={BUSINESS_DETAILS.phoneHref}
                className="inline-flex items-center gap-2 bg-[#0E2238] hover:bg-[#1666D9] text-white px-5 py-2.5 rounded-full font-bold text-xs shadow-md transition-colors"
              >
                <Phone className="w-4 h-4 text-[#F47A20]" />
                <span>Call 07770 683797</span>
              </a>
            </div>
          </ContentItem>
        </div>
      </SectionReveal>
    </section>
  );
};
