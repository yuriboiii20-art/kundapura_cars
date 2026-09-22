import React from 'react';

export const HeroBanner: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-b from-[#FBF0E6] via-[#FDF8F4] to-[#FAF7F2] border-b border-[#ECC4A6]/60 pt-8 pb-10 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* Background soft peach & apricot ambient glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#F7DEC9]/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-10 w-72 h-72 bg-[#FBDAC8]/30 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">
        
        {/* Main Headline */}
        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#2E271F] tracking-tight leading-[1.15]">
            Buy Certified Used Cars in{' '}
            <span className="text-[#D27848] underline decoration-[#ECC4A6] decoration-4 underline-offset-8">
              Bangalore
            </span>
          </h1>
          <p className="mt-3 text-[#6D5D49] text-sm sm:text-base leading-relaxed">
            No middlemen, no lemon cars. Every car is handpicked, 200-point engineer inspected, backed by a 
            <strong className="text-[#2E271F] font-extrabold"> 1-Year Warranty</strong> &amp; <strong className="text-[#2E271F] font-extrabold">5-Day 100% Money-Back Guarantee</strong> with free Bangalore RTO transfer.
          </p>
        </div>

      </div>
    </div>
  );
};

