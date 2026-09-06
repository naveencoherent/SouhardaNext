import Image from 'next/image';
import Link from 'next/link';
import RegulatoryHero from '@/components/common/RegulatoryHero';
import { 
  Landmark, 
  ShieldCheck, 
  Network, 
  Award, 
  Lock, 
  Users, 
  TrendingUp, 
  PlusCircle, 
  ArrowLeftRight, 
  Building2, 
  FileCheck, 
  ClipboardCheck, 
  Shield, 
  CheckCheck, 
  FileText, 
  Download, 
  Info,
  ArrowRight,
  LucideIcon 
} from 'lucide-react';

// --- Reusable Component Types & Definitions ---

interface MilestoneCardProps {
  year: string;
  title: string;
  description: string;
  tag: string;
  icon: LucideIcon;
  variant: 'red' | 'amber' | 'emerald' | 'blue';
}

const variantStyles = {
  red: {
    border: 'border-red-100',
    text: 'text-red-600',
    bg: 'bg-red-50',
    tagBg: 'bg-red-100',
    tagText: 'text-red-700',
  },
  amber: {
    border: 'border-amber-100',
    text: 'text-amber-600',
    bg: 'bg-amber-50',
    tagBg: 'bg-amber-100',
    tagText: 'text-amber-700',
  },
  emerald: {
    border: 'border-emerald-500 border-2 shadow-md',
    text: 'text-emerald-600',
    bg: 'bg-emerald-50',
    tagBg: 'bg-emerald-100',
    tagText: 'text-emerald-700',
  },
  blue: {
    border: 'border-blue-100',
    text: 'text-blue-600',
    bg: 'bg-blue-50',
    tagBg: 'bg-blue-100',
    tagText: 'text-blue-700',
  },
};

