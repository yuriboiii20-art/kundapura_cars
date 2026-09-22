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
    <div className="fixed inset-0 z-50 overflow-hidden bg-slate-900/60 backdrop-blur-xs flex justify-end animate-fade-in">
      <div className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col animate-slide-up sm:animate-none">
        
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-rose-50 text-rose-500 flex items-center justify-center">
              <Heart className="w-4 h-4 fill-rose-500" />
            </div>
            <div>
              <h3 className="font-extrabold text-slate-900 text-sm sm:text-base">
                Saved Cars ({wishlistCars.length})
              </h3>
              <p className="text-[11px] text-slate-500">
                Your shortlisted Bangalore certified vehicles
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-800 rounded-full bg-white border border-slate-200 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Saved List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {wishlistCars.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 text-slate-400">
              <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mb-3">
                <Heart className="w-8 h-8 text-slate-300" />
              </div>
              <h4 className="text-sm font-bold text-slate-800 mb-1">
                No Saved Cars Yet
              </h4>
              <p className="text-xs text-slate-500 max-w-xs mb-4">
                Click the heart icon on any car card to save it for easy comparison and booking.
              </p>
              <button
                onClick={onClose}
                className="px-4 py-2 bg-brand-600 text-white text-xs font-bold rounded-xl shadow-sm"
              >
                Explore Cars
              </button>
            </div>
          ) : (
            wishlistCars.map((car) => (
              <div
                key={car.id}
                className="group p-3 rounded-2xl bg-slate-50 hover:bg-white border border-slate-200 hover:border-brand-300 transition-all flex gap-3 shadow-2xs"
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
                        className="text-xs font-bold text-slate-900 truncate hover:text-brand-600 cursor-pointer"
                      >
                        {car.title}
                      </h4>
                      <button
                        onClick={() => onRemoveWishlist(car.id)}
                        className="p-1 text-slate-400 hover:text-rose-500"
                        title="Remove"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="text-[11px] text-slate-500 truncate">
                      {formatKm(car.kilometers)} • {car.fuelType} • {car.transmission}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <span className="text-xs font-black text-slate-900">
                      {formatPrice(car.price)}
                    </span>

                    <button
                      onClick={() => {
                        onClose();
                        onBookTestDrive(car);
                      }}
                      className="px-2.5 py-1 bg-brand-600 hover:bg-brand-700 text-white text-[10px] font-bold rounded-lg flex items-center gap-1"
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
          <div className="p-4 border-t border-slate-200 bg-slate-50 text-xs text-slate-600 flex items-center justify-between">
            <span className="text-[11px] font-semibold">📍 All cars parked at Bangalore Hubs</span>
            <button
              onClick={onClose}
              className="text-xs font-bold text-brand-600 hover:underline"
            >
              Continue Browsing
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
