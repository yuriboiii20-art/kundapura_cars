import React from 'react';
import { 
  X, 
  Home, 
  ChevronRight, 
  Phone, 
  BadgePercent, 
  Calculator, 
  ShieldCheck, 
  Award, 
  Crown, 
  MapPin 
} from 'lucide-react';
import { BodyType } from '@/types/car';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectCategory: (category: string) => void;
  onSelectBodyType: (bodyType: BodyType) => void;
  onOpenHubs: () => void;
  onOpenAssurance: () => void;
  onOpenEmiCalculator: () => void;
}

export const MobileDrawer: React.FC<MobileDrawerProps> = ({
  isOpen,
  onClose,
  onSelectCategory,
  onSelectBodyType,
  onOpenHubs,
  onOpenAssurance,
  onOpenEmiCalculator
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/65 backdrop-blur-xs flex justify-start animate-fade-in lg:hidden">
      
      {/* Backdrop Click */}
      <div className="absolute inset-0 cursor-pointer" onClick={onClose} />

      {/* Drawer Container (Slides in from the left) */}
      <div className="w-[82vw] max-w-[340px] bg-white h-full shadow-2xl flex flex-col z-10 animate-slide-right overflow-y-auto overscroll-contain">
        
        {/* Top Header Banner: Dark Plum + Mascot + Login/Signup */}
        <div className="bg-[#2E132B] text-white px-4 py-3.5 flex items-center justify-between shrink-0 shadow-md">
          <div className="flex items-center gap-3">
            {/* Mascot Smiley Cloud Icon */}
            <div className="w-9 h-9 rounded-2xl bg-[#E8D1E6] flex items-center justify-center text-[#2E132B] shadow-inner font-black">
              <svg className="w-5 h-5 text-[#4A154B]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM10 14c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm4 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-2 3c-1.1 0-2-.9-2-2h4c0 1.1-.9 2-2 2z"/>
              </svg>
            </div>
            <button 
              onClick={() => {
                alert('Kundapura Cars Account Portal: Log in to track bookings, saved cars, and test drive appointments.');
                onClose();
              }}
              className="flex items-center gap-1 font-bold text-sm text-white hover:text-[#ECC4A6] transition-colors"
            >
              <span>Login/Signup</span>
              <ChevronRight className="w-4 h-4 text-white/80" />
            </button>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-white/80 hover:text-white rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            title="Close Drawer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* 1. Home Link */}
        <div className="px-4 py-3 border-b border-gray-100 bg-[#FDF8F4]/60">
          <a
            href="#"
            onClick={onClose}
            className="flex items-center gap-2.5 text-xs font-bold text-[#2E271F] hover:text-[#D27848] transition-colors"
          >
            <div className="w-6 h-6 rounded-md bg-[#D27848] text-white flex items-center justify-center shadow-xs">
              <Home className="w-3.5 h-3.5" />
            </div>
            <span className="text-sm font-extrabold text-[#2E271F]">Home</span>
          </a>
        </div>

        {/* Scrollable Body Content */}
        <div className="flex-1 px-4 py-4 space-y-5 text-xs text-[#2E271F]">
          
          {/* BUY SECTION */}
          <div className="space-y-3">
            <div className="text-[10px] uppercase font-extrabold text-gray-400 tracking-wider">
              BUY
            </div>

            {/* By Category Subheader & 4 Grid Cards */}
            <div>
              <div className="text-xs font-bold text-[#2E271F] mb-2">
                By category
              </div>
              <div className="grid grid-cols-4 gap-1.5">
                {/* 1. MAX (Luxury) */}
                <button
                  onClick={() => {
                    onSelectCategory('Luxury');
                    onClose();
                  }}
                  className="p-2 rounded-xl bg-[#FFF0F3] border border-[#FFD6DF] hover:border-[#E53935] flex flex-col items-center justify-center text-center transition-all group shadow-2xs"
                >
                  <div className="w-6 h-6 rounded-lg bg-[#E53935] text-white flex items-center justify-center mb-1 text-[10px] font-black shadow-xs">
                    <Crown className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-[10px] font-black text-[#E53935] tracking-tight">MAX</span>
                  <span className="text-[8px] text-gray-500 font-medium leading-tight mt-0.5">Luxury cars</span>
                </button>

                {/* 2. Assured+ (Premium) */}
                <button
                  onClick={() => {
                    onSelectCategory('Premium');
                    onClose();
                  }}
                  className="p-2 rounded-xl bg-[#F5EEFA] border border-[#E4D5F7] hover:border-[#7C3AED] flex flex-col items-center justify-center text-center transition-all group shadow-2xs"
                >
                  <div className="w-6 h-6 rounded-lg bg-[#7C3AED] text-white flex items-center justify-center mb-1 text-[10px] font-black shadow-xs">
                    <Award className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-[10px] font-black text-[#7C3AED] tracking-tight leading-tight">Assured+</span>
                  <span className="text-[8px] text-gray-500 font-medium leading-tight mt-0.5">Premium</span>
                </button>

                {/* 3. Assured (Quality) */}
                <button
                  onClick={() => {
                    onSelectCategory('Assured');
                    onClose();
                  }}
                  className="p-2 rounded-xl bg-[#F8F1FD] border border-[#ECCEFB] hover:border-[#9333EA] flex flex-col items-center justify-center text-center transition-all group shadow-2xs"
                >
                  <div className="w-6 h-6 rounded-lg bg-[#9333EA] text-white flex items-center justify-center mb-1 text-[10px] font-black shadow-xs">
                    <ShieldCheck className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-[10px] font-black text-[#9333EA] tracking-tight leading-tight">Assured</span>
                  <span className="text-[8px] text-gray-500 font-medium leading-tight mt-0.5">Quality cars</span>
                </button>

                {/* 4. Budget (Value picks) */}
                <button
                  onClick={() => {
                    onSelectCategory('Budget');
                    onClose();
                  }}
                  className="p-2 rounded-xl bg-[#EEF5FF] border border-[#CFE2FE] hover:border-[#2563EB] flex flex-col items-center justify-center text-center transition-all group shadow-2xs"
                >
                  <div className="w-6 h-6 rounded-lg bg-[#2563EB] text-white flex items-center justify-center mb-1 text-[10px] font-black shadow-xs">
                    <BadgePercent className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-[10px] font-black text-[#2563EB] tracking-tight leading-tight">budget</span>
                  <span className="text-[8px] text-gray-500 font-medium leading-tight mt-0.5">Value picks</span>
                </button>
              </div>
            </div>

            {/* By Body Type Subheader & 4 Car Types */}
            <div>
              <div className="text-xs font-bold text-[#2E271F] mb-2">
                By body type
              </div>
              <div className="grid grid-cols-4 gap-1.5">
                {[
                  {
                    type: 'SUV' as BodyType,
                    label: 'SUV',
                    svg: (
                      <svg className="w-10 h-6 text-gray-700 mx-auto" viewBox="0 0 64 36" fill="currentColor">
                        <path d="M56 22H53.5C52.2 19.1 49.3 17 46 17C42.7 17 39.8 19.1 38.5 22H25.5C24.2 19.1 21.3 17 18 17C14.7 17 11.8 19.1 10.5 22H6C4.9 22 4 22.9 4 24V28C4 28.6 4.4 29 5 29H10.5C11.8 31.9 14.7 34 18 34C21.3 34 24.2 31.9 25.5 29H38.5C39.8 31.9 42.7 34 46 34C49.3 34 52.2 31.9 53.5 29H58C59.1 29 60 28.1 60 27V25C60 23.3 58.7 22 56 22ZM15 9H43C45 9 47 11 48 13L52 18H10L12 12C12.5 10.2 13.6 9 15 9Z" opacity="0.85"/>
                        <circle cx="18" cy="25" r="4" fill="#2E271F"/>
                        <circle cx="46" cy="25" r="4" fill="#2E271F"/>
                      </svg>
                    )
                  },
                  {
                    type: 'MUV' as BodyType,
                    label: 'MUV',
                    svg: (
                      <svg className="w-10 h-6 text-gray-700 mx-auto" viewBox="0 0 64 36" fill="currentColor">
                        <path d="M58 22H53.5C52.2 19.1 49.3 17 46 17C42.7 17 39.8 19.1 38.5 22H25.5C24.2 19.1 21.3 17 18 17C14.7 17 11.8 19.1 10.5 22H5C3.9 22 3 22.9 3 24V28C3 28.6 3.4 29 4 29H10.5C11.8 31.9 14.7 34 18 34C21.3 34 24.2 31.9 25.5 29H38.5C39.8 31.9 42.7 34 46 34C49.3 34 52.2 31.9 53.5 29H60C60.6 29 61 28.6 61 28V24C61 22.9 60.1 22 58 22ZM10 9H47C49 9 51 11 53 15L55 18H8L9 12C9.5 10.2 10.5 9 10 9Z" opacity="0.85"/>
                        <circle cx="18" cy="25" r="4" fill="#2E271F"/>
                        <circle cx="46" cy="25" r="4" fill="#2E271F"/>
                      </svg>
                    )
                  },
                  {
                    type: 'Hatchback' as BodyType,
                    label: 'Hatchback',
                    svg: (
                      <svg className="w-10 h-6 text-gray-700 mx-auto" viewBox="0 0 64 36" fill="currentColor">
                        <path d="M54 22H51.5C50.2 19.1 47.3 17 44 17C40.7 17 37.8 19.1 36.5 22H25.5C24.2 19.1 21.3 17 18 17C14.7 17 11.8 19.1 10.5 22H6C4.9 22 4 22.9 4 24V27C4 28.1 4.9 29 6 29H10.5C11.8 31.9 14.7 34 18 34C21.3 34 24.2 31.9 25.5 29H36.5C37.8 31.9 40.7 34 44 34C47.3 34 50.2 31.9 51.5 29H56C57.1 29 58 28.1 58 27V24C58 22.9 56 22 54 22ZM17 11H38C40 11 42 13 44 18H11L14 13C14.8 11.8 15.8 11 17 11Z" opacity="0.85"/>
                        <circle cx="18" cy="25" r="4" fill="#2E271F"/>
                        <circle cx="44" cy="25" r="4" fill="#2E271F"/>
                      </svg>
                    )
                  },
                  {
                    type: 'Sedan' as BodyType,
                    label: 'Sedan',
                    svg: (
                      <svg className="w-10 h-6 text-gray-700 mx-auto" viewBox="0 0 64 36" fill="currentColor">
                        <path d="M58 22H53.5C52.2 19.1 49.3 17 46 17C42.7 17 39.8 19.1 38.5 22H25.5C24.2 19.1 21.3 17 18 17C14.7 17 11.8 19.1 10.5 22H5C3.9 22 3 22.9 3 24V27C3 28.1 3.9 29 5 29H10.5C11.8 31.9 14.7 34 18 34C21.3 34 24.2 31.9 25.5 29H38.5C39.8 31.9 42.7 34 46 34C49.3 34 52.2 31.9 53.5 29H59C60.1 29 61 28.1 61 27V24C61 22.9 59.8 22 58 22ZM17 11H39C41 11 43 13 47 18H10L13 13C14 11.8 15.4 11 17 11Z" opacity="0.85"/>
                        <circle cx="18" cy="25" r="4" fill="#2E271F"/>
                        <circle cx="46" cy="25" r="4" fill="#2E271F"/>
                      </svg>
                    )
                  }
                ].map((item) => (
                  <button
                    key={item.type}
                    onClick={() => {
                      onSelectBodyType(item.type);
                      onClose();
                    }}
                    className="p-2 rounded-xl bg-[#F8F9FA] hover:bg-[#FDF3EA] border border-gray-100 hover:border-[#ECC4A6] flex flex-col items-center justify-center text-center transition-all group"
                  >
                    <div className="h-6 flex items-center justify-center mb-1 group-hover:scale-105 transition-transform">
                      {item.svg}
                    </div>
                    <span className="text-[10px] font-bold text-[#2E271F] mt-0.5">{item.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* View All Cars Button */}
            <a
              href="#car-catalog"
              onClick={onClose}
              className="w-full py-2.5 px-4 rounded-xl bg-[#F3F4F6] hover:bg-[#E5E7EB] text-[#2E271F] font-extrabold text-xs flex items-center justify-center gap-1 transition-colors"
            >
              <span>View all cars</span>
              <ChevronRight className="w-3.5 h-3.5 text-gray-500" />
            </a>
          </div>

          <hr className="border-gray-100" />


          {/* FINANCE & ASSURANCE SECTION */}
          <div className="space-y-1">
            <button
              onClick={() => {
                onOpenEmiCalculator();
                onClose();
              }}
              className="w-full flex items-center gap-2.5 py-1.5 px-1 text-xs font-bold text-[#2E271F] hover:text-[#D27848] transition-colors text-left"
            >
              <Calculator className="w-4 h-4 text-[#7C3AED]" />
              <span>Finance</span>
            </button>

            <button
              onClick={() => {
                onOpenAssurance();
                onClose();
              }}
              className="w-full flex items-center gap-2.5 py-1.5 px-1 text-xs font-bold text-[#2E271F] hover:text-[#D27848] transition-colors text-left"
            >
              <ShieldCheck className="w-4 h-4 text-[#7C3AED]" />
              <span>200-Point Inspection</span>
            </button>

            <button
              onClick={() => {
                onOpenHubs();
                onClose();
              }}
              className="w-full flex items-center gap-2.5 py-1.5 px-1 text-xs font-bold text-[#2E271F] hover:text-[#D27848] transition-colors text-left"
            >
              <MapPin className="w-4 h-4 text-[#7C3AED]" />
              <span>Kundapura Experience Hubs</span>
            </button>
          </div>

          {/* NEED HELP & CALL US CARD */}
          <div className="bg-[#FAF5FB] p-3 rounded-2xl border border-[#F0DCF7] space-y-2">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-full bg-[#6B21A8] text-white flex items-center justify-center shrink-0 shadow-2xs">
                <Phone className="w-3.5 h-3.5" />
              </div>
              <div>
                <div className="text-[10px] text-gray-500 font-medium leading-tight">Need help?</div>
                <a href="tel:7277277275" className="text-xs font-black text-[#6B21A8] hover:underline">
                  Call us at 727-727-7275
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
