'use client';

import React, { useRef } from 'react';
import { SectionReveal, ContentItem } from '../motion/SectionReveal';
import { SectionVisual } from '../visual/SectionVisual';
import { COVERAGE_AREAS, BUSINESS_DETAILS } from '@/lib/site-data';
import { MapPin, Phone, Clock } from 'lucide-react';

export const AreasSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      id="areas"
      data-side="right"
      className="relative w-full min-h-[clamp(640px,80svh,780px)] flex items-center overflow-hidden bg-[#F7FAFD] py-12 border-b border-[#E8EFF6]"
    >
      {/* Section Visual (Right Full-Bleed 54vw) */}
      <SectionVisual
        src="/images/local_heating.png"
        alt="Wakefield local residential heating service"
        side="right"
        bgColor="#F7FAFD"
        sectionRef={sectionRef}
      />

      {/* Content Container Aligned with 6vw Left Margin & 40vw Max Width */}
      <SectionReveal sectionRef={sectionRef} className="relative z-30 w-full lg:w-[min(40vw,680px)] lg:ml-[6vw] px-4 sm:px-6 lg:px-0 py-12 lg:py-16">
        <div className="space-y-5">
          <ContentItem sectionRef={sectionRef} type="eyebrow">
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-[#1666D9] px-3.5 py-1.5 rounded-full text-xs font-extrabold tracking-wider uppercase font-mono">
              <span>SERVICE COVERAGE RADIUS</span>
            </div>
          </ContentItem>

          <ContentItem sectionRef={sectionRef} type="heading">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0E2238] tracking-tight font-manrope">
              Serving Wakefield &<br />surrounding areas
            </h2>
          </ContentItem>

          <ContentItem sectionRef={sectionRef} type="paragraph">
            <p className="text-base text-[#6B7C8F] leading-relaxed">
              Based at <strong className="text-[#0E2238]">51 Victoria Ave, Wakefield (WF2 9QL)</strong>. Darren provides heating diagnostics, breakdown repairs, servicing, and plumbing support across:
            </p>
          </ContentItem>

          <ContentItem sectionRef={sectionRef} type="features">
            <ul className="space-y-2.5 pt-1">
              {COVERAGE_AREAS.map((area, idx) => (
                <li key={idx} className="flex items-center gap-3 bg-white p-3.5 rounded-xl border border-[#E8EFF6] shadow-2xs">
                  <MapPin className="w-4 h-4 text-[#1666D9] shrink-0" />
                  <span className="font-bold text-xs text-[#0E2238] font-manrope">{area}</span>
                </li>
              ))}
            </ul>
          </ContentItem>

          <ContentItem sectionRef={sectionRef} type="cta">
            <div className="pt-1 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-100 w-fit">
                <Clock className="w-4 h-4" />
                <span>Availability: 7 AM – 10 PM, 7 Days</span>
              </div>

              <a
                href={BUSINESS_DETAILS.phoneHref}
                className="inline-flex items-center justify-center gap-2 bg-[#1666D9] hover:bg-[#1253B3] text-white px-5 py-2.5 rounded-full font-bold text-xs shadow-md transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Call 07770 683797</span>
              </a>
            </div>
          </ContentItem>
        </div>
      </SectionReveal>
    </section>
  );
};
