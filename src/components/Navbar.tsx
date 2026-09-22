import React, { useState } from 'react';
import { 
  Car as CarIcon, 
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
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-3 sm:gap-6">
          
          {/* Left: Brand Logo & Bangalore Selector Pill */}
          <div className="flex items-center gap-3 sm:gap-4 shrink-0">
            <a href="#" className="flex items-center gap-2.5 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-600 to-indigo-700 flex items-center justify-center text-white shadow-md shadow-brand-500/20 group-hover:scale-105 transition-transform">
                <CarIcon className="w-6 h-6" />
              </div>
              <div className="hidden sm:block">
                <div className="flex items-center gap-1.5">
                  <span className="text-lg sm:text-xl font-black tracking-tight text-slate-900 group-hover:text-brand-600 transition-colors">
                    KUNDAPURA<span className="text-brand-600">CARS</span>
                  </span>
                </div>
              </div>
            </a>

            {/* Bangalore City Pill (Matches Spinny location selector) */}
            <div className="relative">
              <button
                onClick={() => setCityTooltipOpen(!cityTooltipOpen)}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white hover:bg-slate-50 text-slate-800 text-xs sm:text-sm font-bold border border-slate-300 shadow-2xs transition-all"
                title="Service location: Bangalore"
              >
                <MapPin className="w-3.5 h-3.5 text-brand-600 shrink-0" />
                <span>Bangalore</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-500" />
              </button>

              {cityTooltipOpen && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-2xl shadow-xl border border-slate-200 p-4 z-50 text-xs text-slate-600 animate-slide-up">
                  <div className="font-bold text-slate-900 mb-1 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    <span>Bangalore Exclusive Service</span>
                  </div>
                  <p className="text-slate-600 text-[11px] leading-relaxed mb-3">
                    Every car is physically available at our Bangalore Hubs with free home test drives.
                  </p>
                  <div className="bg-slate-50 p-2.5 rounded-xl text-[11px] font-semibold text-slate-700 space-y-1">
                    <div>📍 Koramangala 80ft Hub</div>
                    <div>📍 Indiranagar 100ft Hub</div>
                    <div>📍 Whitefield Tech Park Hub</div>
                    <div>📍 Hebbal Ring Road Hub</div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* 1. SEARCH BAR (Center Wide Oval Input as seen in screenshot) */}
          <div className="flex-1 max-w-xl hidden md:block">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Search by transmission, model, brand (e.g. Automatic, Creta, EV)..."
                className="w-full pl-11 pr-10 py-2.5 bg-slate-100/90 hover:bg-slate-100 focus:bg-white text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 rounded-full border border-slate-200 focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 transition-all outline-none"
              />
              {searchQuery && (
                <button
                  onClick={() => onSearchChange('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-600 rounded-full"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Right: Nav items (2. BUY CARS, 3. HEART / SHORTLISTED, 4. CALL US) */}
          <div className="flex items-center gap-2 sm:gap-5">
            
            {/* 2. BUY CARS Dropdown / Link */}
            <div className="relative hidden lg:block">
              <button
                onClick={() => setBuyDropdownOpen(!buyDropdownOpen)}
                className="flex items-center gap-1 text-xs sm:text-sm font-bold text-slate-800 hover:text-brand-600 transition-colors py-2"
              >
                <span>Buy car</span>
                <ChevronDown className={`w-3.5 h-3.5 text-slate-500 transition-transform ${buyDropdownOpen ? 'rotate-180 text-brand-600' : ''}`} />
              </button>

              {buyDropdownOpen && (
                <div className="absolute top-full right-0 mt-1 w-52 bg-white rounded-2xl shadow-xl border border-slate-200 p-2 z-50 text-xs animate-slide-up">
                  <a
                    href="#car-catalog"
                    onClick={() => setBuyDropdownOpen(false)}
                    className="block px-3 py-2 rounded-xl text-slate-800 font-semibold hover:bg-slate-50 hover:text-brand-600 transition-colors"
                  >
                    View All Certified Cars
                  </a>
                  <button
                    onClick={() => {
                      onOpenHubs();
                      setBuyDropdownOpen(false);
                    }}
                    className="w-full text-left px-3 py-2 rounded-xl text-slate-800 font-semibold hover:bg-slate-50 hover:text-brand-600 transition-colors"
                  >
                    Visit Bangalore Hubs
                  </button>
                </div>
              )}
            </div>

            {/* Compare Counter (if active) */}
            {compareList.length > 0 && (
              <button
                onClick={onOpenCompare}
                className="relative hidden sm:flex items-center gap-1.5 px-3 py-1.5 bg-brand-50 hover:bg-brand-100 text-brand-700 rounded-full border border-brand-200 text-xs font-bold transition-all shadow-2xs"
              >
                <Layers className="w-3.5 h-3.5 text-brand-600" />
                <span>Compare</span>
                <span className="w-4 h-4 rounded-full bg-brand-600 text-white text-[9px] font-black flex items-center justify-center">
                  {compareList.length}
                </span>
              </button>
            )}

            {/* 3. HEART / SHORTLISTED */}
            <button
              onClick={onOpenWishlist}
              className="flex items-center gap-1.5 text-xs sm:text-sm font-bold text-slate-800 hover:text-brand-600 transition-colors p-1.5 sm:p-0 relative group"
              title="Shortlisted Cars"
            >
              <div className="relative">
                <Heart className={`w-5 h-5 transition-colors ${wishlistCount > 0 ? 'fill-rose-500 text-rose-500' : 'text-slate-700 group-hover:text-rose-500'}`} />
                {wishlistCount > 0 && (
                  <span className="absolute -top-1.5 -right-2 w-4 h-4 bg-rose-500 text-white text-[9px] font-black rounded-full flex items-center justify-center ring-2 ring-white">
                    {wishlistCount}
                  </span>
                )}
              </div>
              <span className="hidden sm:inline font-semibold text-slate-800 group-hover:text-brand-600">
                Shortlisted
              </span>
            </button>

            {/* 4. CALL US */}
            <a
              href="tel:+918047259900"
              className="hidden md:flex flex-col text-right leading-tight hover:opacity-90 transition-opacity pl-2 border-l border-slate-200"
            >
              <span className="text-[10px] font-medium text-slate-500 flex items-center justify-end gap-1">
                <Phone className="w-2.5 h-2.5 text-brand-600" />
                Call us at
              </span>
              <span className="text-xs sm:text-sm font-extrabold text-slate-900 tracking-tight">
                +91 80 4725 9900
              </span>
            </a>

            {/* Mobile Filter Button */}
            <button
              onClick={onOpenMobileFilters}
              className="md:hidden relative p-2 bg-slate-100 text-slate-800 rounded-xl border border-slate-200"
            >
              <SlidersHorizontal className="w-4 h-4" />
              {activeFilterCount > 0 && (
                <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-brand-600 text-white text-[8px] font-bold rounded-full flex items-center justify-center">
                  {activeFilterCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-700 hover:bg-slate-100 rounded-xl border border-slate-200"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>

          </div>

        </div>

        {/* Mobile Search Bar */}
        <div className="pb-3 md:hidden">
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search cars by model, brand, transmission..."
              className="w-full pl-10 pr-9 py-2 bg-slate-100 text-xs text-slate-900 rounded-full border border-slate-200 focus:border-brand-500 outline-none"
            />
            {searchQuery && (
              <button
                onClick={() => onSearchChange('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-slate-400"
              >
                <X className="w-3 h-3" />
              </button>
            )}
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-3 border-t border-slate-200 space-y-2 animate-slide-up">
            <a
              href="#car-catalog"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-between p-2.5 rounded-xl bg-slate-50 text-xs font-semibold text-slate-800"
            >
              <span>🚗 Buy Certified Cars</span>
              <span className="text-slate-400">→</span>
            </a>
            <button
              onClick={() => {
                onOpenHubs();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-between p-2.5 rounded-xl bg-slate-50 text-xs font-semibold text-slate-800"
            >
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-brand-600" />
                Bangalore Experience Hubs
              </span>
              <span className="text-slate-400">→</span>
            </button>
            <a
              href="tel:+918047259900"
              className="w-full flex items-center justify-between p-2.5 rounded-xl bg-brand-50 text-xs font-bold text-brand-900"
            >
              <span className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-brand-600" />
                Call us at +91 80 4725 9900
              </span>
              <span className="text-brand-600">Call</span>
            </a>
          </div>
        )}
      </div>
    </header>
  );
};
