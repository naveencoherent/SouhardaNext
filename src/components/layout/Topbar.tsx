'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Phone,
  Mail,
  Globe,
  MapPin,
  ChevronDown,
  Menu,
  X,
  ExternalLink,
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { NAV_ITEMS } from '../../config/nav';

export default function Topbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState<string | null>(null);

  const { locale, t, toggleLanguage } = useLanguage();

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 45);
          ticking = false;
        });
        ticking = true;
      }
    };

    setIsScrolled(window.scrollY > 45);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = NAV_ITEMS.map((item) => {
    const navTranslation = t?.nav as Record<string, string> | undefined;
    const name = navTranslation?.[item.nameKey] || item.fallbackName;
    return {
      ...item,
      name,
    };
  });

  const toggleMobileSubmenu = useCallback((key: string) => {
    setOpenMobileSubmenu((prev) => (prev === key ? null : key));
  }, []);

  return (
    <header className="relative z-[9999] w-full max-w-full font-sans antialiased">
      {/* 1. TOP UTILITY BAR */}
      <div className="bg-[#00182E] text-white text-xs py-1.5 px-2 lg:px-6 border-b border-white/10 relative z-[9999]">
        <div className="w-full flex flex-wrap justify-between items-center gap-2">
          {/* Left Utility Links */}
          <div className="flex items-center text-[12px] font-normal tracking-wide text-white/95 overflow-x-auto py-0.5 whitespace-nowrap max-w-full no-scrollbar">
            <a
              href="https://easypay.axis.bank.in/easyPay/makePayment?mid=MzQ4ODU%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-300 transition-colors py-0.5 pr-3 border-r border-white/20"
            >
              {t?.topbar?.banking || 'Banking'}
            </a>
            <a
              href="https://grosbeaksmartcms.com/customer/KSSF/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-300 transition px-3 border-r border-white/50"
            >
              {t?.topbar?.egrievance || 'e-Grievance'}
            </a>
            <a
              href="https://kssfcpl.greythr.com/uas/portal/auth/login"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-300 transition px-3 border-r border-white/50"
            >
              {t?.topbar?.greyhr || 'Grey HR'}
            </a>
            <a
              href="https://souharda.coop/news.html"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-300 transition px-3 border-r border-white/50"
            >
              {t?.topbar?.news || 'News'}
            </a>
            
            <Link
              href="/links"
              className="hidden md:inline-block hover:text-amber-300 transition px-3 border-r border-white/50"
            >
              {t?.topbar?.usefullinks || 'Useful Links'}
            </Link>

            <Link
              href="/family"
              className="hover:text-amber-300 transition pl-3"
            >
              {t?.topbar?.family || 'Family'}
            </Link>
          </div>

          {/* Right Utility Area */}
          <div className="flex items-center gap-3 text-[12px]">
            <div className="hidden lg:flex items-center text-white/95 border-r border-white/40 pr-3 mr-1">
              <a
                href="tel:+918023378375"
                className="flex items-center gap-1 hover:text-amber-300 transition pr-3 border-r border-white/50"
              >
                <Phone className="w-3 h-3 text-white" aria-hidden="true" />
                <span>+91 80-23378375</span>
              </a>
              <a
                href="mailto:bgudo@souharda.coop"
                className="flex items-center gap-1 hover:text-amber-300 transition pl-3"
              >
                <Mail className="w-3 h-3 text-white" aria-hidden="true" />
                <span>bgudo@souharda.coop</span>
              </a>
            </div>

            {/* Social Icons */}
            <div className="hidden md:flex items-center gap-1.5">
              <a
                href="https://www.facebook.com/profile.php?id=100070379508086"
                target="_blank"
                rel="noopener noreferrer"
                className="w-6 h-6 rounded-full bg-white/15 hover:bg-white/30 flex items-center justify-center transition"
                aria-label="Facebook"
              >
                <svg className="w-3 h-3 fill-white" aria-hidden="true" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://x.com/StateSouharda"
                target="_blank"
                rel="noopener noreferrer"
                className="w-6 h-6 rounded-full bg-white/15 hover:bg-white/30 flex items-center justify-center transition"
                aria-label="Twitter / X"
              >
                <svg className="w-3 h-3 fill-white" aria-hidden="true" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/kssfcl/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-6 h-6 rounded-full bg-white/15 hover:bg-white/30 flex items-center justify-center transition"
                aria-label="Instagram"
              >
                <svg className="w-3 h-3 fill-white" aria-hidden="true" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.947-.072 4.354-.2 6.782-2.618-6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.79 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://maps.app.goo.gl/Qt6jbSkeQQd2yDQs9"
                target="_blank"
                rel="noopener noreferrer"
                className="w-6 h-6 rounded-full bg-white/15 hover:bg-white/30 flex items-center justify-center transition"
                aria-label="Location"
              >
                <MapPin className="w-3 h-3 text-white" aria-hidden="true" />
              </a>
            </div>

            {/* --- OLD WEBSITE LINK --- */}
            <a
              href="/legacy/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-400/40 font-bold px-2.5 py-1 rounded transition text-[11px]"
            >
              <span>Old Website</span>
              <ExternalLink className="w-3 h-3" />
            </a>

            {/* Language Toggle Button */}
            <button
              type="button"
              onClick={() => toggleLanguage()}
              className="flex items-center gap-1 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold px-2.5 py-1 rounded transition text-[11px]"
            >
              <Globe className="w-3 h-3" />
              <span>{locale === 'kn' ? 'English' : 'ಕನ್ನಡ'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. MAIN NAVBAR */}
      <div
        className={`w-full transition-all duration-300 ease-in-out border-b border-white/10 px-2 lg:px-6 relative z-[9999] ${
          isScrolled
            ? 'fixed top-0 left-0 bg-[#001D38]/95 backdrop-blur-md shadow-2xl border-white/20 py-3'
            : 'relative bg-gradient-to-b from-[#001D38] via-[#0A2E52] to-[#1C3E68] backdrop-blur-sm shadow-sm py-3.5'
        }`}
      >
        <div className="w-full flex justify-between items-center gap-4">
          <Link href="/" className="flex items-center gap-2.5 group flex-shrink-0">
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 flex-shrink-0 drop-shadow-md">
              <Image
                src="/images/logo/KSSFCL.png"
                alt="KSSFCL Logo"
                fill
                sizes="(max-width: 1024px) 48px, 56px"
                className="object-contain"
                priority
              />
            </div>

            <div className="leading-snug">
              <div className="font-bold text-xs sm:text-sm lg:text-lg text-amber-400 tracking-wide font-kannada drop-shadow">
                {t?.nav?.title_kn || 'ಕರ್ನಾಟಕ ರಾಜ್ಯ ಸೌಹಾರ್ದ ಸಂಯುಕ್ತ ಸಹಕಾರಿ ನಿಯಮಿತ'}
              </div>
              <div className="text-[10px] sm:text-xs lg:text-sm text-white font-semibold tracking-tight drop-shadow">
                {t?.nav?.title_en || 'Karnataka State Souharda Federal Co-operative Ltd.'}
              </div>
            </div>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden lg:flex flex-wrap items-center justify-end gap-2.5 sm:gap-4 xl:gap-6 font-bold text-xs sm:text-sm xl:text-[15px] tracking-wide text-white relative z-[9999]">
            {navItems.map((item) => {
              const hasDropdown = Boolean(item.dropdown && item.dropdown.length > 0);

              if (item.href && !hasDropdown) {
                return (
                  <div key={item.nameKey} className="relative py-2">
                    <Link
                      href={item.href}
                      className="flex items-center gap-1 transition-all duration-200 drop-shadow-sm cursor-pointer hover:text-amber-300 hover:scale-105"
                    >
                      {item.name}
                    </Link>
                  </div>
                );
              }

              return (
                <div key={item.nameKey} className="relative py-2 group">
                  <button
                    type="button"
                    className="flex items-center gap-1 transition-all duration-200 drop-shadow-sm cursor-pointer select-none bg-transparent border-0 font-bold text-inherit p-0 group-hover:text-amber-300 group-hover:scale-105"
                  >
                    <span>{item.name}</span>
                    <ChevronDown
                      className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180 group-hover:text-amber-300"
                      aria-hidden="true"
                    />
                  </button>

                  {/* Dropdown Menu */}
                  {hasDropdown && (
                    <div className="absolute top-full left-0 pt-2 z-[10000] min-w-[240px] hidden group-hover:block">
                      <div className="bg-[#001D38] border border-blue-400/30 rounded-xl shadow-2xl py-2 backdrop-blur-lg overflow-hidden divide-y divide-blue-800/40">
                        {item.dropdown!.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            className="block px-4 py-2.5 text-xs sm:text-sm font-semibold text-slate-100 hover:bg-amber-400 hover:text-blue-950 transition-all duration-150 cursor-pointer"
                          >
                            {subItem.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* MOBILE TOGGLE */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition"
            aria-label="Toggle Navigation"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* MOBILE NAVIGATION DRAWER */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="lg:hidden overflow-hidden bg-[#00182E] border-t border-white/10 mt-3 rounded-b-xl relative z-[10000]"
            >
              <div className="flex flex-col p-4 gap-3 text-white text-sm font-bold">
                {/* Mobile Direct Old Website Link */}
                <a
                  href="/legacy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between py-2 px-3 rounded-lg bg-amber-500/20 text-amber-300 border border-amber-400/30 text-xs font-bold"
                >
                  <span>Visit Old Website Portal</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                {navItems.map((item) => {
                  const hasDropdown = Boolean(item.dropdown && item.dropdown.length > 0);
                  const isSubmenuOpen = openMobileSubmenu === item.nameKey;

                  return (
                    <div key={item.nameKey} className="flex flex-col gap-1">
                      {item.href && !hasDropdown ? (
                        <Link
                          href={item.href}
                          onClick={() => {
                            setMobileMenuOpen(false);
                            setOpenMobileSubmenu(null);
                          }}
                          className="py-1.5 hover:text-amber-400 transition"
                        >
                          {item.name}
                        </Link>
                      ) : (
                        <button
                          type="button"
                          onClick={() => toggleMobileSubmenu(item.nameKey)}
                          aria-expanded={isSubmenuOpen}
                          className="flex items-center justify-between py-1.5 text-amber-400/90 text-sm font-bold w-full text-left"
                        >
                          <span>{item.name}</span>
                          <ChevronDown
                            className={`w-4 h-4 transition-transform duration-200 ${
                              isSubmenuOpen ? 'rotate-180 text-amber-400' : ''
                            }`}
                            aria-hidden="true"
                          />
                        </button>
                      )}

                      {hasDropdown && isSubmenuOpen && (
                        <div className="pl-3 flex flex-col gap-1.5 my-1 border-l-2 border-amber-400/30">
                          {item.dropdown!.map((subItem) => (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              onClick={() => {
                                setMobileMenuOpen(false);
                                setOpenMobileSubmenu(null);
                              }}
                              className="py-1.5 text-xs font-semibold text-slate-200 hover:text-amber-300 transition"
                            >
                              {subItem.title}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}