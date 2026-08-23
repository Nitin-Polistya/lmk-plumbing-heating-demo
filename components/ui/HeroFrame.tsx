'use client';

import React from 'react';
import Image from 'next/image';
import { ShieldCheck, Flame } from 'lucide-react';

interface HeroFrameProps {
  imageSrc: string;
  altText: string;
  className?: string;
}

export const HeroFrame: React.FC<HeroFrameProps> = ({
  imageSrc,
  altText,
  className = '',
}) => {
  return (
    <div className={`relative group max-w-xl mx-auto w-full ${className}`}>
      {/* Dynamic Background Glows */}
      <div className="absolute -inset-4 bg-gradient-to-r from-[#1666D9]/25 via-[#5AA9FF]/15 to-[#F47A20]/20 rounded-3xl blur-2xl opacity-80 group-hover:opacity-100 transition duration-700 pointer-events-none" />

      {/* Asymmetrical Outer Container */}
      <div className="relative p-3 rounded-[2.5rem] bg-gradient-to-br from-[#0E2238] via-[#162F4C] to-[#081524] shadow-2xl border border-white/10 overflow-hidden">
        
        {/* Decorative Technical Grid Overlay Line */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

        {/* Custom Clipped Inner Frame */}
        <div 
          className="relative rounded-[2rem] overflow-hidden bg-[#0E2238] aspect-[4/3] sm:aspect-[14/11]"
          style={{
            clipPath: 'polygon(0% 0%, 100% 0%, 100% calc(100% - 32px), calc(100% - 32px) 100%, 0% 100%)',
          }}
        >
          {/* Main Image */}
          <Image
            src={imageSrc}
            alt={altText}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
            className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />

          {/* Vignette Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0E2238]/80 via-transparent to-black/10 pointer-events-none" />

          {/* Chamfered Top-Left Badge */}
          <div className="absolute top-4 left-4 z-10 flex items-center gap-2 bg-[#0E2238]/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15 shadow-lg">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 absolute left-3.5" />
            <span className="text-xs font-semibold tracking-wide text-white font-mono uppercase pl-2">
              Wakefield Active • On-Call
            </span>
          </div>

          {/* Bottom Overlay Label */}
          <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between bg-[#0E2238]/85 backdrop-blur-md px-4 py-3 rounded-xl border border-white/10 text-white">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-lg bg-[#1666D9]">
                <Flame className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-xs text-[#5AA9FF] font-medium uppercase tracking-wider">Lead Specialist</p>
                <p className="text-sm font-bold text-white">Darren Gubby • Gas Safe 5★</p>
              </div>
            </div>
            <ShieldCheck className="w-6 h-6 text-[#FFB347]" />
          </div>
        </div>

        {/* Outer Chamfer Decorative Corner Accent */}
        <div className="absolute bottom-1 right-1 w-10 h-10 border-b-2 border-r-2 border-[#F47A20] rounded-br-2xl pointer-events-none" />
      </div>
    </div>
  );
};
