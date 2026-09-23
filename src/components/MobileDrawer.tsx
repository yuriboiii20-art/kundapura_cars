import React from 'react';
import { 
  X, 
  ChevronRight
} from 'lucide-react';
import { BodyType } from '@/types/car';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectCategory?: (category: string) => void;
  onSelectBodyType: (bodyType: BodyType) => void;
  onOpenHubs: () => void;
  onOpenAssurance: () => void;
  onOpenEmiCalculator: () => void;
}

export const MobileDrawer: React.FC<MobileDrawerProps> = ({
  isOpen,
  onClose,
  onSelectBodyType,
  onOpenHubs,
  onOpenAssurance,
  onOpenEmiCalculator
}) => {
  if (!isOpen) return null;

  const categories = [
    {
      type: 'SUV' as BodyType,
      label: 'SUV',
      count: '5 Available',
      svg: (
        <svg className="w-12 h-7 mx-auto text-[#2E271F] group-hover:text-[#D27848] transition-colors" viewBox="0 0 100 52" fill="none">
          {/* Main SUV Body Matching User Image */}
          <path
            d="M 6.5 16.5 
               C 6.5 16.5, 7.8 15.8, 9.8 15.8 
               L 51.5 16.2 
               C 54.8 16.2, 57.5 17.8, 60.2 19.8 
               L 71.8 24.6 
               C 76.5 25.8, 83.5 26.6, 91.8 27.6 
               C 95.8 28.2, 97.8 30.0, 97.8 33.0 
               C 97.8 36.2, 96.2 38.0, 93.8 39.0 
               L 91.5 39.2
               C 91.5 34.2, 87.8 30.2, 83.2 30.2
               C 78.6 30.2, 74.9 34.2, 74.9 39.2
               L 31.8 39.2
               C 31.8 34.2, 28.1 30.2, 23.5 30.2
               C 18.9 30.2, 15.2 34.2, 15.2 39.2
               L 4.5 38.6
               C 2.2 37.8, 1.2 36.0, 1.2 33.8
               C 1.2 30.8, 2.5 27.8, 4.5 23.8
               L 6.8 18.6
               C 6.0 18.2, 5.6 17.4, 6.5 16.5 Z"
            fill="currentColor"
          />

          {/* Window 1 (Rear Quarter Glass) */}
          <path
            d="M 12.2 17.8 
               L 26.8 17.8 
               L 26.8 24.6 
               L 9.2 24.6 
               C 9.6 23.0, 10.8 20.0, 12.2 17.8 Z"
            fill="#FFFFFF"
          />

          {/* Window 2 (Middle Door Window) */}
          <path
            d="M 29.8 17.8 
               L 48.2 17.8 
               L 48.2 24.6 
               L 29.8 24.6 Z"
            fill="#FFFFFF"
          />

          {/* Window 3 (Front Windshield / Driver Window) */}
          <path
            d="M 51.2 17.8 
               L 69.8 24.6 
               L 51.2 24.6 Z"
            fill="#FFFFFF"
          />

          {/* Rear Wheel Fender White Gap */}
          <path
            d="M 14.5 39.2 C 14.5 33.8, 18.5 29.4, 23.5 29.4 C 28.5 29.4, 32.5 33.8, 32.5 39.2"
            stroke="#FFFFFF"
            strokeWidth="1.8"
            fill="none"
          />

          {/* Front Wheel Fender White Gap */}
          <path
            d="M 74.2 39.2 C 74.2 33.8, 78.2 29.4, 83.2 29.4 C 88.2 29.4, 92.2 33.8, 92.2 39.2"
            stroke="#FFFFFF"
            strokeWidth="1.8"
            fill="none"
          />

          {/* Rear Wheel Tire & Rim */}
          <circle cx="23.5" cy="39.2" r="7.5" fill="currentColor" />
          <circle cx="23.5" cy="39.2" r="4.2" fill="#FFFFFF" />

          {/* Front Wheel Tire & Rim */}
          <circle cx="83.2" cy="39.2" r="7.5" fill="currentColor" />
          <circle cx="83.2" cy="39.2" r="4.2" fill="#FFFFFF" />
        </svg>
      )
    },
    {
      type: 'Sedan' as BodyType,
      label: 'Sedan',
      count: '5 Available',
      svg: (
        <svg className="w-12 h-7 mx-auto text-[#2E271F] group-hover:text-[#D27848] transition-colors" viewBox="0 0 100 52" fill="none">
          {/* Main Sedan Body Matching User Image */}
          <path
            d="M 5.5 22.5 
               C 5.5 22.5, 12.0 20.5, 17.5 19.5 
               L 27.5 16.5 
               C 33.5 14.5, 48.5 14.5, 59.5 16.8 
               L 70.5 21.8 
               C 76.5 23.5, 84.5 25.2, 91.5 26.8 
               C 94.5 27.5, 96.5 29.5, 96.5 33.0 
               C 96.5 36.5, 94.5 38.5, 91.5 39.0 
               L 83.5 39.2
               C 83.5 34.2, 79.5 30.2, 75.0 30.2
               C 70.5 30.2, 66.5 34.2, 66.5 39.2
               L 35.5 39.2
               C 35.5 34.2, 31.5 30.2, 27.0 30.2
               C 22.5 30.2, 18.5 34.2, 18.5 39.2
               L 5.5 38.8
               C 5.5 38.8, 5.5 27.5, 5.5 22.5 Z"
            fill="currentColor"
          />

          {/* Front Headlight (White Circle) */}
          <circle cx="89.5" cy="27.5" r="2.4" fill="#FFFFFF" />

          {/* Window 1 (Rear Window with rounded rear corner) */}
          <path
            d="M 23.5 22.0 
               C 25.5 18.5, 30.0 16.8, 38.5 16.8 
               L 38.5 24.5 
               L 23.5 24.5 Z"
            fill="#FFFFFF"
          />

          {/* Window 2 (Front Window with sloping windshield) */}
          <path
            d="M 42.0 16.8 
               L 51.5 16.8 
               C 55.5 17.5, 61.5 21.0, 65.5 24.5 
               L 42.0 24.5 Z"
            fill="#FFFFFF"
          />

          {/* Rear Wheel Fender White Gap */}
          <path
            d="M 18.2 39.2 C 18.2 33.8, 22.2 29.4, 27.0 29.4 C 31.8 29.4, 35.8 33.8, 35.8 39.2"
            stroke="#FFFFFF"
            strokeWidth="1.8"
            fill="none"
          />

          {/* Front Wheel Fender White Gap */}
          <path
            d="M 66.2 39.2 C 66.2 33.8, 70.2 29.4, 75.0 29.4 C 79.8 29.4, 83.8 33.8, 83.8 39.2"
            stroke="#FFFFFF"
            strokeWidth="1.8"
            fill="none"
          />

          {/* Rear Wheel Tire & Rim */}
          <circle cx="27.0" cy="39.2" r="7.5" fill="currentColor" />
          <circle cx="27.0" cy="39.2" r="4.2" fill="#FFFFFF" />

          {/* Front Wheel Tire & Rim */}
          <circle cx="75.0" cy="39.2" r="7.5" fill="currentColor" />
          <circle cx="75.0" cy="39.2" r="4.2" fill="#FFFFFF" />
        </svg>
      )
    },
    {
      type: 'Hatchback' as BodyType,
      label: 'Hatchback',
      count: '5 Available',
      svg: (
        <svg className="w-12 h-7 mx-auto text-[#2E271F] group-hover:text-[#D27848] transition-colors" viewBox="0 0 100 52" fill="none">
          {/* Main Hatchback Body Matching User Image */}
          <path
            d="M 2.0 34.0 
               L 4.5 30.0 
               L 4.5 24.5 
               C 5.5 22.0, 9.0 18.5, 15.5 16.5 
               L 43.0 15.5 
               C 52.0 17.5, 68.0 21.0, 78.5 23.5 
               L 95.0 27.0 
               C 97.5 28.5, 98.5 31.0, 98.0 34.0 
               L 94.0 36.5 
               L 92.5 36.5
               C 92.5 31.5, 88.5 27.5, 83.5 27.5
               C 78.5 27.5, 74.5 31.5, 74.5 36.5
               L 26.5 36.5
               C 26.5 31.5, 22.5 27.5, 17.5 27.5
               C 12.5 27.5, 8.5 31.5, 8.5 36.5
               L 2.0 36.5 Z"
            fill="currentColor"
          />

          {/* Window 1 (Rear Quarter Window) */}
          <path
            d="M 14.5 19.0 
               L 20.5 18.0 
               L 22.0 22.2 
               L 11.5 22.2 Z"
            fill="#FFFFFF"
          />

          {/* Window 2 (Middle Passenger Window) */}
          <path
            d="M 23.5 17.8 
               L 41.5 16.8 
               L 43.0 22.2 
               L 23.5 22.2 Z"
            fill="#FFFFFF"
          />

          {/* Window 3 (Front Driver Window / Windshield) */}
          <path
            d="M 44.5 16.8 
               L 72.5 22.2 
               L 45.0 22.2 Z"
            fill="#FFFFFF"
          />

          {/* Door Handle 1 (Rear Door) */}
          <rect x="23.0" y="24.2" width="5.2" height="1.8" rx="0.4" fill="#FFFFFF" />

          {/* Door Handle 2 (Front Door) */}
          <rect x="46.5" y="25.5" width="5.2" height="1.8" rx="0.4" fill="#FFFFFF" />

          {/* Rear Wheel Fender White Gap */}
          <path
            d="M 8.5 36.5 C 8.5 31.2, 12.5 27.0, 17.5 27.0 C 22.5 27.0, 26.5 31.2, 26.5 36.5"
            stroke="#FFFFFF"
            strokeWidth="1.8"
            fill="none"
          />

          {/* Front Wheel Fender White Gap */}
          <path
            d="M 74.5 36.5 C 74.5 31.2, 78.5 27.0, 83.5 27.0 C 88.5 27.0, 92.5 31.2, 92.5 36.5"
            stroke="#FFFFFF"
            strokeWidth="1.8"
            fill="none"
          />

          {/* Rear Wheel Tire & Rim */}
          <circle cx="17.5" cy="36.5" r="7.5" fill="currentColor" />
          <circle cx="17.5" cy="36.5" r="4.2" fill="#FFFFFF" />

          {/* Front Wheel Tire & Rim */}
          <circle cx="83.5" cy="36.5" r="7.5" fill="currentColor" />
          <circle cx="83.5" cy="36.5" r="4.2" fill="#FFFFFF" />
        </svg>
      )
    },
    {
      type: 'MUV' as BodyType,
      label: 'MUV',
      count: '5 Available',
      svg: (
        <svg className="w-12 h-7 mx-auto text-[#2E271F] group-hover:text-[#D27848] transition-colors" viewBox="0 0 100 52" fill="none">
          {/* Main MUV Body Matching User Image */}
          <path
            d="M 5.5 35.0 
               L 5.5 24.0 
               C 6.0 21.0, 9.5 17.5, 15.0 16.0 
               L 48.0 15.5 
               C 55.0 16.0, 63.0 19.5, 68.5 22.5 
               C 73.5 24.5, 82.5 25.5, 89.5 26.5 
               C 92.5 27.5, 94.0 29.5, 94.0 32.5 
               C 94.0 35.5, 92.5 37.5, 89.0 38.5 
               L 85.0 38.8
               C 85.0 33.8, 81.0 29.8, 76.5 29.8
               C 72.0 29.8, 68.0 33.8, 68.0 38.8
               L 30.5 38.8
               C 30.5 33.8, 26.5 29.8, 22.0 29.8
               C 17.5 29.8, 13.5 33.8, 13.5 38.8
               L 5.5 38.2 Z"
            fill="currentColor"
          />

          {/* Fuel Cap (White Circle) */}
          <circle cx="12.5" cy="24.5" r="2.2" fill="#FFFFFF" />

          {/* Side Marker / Mirror Square Cutout */}
          <rect x="63.5" y="23.2" width="3.8" height="3.8" rx="0.5" fill="#FFFFFF" />

          {/* Rear Wheel Fender White Gap */}
          <path
            d="M 13.5 38.8 C 13.5 33.4, 17.5 29.0, 22.0 29.0 C 26.5 29.0, 30.5 33.4, 30.5 38.8"
            stroke="#FFFFFF"
            strokeWidth="1.8"
            fill="none"
          />

          {/* Front Wheel Fender White Gap */}
          <path
            d="M 68.0 38.8 C 68.0 33.4, 72.0 29.0, 76.5 29.0 C 81.0 29.0, 85.0 33.4, 85.0 38.8"
            stroke="#FFFFFF"
            strokeWidth="1.8"
            fill="none"
          />

          {/* Rear Wheel Tire & Rim */}
          <circle cx="22.0" cy="38.8" r="7.5" fill="currentColor" />
          <circle cx="22.0" cy="38.8" r="4.2" fill="#FFFFFF" />

          {/* Front Wheel Tire & Rim */}
          <circle cx="76.5" cy="38.8" r="7.5" fill="currentColor" />
          <circle cx="76.5" cy="38.8" r="4.2" fill="#FFFFFF" />
        </svg>
      )
    },
    {
      type: 'EV' as BodyType,
      label: 'EV',
      count: '5 Available',
      svg: (
        <svg className="w-12 h-7 mx-auto text-[#2E271F] group-hover:text-[#D27848] transition-colors" viewBox="0 0 100 88" fill="none">
          {/* Cable Loop & Two-Prong Charging Plug on Top */}
          <path
            d="M 28 27.5 
               L 28 19.5 
               C 28 15.0, 31.5 11.5, 36.5 11.5 
               L 54.0 11.5"
            stroke="currentColor"
            strokeWidth="6"
            strokeLinecap="round"
            fill="none"
          />
          {/* Plug Round Body */}
          <path
            d="M 50.0 11.5 
               C 50.0 1.5, 72.0 1.5, 72.0 11.5 
               C 72.0 21.5, 50.0 21.5, 50.0 11.5 Z"
            fill="currentColor"
          />
          {/* Plug Base Collar */}
          <rect x="68" y="3.5" width="4.5" height="16" fill="currentColor" />
          {/* Top Prong */}
          <rect x="74" y="4.5" width="7.0" height="4.5" rx="0.5" fill="currentColor" />
          {/* Bottom Prong */}
          <rect x="74" y="14" width="7.0" height="4.5" rx="0.5" fill="currentColor" />

          {/* Main EV Car Body */}
          <path
            d="M 6.0 65.0 
               L 6.0 42.0 
               C 6.0 34.0, 12.0 30.5, 20.0 30.5 
               L 55.0 30.5 
               C 62.0 30.5, 71.0 38.0, 77.0 44.5 
               C 81.0 48.0, 87.0 50.0, 94.0 52.0 
               C 96.5 53.0, 97.0 56.0, 97.0 62.0 
               L 97.0 73.0 
               L 92.5 73.0
               C 92.5 63.5, 87.5 58.5, 79.5 58.5
               C 71.5 58.5, 66.5 63.5, 66.5 73.0
               L 39.5 73.0
               C 39.5 63.5, 34.5 58.5, 26.5 58.5
               C 18.5 58.5, 13.5 63.5, 13.5 73.0
               L 6.0 73.0 Z"
            fill="currentColor"
          />

          {/* Lightning Bolt Cutout */}
          <path
            d="M 52.0 40.5 
               L 39.5 55.5 
               L 49.0 55.5 
               L 49.0 66.5 
               L 61.5 51.5 
               L 52.0 51.5 Z"
            fill="#FFFFFF"
          />

          {/* Rear Solid Wheel */}
          <circle cx="26.5" cy="73.0" r="9.5" fill="currentColor" />

          {/* Front Solid Wheel */}
          <circle cx="79.5" cy="73.0" r="9.5" fill="currentColor" />
        </svg>
      )
    }
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/65 backdrop-blur-xs flex justify-start animate-fade-in lg:hidden">
      
      {/* Backdrop Click */}
      <div className="absolute inset-0 cursor-pointer" onClick={onClose} />

      {/* Drawer Container (Slides in from the left) */}
      <div className="w-[85vw] max-w-[340px] bg-white h-full shadow-2xl flex flex-col z-10 animate-slide-right overflow-y-auto overscroll-contain">
        
        {/* Top Header Banner: Dark Plum + Mascot + Login/Signup */}
        <div className="bg-[#2E132B] text-white px-4 py-3.5 flex items-center justify-between shrink-0 shadow-md">
          <div className="flex items-center gap-3">
            {/* Flaticon Style User Account Avatar */}
            <div className="w-9 h-9 rounded-2xl bg-[#E8D1E6] flex items-center justify-center text-[#2E132B] shadow-inner font-black">
              <svg className="w-5 h-5 text-[#4A154B]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
              </svg>
            </div>
            <button 
              onClick={() => {
                alert('Kundapura Cars Account Portal: Log in to track bookings, liked cars, and customer support.');
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

        {/* 1. Flaticon Home Link (Solid Black Logo on Pure White Background) */}
        <div className="px-4 py-3.5 border-b border-gray-100 bg-white">
          <a
            href="#"
            onClick={onClose}
            className="flex items-center gap-3 text-xs font-bold text-black hover:opacity-80 transition-opacity group"
          >
            {/* Flaticon Solid House Logo Matching User Image */}
            <div className="w-5 h-5 flex items-center justify-center shrink-0">
              <svg 
                className="w-5 h-5 text-black" 
                viewBox="0 0 512 512" 
                fill="currentColor"
              >
                <path d="M 264.4 20.8 C 259.6 16.4 252.4 16.4 247.6 20.8 L 19.6 231.2 C 10.4 239.6 8.8 253.6 16.0 264.0 C 23.2 274.4 37.6 276.8 48.0 269.2 L 64.0 257.6 V 436.0 C 64.0 466.8 89.2 492.0 120.0 492.0 H 202.0 V 324.0 H 310.0 V 492.0 H 392.0 C 422.8 492.0 448.0 466.8 448.0 436.0 V 257.6 L 464.0 269.2 C 474.4 276.8 488.8 274.4 496.0 264.0 C 503.2 253.6 501.6 239.6 492.4 231.2 L 264.4 20.8 Z" />
              </svg>
            </div>
            <span className="text-sm font-black text-black">Home</span>
          </a>
        </div>

        {/* Scrollable Body Content */}
        <div className="flex-1 px-4 py-4 space-y-5 text-xs text-[#2E271F]">
          
          {/* BUY SECTION */}
          <div className="space-y-3">
            <div className="text-[10px] uppercase font-extrabold text-gray-400 tracking-wider">
              BUY
            </div>

            {/* BY CATEGORY SECTION (Same exact size for all category cards) */}
            <div>
              <div className="text-xs font-black text-[#2E271F] mb-2.5 flex items-center justify-between">
                <span>By category</span>
                <span className="text-[10px] font-medium text-gray-400">5 cars / category</span>
              </div>
              
              <div className="grid grid-cols-3 gap-2">
                {categories.map((item) => (
                  <button
                    key={item.type}
                    onClick={() => {
                      onSelectBodyType(item.type);
                      onClose();
                    }}
                    className="p-2.5 rounded-xl bg-[#F8F9FA] hover:bg-[#FDF3EA] border border-gray-100 hover:border-[#ECC4A6] flex flex-col items-center justify-center text-center transition-all group shadow-2xs active:scale-95"
                  >
                    <div className="h-7 flex items-center justify-center mb-1 group-hover:scale-110 transition-transform">
                      {item.svg}
                    </div>
                    <span className="text-[11px] font-black text-[#2E271F] mt-0.5 leading-tight">{item.label}</span>
                    <span className="text-[8px] text-gray-400 font-semibold mt-0.5">{item.count}</span>
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

          {/* FINANCE & ASSURANCE SECTION (With Flaticon-style SVG Icons) */}
          <div className="space-y-1.5">
            {/* 1. Finance */}
            <button
              onClick={() => {
                onOpenEmiCalculator();
                onClose();
              }}
              className="w-full flex items-center gap-3 py-2 px-2 text-xs font-bold text-[#2E271F] hover:text-[#D27848] hover:bg-[#FDF8F4] rounded-xl transition-all text-left group"
            >
              <div className="w-7 h-7 rounded-lg bg-[#FAF5FF] border border-[#E9D5FF] text-[#7C3AED] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-2xs">
                {/* Flaticon Style Calculator / Finance SVG */}
                <svg className="w-4 h-4 text-[#7C3AED]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-6 3h5v2h-5V6zm-6 0h4v2H7V6zm0 4h4v2H7v-2zm0 4h4v2H7v-2zm8 4h-2v-4h2v4zm4 0h-2v-4h2v4zm0-6h-5v-2h5v2z"/>
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-[#2E271F] group-hover:text-[#D27848] transition-colors">Finance &amp; EMI Calculator</span>
                <span className="text-[10px] text-gray-400 font-medium leading-tight">Instant loan approvals from 8.5%</span>
              </div>
            </button>

            {/* 2. 200-Point Inspection */}
            <button
              onClick={() => {
                onOpenAssurance();
                onClose();
              }}
              className="w-full flex items-center gap-3 py-2 px-2 text-xs font-bold text-[#2E271F] hover:text-[#D27848] hover:bg-[#FDF8F4] rounded-xl transition-all text-left group"
            >
              <div className="w-7 h-7 rounded-lg bg-[#FAF5FF] border border-[#E9D5FF] text-[#7C3AED] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-2xs">
                {/* Flaticon Style Inspection Shield SVG */}
                <svg className="w-4 h-4 text-[#7C3AED]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/>
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-[#2E271F] group-hover:text-[#D27848] transition-colors">200-Point Inspection</span>
                <span className="text-[10px] text-gray-400 font-medium leading-tight">Strict engineer certified evaluation</span>
              </div>
            </button>

            {/* 3. Kundapura Experience Hubs */}
            <button
              onClick={() => {
                onOpenHubs();
                onClose();
              }}
              className="w-full flex items-center gap-3 py-2 px-2 text-xs font-bold text-[#2E271F] hover:text-[#D27848] hover:bg-[#FDF8F4] rounded-xl transition-all text-left group"
            >
              <div className="w-7 h-7 rounded-lg bg-[#FAF5FF] border border-[#E9D5FF] text-[#7C3AED] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-2xs">
                {/* Flaticon Style Map Location SVG */}
                <svg className="w-4 h-4 text-[#7C3AED]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-[#2E271F] group-hover:text-[#D27848] transition-colors">Kundapura Experience Hubs</span>
                <span className="text-[10px] text-gray-400 font-medium leading-tight">5 Physical yards in Kundapura &amp; Udupi</span>
              </div>
            </button>
          </div>

          {/* NEED HELP & CALL US CARD */}
          <div className="bg-[#FAF5FB] p-3 rounded-2xl border border-[#F0DCF7] space-y-2">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#6B21A8] text-white flex items-center justify-center shrink-0 shadow-2xs">
                {/* Flaticon Style Support Phone SVG */}
                <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.44-5.15-3.75-6.59-6.59l1.97-1.57c.27-.27.36-.66.24-1.01-.36-1.11-.56-2.3-.56-3.53 0-.55-.45-1-1-1H4.39c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-4.62c0-.55-.45-1-1-1z"/>
                </svg>
              </div>
              <div>
                <div className="text-[10px] text-gray-500 font-medium leading-tight">Direct Support &amp; Bookings</div>
                <a href="tel:+918254233440" className="text-xs font-black text-[#6B21A8] hover:underline">
                  Call +91 8254 233 440
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
