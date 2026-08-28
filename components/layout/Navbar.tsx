'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, Menu, X, ChevronRight } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/site-data';

interface NavbarProps {
  onOpenQuoteModal: () => void;
}

export default function Navbar({ onOpenQuoteModal }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'SERVICES', href: '#services' },
    { label: 'PROBLEM SOLVER', href: '#problems' },
    { label: 'WHY LMK', href: '#why-lmk' },
    { label: 'ABOUT', href: '#about' },
    { label: 'REVIEWS', href: '#reviews' },
    { label: 'AREAS', href: '#areas' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'glass-nav-light py-2.5 shadow-sm'
            : 'bg-[#FCFCFD]/90 backdrop-blur-md py-4 border-b border-[#D9E0E7]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Left: Brand Logo & Title */}
            <a
              href="#hero"
              aria-label="LMK Plumbing & Heating Services — Home"
              className="flex items-center gap-3 group"
            >
              <div className="relative w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
                <Image
                  src="/images/lmk-original-logo.png"
                  alt="LMK Plumbing & Heating Services"
                  width={58}
                  height={58}
                  className="w-full h-full object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="font-['Barlow_Condensed'] text-xl sm:text-2xl font-extrabold tracking-tight text-[#0F1720] leading-none group-hover:text-[#E317A8] transition-colors">
                  LMK <span className="text-[#E317A8]">PLUMBING</span>
                </span>
                <span className="text-[10px] font-bold tracking-wider text-[#667085] uppercase font-mono mt-0.5">
                  &amp; Heating Services • Wakefield
                </span>
              </div>
            </a>

            {/* Middle: Nav Links (Desktop) */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-xs tracking-wider font-extrabold font-['Barlow_Condensed'] text-[#0F1720] hover:text-[#E317A8] uppercase transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Right: Phone & CTA Button (Desktop) */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href={SITE_CONFIG.phoneLink}
                className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#EEF2F6] hover:bg-[#FCE6F6] text-[#0F1720] hover:text-[#E317A8] transition-all border border-[#D9E0E7]"
              >
                <div className="w-7 h-7 rounded-full bg-[#E317A8] flex items-center justify-center text-white">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[9px] font-bold uppercase tracking-wider text-[#667085] font-mono leading-none">
                    CALL / TEXT LEE
                  </span>
                  <span className="font-mono text-xs font-extrabold text-[#0F1720] leading-tight">
                    {SITE_CONFIG.phoneDisplay}
                  </span>
                </div>
              </a>

              <button
                onClick={onOpenQuoteModal}
                className="px-5 py-2.5 rounded-lg bg-[#E317A8] hover:bg-[#B80E86] text-white font-['Barlow_Condensed'] font-extrabold text-sm tracking-wider uppercase pink-glow hover:shadow-lg transition-all transform hover:-translate-y-0.5"
              >
                GET A QUOTE
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-lg bg-[#EEF2F6] text-[#0F1720] hover:text-[#E317A8] transition-colors border border-[#D9E0E7]"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="fixed inset-0 bg-[#0F1720]/60 backdrop-blur-xs"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed top-20 right-4 left-4 max-w-sm ml-auto bg-[#FFFFFF] rounded-2xl shadow-2xl border border-[#D9E0E7] p-6 z-50 animate-in fade-in slide-in-from-top-4 duration-200">
            <div className="flex flex-col gap-4">
              <div className="pb-3 border-b border-[#EEF2F6]">
                <span className="text-[11px] font-mono font-bold tracking-widest text-[#667085] uppercase">
                  LOCAL SERVICE NAVIGATION
                </span>
              </div>

              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between py-2 text-base font-['Barlow_Condensed'] font-extrabold tracking-wider text-[#0F1720] hover:text-[#E317A8] uppercase transition-colors"
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-[#E317A8]" />
                </a>
              ))}

              <div className="pt-4 border-t border-[#EEF2F6] flex flex-col gap-3">
                <a
                  href={SITE_CONFIG.phoneLink}
                  className="flex items-center justify-center gap-2.5 w-full py-3 rounded-xl bg-[#0F1720] text-white font-mono font-extrabold text-sm"
                >
                  <Phone className="w-4 h-4 text-[#E317A8]" />
                  <span>CALL LEE: {SITE_CONFIG.phoneDisplay}</span>
                </a>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenQuoteModal();
                  }}
                  className="w-full py-3 rounded-xl bg-[#E317A8] text-white font-['Barlow_Condensed'] font-extrabold text-base tracking-wider uppercase pink-glow"
                >
                  GET A QUOTE
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
