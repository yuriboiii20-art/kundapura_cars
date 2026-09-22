import { ShieldCheck, Award, RotateCcw, FileCheck2 } from 'lucide-react';

export const HeroBanner: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-b from-[#FBF0E6] via-[#FDF8F4] to-[#FAF7F2] border-b border-[#ECC4A6]/60 pt-6 pb-8 sm:pt-8 sm:pb-10 px-3 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* Background soft peach & apricot ambient glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#F7DEC9]/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-10 w-72 h-72 bg-[#FBDAC8]/30 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        
        {/* Main Headline */}
        <div className="max-w-3xl">
          <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-black text-[#2E271F] tracking-tight leading-[1.2]">
            Buy Certified Used Cars in{' '}
            <span className="text-[#D27848] underline decoration-[#ECC4A6] decoration-4 underline-offset-4 sm:underline-offset-8">
              Bangalore
            </span>
          </h1>
          <p className="mt-2.5 text-[#6D5D49] text-xs sm:text-base leading-relaxed">
            No middlemen, no lemon cars. Every car is handpicked, 200-point engineer inspected, backed by a 
            <strong className="text-[#2E271F] font-extrabold"> 1-Year Warranty</strong> &amp; <strong className="text-[#2E271F] font-extrabold"> 5-Day 100% Money-Back Guarantee</strong> with free Bangalore RTO transfer.
          </p>

          {/* Quick Assurance Badges for Mobile & Desktop */}
          <div className="mt-4 flex flex-wrap items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs">
            <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-white/90 text-[#74351B] font-bold rounded-full border border-[#ECC4A6] shadow-2xs">
              <ShieldCheck className="w-3 h-3 text-[#D27848]" />
              <span>200-Pt Inspection</span>
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-white/90 text-[#74351B] font-bold rounded-full border border-[#ECC4A6] shadow-2xs">
              <Award className="w-3 h-3 text-[#D27848]" />
              <span>1-Yr Warranty</span>
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-white/90 text-[#74351B] font-bold rounded-full border border-[#ECC4A6] shadow-2xs">
              <RotateCcw className="w-3 h-3 text-[#D27848]" />
              <span>5-Day Refund</span>
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-white/90 text-[#74351B] font-bold rounded-full border border-[#ECC4A6] shadow-2xs">
              <FileCheck2 className="w-3 h-3 text-[#D27848]" />
              <span>Free BLR RTO</span>
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};

