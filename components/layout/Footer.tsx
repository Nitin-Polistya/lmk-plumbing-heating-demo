'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/site-data';

export default function Footer() {
  return (
    <footer className="bg-[#0B1118] text-white pt-16 pb-24 lg:pb-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand & Logo */}
          <div className="flex flex-col">
            <a
              href="#hero"
              aria-label="LMK Plumbing & Heating Services — Home"
              className="flex items-center gap-3 mb-4 group"
            >
              <div className="relative w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
                <Image
                  src="/images/lmk-original-logo.png"
                  alt="LMK Plumbing & Heating Services"
                  width={64}
                  height={64}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-['Barlow_Condensed'] text-2xl font-black tracking-wide text-white uppercase group-hover:text-[#E317A8] transition-colors">
                LMK <span className="text-[#E317A8]">PLUMBING</span>
              </span>
            </a>

            <p className="text-xs text-[#EEF2F6]/60 leading-relaxed font-normal mb-4">
              {SITE_CONFIG.motto} Local domestic plumbing &amp; heating services from Lee Kovacs around Wrenthorpe and Wakefield.
            </p>

            <div className="text-[11px] font-mono text-[#EEF2F6]/50">
              Based in Wrenthorpe, West Yorkshire
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="flex flex-col">
            <span className="font-['Barlow_Condensed'] text-lg font-extrabold uppercase text-white tracking-wider mb-4">
              QUICK NAVIGATION
            </span>
            <ul className="space-y-2 text-xs font-mono">
              <li>
                <a href="#services" className="text-[#EEF2F6]/70 hover:text-[#E317A8] transition-colors">
                  CORE SERVICES
                </a>
              </li>
              <li>
                <a href="#problems" className="text-[#EEF2F6]/70 hover:text-[#E317A8] transition-colors">
                  PROBLEM SOLVER
                </a>
              </li>
              <li>
                <a href="#why-lmk" className="text-[#EEF2F6]/70 hover:text-[#E317A8] transition-colors">
                  WHY CHOOSE LMK
                </a>
              </li>
              <li>
                <a href="#about" className="text-[#EEF2F6]/70 hover:text-[#E317A8] transition-colors">
                  ABOUT LEE KOVACS
                </a>
              </li>
              <li>
                <a href="#areas" className="text-[#EEF2F6]/70 hover:text-[#E317A8] transition-colors">
                  COVERAGE AREAS
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Core Coverage */}
          <div className="flex flex-col">
            <span className="font-['Barlow_Condensed'] text-lg font-extrabold uppercase text-white tracking-wider mb-4">
              LOCAL COVERAGE
            </span>
            <ul className="space-y-2 text-xs font-mono text-[#EEF2F6]/70">
              <li>• Wrenthorpe</li>
              <li>• Wakefield</li>
              <li>• Ossett</li>
              <li>• Horbury</li>
              <li>• &amp; Surrounding Areas</li>
            </ul>
          </div>

          {/* Col 4: Direct Contact */}
          <div className="flex flex-col">
            <span className="font-['Barlow_Condensed'] text-lg font-extrabold uppercase text-white tracking-wider mb-4">
              DIRECT CONTACT
            </span>
            <div className="space-y-3">
              <a
                href={SITE_CONFIG.phoneLink}
                className="flex items-center gap-2.5 text-sm font-mono font-bold text-white hover:text-[#E317A8] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#E317A8]" />
                <span>{SITE_CONFIG.phoneDisplay}</span>
              </a>

              <a
                href={SITE_CONFIG.emailLink}
                className="flex items-center gap-2.5 text-xs font-mono text-[#EEF2F6]/80 hover:text-[#E317A8] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#E317A8]" />
                <span>{SITE_CONFIG.emailDisplay}</span>
              </a>

              <div className="flex items-center gap-2.5 text-xs font-mono text-[#EEF2F6]/60">
                <MapPin className="w-4 h-4 text-[#E317A8]" />
                <span>Wrenthorpe / Wakefield</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#EEF2F6]/40 font-mono gap-4">
          <span>
            © {new Date().getFullYear()} {SITE_CONFIG.businessName}. All rights reserved.
          </span>
          <span>
            Local Plumbing &amp; Heating Services • Wakefield
          </span>
        </div>

      </div>
    </footer>
  );
}
