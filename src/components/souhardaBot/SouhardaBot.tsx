'use client';

import React, { useState } from 'react';
import { X, Send, Bot } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import directorsData from '@/data/directorsData';

interface DirectorItem {
  name: string;
  designation?: string;
  region?: string;
  [key: string]: unknown;
}

export default function SouhardaBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ sender: 'user' | 'bot'; text: string }[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const { locale } = useLanguage();

  const handleSend = async () => {
    if (!input.trim() || loading) return;
    const userMsg = input;
    setInput('');
    setMessages((prev) => [...prev, { sender: 'user', text: userMsg }]);
    setLoading(true);

    // Local search in directorsData
    const query = userMsg.toLowerCase().trim();
    const matchedDirector = (directorsData as DirectorItem[]).find(
      (d: DirectorItem) =>
        d.name?.toLowerCase().includes(query) ||
        (d.region && d.region.toLowerCase().includes(query))
    );

    if (matchedDirector) {
      const reply =
        locale === 'kn'
          ? `${matchedDirector.name} ಅವರು ${matchedDirector.designation || 'ನಿರ್ದೇಶಕರು'} (${
              matchedDirector.region || 'KSSFCL'
            }) ಆಗಿ ಸೇವೆ ಸಲ್ಲಿಸುತ್ತಿದ್ದಾರೆ. ಹೆಚ್ಚಿನ ವಿವರಗಳಿಗಾಗಿ /souharda/directors/ ಗೆ ಭೇಟಿ ನೀಡಿ.`
          : `${matchedDirector.name} serves as ${matchedDirector.designation || 'Director'} (${
              matchedDirector.region || 'KSSFCL'
            } Region). Visit /souharda/directors/ for full details.`;

      setMessages((prev) => [...prev, { sender: 'bot', text: reply }]);
      setLoading(false);
      return;
    }

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMsg, locale }),
      });
      const data = await res.json();
      setMessages((prev) => [...prev, { sender: 'bot', text: data.reply }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { sender: 'bot', text: 'Error connecting to assistant. Please try again.' },
      ]);
    } font-sans
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2.5 bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold px-4 py-3 rounded-full shadow-2xl transition-all border border-amber-400 hover:scale-105"
        >
          <Bot className="w-5 h-5 text-slate-950" />
          <span className="text-xs uppercase tracking-wider">
            {locale === 'kn' ? 'ಸೌಹಾರ್ದ ಸಹಾಯಕ್' : 'Souharda AI'}
          </span>
        </button>
      )}

      {isOpen && (
        <div className="w-80 sm:w-96 bg-white border border-slate-200 rounded-3xl shadow-2xl overflow-hidden flex flex-col h-[520px]">
          <div className="bg-[#1e1435] text-white p-4 flex items-center justify-between border-b border-purple-900/40">
            <div className="flex items-center gap-2.5">
              <div className="p-2 bg-amber-500/20 rounded-xl border border-amber-500/30">
                <Bot className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <h3 className="text-xs font-black uppercase tracking-wider text-amber-400">
                  Souharda Cooperative Bot
                </h3>
                <p className="text-[10px] text-slate-300">Directors, Court, Gallery & Services</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-300 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-slate-50 text-xs">
            {messages.length === 0 && (
              <div className="text-center pt-8 px-4 space-y-2">
                <Bot className="w-8 h-8 text-amber-500 mx-auto opacity-60" />
                <p className="text-slate-500 font-medium">
                  {locale === 'kn'
                    ? 'ನಮಸ್ಕಾರ! ನಿರ್ದೇಶಕರು, ಸಿಬ್ಬಂದಿ, ನ್ಯಾಯಾಲಯ ಅಥವಾ ಸೇವೆಗಳ ಕುರಿತು ಏನೇ ಪ್ರಶ್ನೆಗಳಿದ್ದರೂ ಕೇಳಿ.'
                    : 'Hello! Ask me about Directors, Workforce, Court arbitration, Gallery, or Education services.'}
                </p>
              </div>
            )}
            {messages.map((m, i) => (
              <div
                key={i}
                className={`p-3 rounded-2xl max-w-[85%] leading-relaxed ${
                  m.sender === 'user'
                    ? 'bg-amber-500 text-slate-950 font-semibold ml-auto rounded-br-xs shadow-2xs'
                    : 'bg-white border border-slate-200/90 text-slate-800 mr-auto rounded-bl-xs shadow-2xs'
                }`}
              >
                {m.text}
              </div>
            ))}
            {loading && (
              <div className="bg-white border border-slate-200 text-slate-500 p-3 rounded-2xl w-24 mr-auto text-center italic text-[11px] animate-pulse">
                Thinking...
              </div>
            )}
          </div>

          <div className="p-3 bg-white border-t border-slate-200 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder={locale === 'kn' ? 'ನಿಮ್ಮ ಪ್ರಶ್ನೆ ಇಲ್ಲೆ ಬರೆಯಿರಿ...' : 'Ask a question...'}
              className="flex-1 text-xs px-3.5 py-2.5 bg-slate-100 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:border-amber-500"
            />
            <button
              onClick={handleSend}
              disabled={loading}
              className="p-2.5 bg-amber-500 hover:bg-amber-600 disabled:opacity-50 text-slate-950 rounded-xl font-bold transition-all"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}