import React from 'react';
import { 
  X, 
  Heart, 
  Trash2, 
  ArrowRight
} from 'lucide-react';
import { Car } from '../types/car';
import { formatPrice, formatKm } from '../utils/formatters';

interface WishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  wishlistCars: Car[];
  onRemoveWishlist: (carId: string) => void;
  onSelectCar: (car: Car) => void;
  onBookTestDrive: (car: Car) => void;
}

export const WishlistDrawer: React.FC<WishlistDrawerProps> = ({
  isOpen,
  onClose,
  wishlistCars,
  onRemoveWishlist,
  onSelectCar,
  onBookTestDrive
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-[#17100D]/70 backdrop-blur-xs flex justify-end animate-fade-in">
      <div className="w-full max-w-md bg-[#FAF7F2] h-full shadow-2xl flex flex-col animate-slide-up sm:animate-none border-l border-[#ECC4A6]">
        
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-[#ECC4A6]/60 flex items-center justify-between bg-[#FDF8F4]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-[#241A15] text-[#D27848] flex items-center justify-center border border-[#451E10]">
              <Heart className="w-4 h-4 fill-[#D27848] text-[#D27848]" />
            </div>
            <div>
              <h3 className="font-extrabold text-[#2E271F] text-sm sm:text-base">
                Saved Cars ({wishlistCars.length})
              </h3>
              <p className="text-[11px] text-[#8B785F]">
                Your shortlisted Kundapura certified vehicles
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-[#8B785F] hover:text-[#2E271F] rounded-full bg-white border border-[#ECC4A6] transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Saved List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {wishlistCars.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 text-[#AA957A]">
              <div className="w-16 h-16 rounded-full bg-[#FBF0E6] flex items-center justify-center mb-3 border border-[#ECC4A6]">
                <Heart className="w-8 h-8 text-[#D27848]" />
              </div>
              <h4 className="text-sm font-bold text-[#2E271F] mb-1">
                No Saved Cars Yet
              </h4>
              <p className="text-xs text-[#8B785F] max-w-xs mb-4">
                Click the heart icon on any car card to save it for easy comparison and booking.
              </p>
              <button
                onClick={onClose}
                className="px-4 py-2 bg-[#D27848] hover:bg-[#B95C2E] text-white text-xs font-bold rounded-xl shadow-subtle transition-colors"
              >
                Explore Cars
              </button>
            </div>
          ) : (
            wishlistCars.map((car) => (
              <div
                key={car.id}
                className="group p-3 rounded-2xl bg-white hover:bg-[#FDF8F4] border border-[#ECC4A6]/70 hover:border-[#D27848] transition-all flex gap-3 shadow-2xs"
              >
                <img
                  src={car.images[0]}
                  alt={car.title}
                  className="w-24 h-20 object-cover rounded-xl shrink-0 cursor-pointer"
                  onClick={() => {
                    onClose();
                    onSelectCar(car);
                  }}
                />

                <div className="flex-1 min-w-0 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-1">
                      <h4 
                        onClick={() => {
                          onClose();
                          onSelectCar(car);
                        }}
                        className="text-xs font-bold text-[#2E271F] truncate hover:text-[#D27848] cursor-pointer"
                      >
                        {car.title}
                      </h4>
                      <button
                        onClick={() => onRemoveWishlist(car.id)}
                        className="p-1 text-[#AA957A] hover:text-[#D27848] transition-colors"
                        title="Remove"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="text-[11px] text-[#8B785F] truncate">
                      {formatKm(car.kilometers)} • {car.fuelType} • {car.transmission}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <span className="text-xs font-black text-[#2E271F]">
                      {formatPrice(car.price)}
                    </span>

                    <button
                      onClick={() => {
                        onClose();
                        onBookTestDrive(car);
                      }}
                      className="px-2.5 py-1 bg-[#D27848] hover:bg-[#B95C2E] text-white text-[10px] font-bold rounded-lg flex items-center gap-1 transition-colors"
                    >
                      <span>Test Drive</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer info */}
        {wishlistCars.length > 0 && (
          <div className="p-4 border-t border-[#ECC4A6]/60 bg-[#FDF8F4] text-xs text-[#8B785F] flex items-center justify-between">
            <span className="text-[11px] font-semibold text-[#74351B]">📍 Parked at Kundapura Hubs</span>
            <button
              onClick={onClose}
              className="text-xs font-bold text-[#D27848] hover:underline"
            >
              Continue Browsing
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

