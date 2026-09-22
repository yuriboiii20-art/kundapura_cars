import React from 'react';
import { 
  ShieldCheck, 
  Award, 
  RotateCcw, 
  CheckCircle2, 
  FileCheck2, 
  Sparkles, 
  Banknote
} from 'lucide-react';

export const TrustBadges: React.FC = () => {
  const pillars = [
    {
      icon: ShieldCheck,
      title: '200-Point Inspection',
      description: 'Forensic 200-point evaluation of engine, gearbox, panels & suspension. Zero accidental or flooded cars.',
      badge: 'Certified Pass'
    },
    {
      icon: Award,
      title: '1-Year Warranty',
      description: 'Zero stress ownership with full engine & gearbox coverage plus Karnataka roadside assistance.',
      badge: '12 Mo / 15,000 km'
    },
    {
      icon: RotateCcw,
      title: '5-Day Money-Back',
      description: 'Test drive in real life. Return within 5 days or 300 km for a 100% full refund with zero questions asked.',
      badge: '100% Refund'
    },
    {
      icon: FileCheck2,
      title: 'Free RTO Transfer',
      description: 'In-house RTO ownership transfer across all Bangalore RTOs (KA-01 to KA-51) at zero extra fee.',
      badge: 'Free RC Transfer'
    }
  ];

  return (
    <section id="kundapura-assured" className="py-6 sm:py-8 bg-gradient-to-b from-[#FAF7F2] to-[#FDF8F4] border-b border-[#ECC4A6]/60">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-4 sm:mb-5">
          <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#FDF3EA] text-[#74351B] text-[10px] sm:text-[11px] font-bold border border-[#ECC4A6] mb-1">
            <Sparkles className="w-3 h-3 text-[#D27848]" />
            <span>The Kundapura Assurance</span>
          </div>
          <h2 className="text-base sm:text-xl lg:text-2xl font-black text-[#2E271F] tracking-tight">
            Why Bangalore Trusts Kundapura Cars
          </h2>
          <p className="mt-0.5 text-[10px] sm:text-xs text-[#8B785F]">
            Highest certification standards • 100% Verified Quality • Zero Guesswork
          </p>
        </div>

        {/* 4 Pillars Grid (Compact 2x2 on mobile, 4-col on desktop) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3.5">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-white p-2.5 sm:p-3.5 rounded-2xl border border-[#ECC4A6]/70 shadow-2xs hover:shadow-subtle hover:border-[#D27848] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-1 mb-1.5 sm:mb-2">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-[#FBF0E6] text-[#D27848] flex items-center justify-center border border-[#ECC4A6]/60 shrink-0">
                      <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                    <span className="text-[8px] sm:text-[9px] font-black uppercase tracking-tight px-1.5 py-0.5 rounded-full bg-[#FDF3EA] text-[#74351B] border border-[#ECC4A6] truncate max-w-[95px] sm:max-w-none">
                      {pillar.badge}
                    </span>
                  </div>

                  <h3 className="text-xs sm:text-sm font-extrabold text-[#2E271F] leading-tight mb-1 truncate">
                    {pillar.title}
                  </h3>
                  <p className="text-[10px] sm:text-xs text-[#8B785F] leading-tight line-clamp-2">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-2 pt-1.5 border-t border-[#ECC4A6]/30 flex items-center gap-1 text-[9px] sm:text-[10px] font-bold text-[#D27848]">
                  <CheckCircle2 className="w-3 h-3 text-[#D27848] shrink-0" />
                  <span>Verified Guarantee</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Fixed Price & Transparent Compact Banner */}
        <div className="mt-3 sm:mt-4 bg-[#241A15] text-[#FDF8F4] rounded-2xl p-3 sm:p-3.5 flex flex-col sm:flex-row items-center justify-between gap-2.5 sm:gap-4 shadow-md border border-[#451E10]">
          <div className="flex items-center gap-2.5 min-w-0 text-center sm:text-left">
            <div className="w-8 h-8 rounded-xl bg-[#382318] text-[#D27848] hidden sm:flex items-center justify-center shrink-0 border border-[#451E10]">
              <Banknote className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[9px] sm:text-[10px] font-bold text-[#ECC4A6] uppercase tracking-wider flex items-center justify-center sm:justify-start gap-1">
                <Banknote className="w-3 h-3 text-[#D27848] sm:hidden" />
                <span>Fixed Transparent Pricing</span>
              </div>
              <p className="text-xs font-bold text-[#FDF8F4] mt-0.5">
                The price you see is the final price. No hidden fees, markups, or commissions.
              </p>
            </div>
          </div>

          <a
            href="#car-catalog"
            className="px-3.5 py-1.5 bg-[#D27848] hover:bg-[#B95C2E] text-white font-extrabold text-[11px] rounded-xl shadow-xs transition-all shrink-0 w-full sm:w-auto text-center"
          >
            Explore Inventory
          </a>
        </div>

      </div>
    </section>
  );
};

