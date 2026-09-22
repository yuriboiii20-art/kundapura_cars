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
      iconBg: 'bg-[#FBF0E6] text-[#D27848]',
      title: '200-Point Inspection',
      description: 'Every car undergoes a forensic 200-point technical evaluation covering engine, transmission, body panels, and suspension. No accidental or flooded cars.',
      badge: 'Certified Pass'
    },
    {
      icon: Award,
      iconBg: 'bg-[#FBF0E6] text-[#D27848]',
      title: '1-Year Comprehensive Warranty',
      description: 'Zero stress ownership. Complete warranty coverage on engine and gearbox with roadside assistance (RSA) anywhere in Karnataka.',
      badge: '12 Months / 15,000 km'
    },
    {
      icon: RotateCcw,
      iconBg: 'bg-[#FBF0E6] text-[#D27848]',
      title: '5-Day 100% Money-Back Guarantee',
      description: 'Test drive in real life. If you are not 100% in love with your car within 5 days or 300 km, return it for a full refund with zero questions asked.',
      badge: '100% Refund'
    },
    {
      icon: FileCheck2,
      iconBg: 'bg-[#FBF0E6] text-[#D27848]',
      title: 'Hassle-Free Karnataka RTO Transfer',
      description: 'Our in-house RTO team handles full ownership transfer across all Bangalore RTOs (KA-01, KA-03, KA-04, KA-05, KA-51) at zero extra fee.',
      badge: 'Free Bangalore RC'
    }
  ];

  return (
    <section id="kundapura-assured" className="py-14 sm:py-18 bg-gradient-to-b from-[#FAF7F2] to-[#FDF8F4] border-b border-[#ECC4A6]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FDF3EA] text-[#74351B] text-xs font-bold border border-[#ECC4A6] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#D27848]" />
            <span>The Kundapura Cars Assurance</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#2E271F] tracking-tight">
            Why Bangalore Trusts Kundapura Cars
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[#8B785F] leading-relaxed">
            Inspired by the highest global certification standards. We eliminated all the guesswork, unfair dealer commissions, and lemon cars.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-white p-6 rounded-3xl border border-[#ECC4A6]/70 shadow-subtle hover:shadow-hover hover:border-[#D27848] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-2xl ${pillar.iconBg} flex items-center justify-center shadow-2xs border border-[#ECC4A6]/60`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#FDF3EA] text-[#74351B] border border-[#ECC4A6]">
                      {pillar.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-extrabold text-[#2E271F] mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-[#8B785F] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-[#ECC4A6]/40 flex items-center gap-1.5 text-xs font-bold text-[#D27848]">
                  <CheckCircle2 className="w-4 h-4 text-[#D27848]" />
                  <span>Verified Guarantee</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Fixed Price & Transparent Banner (Warm Dark Espresso with Warm Apricot Button) */}
        <div className="mt-8 bg-[#241A15] text-[#FDF8F4] rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-[#451E10]">
          <div className="space-y-1.5 text-center md:text-left">
            <div className="inline-flex items-center gap-1 text-xs font-bold text-[#ECC4A6] uppercase tracking-wider">
              <Banknote className="w-4 h-4 text-[#D27848]" />
              Fixed Transparent Pricing • Zero Hidden Fees
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-[#FDF8F4]">
              The price you see is the final price you pay.
            </h3>
            <p className="text-xs text-[#DFCFBA] max-w-xl">
              No last minute handling charges, no dealer markups, no commission fees. Includes full mechanical service, deep interior detailing, and Karnataka RTO transfer.
            </p>
          </div>

          <a
            href="#car-catalog"
            className="px-6 py-3.5 bg-[#D27848] hover:bg-[#B95C2E] text-white font-black text-xs rounded-2xl shadow-lg transition-all shrink-0"
          >
            Explore Bangalore Inventory
          </a>
        </div>

      </div>
    </section>
  );
};