function MilestoneCard({ year, title, description, tag, icon: Icon, variant }: MilestoneCardProps) {
  const styles = variantStyles[variant];
  return (
    <div className={`bg-white p-6 rounded-2xl shadow-sm relative flex flex-col justify-between ${styles.border}`}>
      <div className="flex items-center justify-between mb-4">
        <span className={`text-2xl font-black ${styles.text}`}>{year}</span>
        <div className={`p-3 rounded-xl ${styles.bg} ${styles.text}`}>
          <Icon className="w-6 h-6" />
        </div>
      </div>
      <div>
        <h3 className="font-bold text-lg mb-2">{title}</h3>
        <p className="text-xs text-slate-500 mb-4">{description}</p>
      </div>
      <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full w-max ${styles.tagBg} ${styles.tagText}`}>
        {tag}
      </span>
    </div>
  );
}

interface ProcessStepProps {
  icon: LucideIcon;
  title: string;
  description: string;
  colorScheme: 'blue' | 'emerald';
}

function ProcessStep({ icon: Icon, title, description, colorScheme }: ProcessStepProps) {
  const isBlue = colorScheme === 'blue';
  return (
    <div className="flex gap-4 items-start">
      <div className={`p-3 rounded-xl shrink-0 ${isBlue ? 'bg-blue-50 text-blue-600' : 'bg-emerald-50 text-emerald-600'}`}>
        <Icon className="w-6 h-6" />
      </div>
      <div>
        <h4 className="font-bold text-slate-800">{title}</h4>
        <p className="text-sm text-slate-500 mt-1">{description}</p>
      </div>
    </div>
  );
}

// --- Main Page Component ---

export default function SouhardaActPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      {/* Shared Regulatory Hero Component */}
      <RegulatoryHero 
        title="The Souharda Framework"
        subtitle="Empowering Karnataka’s Cooperatives through Autonomy & Self-Regulation"
        tag="STATUTORY & LEGAL FRAMEWORK"
      />

      {/* Timeline / Milestones Section */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Milestones of Our Journey</h2>
          <p className="text-slate-500 mt-2">
            Centenary celebration of Cooperative Law: 1904 – 2024
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <MilestoneCard
            year="1905"
            title="The Historical Origin"
            description="The seed sown in Kanaginahal by Shri Siddanagowda S. Patil."
            tag="First in India"
            icon={Landmark}
            variant="red"
          />
          <MilestoneCard
            year="1959"
            title="Legislative Unity"
            description="The KCS Act 1959 unified diverse laws across the new Karnataka State."
            tag="Statutory Framework"
            icon={Landmark}
            variant="amber"
          />
          <MilestoneCard
            year="1997"
            title="Souharda Revolution"
            description="Landmark Act granting autonomy and freedom from interference."
            tag="Democratic Freedom"
            icon={ShieldCheck}
            variant="emerald"
          />
          <MilestoneCard
            year="2001"
            title="Federal Foundation"
            description="The self-regulatory body established to protect Souharda Cooperatives."
            tag="The Umbrella Body"
            icon={Network}
            variant="blue"
          />
        </div>
      </section>

      {/* Historical Cards Section */}
      <section className="bg-white py-16 border-y border-slate-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">A Century of Legal Evolution</h2>
            <p className="text-slate-500 mt-2">
              From the first Cooperative Credit Societies Act of 1904 to the Federal Era.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <article className="border border-slate-200 rounded-2xl p-6 flex flex-col justify-between hover:shadow-lg transition-shadow bg-white">
              <div>
                <p className="text-xs font-bold text-red-600 mb-2">1904 - 1905</p>
                <h3 className="font-bold text-xl mb-3">The First Seed of Cooperation</h3>
                <p className="text-sm text-slate-600 mb-6">
                  Following the 1904 Act, villagers of Kanaginahal launched India&apos;s first society on 8th July 1905 with ₹2,000 capital under Shri Siddanagowda S. Patil.
                </p>
              </div>
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <Award className="w-5 h-5 text-red-600 shrink-0" />
                <span className="text-xs font-medium text-slate-700">Birth of Movement</span>
              </div>
            </article>

            {/* Card 2 */}
            <article className="border border-slate-200 rounded-2xl p-6 flex flex-col justify-between hover:shadow-lg transition-shadow bg-white">
              <div>
                <p className="text-xs font-bold text-amber-600 mb-2">1912 - 1959</p>
                <h3 className="font-bold text-xl mb-3">Expansion and State Patronage</h3>
                <p className="text-sm text-slate-600 mb-6">
                  The 1912 Act widened the scope for all society types. Post-independence, billions were spent, yet growth was stifled by state interference and bureaucracy.
                </p>
              </div>
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <Landmark className="w-5 h-5 text-amber-600 shrink-0" />
                <span className="text-xs font-medium text-slate-700">Unified KCS Act</span>
              </div>
            </article>

            {/* Card 3 */}
            <article className="border-2 border-emerald-500 rounded-2xl p-6 flex flex-col justify-between shadow-md bg-emerald-50/20">
              <div>
                <p className="text-xs font-bold text-emerald-600 mb-2">1987 - 1997</p>
                <h3 className="font-bold text-xl mb-3">The Call for Autonomy</h3>
                <p className="text-sm text-slate-600 mb-6">
                  The Ardhanareshwaran Committee (1987) and Brahm Perkash (1991) realized the failure of state-controlled models, leading to the 1997 Souharda Act.
                </p>
              </div>
              <div className="flex items-center gap-3 pt-4 border-t border-emerald-200">
                <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
                <span className="text-xs font-medium text-slate-700">Souharda Revolution</span>
              </div>
            </article>

            {/* Card 4 */}
            <article className="border border-slate-200 rounded-2xl p-6 flex flex-col justify-between hover:shadow-lg transition-shadow bg-white">
              <div>
                <p className="text-xs font-bold text-blue-600 mb-2">2001 - PRESENT</p>
                <h3 className="font-bold text-xl mb-3">First Self-Regulatory Body</h3>
                <p className="text-sm text-slate-600 mb-6">
                  Coming into force on Jan 1, 2001, Karnataka became the first state to enthusiastically embrace a self-regulatory Federal body for cooperatives.
                </p>
              </div>
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <Network className="w-5 h-5 text-blue-600 shrink-0" />
                <span className="text-xs font-medium text-slate-700">Modern Federal</span>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Why Choose the Souharda Act?</h2>
          <p className="text-slate-500 mt-2">
            Key highlights that make this legislation a &quot;New Generation&quot; model.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between">
            <div>
              <Lock className="w-10 h-10 text-emerald-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Self-Regulatory</h3>
              <p className="text-sm text-slate-600">
                A democratically elected Federal body manages inspections and liquidations instead of the Government.
              </p>
            </div>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between">
            <div>
              <Users className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Member Driven</h3>
              <p className="text-sm text-slate-600">
                General Body is the final authority for staff recruitment, pay-scales, and cooperative policies.
              </p>
            </div>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between">
            <div>
              <TrendingUp className="w-10 h-10 text-amber-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Business Freedom</h3>
              <p className="text-sm text-slate-600">
                No restrictions on business with non-members and freedom to enter partnerships or collaborations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Registration & Transition Detailed Section */}
      <section className="bg-slate-100 py-16 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold">Registration &amp; Transition</h2>
            <p className="text-slate-600 mt-3">
              Whether you are starting a new journey or transitioning an existing society, our streamlined process ensures administrative clarity at every stage.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Formation Box */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200">
              <h3 className="text-2xl font-bold text-blue-600 mb-6 flex items-center gap-3">
                <PlusCircle className="w-7 h-7 shrink-0" /> Formation of New
              </h3>
              <div className="space-y-6">
                <ProcessStep
                  icon={Users}
                  title="Promoters Assembly"
                  description="Selection of Chief Promoter and defining the cooperative's objectives and area of operation."
                  colorScheme="blue"
                />
                <ProcessStep
                  icon={Building2}
                  title="Capital Mobilization"
                  description="Obtaining Registrar permission to collect share capital and opening a dedicated bank account."
                  colorScheme="blue"
                />
                <ProcessStep
                  icon={FileCheck}
                  title="Final Registration"
                  description="Submission of bye-laws and certificates for the issuance of the Registration Certificate."
                  colorScheme="blue"
                />
              </div>
            </div>

            {/* Conversion Box */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200">
              <h3 className="text-2xl font-bold text-emerald-600 mb-6 flex items-center gap-3">
                <ArrowLeftRight className="w-7 h-7 shrink-0" /> Conversion Process
              </h3>
              <div className="space-y-6">
                <ProcessStep
                  icon={ClipboardCheck}
                  title="General Body Resolution"
                  description="Existing 1959 Act societies must pass a formal resolution to embrace the Souharda model."
                  colorScheme="emerald"
                />
                <ProcessStep
                  icon={Shield}
                  title="Financial Clearance"
                  description="Ensuring all outstanding debts to District Central Cooperative Banks (DCCBs) are cleared."
                  colorScheme="emerald"
                />
                <ProcessStep
                  icon={CheckCheck}
                  title="Regulatory Approval"
                  description="Formalizing the transition with the Federal Body and holding fresh democratic elections."
                  colorScheme="emerald"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blueprints & Downloads Section */}
      <section className="py-16 max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Featured Card */}
          <div className="lg:col-span-2 bg-slate-900 text-white rounded-3xl p-8 flex flex-col md:flex-row gap-6 items-center justify-between">
            <div className="space-y-4 max-w-md">
              <span className="px-3 py-1 bg-amber-500/20 text-amber-400 border border-amber-500/30 text-xs font-bold rounded-full inline-block">
                KEY ACT
              </span>
              <h3 className="text-3xl font-bold">Total Autonomy</h3>
              <p className="text-slate-300 text-sm">
                No government interference in management. The General Body is the supreme authority.
              </p>
              <Link
                href="#"
                className="inline-flex items-center gap-2 text-sm font-semibold text-amber-400 hover:text-amber-300 transition-colors"
              >
                View Details <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="w-36 h-48 relative rounded-xl overflow-hidden shrink-0 border border-slate-700 bg-slate-800 flex items-center justify-center">
              <Image
                src="/images/souharda/ActBook.jpg"
                alt="Souharda Act Book Cover"
                fill
                sizes="(max-width: 768px) 100vw, 144px"
                className="object-cover"
              />
            </div>
          </div>

          {/* Side Highlights */}
          <div className="space-y-4">
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <Users className="w-6 h-6 text-blue-600 mb-2" />
              <h4 className="font-bold">Federal Supervision</h4>
              <p className="text-xs text-slate-500 mt-1">
                Statutory functions like Inquiry are performed by the Federal Body.
              </p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <FileText className="w-6 h-6 text-emerald-600 mb-2" />
              <h4 className="font-bold">Independent Audit</h4>
              <p className="text-xs text-slate-500 mt-1">
                Freedom to appoint auditors from an approved panel.
              </p>
            </div>
          </div>
        </div>

        {/* Statutory PDF Downloads */}
        <div className="pt-8 border-t border-slate-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div>
              <h3 className="text-2xl font-bold">
                Statutory <span className="text-blue-600">Resources</span>
              </h3>
              <p className="text-sm text-slate-600 mt-1">
                Access the complete legal framework of the Karnataka Souharda Sahakari Act, 1997.
              </p>
              <div className="mt-4 p-3 bg-blue-50 border-l-4 border-blue-600 rounded-r-xl flex items-center gap-3">
                <Info className="w-5 h-5 text-blue-600 shrink-0" />
                <p className="text-xs text-slate-600">
                  Documents are provided in PDF format for official reference.
                </p>
              </div>
            </div>

            {/* English PDF */}
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm text-center flex flex-col items-center">
              <FileText className="w-12 h-12 text-red-500 mb-2" />
              <h4 className="font-bold text-slate-800">Souharda Act 1997</h4>
              <span className="text-[10px] font-bold text-amber-600 tracking-wider my-1">
                ENGLISH VERSION
              </span>
              <a
                href="#"
                aria-label="Download Souharda Act 1997 in English PDF"
                className="mt-3 inline-flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-xl text-xs font-medium hover:bg-slate-800 transition-colors"
              >
                <Download className="w-4 h-4" /> Download PDF
              </a>
            </div>

            {/* Kannada PDF */}
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm text-center flex flex-col items-center">
              <FileText className="w-12 h-12 text-red-500 mb-2" />
              <h4 className="font-bold text-slate-800">ಸೌಹಾರ್ದ ಕಾಯ್ದೆ ೧೯೯೭</h4>
              <span className="text-[10px] font-bold text-amber-600 tracking-wider my-1">
                KANNADA VERSION
              </span>
              <a
                href="#"
                aria-label="Download Souharda Act 1997 in Kannada PDF"
                className="mt-3 inline-flex items-center gap-2 px-4 py-2 bg-slate-900 text-white rounded-xl text-xs font-medium hover:bg-slate-800 transition-colors"
              >
                <Download className="w-4 h-4" /> ಡೌನ್‌ಲೋಡ್ PDF
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}