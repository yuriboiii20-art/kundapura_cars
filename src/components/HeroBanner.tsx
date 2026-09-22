import React, { useState, useEffect } from 'react';
import { ShieldCheck, Award, RotateCcw, FileCheck2, Car as CarIcon } from 'lucide-react';

interface HeroBannerProps {
  onBuyCarClick?: () => void;
}

const SLIDES = [
  {
    id: 1,
    title: 'Absolute Trust & Simplicity',
    subtitle: 'Experience the hassle-free way of buying & selling used cars from the comfort of your home.',
    buttonText: 'Buy car',
  },
  {
    id: 2,
    title: '200-Point Quality Inspection',
    subtitle: 'Every vehicle undergoes strict mechanical, electrical, and structural evaluation with 1-Year Warranty.',
    buttonText: 'Explore Certified Cars',
  },
  {
    id: 3,
    title: '5-Day 100% Money-Back Guarantee',
    subtitle: 'Test your car in real life. If you do not love it within 5 days, get a full refund.',
    buttonText: 'Browse Kundapura Inventory',
  },
];

export const HeroBanner: React.FC<HeroBannerProps> = ({ onBuyCarClick }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  // Auto rotate slides every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleScrollToCatalog = () => {
    if (onBuyCarClick) {
      onBuyCarClick();
    } else {
      const catalog = document.getElementById('car-catalog');
      if (catalog) {
        catalog.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      {/* 1. MOBILE HERO VIEW (Matches Screenshot 1 Exactly) */}
      <div className="md:hidden relative w-full h-[72vh] min-h-[500px] max-h-[620px] overflow-hidden bg-black flex flex-col justify-end">
        
        {/* Background Intro Image / Cinematic Video Simulation with slow pan & zoom */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/mobile-hero-bg.jpg"
            alt="Kundapura Cars Intro"
            className="w-full h-full object-cover object-center scale-105 animate-pulse-slow transform transition-transform duration-1000 ease-out"
          />
          
          {/* Subtle Ambient Video Overlay (Soft warm sun rays & atmosphere) */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-radial-at-t from-transparent via-transparent to-black/30" />
        </div>

        {/* Content Overlay pinned to bottom */}
        <div className="relative z-10 p-5 text-center flex flex-col items-center">
          
          {/* Slide Title */}
          <h2 className="text-xl xs:text-2xl font-black text-white tracking-tight leading-tight mb-2 drop-shadow-md">
            {SLIDES[activeSlide].title}
          </h2>

          {/* Subtitle */}
          <p className="text-xs xs:text-sm text-gray-200 leading-relaxed max-w-sm mb-4 font-normal drop-shadow">
            {SLIDES[activeSlide].subtitle}
          </p>

          {/* Carousel Indicator Dots (Pill for active, circles for inactive) */}
          <div className="flex items-center justify-center gap-1.5 mb-5">
            {SLIDES.map((slide, idx) => (
              <button
                key={slide.id}
                onClick={() => setActiveSlide(idx)}
                className={`transition-all duration-300 rounded-full ${
                  idx === activeSlide
                    ? 'w-6 h-1.5 bg-white'
                    : 'w-1.5 h-1.5 bg-white/50 hover:bg-white/80'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Full-width "Buy car" Red CTA Button */}
          <button
            onClick={handleScrollToCatalog}
            className="w-full py-3.5 px-6 rounded-xl bg-[#E12B47] hover:bg-[#C91F3A] active:scale-[0.98] text-white font-black text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#E12B47]/30 transition-all cursor-pointer"
          >
            <CarIcon className="w-4 h-4 text-white" />
            <span>{SLIDES[activeSlide].buttonText}</span>
          </button>

        </div>

      </div>

      {/* 2. DESKTOP HERO VIEW (Preserved for Tablets & Desktops) */}
      <div className="hidden md:block relative bg-gradient-to-b from-[#FBF0E6] via-[#FDF8F4] to-[#FAF7F2] border-b border-[#ECC4A6]/60 pt-8 pb-10 px-6 lg:px-8 overflow-hidden">
        
        {/* Ambient peach glows */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#F7DEC9]/40 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute bottom-0 left-10 w-72 h-72 bg-[#FBDAC8]/30 rounded-full blur-2xl pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-3xl lg:text-5xl font-black text-[#2E271F] tracking-tight leading-[1.2]">
              Buy Certified Used Cars in{' '}
              <span className="text-[#D27848] underline decoration-[#ECC4A6] decoration-4 underline-offset-8">
                Kundapura
              </span>
            </h1>
            <p className="mt-3 text-[#6D5D49] text-sm sm:text-base leading-relaxed">
              No middlemen, no lemon cars. Every car is handpicked, 200-point engineer inspected, backed by a 
              <strong className="text-[#2E271F] font-extrabold"> 1-Year Warranty</strong> &amp; <strong className="text-[#2E271F] font-extrabold"> 5-Day 100% Money-Back Guarantee</strong> with free Kundapura &amp; Karnataka RTO transfer.
            </p>

            {/* Quick Assurance Badges */}
            <div className="mt-5 flex flex-wrap items-center gap-2 text-xs">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/90 text-[#74351B] font-bold rounded-full border border-[#ECC4A6] shadow-2xs">
                <ShieldCheck className="w-3.5 h-3.5 text-[#D27848]" />
                <span>200-Pt Inspection Standard</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/90 text-[#74351B] font-bold rounded-full border border-[#ECC4A6] shadow-2xs">
                <Award className="w-3.5 h-3.5 text-[#D27848]" />
                <span>1-Year Comprehensive Warranty</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/90 text-[#74351B] font-bold rounded-full border border-[#ECC4A6] shadow-2xs">
                <RotateCcw className="w-3.5 h-3.5 text-[#D27848]" />
                <span>5-Day Full Refund Policy</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/90 text-[#74351B] font-bold rounded-full border border-[#ECC4A6] shadow-2xs">
                <FileCheck2 className="w-3.5 h-3.5 text-[#D27848]" />
                <span>Free Karnataka RTO Transfer</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
