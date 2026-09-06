'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, Menu, X, Globe, MapPin, ChevronDown } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function Topbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { locale, t, toggleLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 45);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: t?.nav?.home || 'Home', href: '/' },
    {
      name: t?.nav?.souharda || 'Souharda',
      href: '/souharda',
      dropdown: [
        { title: t?.nav?.coopMovement || 'Co-operative Movement', href: '/souharda/cooperative-movement' },
        { title: t?.nav?.aboutKssfcl || 'All About KSSFCL', href: '/souharda/all-about-kssfcl' },
        { title: t?.nav?.ourVoice || 'Our Voice', href: '/souharda/our-voice' },
        { title: t?.nav?.directors || 'KSSFCL Directors', href: '/souharda/directors' },
        { title: t?.nav?.members || 'Members', href: '/souharda/members' },
        { title: t?.nav?.workforce || "Souharda's Workforce", href: '/souharda/workforce' },
      ],
    },
    {
      name: t?.nav?.regulatory || 'Regulatory',
      href: '/regulatory',
      dropdown: [
        { title: 'Souharda Act', href: '/regulatory/souharda-act' },
        { title: 'Task Force', href: '/regulatory/task-force' },
        { title: 'Orders', href: '/regulatory/orders' },
        { title: 'Liquidation', href: '/regulatory/liquidation' },
        { title: 'Circulars', href: '/regulatory/circulars' },
        { title: 'Tenders', href: '/regulatory/tenders' },
      ],
    },
    {
      name: t?.nav?.education || 'Education',
      href: '/education',
      dropdown: [
        { title: 'Education Home', href: '/education' },
        { title: 'Training', href: '/education/training' },
        { title: 'Swabhimani Sahakari', href: '/education/swabhimani-sahakari' },
        { title: 'Study Materials', href: '/education/study-materials' },
        { title: 'Publications', href: '/education/publications' },
      ],
    },
    {
      name: t?.nav?.services || 'Services',
      href: '/services',
      dropdown: [
        { title: 'E-Stamping', href: '/services/e-stamping' },
        { title: 'Digital Intelligence', href: '/services/digital-intelligence' },
        { title: 'Info to Members', href: '/services/info-to-members' },
        { title: 'CSC Services', href: '/services/csc' },
      ],
    },
    { name: t?.nav?.court || 'Court', href: '/court' },
    { name: t?.nav?.gallery || 'Gallery', href: '/gallery' },
    { name: t?.nav?.connect || 'Connect', href: '/connect' },
  ];

  return (
    <header className="relative w-full z-50 font-sans antialiased">
      
      {/* 1. TOP UTILITY BAR (PULLED LEFT) */}
      <div className="bg-[#00182E] text-white text-xs py-1.5 px-2 lg:px-6 border-b border-white/10">
        <div className="w-full flex flex-wrap justify-between items-center gap-2">
          
          <div className="flex items-center text-[12px] font-normal tracking-wide text-white/95 overflow-x-auto py-0.5">
            <a href="https://easypay.axisbank.co.in/easyPay/makePayment?mid=MzQ4ODU%3D" target="_blank" rel="noopener noreferrer" className="hover:text-amber-300 transition pr-3 border-r border-white/50">
              {t?.topbar?.banking || 'Banking'}
            </a>
            <a href="https://grosbeaksmartcms.com/customer/KSSF/" target="_blank" rel="noopener noreferrer" className="hover:text-amber-300 transition px-3 border-r border-white/50">
              {t?.topbar?.egrievance || 'e-Grievance'}
            </a>
            <a href="https://kssfcpl.greythr.com/uas/portal/auth/login" target="_blank" rel="noopener noreferrer" className="hover:text-amber-300 transition px-3 border-r border-white/50">
              {t?.topbar?.greyhr || 'Grey HR'}
            </a>
            <a href="https://souharda.coop/news.html" target="_blank" rel="noopener noreferrer" className="hover:text-amber-300 transition px-3 border-r border-white/50">
              {t?.topbar?.news || 'News'}
            </a>
            <a href="https://souharda.coop/links.html" target="_blank" rel="noopener noreferrer" className="hover:text-amber-300 transition px-3 border-r border-white/50">
              {t?.topbar?.usefullinks || 'Useful Links'}
            </a>
            <a href="https://venusconsultancy.in/souharda/Souharda_family.html" target="_blank" rel="noopener noreferrer" className="hover:text-amber-300 transition pl-3">
              {t?.topbar?.family || 'Family'}
            </a>
          </div>

          <div className="flex items-center gap-3 text-[12px]">
            <div className="hidden lg:flex items-center text-white/95 border-r border-white/40 pr-3 mr-1">
              <a href="tel:+918023378375" className="flex items-center gap-1 hover:text-amber-300 transition pr-3 border-r border-white/50">
                <Phone className="w-3 h-3 text-white" />
                <span>+91 80-23378375</span>
              </a>
              <a href="mailto:bgudo@souharda.coop" className="flex items-center gap-1 hover:text-amber-300 transition pl-3">
                <Mail className="w-3 h-3 text-white" />
                <span>bgudo@souharda.coop</span>
              </a>
            </div>

            <div className="hidden md:flex items-center gap-1.5">
              <a href="https://www.facebook.com/profile.php?id=100070379508086" target="_blank" rel="noopener noreferrer" className="w-6 h-6 rounded-full bg-white/15 hover:bg-white/30 flex items-center justify-center transition" title="Facebook">
                <svg className="w-3 h-3 fill-white" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="https://x.com/StateSouharda" target="_blank" rel="noopener noreferrer" className="w-6 h-6 rounded-full bg-white/15 hover:bg-white/30 flex items-center justify-center transition" title="Twitter / X">
                <svg className="w-3 h-3 fill-white" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/kssfcl/" target="_blank" rel="noopener noreferrer" className="w-6 h-6 rounded-full bg-white/15 hover:bg-white/30 flex items-center justify-center transition" title="Instagram">
                <svg className="w-3 h-3 fill-white" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://maps.app.goo.gl/Qt6jbSkeQQd2yDQs9" target="_blank" rel="noopener noreferrer" className="w-6 h-6 rounded-full bg-white/15 hover:bg-white/30 flex items-center justify-center transition" title="Location">
                <MapPin className="w-3 h-3 text-white" />
              </a>
            </div>

            <button 
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 text-white font-medium hover:bg-white/20 transition cursor-pointer bg-white/10 px-2.5 py-0.5 rounded border border-white/30 text-xs"
            >
              <Globe className="w-3.5 h-3.5 text-amber-400" /> 
              <span>{locale === 'en' ? 'ಕನ್ನಡ' : 'English'}</span>
            </button>

          </div>

        </div>
      </div>

      {/* 2. MAIN NAVBAR (PULLED LEFT) */}
      <div 
        className={`w-full transition-all duration-300 ease-in-out border-b border-white/10 px-2 lg:px-6 ${
          isScrolled 
            ? 'fixed top-0 left-0 bg-[#001D38]/95 backdrop-blur-md shadow-lg border-white/20 z-50 py-3' 
            : 'relative bg-gradient-to-b from-[#001D38] via-[#0A2E52] to-[#1C3E68] backdrop-blur-sm shadow-sm py-3.5'
        }`}
      >
        <div className="w-full flex justify-between items-center">
          
          <Link href="/" className="flex items-center gap-2.5 group">
           <div className="relative w-12 h-12 lg:w-14 lg:h-14 flex-shrink-0 drop-shadow-md">
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
              <div className="font-bold text-sm sm:text-base lg:text-lg text-amber-400 tracking-wide font-kannada drop-shadow">
                {t?.nav?.title_kn || 'ಕರ್ನಾಟಕ ರಾಜ್ಯ ಸೌಹಾರ್ದ ಸಂಯುಕ್ತ ಸಹಕಾರಿ ನಿಯಮಿತ'}
              </div>
              <div className="text-[11px] sm:text-xs lg:text-sm text-white font-semibold tracking-tight drop-shadow">
                {t?.nav?.title_en || 'Karnataka State Souharda Federal Co-operative Ltd.'}
              </div>
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden xl:flex items-center gap-5 lg:gap-6 font-bold text-sm lg:text-[15px] tracking-wide text-white">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative py-2"
                onMouseEnter={() => setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={`flex items-center gap-1 transition-all duration-200 drop-shadow-sm ${
                    activeDropdown === item.name 
                      ? 'text-amber-400 scale-105' 
                      : 'hover:text-amber-300 hover:scale-105'
                  }`}
                >
                  {item.name}
                  {item.dropdown && (
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        activeDropdown === item.name ? 'rotate-180 text-amber-400' : ''
                      }`}
                    />
                  )}
                </Link>

                {/* Dropdown Container */}
                {item.dropdown && (
                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 6, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 4, scale: 0.98 }}
                        transition={{ duration: 0.15, ease: 'easeOut' }}
                        className="absolute top-full left-0 pt-2 z-50 min-w-[240px]"
                      >
                        <div className="bg-[#001D38] border border-blue-400/30 rounded-xl shadow-2xl py-2 backdrop-blur-lg overflow-hidden divide-y divide-blue-800/40">
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.title}
                              href={subItem.href}
                              className="block px-4 py-2.5 text-xs sm:text-sm font-semibold text-slate-100 hover:bg-amber-400 hover:text-blue-950 transition-all duration-150"
                            >
                              {subItem.title}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Toggle Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="xl:hidden p-2 text-slate-100 hover:text-amber-400 transition"
          >
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>

        </div>
      </div>

      {/* 3. MOBILE MENU SLIDE-OUT */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#001D38] border-b border-blue-400/30 px-6 py-4 space-y-3 text-white">
          {navItems.map((item) => (
            <div key={item.name} className="border-b border-blue-800/40 pb-2">
              <Link
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm font-bold text-amber-400 hover:text-amber-300"
              >
                {item.name}
              </Link>
              {item.dropdown && (
                <div className="pl-4 mt-2 space-y-1.5 border-l border-blue-700/50">
                  {item.dropdown.map((sub) => (
                    <Link
                      key={sub.title}
                      href={sub.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-xs font-semibold text-slate-200 hover:text-amber-300"
                    >
                      {sub.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

    </header>
  );
}