import Link from 'next/link';
import { 
  Calculator, 
  FileText, 
  Landmark, 
  Gavel, 
  Download, 
  Phone, 
  ArrowRight 
} from 'lucide-react';
import ServicesHero from '@/components/common/ServicesHero';

interface CircularCard {
  title: string;
  description: string;
  href: string;
  icon: typeof Calculator;
  accentColor: string;
}

const CIRCULAR_CARDS: CircularCard[] = [
  {
    title: 'Audit Guidelines',
    description: 'Statutory requirements and standard procedures for annual co-operative audits.',
    href: '/education/publications?cat=audit',
    icon: Calculator,
    accentColor: 'border-t-slate-900 text-slate-900',
  },
  {
    title: 'Departmental Circulars',
    description: 'Official updates from the Co-operative Department of Karnataka.',
    href: '/education/publications?cat=circulars',
    icon: FileText,
    accentColor: 'border-t-emerald-600 text-emerald-600',
  },
  {
    title: 'Federal Circulars',
    description: 'Operational directives and notices issued directly by KSSFCL.',
    href: '/education/publications?cat=circulars',
    icon: Landmark,
    accentColor: 'border-t-amber-500 text-amber-600',
  },
  {
    title: 'RBI & Gazette',
    description: 'Notifications regarding banking regulations and state gazette updates.',
    href: '/education/publications?cat=circulars',
    icon: Gavel,
    accentColor: 'border-t-rose-600 text-rose-600',
  },
];

const FORMATION_STEPS = [
  'Promoters Meeting',
  'Collecting Initial Share Capital',
  'Registration with Registrar',
  'Election to First Board',
  'Commencement of Activities',
];

export default function InfoToMembersPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      
      {/* Standardized Services Hero Header */}
      <ServicesHero
        theme="emerald"
        badgeText="Member Services"
        title="Information for Members"
        subtitle="Essential Guidelines, Circulars, and Statutory Resources for Souharda Co-operatives."
      />

      {/* Main Content Area */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Column (Left) */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Circulars Grid */}
            <div className="space-y-4">
              <div className="space-y-1">
                <h2 className="text-2xl font-bold text-slate-900">
                  Official Circulars & Guidelines
                </h2>
                <p className="text-xs sm:text-sm text-slate-600">
                  Stay updated with the latest regulatory changes and operational mandates from the Co-operative Department and KSSFCL.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {CIRCULAR_CARDS.map((card, idx) => {
                  const Icon = card.icon;
                  return (
                    <Link
                      key={idx}
                      href={card.href}
                      className={`group bg-white rounded-2xl border border-slate-200 border-t-4 p-5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-3 ${card.accentColor}`}
                    >
                      <div className="space-y-2">
                        <h3 className="text-base font-bold text-slate-900 flex items-center gap-2 group-hover:text-emerald-700 transition-colors">
                          <Icon className="w-5 h-5 shrink-0" />
                          {card.title}
                        </h3>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          {card.description}
                        </p>
                      </div>
                      <div className="flex items-center text-xs font-bold text-slate-900 group-hover:text-amber-600 transition-colors pt-2">
                        <span>Access Resources</span>
                        <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-1" />
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Byelaw Amendments Card */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-4">
              <h3 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-3">
                Byelaw Amendments
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Societies looking to update their operations can download the{' '}
                <strong className="text-slate-900">Application Formats for Byelaw Amendment</strong>.
                Ensure all submissions comply with the standard templates provided by the Federal.
              </p>
              <div>
                <a
                  href="/downloads/publications/formats/bylaw-amendment-formats.pdf"
                  download
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-all shadow-xs"
                >
                  <Download className="w-4 h-4 text-amber-400" />
                  Download Amendment Formats
                </a>
              </div>
            </div>

          </div>

          {/* Sidebar Column (Right) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Formation Steps Card */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-5">
              <h3 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-3">
                Co-operative Formation Steps
              </h3>
              
              <ol className="space-y-3">
                {FORMATION_STEPS.map((step, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 font-medium">
                    <span className="flex items-center justify-center w-5 h-5 rounded-full bg-slate-900 text-amber-400 text-[11px] font-extrabold shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>

              <Link
                href="/regulatory/formation"
                className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-xl text-xs sm:text-sm font-extrabold transition-colors shadow-xs"
              >
                <span>Full Formation Guide</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Support Callout Box */}
            <div className="bg-white rounded-2xl border border-slate-200 p-5 text-center space-y-2 shadow-xs">
              <h4 className="text-sm font-bold text-slate-900">Need Direct Assistance?</h4>
              <p className="text-xs text-slate-500">
                For membership queries or procedural help, contact your divisional office.
              </p>
              <div className="pt-2">
                <a
                  href="tel:08023378375"
                  className="inline-flex items-center justify-center gap-2 text-sm font-extrabold text-slate-900 hover:text-amber-600 transition-colors"
                >
                  <Phone className="w-4 h-4 text-amber-500" />
                  080 - 23378375
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

    </main>
  );
}