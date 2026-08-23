'use client';

import React, { useRef } from 'react';
import { SectionReveal, ContentItem } from '../motion/SectionReveal';
import { SectionVisual } from '../visual/SectionVisual';
import { Button } from '../ui/Button';
import { MapPin, ShieldCheck, HeartHandshake, UserCheck } from 'lucide-react';

export const AboutDarrenSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      id="about-darren"
      data-side="right"
      className="relative w-full min-h-[clamp(640px,80svh,780px)] flex items-center overflow-hidden bg-[#F7FAFD] py-12 border-b border-[#E8EFF6]"
    >
      {/* Section Visual (Right Full-Bleed 54vw) */}
      <SectionVisual
        src="/images/workmanship.png"
        alt="Quality heating trade workmanship by Darren in Wakefield"
        side="right"
        bgColor="#F7FAFD"
        sectionRef={sectionRef}
      />

      {/* Content Container Aligned with 6vw Left Margin & 40vw Max Width */}
      <SectionReveal sectionRef={sectionRef} className="relative z-30 w-full lg:w-[min(40vw,680px)] lg:ml-[6vw] px-4 sm:px-6 lg:px-0 py-12 lg:py-16">
        <div className="space-y-5">
          <ContentItem sectionRef={sectionRef} type="eyebrow">
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-[#1666D9] px-3.5 py-1.5 rounded-full text-xs font-extrabold tracking-wider uppercase font-mono">
              <UserCheck className="w-4 h-4 text-[#F47A20]" />
              <span>OWNER-LED HEATING SPECIALIST</span>
            </div>
          </ContentItem>

          <ContentItem sectionRef={sectionRef} type="heading">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0E2238] tracking-tight leading-tight font-manrope">
              Owner-led.<br />
              <span className="text-[#1666D9]">Pride in every job.</span>
            </h2>
          </ContentItem>

          <ContentItem sectionRef={sectionRef} type="paragraph">
            <div className="space-y-3 text-base text-[#6B7C8F] leading-relaxed font-normal">
              <p>
                Gasgenics Heating & Plumbing is owned and operated by <strong className="text-[#0E2238]">Darren Gubby</strong>, a Gas Safe registered heating engineer based in Wakefield.
              </p>
              <p>
                Whether it is an emergency heating breakdown, boiler fault diagnosis, annual servicing, or fitting a modern system replacement, Darren handles every job with direct accountability, clean trade practices, and honest advice.
              </p>
            </div>
          </ContentItem>

          {/* 3 Core Commitment Pills */}
          <ContentItem sectionRef={sectionRef} type="features">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
              <div className="bg-white p-3.5 rounded-xl border border-[#E8EFF6] shadow-2xs space-y-1">
                <div className="flex items-center gap-2 text-[#1666D9] font-bold text-xs font-manrope">
                  <MapPin className="w-3.5 h-3.5 text-[#F47A20]" />
                  <span>Local to Wakefield</span>
                </div>
                <p className="text-[11px] text-[#6B7C8F]">Based at 51 Victoria Ave, WF2 9QL. Fast response.</p>
              </div>

              <div className="bg-white p-3.5 rounded-xl border border-[#E8EFF6] shadow-2xs space-y-1">
                <div className="flex items-center gap-2 text-[#1666D9] font-bold text-xs font-manrope">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Gas Safe Registered</span>
                </div>
                <p className="text-[11px] text-[#6B7C8F]">Operating to strict UK safety compliance standards.</p>
              </div>

              <div className="bg-white p-3.5 rounded-xl border border-[#E8EFF6] shadow-2xs space-y-1">
                <div className="flex items-center gap-2 text-[#1666D9] font-bold text-xs font-manrope">
                  <HeartHandshake className="w-3.5 h-3.5 text-[#FFB347]" />
                  <span>Respect for Home</span>
                </div>
                <p className="text-[11px] text-[#6B7C8F]">Punctual, tidy, polite, and respectful.</p>
              </div>
            </div>
          </ContentItem>

          {/* Action Row */}
          <ContentItem sectionRef={sectionRef} type="cta">
            <div className="pt-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Button variant="call" size="md" icon="phone">
                Call Darren Directly
              </Button>
              <Button variant="whatsapp" size="md" icon="whatsapp">
                WhatsApp Darren
              </Button>
            </div>
          </ContentItem>
        </div>
      </SectionReveal>
    </section>
  );
};
