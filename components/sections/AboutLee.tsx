'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Phone, Mail, CheckCircle2, MapPin } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/site-data';

export default function AboutLee() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#FCFCFD] text-[#0F1720]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Authentic Trade Image (5 cols) */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-[#D9E0E7] shadow-xl bg-[#0F1720]"
            >
              <Image
                src="/images/lee_working.png"
                alt="LMK Plumbing & Heating Services Wakefield"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F1720]/80 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#FFFFFF]/95 backdrop-blur-md border border-[#D9E0E7] shadow-md">
                <span className="text-[10px] font-mono font-bold tracking-widest text-[#E317A8] uppercase block">
                  LOCAL PLUMBING &amp; HEATING SERVICE
                </span>
                <span className="font-['Barlow_Condensed'] font-extrabold text-xl text-[#0F1720] uppercase block">
                  WRENTHORPE / WAKEFIELD
                </span>
              </div>
            </motion.div>

            {/* Pink Accent Frame Corner */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#FCE6F6] rounded-2xl -z-10 border border-[#E317A8]/30" />
          </div>

          {/* Right Column: Bio & Direct Story (7 cols) */}
          <div className="lg:col-span-7 flex flex-col order-1 lg:order-2">
            
            <div className="inline-flex items-center gap-2 self-start px-3 py-1 rounded bg-[#FCE6F6] border border-[#E317A8]/30 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#E317A8]" />
              <span className="font-mono text-xs font-bold text-[#E317A8] uppercase tracking-wider">
                OWNER &amp; TRADESMAN
              </span>
            </div>

            <h2 className="font-['Barlow_Condensed'] text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[#0F1720] leading-[0.95] mb-6">
              LOCAL WORK. <br />
              <span className="text-[#E317A8]">DIRECT WITH LEE.</span>
            </h2>

            <p className="text-lg text-[#667085] leading-relaxed mb-6 font-normal">
              <strong className="text-[#0F1720] font-semibold">LMK Plumbing &amp; Heating Services</strong> is based around Wrenthorpe and Wakefield and led by <strong className="text-[#0F1720] font-semibold">Lee Kovacs</strong>, providing plumbing and heating work from everyday repairs through to boilers, radiators, bathrooms and heating-system upgrades.
            </p>

            <p className="text-base text-[#667085] leading-relaxed mb-8 font-normal">
              When you contact LMK, you speak directly with Lee. Every job is assessed with honest advice, tidy working standards, and straightforward local accountability.
            </p>

            {/* Key Factual Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="p-4 rounded-xl bg-[#EEF2F6] border border-[#D9E0E7] flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#E317A8] shrink-0" />
                <span className="text-sm font-bold text-[#0F1720]">Direct Phone &amp; Email Contact</span>
              </div>
              <div className="p-4 rounded-xl bg-[#EEF2F6] border border-[#D9E0E7] flex items-center gap-3">
                <MapPin className="w-5 h-5 text-[#E317A8] shrink-0" />
                <span className="text-sm font-bold text-[#0F1720]">Based in Wrenthorpe / Wakefield</span>
              </div>
            </div>

            {/* Direct Contact Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={SITE_CONFIG.phoneLink}
                className="flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#0F1720] hover:bg-[#E317A8] text-white font-['Barlow_Condensed'] font-extrabold text-base tracking-wider uppercase transition-colors"
              >
                <Phone className="w-4 h-4 text-[#E317A8]" />
                <span>CALL LEE: {SITE_CONFIG.phoneDisplay}</span>
              </a>

              <a
                href={SITE_CONFIG.emailLink}
                className="flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#EEF2F6] hover:bg-[#FCE6F6] text-[#0F1720] border border-[#D9E0E7] font-['Barlow_Condensed'] font-extrabold text-base tracking-wider uppercase transition-colors"
              >
                <Mail className="w-4 h-4 text-[#E317A8]" />
                <span>EMAIL LMK</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
