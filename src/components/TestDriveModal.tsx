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
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#17100D]/75 backdrop-blur-sm flex justify-center p-3 sm:p-6 animate-fade-in">
      
      <div className="bg-[#FAF7F2] w-full max-w-lg rounded-3xl shadow-2xl border border-[#ECC4A6] overflow-hidden my-auto relative animate-slide-up">
        
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-[#ECC4A6]/60 flex items-center justify-between bg-[#FDF8F4]">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-[#241A15] text-[#D27848] flex items-center justify-center border border-[#451E10]">
              <CarIcon className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-extrabold text-[#2E271F] text-sm sm:text-base">
                Book Free Test Drive
              </h3>
              <p className="text-[11px] text-[#8B785F]">
                100% Free • No Obligation • Bangalore Service
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

        {/* Modal Content */}
        {!isBooked ? (
          <form onSubmit={handleSubmit} className="p-5 sm:p-6 space-y-4">
            
            {/* Selected Car Card Preview */}
            <div className="flex items-center gap-3 p-3 rounded-2xl bg-white border border-[#ECC4A6]/70 shadow-2xs">
              <img
                src={car.images[0]}
                alt={car.title}
                className="w-16 h-14 object-cover rounded-xl shrink-0"
              />
              <div className="flex-1 min-w-0">
                <div className="text-xs font-bold text-[#2E271F] truncate">
                  {car.title}
                </div>
                <div className="text-[11px] text-[#8B785F] font-medium truncate">
                  {car.variant}
                </div>
                <div className="text-xs font-black text-[#D27848]">
                  {formatPrice(car.price)}
                </div>
              </div>
            </div>

            {/* Hub vs Home Test Drive Toggle */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-[#74351B] block mb-2">
                Choose Test Drive Location
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setDeliveryType('hub')}
                  className={`p-3 rounded-2xl border text-xs font-bold flex flex-col items-center gap-1 transition-all ${
                    deliveryType === 'hub'
                      ? 'bg-[#D27848] border-[#B95C2E] text-white shadow-xs'
                      : 'bg-white border-[#ECC4A6] text-[#74351B] hover:bg-[#FDF8F4]'
                  }`}
                >
                  <Building2 className="w-4 h-4" />
                  <span>At Bangalore Hub</span>
                  <span className="text-[10px] opacity-80 font-normal">VIP Test Drive Lounge</span>
                </button>

                <button
                  type="button"
                  onClick={() => setDeliveryType('home')}
                  className={`p-3 rounded-2xl border text-xs font-bold flex flex-col items-center gap-1 transition-all ${
                    deliveryType === 'home'
                      ? 'bg-[#D27848] border-[#B95C2E] text-white shadow-xs'
                      : 'bg-white border-[#ECC4A6] text-[#74351B] hover:bg-[#FDF8F4]'
                  }`}
                >
                  <Home className="w-4 h-4" />
                  <span>Doorstep Delivery</span>
                  <span className="text-[10px] font-bold">Free in Bengaluru</span>
                </button>
              </div>
            </div>

            {/* Hub selection or Area selection */}
            {deliveryType === 'hub' ? (
              <div className="p-3 bg-[#FDF8F4] rounded-2xl border border-[#ECC4A6] text-xs text-[#6D5D49]">
                <div className="font-bold text-[#2E271F] flex items-center gap-1.5 mb-1">
                  <MapPin className="w-3.5 h-3.5 text-[#D27848]" />
                  <span>Assigned Hub: {car.hubLocation}</span>
                </div>
                <div className="text-[11px] text-[#8B785F]">
                  Complimentary coffee &amp; private test drive circuit ready for you.
                </div>
              </div>
            ) : (
              <div>
                <label className="text-xs font-bold text-[#2E271F] block mb-1">
                  Select Bengaluru Area / Landmark
                </label>
                <select
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                  className="w-full p-2.5 bg-white text-xs font-semibold text-[#2E271F] rounded-xl border border-[#ECC4A6] focus:border-[#D27848] outline-none"
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
                <label className="text-xs font-bold text-[#2E271F] block mb-1 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-[#D27848]" />
                  Preferred Date
                </label>
                <select
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full p-2.5 bg-white text-xs font-semibold text-[#2E271F] rounded-xl border border-[#ECC4A6] focus:border-[#D27848] outline-none"
                >
                  <option value="Today">Today (Instant)</option>
                  <option value="Tomorrow">Tomorrow</option>
                  <option value="This Weekend (Saturday)">This Saturday</option>
                  <option value="This Weekend (Sunday)">This Sunday</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-bold text-[#2E271F] block mb-1 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-[#D27848]" />
                  Time Slot
                </label>
                <select
                  value={timeSlot}
                  onChange={(e) => setTimeSlot(e.target.value)}
                  className="w-full p-2.5 bg-white text-xs font-semibold text-[#2E271F] rounded-xl border border-[#ECC4A6] focus:border-[#D27848] outline-none"
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
                <label className="text-xs font-bold text-[#2E271F] block mb-1">
                  Your Full Name
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Rahul Sharma"
                  className="w-full p-2.5 bg-white text-xs text-[#2E271F] rounded-xl border border-[#ECC4A6] focus:border-[#D27848] outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-[#2E271F] block mb-1">
                  Mobile Number (for OTP &amp; Slot Confirmation)
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-bold text-[#AA957A]">
                    +91
                  </span>
                  <input
                    type="tel"
                    required
                    pattern="[0-9]{10}"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                    placeholder="98765 43210"
                    className="w-full pl-11 pr-3 py-2.5 bg-white text-xs text-[#2E271F] rounded-xl border border-[#ECC4A6] focus:border-[#D27848] outline-none font-semibold"
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3.5 bg-[#D27848] hover:bg-[#B95C2E] text-white text-xs font-extrabold rounded-2xl shadow-md transition-all flex items-center justify-center gap-2 mt-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>Confirm Free Test Drive Booking</span>
            </button>

            <div className="flex items-center justify-center gap-1.5 text-[10px] text-[#8B785F]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#D27848]" />
              <span>Zero spam guarantee • Bangalore Customer Desk</span>
            </div>

          </form>
        ) : (
          /* Success Screen */
          <div className="p-6 sm:p-8 text-center space-y-4 animate-fade-in">
            <div className="w-16 h-16 rounded-full bg-[#FDF3EA] text-[#D27848] flex items-center justify-center mx-auto ring-8 ring-[#FBF0E6] border border-[#ECC4A6]">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <span className="badge-pill bg-[#FDF3EA] text-[#74351B] border border-[#ECC4A6] mb-2">
                Booking Confirmed #KC-{Math.floor(100000 + Math.random() * 900000)}
              </span>
              <h4 className="text-xl font-black text-[#2E271F]">
                Your Test Drive is Scheduled!
              </h4>
              <p className="text-xs text-[#8B785F] mt-1">
                We've sent the booking voucher &amp; executive details to <strong>+91 {phone}</strong>
              </p>
            </div>

            {/* Summary Voucher Box */}
            <div className="p-4 rounded-2xl bg-white border border-[#ECC4A6] text-left text-xs space-y-2 shadow-2xs">
              <div className="flex justify-between">
                <span className="text-[#8B785F] font-medium">Car:</span>
                <span className="text-[#2E271F] font-bold">{car.title}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#8B785F] font-medium">Location:</span>
                <span className="text-[#2E271F] font-bold">
                  {deliveryType === 'hub' ? car.hubLocation : `Doorstep (${area}, Bangalore)`}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#8B785F] font-medium">Slot:</span>
                <span className="text-[#D27848] font-extrabold">{date} at {timeSlot}</span>
              </div>
            </div>

            <div className="flex items-center justify-center gap-2 p-3 bg-[#FDF8F4] rounded-2xl text-xs text-[#6D5D49] border border-[#ECC4A6]/60">
              <Phone className="w-4 h-4 text-[#D27848]" />
              <span>Hub Helpline: <strong>+91 80 4725 9900</strong></span>
            </div>

            <button
              onClick={onClose}
              className="w-full py-3 bg-[#D27848] hover:bg-[#B95C2E] text-white text-xs font-bold rounded-2xl transition-all shadow-subtle"
            >
              Done &amp; Browse More Cars
            </button>
          </div>
        )}

      </div>

    </div>
  );
};
