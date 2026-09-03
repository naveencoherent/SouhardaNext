import Link from 'next/link';
import { complianceData } from '@/config/compliance';

export default function ComplianceSection() {
  const { circulars, recruitment, tenders } = complianceData;

  return (
    <section className="bg-[#738678] py-12 px-4 sm:px-6 lg:px-8 border-y border-[#5f7063]">
      <div className="max-w-7xl mx-auto">
        
        {/* Banner Title */}
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
          
          {/* Circulars Box */}
          <div className="bg-white rounded-xl shadow-lg flex flex-col justify-between h-full overflow-hidden border border-slate-200 hover:shadow-2xl transition-all duration-300">
            <div>
              <div className="bg-[#738276] border-b border-[#5f6d62] py-3.5 px-4 flex items-center justify-between">
                <h3 className="text-white font-bold text-lg flex items-center gap-2">
                  <span>📄</span> Circulars
                </h3>
                <span className="text-xs bg-white/20 text-white font-semibold px-2.5 py-0.5 rounded-full backdrop-blur-sm">Official</span>
              </div>

              {/* Scrollable List Container */}
              <div className="max-h-80 overflow-y-auto p-4 custom-scrollbar">
                <ul className="divide-y divide-slate-100">
                  {circulars.map((item) => (
                    <li key={item.id} className="py-3 first:pt-0">
                      <a href={item.fileUrl} target="_blank" rel="noopener noreferrer" className="group block">
                        <div className="flex items-start justify-between gap-2">
                          <p className="text-slate-800 group-hover:text-[#738276] text-sm font-medium leading-snug transition-colors">
                            <span className="font-bold mr-1">{item.id}.</span> {item.title}
                          </p>
                          {item.isNew && <span className="shrink-0 text-[10px] bg-red-600 text-white font-bold px-1.5 py-0.5 rounded">NEW</span>}
                        </div>
                        {item.date && <span className="text-[11px] text-slate-400 mt-1 block">Posted: {item.date}</span>}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="p-4 pt-2 border-t border-slate-100 flex justify-center bg-slate-50/50">
              <Link href="/circulars" className="text-sm font-semibold text-[#738276] hover:underline transition-all">
                View All Circulars &rarr;
              </Link>
            </div>
          </div>

          {/* Recruitment Box */}
          <div className="bg-white rounded-xl shadow-lg flex flex-col justify-between h-full overflow-hidden border border-slate-200 hover:shadow-2xl transition-all duration-300">
            <div>
              <div className="bg-[#6F8D75] border-b border-[#5c7761] py-3.5 px-4 flex items-center justify-between">
                <h3 className="text-white font-bold text-lg flex items-center gap-2">
                  <span>💼</span> Recruitment
                </h3>
                <span className="text-xs bg-white/20 text-white font-semibold px-2.5 py-0.5 rounded-full backdrop-blur-sm">Careers</span>
              </div>

              {/* Scrollable List Container */}
              <div className="max-h-80 overflow-y-auto p-4 custom-scrollbar">
                <ul className="divide-y divide-slate-100">
                  {recruitment.map((item) => (
                    <li key={item.id} className="py-3 first:pt-0">
                      <a href={item.fileUrl} target="_blank" rel="noopener noreferrer" className="group block">
                        <div className="flex items-start justify-between gap-2">
                          <p className="text-slate-800 group-hover:text-[#6F8D75] text-sm font-medium leading-snug transition-colors">
                            <span className="font-bold mr-1">{item.id}.</span> {item.title}
                          </p>
                          {item.isNew && <span className="shrink-0 text-[10px] bg-blue-600 text-white font-bold px-1.5 py-0.5 rounded">NEW</span>}
                        </div>
                        {item.date && <span className="text-[11px] text-slate-400 mt-1 block">Posted: {item.date}</span>}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="p-4 pt-2 border-t border-slate-100 flex justify-center bg-slate-50/50">
              <Link href="/recruitment" className="text-sm font-semibold text-[#6F8D75] hover:underline transition-all">
                View All Vacancies &rarr;
              </Link>
            </div>
          </div>

          {/* Tenders Box */}
          <div className="bg-white rounded-xl shadow-lg flex flex-col justify-between h-full overflow-hidden border border-slate-200 hover:shadow-2xl transition-all duration-300">
            <div>
              <div className="bg-[#7E9082] border-b border-[#6a7a6e] py-3.5 px-4 flex items-center justify-between">
                <h3 className="text-white font-bold text-lg flex items-center gap-2">
                  <span>📢</span> Tenders
                </h3>
                <span className="text-xs bg-white/20 text-white font-semibold px-2.5 py-0.5 rounded-full backdrop-blur-sm">Procurement</span>
              </div>

              {/* Scrollable List Container */}
              <div className="max-h-80 overflow-y-auto p-4 custom-scrollbar">
                <ul className="divide-y divide-slate-100">
                  {tenders.map((item) => (
                    <li key={item.id} className="py-3 first:pt-0">
                      <a href={item.fileUrl} target="_blank" rel="noopener noreferrer" className="group block">
                        <div className="flex items-start justify-between gap-2">
                          <p className="text-slate-800 group-hover:text-[#7E9082] text-sm font-medium leading-snug transition-colors">
                            <span className="font-bold mr-1">{item.id}.</span> {item.title}
                          </p>
                          {item.isNew && <span className="shrink-0 text-[10px] bg-emerald-600 text-white font-bold px-1.5 py-0.5 rounded">NEW</span>}
                        </div>
                        {item.date && <span className="text-[11px] text-slate-400 mt-1 block">Posted: {item.date}</span>}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="p-4 pt-2 border-t border-slate-100 flex justify-center bg-slate-50/50">
              <Link href="/tenders" className="text-sm font-semibold text-[#7E9082] hover:underline transition-all">
                View Active Tenders &rarr;
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}