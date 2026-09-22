import React, { useState } from 'react';
import { 
  Heart, 
  ChevronLeft, 
  ChevronRight
} from 'lucide-react';
import { Car } from '@/types/car';
import { formatPrice, formatShortKm, formatShortRto } from '@/utils/formatters';

interface CarCardProps {
  car: Car;
  isWishlisted: boolean;
  onToggleWishlist: (carId: string) => void;
  isCompared?: boolean;
  onToggleCompare?: (car: Car) => void;
  onSelectCar: (car: Car) => void;
  onBookTestDrive?: (car: Car) => void;
}

export const CarCard: React.FC<CarCardProps> = ({
  car,
  isWishlisted,
  onToggleWishlist,
  onSelectCar
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % car.images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + car.images.length) % car.images.length);
  };

  const qualityTag = car.tags?.[0] || 'High quality, less driven';

  return (
    <div 
      onClick={() => onSelectCar(car)}
      className="group bg-white rounded-3xl border border-[#ECC4A6]/70 shadow-subtle hover:shadow-hover hover:border-[#D27848] transition-all duration-300 flex flex-col overflow-hidden cursor-pointer relative"
    >
      
      {/* Top Image Section with soft peach / apricot-tinted backdrop & Heart Icon */}
      <div className="relative aspect-[16/10] bg-gradient-to-b from-[#FBF0E6] via-[#FDF8F4] to-[#FAF7F2] overflow-hidden">
        <img
          src={car.images[currentImageIndex]}
          alt={car.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          loading="lazy"
        />

        {/* Wishlist Heart Icon Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleWishlist(car.id);
          }}
          className="absolute top-3.5 right-3.5 z-10 p-1.5 rounded-full bg-white/80 hover:bg-white backdrop-blur-xs text-[#74351B] transition-transform active:scale-90 hover:scale-110 shadow-2xs"
          title={isWishlisted ? 'Remove from Saved' : 'Save Car'}
        >
          <Heart 
            className={`w-5 h-5 transition-colors ${
              isWishlisted ? 'fill-[#D27848] text-[#D27848]' : 'text-[#74351B] stroke-[2]'
            }`} 
          />
        </button>

        {/* Image navigation arrows on hover */}
        {car.images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-white/90 hover:bg-white text-[#2E271F] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10 shadow-sm"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-white/90 hover:bg-white text-[#2E271F] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10 shadow-sm"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </>
        )}

        {/* Carousel Dots */}
        {car.images.length > 1 && (
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1 z-10">
            {car.images.map((_, i) => (
              <span
                key={i}
                className={`h-1.5 rounded-full transition-all ${
                  i === currentImageIndex ? 'w-3.5 bg-[#D27848]' : 'w-1.5 bg-[#D27848]/30'
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Card Content Body */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        
        <div>
          {/* Row 1: Year Brand Model & Price */}
          <div className="flex items-baseline justify-between gap-2 mb-0.5">
            <h3 className="font-extrabold text-base sm:text-[17px] text-[#2E271F] tracking-tight line-clamp-1 group-hover:text-[#D27848] transition-colors">
              {car.year} {car.brand} {car.model}
            </h3>
            <span className="font-extrabold text-base sm:text-[17px] text-[#2E271F] shrink-0">
              {formatPrice(car.price)}
            </span>
          </div>

          {/* Row 2: Variant & EMI */}
          <div className="flex items-baseline justify-between gap-2 mb-3">
            <p className="text-xs text-[#8B785F] font-medium line-clamp-1">
              {car.variant}
            </p>
            <span className="text-xs text-[#6D5D49] font-medium shrink-0">
              EMI ₹ {car.emiStarting.toLocaleString('en-IN')}/m*
            </span>
          </div>

          {/* Row 3: Specifications Badges Pills in Soft Peach */}
          <div className="flex items-center gap-1.5 flex-wrap mb-3.5">
            <span className="px-2.5 py-1 bg-[#FDF3EA] text-[#74351B] text-[11px] sm:text-xs font-semibold rounded-full border border-[#F3DFC9]">
              {formatShortKm(car.kilometers)}
            </span>
            <span className="px-2.5 py-1 bg-[#FDF3EA] text-[#74351B] text-[11px] sm:text-xs font-semibold rounded-full border border-[#F3DFC9]">
              {car.fuelType}
            </span>
            <span className="px-2.5 py-1 bg-[#FDF3EA] text-[#74351B] text-[11px] sm:text-xs font-semibold rounded-full border border-[#F3DFC9]">
              {car.transmission}
            </span>
            <span className="px-2.5 py-1 bg-[#FDF3EA] text-[#74351B] text-[11px] sm:text-xs font-semibold rounded-full border border-[#F3DFC9]">
              {formatShortRto(car.rto)}
            </span>
          </div>

          {/* Row 4: Bangalore Hub Location */}
          <div className="flex items-center gap-1.5 text-xs text-[#8B785F] font-medium mb-3">
            <span className="inline-flex items-center justify-center w-4 h-4 rounded-xs border border-[#ECC4A6] bg-[#FBF0E6] text-[8px] font-black text-[#74351B]">
              S
            </span>
            <span className="font-bold text-[#74351B]">HUB</span>
            <span>•</span>
            <span className="truncate">{car.hubLocation}</span>
          </div>
        </div>

        {/* Card Bottom Bar (Separated by border) */}
        <div className="pt-3 border-t border-[#ECC4A6]/50 flex items-center justify-between">
          <span className="text-xs font-medium text-[#8B785F] truncate">
            {qualityTag}
          </span>

          <span className="inline-flex items-center gap-1 text-xs font-extrabold text-[#D27848] shrink-0">
            <svg className="w-3.5 h-3.5 text-[#D27848]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
            </svg>
            <span>Assured</span>
          </span>
        </div>

      </div>

    </div>
  );
};


