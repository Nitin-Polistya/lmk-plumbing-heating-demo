'use client';

import React, { useRef } from 'react';
import { SectionReveal, ContentItem } from '../motion/SectionReveal';
import { SectionVisual } from '../visual/SectionVisual';
import { SERVICES_LIST, BUSINESS_DETAILS } from '@/lib/site-data';
import { Wrench, ShieldCheck, Flame, AlertTriangle, Droplets, ArrowRight } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Wrench: <Wrench className="w-5 h-5 text-[#1666D9]" />,
  SearchCheck: <ShieldCheck className="w-5 h-5 text-[#1666D9]" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5 text-[#1666D9]" />,
  Flame: <Flame className="w-5 h-5 text-[#F47A20]" />,
  AlertTriangle: <AlertTriangle className="w-5 h-5 text-[#F47A20]" />,
  Droplets: <Droplets className="w-5 h-5 text-[#1666D9]" />,
};

export const ServicesSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const primaryService = SERVICES_LIST.find((s) => s.id === 'boiler-repairs') || SERVICES_LIST[0];
  const emergencyService = SERVICES_LIST.find((s) => s.id === 'emergency-callouts') || SERVICES_LIST[4];
  const supportingServices = SERVICES_LIST.filter(
    (s) => s.id !== primaryService.id && s.id !== emergencyService.id
  );

  return (
    <section
      ref={sectionRef}
      id="services"
      data-side="right"
      className="relative w-full min-h-[clamp(640px,80svh,780px)] flex items-center overflow-hidden bg-[#F7FAFD] py-12 border-b border-[#E8EFF6]"
    >
      {/* Section Visual (Right Full-Bleed 54vw) */}
      <SectionVisual
        src="/images/service_detail.png"
        alt="High efficiency boiler installation and heating service"
        side="right"
        bgColor="#F7FAFD"
        sectionRef={sectionRef}
      />

      {/* Content Container Aligned with 6vw Left Margin & 40vw Max Width */}
      <SectionReveal sectionRef={sectionRef} className="relative z-30 w-full lg:w-[min(40vw,680px)] lg:ml-[6vw] px-4 sm:px-6 lg:px-0 py-12 lg:py-16">
        <div className="space-y-5">
          <ContentItem sectionRef={sectionRef} type="eyebrow">
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-[#1666D9] px-3.5 py-1.5 rounded-full text-xs font-extrabold tracking-wider uppercase font-mono">
              <span>SPECIALIST CAPABILITIES</span>
            </div>
          </ContentItem>

          <ContentItem sectionRef={sectionRef} type="heading">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0E2238] tracking-tight font-manrope">
              Heating & plumbing services
            </h2>
          </ContentItem>

          <ContentItem sectionRef={sectionRef} type="paragraph">
            <p className="text-base text-[#6B7C8F] leading-relaxed">
              Fast breakdown diagnosis, servicing and modern heating support across Wakefield.
            </p>
          </ContentItem>

          {/* Service Highlights */}
          <ContentItem sectionRef={sectionRef} type="features">
            <div className="space-y-3 pt-1">
              <div className="bg-[#0E2238] text-white p-5 rounded-2xl shadow-md border border-white/10 space-y-2">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2 text-[#5AA9FF] font-bold text-sm font-manrope">
                    <Wrench className="w-4 h-4 text-[#F47A20]" />
                    <span>Boiler Repairs & Breakdown Response</span>
                  </div>
                  <span className="text-[10px] font-mono uppercase bg-[#F47A20] text-white px-2 py-0.5 rounded-full font-bold">
                    Primary
                  </span>
                </div>
                <p className="text-xs text-[#E8EFF6]/90 leading-relaxed">
                  Heating and hot water breakdown repairs, fault isolation, and safety checks carried out to Gas Safe standards.
                </p>
              </div>

              <div className="bg-gradient-to-r from-[#1666D9] to-[#0E2238] text-white p-5 rounded-2xl shadow-md border border-white/10 space-y-2">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2 text-white font-bold text-sm font-manrope">
                    <AlertTriangle className="w-4 h-4 text-[#FFB347]" />
                    <span>Emergency Call-Outs (7AM - 10PM)</span>
                  </div>
                  <span className="text-[10px] font-mono uppercase bg-white/20 text-white px-2 py-0.5 rounded-full font-bold">
                    7 Days
                  </span>
                </div>
                <p className="text-xs text-white/90 leading-relaxed">
                  Direct phone response across Wakefield for sudden leaks, cold radiators, boiler lockouts, and pressure loss.
                </p>
              </div>
            </div>
          </ContentItem>

          {/* Supporting Service Links Pill Bar */}
          <ContentItem sectionRef={sectionRef} type="cta">
            <div className="pt-1 flex flex-wrap items-center gap-2.5">
              {supportingServices.map((service) => (
                <a
                  key={service.id}
                  href={BUSINESS_DETAILS.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white px-3.5 py-2 rounded-xl border border-[#E8EFF6] text-xs font-bold text-[#0E2238] hover:border-[#1666D9] hover:text-[#1666D9] shadow-2xs transition-colors"
                >
                  {iconMap[service.iconName]}
                  <span>{service.title}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#6B7C8F]" />
                </a>
              ))}
            </div>
          </ContentItem>
        </div>
      </SectionReveal>
    </section>
  );
};
