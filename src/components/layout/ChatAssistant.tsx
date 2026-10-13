'use client';

import React, { useState } from 'react';
import { X, Send, Bot } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function ChatAssistant() {
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
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2.5 bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold px-4 py-3 rounded-full shadow-2xl transition-all border border-amber-400 hover:scale-105 cursor-pointer"
        >
          <Bot className="w-5 h-5 text-slate-950" />
          <span className="text-xs uppercase tracking-wider">
            {locale === 'kn' ? 'ಸೌಹಾರ್ದ ಸಹಾಯಕ್' : 'Souharda AI'}
          </span>
        </button>
      )}

      {isOpen && (
        <div className="w-80 sm:w-96 bg-white border border-slate-200 rounded-3xl shadow-2xl overflow-hidden flex flex-col h-[520px]">
          {/* Header */}
          <div className="bg-[#1e1435] text-white p-4 flex items-center justify-between border-b border-purple-900/40">
            <div className="flex items-center gap-2.5">
              <div className="p-2 bg-amber-500/20 rounded-xl border border-amber-500/30">
                <Bot className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <h3 className="text-xs font-black uppercase tracking-wider text-amber-400">
                  Souharda Bot
                </h3>
                <p className="text-[10px] text-slate-300">Directory & Services Assistant</p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)} 
              className="text-slate-300 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Feed */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-slate-50 text-xs">
            {/* Automatic Initial Greeting Message */}
            <div className="bg-white border border-slate-200/90 text-slate-800 p-3.5 rounded-2xl rounded-bl-xs shadow-2xs leading-relaxed max-w-[85%] mr-auto">
              {locale === 'kn'
                ? '🙏 ನಮಸ್ಕಾರ! ನಾನು ನಿಮಗೆ ಹೇಗೆ ಸಹಾಯ ಮಾಡಲಿ?'
                : '🙏 Namaste!, I am Sahaja sahakari, Welcome to KSSFCL'}
            </div>

            {/* User & Bot Conversation History */}
            {messages.map((m, i) => (
              <div
                key={i}
                className={`p-3 rounded-2xl max-w-[85%] leading-relaxed ${
                  m.sender === 'user'
                    ? 'bg-amber-500 text-slate-950 font-semibold ml-auto rounded-br-xs shadow-2xs'
                    : 'bg-white border border-slate-200/90 text-slate-800 mr-auto rounded-bl-xs shadow-2xs'
                }`}
              >
                {/* Parse relative link routes dynamically */}
                {m.text.split(/(\/[a-z0-9\/-]+)/gi).map((part, idx) => {
                  if (part.startsWith('/') && part.length > 1) {
                    return (
                      <a
                        key={idx}
                        href={part}
                        className="inline-flex items-center text-blue-600 underline font-bold hover:text-blue-800 mx-1"
                      >
                        {part}
                      </a>
                    );
                  }
                  return part;
                })}
              </div>
            ))}

            {loading && (
              <div className="bg-white border border-slate-200 text-slate-500 p-3 rounded-2xl w-24 mr-auto text-center italic text-[11px] animate-pulse">
                Thinking...
              </div>
            )}
          </div>

          {/* Input Footer */}
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
              className="p-2.5 bg-amber-500 hover:bg-amber-600 disabled:opacity-50 text-slate-950 rounded-xl font-bold transition-all cursor-pointer"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}