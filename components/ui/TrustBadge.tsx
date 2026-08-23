import React from 'react';
import { Star, ShieldCheck, Award, MessageSquare } from 'lucide-react';
import { BUSINESS_DETAILS } from '@/lib/site-data';

export const TrustBadgeRow: React.FC = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 py-2">
      {/* 5 Star Rated */}
      <div className="flex items-center gap-2.5 bg-white/80 backdrop-blur-xs p-3 rounded-xl border border-[#E8EFF6] shadow-xs">
        <div className="flex items-center text-amber-500 bg-amber-50 p-1.5 rounded-lg">
          <Star className="w-4 h-4 fill-amber-400 stroke-amber-500" />
        </div>
        <div>
          <div className="flex items-center gap-1">
            <span className="font-bold text-[#0E2238] text-sm leading-tight">5.0★ Rated</span>
          </div>
          <p className="text-xs text-[#6B7C8F]">Google Verified</p>
        </div>
      </div>

      {/* 122 MyBuilder Reviews */}
      <div className="flex items-center gap-2.5 bg-white/80 backdrop-blur-xs p-3 rounded-xl border border-[#E8EFF6] shadow-xs">
        <div className="flex items-center text-[#1666D9] bg-blue-50 p-1.5 rounded-lg">
          <MessageSquare className="w-4 h-4" />
        </div>
        <div>
          <span className="font-bold text-[#0E2238] text-sm leading-tight">122 Reviews</span>
          <p className="text-xs text-[#6B7C8F]">100% MyBuilder Proof</p>
        </div>
      </div>

      {/* Gas Safe Registered */}
      <div className="flex items-center gap-2.5 bg-white/80 backdrop-blur-xs p-3 rounded-xl border border-[#E8EFF6] shadow-xs">
        <div className="flex items-center text-amber-600 bg-amber-100 p-1.5 rounded-lg">
          <ShieldCheck className="w-4 h-4" />
        </div>
        <div>
          <span className="font-bold text-[#0E2238] text-sm leading-tight">Gas Safe</span>
          <p className="text-xs text-[#6B7C8F]">Registered Specialist</p>
        </div>
      </div>

      {/* Ideal Max Accredited */}
      <div className="flex items-center gap-2.5 bg-white/80 backdrop-blur-xs p-3 rounded-xl border border-[#E8EFF6] shadow-xs">
        <div className="flex items-center text-[#F47A20] bg-orange-50 p-1.5 rounded-lg">
          <Award className="w-4 h-4" />
        </div>
        <div>
          <span className="font-bold text-[#0E2238] text-sm leading-tight">Ideal Max</span>
          <p className="text-xs text-[#6B7C8F]">Accredited Installer</p>
        </div>
      </div>
    </div>
  );
};
