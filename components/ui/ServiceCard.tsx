'use client';

import React from 'react';
import { 
  Wrench, 
  SearchCheck, 
  ShieldCheck, 
  Flame, 
  AlertTriangle, 
  Droplets,
  CheckCircle2,
  ArrowRight,
  Phone
} from 'lucide-react';
import { ServiceItem, BUSINESS_DETAILS } from '@/lib/site-data';

const iconMap: Record<string, React.ReactNode> = {
  Wrench: <Wrench className="w-6 h-6 text-[#1666D9]" />,
  SearchCheck: <SearchCheck className="w-6 h-6 text-[#1666D9]" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-[#1666D9]" />,
  Flame: <Flame className="w-6 h-6 text-[#F47A20]" />,
  AlertTriangle: <AlertTriangle className="w-6 h-6 text-[#F47A20]" />,
  Droplets: <Droplets className="w-6 h-6 text-[#1666D9]" />,
};

interface ServiceCardProps {
  service: ServiceItem;
  featured?: boolean;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, featured = false }) => {
  return (
    <div
      className={`group relative rounded-2xl transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between ${
        featured
          ? 'bg-gradient-to-br from-[#0E2238] via-[#162F4C] to-[#081524] text-white p-7 shadow-xl border border-white/10 hover:border-[#1666D9]/50'
          : 'bg-white text-[#121A24] p-6 shadow-md hover:shadow-xl border border-[#E8EFF6] hover:border-[#1666D9]/30'
      }`}
    >
      {/* Top Header Row */}
      <div>
        <div className="flex items-start justify-between gap-4 mb-4">
          <div
            className={`p-3.5 rounded-xl transition-colors duration-300 ${
              featured
                ? 'bg-white/10 text-white group-hover:bg-[#1666D9]'
                : 'bg-[#E8EFF6] text-[#1666D9] group-hover:bg-[#1666D9] group-hover:text-white'
            }`}
          >
            {iconMap[service.iconName] || <Wrench className="w-6 h-6" />}
          </div>

          {service.tag && (
            <span
              className={`text-xs font-bold px-3 py-1 rounded-full tracking-wide uppercase font-mono ${
                featured
                  ? 'bg-[#F47A20] text-white'
                  : 'bg-blue-50 text-[#1666D9] border border-blue-100'
              }`}
            >
              {service.tag}
            </span>
          )}
        </div>

        {/* Title */}
        <h3
          className={`text-xl font-bold mb-2 transition-colors ${
            featured ? 'text-white group-hover:text-[#5AA9FF]' : 'text-[#0E2238] group-hover:text-[#1666D9]'
          }`}
        >
          {service.title}
        </h3>

        {/* Short Description */}
        <p className={`text-sm leading-relaxed mb-4 ${featured ? 'text-[#E8EFF6]/90' : 'text-[#6B7C8F]'}`}>
          {service.shortDesc}
        </p>

        {/* Features List */}
        <ul className="space-y-2 mb-6">
          {service.features.map((feat, idx) => (
            <li key={idx} className="flex items-start gap-2 text-xs font-medium">
              <CheckCircle2
                className={`w-4 h-4 shrink-0 mt-0.5 ${
                  featured ? 'text-[#FFB347]' : 'text-[#1666D9]'
                }`}
              />
              <span className={featured ? 'text-[#E8EFF6]' : 'text-[#121A24]'}>{feat}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Action Footer */}
      <div className="pt-4 border-t border-dashed border-gray-200/20 flex items-center justify-between">
        <a
          href={BUSINESS_DETAILS.phoneHref}
          className={`inline-flex items-center gap-1.5 text-xs font-bold transition-all ${
            featured
              ? 'text-[#5AA9FF] hover:text-white'
              : 'text-[#1666D9] hover:text-[#0E2238]'
          }`}
        >
          <Phone className="w-3.5 h-3.5" />
          <span>Call Darren for Quote</span>
        </a>

        <a
          href={BUSINESS_DETAILS.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-lg hover:bg-emerald-500/10 text-emerald-600 transition-colors"
          title="WhatsApp Darren"
        >
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  );
};
