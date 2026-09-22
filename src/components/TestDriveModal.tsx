import React, { useState } from 'react';
import { 
  X, 
  MapPin, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  Phone, 
  Home, 
  Building2,
  Car as CarIcon
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { Car } from '../types/car';
import { formatPrice } from '../utils/formatters';

interface TestDriveModalProps {
  car: Car;
  onClose: () => void;
}

export const TestDriveModal: React.FC<TestDriveModalProps> = ({ car, onClose }) => {
  const [deliveryType, setDeliveryType] = useState<'hub' | 'home'>('hub');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [area, setArea] = useState('Koramangala');
  const [date, setDate] = useState('Tomorrow');
  const [timeSlot, setTimeSlot] = useState('11:00 AM - 01:00 PM');
  const [isBooked, setIsBooked] = useState(false);

  const bangaloreAreas = [
    'Koramangala',
    'Indiranagar',
    'HSR Layout',
    'Whitefield',
    'Electronic City',
    'Jayanagar / JP Nagar',
    'Hebbal / Sahakar Nagar',
    'Bellandur / Sarjapur Road',
    'Malleshwaram / Rajajinagar',
    'Yelahanka / Devanahalli'
  ];

  const timeSlots = [
    '10:00 AM - 12:00 PM',
    '12:00 PM - 02:00 PM',
    '02:30 PM - 04:30 PM',
    '05:00 PM - 07:00 PM'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    // Trigger celebratory confetti
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });

    setIsBooked(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-sm flex justify-center p-3 sm:p-6 animate-fade-in">
      
      <div className="bg-white w-full max-w-lg rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-auto relative animate-slide-up">
        
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center">
              <CarIcon className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-extrabold text-slate-900 text-sm sm:text-base">
                Book Free Test Drive
              </h3>
              <p className="text-[11px] text-slate-500">
                100% Free • No Obligation • Bangalore Service
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

        {/* Modal Content */}
        {!isBooked ? (
          <form onSubmit={handleSubmit} className="p-5 sm:p-6 space-y-4">
            
            {/* Selected Car Card Preview */}
            <div className="flex items-center gap-3 p-3 rounded-2xl bg-slate-50 border border-slate-200">
              <img
                src={car.images[0]}
                alt={car.title}
                className="w-16 h-14 object-cover rounded-xl shrink-0"
              />
              <div className="flex-1 min-w-0">
                <div className="text-xs font-bold text-slate-900 truncate">
                  {car.title}
                </div>
                <div className="text-[11px] text-slate-500 font-medium truncate">
                  {car.variant}
                </div>
                <div className="text-xs font-extrabold text-brand-600">
                  {formatPrice(car.price)}
                </div>
              </div>
            </div>

            {/* Hub vs Home Test Drive Toggle */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-slate-600 block mb-2">
                Choose Test Drive Location
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setDeliveryType('hub')}
                  className={`p-3 rounded-xl border text-xs font-bold flex flex-col items-center gap-1 transition-all ${
                    deliveryType === 'hub'
                      ? 'bg-brand-50 border-brand-500 text-brand-900 shadow-xs'
                      : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <Building2 className="w-4 h-4 text-brand-600" />
                  <span>At Bangalore Hub</span>
                  <span className="text-[10px] text-slate-400 font-normal">VIP Test Drive Lounge</span>
                </button>

                <button
                  type="button"
                  onClick={() => setDeliveryType('home')}
                  className={`p-3 rounded-xl border text-xs font-bold flex flex-col items-center gap-1 transition-all ${
                    deliveryType === 'home'
                      ? 'bg-brand-50 border-brand-500 text-brand-900 shadow-xs'
                      : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <Home className="w-4 h-4 text-brand-600" />
                  <span>Doorstep Delivery</span>
                  <span className="text-[10px] text-emerald-600 font-bold">Free in Bengaluru</span>
                </button>
              </div>
            </div>

            {/* Hub selection or Area selection */}
            {deliveryType === 'hub' ? (
              <div className="p-3 bg-brand-50/50 rounded-xl border border-brand-100 text-xs text-slate-700">
                <div className="font-bold text-slate-900 flex items-center gap-1.5 mb-1">
                  <MapPin className="w-3.5 h-3.5 text-brand-600" />
                  <span>Assigned Hub: {car.hubLocation}</span>
                </div>
                <div className="text-[11px] text-slate-500">
                  Complimentary coffee &amp; private test drive circuit ready for you.
                </div>
              </div>
            ) : (
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">
                  Select Bengaluru Area / Landmark
                </label>
                <select
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                  className="w-full p-2.5 bg-slate-50 text-xs font-semibold text-slate-800 rounded-xl border border-slate-200 focus:border-brand-500 outline-none"
                >
                  {bangaloreAreas.map((a) => (
                    <option key={a} value={a}>{a}</option>
                  ))}
                </select>
              </div>
            )}

            {/* Date and Time Slot */}
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-slate-500" />
                  Preferred Date
                </label>
                <select
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full p-2.5 bg-slate-50 text-xs font-semibold text-slate-800 rounded-xl border border-slate-200 focus:border-brand-500 outline-none"
                >
                  <option value="Today">Today (Instant)</option>
                  <option value="Tomorrow">Tomorrow</option>
                  <option value="This Weekend (Saturday)">This Saturday</option>
                  <option value="This Weekend (Sunday)">This Sunday</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-slate-500" />
                  Time Slot
                </label>
                <select
                  value={timeSlot}
                  onChange={(e) => setTimeSlot(e.target.value)}
                  className="w-full p-2.5 bg-slate-50 text-xs font-semibold text-slate-800 rounded-xl border border-slate-200 focus:border-brand-500 outline-none"
                >
                  {timeSlots.map((ts) => (
                    <option key={ts} value={ts}>{ts}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Contact Details */}
            <div className="space-y-2.5 pt-1">
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">
                  Your Full Name
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Rahul Sharma"
                  className="w-full p-2.5 bg-slate-50 text-xs text-slate-900 rounded-xl border border-slate-200 focus:border-brand-500 outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">
                  Mobile Number (for OTP &amp; Slot Confirmation)
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400">
                    +91
                  </span>
                  <input
                    type="tel"
                    required
                    pattern="[0-9]{10}"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                    placeholder="98765 43210"
                    className="w-full pl-11 pr-3 py-2.5 bg-slate-50 text-xs text-slate-900 rounded-xl border border-slate-200 focus:border-brand-500 outline-none font-semibold"
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3.5 bg-brand-600 hover:bg-brand-700 text-white text-xs font-extrabold rounded-xl shadow-md shadow-brand-500/25 transition-all flex items-center justify-center gap-2 mt-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>Confirm Free Test Drive Booking</span>
            </button>

            <div className="flex items-center justify-center gap-1.5 text-[10px] text-slate-500">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Zero spam guarantee • Bangalore Customer Desk</span>
            </div>

          </form>
        ) : (
          /* Success Screen */
          <div className="p-6 sm:p-8 text-center space-y-4 animate-fade-in">
            <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto ring-8 ring-emerald-50">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <span className="badge-pill bg-emerald-50 text-emerald-800 border border-emerald-200 mb-2">
                Booking Confirmed #KC-{Math.floor(100000 + Math.random() * 900000)}
              </span>
              <h4 className="text-xl font-black text-slate-900">
                Your Test Drive is Scheduled!
              </h4>
              <p className="text-xs text-slate-600 mt-1">
                We've sent the booking voucher &amp; executive details to <strong>+91 {phone}</strong>
              </p>
            </div>

            {/* Summary Voucher Box */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-left text-xs space-y-2">
              <div className="flex justify-between">
                <span className="text-slate-500 font-medium">Car:</span>
                <span className="text-slate-900 font-bold">{car.title}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500 font-medium">Location:</span>
                <span className="text-slate-900 font-bold">
                  {deliveryType === 'hub' ? car.hubLocation : `Doorstep (${area}, Bangalore)`}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500 font-medium">Slot:</span>
                <span className="text-brand-600 font-extrabold">{date} at {timeSlot}</span>
              </div>
            </div>

            <div className="flex items-center justify-center gap-2 p-3 bg-brand-50 rounded-xl text-xs text-slate-700">
              <Phone className="w-4 h-4 text-brand-600" />
              <span>Hub Helpline: <strong>+91 80 4725 9900</strong></span>
            </div>

            <button
              onClick={onClose}
              className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl transition-all"
            >
              Done &amp; Browse More Cars
            </button>
          </div>
        )}

      </div>

    </div>
  );
};
