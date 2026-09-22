import React from 'react';
import { 
  X, 
  Layers, 
  Trash2, 
  ShieldCheck
} from 'lucide-react';
import { Car } from '../types/car';
import { formatPrice, formatKm, formatIndianCurrency } from '../utils/formatters';

interface CompareModalProps {
  cars: Car[];
  onClose: () => void;
  onRemoveCar: (carId: string) => void;
  onSelectCar: (car: Car) => void;
  onBookTestDrive: (car: Car) => void;
}

export const CompareModal: React.FC<CompareModalProps> = ({
  cars,
  onClose,
  onRemoveCar,
  onSelectCar,
  onBookTestDrive
}) => {
  if (cars.length === 0) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#17100D]/80 backdrop-blur-sm flex justify-center p-0 sm:p-4 md:p-6 animate-fade-in">
      
      <div className="bg-[#FAF7F2] w-full max-w-6xl h-full sm:h-auto rounded-none sm:rounded-3xl shadow-2xl border-0 sm:border border-[#ECC4A6] overflow-hidden my-0 sm:my-auto flex flex-col max-h-none sm:max-h-[92vh]">
        
        {/* Modal Header */}
        <div className="p-3.5 sm:p-5 border-b border-[#ECC4A6]/60 flex items-center justify-between bg-[#FDF8F4] shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-[#241A15] text-[#D27848] flex items-center justify-center border border-[#451E10] shrink-0">
              <Layers className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-extrabold text-[#2E271F] text-sm sm:text-base">
                Side-by-Side Comparison ({cars.length} Cars)
              </h3>
              <p className="text-[11px] text-[#8B785F]">
                Compare specs, inspection ratings and Kundapura pricing
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

        {/* Mobile Swipe Hint Banner */}
        <div className="sm:hidden px-3.5 py-1.5 bg-[#FDF3EA] border-b border-[#ECC4A6]/60 text-center text-[11px] font-bold text-[#74351B] flex items-center justify-center gap-1.5 shrink-0">
          <span>👈 Swipe horizontally to compare vehicles 👉</span>
        </div>

        {/* Scrollable Table View */}
        <div className="flex-1 overflow-x-auto overflow-y-auto p-3 sm:p-6">
          <table className="w-full text-left border-collapse min-w-[650px]">
            <thead>
              <tr className="border-b border-[#ECC4A6]/60">
                <th className="p-3 text-xs font-bold text-[#AA957A] uppercase w-48">Vehicle</th>
                {cars.map((car) => (
                  <th key={car.id} className="p-3 w-72 align-top">
                    <div className="relative group bg-white p-3 rounded-2xl border border-[#ECC4A6]/70 space-y-2 shadow-2xs">
                      <button
                        onClick={() => onRemoveCar(car.id)}
                        className="absolute top-2 right-2 p-1.5 bg-[#FBF0E6] hover:bg-[#F7DEC9] text-[#AA957A] hover:text-[#D27848] rounded-full shadow-xs border border-[#ECC4A6] transition-colors"
                        title="Remove from comparison"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                      <img
                        src={car.images[0]}
                        alt={car.title}
                        className="w-full h-32 object-cover rounded-xl"
                      />
                      <div className="text-xs font-black text-[#2E271F] line-clamp-1">{car.title}</div>
                      <div className="text-[11px] text-[#8B785F] font-medium line-clamp-1">{car.variant}</div>
                      <div className="text-base font-black text-[#2E271F]">{formatPrice(car.price)}</div>
                      
                      <div className="pt-2 flex gap-1.5">
                        <button
                          onClick={() => {
                            onClose();
                            onSelectCar(car);
                          }}
                          className="flex-1 py-1.5 bg-[#FBF0E6] hover:bg-[#F7DEC9] text-[#74351B] text-[11px] font-bold rounded-lg border border-[#ECC4A6] transition-colors"
                        >
                          View Details
                        </button>
                        <button
                          onClick={() => {
                            onClose();
                            onBookTestDrive(car);
                          }}
                          className="py-1.5 px-2.5 bg-[#D27848] hover:bg-[#B95C2E] text-white text-[11px] font-extrabold rounded-lg transition-colors shadow-2xs"
                        >
                          Test Drive
                        </button>
                      </div>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className="divide-y divide-[#ECC4A6]/40 text-xs text-[#6D5D49]">
              
              {/* Inspection Rating */}
              <tr className="hover:bg-[#FDF8F4]">
                <td className="p-3 font-bold text-[#2E271F] bg-[#FDF8F4]/70">Inspection Score</td>
                {cars.map((car) => (
                  <td key={car.id} className="p-3">
                    <span className="badge-pill bg-[#FDF3EA] text-[#74351B] border border-[#ECC4A6] font-bold">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#D27848]" />
                      {car.inspectionScore}/10 (200 Pts)
                    </span>
                  </td>
                ))}
              </tr>

              {/* Monthly EMI */}
              <tr className="hover:bg-[#FDF8F4]">
                <td className="p-3 font-bold text-[#2E271F] bg-[#FDF8F4]/70">EMI From</td>
                {cars.map((car) => (
                  <td key={car.id} className="p-3 font-extrabold text-[#D27848]">
                    {formatIndianCurrency(car.emiStarting)} / mo
                  </td>
                ))}
              </tr>

              {/* Kilometers Driven */}
              <tr className="hover:bg-[#FDF8F4]">
                <td className="p-3 font-bold text-[#2E271F] bg-[#FDF8F4]/70">KM Driven</td>
                {cars.map((car) => (
                  <td key={car.id} className="p-3 font-semibold text-[#2E271F]">{formatKm(car.kilometers)}</td>
                ))}
              </tr>

              {/* Fuel & Transmission */}
              <tr className="hover:bg-[#FDF8F4]">
                <td className="p-3 font-bold text-[#2E271F] bg-[#FDF8F4]/70">Fuel &amp; Transmission</td>
                {cars.map((car) => (
                  <td key={car.id} className="p-3 font-semibold text-[#2E271F]">
                    {car.fuelType} • {car.transmission}
                  </td>
                ))}
              </tr>

              {/* Mileage */}
              <tr className="hover:bg-[#FDF8F4]">
                <td className="p-3 font-bold text-[#2E271F] bg-[#FDF8F4]/70">ARAI Mileage</td>
                {cars.map((car) => (
                  <td key={car.id} className="p-3 font-semibold text-[#2E271F]">{car.specs.mileageARAI}</td>
                ))}
              </tr>

              {/* Engine */}
              <tr className="hover:bg-[#FDF8F4]">
                <td className="p-3 font-bold text-[#2E271F] bg-[#FDF8F4]/70">Engine / Power</td>
                {cars.map((car) => (
                  <td key={car.id} className="p-3 text-[#2E271F]">{car.specs.maxPower} ({car.specs.engineCapacity})</td>
                ))}
              </tr>

              {/* Safety */}
              <tr className="hover:bg-[#FDF8F4]">
                <td className="p-3 font-bold text-[#2E271F] bg-[#FDF8F4]/70">Airbags</td>
                {cars.map((car) => (
                  <td key={car.id} className="p-3 font-bold text-[#2E271F]">{car.specs.airbags} Airbags</td>
                ))}
              </tr>

              {/* Sunroof */}
              <tr className="hover:bg-[#FDF8F4]">
                <td className="p-3 font-bold text-[#2E271F] bg-[#FDF8F4]/70">Sunroof</td>
                {cars.map((car) => (
                  <td key={car.id} className="p-3 text-[#2E271F]">{car.specs.sunroof}</td>
                ))}
              </tr>

              {/* Boot Space */}
              <tr className="hover:bg-[#FDF8F4]">
                <td className="p-3 font-bold text-[#2E271F] bg-[#FDF8F4]/70">Boot Capacity</td>
                {cars.map((car) => (
                  <td key={car.id} className="p-3 text-[#2E271F]">{car.specs.bootSpace}</td>
                ))}
              </tr>

              {/* RTO / Registration */}
              <tr className="hover:bg-[#FDF8F4]">
                <td className="p-3 font-bold text-[#2E271F] bg-[#FDF8F4]/70">RTO Location</td>
                {cars.map((car) => (
                  <td key={car.id} className="p-3 font-semibold text-[#2E271F]">{car.rto}</td>
                ))}
              </tr>

              {/* Hub */}
              <tr className="hover:bg-[#FDF8F4]">
                <td className="p-3 font-bold text-[#2E271F] bg-[#FDF8F4]/70">Kundapura Hub</td>
                {cars.map((car) => (
                  <td key={car.id} className="p-3 font-medium text-[#2E271F]">{car.hubLocation}</td>
                ))}
              </tr>

            </tbody>
          </table>
        </div>

      </div>

    </div>
  );
};

