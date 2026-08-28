'use client';

import { motion } from 'framer-motion';
import { MapPin, Navigation, Phone } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/site-data';

export default function Coverage() {
  const towns = [
    { name: 'WRENTHORPE', role: 'Home Base', status: 'Primary Area' },
    { name: 'WAKEFIELD', role: 'Central District', status: 'Primary Area' },
    { name: 'OSSETT', role: 'West Wakefield', status: 'Full Service' },
    { name: 'HORBURY', role: 'South West Wakefield', status: 'Full Service' },
  ];

  return (
    <section id="areas" className="py-20 lg:py-28 bg-[#FCFCFD] text-[#0F1720] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Town List & Information (7 cols) */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="inline-flex items-center gap-2 self-start px-3 py-1 rounded bg-[#FCE6F6] border border-[#E317A8]/30 mb-4">
              <MapPin className="w-3.5 h-3.5 text-[#E317A8]" />
              <span className="font-mono text-xs font-bold text-[#E317A8] uppercase tracking-wider">
                SERVICE COVERAGE
              </span>
            </div>

            <h2 className="font-['Barlow_Condensed'] text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[#0F1720] leading-none mb-6">
              BASED IN WRENTHORPE. <br />
              <span className="text-[#E317A8]">SERVING WAKEFIELD.</span>
            </h2>

            <p className="text-base sm:text-lg text-[#667085] leading-relaxed mb-8 font-normal max-w-xl">
              LMK Plumbing &amp; Heating Services provides prompt domestic plumbing and heating repairs across Wrenthorpe, Wakefield, Ossett, Horbury and immediate surrounding areas.
            </p>

            {/* Town Grid Cards */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {towns.map((town) => (
                <div
                  key={town.name}
                  className="p-4 rounded-xl bg-[#EEF2F6] border border-[#D9E0E7] flex items-center justify-between hover:border-[#E317A8]/40 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#E317A8]" />
                    <div className="flex flex-col">
                      <span className="font-['Barlow_Condensed'] font-extrabold text-xl text-[#0F1720] uppercase leading-none">
                        {town.name}
                      </span>
                      <span className="text-[10px] font-mono font-bold text-[#667085] uppercase mt-1">
                        {town.role}
                      </span>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono font-extrabold px-2 py-0.5 rounded bg-[#FCFCFD] text-[#E317A8] border border-[#E317A8]/20 hidden sm:inline-block">
                    {town.status}
                  </span>
                </div>
              ))}
            </div>

            {/* Surrounding Areas Banner */}
            <div className="p-4 rounded-xl bg-[#FCE6F6]/50 border border-[#E317A8]/30 flex items-center justify-between">
              <span className="font-['Barlow_Condensed'] font-extrabold text-base text-[#0F1720] uppercase tracking-wider">
                &amp; SURROUNDING WAKEFIELD VILLAGES
              </span>
              <a
                href={SITE_CONFIG.phoneLink}
                className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-[#E317A8] hover:underline"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>CHECK COVERAGE</span>
              </a>
            </div>

          </div>

          {/* Right Column: Abstract Map & Location Graphic (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[1/1] rounded-2xl bg-[#0F1720] p-8 border border-[#D9E0E7] shadow-xl overflow-hidden flex flex-col justify-between">
              
              {/* Decorative Subtle Route Paths SVG */}
              <svg className="absolute inset-0 w-full h-full opacity-30 pointer-events-none" viewBox="0 0 400 400" fill="none">
                <circle cx="200" cy="200" r="140" stroke="#E317A8" strokeWidth="2" strokeDasharray="4 6" />
                <circle cx="200" cy="200" r="80" stroke="#FFFFFF" strokeWidth="1.5" />
                <path d="M 80,200 L 320,200" stroke="#FFFFFF" strokeWidth="1" strokeDasharray="2 4" />
                <path d="M 200,80 L 200,320" stroke="#FFFFFF" strokeWidth="1" strokeDasharray="2 4" />
                <path d="M 120,120 L 280,280" stroke="#E317A8" strokeWidth="2" />
              </svg>

              <div className="flex items-center justify-between relative z-10">
                <span className="font-mono text-xs font-bold text-[#E317A8] tracking-widest uppercase">
                  LOCAL RADIUS
                </span>
                <span className="w-3 h-3 rounded-full bg-[#E317A8] animate-ping" />
              </div>

              {/* Central Badge */}
              <div className="text-center relative z-10 my-auto">
                <div className="inline-flex p-4 rounded-2xl bg-[#E317A8] text-white shadow-xl mb-4 pink-glow">
                  <Navigation className="w-8 h-8" />
                </div>
                <h3 className="font-['Barlow_Condensed'] text-3xl font-black uppercase text-white tracking-wider">
                  WRENTHORPE HUB
                </h3>
                <p className="text-xs font-mono text-[#EEF2F6]/70 mt-1 uppercase">
                  WAKEFIELD • WEST YORKSHIRE
                </p>
              </div>

              <div className="p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 text-center relative z-10">
                <span className="text-xs font-mono font-bold text-white uppercase">
                  LOCAL PLUMBING • DIRECT DISPATCH
                </span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
