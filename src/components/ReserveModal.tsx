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

interface ReserveModalProps {
  car: Car;
  onClose: () => void;
}

export const ReserveModal: React.FC<ReserveModalProps> = ({ car, onClose }) => {
  const [paymentMethod, setPaymentMethod] = useState<'upi' | 'card' | 'netbanking'>('upi');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [upiId, setUpiId] = useState('');
  const [isReserved, setIsReserved] = useState(false);

  const handleReserve = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.6 }
    });

    setIsReserved(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-sm flex justify-center p-3 sm:p-6 animate-fade-in">
      
      <div className="bg-white w-full max-w-lg rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-auto relative animate-slide-up">
        
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-slate-200 flex items-center justify-between bg-amber-50/60">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center font-black">
              <Lock className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-extrabold text-slate-900 text-sm sm:text-base">
                Reserve Car for ₹999
              </h3>
              <p className="text-[11px] text-amber-800 font-semibold">
                100% Refundable • Locks vehicle for 48 Hours
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

        {/* Form Body */}
        {!isReserved ? (
          <form onSubmit={handleReserve} className="p-5 sm:p-6 space-y-4">
            
            {/* Selected Car Details */}
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
                  {car.variant} • {car.rto.split('(')[0]}
                </div>
                <div className="text-xs font-black text-brand-600">
                  {formatPrice(car.price)}
                </div>
              </div>
            </div>

            {/* Why Reserve Highlights */}
            <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-700">
              <div className="p-2.5 bg-emerald-50/70 rounded-xl border border-emerald-100 flex items-center gap-1.5 font-semibold text-emerald-900">
                <Lock className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>48-Hr Price &amp; Car Lock</span>
              </div>
              <div className="p-2.5 bg-emerald-50/70 rounded-xl border border-emerald-100 flex items-center gap-1.5 font-semibold text-emerald-900">
                <RotateCcw className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>100% Instant Refund</span>
              </div>
            </div>

            {/* Buyer Contact */}
            <div className="space-y-2.5">
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Vikram Hegde"
                  className="w-full p-2.5 bg-slate-50 text-xs text-slate-900 rounded-xl border border-slate-200 focus:border-brand-500 outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">
                  Bangalore Phone Number
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

            {/* Payment Method Selector */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-slate-600 block mb-1.5">
                Select Payment Mode (₹999 Token)
              </label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('upi')}
                  className={`p-2.5 rounded-xl border text-xs font-bold flex flex-col items-center gap-1 transition-all ${
                    paymentMethod === 'upi'
                      ? 'bg-brand-50 border-brand-500 text-brand-900'
                      : 'bg-white border-slate-200 text-slate-600'
                  }`}
                >
                  <Smartphone className="w-4 h-4 text-brand-600" />
                  <span>UPI / GPay</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('card')}
                  className={`p-2.5 rounded-xl border text-xs font-bold flex flex-col items-center gap-1 transition-all ${
                    paymentMethod === 'card'
                      ? 'bg-brand-50 border-brand-500 text-brand-900'
                      : 'bg-white border-slate-200 text-slate-600'
                  }`}
                >
                  <CreditCard className="w-4 h-4 text-brand-600" />
                  <span>Card</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('netbanking')}
                  className={`p-2.5 rounded-xl border text-xs font-bold flex flex-col items-center gap-1 transition-all ${
                    paymentMethod === 'netbanking'
                      ? 'bg-brand-50 border-brand-500 text-brand-900'
                      : 'bg-white border-slate-200 text-slate-600'
                  }`}
                >
                  <Building2 className="w-4 h-4 text-brand-600" />
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
                    className="w-full p-2 bg-slate-50 text-xs text-slate-900 rounded-xl border border-slate-200 focus:border-brand-500 outline-none"
                  />
                </div>
              )}
            </div>

            {/* Pay Button */}
            <button
              type="submit"
              className="w-full py-3.5 bg-amber-500 hover:bg-amber-600 text-slate-950 text-xs font-extrabold rounded-xl shadow-md shadow-amber-500/20 transition-all flex items-center justify-center gap-2 mt-2"
            >
              <Lock className="w-4 h-4" />
              <span>Pay ₹999 &amp; Reserve Exclusively</span>
            </button>

            <div className="flex items-center justify-center gap-1 text-[10px] text-slate-500 text-center">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>256-bit Encrypted • Cancel anytime with 1-click 100% refund</span>
            </div>

          </form>
        ) : (
          /* Reserved Success */
          <div className="p-6 sm:p-8 text-center space-y-4 animate-fade-in">
            <div className="w-16 h-16 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center mx-auto ring-8 ring-amber-50">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <span className="badge-pill bg-amber-50 text-amber-800 border border-amber-200 mb-2">
                Car Locked For 48 Hours
              </span>
              <h4 className="text-xl font-black text-slate-900">
                Reservation Successful!
              </h4>
              <p className="text-xs text-slate-600 mt-1">
                Token ID: <strong>#RES-{Math.floor(100000 + Math.random() * 900000)}</strong>
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-left text-xs space-y-2">
              <div className="flex justify-between">
                <span className="text-slate-500 font-medium">Car:</span>
                <span className="text-slate-900 font-bold">{car.title}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500 font-medium">Token Paid:</span>
                <span className="text-emerald-700 font-bold">₹999 (100% Refundable)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500 font-medium">Hold Expires:</span>
                <span className="text-brand-600 font-bold">48 Hours from now</span>
              </div>
            </div>

            <div className="p-3 bg-brand-50 rounded-xl text-xs text-slate-700 text-left">
              Our Bangalore hub manager is preparing the vehicle paperwork and will call you at <strong>+91 {phone}</strong> shortly.
            </div>

            <button
              onClick={onClose}
              className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl transition-all"
            >
              Back to Catalog
            </button>
          </div>
        )}

      </div>

    </div>
  );
};
