'use client';

import { useState, useMemo } from 'react';
import { 
  Users, 
  UserCheck, 
  MapPin, 
  CheckCircle, 
  ShieldLock, 
  Wallet, 
  Search, 
  Phone, 
  Mail, 
  ExternalLink 
} from 'lucide-react';
import ServicesHero from '@/components/common/ServicesHero';

interface StatItem {
  icon: typeof Users;
  value: string;
  label: string;
  accentColor: string;
  iconBg: string;
}

interface CSCManager {
  id: string;
  name: string;
  district: string;
  role: string;
  phone: string;
  email: string;
}

const STATS: StatItem[] = [
  {
    icon: Users,
    value: '37,184',
    label: 'TOTAL VLEs',
    accentColor: 'text-slate-900',
    iconBg: 'bg-slate-100',
  },
  {
    icon: UserCheck,
    value: '12,365',
    label: 'WOMEN VLEs',
    accentColor: 'text-rose-600',
    iconBg: 'bg-rose-50',
  },
  {
    icon: MapPin,
    value: '6,080',
    label: 'PANCHAYATS',
    accentColor: 'text-emerald-600',
    iconBg: 'bg-emerald-50',
  },
  {
    icon: CheckCircle,
    value: '100%',
    label: 'GP COVERAGE',
    accentColor: 'text-amber-600',
    iconBg: 'bg-amber-50',
  },
];

const DISTRICT_MANAGERS: CSCManager[] = [
  {
    id: '1',
    name: 'Rajesh Kumar',
    district: 'Bengaluru Urban',
    role: 'District Manager',
    phone: '+91 98765 43210',
    email: 'dm.bengaluru@csc.gov.in',
  },
  {
    id: '2',
    name: 'Priya Sharma',
    district: 'Mysuru',
    role: 'District Manager',
    phone: '+91 98765 43211',
    email: 'dm.mysuru@csc.gov.in',
  },
  {
    id: '3',
    name: 'Suresh Patil',
    district: 'Belagavi',
    role: 'Senior District Manager',
    phone: '+91 98765 43212',
    email: 'dm.belagavi@csc.gov.in',
  },
  {
    id: '4',
    name: 'Anil Deshmukh',
    district: 'Kalaburagi',
    role: 'District Manager',
    phone: '+91 98765 43213',
    email: 'dm.kalaburagi@csc.gov.in',
  },
  {
    id: '5',
    name: 'Kavitha Rao',
    district: 'Dakshina Kannada',
    role: 'District Manager',
    phone: '+91 98765 43214',
    email: 'dm.dkannada@csc.gov.in',
  },
  {
    id: '6',
    name: 'Ramesh Babu',
    district: 'Shivamogga',
    role: 'District Manager',
    phone: '+91 98765 43215',
    email: 'dm.shivamogga@csc.gov.in',
  },
];

export default function CSCPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredManagers = useMemo(() => {
    const query = searchTerm.toLowerCase().trim();
    if (!query) return DISTRICT_MANAGERS;
    return DISTRICT_MANAGERS.filter(
      (m) =>
        m.name.toLowerCase().includes(query) ||
        m.district.toLowerCase().includes(query) ||
        m.role.toLowerCase().includes(query)
    );
  }, [searchTerm]);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      
      {/* Standardized Header Hero */}
      <ServicesHero
        theme="emerald"
        badgeText="Digital Governance"
        title="Common Services Centres (CSC)"
        subtitle="Delivering essential e-governance, financial, and digital services to rural & urban citizens across Karnataka."
      />

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10">
        
        {/* Impact Section */}
        <section id="preamble" className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 pb-3">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
              Impact in Karnataka
            </h2>
            <span className="self-start sm:self-auto inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-amber-400 text-slate-950 shadow-xs">
              As of March 2024
            </span>
          </div>

          {/* Impact Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {STATS.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs text-center space-y-3 hover:shadow-md transition-shadow"
                >
                  <div className={`inline-flex p-3 rounded-xl ${stat.iconBg} ${stat.accentColor}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                      {stat.value}
                    </div>
                    <div className="text-[11px] sm:text-xs font-bold text-slate-500 uppercase tracking-wider mt-0.5">
                      {stat.label}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Service Portfolio Section */}
        <section id="services" className="space-y-4">
          <div className="border-b border-slate-200 pb-3">
            <h2 className="text-2xl font-bold text-slate-900">
              Service Portfolio
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Insurance Services */}
            <div className="bg-white rounded-2xl border border-slate-200 border-t-4 border-t-slate-900 p-6 shadow-xs flex flex-col justify-between space-y-5">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-slate-100 text-slate-900">
                    <ShieldLock className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">
                    Insurance Services
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Mandatory 3rd Party Motor, Health (Cashless), and Fasal Bima scheme enrollment for farmers across districts.
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                <span className="text-xs font-bold text-slate-700 bg-slate-100 px-3 py-1 rounded-full">
                  RAP/VLE INS Certified
                </span>
                <a
                  href="https://insurance.csccloud.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-colors"
                >
                  <span>Login</span>
                  <ExternalLink className="w-3.5 h-3.5 text-amber-400" />
                </a>
              </div>
            </div>

            {/* Financial Inclusion */}
            <div className="bg-white rounded-2xl border border-slate-200 border-t-4 border-t-emerald-600 p-6 shadow-xs flex flex-col justify-between space-y-5">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-600">
                    <Wallet className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">
                    Financial Inclusion
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Banking services via AePS, Atal Pension Yojana registration, and Micro-finance accessibility for last-mile citizens.
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full">
                  3 VLEs per Panchayat
                </span>
              </div>
            </div>

          </div>
        </section>

        {/* Directory Search & Grid */}
        <section className="space-y-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 pb-3">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                CSC District Directory
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                Direct contact information for CSC District Managers across Karnataka.
              </p>
            </div>

            {/* Search Bar */}
            <div className="relative w-full md:w-80">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by Name or District..."
                className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent shadow-xs transition-all"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
            </div>
          </div>

          {/* Directory Cards Grid */}
          {filteredManagers.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
              {filteredManagers.map((manager) => (
                <div
                  key={manager.id}
                  className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs hover:shadow-md transition-shadow space-y-4 flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-base font-bold text-slate-900">
                        {manager.name}
                      </h3>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-slate-100 text-slate-800 shrink-0">
                        {manager.district}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 font-medium">
                      {manager.role}
                    </p>
                  </div>

                  <div className="space-y-2 pt-3 border-t border-slate-100 text-xs text-slate-700">
                    <a
                      href={`tel:${manager.phone.replace(/\s+/g, '')}`}
                      className="flex items-center gap-2 hover:text-slate-900 font-medium transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                      <span>{manager.phone}</span>
                    </a>
                    <a
                      href={`mailto:${manager.email}`}
                      className="flex items-center gap-2 hover:text-slate-900 font-medium transition-colors truncate"
                    >
                      <Mail className="w-3.5 h-3.5 text-slate-600 shrink-0" />
                      <span className="truncate">{manager.email}</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-2xl border border-slate-200 p-8 text-center space-y-2">
              <p className="text-sm font-bold text-slate-800">
                No District Managers found matching "{searchTerm}"
              </p>
              <p className="text-xs text-slate-500">
                Try searching for a different district or manager name.
              </p>
            </div>
          )}
        </section>

      </div>
    </main>
  );
}