import React from 'react';

interface MiniMovingCarProps {
  className?: string;
}

export const MiniMovingCar: React.FC<MiniMovingCarProps> = ({ className = '' }) => {
  return (
    <div
      className={`absolute top-1.5 sm:top-2 left-0 right-0 w-full h-8 pointer-events-none z-30 overflow-hidden select-none ${className}`}
      aria-hidden="true"
    >
      {/* Subtle Top Road / Margin Guideline */}
      <div className="absolute bottom-1 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />

      {/* Moving Assembly (Banner + Tow Cable + Car) that cruises across the screen */}
      <div className="absolute bottom-0.5 left-0 animate-car-drive will-change-transform flex items-center">
        
        {/* 1. Trailing Fluttering Banner */}
        <div className="animate-banner-flutter flex items-center origin-right mr-0.5">
          <div className="flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-gradient-to-r from-[#B95C2E] via-[#D27848] to-[#E88958] text-white text-[9px] font-black tracking-wider uppercase shadow-[0_2px_8px_rgba(210,120,72,0.65)] border border-white/60 whitespace-nowrap">
            <span className="text-[10px]">🔑</span>
            <span className="text-white drop-shadow-xs">GET YOUR KEYS TODAY!!</span>
          </div>
        </div>

        {/* 2. Tow Cable / Rope connecting Banner to Car */}
        <svg width="16" height="12" viewBox="0 0 16 12" fill="none" className="shrink-0 -mr-0.5">
          <path
            d="M 0 6 Q 8 8 16 6.5"
            stroke="#ECC4A6"
            strokeWidth="1.2"
            strokeDasharray="2.5 1.5"
          />
        </svg>

        {/* 3. The Mini White Car */}
        <div className="animate-car-bounce flex items-center shrink-0">
          <svg
            width="46"
            height="20"
            viewBox="0 0 46 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="drop-shadow-[0_3px_8px_rgba(0,0,0,0.85)]"
          >
            <defs>
              {/* Pearl White Body Gradient */}
              <linearGradient id="miniCarWhite" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="65%" stopColor="#F8FAFC" />
                <stop offset="100%" stopColor="#E2E8F0" />
              </linearGradient>

              {/* Tinted Glass Gradient */}
              <linearGradient id="miniCarGlass" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#334155" />
                <stop offset="100%" stopColor="#0F172A" />
              </linearGradient>

              {/* Headlight Beam Glow */}
              <linearGradient id="headlightBeam" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FFFBEB" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#FEF3C7" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#FEF3C7" stopOpacity="0" />
              </linearGradient>
            </defs>

            {/* --- Headlight Light Beam (Forward Projection) --- */}
            <polygon points="43,10 58,7 58,16 43,13" fill="url(#headlightBeam)" />

            {/* --- Underbody Shadow --- */}
            <ellipse cx="23" cy="18.5" rx="18" ry="1.2" fill="rgba(0,0,0,0.45)" />

            {/* --- Main Car Body (Modern Sleek Compact Profile) --- */}
            {/* Hood & Windshield Roofline */}
            <path
              d="
                M 4 14
                L 7 14
                C 8 14 9.5 12 11.5 12
                C 13.5 12 15 14 16 14
                L 30 14
                C 31 14 32.5 12 34.5 12
                C 36.5 12 38 14 39 14
                L 42.5 14
                C 43.8 14 44.5 13 44 11.5
                L 42 7.5
                C 41.5 6.8 40.5 6.5 39 6.5
                L 31 6.5
                L 24 2.8
                C 23.2 2.3 22 2 20 2
                L 11 2
                C 9 2 7.5 3 6.5 5
                L 2.5 8.5
                C 1.5 9.5 1 10.5 1 12
                C 1 13.5 2.5 14 4 14
                Z
              "
              fill="url(#miniCarWhite)"
              stroke="#334155"
              strokeWidth="0.75"
            />

            {/* --- Dark Tinted Glass Area --- */}
            {/* Front Windshield + Side Windows */}
            <path
              d="
                M 12 3.5
                L 20 3.5
                C 21.2 3.5 22 3.8 22.8 4.3
                L 29 8
                L 13 8
                L 8 8
                C 9 5.5 10.2 3.5 12 3.5
                Z
              "
              fill="url(#miniCarGlass)"
            />
            {/* Window Pillar divider */}
            <line x1="20" y1="3.5" x2="20" y2="8" stroke="#FFFFFF" strokeWidth="0.75" />

            {/* Window Glint Highlight */}
            <path
              d="M 14 4.2 L 18 4.2 L 16 7.2 L 12 7.2 Z"
              fill="#FFFFFF"
              fillOpacity="0.35"
            />

            {/* --- Headlight (Glowing White LED) --- */}
            <circle cx="43" cy="11.5" r="1.2" fill="#FEF08A" />

            {/* --- Taillight (Red LED) --- */}
            <rect x="1" y="9.5" width="1.8" height="2.8" rx="0.8" fill="#EF4444" />

            {/* --- Door Seam & Handle Accent --- */}
            <line x1="20.5" y1="8" x2="20.5" y2="13.5" stroke="#94A3B8" strokeWidth="0.4" />
            <rect x="15" y="9" width="2.2" height="0.6" rx="0.3" fill="#64748B" />
            <rect x="23" y="9" width="2.2" height="0.6" rx="0.3" fill="#64748B" />

            {/* ==================================================== */}
            {/* WHEELS WITH ROTATION ANIMATION */}
            {/* ==================================================== */}
            {/* Front Wheel Assembly */}
            <g transform="translate(35.5, 14)">
              <g className="animate-wheel-spin">
                {/* Rubber Tyre */}
                <circle cx="0" cy="0" r="3.8" fill="#1E293B" stroke="#0F172A" strokeWidth="0.6" />
                {/* Alloy Wheel Rim */}
                <circle cx="0" cy="0" r="2.3" fill="#E2E8F0" />
                {/* Spokes */}
                <line x1="-2" y1="0" x2="2" y2="0" stroke="#64748B" strokeWidth="0.5" />
                <line x1="0" y1="-2" x2="0" y2="2" stroke="#64748B" strokeWidth="0.5" />
                {/* Center Hubcap */}
                <circle cx="0" cy="0" r="0.8" fill="#D27848" />
              </g>
            </g>

            {/* Rear Wheel Assembly */}
            <g transform="translate(12.5, 14)">
              <g className="animate-wheel-spin">
                {/* Rubber Tyre */}
                <circle cx="0" cy="0" r="3.8" fill="#1E293B" stroke="#0F172A" strokeWidth="0.6" />
                {/* Alloy Wheel Rim */}
                <circle cx="0" cy="0" r="2.3" fill="#E2E8F0" />
                {/* Spokes */}
                <line x1="-2" y1="0" x2="2" y2="0" stroke="#64748B" strokeWidth="0.5" />
                <line x1="0" y1="-2" x2="0" y2="2" stroke="#64748B" strokeWidth="0.5" />
                {/* Center Hubcap */}
                <circle cx="0" cy="0" r="0.8" fill="#D27848" />
              </g>
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};
