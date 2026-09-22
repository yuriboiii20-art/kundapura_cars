import React from 'react';
import { 
  ShieldCheck, 
  RotateCcw, 
  Award, 
  MapPin, 
  Sparkles,
  Zap,
  CheckCircle2
} from 'lucide-react';
import { BodyType } from '../types/car';

interface HeroBannerProps {
  selectedBodyType?: BodyType;
  onSelectBodyType: (type: BodyType | undefined) => void;
  onSelectBudgetPreset: (min: number, max: number) => void;
  selectedBudgetLabel: string;
  totalCarsCount: number;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({
  selectedBodyType,
  onSelectBodyType,
  onSelectBudgetPreset,
  selectedBudgetLabel,
  totalCarsCount
}) => {
  const bodyTypes: { label: string; value: BodyType; icon: string }[] = [
    { label: 'SUVs', value: 'SUV', icon: '🚙' },
    { label: 'Sedans', value: 'Sedan', icon: '🚗' },
    { label: 'Hatchbacks', value: 'Hatchback', icon: '🚘' },
    { label: 'Electric (EV)', value: 'EV', icon: '⚡' },
    { label: 'Luxury', value: 'Luxury', icon: '✨' },
    { label: 'MUVs / 7-Str', value: 'MUV', icon: '🚐' }
  ];

  const budgetPresets = [
    { label: 'All Budgets', min: 0, max: 10000000 },
    { label: 'Under ₹7 Lakh', min: 0, max: 700000 },
    { label: '₹7L - ₹12 Lakh', min: 700000, max: 1200000 },
    { label: '₹12L - ₹18 Lakh', min: 1200000, max: 1800000 },
    { label: 'Above ₹18 Lakh', min: 1800000, max: 10000000 }
  ];

  return (
    <div className="relative bg-gradient-to-b from-brand-50/70 via-white to-[#f8fafc] border-b border-slate-200/80 pt-8 pb-10 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* Background soft ambient glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-200/30 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-10 w-72 h-72 bg-emerald-100/40 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        
        {/* Bangalore City & Assured pill */}
        <div className="flex flex-wrap items-center gap-2.5 mb-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-slate-800 text-xs font-bold border border-slate-200 shadow-sm">
            <MapPin className="w-3.5 h-3.5 text-brand-600" />
            <span>Bangalore Karnataka Hubs Only</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>Kundapura Assured • 200-Point Inspected</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 text-brand-800 text-xs font-bold border border-brand-200 hidden sm:inline-flex">
            <Zap className="w-3.5 h-3.5 text-brand-600" />
            <span>Free Doorstep Test Drive</span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="max-w-3xl mb-6">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
            Buy Certified Used Cars in{' '}
            <span className="bg-gradient-to-r from-brand-600 via-indigo-600 to-violet-700 bg-clip-text text-transparent">
              Bangalore
            </span>
          </h1>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            No middleman, no lemon cars. Every car is handpicked, 200-point engineer inspected, backed by a 
            <strong className="text-slate-900 font-semibold"> 1-Year Warranty</strong> &amp; <strong className="text-slate-900 font-semibold">5-Day 100% Money-Back Guarantee</strong> with free Bangalore RTO transfer.
          </p>
        </div>

        {/* 4 Trust Highlights Micro-Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-8">
          <div className="bg-white/90 backdrop-blur-sm p-3 sm:p-4 rounded-2xl border border-slate-200 shadow-xs flex items-center gap-3 hover:border-brand-300 transition-all">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-bold text-slate-900">200-Point Check</div>
              <div className="text-[11px] text-slate-500 font-medium">Engine, body &amp; electricals</div>
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-sm p-3 sm:p-4 rounded-2xl border border-slate-200 shadow-xs flex items-center gap-3 hover:border-brand-300 transition-all">
            <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-bold text-slate-900">1-Year Warranty</div>
              <div className="text-[11px] text-slate-500 font-medium">Comprehensive coverage</div>
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-sm p-3 sm:p-4 rounded-2xl border border-slate-200 shadow-xs flex items-center gap-3 hover:border-brand-300 transition-all">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
              <RotateCcw className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-bold text-slate-900">5-Day Return</div>
              <div className="text-[11px] text-slate-500 font-medium">100% money back</div>
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-sm p-3 sm:p-4 rounded-2xl border border-slate-200 shadow-xs flex items-center gap-3 hover:border-brand-300 transition-all">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-bold text-slate-900">Free RC Transfer</div>
              <div className="text-[11px] text-slate-500 font-medium">To any Bangalore RTO</div>
            </div>
          </div>
        </div>

        {/* 21st.dev Style Quick Selector Card */}
        <div className="bg-white rounded-2xl p-4 sm:p-6 border border-slate-200 shadow-card">
          
          {/* Top Bar: Body Types */}
          <div className="mb-5">
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2.5 flex items-center justify-between">
              <span>Filter By Body Style</span>
              {selectedBodyType && (
                <button 
                  onClick={() => onSelectBodyType(undefined)}
                  className="text-brand-600 hover:text-brand-700 normal-case font-semibold text-xs"
                >
                  Clear Selection
                </button>
              )}
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 sm:gap-2.5">
              {bodyTypes.map((t) => {
                const isActive = selectedBodyType === t.value;
                return (
                  <button
                    key={t.value}
                    onClick={() => onSelectBodyType(isActive ? undefined : t.value)}
                    className={`flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-2 py-2.5 px-3 rounded-xl text-xs font-bold transition-all border ${
                      isActive
                        ? 'bg-brand-600 text-white border-brand-600 shadow-md shadow-brand-500/25 scale-[1.02]'
                        : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <span className="text-base">{t.icon}</span>
                    <span>{t.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Bottom Bar: Budget Presets */}
          <div>
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2.5 flex items-center justify-between">
              <span>Filter By Budget</span>
              <span className="text-slate-400 font-normal text-xs">{totalCarsCount} Certified Cars Available</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {budgetPresets.map((b) => {
                const isActive = selectedBudgetLabel === b.label;
                return (
                  <button
                    key={b.label}
                    onClick={() => onSelectBudgetPreset(b.min, b.max)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all border ${
                      isActive
                        ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                        : 'bg-white hover:bg-slate-50 text-slate-700 border-slate-200'
                    }`}
                  >
                    {b.label}
                  </button>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
