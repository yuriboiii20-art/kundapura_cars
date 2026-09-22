import React from 'react';
import { 
  SlidersHorizontal, 
  RotateCcw, 
  Check, 
  Fuel, 
  Settings2, 
  Sparkles,
  Layers,
  X
} from 'lucide-react';
import { FilterState, BodyType, FuelType, TransmissionType, OwnerType } from '../types/car';
import { formatPrice } from '../utils/formatters';

interface FilterSidebarProps {
  filters: FilterState;
  onFilterChange: (filters: FilterState) => void;
  onResetFilters: () => void;
  availableBrands: string[];
  totalResults: number;
  isMobileModal?: boolean;
  onCloseMobileModal?: () => void;
}

export const FilterSidebar: React.FC<FilterSidebarProps> = ({
  filters,
  onFilterChange,
  onResetFilters,
  availableBrands,
  totalResults,
  isMobileModal = false,
  onCloseMobileModal
}) => {
  const bodyTypes: BodyType[] = ['SUV', 'Sedan', 'Hatchback', 'EV', 'Luxury', 'MUV'];
  const fuelTypes: FuelType[] = ['Petrol', 'Diesel', 'Electric', 'Hybrid'];
  const transmissions: TransmissionType[] = ['Automatic', 'Manual'];
  const ownerTypes: OwnerType[] = ['1st Owner', '2nd Owner'];

  const toggleBodyType = (type: BodyType) => {
    const exists = filters.bodyTypes.includes(type);
    const updated = exists
      ? filters.bodyTypes.filter((t) => t !== type)
      : [...filters.bodyTypes, type];
    onFilterChange({ ...filters, bodyTypes: updated });
  };

  const toggleBrand = (brand: string) => {
    const exists = filters.brands.includes(brand);
    const updated = exists
      ? filters.brands.filter((b) => b !== brand)
      : [...filters.brands, brand];
    onFilterChange({ ...filters, brands: updated });
  };

  const toggleFuelType = (fuel: FuelType) => {
    const exists = filters.fuelTypes.includes(fuel);
    const updated = exists
      ? filters.fuelTypes.filter((f) => f !== fuel)
      : [...filters.fuelTypes, fuel];
    onFilterChange({ ...filters, fuelTypes: updated });
  };

  const toggleTransmission = (trans: TransmissionType) => {
    const exists = filters.transmissions.includes(trans);
    const updated = exists
      ? filters.transmissions.filter((t) => t !== trans)
      : [...filters.transmissions, trans];
    onFilterChange({ ...filters, transmissions: updated });
  };

  const toggleOwner = (owner: OwnerType) => {
    const exists = filters.owners.includes(owner);
    const updated = exists
      ? filters.owners.filter((o) => o !== owner)
      : [...filters.owners, owner];
    onFilterChange({ ...filters, owners: updated });
  };

  const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onFilterChange({ ...filters, maxPrice: Number(e.target.value) });
  };

  const hasActiveFilters =
    filters.bodyTypes.length > 0 ||
    filters.brands.length > 0 ||
    filters.fuelTypes.length > 0 ||
    filters.transmissions.length > 0 ||
    filters.owners.length > 0 ||
    filters.maxPrice < 4000000 ||
    filters.minPrice > 0 ||
    filters.searchQuery !== '';

  const content = (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-200">
        <div className="flex items-center gap-2 text-slate-900 font-extrabold text-base">
          <SlidersHorizontal className="w-4 h-4 text-brand-600" />
          <span>Filters</span>
          <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
            {totalResults} Cars
          </span>
        </div>

        {hasActiveFilters && (
          <button
            onClick={onResetFilters}
            className="text-xs font-bold text-rose-600 hover:text-rose-700 flex items-center gap-1 hover:underline"
          >
            <RotateCcw className="w-3 h-3" />
            Reset All
          </button>
        )}
      </div>

      {/* 1. Price Budget Filter */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <label className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-600"></span>
            Max Budget
          </label>
          <span className="text-xs font-extrabold text-brand-700 bg-brand-50 px-2 py-0.5 rounded-md border border-brand-200">
            Up to {formatPrice(filters.maxPrice)}
          </span>
        </div>
        <input
          type="range"
          min="500000"
          max="4000000"
          step="50000"
          value={filters.maxPrice}
          onChange={handleMaxPriceChange}
          className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-600"
        />
        <div className="flex justify-between text-[11px] text-slate-400 font-semibold mt-1">
          <span>₹5 Lakh</span>
          <span>₹20 Lakh</span>
          <span>₹40 Lakh+</span>
        </div>
      </div>

      {/* 2. Body Types */}
      <div>
        <label className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5 mb-2.5">
          <Layers className="w-3.5 h-3.5 text-brand-600" />
          Body Style
        </label>
        <div className="grid grid-cols-2 gap-1.5">
          {bodyTypes.map((type) => {
            const isSelected = filters.bodyTypes.includes(type);
            return (
              <button
                key={type}
                onClick={() => toggleBodyType(type)}
                className={`flex items-center justify-between px-3 py-2 rounded-xl text-xs font-bold border transition-all text-left ${
                  isSelected
                    ? 'bg-brand-50 border-brand-400 text-brand-900 shadow-xs'
                    : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-700'
                }`}
              >
                <span>{type}</span>
                {isSelected && <Check className="w-3.5 h-3.5 text-brand-600" />}
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. Fuel Type */}
      <div>
        <label className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5 mb-2.5">
          <Fuel className="w-3.5 h-3.5 text-brand-600" />
          Fuel Type
        </label>
        <div className="grid grid-cols-2 gap-1.5">
          {fuelTypes.map((fuel) => {
            const isSelected = filters.fuelTypes.includes(fuel);
            return (
              <button
                key={fuel}
                onClick={() => toggleFuelType(fuel)}
                className={`flex items-center justify-between px-3 py-2 rounded-xl text-xs font-bold border transition-all ${
                  isSelected
                    ? 'bg-brand-50 border-brand-400 text-brand-900 shadow-xs'
                    : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-700'
                }`}
              >
                <span>{fuel}</span>
                {isSelected && <Check className="w-3.5 h-3.5 text-brand-600" />}
              </button>
            );
          })}
        </div>
      </div>

      {/* 4. Transmission */}
      <div>
        <label className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5 mb-2.5">
          <Settings2 className="w-3.5 h-3.5 text-brand-600" />
          Transmission
        </label>
        <div className="grid grid-cols-2 gap-1.5">
          {transmissions.map((trans) => {
            const isSelected = filters.transmissions.includes(trans);
            return (
              <button
                key={trans}
                onClick={() => toggleTransmission(trans)}
                className={`flex items-center justify-between px-3 py-2 rounded-xl text-xs font-bold border transition-all ${
                  isSelected
                    ? 'bg-brand-50 border-brand-400 text-brand-900 shadow-xs'
                    : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-700'
                }`}
              >
                <span>{trans}</span>
                {isSelected && <Check className="w-3.5 h-3.5 text-brand-600" />}
              </button>
            );
          })}
        </div>
      </div>

      {/* 5. Brands / Make */}
      <div>
        <label className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5 mb-2.5">
          <Sparkles className="w-3.5 h-3.5 text-brand-600" />
          Brand / Make
        </label>
        <div className="space-y-1 max-h-48 overflow-y-auto pr-1">
          {availableBrands.map((brand) => {
            const isSelected = filters.brands.includes(brand);
            return (
              <button
                key={brand}
                onClick={() => toggleBrand(brand)}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-bold border transition-all ${
                  isSelected
                    ? 'bg-brand-50 border-brand-400 text-brand-900 shadow-xs'
                    : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-700'
                }`}
              >
                <span>{brand}</span>
                {isSelected && <Check className="w-3.5 h-3.5 text-brand-600" />}
              </button>
            );
          })}
        </div>
      </div>

      {/* 6. Ownership */}
      <div>
        <label className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5 mb-2.5">
          Ownership
        </label>
        <div className="grid grid-cols-2 gap-1.5">
          {ownerTypes.map((owner) => {
            const isSelected = filters.owners.includes(owner);
            return (
              <button
                key={owner}
                onClick={() => toggleOwner(owner)}
                className={`flex items-center justify-between px-3 py-2 rounded-xl text-xs font-bold border transition-all ${
                  isSelected
                    ? 'bg-brand-50 border-brand-400 text-brand-900 shadow-xs'
                    : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-700'
                }`}
              >
                <span>{owner}</span>
                {isSelected && <Check className="w-3.5 h-3.5 text-brand-600" />}
              </button>
            );
          })}
        </div>
      </div>

      {/* Bangalore Notice Note */}
      <div className="p-3 bg-slate-100 rounded-xl text-[11px] text-slate-600 border border-slate-200 leading-relaxed">
        <strong className="text-slate-800">Bangalore Inventory:</strong> All cars are physically parked at Bangalore hubs with active Karnataka RTO clearance.
      </div>
    </div>
  );

  if (isMobileModal) {
    return (
      <div className="fixed inset-0 z-50 flex flex-col bg-white overflow-hidden animate-slide-up">
        <div className="p-4 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <div className="font-extrabold text-slate-900 text-base flex items-center gap-2">
            <SlidersHorizontal className="w-4 h-4 text-brand-600" />
            <span>Filter Cars</span>
          </div>
          <button
            onClick={onCloseMobileModal}
            className="p-1.5 text-slate-500 hover:text-slate-800 rounded-full bg-white border border-slate-200"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto p-4">
          {content}
        </div>

        <div className="p-4 border-t border-slate-200 bg-white flex gap-3">
          {hasActiveFilters && (
            <button
              onClick={onResetFilters}
              className="px-4 py-3 border border-slate-200 text-slate-700 text-xs font-bold rounded-xl"
            >
              Reset
            </button>
          )}
          <button
            onClick={onCloseMobileModal}
            className="flex-1 py-3 bg-brand-600 text-white text-xs font-extrabold rounded-xl shadow-md shadow-brand-500/25"
          >
            Show {totalResults} Certified Cars
          </button>
        </div>
      </div>
    );
  }

  return (
    <aside className="w-72 shrink-0 bg-white p-5 rounded-2xl border border-slate-200 shadow-sm sticky top-28 self-start max-h-[calc(100vh-140px)] overflow-y-auto">
      {content}
    </aside>
  );
};
