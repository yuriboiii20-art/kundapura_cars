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
import { FilterState, BodyType, FuelType, TransmissionType, OwnerType } from '@/types/car';
import { formatPrice } from '@/utils/formatters';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';

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

  const handleMaxPriceChange = (values: number[]) => {
    if (values.length > 0) {
      onFilterChange({ ...filters, maxPrice: values[0] });
    }
  };

  const hasActiveFilters =
    filters.bodyTypes.length > 0 ||
    filters.brands.length > 0 ||
    filters.fuelTypes.length > 0 ||
    filters.transmissions.length > 0 ||
    filters.owners.length > 0 ||
    filters.maxPrice < 5000000 ||
    filters.minPrice > 0 ||
    filters.searchQuery !== '';

  const content = (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="flex items-center justify-between pb-4 border-b border-[#ECC4A6]/60">
        <div className="flex items-center gap-2 text-[#2E271F] font-black text-base tracking-tight">
          <div className="w-7 h-7 rounded-lg bg-[#D27848] text-white flex items-center justify-center font-bold">
            <SlidersHorizontal className="w-3.5 h-3.5" />
          </div>
          <span>Filters</span>
          <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-[#FBF0E6] text-[#74351B] border border-[#ECC4A6]">
            {totalResults} Cars
          </span>
        </div>

        {hasActiveFilters && (
          <button
            onClick={onResetFilters}
            className="text-xs font-bold text-[#C75323] hover:text-[#964521] flex items-center gap-1 hover:underline"
          >
            <RotateCcw className="w-3 h-3" />
            Reset All
          </button>
        )}
      </div>

      {/* 1. Price Budget Filter using Radix UI Slider with Tooltip */}
      <div className="space-y-3 bg-[#FBF0E6]/80 p-3.5 rounded-2xl border border-[#ECC4A6]">
        <div className="flex items-center justify-between">
          <Label className="flex items-center gap-1.5 text-[#2E271F] font-extrabold text-xs">
            <span className="w-2 h-2 rounded-full bg-[#D27848]"></span>
            Max Budget
          </Label>
          <span className="text-xs font-black text-white bg-[#D27848] px-2.5 py-0.5 rounded-lg shadow-2xs">
            Up to {formatPrice(filters.maxPrice)}
          </span>
        </div>

        {/* Radix UI Slider with Tooltip */}
        <div className="pt-2 px-1">
          <Slider
            value={[filters.maxPrice]}
            min={500000}
            max={5000000}
            step={50000}
            onValueChange={handleMaxPriceChange}
            showTooltip={true}
            tooltipContent={(val) => `Budget: ${formatPrice(val)}`}
            aria-label="Filter by maximum price"
          />
        </div>

        <div className="flex justify-between text-[10px] text-[#8B785F] font-bold">
          <span>₹ 5 Lakh</span>
          <span>₹ 25 Lakh</span>
          <span>₹ 50 Lakh+</span>
        </div>
      </div>

      {/* 2. Body Types */}
      <div>
        <label className="text-xs font-extrabold uppercase tracking-wider text-[#4F4335] flex items-center gap-1.5 mb-2.5">
          <Layers className="w-3.5 h-3.5 text-[#D27848]" />
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
                    ? 'bg-[#D27848] border-[#D27848] text-white shadow-xs'
                    : 'bg-white hover:bg-[#FBF0E6] border-[#ECC4A6]/80 text-[#2E271F]'
                }`}
              >
                <span>{type}</span>
                {isSelected && <Check className="w-3.5 h-3.5 text-white" />}
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. Fuel Type */}
      <div>
        <label className="text-xs font-extrabold uppercase tracking-wider text-[#4F4335] flex items-center gap-1.5 mb-2.5">
          <Fuel className="w-3.5 h-3.5 text-[#D27848]" />
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
                    ? 'bg-[#D27848] border-[#D27848] text-white shadow-xs'
                    : 'bg-white hover:bg-[#FBF0E6] border-[#ECC4A6]/80 text-[#2E271F]'
                }`}
              >
                <span>{fuel}</span>
                {isSelected && <Check className="w-3.5 h-3.5 text-white" />}
              </button>
            );
          })}
        </div>
      </div>

      {/* 4. Transmission */}
      <div>
        <label className="text-xs font-extrabold uppercase tracking-wider text-[#4F4335] flex items-center gap-1.5 mb-2.5">
          <Settings2 className="w-3.5 h-3.5 text-[#D27848]" />
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
                    ? 'bg-[#D27848] border-[#D27848] text-white shadow-xs'
                    : 'bg-white hover:bg-[#FBF0E6] border-[#ECC4A6]/80 text-[#2E271F]'
                }`}
              >
                <span>{trans}</span>
                {isSelected && <Check className="w-3.5 h-3.5 text-white" />}
              </button>
            );
          })}
        </div>
      </div>

      {/* 5. Brands / Make */}
      <div>
        <label className="text-xs font-extrabold uppercase tracking-wider text-[#4F4335] flex items-center gap-1.5 mb-2.5">
          <Sparkles className="w-3.5 h-3.5 text-[#D27848]" />
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
                    ? 'bg-[#D27848] border-[#D27848] text-white shadow-xs'
                    : 'bg-white hover:bg-[#FBF0E6] border-[#ECC4A6]/80 text-[#2E271F]'
                }`}
              >
                <span>{brand}</span>
                {isSelected && <Check className="w-3.5 h-3.5 text-white" />}
              </button>
            );
          })}
        </div>
      </div>

      {/* 6. Ownership */}
      <div>
        <label className="text-xs font-extrabold uppercase tracking-wider text-[#4F4335] flex items-center gap-1.5 mb-2.5">
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
                    ? 'bg-[#D27848] border-[#D27848] text-white shadow-xs'
                    : 'bg-white hover:bg-[#FBF0E6] border-[#ECC4A6]/80 text-[#2E271F]'
                }`}
              >
                <span>{owner}</span>
                {isSelected && <Check className="w-3.5 h-3.5 text-white" />}
              </button>
            );
          })}
        </div>
      </div>

      {/* Kundapura Notice Note */}
      <div className="p-3 bg-[#241A15] text-[#DFCFBA] rounded-xl text-[11px] border border-[#451E10] leading-relaxed">
        <strong className="text-[#FDF8F4]">Kundapura Certified:</strong> All cars are physically parked at Kundapura hubs with active Karnataka RTO clearance.
      </div>
    </div>
  );

  if (isMobileModal) {
    return (
      <div className="fixed inset-0 z-50 flex flex-col bg-[#FAF7F2] overflow-hidden animate-slide-up">
        <div className="p-4 border-b border-[#ECC4A6]/60 flex items-center justify-between bg-[#241A15] text-white">
          <div className="font-extrabold text-[#FDF8F4] text-base flex items-center gap-2">
            <SlidersHorizontal className="w-4 h-4 text-[#D27848]" />
            <span>Filter Cars</span>
          </div>
          <button
            onClick={onCloseMobileModal}
            className="p-1.5 text-[#DFCFBA] hover:text-white rounded-full bg-[#17100D] border border-[#451E10]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto p-4">
          {content}
        </div>

        <div className="p-4 border-t border-[#ECC4A6]/60 bg-[#FAF7F2] flex gap-3">
          {hasActiveFilters && (
            <button
              onClick={onResetFilters}
              className="px-4 py-3 border border-[#ECC4A6] text-[#74351B] text-xs font-bold rounded-xl hover:bg-[#FBF0E6]"
            >
              Reset
            </button>
          )}
          <button
            onClick={onCloseMobileModal}
            className="flex-1 py-3 bg-[#D27848] text-white hover:bg-[#B95C2E] text-xs font-black rounded-xl shadow-md"
          >
            Show {totalResults} Certified Cars
          </button>
        </div>
      </div>
    );
  }

  return (
    <aside className="fixed left-0 top-16 sm:top-20 bottom-0 w-72 lg:w-80 bg-[#FDF8F4] p-5 border-r border-[#ECC4A6]/60 overflow-y-auto overscroll-contain z-30 shadow-subtle">
      {content}
    </aside>
  );
};

