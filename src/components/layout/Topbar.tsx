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
      if (window.scrollY > 45) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Dropdown Items Configuration
  const navItems = [
    { name: t.nav.home, href: '/' },
    {
      name: t.nav.souharda,
      href: '#souharda',
      dropdown: [
        { title: 'Co-operative Movement', href: '/souharda/cooperative-movement' },
        { title: 'All About KSSFCL', href: '/souharda/about-kssfcl' },
        { title: 'Our Voice', href: '/souharda/our-voice' },
        { title: 'KSSFCL Directors', href: '/souharda/directors' },
        { title: 'Members', href: '/souharda/members' },
        { title: "Souharda's Workforce", href: '/souharda/workforce' },
      ],
    },
    {
      name: t.nav.regulatory,
      href: '#regulatory',
      dropdown: [
        { title: 'Acts & Rules', href: '/regulatory/acts-rules' },
        { title: 'Circulars & Orders', href: '/regulatory/circulars' },
        { title: 'Compliance Checklists', href: '/regulatory/compliance' },
        { title: 'Audit Guidelines', href: '/regulatory/audit' },
      ],
    },
    {
      name: t.nav.education,
      href: '#education',
      dropdown: [
        { title: 'Training Programs', href: '/education/training' },
        { title: 'Cooperative Courses', href: '/education/courses' },
        { title: 'Study Materials', href: '/education/materials' },
      ],
    },
    {
      name: t.nav.services,
      href: '#services',
      dropdown: [
        { title: 'Digital E-Stamping', href: '/services/e-stamping' },
        { title: 'Consultancy Services', href: '/services/consultancy' },
        { title: 'IT & Software Support', href: '/services/it-support' },
      ],
    },
    { name: t.nav.court, href: '#court' },
    { name: t.nav.gallery, href: '#gallery' },
    { name: t.nav.connect, href: '#connect' },
  ];

  return (
    <header className="relative w-full z-50 font-sans antialiased">
      
      {/* 1. TOP UTILITY BAR */}
      <div className="bg-[#004B87] text-white text-xs py-1.5 px-4 lg:px-10 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          
          <div className="flex items-center text-[12px] font-normal tracking-wide text-white/95 overflow-x-auto py-0.5">
            <Link href="#banking" className="hover:text-amber-300 transition pr-3 border-r border-white/50">{t.topbar.banking}</Link>
            <Link href="#grievance" className="hover:text-amber-300 transition px-3 border-r border-white/50">{t.topbar.egrievance}</Link>
            <Link href="#greyhr" className="hover:text-amber-300 transition px-3 border-r border-white/50">{t.topbar.greyhr}</Link>
            <Link href="#news" className="hover:text-amber-300 transition px-3 border-r border-white/50">{t.topbar.news}</Link>
            <Link href="#useful-links" className="hover:text-amber-300 transition px-3 border-r border-white/50">{t.topbar.usefullinks}</Link>
            <Link href="#family" className="hover:text-amber-300 transition pl-3">{t.topbar.family}</Link>
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
              <a href="#" className="w-6 h-6 rounded-full bg-white/15 hover:bg-white/30 flex items-center justify-center transition" title="Facebook">
                <svg className="w-3 h-3 fill-white" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="w-6 h-6 rounded-full bg-white/15 hover:bg-white/30 flex items-center justify-center transition" title="Twitter / X">
                <svg className="w-3 h-3 fill-white" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="#" className="w-6 h-6 rounded-full bg-white/15 hover:bg-white/30 flex items-center justify-center transition" title="Instagram">
                <svg className="w-3 h-3 fill-white" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" className="w-6 h-6 rounded-full bg-white/15 hover:bg-white/30 flex items-center justify-center transition" title="Location">
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

   {/* 2. MAIN NAVBAR */}
      <div 
        className={`w-full transition-all duration-300 ease-in-out border-b px-4 lg:px-10 ${
          isScrolled 
            ? 'fixed top-0 left-0 bg-[#004B87]/95 backdrop-blur-md shadow-2xl border-white/20 z-50 py-3' 
            : 'relative bg-gradient-to-b from-[#003865]/90 via-[#003865]/60 to-transparent backdrop-blur-md border-white/10 shadow-xl py-4'
        }`}
      >
      
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          
          {/* Brand Logo & Title */}
          <Link href="/" className="flex items-center gap-3.5 group">
            <div className="relative w-14 h-14 flex-shrink-0 drop-shadow-md">
              <Image
                src="/images/logo/KSSFCL.png"
                alt="KSSFCL Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="leading-snug">
              <div className="font-bold text-base lg:text-lg text-amber-400 tracking-wide font-kannada drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                {t.nav.title_kn}
              </div>
              <div className="text-xs lg:text-sm text-white font-semibold tracking-tight drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                {t.nav.title_en}
              </div>
            </div>
          </Link>

          {/* Desktop Navigation with Dropdowns */}
          <nav className="hidden xl:flex items-center gap-7 font-bold text-sm lg:text-[15px] tracking-wide text-white">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative py-2"
                onMouseEnter={() => setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={`flex items-center gap-1 transition-all duration-200 drop-shadow-[0_1px_2px_rgba(0,0,0,0.6)] ${
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
                        initial={{ opacity: 0, y: 8, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 4, scale: 0.98 }}
                        transition={{ duration: 0.15, ease: 'easeOut' }}
                        className="absolute top-full left-0 w-60 bg-[#00284d] border border-blue-400/30 rounded-xl shadow-2xl py-2 z-50 backdrop-blur-lg overflow-hidden"
                      >
                        <div className="divide-y divide-blue-800/40">
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

          {/* Mobile Menu Button */}
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
        <div className="xl:hidden bg-[#00284d] border-b border-white/10 px-6 py-4 space-y-3 text-slate-100">
          {navItems.map((item) => (
            <div key={item.name} className="border-b border-white/5 pb-2">
              <Link
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm font-semibold text-amber-300 hover:text-amber-400"
              >
                {item.name}
              </Link>
              {item.dropdown && (
                <div className="pl-4 mt-2 space-y-1.5 border-l border-white/10">
                  {item.dropdown.map((sub) => (
                    <Link
                      key={sub.title}
                      href={sub.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-xs text-slate-300 hover:text-amber-400"
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