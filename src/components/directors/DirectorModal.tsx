'use client';

import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { X, Mail, MapPin, Briefcase, ArrowLeft } from 'lucide-react';

interface DirectorModalProps {
  director: {
    name: string;
    image: string;
    designation: string;
    region?: string;
    bio?: string;
    email?: string;
  };
}

export default function DirectorModal({ director }: DirectorModalProps) {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Disables background scrolling when the modal is open
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleClose = () => {
    router.back();
  };

  if (!mounted) return null;

  return createPortal(
    <div className="fixed inset-0 z-[999999] flex items-center justify-center p-4 sm:p-6 overflow-hidden">
      
      {/* 
        The semi-transparent, blurred backdrop 
        - bg-slate-950/70: A deep 70% opacity dark layer
        - backdrop-blur-sm: Adds a subtle blur to background content
      */}
      <div
        onClick={handleClose}
        className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm transition-opacity duration-300 animate-in fade-in"
      />

      {/* Main Modal Card Content */}
      <div className="relative z-10 w-full max-w-2xl bg-white rounded-2xl border border-slate-200 shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200 flex flex-col max-h-[90vh] my-auto">
        
        {/* Top Control Bar with Close and Back Buttons */}
        <div className="bg-slate-50 px-5 py-3 border-b border-slate-100 flex items-center justify-between shrink-0">
          <button
            onClick={handleClose}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 hover:text-sky-700 transition"
          >
            <ArrowLeft size={15} /> Back
          </button>
          <div className="flex gap-2">
            <button
              onClick={handleClose}
              className="flex items-center gap-1.5 text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-800 px-3 py-1.5 rounded-lg transition"
            >
              <X size={16} /> Close
            </button>
          </div>
        </div>

        {/* Modal Main Body (Scrollable interior) */}
        <div className="overflow-y-auto">
          {/* Header/Hero Section of the Card */}
          <div className="bg-[#102A45] text-white pt-6 pb-6 px-6 text-center flex flex-col items-center">
            <div className="relative w-32 h-36 sm:w-36 sm:h-40 rounded-2xl border-4 border-white/20 bg-slate-200 shadow-xl overflow-hidden shrink-0 mb-4">
              <Image
                src={director.image}
                alt={director.name}
                fill
                unoptimized
                className="object-cover object-top"
              />
            </div>
            
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight mb-2">
              {director.name}
            </h2>
          </div>

          {/* Details & Journey Section */}
          <div className="p-6 space-y-4">
            {/* Meta badges/info */}
            <div className="flex flex-wrap justify-center gap-3 font-semibold text-slate-600 text-sm border-b border-slate-100 pb-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-100 rounded-md">
                <Briefcase size={14} className="text-amber-500" />
                {director.designation}
              </span>
              {director.region && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-100 rounded-md">
                  <MapPin size={14} className="text-sky-500" />
                  {director.region}
                </span>
              )}
            </div>

            {/* Professional Journey Text */}
            <div className="space-y-1.5 text-slate-700 text-sm leading-relaxed">
              <h3 className="font-bold text-slate-900 text-xs uppercase tracking-wider">
                Professional Journey
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {director.bio ||
                  `${director.name} serves as a key member of the Board of Directors for Karnataka State Souharda Federal Cooperative Ltd.`}
              </p>
            </div>

            {/* Email Contact Button */}
            {director.email && (
              <div className="pt-3 border-t border-slate-100 flex justify-center">
                <a
                  href={`mailto:${director.email}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#102A45] hover:bg-slate-800 text-white font-medium text-xs rounded-xl transition shadow-sm"
                >
                  <Mail size={14} /> Send Email
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>,
    document.body // Using createPortal is crucial for full-screen modals
  );
}