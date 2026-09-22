import React, { useState } from 'react';
import { 
  MapPin, 
  Heart, 
  Phone, 
  Search, 
  Layers, 
  X,
  ChevronDown,
  Menu
} from 'lucide-react';
import { Car } from '@/types/car';

interface NavbarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  wishlistCount: number;
  compareList: Car[];
  onOpenWishlist: () => void;
  onOpenCompare: () => void;
  onOpenHubs: () => void;
  onOpenAssurance?: () => void;
  onOpenMobileFilters: () => void;
  activeFilterCount: number;
  onOpenDrawer: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  searchQuery,
  onSearchChange,
  wishlistCount,
  compareList,
  onOpenWishlist,
  onOpenCompare,
  onOpenHubs,
  onOpenDrawer
}) => {
  const [cityTooltipOpen, setCityTooltipOpen] = useState(false);
  const [buyDropdownOpen, setBuyDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-[#FDF8F4]/98 backdrop-blur-md border-b border-[#ECC4A6]/60 shadow-xs transition-all">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* ROW 1: Header Brand & Actions */}
        <div className="flex items-center justify-between h-14 sm:h-20 gap-2 sm:gap-6">
          
          {/* Left: Hamburger (Mobile) + Brand Name & Kundapura Selector */}
          <div className="flex items-center gap-2 sm:gap-4 shrink-0">
            
            {/* Mobile Hamburger Menu Icon (≡) */}
            <button
              onClick={onOpenDrawer}
              className="md:hidden p-1.5 -ml-1 text-[#2E271F] hover:text-[#D27848] rounded-lg transition-colors focus:outline-none"
              title="Open Navigation Menu"
              aria-label="Open Navigation Menu"
            >
              <Menu className="w-6 h-6 text-[#2E271F]" />
            </button>

            {/* Brand Logo */}
            <a href="#" className="flex items-center group">
              <span className="text-base sm:text-2xl font-black tracking-tight text-[#2E271F] group-hover:opacity-85 transition-opacity">
                KUNDAPURA<span className="text-[#D27848] font-extrabold ml-0.5">CARS</span>
              </span>
            </a>

            {/* Kundapura City Pill (Desktop) */}
            <div className="relative hidden md:block">
              <button
                onClick={() => setCityTooltipOpen(!cityTooltipOpen)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FBF0E6] hover:bg-[#F7DEC9] text-[#74351B] text-xs font-bold border border-[#ECC4A6] shadow-2xs transition-all"
                title="Service location: Kundapura"
              >
                <MapPin className="w-3.5 h-3.5 text-[#D27848] shrink-0" />
                <span>Kundapura</span>
                <ChevronDown className="w-3.5 h-3.5 text-[#964521]" />
              </button>

              {cityTooltipOpen && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-[#241A15] text-[#FDF8F4] rounded-2xl shadow-2xl border border-[#451E10] p-4 z-50 text-xs animate-slide-up">
                  <div className="font-bold text-[#FDF8F4] mb-1 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#D27848]"></span>
                    <span>Kundapura Exclusive Marketplace</span>
                  </div>
                  <p className="text-[#DFCFBA] text-[11px] leading-relaxed mb-3">
                    Every car is physically available at our Kundapura Hubs with free home test drives.
                  </p>
                  <div className="bg-[#17100D] p-2.5 rounded-xl text-[11px] font-semibold text-[#F7DEC9] space-y-1 border border-[#451E10]">
                    <div>📍 Kundapura NH 66 Hub</div>
                    <div>📍 Koteshwara Highway Yard</div>
                    <div>📍 Kundapura Beach Road Hub</div>
                    <div>📍 Udupi Expressway Hub</div>
                    <div>📍 Byndoor Coastal Hub</div>
                  </div>
                </div>
              )}
            </div>

          </div>

          {/* Center: Search Bar (Desktop) */}
          <div className="flex-1 max-w-xl hidden md:block">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#AA957A]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Search by transmission, model, brand (e.g. Automatic, Creta, EV)..."
                className="w-full pl-11 pr-10 py-2.5 bg-[#FBF0E6]/80 hover:bg-[#FBF0E6] focus:bg-white text-xs sm:text-sm text-[#2E271F] placeholder:text-[#AA957A] rounded-full border border-[#ECC4A6] focus:border-[#D27848] focus:ring-4 focus:ring-[#D27848]/15 transition-all outline-none"
              />
              {searchQuery && (
                <button
                  onClick={() => onSearchChange('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 text-[#AA957A] hover:text-[#74351B] rounded-full"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Right: Nav items */}
          <div className="flex items-center gap-2 sm:gap-5">
            
            {/* BUY CARS Dropdown (Desktop) */}
            <div className="relative hidden lg:block">
              <button
                onClick={() => setBuyDropdownOpen(!buyDropdownOpen)}
                className="flex items-center gap-1 text-xs sm:text-sm font-bold text-[#2E271F] hover:text-[#D27848] transition-colors py-2"
              >
                <span>Buy car</span>
                <ChevronDown className={`w-3.5 h-3.5 text-[#964521] transition-transform ${buyDropdownOpen ? 'rotate-180 text-[#D27848]' : ''}`} />
              </button>

              {buyDropdownOpen && (
                <div className="absolute top-full right-0 mt-1 w-52 bg-[#FDF8F4] rounded-2xl shadow-xl border border-[#ECC4A6] p-2 z-50 text-xs animate-slide-up">
                  <a
                    href="#car-catalog"
                    onClick={() => setBuyDropdownOpen(false)}
                    className="block px-3 py-2 rounded-xl text-[#2E271F] font-bold hover:bg-[#D27848] hover:text-white transition-colors"
                  >
                    View All Certified Cars
                  </a>
                  <button
                    onClick={() => {
                      onOpenHubs();
                      setBuyDropdownOpen(false);
                    }}
                    className="w-full text-left px-3 py-2 rounded-xl text-[#2E271F] font-bold hover:bg-[#D27848] hover:text-white transition-colors"
                  >
                    Visit Kundapura Hubs
                  </button>
                </div>
              )}
            </div>

            {/* Compare Counter */}
            {compareList.length > 0 && (
              <button
                onClick={onOpenCompare}
                className="relative hidden sm:flex items-center gap-1.5 px-3.5 py-1.5 bg-[#D27848] hover:bg-[#B95C2E] text-white rounded-full border border-[#B95C2E] text-xs font-bold transition-all shadow-subtle"
              >
                <Layers className="w-3.5 h-3.5 text-white" />
                <span>Compare</span>
                <span className="w-4 h-4 rounded-full bg-white text-[#D27848] text-[9px] font-black flex items-center justify-center">
                  {compareList.length}
                </span>
              </button>
            )}

            {/* HEART / SHORTLISTED (Mobile & Desktop) */}
            <button
              onClick={onOpenWishlist}
              className="flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#2E271F] hover:text-[#D27848] transition-colors p-1.5 sm:p-0 relative group"
              title="Shortlisted Cars"
            >
              <div className="relative flex items-center justify-center">
                <Heart className={`w-5 h-5 transition-colors ${wishlistCount > 0 ? 'fill-[#D27848] text-[#D27848]' : 'text-[#74351B] group-hover:text-[#D27848]'}`} />
                {wishlistCount > 0 && (
                  <span className="absolute -top-1.5 -right-2 w-4 h-4 bg-[#E12B47] text-white text-[9px] font-black rounded-full flex items-center justify-center ring-2 ring-[#FDF8F4]">
                    {wishlistCount}
                  </span>
                )}
              </div>
              <span className="hidden sm:inline font-bold text-[#2E271F] group-hover:text-[#D27848]">
                Shortlisted
              </span>
            </button>

            {/* CALL US (Desktop) */}
            <a
              href="tel:+918254233440"
              className="hidden md:flex flex-col text-right leading-tight hover:opacity-85 transition-opacity pl-2 border-l border-[#ECC4A6]/60"
            >
              <span className="text-[10px] font-semibold text-[#8B785F] flex items-center justify-end gap-1">
                <Phone className="w-2.5 h-2.5 text-[#D27848]" />
                Call us at
              </span>
              <span className="text-xs sm:text-sm font-black text-[#2E271F] tracking-tight">
                +91 8254 233 440
              </span>
            </a>

          </div>

        </div>

        {/* ROW 2: Mobile Location Dropdown + Search Row */}
        <div className="pb-2.5 pt-0.5 md:hidden flex items-center gap-2">
          
          {/* Kundapura Dropdown Pill */}
          <div className="relative shrink-0">
            <button
              onClick={() => setCityTooltipOpen(!cityTooltipOpen)}
              className="flex items-center gap-1 px-3 py-2 rounded-xl bg-white hover:bg-[#FBF0E6] text-[#2E271F] text-xs font-black border border-gray-200 shadow-2xs transition-all"
            >
              <span>Kundapura</span>
              <ChevronDown className="w-3.5 h-3.5 text-gray-500" />
            </button>

            {cityTooltipOpen && (
              <div className="absolute top-full left-0 mt-1.5 w-64 bg-[#241A15] text-[#FDF8F4] rounded-2xl shadow-2xl border border-[#451E10] p-3 z-50 text-xs animate-slide-up">
                <div className="font-bold text-[#FDF8F4] mb-1">Kundapura Hubs</div>
                <div className="text-[11px] text-[#DFCFBA] space-y-1">
                  <div>📍 Kundapura NH 66 Hub</div>
                  <div>📍 Koteshwara Highway Yard</div>
                  <div>📍 Beach Road Hub</div>
                  <div>📍 Udupi Expressway Hub</div>
                </div>
              </div>
            )}
          </div>

          {/* Search by make or model input */}
          <div className="relative flex-1">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search by make or model"
              className="w-full pl-3 pr-8 py-2 bg-white text-xs text-[#2E271F] placeholder:text-gray-400 rounded-xl border border-gray-200 focus:border-[#D27848] outline-none shadow-2xs"
            />
            {searchQuery ? (
              <button
                onClick={() => onSearchChange('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 p-0.5 text-gray-400 hover:text-black"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            ) : (
              <Search className="absolute right-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
            )}
          </div>

        </div>

      </div>
    </header>
  );
};
