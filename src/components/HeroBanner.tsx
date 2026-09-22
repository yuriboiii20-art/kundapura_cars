import React from 'react';
import { 
  MapPin, 
  Sparkles,
  Zap
} from 'lucide-react';

export const HeroBanner: React.FC = () => {
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
        <div className="max-w-3xl">
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

      </div>
    </div>
  );
};
