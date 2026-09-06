import Image from 'next/image';
import { 
  BookOpen, 
  Download, 
  FileText, 
  Cpu, 
  HelpCircle, 
  Video, 
  ArrowRight,
  ExternalLink 
} from 'lucide-react';
import ServicesHero from '@/components/common/ServicesHero';

const NAV_ITEMS = [
  { label: 'Study Materials', href: '#study-material' },
  { label: 'Software & Manuals', href: '#software' },
  { label: 'Video Tutorials', href: '#videos' },
];

export default function DigitalIntelligencePage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 scroll-smooth">
      
      {/* Compact Reusable Services Hero Header */}
      <ServicesHero
        theme="blue"
        badgeText="Digital Services"
        title="Digital Intelligence & E-Stamping"
        subtitle="Empowering Cooperatives with secure digital transaction tools, guides, software, and training video tutorials."
        imageSrc="/Assets/images/souharda/AllAboutKSSFCL.webp"
      />

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Sticky Sidebar Nav */}
          <aside className="lg:col-span-3 sticky top-24 z-10">
            <nav className="bg-white rounded-2xl border border-slate-200 p-3 shadow-xs space-y-1">
              {NAV_ITEMS.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  className="flex items-center justify-between px-4 py-3 rounded-xl text-xs sm:text-sm font-bold text-slate-700 hover:bg-slate-900 hover:text-amber-400 transition-colors group"
                >
                  <span>{item.label}</span>
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </nav>
          </aside>

          {/* Main Content Sections */}
          <div className="lg:col-span-9 space-y-10">
            
            {/* Section 1: Study Material */}
            <section id="study-material" className="scroll-mt-28 space-y-6">
              <div className="border-b border-slate-200 pb-3">
                <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                  <BookOpen className="w-6 h-6 text-slate-900" />
                  E-Stamping Study Material
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Book Card */}
                <div className="bg-white rounded-2xl border border-slate-200 border-t-4 border-t-slate-900 p-6 shadow-xs flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                      <FileText className="w-5 h-5 text-slate-900 shrink-0" />
                      Souharda E-Stamping Book
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600">
                      Complete guide for Souharda Cooperatives (2017 Edition).
                    </p>
                  </div>
                  <div>
                    <a
                      href="https://souharda.coop/pdf/estamping_book_2017.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 hover:bg-slate-900 text-slate-800 hover:text-white text-xs font-bold transition-all border border-slate-200"
                    >
                      <Download className="w-3.5 h-3.5 text-amber-500" />
                      Download Book
                    </a>
                  </div>
                </div>

                {/* Consolidated Info Card */}
                <div className="bg-white rounded-2xl border border-slate-200 border-t-4 border-t-slate-900 p-6 shadow-xs flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                      <FileText className="w-5 h-5 text-slate-900 shrink-0" />
                      Consolidated Information
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600">
                      Guidelines and administrative instructions for all Districts.
                    </p>
                  </div>
                  <div>
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 hover:bg-slate-900 text-slate-800 hover:text-white text-xs font-bold transition-all border border-slate-200"
                    >
                      <ExternalLink className="w-3.5 h-3.5 text-amber-500" />
                      View Details
                    </a>
                  </div>
                </div>

              </div>
            </section>

            {/* Section 2: Software & Technical Support */}
            <section id="software" className="scroll-mt-28 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
              <div className="border-b border-slate-100 pb-3">
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 flex items-center gap-2">
                  <Cpu className="w-6 h-6 text-slate-900" />
                  Software & Technical Support
                </h2>
              </div>

              <div className="divide-y divide-slate-100">
                {/* PCP Software Download */}
                <div className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-0.5">
                    <span className="text-sm font-bold text-slate-900">
                      Print Control Proxy (PCP)
                    </span>
                    <p className="text-xs text-slate-500">
                      Standard software required for e-stamp printing.
                    </p>
                  </div>
                  <a
                    href="#"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold transition-colors shrink-0"
                  >
                    <Download className="w-3.5 h-3.5 text-amber-400" />
                    Download Software
                  </a>
                </div>

                {/* PCP FAQ */}
                <div className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-0.5">
                    <span className="text-sm font-bold text-slate-900">
                      PCP Installation FAQ
                    </span>
                    <p className="text-xs text-slate-500">
                      Troubleshooting common installation errors and solutions.
                    </p>
                  </div>
                  <a
                    href="#"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-xs font-bold transition-colors border border-slate-200 shrink-0"
                  >
                    <HelpCircle className="w-3.5 h-3.5 text-slate-900" />
                    View FAQ
                  </a>
                </div>
              </div>
            </section>

            {/* Section 3: Video Tutorials */}
            <section id="videos" className="scroll-mt-28 space-y-6">
              <div className="border-b border-slate-200 pb-3">
                <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                  <Video className="w-6 h-6 text-slate-900" />
                  Video Tutorials
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* YouTube Video Embed */}
                <div className="bg-white rounded-2xl border border-slate-200 p-3 shadow-xs space-y-3">
                  <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-slate-900">
                    <iframe
                      src="https://www.youtube.com/embed/ugI-LAA4wOM"
                      title="Easy Pay Demo"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full border-0"
                    />
                  </div>
                  <p className="text-xs sm:text-sm font-bold text-center text-slate-900 py-1">
                    Easy Pay Demo
                  </p>
                </div>

                {/* Local MP4 Video */}
                <div className="bg-white rounded-2xl border border-slate-200 p-3 shadow-xs space-y-3">
                  <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-slate-900">
                    <video
                      controls
                      preload="metadata"
                      className="w-full h-full object-cover"
                    >
                      <source src="/Assets/video/VAN_29.01.2026.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <p className="text-xs sm:text-sm font-bold text-center text-slate-900 py-1">
                    Virtual Account Related Video
                  </p>
                </div>

              </div>
            </section>

          </div>

        </div>
      </div>
    </main>
  );
}