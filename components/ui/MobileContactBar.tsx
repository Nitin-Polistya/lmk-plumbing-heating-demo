'use client';

import { Phone, FileText } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/site-data';

interface MobileContactBarProps {
  onOpenQuoteModal: () => void;
}

export default function MobileContactBar({ onOpenQuoteModal }: MobileContactBarProps) {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 h-[56px] bg-[#FFFFFF] border-t border-[#D9E0E7] shadow-[0_-4px_20px_rgba(0,0,0,0.08)] flex items-center px-3 py-2 gap-2">
      
      {/* Left: Call Lee Button */}
      <a
        href={SITE_CONFIG.phoneLink}
        className="flex-1 h-full flex items-center justify-center gap-2 rounded-lg bg-[#0F1720] text-white font-['Barlow_Condensed'] font-extrabold text-sm tracking-wider uppercase"
      >
        <Phone className="w-4 h-4 text-[#E317A8]" />
        <span>CALL LEE</span>
      </a>

      {/* Right: Get a Quote Button */}
      <button
        onClick={onOpenQuoteModal}
        className="flex-1 h-full flex items-center justify-center gap-2 rounded-lg bg-[#E317A8] text-white font-['Barlow_Condensed'] font-extrabold text-sm tracking-wider uppercase pink-glow"
      >
        <FileText className="w-4 h-4" />
        <span>GET A QUOTE</span>
      </button>

    </div>
  );
}
