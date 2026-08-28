'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Flame, ThermometerSun, Wrench, Bath, Droplets, Zap, Check, ArrowRight } from 'lucide-react';
import { CORE_SERVICES } from '@/lib/site-data';

interface ServicesSectionProps {
  onOpenQuoteModal: () => void;
}

const iconMap: Record<string, any> = {
  Flame,
  ThermometerSun,
  Wrench,
  Bath,
  Droplets,
  Zap,
};

export default function ServicesSection({ onOpenQuoteModal }: ServicesSectionProps) {
  return (
    <section id="services" className="py-20 lg:py-28 bg-[#FCFCFD] text-[#0F1720]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-[#D9E0E7]">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#FCE6F6] border border-[#E317A8]/30 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#E317A8]" />
              <span className="font-mono text-xs font-bold text-[#E317A8] uppercase tracking-wider">
                CORE TRADE SERVICES
              </span>
            </div>
            <h2 className="font-['Barlow_Condensed'] text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[#0F1720] leading-none">
              LOCAL PLUMBING <span className="text-[#E317A8]">&amp; HEATING</span>
            </h2>
          </div>
          <p className="text-base text-[#667085] max-w-md mt-4 md:mt-0 font-normal">
            From minor repairs to complete central heating and boiler overhauls. Honest work delivered direct by Lee Kovacs.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CORE_SERVICES.map((service, idx) => {
            const IconComponent = iconMap[service.iconName] || Wrench;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="bg-[#FFFFFF] rounded-2xl border border-[#D9E0E7] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:border-[#E317A8]/50"
              >
                <div>
                  {/* Service Card Image Header */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#0F1720]">
                    <Image
                      src={service.image}
                      alt={`${service.title} Wakefield`}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F1720]/80 via-transparent to-transparent" />

                    {/* Number & Icon Overlay */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                      <span className="font-mono text-xs font-extrabold px-3 py-1 rounded bg-[#0F1720]/90 text-white border border-white/10">
                        {service.number}
                      </span>
                      <div className="w-9 h-9 rounded-lg bg-[#E317A8] text-white flex items-center justify-center shadow-md">
                        <IconComponent className="w-5 h-5" />
                      </div>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="font-['Barlow_Condensed'] text-2xl font-black uppercase text-white tracking-wide leading-tight">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  {/* Card Content Body */}
                  <div className="p-6">
                    <p className="text-sm text-[#667085] leading-relaxed mb-6 font-normal">
                      {service.fullDesc}
                    </p>

                    {/* Service Sub-bullets */}
                    <div className="space-y-2.5 mb-6">
                      {service.bullets.map((bullet) => (
                        <div key={bullet} className="flex items-start gap-2.5">
                          <Check className="w-4 h-4 text-[#E317A8] shrink-0 mt-0.5" />
                          <span className="text-xs font-semibold text-[#0F1720]">
                            {bullet}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Action Footer */}
                <div className="px-6 pb-6 pt-0">
                  <button
                    onClick={onOpenQuoteModal}
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#EEF2F6] group-hover:bg-[#E317A8] text-[#0F1720] group-hover:text-white font-['Barlow_Condensed'] font-extrabold text-sm tracking-wider uppercase transition-colors"
                  >
                    <span>ENQUIRE FOR THIS SERVICE</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
