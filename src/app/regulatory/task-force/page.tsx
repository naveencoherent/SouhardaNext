import Link from 'next/link';
import RegulatoryHero from '@/components/common/RegulatoryHero';
import { 
  TrendingUp, 
  Eye, 
  HelpingHand, 
  FileText, 
  Download, 
  Info 
} from 'lucide-react';

export default function TaskforcePage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      {/* Shared Hero Component */}
      <RegulatoryHero 
        title="Taskforce"
        subtitle="Empowering Cooperatives from Vulnerability to Strength"
        tag="REVITALIZATION & CONSULTANCY"
      />

      {/* Objective & Path of Transformation Section */}
      <section className="py-16 max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">Our Objective</h2>
            <p className="text-slate-600 leading-relaxed">
              The Taskforce is designed to be the &apos;Internal Consultant&apos; for our member cooperatives. Our goal is to restructure entire financial statuses and monitor performance time-to-time to prevent cooperatives from slipping into liquidation or loss.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-white p-8 border border-slate-200 rounded-2xl shadow-sm">
              <h3 className="text-2xl font-black text-blue-600 mb-2">
                Weak &rarr; Normal &rarr; Vibrant
              </h3>
              <p className="text-slate-500 font-medium text-sm">
                The Path of Transformation
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="bg-slate-100 py-16 border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {/* Financial Stabilizing */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col items-center">
              <div className="p-4 bg-blue-50 text-blue-600 rounded-2xl mb-4">
                <TrendingUp className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold mb-2">Financial Stabilizing</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Deep audit and restructuring of financial assets to restore liquidity.
              </p>
            </div>

            {/* Periodic Monitoring */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col items-center">
              <div className="p-4 bg-blue-50 text-blue-600 rounded-2xl mb-4">
                <Eye className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold mb-2">Periodic Monitoring</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                On-ground inspections and data tracking to ensure progress is maintained.
              </p>
            </div>

            {/* Handholding Support */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col items-center">
              <div className="p-4 bg-blue-50 text-blue-600 rounded-2xl mb-4">
                <HelpingHand className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-bold mb-2">Handholding Support</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Mentoring the board of directors to adopt modern cooperative practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statutory Resources / Downloads Section */}
      <section id="downloads" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Info Side */}
            <div className="lg:col-span-5 space-y-4">
              <h2 className="text-3xl font-bold text-slate-900">Statutory Resources</h2>
              <p className="text-slate-600">
                Access the complete legal framework of the Karnataka Souharda Sahakari Act, 1997 and its subsequent amendments.
              </p>
              <div className="flex items-start gap-3 pt-2">
                <Info className="w-6 h-6 text-blue-600 shrink-0 mt-0.5" />
                <p className="text-xs text-slate-500 leading-relaxed">
                  These documents are provided in PDF format for official reference and compliance purposes.
                </p>
              </div>
            </div>

            {/* Downloads Cards */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* English PDF */}
                <div className="p-6 border border-slate-200 rounded-2xl bg-slate-50 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-4 mb-4">
                    <FileText className="w-8 h-8 text-red-600 shrink-0" />
                    <div>
                      <h3 className="font-bold text-slate-900">Souharda Act 1997</h3>
                      <span className="text-[10px] uppercase font-semibold text-slate-500">
                        English Version
                      </span>
                    </div>
                  </div>
                  <Link
                    href="/Assets/docs/Souharda_Act_English.pdf"
                    target="_blank"
                    className="inline-flex items-center justify-center gap-2 w-full py-2 px-4 border border-slate-900 text-slate-900 font-medium text-xs rounded-full hover:bg-slate-900 hover:text-white transition-colors"
                  >
                    <Download className="w-4 h-4" /> Download PDF
                  </Link>
                </div>

                {/* Kannada PDF */}
                <div className="p-6 border border-slate-200 rounded-2xl bg-slate-50 hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-4 mb-4">
                    <FileText className="w-8 h-8 text-red-600 shrink-0" />
                    <div>
                      <h3 className="font-bold text-slate-900">ಸೌಹಾರ್ದ ಕಾಯ್ದೆ ೧೯೯೭</h3>
                      <span className="text-[10px] uppercase font-semibold text-slate-500">
                        Kannada Version
                      </span>
                    </div>
                  </div>
                  <Link
                    href="/Assets/docs/Souharda_Act_Kannada.pdf"
                    target="_blank"
                    className="inline-flex items-center justify-center gap-2 w-full py-2 px-4 border border-slate-900 text-slate-900 font-medium text-xs rounded-full hover:bg-slate-900 hover:text-white transition-colors"
                  >
                    <Download className="w-4 h-4" /> ಡೌನ್‌ಲೋಡ್ PDF
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}