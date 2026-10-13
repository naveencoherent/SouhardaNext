import React from 'react';
import Link from 'next/link';
import { complianceData, ComplianceItem } from '@/config/compliance';

interface ComplianceCardProps {
  title: string;
  icon: string;
  badge: string;
  headerBg: string;
  headerBorder: string;
  hoverTextColor: string;
  textColor: string;
  items: ComplianceItem[];
  viewAllLink: string;
  viewAllText: string;
  badgeColor?: string;
}

function ComplianceCard({
  title,
  icon,
  badge,
  headerBg,
  headerBorder,
  hoverTextColor,
  textColor,
  items = [],
  viewAllLink,
  viewAllText,
  badgeColor = 'bg-red-600',
}: ComplianceCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg flex flex-col justify-between h-full overflow-hidden border border-slate-200 hover:shadow-2xl transition-all duration-300">
      <div>
        {/* Card Header */}
        <div className={`${headerBg} ${headerBorder} border-b py-3.5 px-4 flex items-center justify-between`}>
          <h3 className="text-white font-bold text-lg flex items-center gap-2">
            <span>{icon}</span> {title}
          </h3>
          <span className="text-xs bg-white/20 text-white font-semibold px-2.5 py-0.5 rounded-full backdrop-blur-sm">
            {badge}
          </span>
        </div>

        {/* Scrollable List Container */}
        <div className="max-h-80 overflow-y-auto p-4 custom-scrollbar">
          <ul className="divide-y divide-slate-100">
            {items.map((item) => (
              <li key={item.id} className="py-3 first:pt-0">
                <a
                  href={item.fileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <div className="flex items-start justify-between gap-2">
                    <p className={`text-slate-800 ${hoverTextColor} text-sm font-medium leading-snug transition-colors`}>
                      <span className="font-bold mr-1">{item.id}.</span> {item.title}
                    </p>
                    {item.isNew && (
                      <span className={`shrink-0 text-[10px] ${badgeColor} text-white font-bold px-1.5 py-0.5 rounded`}>
                        NEW
                      </span>
                    )}
                  </div>
                  {item.date && (
                    <span className="text-[11px] text-slate-400 mt-1 block">
                      Posted: {item.date}
                    </span>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer Link */}
      <div className="p-4 pt-2 border-t border-slate-100 flex justify-center bg-slate-50/50">
        <Link
          href={viewAllLink}
          className={`text-sm font-semibold ${textColor} hover:underline transition-all block w-full text-center py-1`}
        >
          {viewAllText} &rarr;
        </Link>
      </div>
    </div>
  );
}

export default function ComplianceSection() {
  const { circulars = [], recruitment = [], tenders = [] } = complianceData || {};

  return (
    <section className="bg-[#738678] py-12 px-4 sm:px-6 lg:px-8 border-y border-[#5f7063]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-white text-2xl sm:text-3xl font-extrabold tracking-wide drop-shadow-sm">
            Compliance & Key Announcements
          </h2>
          <p className="text-emerald-100/90 text-sm sm:text-base mt-1">
            Access official circulars, job openings, and active procurement tenders
          </p>
        </div>

        {/* 3-Column Card Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          
          <ComplianceCard
            title="Circulars"
            icon="📄"
            badge="Official"
            headerBg="bg-[#738276]"
            headerBorder="border-[#5f6d62]"
            hoverTextColor="group-hover:text-[#738276]"
            textColor="text-[#738276]"
            items={circulars}
            viewAllLink="/regulatory/circulars/"
            viewAllText="View All Circulars"
            badgeColor="bg-red-600"
          />

          <ComplianceCard
            title="Recruitment"
            icon="💼"
            badge="Careers"
            headerBg="bg-[#6F8D75]"
            headerBorder="border-[#5c7761]"
            hoverTextColor="group-hover:text-[#6F8D75]"
            textColor="text-[#6F8D75]"
            items={recruitment}
            viewAllLink="/souharda/recruitment/"
            viewAllText="View All Vacancies"
            badgeColor="bg-blue-600"
          />

          <ComplianceCard
            title="Tenders"
            icon="📢"
            badge="Procurement"
            headerBg="bg-[#7E9082]"
            headerBorder="border-[#6a7a6e]"
            hoverTextColor="group-hover:text-[#7E9082]"
            textColor="text-[#7E9082]"
            items={tenders}
            viewAllLink="/regulatory/tenders/"
            viewAllText="View Active Tenders"
            badgeColor="bg-emerald-600"
          />

        </div>
      </div>
    </section>
  );
}