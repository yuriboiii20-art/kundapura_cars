import React, { useState } from 'react';
import { 
  X, 
  MapPin, 
  ShieldCheck, 
  Heart, 
  Share2, 
  RotateCw, 
  Gauge, 
  Fuel, 
  Settings2, 
  Calendar, 
  Layers, 
  CheckCircle2, 
  Sparkles, 
  Award, 
  RotateCcw, 
  MessageSquare,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { Car } from '../types/car';
import { formatPrice, formatKm, formatIndianCurrency } from '../utils/formatters';
import { InspectionReport } from './InspectionReport';
import { EmiCalculator } from './EmiCalculator';

interface CarDetailModalProps {
  car: Car;
  onClose: () => void;
  isWishlisted: boolean;
  onToggleWishlist: (carId: string) => void;
  onBookTestDrive: (car: Car) => void;
  onReserveCar: (car: Car) => void;
  isCompared: boolean;
  onToggleCompare: (car: Car) => void;
}

export const CarDetailModal: React.FC<CarDetailModalProps> = ({
  car,
  onClose,
  isWishlisted,
  onToggleWishlist,
  onBookTestDrive,
  onReserveCar,
  isCompared,
  onToggleCompare
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [view360Mode, setView360Mode] = useState(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'inspection' | 'specs' | 'emi'>('overview');
  const [copiedLink, setCopiedLink] = useState(false);

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-sm flex justify-center p-2 sm:p-4 md:p-6 animate-fade-in">
      
      {/* Modal Container */}
      <div className="bg-[#f8fafc] w-full max-w-5xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col my-auto relative max-h-[92vh]">
        
        {/* Sticky Top Bar */}
        <div className="sticky top-0 z-30 bg-white/95 backdrop-blur-md px-5 py-3.5 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="badge-pill bg-emerald-50 text-emerald-800 border border-emerald-200">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Kundapura Assured • {car.rto.split('(')[0]}</span>
            </span>
            <span className="hidden sm:inline-flex text-xs font-semibold text-slate-500">
              📍 {car.hubLocation}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onToggleCompare(car)}
              className={`px-3 py-1.5 rounded-xl border text-xs font-bold transition-all flex items-center gap-1.5 ${
                isCompared
                  ? 'bg-brand-600 text-white border-brand-600'
                  : 'bg-white hover:bg-slate-50 text-slate-700 border-slate-200'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{isCompared ? 'Compared' : 'Compare'}</span>
            </button>

            <button
              onClick={handleShare}
              className="p-2 text-slate-600 hover:text-slate-900 bg-white hover:bg-slate-100 rounded-xl border border-slate-200 transition-colors relative"
              title="Share Car"
            >
              <Share2 className="w-4 h-4" />
              {copiedLink && (
                <span className="absolute -bottom-7 right-0 text-[10px] bg-slate-900 text-white px-2 py-0.5 rounded shadow">
                  Copied!
                </span>
              )}
            </button>

            <button
              onClick={() => onToggleWishlist(car.id)}
              className="p-2 text-slate-600 hover:text-rose-500 bg-white hover:bg-rose-50 rounded-xl border border-slate-200 transition-colors"
              title="Save to Wishlist"
            >
              <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-rose-500 text-rose-500' : ''}`} />
            </button>

            <button
              onClick={onClose}
              className="p-2 text-slate-500 hover:text-slate-900 bg-white hover:bg-slate-100 rounded-xl border border-slate-200 transition-colors ml-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 space-y-6">
          
          {/* Main Gallery & Top Summary Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            
            {/* Left: Interactive Image Gallery / 360 Simulator */}
            <div className="lg:col-span-7 space-y-3">
              <div className="relative aspect-[16/10] bg-slate-900 rounded-2xl overflow-hidden shadow-md group">
                <img
                  src={car.images[activeImageIndex]}
                  alt={car.title}
                  className={`w-full h-full object-cover transition-all duration-300 ${
                    view360Mode ? 'scale-105' : ''
                  }`}
                />

                {/* 360 Mode Overlay Banner */}
                {view360Mode && (
                  <div className="absolute top-3 left-3 bg-brand-600/90 text-white text-xs font-extrabold px-3 py-1.5 rounded-full flex items-center gap-1.5 backdrop-blur-sm shadow-md animate-pulse">
                    <RotateCw className="w-3.5 h-3.5 animate-spin" />
                    <span>360° Studio View Simulator (Click thumbnails to rotate)</span>
                  </div>
                )}

                {/* 360 Toggle Button */}
                <button
                  onClick={() => setView360Mode(!view360Mode)}
                  className={`absolute bottom-3 right-3 px-3 py-1.5 rounded-full text-xs font-bold transition-all shadow-md flex items-center gap-1.5 z-10 ${
                    view360Mode
                      ? 'bg-brand-600 text-white'
                      : 'bg-white/90 text-slate-800 hover:bg-white'
                  }`}
                >
                  <RotateCw className="w-3.5 h-3.5 text-brand-600" />
                  <span>{view360Mode ? 'Exit 360° View' : '360° Interactive View'}</span>
                </button>

                {/* Gallery Prev / Next Controls */}
                <button
                  onClick={() => setActiveImageIndex((prev) => (prev - 1 + car.images.length) % car.images.length)}
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setActiveImageIndex((prev) => (prev + 1) % car.images.length)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Thumbnails */}
              <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
                {car.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative w-20 h-14 rounded-xl overflow-hidden shrink-0 border-2 transition-all ${
                      idx === activeImageIndex
                        ? 'border-brand-600 ring-2 ring-brand-500/20 scale-95'
                        : 'border-transparent opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="thumb" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Right: Pricing, Summary & Key Assured Points */}
            <div className="lg:col-span-5 bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between space-y-5">
              
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold text-brand-600 bg-brand-50 px-2 py-0.5 rounded border border-brand-200">
                    {car.year} Model
                  </span>
                  <span className="text-xs font-semibold text-slate-500">
                    {car.color}
                  </span>
                </div>

                <h1 className="text-xl sm:text-2xl font-black text-slate-900 leading-snug mb-1">
                  {car.title}
                </h1>
                <p className="text-xs text-slate-500 font-medium mb-4">
                  {car.variant}
                </p>

                {/* Price Display */}
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 mb-4">
                  <div className="flex items-baseline justify-between">
                    <div>
                      <div className="text-xs font-semibold text-slate-500">Fixed Transparent Price</div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl sm:text-3xl font-black text-slate-900">
                          {formatPrice(car.price)}
                        </span>
                        {car.originalPrice && (
                          <span className="text-sm text-slate-400 line-through">
                            {formatPrice(car.originalPrice)}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="text-[10px] uppercase font-bold text-slate-400">Monthly EMI</div>
                      <div className="text-base font-black text-brand-600">
                        {formatIndianCurrency(car.emiStarting)}/mo
                      </div>
                    </div>
                  </div>

                  <div className="mt-2 pt-2 border-t border-slate-200/60 flex items-center justify-between text-[11px] text-slate-600">
                    <span className="text-emerald-700 font-bold">✓ Free Bangalore RTO Transfer</span>
                    <span>Zero Hidden Processing Fees</span>
                  </div>
                </div>

                {/* Quick specs grid */}
                <div className="grid grid-cols-2 gap-2.5 text-xs text-slate-700 mb-4 font-semibold">
                  <div className="flex items-center gap-2 p-2 bg-slate-50 rounded-xl">
                    <Gauge className="w-4 h-4 text-brand-600" />
                    <span>{formatKm(car.kilometers)}</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 bg-slate-50 rounded-xl">
                    <Fuel className="w-4 h-4 text-brand-600" />
                    <span>{car.fuelType}</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 bg-slate-50 rounded-xl">
                    <Settings2 className="w-4 h-4 text-brand-600" />
                    <span>{car.transmission}</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 bg-slate-50 rounded-xl">
                    <Calendar className="w-4 h-4 text-brand-600" />
                    <span>{car.owner}</span>
                  </div>
                </div>

                {/* Bangalore Hub Location */}
                <div className="p-3 bg-brand-50/50 rounded-xl border border-brand-100 flex items-start gap-2.5 text-xs text-slate-700">
                  <MapPin className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 font-bold">Bangalore Hub:</strong> {car.hubLocation}
                    <div className="text-[11px] text-slate-500 mt-0.5">
                      Available for immediate viewing &amp; test drive
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2 pt-2">
                <button
                  onClick={() => onBookTestDrive(car)}
                  className="w-full py-3 px-4 bg-brand-600 hover:bg-brand-700 text-white font-extrabold text-sm rounded-xl shadow-md shadow-brand-500/25 transition-all flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Book Free Test Drive (Hub or Doorstep)</span>
                </button>

                <button
                  onClick={() => onReserveCar(car)}
                  className="w-full py-2.5 px-4 bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold text-xs rounded-xl shadow-xs transition-all flex items-center justify-center gap-1.5"
                >
                  <span>Reserve This Car for ₹999 (100% Refundable)</span>
                </button>
              </div>

            </div>

          </div>

          {/* Navigation Tabs for Deep Details */}
          <div className="border-b border-slate-200">
            <div className="flex gap-4 overflow-x-auto no-scrollbar">
              {[
                { id: 'overview', label: 'Overview & Highlights' },
                { id: 'inspection', label: '200-Point Inspection Report' },
                { id: 'specs', label: 'Specifications & Features' },
                { id: 'emi', label: 'EMI & Loan Calculator' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`pb-3 text-sm font-extrabold transition-all border-b-2 whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'text-brand-600 border-brand-600'
                      : 'text-slate-500 border-transparent hover:text-slate-900'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content 1: Overview */}
          {activeTab === 'overview' && (
            <div className="space-y-6 animate-fade-in">
              
              {/* Kundapura Assured 4 Pillars Banner */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">200-Point Inspected</div>
                    <div className="text-[11px] text-slate-500">Score: {car.inspectionScore}/10</div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">1-Year Warranty</div>
                    <div className="text-[11px] text-slate-500">Engine &amp; Gearbox</div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                    <RotateCcw className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">5-Day Money Back</div>
                    <div className="text-[11px] text-slate-500">100% Full Refund</div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">Free Bangalore RC</div>
                    <div className="text-[11px] text-slate-500">Doorstep Delivery</div>
                  </div>
                </div>
              </div>

              {/* Highlights & Tags */}
              <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-xs">
                <h4 className="text-base font-extrabold text-slate-900 mb-3">
                  Key Vehicle Highlights
                </h4>
                <div className="flex flex-wrap gap-2 mb-4">
                  {car.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 bg-brand-50 text-brand-800 text-xs font-bold rounded-xl border border-brand-200 flex items-center gap-1.5"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-brand-600" />
                      <span>{tag}</span>
                    </span>
                  ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700">
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-center gap-2 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Original Karnataka RTO: {car.rto}</span>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-center gap-2 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Insurance: {car.specs.insuranceValidity}</span>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-center gap-2 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>ARAI Mileage: {car.specs.mileageARAI}</span>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-center gap-2 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Safety: {car.specs.airbags} Airbags equipped</span>
                  </div>
                </div>
              </div>

              {/* Key Features list */}
              <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-xs">
                <h4 className="text-base font-extrabold text-slate-900 mb-3">
                  Top Features &amp; Equipment
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {car.features.map((feat, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-xs font-semibold text-slate-800 p-2.5 bg-slate-50 rounded-xl border border-slate-100"
                    >
                      <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}

          {/* Tab Content 2: Inspection Report */}
          {activeTab === 'inspection' && (
            <div className="animate-fade-in">
              <InspectionReport car={car} />
            </div>
          )}

          {/* Tab Content 3: Specifications */}
          {activeTab === 'specs' && (
            <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200 shadow-xs animate-fade-in space-y-6">
              <h4 className="text-base font-extrabold text-slate-900">
                Detailed Technical Specifications
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100 space-y-1">
                  <div className="text-slate-400 font-bold uppercase text-[10px]">Engine Capacity</div>
                  <div className="text-slate-900 font-extrabold text-sm">{car.specs.engineCapacity}</div>
                </div>
                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100 space-y-1">
                  <div className="text-slate-400 font-bold uppercase text-[10px]">Max Power Output</div>
                  <div className="text-slate-900 font-extrabold text-sm">{car.specs.maxPower}</div>
                </div>
                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100 space-y-1">
                  <div className="text-slate-400 font-bold uppercase text-[10px]">Fuel Mileage (ARAI)</div>
                  <div className="text-slate-900 font-extrabold text-sm">{car.specs.mileageARAI}</div>
                </div>
                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100 space-y-1">
                  <div className="text-slate-400 font-bold uppercase text-[10px]">Seating Capacity</div>
                  <div className="text-slate-900 font-extrabold text-sm">{car.specs.seatingCapacity} Seater</div>
                </div>
                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100 space-y-1">
                  <div className="text-slate-400 font-bold uppercase text-[10px]">Boot Space</div>
                  <div className="text-slate-900 font-extrabold text-sm">{car.specs.bootSpace}</div>
                </div>
                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100 space-y-1">
                  <div className="text-slate-400 font-bold uppercase text-[10px]">Ground Clearance</div>
                  <div className="text-slate-900 font-extrabold text-sm">{car.specs.groundClearance}</div>
                </div>
                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100 space-y-1">
                  <div className="text-slate-400 font-bold uppercase text-[10px]">Airbags &amp; Safety</div>
                  <div className="text-slate-900 font-extrabold text-sm">{car.specs.airbags} Airbags Standard</div>
                </div>
                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100 space-y-1">
                  <div className="text-slate-400 font-bold uppercase text-[10px]">Sunroof Type</div>
                  <div className="text-slate-900 font-extrabold text-sm">{car.specs.sunroof}</div>
                </div>
                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100 space-y-1">
                  <div className="text-slate-400 font-bold uppercase text-[10px]">Fuel Tank / Battery</div>
                  <div className="text-slate-900 font-extrabold text-sm">{car.specs.fuelTank}</div>
                </div>
              </div>
            </div>
          )}

          {/* Tab Content 4: EMI Calculator */}
          {activeTab === 'emi' && (
            <div className="animate-fade-in">
              <EmiCalculator carPrice={car.price} />
            </div>
          )}

        </div>

        {/* Sticky Floating Bottom Bar */}
        <div className="sticky bottom-0 z-30 bg-white border-t border-slate-200 px-4 sm:px-6 py-3 flex items-center justify-between gap-3 shadow-lg">
          <div>
            <div className="text-[11px] text-slate-500 font-semibold">Total Price (No extra fees)</div>
            <div className="text-lg sm:text-xl font-black text-slate-900">
              {formatPrice(car.price)}
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={`https://wa.me/918047259900?text=Hi%20Kundapura%20Cars,%20I%20am%20interested%20in%20${encodeURIComponent(car.title)}%20parked%20at%20${encodeURIComponent(car.hubLocation)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 text-emerald-700 bg-emerald-50 hover:bg-emerald-100 rounded-xl border border-emerald-200 transition-colors flex items-center gap-1.5 text-xs font-bold"
              title="Chat on WhatsApp"
            >
              <MessageSquare className="w-4 h-4 text-emerald-600" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>

            <button
              onClick={() => onReserveCar(car)}
              className="px-3.5 py-2.5 bg-amber-500 hover:bg-amber-600 text-slate-950 text-xs font-extrabold rounded-xl transition-all shadow-xs"
            >
              Reserve (₹999)
            </button>

            <button
              onClick={() => onBookTestDrive(car)}
              className="px-4 py-2.5 bg-brand-600 hover:bg-brand-700 text-white text-xs font-extrabold rounded-xl shadow-md shadow-brand-500/25 transition-all flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Book Free Test Drive</span>
            </button>
          </div>
        </div>

      </div>

    </div>
  );
};
