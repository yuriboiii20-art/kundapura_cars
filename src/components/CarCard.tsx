import React, { useState } from 'react';
import { 
  Heart, 
  ChevronLeft, 
  ChevronRight, 
  MapPin, 
  ShieldCheck, 
  Sparkles, 
  Gauge, 
  Fuel, 
  Settings2,
  Calendar,
  Layers,
  ArrowRight,
  Eye
} from 'lucide-react';
import { Car } from '../types/car';
import { formatPrice, formatKm, formatIndianCurrency } from '../utils/formatters';

interface CarCardProps {
  car: Car;
  isWishlisted: boolean;
  onToggleWishlist: (carId: string) => void;
  isCompared: boolean;
  onToggleCompare: (car: Car) => void;
  onSelectCar: (car: Car) => void;
  onBookTestDrive: (car: Car) => void;
}

export const CarCard: React.FC<CarCardProps> = ({
  car,
  isWishlisted,
  onToggleWishlist,
  isCompared,
  onToggleCompare,
  onSelectCar,
  onBookTestDrive
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

  const discount = car.originalPrice ? car.originalPrice - car.price : 0;

  return (
    <div 
      onClick={() => onSelectCar(car)}
      className="group bg-white rounded-2xl border border-slate-200/90 shadow-card hover:shadow-hover hover:border-brand-300 transition-all duration-300 flex flex-col overflow-hidden cursor-pointer relative"
    >
      
      {/* Top Image Section with Carousel & Badges */}
      <div className="relative aspect-[16/10] bg-slate-100 overflow-hidden">
        <img
          src={car.images[currentImageIndex]}
          alt={car.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
          loading="lazy"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

        {/* Kundapura Assured badge */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
          <span className="badge-pill bg-white/95 backdrop-blur-md text-emerald-800 border border-emerald-200/80 shadow-xs">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Assured {car.inspectionScore}/10</span>
          </span>
          {car.trending && (
            <span className="badge-pill bg-amber-500 text-white shadow-xs">
              <Sparkles className="w-3 h-3" />
              <span>Trending</span>
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleWishlist(car.id);
          }}
          className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-white/90 backdrop-blur-md hover:bg-white text-slate-700 hover:text-rose-500 shadow-md flex items-center justify-center transition-all hover:scale-110 active:scale-95"
          title={isWishlisted ? 'Remove from Saved' : 'Save Car'}
        >
          <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-rose-500 text-rose-500' : ''}`} />
        </button>

        {/* Image navigation arrows */}
        {car.images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/40 hover:bg-black/70 text-white opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/40 hover:bg-black/70 text-white opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </>
        )}

        {/* Carousel Dots */}
        {car.images.length > 1 && (
          <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 flex items-center gap-1 z-10">
            {car.images.map((_, i) => (
              <span
                key={i}
                className={`h-1.5 rounded-full transition-all ${
                  i === currentImageIndex ? 'w-4 bg-white' : 'w-1.5 bg-white/60'
                }`}
              />
            ))}
          </div>
        )}

        {/* RTO chip bottom left */}
        <div className="absolute bottom-2.5 left-3 text-[11px] font-semibold text-white/90 drop-shadow-md flex items-center gap-1">
          <MapPin className="w-3 h-3 text-brand-300" />
          <span>{car.rto.split('(')[0]} Bangalore</span>
        </div>
      </div>

      {/* Card Content Body */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        
        <div>
          {/* Year & Title */}
          <div className="flex items-start justify-between gap-2 mb-1.5">
            <h3 className="font-extrabold text-slate-900 text-base leading-snug group-hover:text-brand-600 transition-colors line-clamp-1">
              {car.title}
            </h3>
          </div>
          
          {/* Variant subtext */}
          <p className="text-xs text-slate-500 font-medium mb-3 line-clamp-1">
            {car.variant}
          </p>

          {/* Key Specs Pills Grid */}
          <div className="grid grid-cols-2 gap-2 text-[11px] font-semibold text-slate-600 bg-slate-50 p-2.5 rounded-xl border border-slate-100 mb-3.5">
            <div className="flex items-center gap-1.5">
              <Gauge className="w-3.5 h-3.5 text-slate-400" />
              <span>{formatKm(car.kilometers)}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Fuel className="w-3.5 h-3.5 text-slate-400" />
              <span>{car.fuelType}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Settings2 className="w-3.5 h-3.5 text-slate-400" />
              <span>{car.transmission}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              <span>{car.owner}</span>
            </div>
          </div>

          {/* Location / Hub info */}
          <div className="flex items-center gap-1.5 text-[11px] font-medium text-slate-500 mb-4">
            <MapPin className="w-3.5 h-3.5 text-brand-600 shrink-0" />
            <span className="truncate">Parked at {car.hubLocation}</span>
          </div>
        </div>

        {/* Pricing & Actions */}
        <div className="pt-3 border-t border-slate-100">
          
          <div className="flex items-baseline justify-between mb-3">
            <div>
              <div className="flex items-baseline gap-2">
                <span className="text-xl sm:text-2xl font-black text-slate-900">
                  {formatPrice(car.price)}
                </span>
                {car.originalPrice && (
                  <span className="text-xs text-slate-400 line-through font-medium">
                    {formatPrice(car.originalPrice)}
                  </span>
                )}
              </div>
              {discount > 0 && (
                <div className="text-[10px] font-bold text-emerald-600">
                  Save {formatPrice(discount)}
                </div>
              )}
            </div>

            <div className="text-right">
              <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                EMI From
              </div>
              <div className="text-xs sm:text-sm font-extrabold text-brand-600">
                {formatIndianCurrency(car.emiStarting)}/mo
              </div>
            </div>
          </div>

          {/* Action Buttons & Compare Toggle */}
          <div className="flex items-center gap-2">
            
            {/* Compare Checkbox */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                onToggleCompare(car);
              }}
              className={`p-2 rounded-xl border text-xs font-bold transition-all flex items-center justify-center shrink-0 ${
                isCompared
                  ? 'bg-brand-600 text-white border-brand-600 shadow-sm'
                  : 'bg-white hover:bg-slate-50 text-slate-600 border-slate-200'
              }`}
              title="Compare with other cars"
            >
              <Layers className="w-4 h-4" />
            </button>

            {/* View Inspection Details */}
            <button
              onClick={() => onSelectCar(car)}
              className="flex-1 py-2.5 px-3 bg-slate-100 hover:bg-slate-200/80 text-slate-800 text-xs font-bold rounded-xl transition-colors flex items-center justify-center gap-1.5"
            >
              <Eye className="w-3.5 h-3.5 text-slate-600" />
              <span>Inspection &amp; Specs</span>
            </button>

            {/* Book Free Test Drive */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                onBookTestDrive(car);
              }}
              className="py-2.5 px-3.5 bg-brand-600 hover:bg-brand-700 text-white text-xs font-extrabold rounded-xl shadow-sm shadow-brand-500/20 transition-all flex items-center justify-center gap-1 shrink-0"
            >
              <span>Test Drive</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

          </div>

        </div>

      </div>

    </div>
  );
};
