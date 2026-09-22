import React, { useState } from 'react';
import { 
  X, 
  MapPin, 
  ShieldCheck, 
  Heart, 
  Share2, 
  RotateCw, 
  CheckCircle2, 
  Sparkles, 
  Award, 
  RotateCcw, 
  MessageSquare,
  ChevronLeft,
  ChevronRight,
  Phone,
  FileCheck,
  Zap
} from 'lucide-react';
import { Car } from '../types/car';
import { formatPrice, formatKm, formatShortKm, formatShortRto } from '../utils/formatters';
import { InspectionReport } from './InspectionReport';
import { EmiCalculator } from './EmiCalculator';

interface CarDetailModalProps {
  car: Car;
  onClose: () => void;
  isWishlisted: boolean;
  onToggleWishlist: (carId: string) => void;
  onBookTestDrive: (car: Car) => void;
  onReserveCar: (car: Car) => void;
  isCompared?: boolean;
  onToggleCompare?: (car: Car) => void;
}

export const CarDetailModal: React.FC<CarDetailModalProps> = ({
  car,
  onClose,
  isWishlisted,
  onToggleWishlist,
  onBookTestDrive,
  onReserveCar
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
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#17100D]/85 backdrop-blur-sm flex justify-center p-0 sm:p-4 md:p-6 animate-fade-in">
      
      {/* Modal Container */}
      <div className="bg-[#FAF7F2] w-full max-w-6xl h-full sm:h-auto rounded-none sm:rounded-3xl shadow-2xl border-0 sm:border border-[#ECC4A6] overflow-hidden flex flex-col my-0 sm:my-auto relative max-h-none sm:max-h-[94vh]">
        
        {/* Sticky Top Bar & Breadcrumbs */}
        <div className="sticky top-0 z-30 bg-[#FDF8F4]/95 backdrop-blur-md px-3.5 sm:px-6 py-2.5 sm:py-3 border-b border-[#ECC4A6]/60 flex items-center justify-between gap-2 shrink-0">
          
          {/* Breadcrumbs */}
          <div className="flex items-center gap-1.5 text-xs text-[#8B785F] font-medium truncate min-w-0">
            <span className="hover:text-[#D27848] cursor-pointer hidden sm:inline">Home</span>
            <span className="hidden sm:inline">/</span>
            <span className="hover:text-[#D27848] cursor-pointer hidden md:inline">Used Cars in Bangalore</span>
            <span className="hidden md:inline">/</span>
            <span className="hover:text-[#D27848] cursor-pointer shrink-0">{car.brand}</span>
            <span>/</span>
            <span className="text-[#2E271F] font-bold truncate">{car.year} {car.title}</span>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <button
              onClick={handleShare}
              className="p-1.5 sm:p-2 text-[#74351B] hover:text-[#D27848] bg-[#FBF0E6] hover:bg-[#F7DEC9] rounded-xl border border-[#ECC4A6] transition-colors relative"
              title="Share Car"
            >
              <Share2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              {copiedLink && (
                <span className="absolute -bottom-7 right-0 text-[10px] bg-[#241A15] text-[#FDF8F4] px-2 py-0.5 rounded shadow whitespace-nowrap">
                  Copied!
                </span>
              )}
            </button>

            <button
              onClick={() => onToggleWishlist(car.id)}
              className="p-1.5 sm:p-2 text-[#74351B] hover:text-[#D27848] bg-[#FBF0E6] hover:bg-[#F7DEC9] rounded-xl border border-[#ECC4A6] transition-colors"
              title="Save to Wishlist"
            >
              <Heart className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${isWishlisted ? 'fill-[#D27848] text-[#D27848]' : ''}`} />
            </button>

            <button
              onClick={onClose}
              className="p-1.5 sm:p-2 text-[#8B785F] hover:text-[#2E271F] bg-[#FBF0E6] hover:bg-[#F7DEC9] rounded-xl border border-[#ECC4A6] transition-colors ml-0.5"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-3.5 sm:p-6 lg:p-8 space-y-5 sm:space-y-6 pb-28 sm:pb-8">
          
          {/* Main Gallery & Top Summary Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            
            {/* Left Column: Interactive Image Gallery & 360 Spinny Tour */}
            <div className="lg:col-span-7 space-y-4">
              
              <div className="relative aspect-[16/10] bg-gradient-to-b from-[#FBF0E6] via-[#FDF8F4] to-[#FAF7F2] rounded-2xl overflow-hidden border border-[#ECC4A6] shadow-subtle group">
                <img
                  src={car.images[activeImageIndex]}
                  alt={car.title}
                  className={`w-full h-full object-cover transition-all duration-300 ${
                    view360Mode ? 'scale-105' : ''
                  }`}
                />

                {/* 360 Simulator Overlay Tag */}
                {view360Mode && (
                  <div className="absolute top-3 left-3 bg-[#241A15]/90 text-[#FDF8F4] text-[11px] sm:text-xs font-bold px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full flex items-center gap-1.5 backdrop-blur-sm shadow-md border border-[#ECC4A6]/30">
                    <RotateCw className="w-3.5 h-3.5 animate-spin text-[#D27848]" />
                    <span>360° Studio Tour <span className="hidden sm:inline">(Click thumbnails to rotate)</span></span>
                  </div>
                )}

                {/* Photo Counter */}
                <div className="absolute top-3 right-3 bg-[#241A15]/80 text-[#FDF8F4] text-xs font-bold px-2.5 py-1 rounded-lg backdrop-blur-xs border border-[#ECC4A6]/30">
                  {activeImageIndex + 1} / {car.images.length} Photos
                </div>

                {/* 360 Toggle Button */}
                <button
                  onClick={() => setView360Mode(!view360Mode)}
                  className={`absolute bottom-3 right-3 px-3.5 py-1.5 rounded-full text-xs font-extrabold transition-all shadow-md flex items-center gap-1.5 z-10 ${
                    view360Mode
                      ? 'bg-[#D27848] text-white'
                      : 'bg-white text-[#2E271F] hover:bg-[#FBF0E6] border border-[#ECC4A6]'
                  }`}
                >
                  <RotateCw className="w-3.5 h-3.5 text-[#D27848]" />
                  <span>{view360Mode ? 'Exit 360° View' : '360° Spinny Tour'}</span>
                </button>

                {/* Gallery Prev / Next Controls */}
                <button
                  onClick={() => setActiveImageIndex((prev) => (prev - 1 + car.images.length) % car.images.length)}
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 hover:bg-white text-[#2E271F] flex items-center justify-center transition-colors shadow-sm"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setActiveImageIndex((prev) => (prev + 1) % car.images.length)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 hover:bg-white text-[#2E271F] flex items-center justify-center transition-colors shadow-sm"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Thumbnails Carousel */}
              <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
                {car.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative w-20 h-14 rounded-xl overflow-hidden shrink-0 border-2 transition-all ${
                      idx === activeImageIndex
                        ? 'border-[#D27848] ring-2 ring-[#D27848]/30 scale-95'
                        : 'border-transparent opacity-75 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="thumb" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>

              {/* Assured 4 Pillars Banner */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2">
                <div className="bg-white p-3 rounded-xl border border-[#ECC4A6]/70 shadow-2xs flex flex-col justify-center">
                  <div className="flex items-center gap-1.5 text-xs font-black text-[#2E271F] mb-0.5">
                    <ShieldCheck className="w-4 h-4 text-[#D27848] shrink-0" />
                    <span>200 Points</span>
                  </div>
                  <div className="text-[11px] text-[#8B785F]">Inspection Passed</div>
                </div>

                <div className="bg-white p-3 rounded-xl border border-[#ECC4A6]/70 shadow-2xs flex flex-col justify-center">
                  <div className="flex items-center gap-1.5 text-xs font-black text-[#2E271F] mb-0.5">
                    <Award className="w-4 h-4 text-[#D27848] shrink-0" />
                    <span>1-Yr Warranty</span>
                  </div>
                  <div className="text-[11px] text-[#8B785F]">Engine &amp; Gearbox</div>
                </div>

                <div className="bg-white p-3 rounded-xl border border-[#ECC4A6]/70 shadow-2xs flex flex-col justify-center">
                  <div className="flex items-center gap-1.5 text-xs font-black text-[#2E271F] mb-0.5">
                    <RotateCcw className="w-4 h-4 text-[#D27848] shrink-0" />
                    <span>5-Day Refund</span>
                  </div>
                  <div className="text-[11px] text-[#8B785F]">100% Money Back</div>
                </div>

                <div className="bg-white p-3 rounded-xl border border-[#ECC4A6]/70 shadow-2xs flex flex-col justify-center">
                  <div className="flex items-center gap-1.5 text-xs font-black text-[#2E271F] mb-0.5">
                    <FileCheck className="w-4 h-4 text-[#D27848] shrink-0" />
                    <span>Free RC Transfer</span>
                  </div>
                  <div className="text-[11px] text-[#8B785F]">Bangalore RTO</div>
                </div>
              </div>

            </div>

            {/* Right Column: Sticky Pricing & Booking Card */}
            <div className="lg:col-span-5 bg-white p-5 sm:p-6 rounded-3xl border border-[#ECC4A6] shadow-subtle flex flex-col justify-between space-y-5">
              
              <div>
                {/* Assured Badge & Year */}
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="inline-flex items-center gap-1 text-xs font-extrabold text-[#D27848] bg-[#FDF3EA] px-2.5 py-1 rounded-full border border-[#ECC4A6]">
                    <svg className="w-3.5 h-3.5 text-[#D27848]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
                    </svg>
                    <span>Assured {car.inspectionScore}/10</span>
                  </span>

                  <span className="text-xs font-bold text-[#74351B] bg-[#FBF0E6] px-2 py-0.5 rounded border border-[#ECC4A6]/50">
                    {car.year} Model
                  </span>
                </div>

                {/* Car Title & Variant */}
                <h1 className="text-xl sm:text-2xl font-black text-[#2E271F] leading-snug mb-1">
                  {car.year} {car.brand} {car.model}
                </h1>
                <p className="text-xs text-[#8B785F] font-medium mb-3">
                  {car.variant}
                </p>

                {/* Specifications Pills */}
                <div className="flex items-center gap-1.5 flex-wrap mb-4">
                  <span className="px-2.5 py-1 bg-[#FDF3EA] text-[#74351B] text-xs font-semibold rounded-full border border-[#ECC4A6]/60">
                    {formatShortKm(car.kilometers)}
                  </span>
                  <span className="px-2.5 py-1 bg-[#FDF3EA] text-[#74351B] text-xs font-semibold rounded-full border border-[#ECC4A6]/60">
                    {car.fuelType}
                  </span>
                  <span className="px-2.5 py-1 bg-[#FDF3EA] text-[#74351B] text-xs font-semibold rounded-full border border-[#ECC4A6]/60">
                    {car.transmission}
                  </span>
                  <span className="px-2.5 py-1 bg-[#FDF3EA] text-[#74351B] text-xs font-semibold rounded-full border border-[#ECC4A6]/60">
                    {formatShortRto(car.rto)}
                  </span>
                </div>

                {/* Hub Location Box */}
                <div className="p-3 bg-[#FDF8F4] rounded-2xl border border-[#ECC4A6] flex items-start gap-2.5 text-xs text-[#6D5D49] mb-4">
                  <MapPin className="w-4 h-4 text-[#D27848] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#2E271F] font-bold">Parked at:</strong> {car.hubLocation}
                    <div className="text-[11px] text-[#8B785F] mt-0.5">
                      Available for immediate test drive at Hub or Doorstep
                    </div>
                  </div>
                </div>

                {/* Price & EMI Box (Warm Dark Espresso with Warm Apricot highlights) */}
                <div className="p-4 bg-[#241A15] text-[#FDF8F4] rounded-2xl mb-4 shadow-subtle border border-[#451E10]">
                  <div className="flex items-baseline justify-between">
                    <div>
                      <div className="text-[11px] font-bold text-[#ECC4A6] uppercase tracking-wider">Fixed Transparent Price</div>
                      <div className="text-2xl sm:text-3xl font-black text-[#FDF8F4]">
                        {formatPrice(car.price)}
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="text-[10px] uppercase font-bold text-[#ECC4A6]">EMI Starting</div>
                      <div className="text-sm sm:text-base font-black text-[#D27848]">
                        ₹ {car.emiStarting.toLocaleString('en-IN')}/m*
                      </div>
                    </div>
                  </div>

                  <div className="mt-3 pt-2.5 border-t border-[#451E10] flex items-center justify-between text-[11px] text-[#DFCFBA]">
                    <span>✓ Zero hidden fees</span>
                    <span>✓ Instant loan approval</span>
                  </div>
                </div>

                {/* Reserve Banner Callout */}
                <div className="p-3 bg-[#FDF3EA] rounded-2xl border border-[#ECC4A6] text-xs text-[#74351B] flex items-center gap-2 mb-4">
                  <Zap className="w-4 h-4 text-[#D27848] shrink-0" />
                  <span><strong>Reserve for ₹999</strong>: 100% Refundable deposit holds this car for you for 48 hours.</span>
                </div>
              </div>

              {/* Primary CTA Buttons */}
              <div className="space-y-2.5 pt-1">
                <button
                  onClick={() => onBookTestDrive(car)}
                  className="w-full py-3.5 px-4 bg-[#D27848] hover:bg-[#B95C2E] text-white font-extrabold text-sm rounded-2xl shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Book Free Test Drive</span>
                </button>

                <button
                  onClick={() => onReserveCar(car)}
                  className="w-full py-3 px-4 bg-[#FBF0E6] hover:bg-[#F7DEC9] text-[#74351B] font-extrabold text-xs rounded-2xl border border-[#ECC4A6] transition-all shadow-2xs flex items-center justify-center gap-1.5"
                >
                  <span>Reserve This Car Online (₹999)</span>
                </button>

                <div className="pt-2 flex items-center justify-between text-xs text-[#8B785F] font-medium">
                  <span className="flex items-center gap-1">
                    <Phone className="w-3.5 h-3.5 text-[#D27848]" />
                    <span>+91 80 4725 9900</span>
                  </span>
                  <a
                    href={`https://wa.me/918047259900?text=Hi%20Kundapura%20Cars,%20I%20am%20interested%20in%20${encodeURIComponent(car.title)}%20at%20${encodeURIComponent(car.hubLocation)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#D27848] font-bold hover:underline flex items-center gap-1"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp Hub</span>
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Deep Details Navigation Tabs */}
          <div className="border-b border-[#ECC4A6]/60 pt-4">
            <div className="flex gap-4 sm:gap-6 overflow-x-auto no-scrollbar">
              {[
                { id: 'overview', label: 'Car Overview & Highlights' },
                { id: 'inspection', label: '200-Point Inspection Report' },
                { id: 'specs', label: 'Specifications & Features' },
                { id: 'emi', label: 'EMI & Loan Calculator' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`pb-3 text-sm font-extrabold transition-all border-b-2 whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'text-[#D27848] border-[#D27848]'
                      : 'text-[#8B785F] border-transparent hover:text-[#2E271F]'
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
              
              {/* Spinny Style Car Overview Grid */}
              <div className="bg-white p-5 sm:p-6 rounded-3xl border border-[#ECC4A6] shadow-subtle">
                <h4 className="text-base font-black text-[#2E271F] mb-4">
                  Car Overview
                </h4>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 text-xs">
                  <div className="p-3 bg-[#FDF8F4] rounded-2xl border border-[#ECC4A6]/50">
                    <div className="text-[10px] font-bold text-[#AA957A] uppercase">Make Year</div>
                    <div className="text-sm font-black text-[#2E271F] mt-0.5">{car.year}</div>
                  </div>

                  <div className="p-3 bg-[#FDF8F4] rounded-2xl border border-[#ECC4A6]/50">
                    <div className="text-[10px] font-bold text-[#AA957A] uppercase">Reg. Date</div>
                    <div className="text-sm font-black text-[#2E271F] mt-0.5">Nov {car.year}</div>
                  </div>

                  <div className="p-3 bg-[#FDF8F4] rounded-2xl border border-[#ECC4A6]/50">
                    <div className="text-[10px] font-bold text-[#AA957A] uppercase">Fuel Type</div>
                    <div className="text-sm font-black text-[#2E271F] mt-0.5">{car.fuelType}</div>
                  </div>

                  <div className="p-3 bg-[#FDF8F4] rounded-2xl border border-[#ECC4A6]/50">
                    <div className="text-[10px] font-bold text-[#AA957A] uppercase">KM Driven</div>
                    <div className="text-sm font-black text-[#2E271F] mt-0.5">{formatKm(car.kilometers)}</div>
                  </div>

                  <div className="p-3 bg-[#FDF8F4] rounded-2xl border border-[#ECC4A6]/50">
                    <div className="text-[10px] font-bold text-[#AA957A] uppercase">Transmission</div>
                    <div className="text-sm font-black text-[#2E271F] mt-0.5">{car.transmission}</div>
                  </div>

                  <div className="p-3 bg-[#FDF8F4] rounded-2xl border border-[#ECC4A6]/50">
                    <div className="text-[10px] font-bold text-[#AA957A] uppercase">No. of Owners</div>
                    <div className="text-sm font-black text-[#2E271F] mt-0.5">{car.owner}</div>
                  </div>

                  <div className="p-3 bg-[#FDF8F4] rounded-2xl border border-[#ECC4A6]/50">
                    <div className="text-[10px] font-bold text-[#AA957A] uppercase">Insurance</div>
                    <div className="text-sm font-black text-[#2E271F] mt-0.5">{car.specs.insuranceValidity}</div>
                  </div>

                  <div className="p-3 bg-[#FDF8F4] rounded-2xl border border-[#ECC4A6]/50">
                    <div className="text-[10px] font-bold text-[#AA957A] uppercase">Insurance Type</div>
                    <div className="text-sm font-black text-[#2E271F] mt-0.5">Comprehensive</div>
                  </div>

                  <div className="p-3 bg-[#FDF8F4] rounded-2xl border border-[#ECC4A6]/50">
                    <div className="text-[10px] font-bold text-[#AA957A] uppercase">RTO Location</div>
                    <div className="text-sm font-black text-[#2E271F] mt-0.5">{car.rto}</div>
                  </div>

                  <div className="p-3 bg-[#FDF8F4] rounded-2xl border border-[#ECC4A6]/50">
                    <div className="text-[10px] font-bold text-[#AA957A] uppercase">Car Location</div>
                    <div className="text-sm font-black text-[#2E271F] mt-0.5 truncate">{car.hubLocation}</div>
                  </div>
                </div>
              </div>

              {/* Highlights & Verified Condition */}
              <div className="bg-white p-5 sm:p-6 rounded-3xl border border-[#ECC4A6] shadow-subtle">
                <h4 className="text-base font-black text-[#2E271F] mb-3">
                  Vehicle Highlights &amp; Condition Summary
                </h4>
                <div className="flex flex-wrap gap-2 mb-4">
                  {car.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 bg-[#FDF3EA] text-[#74351B] text-xs font-bold rounded-xl border border-[#ECC4A6] flex items-center gap-1.5"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-[#D27848]" />
                      <span>{tag}</span>
                    </span>
                  ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#6D5D49]">
                  <div className="p-3.5 bg-[#FDF8F4] rounded-2xl border border-[#ECC4A6]/50 flex items-center gap-2 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#D27848] shrink-0" />
                    <span>Zero major accidental or frame repair history</span>
                  </div>
                  <div className="p-3.5 bg-[#FDF8F4] rounded-2xl border border-[#ECC4A6]/50 flex items-center gap-2 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#D27848] shrink-0" />
                    <span>OBD Diagnostic Scan: 0 error codes detected</span>
                  </div>
                  <div className="p-3.5 bg-[#FDF8F4] rounded-2xl border border-[#ECC4A6]/50 flex items-center gap-2 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#D27848] shrink-0" />
                    <span>ARAI Certified Fuel Efficiency: {car.specs.mileageARAI}</span>
                  </div>
                  <div className="p-3.5 bg-[#FDF8F4] rounded-2xl border border-[#ECC4A6]/50 flex items-center gap-2 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#D27848] shrink-0" />
                    <span>Tyres and brakes in top condition with &gt;75% life</span>
                  </div>
                </div>
              </div>

              {/* Key Features list */}
              <div className="bg-white p-5 sm:p-6 rounded-3xl border border-[#ECC4A6] shadow-subtle">
                <h4 className="text-base font-black text-[#2E271F] mb-3">
                  Key Features &amp; Equipment
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {car.features.map((feat, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-xs font-semibold text-[#2E271F] p-2.5 bg-[#FDF8F4] rounded-xl border border-[#ECC4A6]/50"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#D27848] shrink-0" />
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
            <div className="bg-white p-5 sm:p-6 rounded-3xl border border-[#ECC4A6] shadow-subtle animate-fade-in space-y-6">
              <h4 className="text-base font-black text-[#2E271F]">
                Detailed Technical Specifications
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
                <div className="p-3.5 bg-[#FDF8F4] rounded-2xl border border-[#ECC4A6]/50 space-y-1">
                  <div className="text-[#AA957A] font-bold uppercase text-[10px]">Engine Capacity</div>
                  <div className="text-[#2E271F] font-extrabold text-sm">{car.specs.engineCapacity}</div>
                </div>
                <div className="p-3.5 bg-[#FDF8F4] rounded-2xl border border-[#ECC4A6]/50 space-y-1">
                  <div className="text-[#AA957A] font-bold uppercase text-[10px]">Max Power Output</div>
                  <div className="text-[#2E271F] font-extrabold text-sm">{car.specs.maxPower}</div>
                </div>
                <div className="p-3.5 bg-[#FDF8F4] rounded-2xl border border-[#ECC4A6]/50 space-y-1">
                  <div className="text-[#AA957A] font-bold uppercase text-[10px]">Fuel Mileage (ARAI)</div>
                  <div className="text-[#2E271F] font-extrabold text-sm">{car.specs.mileageARAI}</div>
                </div>
                <div className="p-3.5 bg-[#FDF8F4] rounded-2xl border border-[#ECC4A6]/50 space-y-1">
                  <div className="text-[#AA957A] font-bold uppercase text-[10px]">Seating Capacity</div>
                  <div className="text-[#2E271F] font-extrabold text-sm">{car.specs.seatingCapacity} Seater</div>
                </div>
                <div className="p-3.5 bg-[#FDF8F4] rounded-2xl border border-[#ECC4A6]/50 space-y-1">
                  <div className="text-[#AA957A] font-bold uppercase text-[10px]">Boot Space</div>
                  <div className="text-[#2E271F] font-extrabold text-sm">{car.specs.bootSpace}</div>
                </div>
                <div className="p-3.5 bg-[#FDF8F4] rounded-2xl border border-[#ECC4A6]/50 space-y-1">
                  <div className="text-[#AA957A] font-bold uppercase text-[10px]">Ground Clearance</div>
                  <div className="text-[#2E271F] font-extrabold text-sm">{car.specs.groundClearance}</div>
                </div>
                <div className="p-3.5 bg-[#FDF8F4] rounded-2xl border border-[#ECC4A6]/50 space-y-1">
                  <div className="text-[#AA957A] font-bold uppercase text-[10px]">Airbags &amp; Safety</div>
                  <div className="text-[#2E271F] font-extrabold text-sm">{car.specs.airbags} Airbags Standard</div>
                </div>
                <div className="p-3.5 bg-[#FDF8F4] rounded-2xl border border-[#ECC4A6]/50 space-y-1">
                  <div className="text-[#AA957A] font-bold uppercase text-[10px]">Sunroof Type</div>
                  <div className="text-[#2E271F] font-extrabold text-sm">{car.specs.sunroof}</div>
                </div>
                <div className="p-3.5 bg-[#FDF8F4] rounded-2xl border border-[#ECC4A6]/50 space-y-1">
                  <div className="text-[#AA957A] font-bold uppercase text-[10px]">Fuel Tank / Battery</div>
                  <div className="text-[#2E271F] font-extrabold text-sm">{car.specs.fuelTank}</div>
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

        {/* Sticky Floating Bottom Bar for Quick Action */}
        <div className="sticky bottom-0 z-30 bg-[#FDF8F4]/98 backdrop-blur-md border-t border-[#ECC4A6] px-3 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between gap-2 sm:gap-3 shadow-lg shrink-0">
          <div className="min-w-0">
            <div className="text-[10px] sm:text-[11px] text-[#8B785F] font-semibold truncate">Fixed Price</div>
            <div className="text-base sm:text-xl font-black text-[#2E271F] truncate">
              {formatPrice(car.price)}
            </div>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
            <a
              href={`https://wa.me/918047259900?text=Hi%20Kundapura%20Cars,%20I%20am%20interested%20in%20${encodeURIComponent(car.title)}%20parked%20at%20${encodeURIComponent(car.hubLocation)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 sm:p-2.5 text-[#74351B] bg-[#FBF0E6] hover:bg-[#F7DEC9] rounded-xl border border-[#ECC4A6] transition-colors flex items-center gap-1.5 text-xs font-bold"
              title="Chat on WhatsApp"
            >
              <MessageSquare className="w-4 h-4 text-[#D27848]" />
              <span className="hidden md:inline">WhatsApp</span>
            </a>

            <button
              onClick={() => onReserveCar(car)}
              className="px-2.5 sm:px-3.5 py-2 sm:py-2.5 bg-[#FBF0E6] hover:bg-[#F7DEC9] text-[#74351B] text-[11px] sm:text-xs font-extrabold rounded-xl border border-[#ECC4A6] transition-all shadow-2xs whitespace-nowrap"
            >
              Reserve <span className="hidden xs:inline">(₹999)</span>
            </button>

            <button
              onClick={() => onBookTestDrive(car)}
              className="px-3 sm:px-4 py-2 sm:py-2.5 bg-[#D27848] hover:bg-[#B95C2E] text-white text-[11px] sm:text-xs font-extrabold rounded-xl shadow-md transition-all flex items-center gap-1 sm:gap-1.5 whitespace-nowrap"
            >
              <Sparkles className="w-3.5 h-3.5 shrink-0" />
              <span>Test Drive</span>
            </button>
          </div>
        </div>

      </div>

    </div>
  );
};

