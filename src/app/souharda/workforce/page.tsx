'use client';

import React, { useState, useEffect, useRef } from 'react';
import PageHero from '@/components/common/PageHero';
import { 
  Search, 
  Phone, 
  Mail, 
  Loader2, 
  Printer, 
  Building2,
  Users,
  PhoneCall,
  UserCheck,
  Compass,
  Copy,
  Check,
  MessageCircle,
  HelpCircle,
  X,
  ArrowLeft,
  MapPin,
  Briefcase,
  User,
  ShieldCheck,
  ChevronRight,
  BookOpen
} from 'lucide-react';

interface Employee {
  id?: string;
  name: string;
  designation: string;
  region?: string;
  cug?: string;
  email?: string;
  photoUrl?: string;
  grade?: string;
  department?: string;
  officeAddress?: string;
  reportingManager?: string;
  bio?: string;
}

const BATCH_SIZE = 20;

export default function WorkforcePage() {
  const [employeesList, setEmployeesList] = useState<Employee[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegionFilter, setSelectedRegionFilter] = useState('All');
  const [loading, setLoading] = useState(true);

  // Selected Employee for Centered Profile Modal
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null);

  // Toast & Copy State
  const [copiedText, setCopiedText] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Infinite Scroll State
  const [visibleCount, setVisibleCount] = useState(BATCH_SIZE);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const loaderRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    fetch('/souharda/workforce.json')
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        const list = data.employees || (Array.isArray(data) ? data : []);
        setEmployeesList(list);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to load workforce dataset:', err);
        setLoading(false);
      });
  }, []);

  // Copy to Clipboard Handler
  const handleCopy = (text: string, label: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    setToastMessage(`Copied ${label}: ${text}`);

    setTimeout(() => setCopiedText(null), 2000);
    setTimeout(() => setToastMessage(null), 3000);
  };

  // Format CUG phone string to WhatsApp direct link
  const formatWhatsAppUrl = (phoneStr: string) => {
    const cleanNumber = phoneStr.replace(/\D/g, '');
    const fullNumber = cleanNumber.length === 10 ? `91${cleanNumber}` : cleanNumber;
    return `https://wa.me/${fullNumber}`;
  };

  // Filter staff based on search query and division filter
  const filteredEmployees = employeesList.filter((employee) => {
    const term = searchTerm.toLowerCase();
    const name = (employee.name || '').toLowerCase();
    const designation = (employee.designation || '').toLowerCase();
    const region = (employee.region || 'Head Office / Administrative Division').toLowerCase();

    const matchesSearch = name.includes(term) || designation.includes(term) || region.includes(term);
    const matchesRegion = selectedRegionFilter === 'All' || (employee.region || 'Head Office / Administrative Division') === selectedRegionFilter;

    return matchesSearch && matchesRegion;
  });

  const availableRegions = [
    'All',
    ...Array.from(new Set(employeesList.map((emp) => emp.region || 'Head Office / Administrative Division').filter(Boolean)))
  ];

  // Dynamic Metrics
  const totalStaffCount = employeesList.length;
  const activeDivisionsCount = availableRegions.length - 1;
  const cugContactableCount = employeesList.filter((e) => e.cug && e.cug.trim() !== '').length;
  const cugRatio = totalStaffCount > 0 ? Math.round((cugContactableCount / totalStaffCount) * 100) : 0;
  
  const leadershipCount = employeesList.filter((e) => {
    const desig = (e.designation || '').toLowerCase();
    return desig.includes('director') || desig.includes('manager') || desig.includes('head') || desig.includes('officer');
  }).length;

  const visibleEmployees = filteredEmployees.slice(0, visibleCount);
  const hasMore = visibleCount < filteredEmployees.length;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const target = entries[0];
        if (target.isIntersecting && hasMore && !isLoadingMore) {
          setIsLoadingMore(true);
          setTimeout(() => {
            setVisibleCount((prev) => prev + BATCH_SIZE);
            setIsLoadingMore(false);
          }, 300);
        }
      },
      { threshold: 0.1 }
    );

    if (loaderRef.current) observer.observe(loaderRef.current);
    return () => observer.disconnect();
  }, [hasMore, isLoadingMore]);

  // Group visible employees by Division
  const groupedData = visibleEmployees.reduce((acc, employee) => {
    const region = employee.region || 'Head Office / Administrative Division';
    if (!acc[region]) acc[region] = [];
    acc[region].push(employee);
    return acc;
  }, {} as Record<string, Employee[]>);

  const handleSearchChange = (term: string) => {
    setSearchTerm(term);
    setVisibleCount(BATCH_SIZE);
  };

  const handleFilterChange = (region: string) => {
    setSelectedRegionFilter(region);
    setVisibleCount(BATCH_SIZE);
  };

  const scrollToDivision = (divisionName: string) => {
    const elementId = `division-${divisionName.replace(/\s+/g, '-').toLowerCase()}`;
    const targetElement = document.getElementById(elementId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F0F3F8] text-slate-800 font-sans pb-12 relative overflow-x-hidden">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white text-xs sm:text-sm font-semibold px-4 py-3 rounded-lg shadow-xl flex items-center gap-2.5 animate-bounce print:hidden border border-slate-700">
          <Check className="w-4 h-4 text-emerald-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Hero Header */}
      <div className="print:hidden">
        <PageHero 
          title="WORKFORCE DIRECTORY" 
          subtitle="Division-Wise Administrative & Operational Staff Directory — Karnataka State Souharda Federal Cooperative Ltd." 
        />
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        
        {/* Title & Navigation */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3 print:hidden">
          <h1 className="text-2xl font-bold text-slate-800 flex items-center gap-2.5">
            <Users className="w-6 h-6 text-[#39A296]" />
            <span>Official Staff Directory</span>
          </h1>
          <div className="text-sm text-slate-500">
            <span>Public Directory</span> &gt; <span className="text-slate-800 font-semibold">Division Contacts</span>
          </div>
        </div>

        {/* Quick Stats Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 print:hidden">
          <div className="bg-white p-4 rounded-md border border-slate-200 shadow-xs flex items-center gap-4">
            <div className="p-3 bg-teal-50 text-[#39A296] rounded-md flex-shrink-0">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs text-slate-500 font-medium">Total Staff Strength</p>
              <div className="flex items-baseline gap-1.5">
                <p className="text-2xl font-bold text-slate-900">{totalStaffCount}</p>
                <span className="text-xs text-slate-500 font-normal">Employees</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-md border border-slate-200 shadow-xs flex items-center gap-4">
            <div className="p-3 bg-slate-100 text-slate-700 rounded-md flex-shrink-0">
              <Building2 className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs text-slate-500 font-medium">Regional Offices</p>
              <div className="flex items-baseline gap-1.5">
                <p className="text-2xl font-bold text-slate-900">{activeDivisionsCount}</p>
                <span className="text-xs text-slate-500 font-normal">Divisions</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-md border border-slate-200 shadow-xs flex items-center gap-4">
            <div className="p-3 bg-blue-50 text-blue-600 rounded-md flex-shrink-0">
              <PhoneCall className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs text-slate-500 font-medium">Direct CUG Coverage</p>
              <div className="flex items-baseline gap-1.5">
                <p className="text-2xl font-bold text-slate-900">{cugRatio}%</p>
                <span className="text-xs text-slate-500 font-normal">({cugContactableCount} Available)</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-md border border-slate-200 shadow-xs flex items-center gap-4">
            <div className="p-3 bg-amber-50 text-amber-600 rounded-md flex-shrink-0">
              <UserCheck className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs text-slate-500 font-medium">Key Officers</p>
              <div className="flex items-baseline gap-1.5">
                <p className="text-2xl font-bold text-slate-900">{leadershipCount}</p>
                <span className="text-xs text-slate-500 font-normal">Executives</span>
              </div>
            </div>
          </div>
        </div>

        {/* Public Control Toolbar */}
        <div className="bg-white p-4 rounded-md border border-slate-200 shadow-sm flex flex-wrap items-center justify-between gap-4 print:hidden">
          <div className="flex flex-wrap items-center gap-3">
            <button 
              onClick={() => window.print()}
              className="px-4 py-2 bg-[#39A296] hover:bg-[#2e8278] text-white text-sm font-semibold rounded flex items-center gap-2 transition shadow-2xs"
            >
              <Printer className="w-4 h-4" />
              <span>Print / Save PDF</span>
            </button>

            <a 
              href="/contact"
              className="px-4 py-2 border border-slate-300 rounded text-sm font-medium text-slate-700 hover:bg-slate-50 transition flex items-center gap-2"
            >
              <HelpCircle className="w-4 h-4 text-slate-500" />
              <span>General Inquiry</span>
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
            <select
              value={selectedRegionFilter}
              onChange={(e) => handleFilterChange(e.target.value)}
              className="bg-slate-50 border border-slate-300 rounded px-3 py-2 text-sm text-slate-700 font-medium focus:outline-none focus:border-slate-500"
            >
              {availableRegions.map((reg) => (
                <option key={reg} value={reg}>
                  {reg === 'All' ? 'All Divisions' : reg}
                </option>
              ))}
            </select>

            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
              <input
                type="text"
                placeholder="Search staff or designation..."
                value={searchTerm}
                onChange={(e) => handleSearchChange(e.target.value)}
                className="w-full pl-9 pr-3 py-2 bg-white border border-slate-300 rounded text-sm focus:outline-none focus:border-slate-500"
              />
            </div>
          </div>
        </div>

        {/* Division Anchor Quick Jump Bar */}
        {!loading && Object.keys(groupedData).length > 1 && (
          <div className="bg-white p-3.5 rounded-md border border-slate-200 shadow-xs flex items-center gap-3 print:hidden overflow-x-auto">
            <div className="flex items-center gap-1.5 text-xs font-bold text-slate-500 uppercase tracking-wider whitespace-nowrap pl-1">
              <Compass className="w-4 h-4 text-[#39A296]" />
              <span>Jump to Division:</span>
            </div>
            <div className="flex items-center gap-2 overflow-x-auto py-0.5 no-scrollbar">
              {Object.keys(groupedData).map((divisionName) => (
                <button
                  key={divisionName}
                  onClick={() => scrollToDivision(divisionName)}
                  className="px-3 py-1 bg-slate-100 hover:bg-[#39A296] hover:text-white text-slate-700 text-xs font-medium rounded-full border border-slate-200 hover:border-[#39A296] whitespace-nowrap transition-colors shadow-2xs"
                >
                  {divisionName}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Counter Info Bar */}
        <div className="text-sm text-slate-600 font-medium px-1 print:hidden flex items-center justify-between">
          <span>
            Showing <span className="text-slate-900 font-bold">{visibleEmployees.length}</span> of <span className="text-slate-900 font-bold">{filteredEmployees.length}</span> staff members.
          </span>
          <span className="text-xs text-slate-400 italic">Click any row to view executive profile modal</span>
        </div>

        {/* Division Tables List */}
        {loading ? (
          <div className="flex items-center justify-center py-20 text-slate-500 bg-white rounded border border-slate-200">
            <Loader2 className="w-7 h-7 animate-spin text-[#39A296]" />
            <span className="text-base font-medium ml-3">Loading directory information...</span>
          </div>
        ) : Object.keys(groupedData).length === 0 ? (
          <div className="bg-white p-12 text-center text-slate-500 text-base rounded border border-slate-200 shadow-sm space-y-3">
            <p>No staff records found matching <span className="font-semibold text-slate-800">"{searchTerm}"</span>.</p>
            <button 
              onClick={() => { setSearchTerm(''); setSelectedRegionFilter('All'); }}
              className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold rounded transition"
            >
              Reset Search Filters
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            {Object.entries(groupedData).map(([divisionName, members], groupIdx) => {
              const divisionId = `division-${divisionName.replace(/\s+/g, '-').toLowerCase()}`;
              return (
                <div 
                  id={divisionId}
                  key={groupIdx} 
                  className="bg-white border border-slate-200 rounded-md shadow-sm overflow-hidden scroll-mt-6"
                >
                  {/* Division Header Banner */}
                  <div className="bg-[#2C3E50] text-white px-5 py-3 flex items-center justify-between sticky top-0 z-10 shadow-xs">
                    <div className="flex items-center gap-2.5">
                      <Building2 className="w-5 h-5 text-[#4DB6AC]" />
                      <h2 className="text-base sm:text-lg font-bold tracking-wide uppercase">
                        {divisionName}
                      </h2>
                    </div>
                    <span className="bg-[#34495E] text-[#4DB6AC] text-xs sm:text-sm font-semibold px-3 py-1 rounded-full border border-slate-600">
                      {members.length} {members.length === 1 ? 'Staff Member' : 'Staff Members'}
                    </span>
                  </div>

                  {/* Division Table */}
                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse text-sm">
                      <thead>
                        <tr className="bg-slate-100 text-slate-800 font-bold border-b border-slate-200 text-sm">
                          <th className="p-3.5 w-14 text-center border-r border-slate-200">#</th>
                          <th className="p-3.5 border-r border-slate-200">Staff Name</th>
                          <th className="p-3.5 border-r border-slate-200">Designation</th>
                          <th className="p-3.5 border-r border-slate-200">CUG Phone</th>
                          <th className="p-3.5 border-r border-slate-200">Official Email</th>
                          <th className="p-3.5 text-center w-12 print:hidden"></th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-200 text-sm">
                        {members.map((emp, idx) => (
                          <tr 
                            key={idx} 
                            onClick={() => setSelectedEmployee(emp)}
                            className={`cursor-pointer hover:bg-teal-50/60 transition group ${
                              idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/70'
                            }`}
                          >
                            <td className="p-3.5 text-center text-slate-500 font-mono border-r border-slate-200 font-medium">
                              {String(idx + 1).padStart(2, '0')}
                            </td>
                            <td className="p-3.5 font-bold text-slate-900 border-r border-slate-200 text-base group-hover:text-[#39A296] transition-colors">
                              {emp.name}
                            </td>
                            <td className="p-3.5 text-slate-700 font-medium border-r border-slate-200">
                              {emp.designation}
                            </td>
                            
                            {/* CUG Phone Cell */}
                            <td className="p-3.5 text-slate-800 border-r border-slate-200">
                              {emp.cug ? (
                                <div className="flex items-center justify-between gap-2">
                                  <a 
                                    href={`tel:${emp.cug}`} 
                                    onClick={(e) => e.stopPropagation()}
                                    className="hover:text-cyan-700 font-medium flex items-center gap-2"
                                    title="Click to call"
                                  >
                                    <Phone className="w-4 h-4 text-slate-400" />
                                    <span>{emp.cug}</span>
                                  </a>

                                  <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition print:hidden">
                                    <a
                                      href={formatWhatsAppUrl(emp.cug)}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      onClick={(e) => e.stopPropagation()}
                                      className="p-1 hover:bg-emerald-100 text-emerald-600 rounded transition"
                                      title="Open WhatsApp Chat"
                                    >
                                      <MessageCircle className="w-3.5 h-3.5" />
                                    </a>

                                    <button 
                                      onClick={(e) => handleCopy(emp.cug || '', 'CUG Phone', e)}
                                      className="p-1 hover:bg-slate-200 text-slate-500 rounded transition"
                                      title="Copy Phone Number"
                                    >
                                      {copiedText === emp.cug ? (
                                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                                      ) : (
                                        <Copy className="w-3.5 h-3.5" />
                                      )}
                                    </button>
                                  </div>
                                </div>
                              ) : '-'}
                            </td>

                            {/* Official Email Cell */}
                            <td className="p-3.5 text-slate-800 border-r border-slate-200">
                              {emp.email ? (
                                <div className="flex items-center justify-between gap-2">
                                  <a 
                                    href={`mailto:${emp.email}`} 
                                    onClick={(e) => e.stopPropagation()}
                                    className="text-blue-600 hover:underline font-medium flex items-center gap-2"
                                    title="Click to send email"
                                  >
                                    <Mail className="w-4 h-4 text-slate-400" />
                                    <span>{emp.email}</span>
                                  </a>

                                  <button 
                                    onClick={(e) => handleCopy(emp.email || '', 'Email', e)}
                                    className="opacity-0 group-hover:opacity-100 p-1 hover:bg-slate-200 text-slate-500 rounded transition print:hidden"
                                    title="Copy Email Address"
                                  >
                                    {copiedText === emp.email ? (
                                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                                    ) : (
                                      <Copy className="w-3.5 h-3.5" />
                                    )}
                                  </button>
                                </div>
                              ) : '-'}
                            </td>

                            {/* Row Action Arrow */}
                            <td className="p-3.5 text-center text-slate-400 group-hover:text-[#39A296] print:hidden">
                              <ChevronRight className="w-4 h-4 mx-auto group-hover:translate-x-0.5 transition-transform" />
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                </div>
              );
            })}
          </div>
        )}

        {/* Scroll Sentinel */}
        <div ref={loaderRef} className="p-5 text-center border-t border-slate-200 bg-white rounded-md mt-6 print:hidden">
          {isLoadingMore ? (
            <div className="flex items-center justify-center gap-2.5 text-sm text-slate-600 font-medium">
              <Loader2 className="w-5 h-5 animate-spin text-[#39A296]" />
              <span>Loading remaining records...</span>
            </div>
          ) : hasMore ? (
            <span className="text-sm text-slate-400">Scroll down to load more divisions</span>
          ) : (
            <span className="text-sm font-semibold text-slate-500">
              End of Directory — All {filteredEmployees.length} staff records loaded.
            </span>
          )}
        </div>

      </main>

      {/* CENTERED RICH PROFILE MODAL */}
      {selectedEmployee && (
        <div className="fixed inset-0 z-50 overflow-y-auto p-4 sm:p-6 md:p-10 flex items-center justify-center print:hidden">
          {/* Backdrop Blur */}
          <div 
            onClick={() => setSelectedEmployee(null)}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
          />

          {/* Modal Container */}
          <div className="relative bg-white w-full max-w-2xl rounded-xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[90vh]">
            
            {/* Top Bar Navigation */}
            <div className="bg-slate-100 px-4 py-3 border-b border-slate-200 flex items-center justify-between text-xs font-semibold text-slate-700">
              <button 
                onClick={() => setSelectedEmployee(null)}
                className="flex items-center gap-1.5 hover:text-slate-900 transition"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back</span>
              </button>
              
              <button 
                onClick={() => setSelectedEmployee(null)}
                className="flex items-center gap-1.5 px-2.5 py-1 bg-white hover:bg-slate-200 rounded border border-slate-200 text-slate-700 transition"
              >
                <X className="w-3.5 h-3.5" />
                <span>Close</span>
              </button>
            </div>

            {/* Modal Body Container (Scrollable) */}
            <div className="overflow-y-auto flex-1">
              
              {/* Header Profile Hero Card */}
              <div className="bg-[#1C3144] text-white p-8 text-center flex flex-col items-center justify-center relative">
                {/* Profile Photo Avatar */}
                <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-xl overflow-hidden border-4 border-white/20 shadow-lg mb-4 bg-slate-700 flex items-center justify-center">
                  {selectedEmployee.photoUrl ? (
                    <img 
                      src={selectedEmployee.photoUrl} 
                      alt={selectedEmployee.name}
                      className="w-full h-full object-cover" 
                    />
                  ) : (
                    <User className="w-14 h-14 text-slate-400" />
                  )}
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">{selectedEmployee.name}</h2>
              </div>

              {/* Badges Section */}
              <div className="bg-white py-4 px-6 border-b border-slate-100 flex flex-wrap items-center justify-center gap-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-50 text-amber-800 text-xs font-bold rounded-md border border-amber-200">
                  <Briefcase className="w-3.5 h-3.5 text-amber-600" />
                  <span>{selectedEmployee.designation}</span>
                </span>
                
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-sky-50 text-sky-800 text-xs font-bold rounded-md border border-sky-200">
                  <MapPin className="w-3.5 h-3.5 text-sky-600" />
                  <span>{selectedEmployee.region || 'Head Office'}</span>
                </span>
              </div>

              {/* Detailed Cards Content */}
              <div className="p-6 space-y-5 text-sm text-slate-700">
                
                {/* Professional Journey / Bio Section (If available) */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs uppercase tracking-wider">
                    <BookOpen className="w-4 h-4 text-[#39A296]" />
                    <span>Professional Profile</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed bg-slate-50 p-4 rounded-lg border border-slate-200/80">
                    {selectedEmployee.bio || `${selectedEmployee.name} currently serves as ${selectedEmployee.designation} within the ${selectedEmployee.region || 'Head Office'} division at Karnataka State Souharda Federal Cooperative Ltd., overseeing operational directives and administrative functions.`}
                  </p>
                </div>

                {/* Role & Grade Details */}
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200/80 space-y-3">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs uppercase tracking-wider">
                    <Briefcase className="w-4 h-4 text-[#39A296]" />
                    <span>Role & Grade</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div>
                      <span className="text-slate-500 block">Designation</span>
                      <span className="font-semibold text-slate-800 text-sm">{selectedEmployee.designation}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 block">Grade / Cadre</span>
                      <span className="font-semibold text-slate-800 text-sm">{selectedEmployee.grade || 'Officer Cadre'}</span>
                    </div>
                  </div>
                </div>

                {/* Department & Division */}
                <div className="bg-slate-50 p-4 rounded-lg border border-slate-200/80 space-y-3">
                  <div className="flex items-center gap-2 font-bold text-slate-900 text-xs uppercase tracking-wider">
                    <ShieldCheck className="w-4 h-4 text-[#39A296]" />
                    <span>Department & Division</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div>
                      <span className="text-slate-500 block">Department / Sub-Unit</span>
                      <span className="font-semibold text-slate-800 text-sm">{selectedEmployee.department || 'Administrative & Operational Services'}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 block">Regional Office</span>
                      <span className="font-semibold text-slate-800 text-sm">{selectedEmployee.region || 'Head Office'}</span>
                    </div>
                  </div>
                </div>

                {/* Direct Contact Options */}
                <div className="space-y-3">
                  <span className="font-bold text-slate-900 text-xs uppercase tracking-wider block">Direct Communication</span>
                  
                  {selectedEmployee.cug && (
                    <div className="flex items-center justify-between p-3.5 bg-white rounded-lg border border-slate-200 shadow-2xs">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-emerald-50 text-emerald-600 rounded-md">
                          <Phone className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-xs text-slate-500">CUG Phone</p>
                          <p className="font-bold text-slate-900">{selectedEmployee.cug}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <a
                          href={formatWhatsAppUrl(selectedEmployee.cug)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-1.5 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 font-semibold text-xs rounded-md transition flex items-center gap-1.5 border border-emerald-200"
                        >
                          <MessageCircle className="w-3.5 h-3.5" />
                          <span>WhatsApp</span>
                        </a>

                        <button
                          onClick={() => handleCopy(selectedEmployee.cug || '', 'Phone')}
                          className="p-2 hover:bg-slate-100 rounded-md text-slate-500 transition border border-slate-200"
                          title="Copy CUG Phone"
                        >
                          <Copy className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  )}

                  {selectedEmployee.email && (
                    <div className="flex items-center justify-between p-3.5 bg-white rounded-lg border border-slate-200 shadow-2xs">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-blue-50 text-blue-600 rounded-md">
                          <Mail className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-xs text-slate-500">Official Email</p>
                          <p className="font-bold text-slate-900 break-all">{selectedEmployee.email}</p>
                        </div>
                      </div>

                      <button
                        onClick={() => handleCopy(selectedEmployee.email || '', 'Email')}
                        className="p-2 hover:bg-slate-100 rounded-md text-slate-500 transition border border-slate-200"
                        title="Copy Email"
                      >
                        <Copy className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                </div>

              </div>

            </div>

            {/* Modal Bottom Footer Button */}
            <div className="p-4 bg-slate-50 border-t border-slate-200">
              <button
                onClick={() => setSelectedEmployee(null)}
                className="w-full py-2.5 bg-[#1C3144] hover:bg-slate-800 text-white font-bold text-sm rounded-lg transition"
              >
                Close Details
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}