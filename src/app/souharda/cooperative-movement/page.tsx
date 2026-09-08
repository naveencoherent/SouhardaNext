'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import PageHero from '@/components/common/PageHero';
import { 
  Users, 
  ShieldCheck, 
  Landmark, 
  Lock, 
  GraduationCap, 
  Handshake, 
  HeartHandshake,
  ArrowRight,
  X,
  Calendar,
  Layers,
  Globe2,
  History,
  Award
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Soft & Smooth Motion Variants
const fadeInUp = {
  hidden: { 
    opacity: 0, 
    y: 40, 
    filter: 'blur(4px)' 
  },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: 'blur(0px)',
    transition: { 
      duration: 0.85, 
      ease: [0.16, 1, 0.3, 1] 
    } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { 
      staggerChildren: 0.16, 
      delayChildren: 0.1 
    }
  }
};

// Types for Modal Data
interface PhaseDetail {
  phase: string;
  period: string;
  title: string;
  shortDesc: string;
  fullDesc: string[];
  keyHighlights: string[];
  statutoryImpact: string;
}

export default function CooperativeMovementPage() {
  const [selectedPhase, setSelectedPhase] = useState<PhaseDetail | null>(null);

  // Data: Institutional Evolution Phases
  const phases: PhaseDetail[] = [
    {
      phase: 'Phase 01',
      period: 'Pre-1844',
      title: 'The Industrial Crisis',
      shortDesc: 'Cottage industry workers across Europe faced severe economic displacement, leading to the first informal collective purchasing networks.',
      fullDesc: [
        'During the height of the Industrial Revolution, individual artisans and cottage industry weavers experienced severe economic disenfranchisement due to rapid mechanization.',
        'Faced with rising commodity costs and unfair market monopoly, workers formed informal purchasing guilds to pool meager resources, securing food and raw materials at wholesale prices.'
      ],
      keyHighlights: [
        'Informal collective purchasing networks',
        'Grassroots mutual aid response to factory automation',
        'Laying the foundation for early consumer co-ops'
      ],
      statutoryImpact: 'Created the socio-economic necessity that proved individual workers could achieve financial resilience through unified collective action.'
    },
    {
      phase: 'Phase 02',
      period: 'Mid-1800s',
      title: 'Socio-Economic Philosophy',
      shortDesc: 'Key social theorists translated grassroots survival methods into formal doctrines, creating blueprints for democratic governance and credit unions.',
      fullDesc: [
        'Social visionaries across Europe analyzed early mutual aid movements to formulate formal economic frameworks.',
        'Foundational thinkers codified democratic voting models ("one member, one vote"), equitable capital contributions, and rural/urban credit structures that removed predatory lenders from working-class communities.'
      ],
      keyHighlights: [
        'Codification of "One Member, One Vote"',
        'Creation of rural and urban credit cooperative frameworks',
        'Shift from informal survival aid to structured economic institutions'
      ],
      statutoryImpact: 'Established the core operational rules that were later adopted by international bodies like the International Cooperative Alliance (ICA).'
    },
    {
      phase: 'Phase 03',
      period: '1997 – Present',
      title: 'Statutory Codification',
      shortDesc: 'Global cooperative values were integrated into modern statutory provisions through the landmark Karnataka Souharda Sahakari Act, 1997.',
      fullDesc: [
        'Karnataka emerged as a pioneer in cooperative legislative reform by granting total legal autonomy and democratic self-governance to cooperative institutions.',
        'The Karnataka Souharda Sahakari Act, 1997 freed cooperatives from excessive bureaucratic interference, enshrining strict accountability, professional auditing, and financial independence into law.'
      ],
      keyHighlights: [
        'Autonomous self-regulation under the 1997 Act',
        'Elimination of political and state interference in internal management',
        'Mandatory statutory audits and democratic accountability'
      ],
      statutoryImpact: 'Provided a modern legal structure that empowered Souharda Cooperatives across Karnataka to operate with bank-grade professionalism and integrity.'
    }
  ];

  // Data: Foundational Voices
  const pioneers = [
    {
      name: 'Robert Owen',
      description: 'Great Britain: Conceived & set up self-contained semi-agricultural/industrial communities.',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80',
    },
    {
      name: 'Dr. William King',
      description: "Great Britain: Spread Owen's doctrine; practical & successful methods.",
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
    },
    {
      name: 'Charles Fourier',
      description: 'France: Commercial Clerk, published Treatise on Domestic Agricultural Association (1822).',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80',
    },
    {
      name: 'Saint-Simon',
      description: 'Worked on various theories of "associations".',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80',
    },
    {
      name: 'Proudhon',
      description: 'Advocated mutual aid & "free credit" access.',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80',
    },
    {
      name: 'Buchez',
      description: "Championed collective capital & worker's production co-ops.",
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80',
    },
    {
      name: 'Schulze-Delitzsch',
      description: 'Apostle of urban credit co-operatives.',
      image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=300&q=80',
    },
    {
      name: 'F.W. Raiffeisen',
      description: 'Germany: Pioneered rural credit co-operatives.',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
    },
  ];

  // Data: 7 Principles
  const principles = [
    {
      number: '01',
      icon: Users,
      title: 'Voluntary and Open Membership',
      description: 'Cooperatives are voluntary organizations, open to all persons able to use their services and willing to accept the responsibilities of membership without discrimination.'
    },
    {
      number: '02',
      icon: ShieldCheck,
      title: 'Democratic Member Control',
      description: 'Cooperatives are democratic organizations controlled by their members, who actively participate in setting their policies and making decisions.'
    },
    {
      number: '03',
      icon: Landmark,
      title: 'Member Economic Participation',
      description: 'Members contribute equitably to, and democratically control, the capital of their cooperative.'
    },
    {
      number: '04',
      icon: Lock,
      title: 'Autonomy and Independence',
      description: 'Cooperatives are autonomous, self-help organizations controlled by their members ensuring complete democratic control.'
    },
    {
      number: '05',
      icon: GraduationCap,
      title: 'Education, Training, & Information',
      description: 'Cooperatives provide education and training for members, elected representatives, and employees to contribute effectively.'
    },
    {
      number: '06',
      icon: Handshake,
      title: 'Cooperation Among Cooperatives',
      description: 'Cooperatives serve their members most effectively and strengthen the movement by working together locally and nationally.'
    },
    {
      number: '07',
      icon: HeartHandshake,
      title: 'Concern for Community',
      description: 'Cooperatives work for the sustainable development of their communities through member-approved policies.'
    }
  ];

  // Data: Indian Cooperative Timeline Table
  const timelineMilestones = [
    {
      year: '1879–1884',
      milestone: 'Agrarian Relief Acts',
      significance: 'Deccan Agriculture Relief Act (1879), Land Improvement Loan Act (1883), and Agriculturists Loan Act (1884) enacted to mitigate rural debt.',
      impact: 'Provided statutory debt relief and state credit mechanisms to protect distressed farmers.'
    },
    {
      year: '1904',
      milestone: 'Cooperative Credit Societies Act',
      significance: 'Formally catalyzed the modern cooperative framework across British India.',
      impact: 'Laid official legal groundwork for forming rural and primary credit societies nationwide.'
    },
    {
      year: 'Oct 1904',
      milestone: 'First Urban Credit Society',
      significance: 'Registered in Kanjivaram (Madras Presidency) as India\'s premier urban cooperative credit entity.',
      impact: 'Expanded the cooperative credit philosophy from rural farming into urban communities.'
    },
    {
      year: '1889–2008',
      milestone: 'Anyonya Co-operative Bank (ACBL)',
      significance: 'Established in Vadodara, Gujarat as India\'s first cooperative bank; operated successfully until RBI regulatory closure in 2008.',
      impact: 'Demonstrated early member-owned banking viability in Western India over more than a century.'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50/50 text-slate-800 font-sans selection:bg-amber-100 selection:text-amber-900">
      
      {/* ---------------- SECTION 1: HERO HEADER ---------------- */}
      <PageHero 
        themeColor="blue"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Souharda', href: '/souharda' },
          { label: 'Cooperative Movement' }
        ]}
        title="THE COOPERATIVE MOVEMENT" 
        subtitle="A Global Vision, A National Mission, A Karnataka Success." 
      />

      {/* ---------------- SECTION 2: INSTITUTIONAL EVOLUTION (ORIGINS) ---------------- */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15, margin: '-40px' }}
        variants={staggerContainer}
        className="bg-white py-20 border-t border-slate-100 relative overflow-hidden"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <motion.div variants={fadeInUp} className="text-center mb-12 space-y-2">
            <span className="text-[11px] font-bold text-[#2B3E6B] uppercase tracking-widest block">
              INSTITUTIONAL EVOLUTION
            </span>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#C68A16] uppercase tracking-tight leading-tight">
              The Cooperative Movement Began as a Response to the Industrial Revolution
            </h2>
            
            <p className="text-sm md:text-base text-[#A81C1C] font-semibold italic pt-1">
              From Industrial Resilience to Statutory Legislation..
            </p>
          </motion.div>

          <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {phases.map((item, idx) => (
              <motion.div 
                key={idx}
                variants={fadeInUp}
                whileHover={{ y: -6, transition: { duration: 0.25, ease: 'easeOut' } }}
                className="group relative bg-white/80 backdrop-blur-md border border-slate-200/90 hover:border-[#C68A16]/60 rounded-2xl p-6 shadow-md shadow-slate-100 hover:shadow-xl hover:shadow-amber-500/5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4 border-b border-slate-100 pb-3">
                    <span className="text-[11px] font-mono font-bold tracking-widest text-[#2B3E6B] uppercase bg-slate-100 px-2.5 py-1 rounded">
                      {item.phase}
                    </span>
                    <span className="text-xs text-slate-500 font-medium">{item.period}</span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-slate-900 mb-2.5 group-hover:text-[#C68A16] transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-6">
                    {item.shortDesc}
                  </p>
                </div>

                <button
                  onClick={() => setSelectedPhase(item)}
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#2B3E6B] hover:text-[#C68A16] transition-colors pt-2 group/btn"
                >
                  <span>Read full breakdown</span>
                  <ArrowRight className="w-4 h-4 text-[#2B3E6B] group-hover/btn:text-[#C68A16] group-hover/btn:translate-x-1 transition-all" />
                </button>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </motion.section>

      {/* ---------------- SECTION 3: FOUNDATIONAL VOICES & IDEALS ---------------- */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15, margin: '-40px' }}
        variants={staggerContainer}
        className="bg-slate-50/80 text-slate-800 py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-200/60 relative"
      >
        <div className="max-w-7xl mx-auto space-y-10">
          
          <motion.div variants={fadeInUp} className="text-center space-y-2 max-w-3xl mx-auto">
            <span className="text-[11px] font-bold text-[#2B3E6B] uppercase tracking-widest block">
              GLOBAL PIONEERS
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#C68A16] uppercase tracking-tight">
              Foundational Voices and Ideals
            </h2>

            <p className="text-sm md:text-base text-[#A81C1C] font-semibold italic pt-1">
              Pioneers who shaped the global philosophy and structure of modern cooperation..
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="relative space-y-4">
            <div className="flex gap-5 overflow-x-auto pb-6 pt-2 px-2 scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-transparent">
              {pioneers.map((pioneer, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.02 }}
                  className="flex-none w-52 sm:w-60 bg-white/90 backdrop-blur-md rounded-2xl p-5 border border-slate-200 shadow-sm hover:shadow-lg hover:border-[#C68A16]/50 transition-all duration-300 text-center flex flex-col items-center space-y-4"
                >
                  <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full p-1 border-2 border-[#2B3E6B] shadow-sm bg-white overflow-hidden">
                    <Image
                      src={pioneer.image}
                      alt={pioneer.name}
                      fill
                      unoptimized
                      className="object-cover rounded-full"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base leading-tight">
                      {pioneer.name}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-medium">
                      {pioneer.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </motion.section>

      {/* ---------------- SECTION 4: 7 PRINCIPLES GRID (#7A8692 TONED GRADIENT) ---------------- */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15, margin: '-40px' }}
        variants={staggerContainer}
        className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden shadow-inner bg-gradient-to-b from-[#7A8692] via-[#2C353D] to-[#1A2026]"
      >
        {/* Soft Warm Radial Highlight */}
        <div 
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] pointer-events-none opacity-25 blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(229,169,60,0.5) 0%, rgba(122,134,146,0) 70%)'
          }}
        />

        <div className="max-w-7xl mx-auto space-y-10 relative z-10">
          
          {/* Section Header */}
          <motion.div variants={fadeInUp} className="text-center space-y-3 max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight uppercase">
              7 Principles of the Cooperative Movement
            </h2>

            <p className="text-[#E5A93C] text-xs sm:text-sm font-medium leading-relaxed">
              The cooperative principles are guidelines by which cooperatives put their values into practice across <span className="underline decoration-[#E5A93C] underline-offset-4">Karnataka</span>.
            </p>
          </motion.div>

          {/* Cards Grid */}
          <motion.div variants={staggerContainer} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {principles.map((item, idx) => {
              const Icon = item.icon;
              const isSeventh = idx === 6;

              return (
                <motion.div 
                  key={idx}
                  variants={fadeInUp}
                  whileHover={{ y: -6, transition: { duration: 0.25, ease: 'easeOut' } }}
                  className={`group relative bg-white rounded-2xl p-6 shadow-2xl border-2 transition-all duration-300 flex flex-col justify-between ${
                    idx === 1 
                      ? 'border-[#E5A93C] ring-4 ring-[#E5A93C]/10' 
                      : 'border-transparent hover:border-[#E5A93C]/60'
                  } ${isSeventh ? 'lg:col-span-3 lg:max-w-xl lg:mx-auto' : ''}`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-[#2B3E6B] text-white flex items-center justify-center shadow-md">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-2xl font-black text-slate-300 font-mono">
                        {item.number}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 tracking-tight">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>

                  {idx === 1 && (
                    <div className="pt-4">
                      <span className="inline-block text-[10px] font-bold text-[#D4A017] uppercase bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                        Core Principle
                      </span>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </motion.section>

      {/* ---------------- LIGHT THEME MODAL POPUP DIALOG ---------------- */}
      <AnimatePresence>
        {selectedPhase && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPhase(null)}
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 20 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-2xl bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden z-10 text-slate-800 max-h-[90vh] flex flex-col"
            >
              <div className="flex items-center justify-between p-6 border-b border-slate-100 bg-slate-50/80">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono font-bold text-[#2B3E6B] bg-slate-200 px-2.5 py-1 rounded uppercase">
                    {selectedPhase.phase}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-slate-500 font-medium">
                    <Calendar className="w-3.5 h-3.5 text-[#2B3E6B]" />
                    {selectedPhase.period}
                  </span>
                </div>

                <button
                  onClick={() => setSelectedPhase(null)}
                  className="p-1.5 text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 overflow-y-auto space-y-6 scrollbar-thin scrollbar-thumb-slate-200">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#C68A16] uppercase mb-1">
                    {selectedPhase.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#A81C1C] font-semibold italic">
                    Historical Phase Detail & Impact Breakdown..
                  </p>
                </div>

                <div className="space-y-3">
                  {selectedPhase.fullDesc.map((paragraph, i) => (
                    <p key={i} className="text-sm text-slate-600 leading-relaxed font-normal">
                      {paragraph}
                    </p>
                  ))}
                </div>

                <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-4 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#2B3E6B] uppercase tracking-wider">
                    <Layers className="w-4 h-4 text-[#2B3E6B]" /> Key Milestones & Features
                  </div>
                  <ul className="space-y-2">
                    {selectedPhase.keyHighlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#2B3E6B] mt-2 shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-l-4 border-[#C68A16] bg-amber-50/50 p-4 rounded-r-xl border-y border-r border-amber-100">
                  <span className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">
                    Statutory & Legislative Impact
                  </span>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                    &ldquo;{selectedPhase.statutoryImpact}&rdquo;
                  </p>
                </div>
              </div>

              <div className="p-4 border-t border-slate-100 bg-slate-50/80 flex justify-end">
                <button
                  onClick={() => setSelectedPhase(null)}
                  className="px-5 py-2 rounded-lg bg-[#2B3E6B] hover:bg-[#1e2d4f] text-white font-semibold text-xs transition-colors shadow-sm"
                >
                  Close Window
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ---------------- SECTION 5: THE INDIAN COOPERATIVE TIMELINE ---------------- */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15, margin: '-40px' }}
        variants={staggerContainer}
        className="py-20 bg-slate-50/80 border-t border-slate-200/80"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <motion.div variants={fadeInUp} className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="text-[11px] font-bold text-[#2B3E6B] uppercase tracking-widest block">
                  NATIONAL HERITAGE & EVOLUTION
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#C68A16] uppercase tracking-tight leading-tight">
                  THE INDIAN COOPERATIVE TIMELINE: ANCIENT ROOTS TO MODERN LAW
                </h2>
                <p className="text-sm sm:text-base text-[#A81C1C] font-semibold italic">
                  Rooted in ancient mutual aid, formalized through modern governance..
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                The cooperative spirit is deeply ingrained in Indian sociology. Long before modern business frameworks emerged in the West, ancient rural Indian communities practiced structured mutual aid—laying the true foundational basis for India’s modern cooperative movement.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-white/90 backdrop-blur-md rounded-xl border border-slate-200 shadow-sm space-y-2">
                  <div className="flex items-center gap-2 text-[#2B3E6B] font-bold text-xs uppercase tracking-wider">
                    <Globe2 className="w-4 h-4 text-[#2B3E6B]" /> Global Recognition (2016)
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">
                    UNESCO inscribed the &quot;Idea and practice of organizing shared interests in cooperatives&quot; onto its Representative List of Intangible Cultural Heritage.
                  </p>
                </div>

                <div className="p-4 bg-white/90 backdrop-blur-md rounded-xl border border-slate-200 shadow-sm space-y-2">
                  <div className="flex items-center gap-2 text-[#2B3E6B] font-bold text-xs uppercase tracking-wider">
                    <History className="w-4 h-4 text-[#2B3E6B]" /> Pre-Independence Catalyst
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">
                    In response to severe agrarian distress and farmer agitations against predatory moneylenders, the British administration passed the historic Cooperative Credit Societies Act, 1904.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md bg-white p-4 rounded-2xl border border-slate-200 shadow-lg group">
                <div className="relative rounded-xl overflow-hidden">
                  <Image
                    src="/souharda/Bharath.png"
                    alt="Cooperative India"
                    width={800}
                    height={600}
                    unoptimized
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </motion.div>

          </div>

          {/* Table Section */}
          <motion.div variants={fadeInUp} className="space-y-4 pt-4">
            <h3 className="text-xl font-bold text-[#C68A16] uppercase tracking-wide flex items-center gap-2">
              <Award className="w-5 h-5 text-[#2B3E6B]" /> Key Historical Milestones
            </h3>

            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm bg-white">
              <table className="w-full text-left border-collapse min-w-[640px]">
                <thead>
                  <tr className="bg-slate-100/80 border-b border-slate-200 text-xs font-bold text-slate-700 uppercase tracking-wider">
                    <th className="py-3.5 px-4 w-32">Year</th>
                    <th className="py-3.5 px-4 w-60">Milestone & Significance</th>
                    <th className="py-3.5 px-4">Impact on Movement</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-xs sm:text-sm text-slate-700">
                  {timelineMilestones.map((row, idx) => (
                    <tr key={idx} className="hover:bg-amber-50/30 transition-colors">
                      <td className="py-3.5 px-4 font-mono font-bold text-[#2B3E6B] whitespace-nowrap">
                        {row.year}
                      </td>
                      <td className="py-3.5 px-4 font-semibold text-slate-900">
                        {row.milestone}
                      </td>
                      <td className="py-3.5 px-4 text-slate-600 font-normal">
                        {row.significance}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

        </div>
      </motion.section>

      {/* ---------------- SECTION 6: KARNATAKA COOPERATIVE HERITAGE ---------------- */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15, margin: '-40px' }}
        variants={staggerContainer}
        className="relative py-20 bg-white border-t border-slate-200 overflow-hidden"
      >
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <motion.div variants={fadeInUp} className="lg:col-span-5 flex justify-center items-center order-2 lg:order-1">
              <div className="relative w-full max-w-md group">
                <Image
                  src="/souharda/karnataka.png"
                  alt="Karnataka Cooperative Landscape Map"
                  width={800}
                  height={1000}
                  unoptimized
                  className="w-full h-auto object-contain drop-shadow-xl group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="lg:col-span-7 space-y-6 order-1 lg:order-2">
              <div className="space-y-2">
                <span className="text-[11px] font-bold text-[#2B3E6B] uppercase tracking-widest block">
                  PIONEERING STATE LEGACY
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#C68A16] uppercase tracking-tight leading-tight">
                  KARNATAKA: THE CRADLE OF INDIA&apos;S COOPERATIVE MOVEMENT
                </h2>
                <p className="text-sm sm:text-base text-[#A81C1C] font-semibold italic">
                  Apex body of new generation Souharda Cooperatives..
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                Long before modern legal frameworks took shape, community-driven mutual aid was deeply embedded in rural Karnataka&apos;s socio-economic fabric. From pioneering Asia&apos;s very first cooperative credit society to crafting progressive legislation, Karnataka has consistently served as the primary engine for India&apos;s cooperative innovation.
              </p>

              <div className="space-y-4 pt-2">
                
                <div className="group relative bg-white/80 backdrop-blur-md p-5 rounded-xl border border-slate-200 shadow-sm hover:border-[#C68A16] transition-all duration-200 overflow-hidden">
                  <div className="flex items-start gap-3.5">
                    <div className="p-2 bg-amber-50 text-[#C68A16] rounded-lg shrink-0 mt-0.5">
                      <Award className="w-5 h-5" />
                    </div>

                    <div className="space-y-1.5">
                      <h3 className="text-base font-bold tracking-tight text-[#C68A16] flex items-center gap-2">
                        <span>1905</span>
                        <span className="text-slate-300 font-normal">&mdash;</span>
                        <span>ASIA&apos;S FIRST COOPERATIVE SOCIETY</span>
                      </h3>
                      
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                        Under the visionary leadership of <span className="font-medium text-slate-800">Sri Siddanagouda Sanna Ramanagouda Patil</span> (revered as the Father of the Cooperative Movement in Karnataka), the Agricultural Credit Cooperative Society was launched on July 8, 1905, in Kanaginahal village, Gadag district.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="group relative bg-white/80 backdrop-blur-md p-5 rounded-xl border border-slate-200 shadow-sm hover:border-[#2B3E6B] transition-all duration-200 overflow-hidden">
                  <div className="flex items-start gap-3.5">
                    <div className="p-2 bg-blue-50 text-[#2B3E6B] rounded-lg shrink-0 mt-0.5">
                      <Landmark className="w-5 h-5" />
                    </div>

                    <div className="space-y-1.5">
                      <h3 className="text-base font-bold tracking-tight text-[#2B3E6B] flex items-center gap-2">
                        <span>1905</span>
                        <span className="text-slate-300 font-normal">&mdash;</span>
                        <span>THE PROGRESSIVE MYSORE MODEL</span>
                      </h3>
                      
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                        The Princely State of Mysore enacted the Mysore Co-operative Societies Regulation, 1905. This framework introduced rural-oriented Agricultural Banks with affordable lending rates and early provisions for non-credit cooperatives.
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>

          </div>

        </div>
      </motion.section>

    </div>
  );
}