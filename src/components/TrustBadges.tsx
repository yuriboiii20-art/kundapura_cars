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
      iconBg: 'bg-emerald-50 text-emerald-600',
      title: '200-Point Inspection',
      description: 'Every car undergoes a forensic 200-point technical evaluation covering engine, transmission, body panels, and suspension. No accidental or flooded cars.',
      badge: 'Certified Pass'
    },
    {
      icon: Award,
      iconBg: 'bg-brand-50 text-brand-600',
      title: '1-Year Comprehensive Warranty',
      description: 'Zero stress ownership. Complete warranty coverage on engine and gearbox with roadside assistance (RSA) anywhere in Karnataka.',
      badge: '12 Months / 15,000 km'
    },
    {
      icon: RotateCcw,
      iconBg: 'bg-amber-50 text-amber-600',
      title: '5-Day 100% Money-Back Guarantee',
      description: 'Test drive in real life. If you are not 100% in love with your car within 5 days or 300 km, return it for a full refund with zero questions asked.',
      badge: '100% Refund'
    },
    {
      icon: FileCheck2,
      iconBg: 'bg-indigo-50 text-indigo-600',
      title: 'Hassle-Free Karnataka RTO Transfer',
      description: 'Our in-house RTO team handles full ownership transfer across all Bangalore RTOs (KA-01, KA-03, KA-04, KA-05, KA-51) at zero extra fee.',
      badge: 'Free Bangalore RC'
    }
  ];

  return (
    <section id="kundapura-assured" className="py-14 sm:py-18 bg-gradient-to-b from-white to-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>The Kundapura Cars Assurance</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
            Why Bangalore Trusts Kundapura Cars
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
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
                className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs hover:shadow-hover hover:border-brand-300 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-2xl ${pillar.iconBg} flex items-center justify-center shadow-xs`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                      {pillar.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-extrabold text-slate-900 mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs font-bold text-emerald-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Verified Guarantee</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Fixed Price & Transparent Banner */}
        <div className="mt-8 bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1.5 text-center md:text-left">
            <div className="inline-flex items-center gap-1 text-xs font-bold text-amber-300 uppercase tracking-wider">
              <Banknote className="w-4 h-4" />
              Fixed Transparent Pricing • Zero Hidden Fees
            </div>
            <h3 className="text-xl sm:text-2xl font-black">
              The price you see is the final price you pay.
            </h3>
            <p className="text-xs text-slate-300 max-w-xl">
              No last minute handling charges, no dealer markups, no commission fees. Includes full mechanical service, deep interior detailing, and Karnataka RTO transfer.
            </p>
          </div>

          <a
            href="#car-catalog"
            className="px-6 py-3.5 bg-brand-600 hover:bg-brand-500 text-white font-extrabold text-xs rounded-2xl shadow-lg shadow-brand-500/30 transition-all shrink-0"
          >
            Explore Bangalore Inventory
          </a>
        </div>

      </div>
    </section>
  );
};
