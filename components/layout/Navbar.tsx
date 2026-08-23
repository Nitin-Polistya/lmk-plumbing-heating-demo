'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Phone, Menu, X, Flame, MessageSquare } from 'lucide-react';
import { BUSINESS_DETAILS } from '@/lib/site-data';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Active section calculation
      const sections = ['services', 'why-us', 'about-darren', 'reviews', 'areas'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Why Gasgenics', href: '#why-us', id: 'why-us' },
    { name: 'About Darren', href: '#about-darren', id: 'about-darren' },
    { name: 'Reviews', href: '#reviews', id: 'reviews' },
    { name: 'Areas Covered', href: '#areas', id: 'areas' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass-nav py-3 shadow-lg'
          : 'bg-[#0E2238] py-4 border-b border-white/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Business Name */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#1666D9] to-[#F47A20] flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
              <Flame className="w-6 h-6 text-white" />
            </div>
            <div>
              <span className="font-extrabold text-lg sm:text-xl tracking-tight text-white block leading-tight font-manrope">
                Gasgenics
              </span>
              <span className="text-[10px] sm:text-xs text-[#5AA9FF] font-semibold tracking-wider uppercase block">
                Heating & Plumbing
              </span>
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-[#5AA9FF] relative py-1 ${
                  activeSection === link.id ? 'text-[#5AA9FF] font-semibold' : 'text-gray-200'
                }`}
              >
                {link.name}
                {activeSection === link.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#F47A20] rounded-full" />
                )}
              </a>
            ))}
          </nav>

          {/* Right Desktop CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={BUSINESS_DETAILS.phoneHref}
              className="inline-flex items-center gap-2 bg-[#F47A20] hover:bg-[#d96511] text-white px-5 py-2.5 rounded-full font-bold text-sm shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:scale-95"
            >
              <Phone className="w-4 h-4 animate-pulse" />
              <span>Call 07770 683797</span>
            </a>
          </div>

          {/* Mobile Hamburger Toggle & Quick Call */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={BUSINESS_DETAILS.phoneHref}
              className="bg-[#F47A20] text-white px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call</span>
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-200 hover:text-white rounded-lg focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#0E2238] border-b border-white/10 px-4 pt-4 pb-6 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-medium text-gray-200 hover:text-[#5AA9FF] py-2 border-b border-white/5"
            >
              {link.name}
            </a>
          ))}

          <div className="pt-3 grid grid-cols-2 gap-3">
            <a
              href={BUSINESS_DETAILS.phoneHref}
              className="flex items-center justify-center gap-2 bg-[#1666D9] text-white py-3 rounded-xl font-bold text-sm"
            >
              <Phone className="w-4 h-4" />
              <span>Call Darren</span>
            </a>

            <a
              href={BUSINESS_DETAILS.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-emerald-600 text-white py-3 rounded-xl font-bold text-sm"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
