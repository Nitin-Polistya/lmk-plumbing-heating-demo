'use client';

import { Phone, Mail, ArrowRight } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/site-data';

interface ContactCTAProps {
  onOpenQuoteModal: () => void;
}

export default function ContactCTA({ onOpenQuoteModal }: ContactCTAProps) {
  return (
    <section className="py-20 lg:py-28 bg-[#0F1720] text-white relative overflow-hidden border-t border-[#E317A8]/30">
      {/* Background Accent Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#E317A8]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E317A8]/15 border border-[#E317A8]/40 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#E317A8] animate-pulse" />
            <span className="font-mono text-xs font-bold text-[#E317A8] uppercase tracking-wider">
              DIRECT LOCAL ENQUIRIES
            </span>
          </div>

          <h2 className="font-['Barlow_Condensed'] text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white leading-none mb-6">
            NEED A PLUMBER <br />
            <span className="text-[#E317A8]">OR HEATING ENGINEER?</span>
          </h2>

          <p className="text-lg sm:text-xl text-[#EEF2F6]/80 leading-relaxed font-normal mb-10">
            From small repairs to boiler and heating work, call or text Lee Kovacs directly to discuss the job around Wakefield.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a
              href={SITE_CONFIG.phoneLink}
              className="flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#E317A8] hover:bg-[#B80E86] text-white font-['Barlow_Condensed'] font-extrabold text-xl tracking-wider uppercase transition-all pink-glow w-full sm:w-auto"
            >
              <Phone className="w-5 h-5" />
              <span>CALL / TEXT LEE: {SITE_CONFIG.phoneDisplay}</span>
            </a>

            <a
              href={SITE_CONFIG.emailLink}
              className="flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#15202B] hover:bg-white/10 text-white border border-white/20 font-['Barlow_Condensed'] font-extrabold text-xl tracking-wider uppercase transition-colors w-full sm:w-auto"
            >
              <Mail className="w-5 h-5 text-[#E317A8]" />
              <span>EMAIL LMK</span>
            </a>
          </div>

          <button
            onClick={onOpenQuoteModal}
            className="inline-flex items-center gap-2 text-sm font-mono font-bold text-[#EEF2F6]/70 hover:text-[#E317A8] transition-colors"
          >
            <span>Or prepare an online quote enquiry details</span>
            <ArrowRight className="w-4 h-4" />
          </button>

        </div>

      </div>
    </section>
  );
}
