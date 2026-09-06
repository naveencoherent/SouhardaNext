'use client';

import { useState } from 'react';
import { 
  Info, 
  Download, 
  Award, 
  Users, 
  Scale, 
  TrendingUp, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight,
  GraduationCap,
  X
} from 'lucide-react';
import EducationHero from '@/components/common/EducationHero';

export default function TrainingPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      {/* Standardized Education Banner Component */}
      <EducationHero
        badgeText="Co-operative Education Wing"
        title="Training & Development"
        subtitle="Empowering Cooperative Professionals with Knowledge and Skills"
        imageSrc="/images/souharda/AllAboutKSSFCL.webp"
      />

      {/* Training Calendar & Upcoming Events */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-1">
          <h2 className="text-2xl font-bold text-emerald-900">Training & Education Calendar</h2>
          <p className="text-xs sm:text-sm text-slate-500">
            Stay updated with the latest cooperative training programs across Karnataka.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Calendar Frame */}
          <div className="lg:col-span-8 bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden h-[400px]">
            <iframe
              src="https://calendar.google.com/calendar/embed?src=YOUR_CALENDAR_ID&ctz=Asia%2FKolkata&showTitle=0&showPrint=0&showTabs=0&showCalendars=0&showTz=0&bgcolor=%23ffffff"
              className="w-full h-full border-0"
              title="Training Calendar"
            />
          </div>

          {/* Upcoming Events Box */}
          <div className="lg:col-span-4 bg-emerald-900/5 rounded-2xl p-6 border border-emerald-900/10 shadow-xs flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <Info className="w-4 h-4 text-emerald-700" />
                Upcoming Events
              </h3>

              <ul className="space-y-3 divide-y divide-slate-200/80">
                <li className="pt-2 space-y-0.5">
                  <span className="text-[10px] font-bold text-emerald-800 uppercase tracking-wider">Workshop</span>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900">Leadership for Directors</h4>
                  <p className="text-xs text-slate-500">Location: Bengaluru Division</p>
                </li>
                <li className="pt-3 space-y-0.5">
                  <span className="text-[10px] font-bold text-emerald-800 uppercase tracking-wider">Training</span>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900">Accounting & Auditing</h4>
                  <p className="text-xs text-slate-500">Location: Belagavi Division</p>
                </li>
              </ul>
            </div>

            <a
              href="/Assets/docs/education/Training_Schedule_2026.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs font-bold transition-all shadow-xs"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Schedule (PDF)</span>
            </a>
          </div>
        </div>
      </section>

      {/* Program Details */}
      <section className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Nurturing Professionalism</h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              KSSFCL provides structured training programs to ensure that every cooperative society operates with the highest standards of governance and financial transparency.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-amber-50 rounded-lg text-amber-600">
                  <Award className="w-5 h-5" />
                </div>
                <div className="text-xs sm:text-sm text-slate-700">
                  <strong className="text-slate-900">Certified Programs:</strong> Nationally recognized curriculum for CEOs and Staff.
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-amber-50 rounded-lg text-amber-600">
                  <Users className="w-5 h-5" />
                </div>
                <div className="text-xs sm:text-sm text-slate-700">
                  <strong className="text-slate-900">Governance Training:</strong> Empowering Board Directors with legal insights.
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-emerald-950 to-emerald-900 rounded-2xl p-12 text-center text-white/10 flex items-center justify-center min-h-[220px] border border-emerald-800 shadow-sm">
            <GraduationCap className="w-24 h-24 text-amber-400/80" />
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-2">
            <Scale className="w-8 h-8 text-emerald-700 mx-auto" />
            <h4 className="text-sm font-bold text-slate-900">Regulatory Law</h4>
            <p className="text-xs text-slate-500">Mastering the Souharda Act, Bylaws, and Compliance.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-2">
            <TrendingUp className="w-8 h-8 text-emerald-700 mx-auto" />
            <h4 className="text-sm font-bold text-slate-900">Financial Management</h4>
            <p className="text-xs text-slate-500">Advanced accounting, GST, and Audit preparedness.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-2">
            <ShieldCheck className="w-8 h-8 text-emerald-700 mx-auto" />
            <h4 className="text-sm font-bold text-slate-900">IT & Security</h4>
            <p className="text-xs text-slate-500">Safe digital banking and cybersecurity for cooperatives.</p>
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section id="registration" className="py-12 bg-white border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="bg-emerald-950 rounded-2xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-12">
            {/* Left Box */}
            <div className="md:col-span-4 bg-emerald-950 text-white p-6 sm:p-8 flex flex-col justify-center space-y-4 border-b md:border-b-0 md:border-r border-emerald-900">
              <h3 className="text-xl font-bold">Join a Program</h3>
              <p className="text-xs text-emerald-100/80 leading-relaxed">
                Enhance your skills with KSSFCL's certified cooperative training modules.
              </p>
              <ul className="space-y-2 text-xs pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Expert Faculty</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Digital Certification</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Practical Insights</span>
                </li>
              </ul>
            </div>

            {/* Form */}
            <div className="md:col-span-8 p-6 sm:p-8 bg-white">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700">Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Enter your name"
                      className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-emerald-700"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700">Society Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Name of Cooperative"
                      className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-emerald-700"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700">Contact Number</label>
                    <input
                      type="tel"
                      required
                      placeholder="10-digit mobile"
                      className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-emerald-700"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-slate-700">Select Training Program</label>
                    <select
                      required
                      defaultValue=""
                      className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-emerald-700 text-slate-700"
                    >
                      <option value="" disabled>Choose Program...</option>
                      <option>Digital Transformation Workshop</option>
                      <option>Governance &amp; Ethics</option>
                      <option>Financial Management &amp; Audit</option>
                      <option>Other (Specify in Message)</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">Additional Remarks</label>
                  <textarea
                    rows={3}
                    placeholder="Any specific requirements?"
                    className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-hidden focus:ring-2 focus:ring-emerald-700"
                  />
                </div>

                <div className="pt-2 text-right">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-6 py-2.5 bg-emerald-950 hover:bg-emerald-900 text-white rounded-xl text-xs font-bold transition-all shadow-xs"
                  >
                    <span>Submit Registration</span>
                    <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Confirmation Modal */}
      {isSubmitted && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-sm w-full p-6 text-center space-y-4 shadow-xl relative animate-in fade-in zoom-in duration-200">
            <button 
              onClick={() => setIsSubmitted(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="w-16 h-16 bg-amber-50 rounded-full border-2 border-amber-400 flex items-center justify-center mx-auto text-amber-600">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-1">
              <h3 className="text-lg font-bold text-slate-900">Registration Received!</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Thank you for choosing KSSFCL. Our training coordinator will contact you shortly with the schedule and details.
              </p>
            </div>

            <button
              onClick={() => setIsSubmitted(false)}
              className="w-full py-2.5 bg-emerald-950 hover:bg-emerald-900 text-white rounded-xl text-xs font-bold transition-all"
            >
              Great, thank you!
            </button>
          </div>
        </div>
      )}
    </main>
  );
}