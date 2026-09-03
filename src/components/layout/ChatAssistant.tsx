'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { MessageSquare, X, Send } from 'lucide-react';

interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
}

export default function ChatAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      sender: 'bot',
      text: 'Namaste! 🙏 Welcome to KSSFCL. I am Sahakari, your virtual assistant. How can I assist you today with our Cooperative services?',
    },
  ]);

  const chatLogsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatLogsRef.current) {
      chatLogsRef.current.scrollTop = chatLogsRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: input,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          sender: 'bot',
          text: 'Thank you for reaching out. A representative or relevant document link will be provided shortly.',
        },
      ]);
    }, 1000);
  };

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          aria-label="Open Sahakari Assistant"
          className="fixed bottom-6 right-6 z-50 p-4 bg-[#526a74] hover:bg-[#3f535c] text-white rounded-full shadow-xl transition-all transform hover:scale-105 flex items-center justify-center"
        >
          <MessageSquare className="w-6 h-6" />
        </button>
      )}

      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden transition-all duration-200 h-[480px]">
          <div className="bg-[#526a74] text-white px-4 py-3 flex items-center justify-between shadow-sm">
            <div className="flex items-center gap-2.5">
              <div className="relative w-8 h-8 rounded-full overflow-hidden bg-white/20 flex items-center justify-center">
                <Image
                  src="/souharda/SouhardaLogo2.png"
                  alt="Souharda Logo"
                  fill
                  className="object-contain p-0.5"
                />
              </div>
              <span className="font-semibold text-sm">Sahakari Assistant</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close Chat"
              className="p-1 hover:bg-white/10 rounded-full transition-colors text-slate-200 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div
            ref={chatLogsRef}
            className="flex-1 p-4 overflow-y-auto space-y-3 bg-slate-50 text-sm"
          >
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${
                  msg.sender === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-3.5 py-2.5 text-xs sm:text-sm leading-relaxed shadow-sm ${
                    msg.sender === 'user'
                      ? 'bg-[#526a74] text-white rounded-br-none'
                      : 'bg-white border border-slate-200 text-slate-800 rounded-bl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          <form
            onSubmit={handleSend}
            className="p-3 bg-white border-t border-slate-200 flex items-center gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about circulars, exams, or acts..."
              className="flex-1 px-3 py-2 text-xs sm:text-sm bg-slate-100 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#526a74] focus:bg-white text-slate-800 placeholder-slate-400 transition-all"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              className="p-2 bg-[#526a74] hover:bg-[#3f535c] text-white rounded-xl disabled:opacity-40 transition-colors"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}