import React from 'react';
import { 
  Car as CarIcon, 
  Phone, 
  Mail, 
  ShieldCheck, 
  Heart,
  MessageSquare
} from 'lucide-react';

interface FooterProps {
  onOpenHubs: () => void;
  onOpenAssurance?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenHubs }) => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-12 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-12 border-b border-slate-800">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-indigo-600 flex items-center justify-center text-white shadow-md">
                <CarIcon className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xl font-black text-white tracking-tight">
                  KUNDAPURA<span className="text-brand-400">CARS</span>
                </span>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  Bangalore's Certified Used Car Marketplace
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Kundapura Cars is Bangalore's dedicated platform to buy 200-point certified used cars. Backed by a 1-Year Comprehensive Warranty, 5-Day Money-Back Guarantee, and free Bangalore RTO transfer.
            </p>

            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 bg-slate-800/80 p-3 rounded-xl border border-slate-700/60 max-w-sm">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Buy-Only Verified Platform • 0 Lemon Cars</span>
            </div>
          </div>

          {/* Quick Hubs */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Bangalore Hubs
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button onClick={onOpenHubs} className="hover:text-white transition-colors">
                  📍 Koramangala 80ft Hub
                </button>
              </li>
              <li>
                <button onClick={onOpenHubs} className="hover:text-white transition-colors">
                  📍 Indiranagar 100ft Hub
                </button>
              </li>
              <li>
                <button onClick={onOpenHubs} className="hover:text-white transition-colors">
                  📍 Whitefield Tech Park Hub
                </button>
              </li>
              <li>
                <button onClick={onOpenHubs} className="hover:text-white transition-colors">
                  📍 Hebbal Ring Road Hub
                </button>
              </li>
              <li>
                <button onClick={onOpenHubs} className="hover:text-white transition-colors">
                  📍 Kundapura Express Hub
                </button>
              </li>
            </ul>
          </div>

          {/* Popular Categories */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Popular in Bangalore
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#car-catalog" className="hover:text-white transition-colors">Used SUVs in Bangalore</a></li>
              <li><a href="#car-catalog" className="hover:text-white transition-colors">Certified Automatic Sedans</a></li>
              <li><a href="#car-catalog" className="hover:text-white transition-colors">Electric Cars (Nexon &amp; Tiago EV)</a></li>
              <li><a href="#car-catalog" className="hover:text-white transition-colors">Used Cars Under ₹8 Lakh</a></li>
              <li><a href="#car-catalog" className="hover:text-white transition-colors">Single Owner KA-01 / KA-03 Cars</a></li>
            </ul>
          </div>

          {/* Contact & Hours */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Bangalore Support Desk
            </h4>
            <div className="space-y-2 text-xs text-slate-400">
              <a href="tel:+918047259900" className="flex items-center gap-2 hover:text-amber-300 transition-colors">
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>+91 80 4725 9900</span>
              </a>
              <a href="https://wa.me/918047259900" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-emerald-400 transition-colors">
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                <span>WhatsApp Bangalore Desk</span>
              </a>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-brand-400" />
                <span>care@kundapuracars.com</span>
              </div>
              <div className="text-[11px] text-slate-500 pt-1">
                Open 7 Days a Week<br />9:30 AM – 8:30 PM
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} KUNDAPURA CARS INDIA PVT LTD. All rights reserved.
          </div>
          <div className="flex items-center gap-1 text-[11px]">
            <span>Crafted for Bangalore with</span>
            <Heart className="w-3 h-3 text-rose-500 fill-rose-500" />
            <span>• Verified Used Cars Only</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
