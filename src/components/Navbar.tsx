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
  ChevronDown,
  ChevronRight,
  ShieldCheck,
  Car as CarIcon,
  MessageSquare
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
  onOpenAssurance,
  onOpenMobileFilters,
  activeFilterCount
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cityTooltipOpen, setCityTooltipOpen] = useState(false);
  const [buyDropdownOpen, setBuyDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-[#FDF8F4]/95 backdrop-blur-md border-b border-[#ECC4A6]/60 shadow-subtle transition-all">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-20 gap-2 sm:gap-6">
          
          {/* Left: Brand Name & Bangalore Selector Pill */}
          <div className="flex items-center gap-2 sm:gap-4 shrink-0">
            <a href="#" className="flex items-center group">
              <span className="text-lg sm:text-2xl font-black tracking-tight text-[#2E271F] group-hover:opacity-85 transition-opacity">
                KUNDAPURA<span className="text-[#D27848] font-extrabold ml-0.5">CARS</span>
              </span>
            </a>

            {/* Bangalore City Pill */}
            <div className="relative">
              <button
                onClick={() => setCityTooltipOpen(!cityTooltipOpen)}
                className="flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3.5 py-1 sm:py-2 rounded-full bg-[#FBF0E6] hover:bg-[#F7DEC9] text-[#74351B] text-[11px] sm:text-sm font-bold border border-[#ECC4A6] shadow-2xs transition-all"
                title="Service location: Bangalore"
              >
                <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#D27848] shrink-0" />
                <span className="hidden xs:inline">Bangalore</span>
                <span className="xs:hidden">BLR</span>
                <ChevronDown className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#964521]" />
              </button>

              {cityTooltipOpen && (
                <div className="absolute top-full left-0 mt-2 w-72 max-w-[calc(100vw-2rem)] bg-[#241A15] text-[#FDF8F4] rounded-2xl shadow-2xl border border-[#451E10] p-4 z-50 text-xs animate-slide-up">
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

          {/* 1. SEARCH BAR (Center Wide Oval Input - Desktop) */}
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
          <div className="flex items-center gap-1.5 sm:gap-5">
            
            {/* 2. BUY CARS Dropdown (Desktop) */}
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

            {/* 4. CALL US (Desktop) */}
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
              className="md:hidden relative p-2 bg-[#D27848] active:bg-[#B95C2E] text-white rounded-xl border border-[#B95C2E] shadow-2xs"
              title="Filter Certified Cars"
            >
              <SlidersHorizontal className="w-4 h-4" />
              {activeFilterCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#241A15] text-[#FDF8F4] text-[9px] font-black rounded-full flex items-center justify-center border border-[#ECC4A6]">
                  {activeFilterCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle (Burger Menu) */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 text-[#74351B] bg-[#FBF0E6] active:bg-[#F7DEC9] rounded-xl border border-[#ECC4A6]"
              title="Open Navigation Panel"
            >
              <Menu className="w-4 h-4" />
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
              placeholder="Search by model, transmission, brand..."
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

      </div>

      {/* Right Slide-Over Panel for Burger Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden bg-[#17100D]/70 backdrop-blur-xs flex justify-end animate-fade-in">
          {/* Backdrop Click to Close */}
          <div 
            className="absolute inset-0 cursor-pointer" 
            onClick={() => setMobileMenuOpen(false)} 
          />

          <div className="w-full max-w-sm sm:max-w-md bg-[#FAF7F2] h-full shadow-2xl flex flex-col z-10 border-l border-[#ECC4A6] animate-slide-up sm:animate-none">
            
            {/* Panel Header */}
            <div className="p-4 sm:p-5 border-b border-[#ECC4A6]/60 flex items-center justify-between bg-[#FDF8F4] shrink-0">
              <div className="flex items-center gap-2">
                <span className="text-lg font-black tracking-tight text-[#2E271F]">
                  KUNDAPURA<span className="text-[#D27848] font-extrabold ml-0.5">CARS</span>
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#FBF0E6] text-[#74351B] border border-[#ECC4A6]">
                  Bangalore
                </span>
              </div>

              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-[#74351B] hover:text-[#2E271F] rounded-full bg-[#FBF0E6] hover:bg-[#F7DEC9] border border-[#ECC4A6] transition-colors"
                title="Close Menu"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Panel Scrollable Menu List */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              
              {/* 1. Buy Car Section */}
              <div className="space-y-1.5">
                <div className="text-[11px] font-black uppercase tracking-wider text-[#74351B] px-1">
                  Buy Certified Cars
                </div>
                <div className="bg-white rounded-2xl border border-[#ECC4A6]/70 p-1.5 space-y-0.5 shadow-2xs">
                  <a
                    href="#car-catalog"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between p-2.5 rounded-xl text-xs font-bold text-[#2E271F] hover:bg-[#FDF3EA] hover:text-[#D27848] transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <CarIcon className="w-4 h-4 text-[#D27848]" />
                      <span>View All Certified Cars</span>
                    </span>
                    <ChevronRight className="w-3.5 h-3.5 text-[#AA957A]" />
                  </a>

                  <a
                    href="#car-catalog"
                    onClick={() => {
                      onSearchChange('SUV');
                      setMobileMenuOpen(false);
                    }}
                    className="flex items-center justify-between p-2.5 rounded-xl text-xs font-semibold text-[#6D5D49] hover:bg-[#FDF3EA] hover:text-[#D27848] transition-colors"
                  >
                    <span>Used SUVs in Bangalore</span>
                    <span className="text-[10px] bg-[#FBF0E6] text-[#74351B] px-2 py-0.5 rounded-md font-bold">Popular</span>
                  </a>

                  <a
                    href="#car-catalog"
                    onClick={() => {
                      onSearchChange('Automatic');
                      setMobileMenuOpen(false);
                    }}
                    className="flex items-center justify-between p-2.5 rounded-xl text-xs font-semibold text-[#6D5D49] hover:bg-[#FDF3EA] hover:text-[#D27848] transition-colors"
                  >
                    <span>Automatic Sedans &amp; Hatchbacks</span>
                    <ChevronRight className="w-3.5 h-3.5 text-[#AA957A]" />
                  </a>

                  <a
                    href="#car-catalog"
                    onClick={() => {
                      onSearchChange('EV');
                      setMobileMenuOpen(false);
                    }}
                    className="flex items-center justify-between p-2.5 rounded-xl text-xs font-semibold text-[#6D5D49] hover:bg-[#FDF3EA] hover:text-[#D27848] transition-colors"
                  >
                    <span>Electric Vehicles (EV)</span>
                    <span className="text-[10px] bg-[#FDF3EA] text-[#D27848] px-2 py-0.5 rounded-md font-bold">Zero Emission</span>
                  </a>
                </div>
              </div>

              {/* 2. Experience Hubs & Assurance */}
              <div className="space-y-1.5">
                <div className="text-[11px] font-black uppercase tracking-wider text-[#74351B] px-1">
                  Bangalore Experience &amp; Hubs
                </div>
                <div className="bg-white rounded-2xl border border-[#ECC4A6]/70 p-1.5 space-y-0.5 shadow-2xs">
                  <button
                    onClick={() => {
                      onOpenHubs();
                      setMobileMenuOpen(false);
                    }}
                    className="w-full flex items-center justify-between p-2.5 rounded-xl text-xs font-bold text-[#2E271F] hover:bg-[#FDF3EA] hover:text-[#D27848] transition-colors text-left"
                  >
                    <span className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-[#D27848]" />
                      <span>Visit 5 Bangalore Hubs</span>
                    </span>
                    <span className="text-[10px] bg-[#241A15] text-[#FDF8F4] px-2 py-0.5 rounded-md font-bold">5 Hubs</span>
                  </button>

                  <button
                    onClick={() => {
                      if (onOpenAssurance) onOpenAssurance();
                      else onOpenHubs();
                      setMobileMenuOpen(false);
                    }}
                    className="w-full flex items-center justify-between p-2.5 rounded-xl text-xs font-bold text-[#2E271F] hover:bg-[#FDF3EA] hover:text-[#D27848] transition-colors text-left"
                  >
                    <span className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-[#D27848]" />
                      <span>200-Point Inspection &amp; Warranty</span>
                    </span>
                    <ChevronRight className="w-3.5 h-3.5 text-[#AA957A]" />
                  </button>

                  <div className="p-2.5 bg-[#FDF8F4] rounded-xl text-[11px] text-[#8B785F] space-y-1 border border-[#ECC4A6]/50">
                    <div className="font-bold text-[#2E271F]">Hub Locations:</div>
                    <div className="text-[10px] space-y-0.5">
                      <div>📍 Koramangala 80ft Hub</div>
                      <div>📍 Indiranagar 100ft Hub</div>
                      <div>📍 Mantri Mall, Malleshwaram Hub</div>
                      <div>📍 Whitefield Tech Park Hub</div>
                      <div>📍 Hebbal Ring Road Hub</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 3. Shortlisted & Comparison */}
              <div className="space-y-1.5">
                <div className="text-[11px] font-black uppercase tracking-wider text-[#74351B] px-1">
                  Saved &amp; Tools
                </div>
                <div className="bg-white rounded-2xl border border-[#ECC4A6]/70 p-1.5 space-y-1 shadow-2xs">
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenWishlist();
                    }}
                    className="w-full flex items-center justify-between p-2.5 rounded-xl text-xs font-bold text-[#2E271F] hover:bg-[#FDF3EA] hover:text-[#D27848] transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <Heart className={`w-4 h-4 ${wishlistCount > 0 ? 'fill-[#D27848] text-[#D27848]' : 'text-[#74351B]'}`} />
                      <span>Shortlisted Cars</span>
                    </span>
                    <span className="px-2 py-0.5 bg-[#FDF3EA] text-[#D27848] rounded-md font-extrabold text-[10px] border border-[#ECC4A6]">
                      {wishlistCount} Saved
                    </span>
                  </button>

                  {compareList.length > 0 && (
                    <button
                      onClick={() => {
                        setMobileMenuOpen(false);
                        onOpenCompare();
                      }}
                      className="w-full flex items-center justify-between p-2.5 rounded-xl text-xs font-bold text-[#2E271F] hover:bg-[#FDF3EA] hover:text-[#D27848] transition-colors"
                    >
                      <span className="flex items-center gap-2">
                        <Layers className="w-4 h-4 text-[#D27848]" />
                        <span>Compare Cars</span>
                      </span>
                      <span className="px-2 py-0.5 bg-[#241A15] text-[#FDF8F4] rounded-md font-extrabold text-[10px]">
                        {compareList.length} Selected
                      </span>
                    </button>
                  )}
                </div>
              </div>

              {/* 4. Support & Direct Hotline */}
              <div className="p-3.5 bg-[#241A15] text-[#FDF8F4] rounded-2xl border border-[#451E10] space-y-2.5 shadow-subtle">
                <div className="text-[10px] font-extrabold uppercase tracking-wider text-[#ECC4A6]">
                  Bangalore Customer Support
                </div>
                <a
                  href="tel:+918047259900"
                  className="w-full py-2.5 px-3 bg-[#D27848] hover:bg-[#B95C2E] text-white font-extrabold text-xs rounded-xl flex items-center justify-center gap-2 transition-colors shadow-xs"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Us: +91 80 4725 9900</span>
                </a>
                <a
                  href="https://wa.me/918047259900?text=Hi%20Kundapura%20Cars,%20I%20am%20looking%20for%20a%20certified%20used%20car%20in%20Bangalore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 px-3 bg-[#17100D] hover:bg-[#2A160C] text-[#FDF8F4] font-bold text-xs rounded-xl border border-[#451E10] flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageSquare className="w-4 h-4 text-[#D27848]" />
                  <span>Chat on WhatsApp</span>
                </a>
                <div className="text-[10px] text-center text-[#DFCFBA] pt-0.5">
                  Open 7 Days • 9:30 AM to 8:30 PM
                </div>
              </div>

            </div>

          </div>
        </div>
      )}
    </header>
  );
};

