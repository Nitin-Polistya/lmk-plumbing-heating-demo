'use client';

import { SITE_CONFIG } from '@/lib/site-data';

export default function TrustStrip() {
  const items = [
    'LOCAL TO WAKEFIELD',
    'BOILER REPAIRS & INSTALLS',
    'EVERYDAY PLUMBING',
    'CENTRAL HEATING',
    'BATHROOMS & SHOWERS',
    'HIGHLY RATED LOCALLY',
    `DIRECT WITH LEE (${SITE_CONFIG.phoneDisplay})`,
  ];

  return (
    <section className="bg-[#0F1720] text-white py-4 border-y border-[#E317A8]/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-y-3 gap-x-6 text-center">
          {items.map((item, index) => (
            <div key={item} className="flex items-center gap-6">
              <span className="font-['Barlow_Condensed'] font-extrabold text-sm sm:text-base tracking-widest text-[#FCFCFD] uppercase">
                {item}
              </span>
              {index < items.length - 1 && (
                <span className="w-1.5 h-1.5 rounded-full bg-[#E317A8] shrink-0" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
