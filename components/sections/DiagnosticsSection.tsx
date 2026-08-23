'use client';

import React, { useRef } from 'react';
import { SectionReveal, ContentItem } from '../motion/SectionReveal';
import { SectionVisual } from '../visual/SectionVisual';
import { Button } from '../ui/Button';
import { SearchCheck, Cpu, Gauge, Zap, AlertCircle, ArrowRight } from 'lucide-react';
import { BUSINESS_DETAILS } from '@/lib/site-data';

export const DiagnosticsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      id="diagnostics"
      data-side="left"
      className="relative w-full min-h-[clamp(640px,80svh,780px)] flex items-center overflow-hidden bg-[#0E2238] text-white py-12"
    >
      {/* Background Tech Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#1666D9_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none" />

      {/* Section Visual (Left Full-Bleed 54vw) */}
      <SectionVisual
        src="/images/engineer_boiler.png"
        alt="Specialist fault diagnostics testing on gas boiler"
        side="left"
        bgColor="#0E2238"
        sectionRef={sectionRef}
      />

      {/* Content Container Aligned with 54vw Left Margin & 40vw Max Width */}
      <SectionReveal sectionRef={sectionRef} className="relative z-30 w-full lg:w-[min(40vw,680px)] lg:ml-[54vw] px-4 sm:px-6 lg:px-0 py-12 lg:py-16">
        <div className="space-y-5">
          <ContentItem sectionRef={sectionRef} type="eyebrow">
            <div className="inline-flex items-center gap-2 bg-[#1666D9]/20 border border-[#1666D9]/40 text-[#5AA9FF] px-3.5 py-1.5 rounded-full text-xs font-extrabold tracking-wider uppercase font-mono">
              <SearchCheck className="w-4 h-4 text-[#F47A20]" />
              <span>SPECIALIST DIAGNOSTICS</span>
            </div>
          </ContentItem>

          <ContentItem sectionRef={sectionRef} type="heading">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight font-manrope">
              Find the fault.<br />
              <span className="text-[#5AA9FF]">Fix the cause.</span>
            </h2>
          </ContentItem>

          <ContentItem sectionRef={sectionRef} type="paragraph">
            <p className="text-base text-[#E8EFF6]/90 leading-relaxed font-normal">
              A focused diagnostic approach that identifies the root cause before repair work begins. Testing electrical inputs, hydraulic flow, and combustion dynamics accurately.
            </p>
          </ContentItem>

          {/* Diagnostic Pillars */}
          <ContentItem sectionRef={sectionRef} type="features">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 py-1">
              <div className="bg-[#162F4C]/80 border border-white/10 p-3.5 rounded-xl flex items-start gap-3">
                <div className="p-2 bg-[#1666D9] rounded-lg text-white shrink-0">
                  <Cpu className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-xs font-manrope">Control Diagnostics</h3>
                  <p className="text-[11px] text-[#6B7C8F] mt-0.5">Electrical testing of PCB relays and thermistors.</p>
                </div>
              </div>

              <div className="bg-[#162F4C]/80 border border-white/10 p-3.5 rounded-xl flex items-start gap-3">
                <div className="p-2 bg-[#F47A20] rounded-lg text-white shrink-0">
                  <Gauge className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-xs font-manrope">Combustion Analysis</h3>
                  <p className="text-[11px] text-[#6B7C8F] mt-0.5">Flue gas digital testing for safe operation.</p>
                </div>
              </div>

              <div className="bg-[#162F4C]/80 border border-white/10 p-3.5 rounded-xl flex items-start gap-3">
                <div className="p-2 bg-emerald-600 rounded-lg text-white shrink-0">
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-xs font-manrope">First-Time Fix Focus</h3>
                  <p className="text-[11px] text-[#6B7C8F] mt-0.5">Isolating issues quickly to avoid repeat visits.</p>
                </div>
              </div>

              <div className="bg-[#162F4C]/80 border border-white/10 p-3.5 rounded-xl flex items-start gap-3">
                <div className="p-2 bg-[#FFB347] rounded-lg text-[#0E2238] shrink-0">
                  <AlertCircle className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-xs font-manrope">Honest Advice</h3>
                  <p className="text-[11px] text-[#6B7C8F] mt-0.5">Upfront explanation before carrying out work.</p>
                </div>
              </div>
            </div>
          </ContentItem>

          {/* Action Row */}
          <ContentItem sectionRef={sectionRef} type="cta">
            <div className="pt-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Button variant="amber" size="md" icon="phone">
                Call Darren for Advice
              </Button>
              <a
                href={BUSINESS_DETAILS.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 text-xs font-semibold text-[#5AA9FF] hover:text-white transition-colors"
              >
                <span>Describe boiler fault code on WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </ContentItem>
        </div>
      </SectionReveal>
    </section>
  );
};
