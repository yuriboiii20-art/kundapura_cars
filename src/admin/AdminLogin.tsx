import React, { useState } from 'react';
import { Lock, KeyRound, ArrowLeft, ShieldCheck, AlertCircle, Car as CarIcon } from 'lucide-react';
import { useInventory } from '../context/InventoryContext';

interface AdminLoginProps {
  onBackToSite: () => void;
}

export const AdminLogin: React.FC<AdminLoginProps> = ({ onBackToSite }) => {
  const { loginAdmin } = useInventory();
  const [pin, setPin] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!pin.trim()) {
      setError('Please enter the administrator PIN');
      return;
    }
    setIsLoading(true);
    setError('');

    setTimeout(() => {
      const success = loginAdmin(pin.trim());
      setIsLoading(false);
      if (!success) {
        setError('Incorrect PIN. Default PIN is admin123');
      }
    }, 300);
  };

  const handleQuickPin = (num: string) => {
    setError('');
    if (pin.length < 12) {
      setPin((prev) => prev + num);
    }
  };

  const handleBackspace = () => {
    setPin((prev) => prev.slice(0, -1));
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] flex flex-col justify-between items-center p-4 sm:p-6 select-none relative overflow-hidden font-sans">
      
      {/* Decorative Warm Gradients in Background */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#D27848]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-[#E0713B]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top Bar: Return to Public Site */}
      <div className="w-full max-w-md flex items-center justify-between z-10">
        <button
          onClick={onBackToSite}
          className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-[#ECC4A6] text-[#74351B] hover:bg-[#FDF8F4] text-xs font-bold transition-all shadow-subtle cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 text-[#D27848]" />
          <span>Exit to Public Store</span>
        </button>

        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FDF3EA] border border-[#ECC4A6] text-[11px] font-bold text-[#74351B]">
          <ShieldCheck className="w-3.5 h-3.5 text-[#D27848]" />
          <span>Portal Access</span>
        </div>
      </div>

      {/* Main Login Card */}
      <div className="w-full max-w-md my-auto z-10 py-6">
        <div className="bg-white/95 backdrop-blur-md rounded-3xl border border-[#ECC4A6] shadow-xl p-6 sm:p-8 relative overflow-hidden">
          
          {/* Header */}
          <div className="text-center mb-6">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#241A15] to-[#451E10] text-white flex items-center justify-center mx-auto mb-4 shadow-lg border border-[#451E10] relative">
              <CarIcon className="w-8 h-8 text-[#D27848]" />
              <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-[#D27848] flex items-center justify-center border-2 border-white">
                <Lock className="w-2.5 h-2.5 text-white" />
              </div>
            </div>

            <div className="text-lg sm:text-xl font-black text-[#2E271F] tracking-tight">
              KUNDAPURA<span className="text-[#D27848]">CARS</span>
            </div>
            <p className="text-xs text-[#8B785F] font-semibold mt-1">
              Management Portal &amp; Inventory Control
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-[#74351B] mb-1.5">
                Administrator Security PIN
              </label>
              <div className="relative">
                <KeyRound className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#AA957A]" />
                <input
                  type="password"
                  value={pin}
                  onChange={(e) => {
                    setPin(e.target.value);
                    setError('');
                  }}
                  placeholder="Enter PIN (e.g. admin123)"
                  autoFocus
                  className="w-full pl-10 pr-4 py-3 bg-[#FAF7F2] text-sm text-[#2E271F] font-mono tracking-wider rounded-2xl border border-[#ECC4A6] focus:bg-white focus:border-[#D27848] focus:ring-4 focus:ring-[#D27848]/15 transition-all outline-none"
                />
              </div>
            </div>

            {error && (
              <div className="flex items-center gap-2 p-3 rounded-xl bg-[#FFF1F0] border border-[#FFA39E] text-xs font-bold text-[#CF1322] animate-shake">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3.5 bg-gradient-to-r from-[#D27848] to-[#B95C2E] hover:from-[#B95C2E] hover:to-[#964521] text-white font-black text-sm rounded-2xl shadow-md transition-all flex items-center justify-center gap-2 disabled:opacity-70 cursor-pointer"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  <Lock className="w-4 h-4" />
                  <span>Unlock Admin Dashboard</span>
                </>
              )}
            </button>
          </form>

          {/* Mobile-Friendly Quick Pin Keypad */}
          <div className="mt-6 pt-5 border-t border-[#ECC4A6]/60">
            <div className="text-[11px] font-bold text-[#AA957A] text-center mb-3 uppercase tracking-wider">
              Quick Numeric Input
            </div>
            <div className="grid grid-cols-3 gap-2 max-w-[240px] mx-auto">
              {['1', '2', '3', '4', '5', '6', '7', '8', '9', 'C', '0', '⌫'].map((k) => (
                <button
                  key={k}
                  type="button"
                  onClick={() => {
                    if (k === 'C') setPin('');
                    else if (k === '⌫') handleBackspace();
                    else handleQuickPin(k);
                  }}
                  className={`h-10 rounded-xl font-mono text-sm font-bold transition-all flex items-center justify-center ${
                    k === 'C' || k === '⌫'
                      ? 'bg-[#FDF3EA] text-[#74351B] hover:bg-[#F7DEC9]'
                      : 'bg-[#FAF7F2] text-[#2E271F] hover:bg-[#FDF3EA] hover:border-[#D27848]'
                  } border border-[#ECC4A6] active:scale-95 cursor-pointer`}
                >
                  {k}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-5 text-center">
            <span className="text-[11px] text-[#8B785F]">
              Default access PIN is <strong className="text-[#D27848] font-mono">admin123</strong>
            </span>
          </div>

        </div>
      </div>

      {/* Footer Info */}
      <div className="text-center text-[11px] text-[#AA957A] z-10">
        Kundapura Cars Internal Portal • Secure Storage &amp; Live Sync
      </div>

    </div>
  );
};
