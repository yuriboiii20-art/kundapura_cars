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
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/75 backdrop-blur-sm flex justify-center p-3 sm:p-6 animate-fade-in">
      
      <div className="bg-white w-full max-w-6xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-auto flex flex-col max-h-[92vh]">
        
        {/* Modal Header */}
        <div className="p-4 sm:p-5 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center">
              <Layers className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-extrabold text-slate-900 text-sm sm:text-base">
                Side-by-Side Car Comparison ({cars.length} Cars)
              </h3>
              <p className="text-[11px] text-slate-500">
                Compare specs, inspection ratings and Bangalore pricing
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

        {/* Scrollable Table View */}
        <div className="flex-1 overflow-x-auto overflow-y-auto p-4 sm:p-6">
          <table className="w-full text-left border-collapse min-w-[650px]">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="p-3 text-xs font-bold text-slate-400 uppercase w-48">Vehicle</th>
                {cars.map((car) => (
                  <th key={car.id} className="p-3 w-72 align-top">
                    <div className="relative group bg-slate-50 p-3 rounded-2xl border border-slate-200 space-y-2">
                      <button
                        onClick={() => onRemoveCar(car.id)}
                        className="absolute top-2 right-2 p-1.5 bg-white hover:bg-rose-50 text-slate-400 hover:text-rose-600 rounded-full shadow-xs border border-slate-200"
                        title="Remove from comparison"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                      <img
                        src={car.images[0]}
                        alt={car.title}
                        className="w-full h-32 object-cover rounded-xl"
                      />
                      <div className="text-xs font-black text-slate-900 line-clamp-1">{car.title}</div>
                      <div className="text-[11px] text-slate-500 font-medium line-clamp-1">{car.variant}</div>
                      <div className="text-base font-black text-slate-900">{formatPrice(car.price)}</div>
                      
                      <div className="pt-2 flex gap-1.5">
                        <button
                          onClick={() => {
                            onClose();
                            onSelectCar(car);
                          }}
                          className="flex-1 py-1.5 bg-white hover:bg-slate-100 text-slate-800 text-[11px] font-bold rounded-lg border border-slate-200"
                        >
                          View Details
                        </button>
                        <button
                          onClick={() => {
                            onClose();
                            onBookTestDrive(car);
                          }}
                          className="py-1.5 px-2.5 bg-brand-600 hover:bg-brand-700 text-white text-[11px] font-extrabold rounded-lg"
                        >
                          Test Drive
                        </button>
                      </div>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100 text-xs text-slate-700">
              
              {/* Inspection Rating */}
              <tr className="hover:bg-slate-50/60">
                <td className="p-3 font-bold text-slate-900 bg-slate-50/50">Inspection Score</td>
                {cars.map((car) => (
                  <td key={car.id} className="p-3">
                    <span className="badge-pill bg-emerald-50 text-emerald-800 border border-emerald-200">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                      {car.inspectionScore}/10 (200 Pts)
                    </span>
                  </td>
                ))}
              </tr>

              {/* Monthly EMI */}
              <tr className="hover:bg-slate-50/60">
                <td className="p-3 font-bold text-slate-900 bg-slate-50/50">EMI From</td>
                {cars.map((car) => (
                  <td key={car.id} className="p-3 font-extrabold text-brand-600">
                    {formatIndianCurrency(car.emiStarting)} / mo
                  </td>
                ))}
              </tr>

              {/* Kilometers Driven */}
              <tr className="hover:bg-slate-50/60">
                <td className="p-3 font-bold text-slate-900 bg-slate-50/50">KM Driven</td>
                {cars.map((car) => (
                  <td key={car.id} className="p-3 font-semibold">{formatKm(car.kilometers)}</td>
                ))}
              </tr>

              {/* Fuel & Transmission */}
              <tr className="hover:bg-slate-50/60">
                <td className="p-3 font-bold text-slate-900 bg-slate-50/50">Fuel &amp; Transmission</td>
                {cars.map((car) => (
                  <td key={car.id} className="p-3 font-semibold">
                    {car.fuelType} • {car.transmission}
                  </td>
                ))}
              </tr>

              {/* Mileage */}
              <tr className="hover:bg-slate-50/60">
                <td className="p-3 font-bold text-slate-900 bg-slate-50/50">ARAI Mileage</td>
                {cars.map((car) => (
                  <td key={car.id} className="p-3 font-semibold">{car.specs.mileageARAI}</td>
                ))}
              </tr>

              {/* Engine */}
              <tr className="hover:bg-slate-50/60">
                <td className="p-3 font-bold text-slate-900 bg-slate-50/50">Engine / Power</td>
                {cars.map((car) => (
                  <td key={car.id} className="p-3">{car.specs.maxPower} ({car.specs.engineCapacity})</td>
                ))}
              </tr>

              {/* Safety */}
              <tr className="hover:bg-slate-50/60">
                <td className="p-3 font-bold text-slate-900 bg-slate-50/50">Airbags</td>
                {cars.map((car) => (
                  <td key={car.id} className="p-3 font-bold text-slate-900">{car.specs.airbags} Airbags</td>
                ))}
              </tr>

              {/* Sunroof */}
              <tr className="hover:bg-slate-50/60">
                <td className="p-3 font-bold text-slate-900 bg-slate-50/50">Sunroof</td>
                {cars.map((car) => (
                  <td key={car.id} className="p-3">{car.specs.sunroof}</td>
                ))}
              </tr>

              {/* Boot Space */}
              <tr className="hover:bg-slate-50/60">
                <td className="p-3 font-bold text-slate-900 bg-slate-50/50">Boot Capacity</td>
                {cars.map((car) => (
                  <td key={car.id} className="p-3">{car.specs.bootSpace}</td>
                ))}
              </tr>

              {/* RTO / Registration */}
              <tr className="hover:bg-slate-50/60">
                <td className="p-3 font-bold text-slate-900 bg-slate-50/50">RTO Location</td>
                {cars.map((car) => (
                  <td key={car.id} className="p-3 font-semibold">{car.rto}</td>
                ))}
              </tr>

              {/* Hub */}
              <tr className="hover:bg-slate-50/60">
                <td className="p-3 font-bold text-slate-900 bg-slate-50/50">Bangalore Hub</td>
                {cars.map((car) => (
                  <td key={car.id} className="p-3 font-medium text-brand-700">{car.hubLocation}</td>
                ))}
              </tr>

            </tbody>
          </table>
        </div>

      </div>

    </div>
  );
};
