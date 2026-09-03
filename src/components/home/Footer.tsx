'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';

// --- Inline Brand SVG Icons ---
const FacebookIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const TwitterIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.936 9.936 0 0024 4.59z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

interface Division {
  name: string;
  address: string;
  phone: string;
  qrCode: string;
}

const divisions: Division[] = [
  {
    name: 'Bangalore Division',
    address: '"Souharda Sahakari Soudha"\nMalleswaram, Bengaluru - 55.',
    phone: '080-23525546',
    qrCode: '/images/qr-bangalore.png',
  },
  {
    name: 'Belagavi Division',
    address: '#1119/B, Industrial Area,\nAutonagar, Belagavi - 16.',
    phone: '0831-24015',
    qrCode: '/images/qr-belagavi.png',
  },
  {
    name: 'Kalaburagi Division',
    address: 'Site No: 2284, Near CADA,\nKalaburagi - 585 102.',
    phone: '084722-70222',
    qrCode: '/images/qr-kalaburagi.png',
  },
  {
    name: 'Mysore Division',
    address: 'F-13, Shankara matha road,\nMysore - 570 004.',
    phone: '080-23378377',
    qrCode: '/images/qr-mysore.png',
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#526a74] text-white pt-14 pb-8 px-6 lg:px-16 border-t border-slate-600/80">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Main Head Office Section */}
        <div className="text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
            Karnataka State Souharda Federal Cooperative Ltd.
          </h2>
          <p className="text-amber-300 font-semibold text-lg sm:text-xl">
            "Souharda Sahakari Soudha"
          </p>
          <p className="text-slate-200 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            No.68, 1st Floor, Between 17th & 18th Cross, Margosa Road, Malleswaram, Bengaluru - 560 055.
          </p>

          {/* Contact Details */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-3 text-sm font-medium text-slate-100">
            <div className="flex items-center gap-2 bg-slate-700/40 px-4 py-2 rounded-full border border-slate-500/30">
              <Phone className="w-4 h-4 text-amber-300 fill-amber-300" />
              <a href="tel:08023378375" className="hover:text-amber-300 transition-colors">
                080 - 2337 8375 / 76 / 77 / 78 / 79 / 80
              </a>
            </div>
            <div className="flex items-center gap-2 bg-slate-700/40 px-4 py-2 rounded-full border border-slate-500/30">
              <Mail className="w-4 h-4 text-amber-300" />
              <a href="mailto:souharda@souharda.coop" className="hover:text-amber-300 transition-colors">
                souharda@souharda.coop
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center items-center gap-4 pt-3">
            <Link
              href="#"
              aria-label="Facebook"
              className="w-10 h-10 rounded-full border border-slate-300/30 flex items-center justify-center bg-slate-700/30 hover:bg-amber-400 hover:text-slate-900 transition-all duration-200"
            >
              <FacebookIcon />
            </Link>
            <Link
              href="#"
              aria-label="Twitter"
              className="w-10 h-10 rounded-full border border-slate-300/30 flex items-center justify-center bg-slate-700/30 hover:bg-amber-400 hover:text-slate-900 transition-all duration-200"
            >
              <TwitterIcon />
            </Link>
            <Link
              href="#"
              aria-label="Instagram"
              className="w-10 h-10 rounded-full border border-slate-300/30 flex items-center justify-center bg-slate-700/30 hover:bg-amber-400 hover:text-slate-900 transition-all duration-200"
            >
              <InstagramIcon />
            </Link>
            <Link
              href="#"
              aria-label="Location"
              className="w-10 h-10 rounded-full border border-slate-300/30 flex items-center justify-center bg-slate-700/30 hover:bg-amber-400 hover:text-slate-900 transition-all duration-200"
            >
              <MapPin className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <hr className="border-slate-500/50" />

        {/* Divisions Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {divisions.map((div) => (
            <div 
              key={div.name} 
              className="flex flex-col items-center p-5 rounded-2xl bg-slate-700/20 border border-slate-500/20 hover:border-amber-300/40 transition-all duration-300"
            >
              <h3 className="text-amber-300 font-bold text-lg mb-2">{div.name}</h3>
              <p className="text-xs text-slate-200 whitespace-pre-line leading-relaxed min-h-[40px] mb-3">
                {div.address}
              </p>
              
              <div className="flex items-center gap-1.5 text-xs text-slate-200 mb-4 bg-slate-800/40 px-3 py-1.5 rounded-md">
                <Phone className="w-3.5 h-3.5 text-amber-300 fill-amber-300" />
                <span>{div.phone}</span>
              </div>

              {/* QR Code Frame */}
              <div className="w-24 h-24 bg-white p-1.5 rounded-xl shadow-lg relative overflow-hidden group hover:scale-105 transition-transform duration-200">
                <Image
                  src={div.qrCode}
                  alt={`${div.name} QR Code`}
                  fill
                  className="object-contain p-1"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Sub-links & Copyright */}
        <div className="pt-8 border-t border-slate-500/30 text-center text-xs text-slate-300 space-y-3">
          <div className="flex flex-wrap justify-center items-center gap-4 text-slate-200 font-medium">
            <Link href="/" className="hover:text-amber-300 transition-colors">Home</Link>
            <span className="text-slate-500">•</span>
            <Link href="/about" className="hover:text-amber-300 transition-colors">About Us</Link>
            <span className="text-slate-500">•</span>
            <Link href="/act" className="hover:text-amber-300 transition-colors">Souharda Act</Link>
            <span className="text-slate-500">•</span>
            <Link href="/contact" className="hover:text-amber-300 transition-colors">Contact</Link>
          </div>
          <p className="text-slate-300/80">
            © {new Date().getFullYear()} Karnataka State Souharda Federal Cooperative Ltd. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}