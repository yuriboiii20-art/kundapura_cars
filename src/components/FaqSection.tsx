import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQ_ITEMS } from '../data/carsData';

export const FaqSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="py-12 sm:py-16 bg-[#FAF7F2] border-b border-[#ECC4A6]/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FDF3EA] text-[#74351B] text-xs font-bold border border-[#ECC4A6] mb-2">
            <HelpCircle className="w-3.5 h-3.5 text-[#D27848]" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#2E271F] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-[#8B785F]">
            Everything you need to know about buying a certified car in Kundapura
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {FAQ_ITEMS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-[#ECC4A6]/70 overflow-hidden transition-all shadow-subtle hover:border-[#D27848]"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-[#2E271F] text-sm hover:text-[#D27848] transition-colors"
                >
                  <span className={isOpen ? 'text-[#D27848]' : ''}>{faq.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#AA957A] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#D27848]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-5 pb-5 text-xs text-[#6D5D49] leading-relaxed border-t border-[#ECC4A6]/40 pt-3 animate-slide-up bg-[#FDF8F4]/50">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

