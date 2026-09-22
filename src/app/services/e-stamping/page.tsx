'use client';

import React from 'react';
import { 
  CheckCircle2, 
  Download, 
  FileText, 
  BookOpen, 
  Phone, 
  AlertCircle,
  ShieldCheck,
  Building2
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import ServicesHero from '@/components/common/ServicesHero';

export default function EStampingPage() {
  const { locale } = useLanguage();

  const RESOURCES = [
    {
      title: locale === 'kn' ? 'ಶಾಖಾ ನೋಂದಣಿ ನಮೂನೆ' : 'Branch Registration Form',
      href: '/assets/docs/e-stamping/branch-registration-form.pdf',
      icon: Download,
    },
    {
      title: locale === 'kn' ? 'ಐಡಿ ಸೃಷ್ಟಿ ನಮೂನೆ' : 'ID Creation Form',
      href: '/assets/docs/e-stamping/id-creation-form.pdf',
      icon: Download,
    },
    {
      title: locale === 'kn' ? 'ಇ-ಸ್ಟ್ಯಾಂಪ್ ಪರಿಶೀಲನಾ ಪಟ್ಟಿ' : 'e-Stamp Checklist',
      href: '/assets/docs/e-stamping/e-stamp-checklist.pdf',
      icon: FileText,
    },
    {
      title: locale === 'kn' ? 'ಕರ್ನಾಟಕ ಲೇಖನಗಳ ಪಟ್ಟಿ' : 'KA Article List',
      href: '/assets/docs/e-stamping/ka-article-list.pdf',
      icon: BookOpen,
    },
  ];

  const SERVICE_CHARGES = [
    {
      value: locale === 'kn' ? 'ರೂ. ೧೦ ರಿಂದ ರೂ. ೧೦೦' : 'Rs. 10 to Rs. 100',
      charge: locale === 'kn' ? 'ರೂ. ೧೦/-' : 'Rs. 10/-',
      isFree: false,
    },
    {
      value: locale === 'kn' ? 'ರೂ. ೧೦೧ ರಿಂದ ರೂ. ೫,೦೦೦' : 'Rs. 101 to Rs. 5,000',
      charge: locale === 'kn' ? 'ರೂ. ೧೫/-' : 'Rs. 15/-',
      isFree: false,
    },
    {
      value: locale === 'kn' ? 'ರೂ. ೫,೦೦೦ ಕ್ಕಿಂತ ಹೆಚ್ಚು' : 'Above Rs. 5,000',
      charge: locale === 'kn' ? 'ಉಚಿತ ಸೇವೆ' : 'No Service Charge',
      isFree: true,
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      
      {/* Services Hero Header */}
      <ServicesHero
        badgeText={locale === 'kn' ? 'ಶಾಸನಬದ್ಧ ಸೇವೆಗಳು' : 'Statutory Services'}
        title={locale === 'kn' ? 'ಇ-ಸ್ಟ್ಯಾಂಪಿಂಗ್ ಸೇವೆಗಳು' : 'e-Stamping Services'}
        subtitle={
          locale === 'kn'
            ? 'KSSFCL ಮತ್ತು SHCIL ಮೂಲಕ ರಾಜ್ಯ ಸರ್ಕಾರಕ್ಕೆ ನ್ಯಾಯೇತರ ಮುದ್ರಾಂಕ ಶುಲ್ಕವನ್ನು ಪಾವತಿಸುವ ಸುರಕ್ಷಿತ ಇಲೆಕ್ಟ್ರಾನಿಕ್ ವಿಧಾನ.'
            : 'Secured electronic way of paying non-judicial stamp duty to the State Government through KSSFCL and SHCIL.'
        }
        imageSrc="/images/souharda/AllAboutKSSFCL_Intro.webp"
      />

      {/* Main Content Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Main Column */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* About Box */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
              <div className="space-y-3">
                <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                  <ShieldCheck className="w-6 h-6 text-emerald-900" />
                  {locale === 'kn' ? 'ಇ-ಸ್ಟ್ಯಾಂಪಿಂಗ್ ಬಗ್ಗೆ' : 'About e-Stamping'}
                </h2>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  {locale === 'kn' ? (
                    <>
                      ಇ-ಸ್ಟ್ಯಾಂಪಿಂಗ್ ಎಂಬುದು ಕಂಪ್ಯೂಟರ್ ಆಧಾರಿತ ಅಪ್ಲಿಕೇಶನ್ ಮತ್ತು ದಾಖಲೆಗಳ ಮುದ್ರಾಂಕದ ಸುರಕ್ಷಿತ ಇಲೆಕ್ಟ್ರಾನಿಕ್ ವಿಧಾನವಾಗಿದೆ. 
                      ಕರ್ನಾಟಕದಾದ್ಯಂತ ತನ್ನ ಸದಸ್ಯ ಸಹಕಾರ ಸಂಘಗಳಿಗೆ ಇ-ಸ್ಟ್ಯಾಂಪಿಂಗ್ ಪರವಾನಗಿಗಳನ್ನು ಒದಗಿಸಲು KSSFCL ಸಂಸ್ಥೆಯು{' '}
                      <strong className="text-slate-900 font-semibold">ಸ್ಟಾಕ್ ಹೋಲ್ಡಿಂಗ್ ಕಾರ್ಪೊರೇಷನ್ ಆಫ್ ಇಂಡಿಯಾ ಲಿಮಿಟೆಡ್ (SHCIL)</strong>{' '}
                      ನೊಂದಿಗೆ ಒಪ್ಪಂದ ಮಾಡಿಕೊಂಡಿದೆ.
                    </>
                  ) : (
                    <>
                      e-Stamping is a computer-based application and a secured electronic way of stamping documents. 
                      KSSFCL has entered into an agreement with{' '}
                      <strong className="text-slate-900 font-semibold">Stock Holding Corporation of India Ltd (SHCIL)</strong>{' '}
                      to provide e-stamping licenses to its member cooperative societies across Karnataka.
                    </>
                  )}
                </p>
              </div>

              {/* Benefits List */}
              <div className="space-y-4 pt-4 border-t border-slate-100">
                <h3 className="text-lg font-bold text-slate-900">
                  {locale === 'kn' ? 'ಇ-ಸ್ಟ್ಯಾಂಪಿಂಗ್ ಏಕೆ ಬಳಸಬೇಕು?' : 'Why use e-Stamping?'}
                </h3>
                <ul className="space-y-3 text-sm sm:text-base text-slate-700">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-slate-900">
                        {locale === 'kn' ? 'ಸುರಕ್ಷಿತ:' : 'Tamper-Proof:'}
                      </strong>{' '}
                      {locale === 'kn'
                        ? 'ಇಲೆಕ್ಟ್ರಾನಿಕ್ ರೂಪದಲ್ಲಿ ಸೃಷ್ಟಿಸಲಾದ ಮುದ್ರಾಂಕಗಳು ಸಂಪೂರ್ಣ ಸುರಕ್ಷಿತವಾಗಿವೆ.'
                        : 'Electronically generated stamps are highly secure.'}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-slate-900">
                        {locale === 'kn' ? 'ಸುಲಭ ಪರಿಶೀಲನೆ:' : 'Easy Verification:'}
                      </strong>{' '}
                      {locale === 'kn'
                        ? 'SHCIL ಪೋರ್ಟಲ್ ಮೂಲಕ ತಕ್ಷಣವೇ ಆನ್‌ಲೈನ್‌ನಲ್ಲಿ ಪರಿಶೀಲಿಸಬಹುದು.'
                        : 'Can be verified online instantly via the SHCIL portal.'}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-slate-900">
                        {locale === 'kn' ? 'ತಕ್ಷಣದ ಲಭ್ಯತೆ:' : 'Instant Generation:'}
                      </strong>{' '}
                      {locale === 'kn'
                        ? 'ಭೌತಿಕ ಮುದ್ರಾಂಕ ಕಾಗದಕ್ಕಾಗಿ ಕಾಯುವ ಅಗತ್ಯವಿಲ್ಲ.'
                        : 'No need to wait for physical stamp paper availability.'}
                    </span>
                  </li>
                </ul>
              </div>

              {/* Statutory Note Banner */}
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-start gap-3 text-amber-950 text-xs sm:text-sm">
                <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="font-bold">
                    {locale === 'kn' ? 'ಸೂಚನೆ: ' : 'Note: '}
                  </strong>
                  {locale === 'kn'
                    ? 'ಕರ್ನಾಟಕ ಮುದ್ರಾಂಕ ಕಾಯ್ದೆಯ ಪ್ರಕಾರ, ರೂ. ೧ ಲಕ್ಷಕ್ಕಿಂತ ಹೆಚ್ಚಿನ ವಹಿವಾಟುಗಳನ್ನು ಇ-ಸ್ಟ್ಯಾಂಪಿಂಗ್ ಮೂಲಕವೇ ಪಾವತಿಸಬೇಕು.'
                    : 'As per the Karnataka Stamp Act, transactions above Rs. 1 Lakh must be paid only through e-stamping.'}
                </div>
              </div>
            </div>

          </div>

          {/* Right Sidebar Column */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Resources Card */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs space-y-4">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-3">
                <Building2 className="w-5 h-5 text-emerald-900" />
                {locale === 'kn' ? 'ಸಂಪನ್ಮೂಲಗಳು ಮತ್ತು ನಮೂನೆಗಳು' : 'Resources & Forms'}
              </h3>
              <div className="space-y-2">
                {RESOURCES.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={idx}
                      href={item.href}
                      download
                      className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 hover:bg-emerald-950 text-slate-700 hover:text-white transition-all text-xs sm:text-sm font-semibold group border border-slate-100 hover:border-emerald-900"
                    >
                      <Icon className="w-4 h-4 text-amber-500 group-hover:text-amber-400 shrink-0" />
                      <span>{item.title}</span>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Assistance Card */}
            <div className="bg-emerald-950 text-white rounded-2xl p-6 text-center space-y-3 shadow-md border border-emerald-900">
              <h4 className="text-lg font-bold text-amber-400">
                {locale === 'kn' ? 'ಸಹಾಯ ಬೇಕೇ?' : 'Need Assistance?'}
              </h4>
              <p className="text-xs sm:text-sm text-emerald-100/90">
                {locale === 'kn'
                  ? 'ತಾಂತ್ರಿಕ ಸಹಾಯ ಮತ್ತು ವಿವರಗಳಿಗೆ ನಮ್ಮ ಇ-ಸ್ಟ್ಯಾಂಪಿಂಗ್ ವಿಭಾಗವನ್ನು ಸಂಪರ್ಕಿಸಿ.'
                  : 'Contact our e-Stamping department for setup help or technical assistance.'}
              </p>
              <a
                href="tel:08023378375"
                className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-xl text-xs sm:text-sm font-extrabold transition-colors shadow-xs"
              >
                <Phone className="w-4 h-4" />
                {locale === 'kn' ? 'ಕರೆ ಮಾಡಿ ೦೮೦-೨೩೩೭೮೩೭೫' : 'Call 080-23378375'}
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* Service Charges Section */}
      <section className="bg-white border-t border-slate-200 py-12 px-4">
        <div className="max-w-4xl mx-auto space-y-6">
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 text-center">
            {locale === 'kn' ? 'ಸೇವಾ ಶುಲ್ಕಗಳ ವಿವರ' : 'Service Charges'}
          </h3>
          
          <div className="overflow-hidden border border-slate-200 rounded-2xl shadow-xs">
            <table className="w-full text-left text-sm text-slate-800">
              <thead className="bg-emerald-950 text-white text-xs uppercase font-bold tracking-wider">
                <tr>
                  <th className="py-4 px-6 text-left">
                    {locale === 'kn' ? 'ಮುದ್ರಾಂಕ ಕಾಗದದ ಮೌಲ್ಯ' : 'Stamp Paper Value'}
                  </th>
                  <th className="py-4 px-6 text-center">
                    {locale === 'kn' ? 'ಸೇವಾ ಶುಲ್ಕ' : 'Service Charge'}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white">
                {SERVICE_CHARGES.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors">
                    <td className="py-4 px-6 font-medium text-slate-900">{row.value}</td>
                    <td className="py-4 px-6 text-center">
                      {row.isFree ? (
                        <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-900 border border-emerald-200">
                          {row.charge}
                        </span>
                      ) : (
                        <span className="font-semibold text-slate-700">{row.charge}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

    </main>
  );
}