import React, { useState } from 'react';
import { 
  MapPin, 
  Heart, 
  SlidersHorizontal, 
  Phone, 
  Search, 
  Layers, 
  Menu, 
  X,
  ChevronDown
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
}

export const Navbar: React.FC<NavbarProps> = ({
  searchQuery,
  onSearchChange,
  wishlistCount,
  compareList,
  onOpenWishlist,
  onOpenCompare,
  onOpenHubs,
  onOpenMobileFilters,
  activeFilterCount
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cityTooltipOpen, setCityTooltipOpen] = useState(false);
  const [buyDropdownOpen, setBuyDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-[#FDF8F4]/95 backdrop-blur-md border-b border-[#ECC4A6]/60 shadow-subtle transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-3 sm:gap-6">
          
          {/* Left: Brand Name & Bangalore Selector Pill */}
          <div className="flex items-center gap-3 sm:gap-4 shrink-0">
            <a href="#" className="flex items-center group">
              <span className="text-xl sm:text-2xl font-black tracking-tight text-[#2E271F] group-hover:opacity-85 transition-opacity">
                KUNDAPURA<span className="text-[#D27848] font-extrabold ml-0.5">CARS</span>
              </span>
            </a>

            {/* Bangalore City Pill */}
            <div className="relative">
              <button
                onClick={() => setCityTooltipOpen(!cityTooltipOpen)}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-[#FBF0E6] hover:bg-[#F7DEC9] text-[#74351B] text-xs sm:text-sm font-bold border border-[#ECC4A6] shadow-2xs transition-all"
                title="Service location: Bangalore"
              >
                <MapPin className="w-3.5 h-3.5 text-[#D27848] shrink-0" />
                <span>Bangalore</span>
                <ChevronDown className="w-3.5 h-3.5 text-[#964521]" />
              </button>

              {cityTooltipOpen && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-[#241A15] text-[#FDF8F4] rounded-2xl shadow-2xl border border-[#451E10] p-4 z-50 text-xs animate-slide-up">
                  <div className="font-bold text-[#FDF8F4] mb-1 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#D27848]"></span>
                    <span>Bangalore Exclusive Marketplace</span>
                  </div>
                  <p className="text-[#DFCFBA] text-[11px] leading-relaxed mb-3">
                    Every car is physically available at our Bangalore Hubs with free home test drives.
                  </p>
                  <div className="bg-[#17100D] p-2.5 rounded-xl text-[11px] font-semibold text-[#F7DEC9] space-y-1 border border-[#451E10]">
                    <div>📍 Koramangala 80ft Hub</div>
                    <div>📍 Indiranagar 100ft Hub</div>
                    <div>📍 Mantri Mall, Malleshwaram Hub</div>
                    <div>📍 Whitefield Tech Park Hub</div>
                    <div>📍 Hebbal Ring Road Hub</div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* 1. SEARCH BAR (Center Wide Oval Input) */}
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
            
            {/* 2. BUY CARS Dropdown */}
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
                    Visit Bangalore Hubs
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

            {/* 3. HEART / SHORTLISTED */}
            <button
              onClick={onOpenWishlist}
              className="flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#2E271F] hover:text-[#D27848] transition-colors p-1.5 sm:p-0 relative group"
              title="Shortlisted Cars"
            >
              <div className="relative">
                <Heart className={`w-5 h-5 transition-colors ${wishlistCount > 0 ? 'fill-[#D27848] text-[#D27848]' : 'text-[#74351B] group-hover:text-[#D27848]'}`} />
                {wishlistCount > 0 && (
                  <span className="absolute -top-1.5 -right-2 w-4 h-4 bg-[#D27848] text-white text-[9px] font-black rounded-full flex items-center justify-center ring-2 ring-[#FDF8F4]">
                    {wishlistCount}
                  </span>
                )}
              </div>
              <span className="hidden sm:inline font-bold text-[#2E271F] group-hover:text-[#D27848]">
                Shortlisted
              </span>
            </button>

            {/* 4. CALL US */}
            <a
              href="tel:+918047259900"
              className="hidden md:flex flex-col text-right leading-tight hover:opacity-85 transition-opacity pl-2 border-l border-[#ECC4A6]/60"
            >
              <span className="text-[10px] font-semibold text-[#8B785F] flex items-center justify-end gap-1">
                <Phone className="w-2.5 h-2.5 text-[#D27848]" />
                Call us at
              </span>
              <span className="text-xs sm:text-sm font-black text-[#2E271F] tracking-tight">
                +91 80 4725 9900
              </span>
            </a>

            {/* Mobile Filter Button */}
            <button
              onClick={onOpenMobileFilters}
              className="md:hidden relative p-2 bg-[#D27848] text-white rounded-xl border border-[#B95C2E]"
            >
              <SlidersHorizontal className="w-4 h-4" />
              {activeFilterCount > 0 && (
                <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-white text-[#D27848] text-[8px] font-bold rounded-full flex items-center justify-center">
                  {activeFilterCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#74351B] bg-[#FBF0E6] hover:bg-[#F7DEC9] rounded-xl border border-[#ECC4A6]"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>

          </div>

        </div>

        {/* Mobile Search Bar */}
        <div className="pb-3 md:hidden">
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#AA957A]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search cars by model, brand, transmission..."
              className="w-full pl-10 pr-9 py-2 bg-[#FBF0E6] text-xs text-[#2E271F] rounded-full border border-[#ECC4A6] focus:border-[#D27848] outline-none"
            />
            {searchQuery && (
              <button
                onClick={() => onSearchChange('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-[#AA957A]"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-3 border-t border-[#ECC4A6]/60 space-y-2 animate-slide-up">
            <a
              href="#car-catalog"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-between p-2.5 rounded-xl bg-[#FBF0E6] text-xs font-bold text-[#2E271F]"
            >
              <span>🚗 Buy Certified Cars</span>
              <span className="text-[#AA957A]">→</span>
            </a>
            <button
              onClick={() => {
                onOpenHubs();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-between p-2.5 rounded-xl bg-[#FBF0E6] text-xs font-bold text-[#2E271F]"
            >
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#D27848]" />
                Bangalore Experience Hubs
              </span>
              <span className="text-[#AA957A]">→</span>
            </button>
            <a
              href="tel:+918047259900"
              className="w-full flex items-center justify-between p-2.5 rounded-xl bg-[#D27848] text-xs font-black text-white"
            >
              <span className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-white" />
                Call us at +91 80 4725 9900
              </span>
              <span className="text-[#FDF8F4]">Call</span>
            </a>
          </div>
        )}
      </div>
    </header>
  );
};

