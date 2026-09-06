'use client';

import { useState } from 'react';
import ConnectHero from '@/components/common/ConnectHero';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock } from 'lucide-react';

export default function ConnectPage() {
  const [activeTab, setActiveTab] = useState('general');

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <ConnectHero 
        activeTab={activeTab} 
        onTabChange={(tab) => setActiveTab(tab)} 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Contact Details Card */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 space-y-6 shadow-sm">
              <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-3">
                Head Office Details
              </h2>
              
              <div className="space-y-5 text-sm text-slate-600">
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-600 shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-bold block text-slate-900 text-sm">Head Office (Secretariat)</span>
                    <p className="text-slate-600 mt-0.5 leading-relaxed">
                      &quot;Souharda Sahakari Soudha&quot;, No.68, 1st Floor, Magadi Main Road, Malleswaram, Bengaluru - 560055
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3.5">
                  <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-600 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-bold block text-slate-900 text-sm">Phone Line</span>
                    <a href="tel:08023378375" className="text-slate-600 hover:text-amber-600 transition-colors">
                      080 - 2337 8375 / 76 / 77
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3.5">
                  <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-600 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-bold block text-slate-900 text-sm">Email Address</span>
                    <a href="mailto:souharda@souharda.coop" className="text-slate-600 hover:text-amber-600 transition-colors">
                      souharda@souharda.coop
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 pt-2 border-t border-slate-100">
                  <div className="p-2.5 rounded-xl bg-slate-100 text-slate-500 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div className="text-xs text-slate-500">
                    <span className="font-bold block text-slate-700">Working Hours</span>
                    Monday – Saturday (10:00 AM – 5:30 PM)
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Area */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-6">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <div className="p-2 rounded-lg bg-amber-500 text-slate-950 font-bold">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-slate-900">
                    {activeTab === 'support' ? 'Submit Support Ticket' : activeTab === 'offices' ? 'Branch Query' : 'Send Us a Message'}
                  </h2>
                  <p className="text-xs text-slate-500">
                    Fill in the details below and our team will get back to you shortly.
                  </p>
                </div>
              </div>

              <form onSubmit={(e) => e.preventDefault()} className="space-y-5 text-sm">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1.5">
                      Society Name
                    </label>
                    <input 
                      type="text" 
                      placeholder="Enter Society Name" 
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all text-sm"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1.5">
                      Mobile Number
                    </label>
                    <input 
                      type="tel" 
                      placeholder="Contact Number" 
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1.5">
                      Select Division
                    </label>
                    <select className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all text-sm bg-white">
                      <option value="">-- Select Office --</option>
                      <option value="bengaluru">Bengaluru Division</option>
                      <option value="belagavi">Belagavi Division</option>
                      <option value="kalaburagi">Kalaburagi Division</option>
                      <option value="mysuru">Mysuru Division</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1.5">
                      Purpose
                    </label>
                    <select className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all text-sm bg-white">
                      <option value="">-- Nature of Enquiry --</option>
                      <option value="general">General Information</option>
                      <option value="membership">Membership Query</option>
                      <option value="support">Technical Support</option>
                      <option value="complaint">Grievance</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1.5">
                    Message / Details
                  </label>
                  <textarea 
                    rows={4} 
                    placeholder="Provide additional details regarding your enquiry..." 
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 transition-all text-sm"
                  />
                </div>

                <button 
                  type="submit" 
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-900 text-white rounded-xl font-bold text-sm hover:bg-slate-800 focus:ring-4 focus:ring-slate-300 transition-all shadow-md"
                >
                  <Send className="w-4 h-4" /> Submit Enquiry
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}