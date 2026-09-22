import React, { useState } from 'react';
import { 
  Car as CarIcon, 
  MapPin, 
  Heart, 
  SlidersHorizontal, 
  Phone, 
  Search, 
  ShieldCheck, 
  Layers, 
  Menu, 
  X,
  Sparkles,
  ChevronDown
} from 'lucide-react';
import { Car } from '../types/car';

interface NavbarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  wishlistCount: number;
  compareList: Car[];
  onOpenWishlist: () => void;
  onOpenCompare: () => void;
  onOpenHubs: () => void;
  onOpenAssurance: () => void;
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

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all">
      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-3 sm:gap-6">
          
          {/* Brand Logo & Bangalore Badge */}
          <div className="flex items-center gap-3 sm:gap-6 shrink-0">
            <a href="#" className="flex items-center gap-2.5 group">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-brand-600 to-indigo-700 flex items-center justify-center text-white shadow-md shadow-brand-500/20 group-hover:scale-105 transition-transform">
                <CarIcon className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-lg sm:text-xl font-black tracking-tight text-slate-900 group-hover:text-brand-600 transition-colors">
                    KUNDAPURA<span className="text-brand-600">CARS</span>
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-brand-50 text-brand-700 px-1.5 py-0.5 rounded border border-brand-200 hidden sm:inline-block">
                    Buy Only
                  </span>
                </div>
                <p className="text-[11px] font-semibold text-slate-500 hidden sm:block tracking-wide">
                  Verified Cars • Bangalore Hubs
                </p>
              </div>
            </a>

            {/* Bangalore City Lock Chip with Tooltip */}
            <div className="relative">
              <button
                onClick={() => setCityTooltipOpen(!cityTooltipOpen)}
                onMouseEnter={() => setCityTooltipOpen(true)}
                onMouseLeave={() => setCityTooltipOpen(false)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200/80 text-slate-800 text-xs font-semibold border border-slate-200/80 transition-all"
                title="Service available exclusively in Bangalore"
              >
                <MapPin className="w-3.5 h-3.5 text-brand-600" />
                <span>Bengaluru</span>
                <ChevronDown className="w-3 h-3 text-slate-500" />
              </button>

              {cityTooltipOpen && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-xl border border-slate-200 p-3 z-50 text-xs text-slate-600 animate-slide-up">
                  <div className="font-bold text-slate-900 mb-1 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    Bangalore Exclusive Service
                  </div>
                  <p className="text-slate-600 text-[11px] leading-relaxed mb-2">
                    Kundapura Cars is dedicated exclusively to Bangalore. Browse cars available across our 5 Bangalore Hubs with free doorstep test drives.
                  </p>
                  <div className="bg-slate-50 p-2 rounded-lg text-[10px] font-medium text-slate-700 space-y-1">
                    <div>📍 Koramangala • 📍 Indiranagar</div>
                    <div>📍 Whitefield • 📍 Hebbal • 📍 Kundapura</div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-xl hidden md:block">
            <div className="relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Search by brand, model, body type (e.g. Creta, Thar, EV, Automatic, KA-01)..."
                className="w-full pl-10 pr-10 py-2.5 bg-slate-50 hover:bg-white focus:bg-white text-sm text-slate-900 placeholder:text-slate-400 rounded-xl border border-slate-200 focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 transition-all outline-none"
              />
              {searchQuery && (
                <button
                  onClick={() => onSearchChange('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-600 rounded-full"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Action Links & Utility Badges */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Hubs link */}
            <button
              onClick={onOpenHubs}
              className="hidden lg:flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-700 hover:text-brand-600 hover:bg-slate-100 rounded-lg transition-colors"
            >
              <MapPin className="w-4 h-4 text-brand-600" />
              Bangalore Hubs
            </button>

            {/* Kundapura Assured link */}
            <button
              onClick={onOpenAssurance}
              className="hidden lg:flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100/80 rounded-lg border border-emerald-200 transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              Why Assured?
            </button>

            {/* Compare Button with counter */}
            {compareList.length > 0 && (
              <button
                onClick={onOpenCompare}
                className="relative flex items-center gap-1.5 px-3 py-2 bg-brand-50 hover:bg-brand-100 text-brand-700 rounded-xl border border-brand-200 text-xs font-bold transition-all shadow-sm"
              >
                <Layers className="w-4 h-4 text-brand-600" />
                <span className="hidden sm:inline">Compare</span>
                <span className="w-5 h-5 rounded-full bg-brand-600 text-white text-[10px] font-black flex items-center justify-center">
                  {compareList.length}
                </span>
              </button>
            )}

            {/* Wishlist Button */}
            <button
              onClick={onOpenWishlist}
              className="relative p-2.5 text-slate-700 hover:text-rose-600 hover:bg-rose-50 rounded-xl border border-slate-200 hover:border-rose-200 transition-all"
              title="Saved Cars"
            >
              <Heart className={`w-5 h-5 ${wishlistCount > 0 ? 'fill-rose-500 text-rose-500' : ''}`} />
              {wishlistCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-rose-500 text-white text-[10px] font-black rounded-full flex items-center justify-center ring-2 ring-white">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Mobile Filter Button */}
            <button
              onClick={onOpenMobileFilters}
              className="md:hidden relative p-2.5 bg-slate-100 text-slate-800 rounded-xl border border-slate-200"
            >
              <SlidersHorizontal className="w-5 h-5" />
              {activeFilterCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-brand-600 text-white text-[9px] font-bold rounded-full flex items-center justify-center">
                  {activeFilterCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 text-slate-700 hover:bg-slate-100 rounded-xl border border-slate-200"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
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
              placeholder="Search cars in Bangalore (e.g. Creta, Thar, EV)..."
              className="w-full pl-10 pr-9 py-2.5 bg-slate-50 text-sm text-slate-900 rounded-xl border border-slate-200 focus:border-brand-500 outline-none"
            />
            {searchQuery && (
              <button
                onClick={() => onSearchChange('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-slate-400"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-3 border-t border-slate-200 space-y-2 animate-slide-up">
            <button
              onClick={() => {
                onOpenHubs();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-between p-2.5 rounded-lg bg-slate-50 text-xs font-semibold text-slate-800"
            >
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-brand-600" />
                Bangalore Experience Hubs (5 Locations)
              </span>
              <span className="text-slate-400">→</span>
            </button>
            <button
              onClick={() => {
                onOpenAssurance();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-between p-2.5 rounded-lg bg-emerald-50 text-xs font-semibold text-emerald-800"
            >
              <span className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                The Kundapura Assured 200-Point Promise
              </span>
              <span className="text-emerald-500">→</span>
            </button>
            <a
              href="tel:+918047259900"
              className="w-full flex items-center justify-between p-2.5 rounded-lg bg-amber-50 text-xs font-semibold text-amber-900"
            >
              <span className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-600" />
                Call Bangalore Hub: +91 80 4725 9900
              </span>
              <span className="text-amber-500">Call</span>
            </a>
          </div>
        )}
      </div>
    </header>
  );
};
