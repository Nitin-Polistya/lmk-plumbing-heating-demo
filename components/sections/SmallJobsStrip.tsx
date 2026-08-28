'use client';

import { SMALL_JOBS_ITEMS } from '@/lib/site-data';

export default function SmallJobsStrip() {
  return (
    <section className="py-12 bg-[#FCE6F6]/60 border-y border-[#E317A8]/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left Callout Badge */}
          <div className="flex items-center gap-4 shrink-0">
            <div className="w-12 h-12 rounded-xl bg-[#E317A8] text-white flex items-center justify-center font-['Barlow_Condensed'] font-black text-xl shadow-md">
              LMK
            </div>
            <div>
              <span className="text-xs font-mono font-bold tracking-widest text-[#E317A8] uppercase block">
                LOCAL SERVICE IDENTITY
              </span>
              <h3 className="font-['Barlow_Condensed'] text-2xl sm:text-3xl font-black uppercase text-[#0F1720] leading-none">
                NO JOB TOO SMALL.
              </h3>
            </div>
          </div>

          {/* Right Horizontal Ticker / Chips */}
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-2.5">
            {SMALL_JOBS_ITEMS.map((item) => (
              <span
                key={item}
                className="px-3.5 py-1.5 rounded-lg bg-[#FFFFFF] border border-[#E317A8]/30 font-['Barlow_Condensed'] font-extrabold text-sm sm:text-base text-[#0F1720] tracking-wider uppercase shadow-2xs hover:border-[#E317A8] hover:text-[#E317A8] transition-colors"
              >
                {item}
              </span>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
