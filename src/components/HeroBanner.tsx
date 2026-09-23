import React, { useState, useEffect, useRef } from 'react';
import { ShieldCheck, Award, RotateCcw, FileCheck2 } from 'lucide-react';

interface HeroBannerProps {
  onBuyCarClick?: () => void;
}

const CAR_SLIDES = [
  {
    id: 1,
    image: '/images/c1.png',
    badge: 'KA-35 Registered • Verified',
    title: 'Absolute Trust & Simplicity',
    subtitle: 'Experience the hassle-free way of buying & selling used cars from the comfort of your home.',
  },
  {
    id: 2,
    image: '/images/c2.png',
    badge: 'KA-05 Verified • 1st Owner',
    title: '200-Point Quality Inspection',
    subtitle: 'Every vehicle undergoes strict mechanical, electrical, and structural evaluation with 1-Year Warranty.',
  },
  {
    id: 3,
    image: '/images/c3.png',
    badge: '100% Verified History',
    title: '5-Day Money-Back Guarantee',
    subtitle: 'Test your car in real life. If you do not love it within 5 days, get a full refund.',
  },
  {
    id: 4,
    image: '/images/c4.png',
    badge: '1-Year Comprehensive Warranty',
    title: 'Engine & Gearbox Protection',
    subtitle: 'Drive with total peace of mind with 24x7 roadside assistance across Karnataka.',
  },
  {
    id: 5,
    image: '/images/c5.png',
    badge: 'Zero Hidden Charges',
    title: 'Fixed & Transparent Pricing',
    subtitle: 'Direct pricing with free RC transfer and complete paperwork handled at our Kundapura hubs.',
  },
  {
    id: 6,
    image: '/images/c6.png',
    badge: 'Free Vehicle Delivery',
    title: 'Doorstep Vehicle Delivery',
    subtitle: 'We deliver your certified car right to your home or office anywhere across Kundapura & Udupi.',
  },
  {
    id: 7,
    image: '/images/c7.png',
    badge: 'Instant Loan Approvals',
    title: 'Easy EMI Financing from 8.5%',
    subtitle: 'Flexible tenures up to 7 years with instant approvals and minimal documentation.',
  },
  {
    id: 8,
    image: '/images/c8.png',
    badge: 'Non-Accidental Certified',
    title: 'Non-Flooded & Clean History',
    subtitle: 'Every chassis, frame, and panel rigorously tested by certified automobile engineers.',
  },
  {
    id: 9,
    image: '/images/c9.png',
    badge: '5 Physical Yards in Kundapura',
    title: 'Kundapura Experience Hubs',
    subtitle: 'Visit our NH 66, Koteshwara, and Beach Road locations for same-day delivery.',
  },
  {
    id: 10,
    image: '/images/c10.png',
    badge: 'Best Price Guaranteed',
    title: 'Top Value for Your Trade-In',
    subtitle: 'Sell or exchange your old car in 30 minutes with instant bank transfer.',
  },
];

export const HeroBanner: React.FC<HeroBannerProps> = ({ onBuyCarClick }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const touchStartX = useRef<number | null>(null);

  // Preload all 10 slider images for instant, flicker-free transitions
  useEffect(() => {
    CAR_SLIDES.forEach((slide) => {
      const img = new Image();
      img.src = slide.image;
    });
  }, []);

  // Auto rotate slides every 2 seconds (2000ms)
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % CAR_SLIDES.length);
    }, 2000);
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

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        // Swiped left -> next slide
        setActiveSlide((prev) => (prev + 1) % CAR_SLIDES.length);
      } else {
        // Swiped right -> prev slide
        setActiveSlide((prev) => (prev - 1 + CAR_SLIDES.length) % CAR_SLIDES.length);
      }
    }
    touchStartX.current = null;
  };

  return (
    <>
      {/* 1. MOBILE HERO VIEW (Covers 100% of the screen height below navbar) */}
      <div 
        className="md:hidden relative w-full h-[calc(100dvh-96px)] min-h-[calc(100vh-96px)] overflow-hidden bg-[#0A0A0A] flex flex-col justify-end select-none"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        
        {/* Background Images Slider (Zoomed out so the entire car is seen clearly with side mirrors) */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {CAR_SLIDES.map((slide, idx) => {
            const isActive = idx === activeSlide;
            return (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                  isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                }`}
              >
                {/* Ambient Blurred Background to Fill Edge-to-Edge */}
                <img
                  src={slide.image}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 w-full h-full object-cover filter blur-2xl opacity-35 scale-110 pointer-events-none"
                />

                {/* Main Car Photo: Cleanly Zoomed Out with 100% Full Car Visibility */}
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="relative w-full h-full object-contain object-[center_32%] filter brightness-[0.96] contrast-[1.06] saturate-[1.12] transition-transform duration-700"
                  loading={idx === 0 ? 'eager' : 'lazy'}
                />

                {/* Bottom Gradient for High-Contrast Typography & Button Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 via-30% to-transparent pointer-events-none" />
              </div>
            );
          })}
        </div>

        {/* Bottom Content Overlay (Pulled up with generous bottom spacing away from screen edge) */}
        <div className="relative z-20 px-5 pb-14 sm:pb-16 pt-2 text-center flex flex-col items-center mb-2">
          
          {/* Slide Title */}
          <h2 className="text-xl xs:text-2xl font-black text-white tracking-tight leading-tight mb-1.5 drop-shadow-md">
            {CAR_SLIDES[activeSlide].title}
          </h2>

          {/* Subtitle */}
          <p className="text-xs xs:text-sm text-gray-200 leading-snug max-w-xs mb-3.5 font-normal drop-shadow">
            {CAR_SLIDES[activeSlide].subtitle}
          </p>

          {/* Capsule & Dot Slider Indicators (Peachy Active Pill + Inactive Dots) */}
          <div className="flex items-center justify-center gap-1.5 mb-4">
            {CAR_SLIDES.map((slide, idx) => (
              <button
                key={slide.id}
                onClick={() => setActiveSlide(idx)}
                className={`transition-all duration-300 rounded-full ${
                  idx === activeSlide
                    ? 'w-6 h-1.5 bg-[#D27848] shadow-xs shadow-[#D27848]/60'
                    : 'w-1.5 h-1.5 bg-white/45 hover:bg-white/75'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Full-width Peachy CTA Button (Fixed text, no leading icon) */}
          <button
            onClick={handleScrollToCatalog}
            className="w-full py-3.5 px-6 rounded-xl bg-[#D27848] hover:bg-[#B95C2E] active:scale-[0.98] text-white font-black text-sm sm:text-base flex items-center justify-center shadow-lg shadow-[#D27848]/35 transition-all cursor-pointer"
          >
            <span>Explore Available Cars</span>
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
