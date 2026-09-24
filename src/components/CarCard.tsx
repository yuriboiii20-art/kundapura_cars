import React, { useState } from 'react';
import { 
  Heart, 
  Share2,
  ChevronLeft, 
  ChevronRight, 
  MapPin,
  ShieldCheck
} from 'lucide-react';
import { Car } from '@/types/car';
import { formatPrice, formatShortKm, formatShortRto } from '@/utils/formatters';
import { shareCar } from '@/utils/shareCar';

interface CarCardProps {
  car: Car;
  isWishlisted: boolean;
  onToggleWishlist: (carId: string) => void;
  isCompared?: boolean;
  onToggleCompare?: (car: Car) => void;
  onSelectCar: (car: Car) => void;
}

export const CarCard: React.FC<CarCardProps> = ({
  car,
  isWishlisted,
  onToggleWishlist,
  onSelectCar
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [copiedLink, setCopiedLink] = useState(false);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % car.images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + car.images.length) % car.images.length);
  };

  const handleShare = async (e: React.MouseEvent) => {
    e.stopPropagation();
    const result = await shareCar(car);
    if (result.status === 'copied') {
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  return (
    <div 
      onClick={() => onSelectCar(car)}
      className="group bg-white rounded-2xl border border-[#EBD7C7] hover:border-[#D27848] shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col overflow-hidden cursor-pointer relative"
    >
      {/* Top Image Section */}
      <div className="relative aspect-[16/10] bg-gradient-to-b from-[#FBF0E6] via-[#FDF8F4] to-[#FAF7F2] overflow-hidden flex items-center justify-center">
        {car.images && car.images.length > 0 ? (
          <img
            src={car.images[currentImageIndex] || car.images[0]}
            alt={car.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            loading="lazy"
          />
        ) : (
          <div className="flex flex-col items-center justify-center text-[#AA957A] gap-1 p-4">
            <span className="text-2xl">🚗</span>
            <span className="text-[11px] font-bold">Photo Pending</span>
          </div>
        )}

        {/* Top Badges */}
        <div className="absolute top-2.5 left-2.5 z-10 flex items-center gap-1.5">
          <span className="px-2 py-0.5 rounded-md bg-white/95 backdrop-blur-xs text-[#74351B] text-[11px] font-bold shadow-2xs border border-[#ECC4A6]/60 flex items-center gap-1">
            <ShieldCheck className="w-3 h-3 text-[#D27848]" />
            <span>Assured {car.inspectionScore}</span>
          </span>
          <span className="px-1.5 py-0.5 rounded-md bg-[#241A15]/80 backdrop-blur-xs text-white text-[10px] font-bold shadow-2xs">
            {car.year}
          </span>
        </div>

        {/* Action Buttons (Share & Wishlist) */}
        <div className="absolute top-2.5 right-2.5 z-10 flex items-center gap-1.5">
          {/* Share Button */}
          <div className="relative">
            <button
              onClick={handleShare}
              className="p-1.5 rounded-full bg-white/90 hover:bg-white backdrop-blur-xs text-[#74351B] transition-all active:scale-90 hover:scale-110 shadow-2xs"
              title="Share Car"
              aria-label="Share Car"
            >
              <Share2 className="w-3.5 h-3.5 text-[#74351B]" />
            </button>
            {copiedLink && (
              <span className="absolute -bottom-6 right-0 text-[10px] bg-[#241A15] text-[#FDF8F4] px-2 py-0.5 rounded shadow whitespace-nowrap z-30 animate-fade-in font-bold">
                Copied!
              </span>
            )}
          </div>

          {/* Wishlist Heart Icon Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleWishlist(car.id);
            }}
            className="p-1.5 rounded-full bg-white/90 hover:bg-white backdrop-blur-xs text-[#74351B] transition-all active:scale-90 hover:scale-110 shadow-2xs"
            title={isWishlisted ? 'Remove from Saved' : 'Save Car'}
            aria-label={isWishlisted ? 'Remove from Saved' : 'Save Car'}
          >
            <Heart 
              className={`w-3.5 h-3.5 transition-colors ${
                isWishlisted ? 'fill-[#D27848] text-[#D27848]' : 'text-[#74351B] stroke-[2]'
              }`} 
            />
          </button>
        </div>

        {/* Image navigation arrows (when multiple images exist) */}
        {car.images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-1.5 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white/90 hover:bg-white text-[#2E271F] opacity-70 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity flex items-center justify-center z-10 shadow-xs"
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-1.5 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-white/90 hover:bg-white text-[#2E271F] opacity-70 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity flex items-center justify-center z-10 shadow-xs"
              aria-label="Next photo"
            >
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </>
        )}

        {/* Carousel Dots (when multiple images exist) */}
        {car.images.length > 1 && (
          <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 flex items-center gap-1 z-10">
            {car.images.map((_, i) => (
              <span
                key={i}
                className={`h-1 rounded-full transition-all ${
                  i === currentImageIndex ? 'w-3 bg-[#D27848]' : 'w-1 bg-white/70'
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="p-3.5 flex-1 flex flex-col justify-between">
        <div>
          {/* Title */}
          <h3 className="font-extrabold text-[15px] text-[#2E271F] tracking-tight line-clamp-1 group-hover:text-[#D27848] transition-colors">
            {car.year} {car.brand} {car.model}
          </h3>

          {/* Variant Trim */}
          <p className="text-[11px] text-[#8B785F] font-medium line-clamp-1 mt-0.5">
            {car.variant}
          </p>

          {/* Key Specs Pill Row */}
          <div className="flex items-center gap-1.5 text-[11px] text-[#6D5D49] font-semibold my-2.5 flex-wrap">
            <span className="px-2 py-0.5 rounded-md bg-[#FBF0E6] text-[#74351B] border border-[#F3DFC9]">
              {formatShortKm(car.kilometers)}
            </span>
            <span className="px-2 py-0.5 rounded-md bg-[#FBF0E6] text-[#74351B] border border-[#F3DFC9]">
              {car.fuelType}
            </span>
            <span className="px-2 py-0.5 rounded-md bg-[#FBF0E6] text-[#74351B] border border-[#F3DFC9]">
              {car.transmission}
            </span>
            <span className="px-2 py-0.5 rounded-md bg-[#FBF0E6] text-[#74351B] border border-[#F3DFC9]">
              {formatShortRto(car.rto)}
            </span>
          </div>

          {/* Hub Location */}
          <div className="flex items-center gap-1 text-[11px] text-[#8B785F] truncate">
            <MapPin className="w-3 h-3 text-[#D27848] shrink-0" />
            <span className="truncate">{car.hubLocation}</span>
          </div>
        </div>

        {/* Price & EMI Bottom Row */}
        <div className="pt-2.5 mt-2.5 border-t border-[#F0E2D4] flex items-center justify-between">
          <div>
            <div className="text-[10px] text-[#8B785F] font-medium uppercase tracking-wider leading-none mb-0.5">Fixed Price</div>
            <div className="text-base font-black text-[#2E271F] leading-none">
              {formatPrice(car.price)}
            </div>
          </div>

          <div className="text-right">
            <span className="inline-block text-[11px] font-bold text-[#D27848] bg-[#FDF3EA] px-2 py-0.5 rounded-md border border-[#ECC4A6]/60">
              EMI ₹{Math.round(car.emiStarting / 1000)}k/mo
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
