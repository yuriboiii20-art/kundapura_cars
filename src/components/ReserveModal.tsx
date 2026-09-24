import React, { useState } from 'react';
import { 
  X, 
  ShieldCheck, 
  Lock, 
  RotateCcw, 
  CheckCircle2, 
  CreditCard, 
  Smartphone, 
  Building2
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { Car } from '../types/car';
import { formatPrice } from '../utils/formatters';
import { useInventory } from '../context/InventoryContext';

interface ReserveModalProps {
  car: Car;
  onClose: () => void;
}

export const ReserveModal: React.FC<ReserveModalProps> = ({ car, onClose }) => {
  const { addLead } = useInventory();
  const [paymentMethod, setPaymentMethod] = useState<'upi' | 'card' | 'netbanking'>('upi');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [upiId, setUpiId] = useState('');
  const [isReserved, setIsReserved] = useState(false);

  const handleReserve = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    try {
      addLead({
        customerName: name.trim(),
        phone: phone.trim(),
        carId: car.id,
        carTitle: car.title,
        carImage: car.images[0],
        carPrice: car.price,
        type: 'reservation',
        status: 'new',
        hubLocation: car.hubLocation,
        amountPaid: 999,
        paymentMethod: `UPI (${paymentMethod.toUpperCase()})`,
        notes: `Online reservation for ₹999 token from Kundapura Cars storefront.`
      });
    } catch (err) {
      console.error('Failed to register lead', err);
    }

    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.6 }
    });

    setIsReserved(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#17100D]/80 backdrop-blur-sm flex justify-center p-0 sm:p-4 md:p-6 animate-fade-in">
      
      <div className="bg-[#FAF7F2] w-full max-w-lg h-full sm:h-auto rounded-none sm:rounded-3xl shadow-2xl border-0 sm:border border-[#ECC4A6] overflow-y-auto my-0 sm:my-auto relative animate-slide-up flex flex-col justify-between sm:justify-start max-h-none sm:max-h-[90vh]">
        
        {/* Header */}
        <div className="p-3.5 sm:p-5 border-b border-[#ECC4A6]/60 flex items-center justify-between bg-[#FDF8F4] shrink-0">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-[#241A15] text-[#D27848] flex items-center justify-center font-black border border-[#451E10] shrink-0">
              <Lock className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-extrabold text-[#2E271F] text-sm sm:text-base">
                Reserve Car for ₹999
              </h3>
              <p className="text-[11px] text-[#74351B] font-semibold">
                100% Refundable • Locks vehicle for 48 Hours
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

        {/* Form Body */}
        {!isReserved ? (
          <form onSubmit={handleReserve} className="p-4 sm:p-6 space-y-4 flex-1">
            
            {/* Selected Car Details */}
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
                  {car.variant} • {car.rto.split('(')[0]}
                </div>
                <div className="text-xs font-black text-[#D27848]">
                  {formatPrice(car.price)}
                </div>
              </div>
            </div>

            {/* Why Reserve Highlights */}
            <div className="grid grid-cols-2 gap-2 text-[11px] text-[#74351B]">
              <div className="p-2.5 bg-[#FDF3EA] rounded-xl border border-[#ECC4A6] flex items-center gap-1.5 font-semibold text-[#74351B]">
                <Lock className="w-3.5 h-3.5 text-[#D27848] shrink-0" />
                <span>48-Hr Price &amp; Car Lock</span>
              </div>
              <div className="p-2.5 bg-[#FDF3EA] rounded-xl border border-[#ECC4A6] flex items-center gap-1.5 font-semibold text-[#74351B]">
                <RotateCcw className="w-3.5 h-3.5 text-[#D27848] shrink-0" />
                <span>100% Instant Refund</span>
              </div>
            </div>

            {/* Buyer Contact */}
            <div className="space-y-2.5">
              <div>
                <label className="text-xs font-bold text-[#2E271F] block mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Vikram Hegde"
                  className="w-full p-2.5 bg-white text-xs text-[#2E271F] rounded-xl border border-[#ECC4A6] focus:border-[#D27848] outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-[#2E271F] block mb-1">
                  Phone Number
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

            {/* Payment Method Selector */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-[#74351B] block mb-1.5">
                Select Payment Mode (₹999 Token)
              </label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('upi')}
                  className={`p-2.5 rounded-2xl border text-xs font-bold flex flex-col items-center gap-1 transition-all ${
                    paymentMethod === 'upi'
                      ? 'bg-[#D27848] border-[#B95C2E] text-white shadow-xs'
                      : 'bg-white border-[#ECC4A6] text-[#74351B] hover:bg-[#FDF8F4]'
                  }`}
                >
                  <Smartphone className="w-4 h-4" />
                  <span>UPI / GPay</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('card')}
                  className={`p-2.5 rounded-2xl border text-xs font-bold flex flex-col items-center gap-1 transition-all ${
                    paymentMethod === 'card'
                      ? 'bg-[#D27848] border-[#B95C2E] text-white shadow-xs'
                      : 'bg-white border-[#ECC4A6] text-[#74351B] hover:bg-[#FDF8F4]'
                  }`}
                >
                  <CreditCard className="w-4 h-4" />
                  <span>Card</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('netbanking')}
                  className={`p-2.5 rounded-2xl border text-xs font-bold flex flex-col items-center gap-1 transition-all ${
                    paymentMethod === 'netbanking'
                      ? 'bg-[#D27848] border-[#B95C2E] text-white shadow-xs'
                      : 'bg-white border-[#ECC4A6] text-[#74351B] hover:bg-[#FDF8F4]'
                  }`}
                >
                  <Building2 className="w-4 h-4" />
                  <span>Net Banking</span>
                </button>
              </div>

              {paymentMethod === 'upi' && (
                <div className="mt-2.5">
                  <input
                    type="text"
                    value={upiId}
                    onChange={(e) => setUpiId(e.target.value)}
                    placeholder="Enter UPI ID (e.g. mobile@okhdfcbank)"
                    className="w-full p-2 bg-white text-xs text-[#2E271F] rounded-xl border border-[#ECC4A6] focus:border-[#D27848] outline-none"
                  />
                </div>
              )}
            </div>

            {/* Pay Button */}
            <button
              type="submit"
              className="w-full py-3.5 bg-[#D27848] hover:bg-[#B95C2E] text-white text-xs font-extrabold rounded-2xl shadow-md transition-all flex items-center justify-center gap-2 mt-2"
            >
              <Lock className="w-4 h-4" />
              <span>Pay ₹999 &amp; Reserve Exclusively</span>
            </button>

            <div className="flex items-center justify-center gap-1 text-[10px] text-[#8B785F] text-center">
              <ShieldCheck className="w-3.5 h-3.5 text-[#D27848]" />
              <span>256-bit Encrypted • Cancel anytime with 1-click 100% refund</span>
            </div>

          </form>
        ) : (
          /* Reserved Success */
          <div className="p-6 sm:p-8 text-center space-y-4 animate-fade-in">
            <div className="w-16 h-16 rounded-full bg-[#FDF3EA] text-[#D27848] flex items-center justify-center mx-auto ring-8 ring-[#FBF0E6] border border-[#ECC4A6]">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <span className="badge-pill bg-[#FDF3EA] text-[#74351B] border border-[#ECC4A6] mb-2">
                Car Locked For 48 Hours
              </span>
              <h4 className="text-xl font-black text-[#2E271F]">
                Reservation Successful!
              </h4>
              <p className="text-xs text-[#8B785F] mt-1">
                Token ID: <strong>#RES-{Math.floor(100000 + Math.random() * 900000)}</strong>
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-[#ECC4A6] text-left text-xs space-y-2 shadow-2xs">
              <div className="flex justify-between">
                <span className="text-[#8B785F] font-medium">Car:</span>
                <span className="text-[#2E271F] font-bold">{car.title}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#8B785F] font-medium">Token Paid:</span>
                <span className="text-[#D27848] font-extrabold">₹999 (100% Refundable)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#8B785F] font-medium">Hold Expires:</span>
                <span className="text-[#2E271F] font-bold">48 Hours from now</span>
              </div>
            </div>

            <div className="p-3 bg-[#FDF8F4] rounded-2xl text-xs text-[#6D5D49] text-left border border-[#ECC4A6]/60">
              Our Kundapura hub manager is preparing the vehicle paperwork and will call you at <strong>+91 {phone}</strong> shortly.
            </div>

            <button
              onClick={onClose}
              className="w-full py-3 bg-[#D27848] hover:bg-[#B95C2E] text-white text-xs font-bold rounded-2xl transition-all shadow-subtle"
            >
              Back to Catalog
            </button>
          </div>
        )}

      </div>

    </div>
  );
};
