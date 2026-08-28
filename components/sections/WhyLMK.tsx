'use client';

import { motion } from 'framer-motion';
import { WHY_LMK_PILLARS } from '@/lib/site-data';

export default function WhyLMK() {
  return (
    <section id="why-lmk" className="py-20 lg:py-28 bg-[#EEF2F6] text-[#0F1720] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#FCE6F6] border border-[#E317A8]/30 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#E317A8]" />
            <span className="font-mono text-xs font-bold text-[#E317A8] uppercase tracking-wider">
              THE LMK DIFFERENCE
            </span>
          </div>
          <h2 className="font-['Barlow_Condensed'] text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[#0F1720] leading-[0.95]">
            LOCAL. <span className="text-[#E317A8]">STRAIGHTFORWARD.</span><br />
            READY TO HELP.
          </h2>
          <p className="text-base sm:text-lg text-[#667085] mt-4 font-normal">
            Why customers across Wrenthorpe, Wakefield, Ossett and Horbury recommend Lee Kovacs for their plumbing and heating work.
          </p>
        </div>

        {/* Pillars List with Connected Vertical Pink Accent Line */}
        <div className="relative pl-6 sm:pl-10 border-l-2 border-[#E317A8] space-y-12">
          {WHY_LMK_PILLARS.map((pillar, idx) => (
            <motion.div
              key={pillar.number}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative group"
            >
              {/* Dot on Vertical Line */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-[#FCFCFD] border-4 border-[#E317A8] group-hover:scale-125 transition-transform" />

              <div className="bg-[#FFFFFF] p-6 sm:p-8 rounded-2xl border border-[#D9E0E7] shadow-xs hover:shadow-lg transition-all">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-3">
                  <div className="flex items-center gap-4">
                    <span className="font-mono text-xl sm:text-2xl font-black text-[#E317A8]">
                      {pillar.number}
                    </span>
                    <h3 className="font-['Barlow_Condensed'] text-2xl sm:text-3xl font-extrabold uppercase text-[#0F1720]">
                      {pillar.title}
                    </h3>
                  </div>
                </div>

                <p className="text-base text-[#667085] leading-relaxed font-normal max-w-3xl">
                  {pillar.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
