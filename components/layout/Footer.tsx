import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, ShieldCheck, Flame, Star, MessageSquare, Award } from 'lucide-react';
import { BUSINESS_DETAILS } from '@/lib/site-data';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#081524] text-white border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand & Owner Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#1666D9] to-[#F47A20] flex items-center justify-center shadow-md">
                <Flame className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="font-extrabold text-xl tracking-tight text-white block leading-tight font-manrope">
                  Gasgenics
                </span>
                <span className="text-xs text-[#5AA9FF] font-semibold tracking-wider uppercase block">
                  Heating & Plumbing
                </span>
              </div>
            </div>

            <p className="text-sm text-[#6B7C8F] leading-relaxed">
              Owner-led heating and plumbing specialist local to Wakefield. Dedicated to fast breakdown diagnosis, honest advice, and immaculate repairs.
            </p>

            <div className="pt-2">
              <p className="text-xs font-bold text-[#5AA9FF] uppercase tracking-wider mb-1">Business Owner</p>
              <p className="text-sm font-semibold text-white">Darren Gubby • Heating Engineer</p>
            </div>
          </div>

          {/* Col 2: Services Quick Links */}
          <div>
            <h4 className="font-bold text-base text-white uppercase tracking-wider font-mono mb-4 text-[#5AA9FF]">
              Specialist Services
            </h4>
            <ul className="space-y-2.5 text-sm text-[#6B7C8F]">
              <li><a href="#services" className="hover:text-white transition-colors">Boiler Diagnostics & Fault Finding</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Emergency Boiler Breakdown Repairs</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Annual Boiler Servicing & Safety Audits</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Ideal Max Boiler Replacement & Upgrades</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Radiator Valve (TRV) & System Flushing</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Natural Gas, LPG & Oil Heating Support</a></li>
            </ul>
          </div>

          {/* Col 3: Contact & Hours */}
          <div>
            <h4 className="font-bold text-base text-white uppercase tracking-wider font-mono mb-4 text-[#5AA9FF]">
              Direct Contact
            </h4>
            <ul className="space-y-3 text-sm text-[#E8EFF6]">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#F47A20] shrink-0 mt-1" />
                <div>
                  <a href={BUSINESS_DETAILS.phoneHref} className="font-bold hover:text-[#5AA9FF] transition-colors">
                    {BUSINESS_DETAILS.phone}
                  </a>
                  <p className="text-xs text-[#6B7C8F]">Direct line to Darren</p>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#1666D9] shrink-0 mt-1" />
                <a href={`mailto:${BUSINESS_DETAILS.email}`} className="hover:text-white transition-colors">
                  {BUSINESS_DETAILS.email}
                </a>
              </li>

              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#FFB347] shrink-0 mt-1" />
                <span className="text-xs text-[#6B7C8F] leading-tight">
                  {BUSINESS_DETAILS.address}
                </span>
              </li>

              <li className="flex items-start gap-3 pt-1">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                <span className="text-xs font-semibold text-emerald-400">
                  {BUSINESS_DETAILS.hours}
                </span>
              </li>
            </ul>
          </div>

          {/* Col 4: Verified Proof & Accreditations */}
          <div>
            <h4 className="font-bold text-base text-white uppercase tracking-wider font-mono mb-4 text-[#5AA9FF]">
              Accreditations & Proof
            </h4>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3 bg-[#0E2238] p-3 rounded-xl border border-white/10">
                <ShieldCheck className="w-6 h-6 text-amber-500 shrink-0" />
                <div>
                  <p className="text-xs font-bold text-white">Gas Safe Registered</p>
                  <p className="text-[11px] text-[#6B7C8F]">Qualified Heating Engineer</p>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-[#0E2238] p-3 rounded-xl border border-white/10">
                <Award className="w-6 h-6 text-[#F47A20] shrink-0" />
                <div>
                  <p className="text-xs font-bold text-white">Ideal Max Accredited</p>
                  <p className="text-[11px] text-[#6B7C8F]">Up to 12 Year Warranties</p>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-[#0E2238] p-3 rounded-xl border border-white/10">
                <MessageSquare className="w-6 h-6 text-[#1666D9] shrink-0" />
                <div>
                  <p className="text-xs font-bold text-white">122 MyBuilder Reviews</p>
                  <p className="text-[11px] text-amber-400 font-semibold">5.0★ Verified Customer Rating</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Rights Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#6B7C8F] gap-4">
          <p>© {new Date().getFullYear()} Gasgenics Heating & Plumbing. All rights reserved.</p>
          <p>Serving Wakefield, Sandal, Horbury, Ossett, Outwood & Surrounds.</p>
        </div>
      </div>
    </footer>
  );
};
