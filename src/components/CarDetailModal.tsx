import React, { useState, useEffect, useCallback } from 'react';
import { 
  X, 
  MapPin, 
  ShieldCheck, 
  Heart, 
  Share2, 
  CheckCircle2, 
  Sparkles, 
  Award, 
  RotateCcw, 
  MessageSquare,
  ChevronLeft,
  ChevronRight,
  Phone,
  FileCheck,
  Zap,
  ZoomIn,
  ZoomOut,
  Info,
  Calendar,
  Gauge,
  Fuel,
  Settings,
  UserCheck
} from 'lucide-react';
import { Car } from '../types/car';
import { formatPrice, formatKm, formatShortKm, formatShortRto } from '../utils/formatters';
import { shareCar } from '../utils/shareCar';
import { InspectionReport } from './InspectionReport';
import { EmiCalculator } from './EmiCalculator';

interface CarDetailModalProps {
  car: Car;
  onClose: () => void;
  isWishlisted: boolean;
  onToggleWishlist: (carId: string) => void;
  onReserveCar: (car: Car) => void;
  isCompared?: boolean;
  onToggleCompare?: (car: Car) => void;
}

export const CarDetailModal: React.FC<CarDetailModalProps> = ({
  car,
  onClose,
  isWishlisted,
  onToggleWishlist,
  onReserveCar
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<'overview' | 'inspection' | 'specs' | 'emi'>('overview');
  const [copiedLink, setCopiedLink] = useState(false);
  
  // Lightbox / Enlarged View State
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);

  // Touch Swipe Handling
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);

  const handleShare = async () => {
    const result = await shareCar(car);
    if (result.status === 'copied') {
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  const openLightbox = () => {
    setIsLightboxOpen(true);
    if (!window.location.hash.includes('-photo')) {
      window.history.pushState({ modal: 'lightbox' }, '', window.location.hash ? `${window.location.hash}-photo` : '#photo');
    }
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    setIsZoomed(false);
    if (window.location.hash.includes('-photo') || window.location.hash === '#photo') {
      window.history.back();
    }
  };

  const nextImage = useCallback(() => {
    if (car.images.length <= 1) return;
    setActiveImageIndex((prev) => (prev + 1) % car.images.length);
  }, [car.images.length]);

  const prevImage = useCallback(() => {
    if (car.images.length <= 1) return;
    setActiveImageIndex((prev) => (prev - 1 + car.images.length) % car.images.length);
  }, [car.images.length]);

  // Touch handlers for swiping
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;
    const distance = touchStartX - touchEndX;
    const minSwipeDistance = 45;
    if (distance > minSwipeDistance) {
      nextImage();
    } else if (distance < -minSwipeDistance) {
      prevImage();
    }
    setTouchStartX(null);
    setTouchEndX(null);
  };

  // Keyboard navigation & popstate for image gallery / lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (isLightboxOpen) {
          closeLightbox();
        } else {
          onClose();
        }
      } else if (e.key === 'ArrowRight') {
        nextImage();
      } else if (e.key === 'ArrowLeft') {
        prevImage();
      }
    };

    const handlePopState = () => {
      if (isLightboxOpen && !window.location.hash.includes('-photo')) {
        setIsLightboxOpen(false);
        setIsZoomed(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('popstate', handlePopState);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('popstate', handlePopState);
    };
  }, [isLightboxOpen, nextImage, prevImage, onClose]);

  // Lock body scroll when modal or lightbox is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#17100D]/80 backdrop-blur-sm flex justify-center items-center p-0 sm:p-4 md:p-6 animate-fade-in">
      
      {/* Main Modal Container */}
      <div className="bg-[#FAF7F2] w-full max-w-5xl h-full sm:h-auto rounded-none sm:rounded-2xl shadow-2xl border-0 sm:border border-[#ECC4A6] overflow-hidden flex flex-col my-0 sm:my-auto relative max-h-none sm:max-h-[92vh]">
        
        {/* Sticky Top Bar */}
        <div className="sticky top-0 z-30 bg-[#FDF8F4]/95 backdrop-blur-md px-4 sm:px-6 py-2.5 sm:py-3 border-b border-[#ECC4A6]/60 flex items-center justify-between gap-3 shrink-0">
          
          {/* Breadcrumbs / Car Title at top */}
          <div className="flex items-center gap-2 text-xs font-semibold text-[#8B785F] truncate min-w-0">
            <span className="px-2 py-0.5 rounded bg-[#FBF0E6] text-[#74351B] font-bold text-[11px] border border-[#ECC4A6]/60 shrink-0">
              {car.bodyType}
            </span>
            <span className="text-[#2E271F] font-black text-sm truncate">
              {car.year} {car.brand} {car.model}
            </span>
          </div>

          {/* Action Icons */}
          <div className="flex items-center gap-1.5 shrink-0">
            <button
              onClick={handleShare}
              className="p-1.5 sm:p-2 text-[#74351B] hover:text-[#D27848] bg-[#FBF0E6] hover:bg-[#F7DEC9] rounded-xl border border-[#ECC4A6] transition-colors relative"
              title="Share Car"
              aria-label="Share Car"
            >
              <Share2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              {copiedLink && (
                <span className="absolute -bottom-7 right-0 text-[10px] bg-[#241A15] text-[#FDF8F4] px-2 py-0.5 rounded shadow whitespace-nowrap z-30">
                  Link Copied!
                </span>
              )}
            </button>

            <button
              onClick={() => onToggleWishlist(car.id)}
              className="p-1.5 sm:p-2 text-[#74351B] hover:text-[#D27848] bg-[#FBF0E6] hover:bg-[#F7DEC9] rounded-xl border border-[#ECC4A6] transition-colors"
              title={isWishlisted ? 'Saved' : 'Save Car'}
              aria-label={isWishlisted ? 'Saved' : 'Save Car'}
            >
              <Heart className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${isWishlisted ? 'fill-[#D27848] text-[#D27848]' : ''}`} />
            </button>

            <button
              onClick={onClose}
              className="p-1.5 sm:p-2 text-[#8B785F] hover:text-[#2E271F] bg-[#FBF0E6] hover:bg-[#F7DEC9] rounded-xl border border-[#ECC4A6] transition-colors ml-1"
              aria-label="Close dialog"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-5 pb-24 sm:pb-6">
          
          {/* Top 2-Column Split: Visuals & Pricing Summary */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
            
            {/* Left Column: Interactive Image & Enlargement Feature */}
            <div className="lg:col-span-7 space-y-3">
              
              <div 
                onClick={openLightbox}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                className="relative aspect-[16/10] bg-gradient-to-b from-[#FBF0E6] via-[#FDF8F4] to-[#FAF7F2] rounded-2xl overflow-hidden border border-[#ECC4A6] shadow-sm group cursor-zoom-in select-none"
              >
                <img
                  src={car.images[activeImageIndex]}
                  alt={car.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-102"
                />



                {/* Hover navigation arrows if multiple images exist */}
                {car.images.length > 1 && (
                  <>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        prevImage();
                      }}
                      className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 hover:bg-white text-[#2E271F] flex items-center justify-center transition-colors shadow-md z-10"
                      aria-label="Previous photo"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        nextImage();
                      }}
                      className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 hover:bg-white text-[#2E271F] flex items-center justify-center transition-colors shadow-md z-10"
                      aria-label="Next photo"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </>
                )}
              </div>

              {/* Quick Trust Badges Strip below Image */}
              <div className="grid grid-cols-3 gap-2 text-center text-xs">
                <div className="p-2 bg-white rounded-xl border border-[#ECC4A6]/60 flex items-center justify-center gap-1.5 text-[#2E271F] font-bold">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#D27848] shrink-0" />
                  <span className="text-[11px]">200-Pt Inspection</span>
                </div>
                <div className="p-2 bg-white rounded-xl border border-[#ECC4A6]/60 flex items-center justify-center gap-1.5 text-[#2E271F] font-bold">
                  <Award className="w-3.5 h-3.5 text-[#D27848] shrink-0" />
                  <span className="text-[11px]">1-Yr Warranty</span>
                </div>
                <div className="p-2 bg-white rounded-xl border border-[#ECC4A6]/60 flex items-center justify-center gap-1.5 text-[#2E271F] font-bold">
                  <RotateCcw className="w-3.5 h-3.5 text-[#D27848] shrink-0" />
                  <span className="text-[11px]">5-Day Refund</span>
                </div>
              </div>

            </div>

            {/* Right Column: Key Details & Pricing Card */}
            <div className="lg:col-span-5 bg-white p-4 sm:p-5 rounded-2xl border border-[#ECC4A6] shadow-xs flex flex-col justify-between space-y-4">
              
              <div>
                {/* Title & Trim */}
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h1 className="text-lg sm:text-xl font-black text-[#2E271F] tracking-tight leading-snug">
                      {car.year} {car.brand} {car.model}
                    </h1>
                    <p className="text-xs text-[#8B785F] font-medium mt-0.5">
                      {car.variant}
                    </p>
                  </div>

                  <span className="px-2 py-0.5 rounded-md bg-[#FDF3EA] text-[#D27848] text-xs font-black border border-[#ECC4A6] shrink-0 flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3 text-[#D27848]" />
                    <span>{car.inspectionScore}/10</span>
                  </span>
                </div>

                {/* Specs Highlights Pills */}
                <div className="flex items-center gap-1.5 flex-wrap my-3">
                  <span className="px-2 py-0.5 rounded-md bg-[#FBF0E6] text-[#74351B] text-xs font-semibold border border-[#ECC4A6]/50">
                    {formatShortKm(car.kilometers)}
                  </span>
                  <span className="px-2 py-0.5 rounded-md bg-[#FBF0E6] text-[#74351B] text-xs font-semibold border border-[#ECC4A6]/50">
                    {car.fuelType}
                  </span>
                  <span className="px-2 py-0.5 rounded-md bg-[#FBF0E6] text-[#74351B] text-xs font-semibold border border-[#ECC4A6]/50">
                    {car.transmission}
                  </span>
                  <span className="px-2 py-0.5 rounded-md bg-[#FBF0E6] text-[#74351B] text-xs font-semibold border border-[#ECC4A6]/50">
                    {car.owner}
                  </span>
                  <span className="px-2 py-0.5 rounded-md bg-[#FBF0E6] text-[#74351B] text-xs font-semibold border border-[#ECC4A6]/50">
                    {formatShortRto(car.rto)}
                  </span>
                </div>

                {/* Location */}
                <div className="p-2.5 bg-[#FDF8F4] rounded-xl border border-[#ECC4A6]/60 flex items-center gap-2 text-xs text-[#6D5D49] mb-3">
                  <MapPin className="w-3.5 h-3.5 text-[#D27848] shrink-0" />
                  <span className="truncate font-medium">{car.hubLocation}</span>
                </div>

                {/* Pricing Box */}
                <div className="p-3.5 bg-[#241A15] text-[#FDF8F4] rounded-xl shadow-xs border border-[#451E10]">
                  <div className="flex items-baseline justify-between">
                    <div>
                      <div className="text-[10px] font-bold text-[#ECC4A6] uppercase tracking-wider">Fixed Price</div>
                      <div className="text-xl sm:text-2xl font-black text-[#FDF8F4]">
                        {formatPrice(car.price)}
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="text-[10px] uppercase font-bold text-[#ECC4A6]">EMI Starting</div>
                      <div className="text-sm font-black text-[#D27848]">
                        ₹ {car.emiStarting.toLocaleString('en-IN')}/mo
                      </div>
                    </div>
                  </div>
                </div>

                {/* Refundable Reservation notice */}
                <div className="mt-2.5 p-2 bg-[#FDF3EA] rounded-xl border border-[#ECC4A6]/60 text-[11px] text-[#74351B] flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-[#D27848] shrink-0" />
                  <span><strong>₹999 Refundable Deposit</strong> holds this car exclusively for 48 hours.</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="space-y-2">
                <button
                  onClick={() => onReserveCar(car)}
                  className="w-full py-2.5 px-4 bg-[#D27848] hover:bg-[#B95C2E] text-white font-extrabold text-xs sm:text-sm rounded-xl shadow-sm transition-all flex items-center justify-center gap-2 active:scale-98"
                >
                  <Zap className="w-4 h-4" />
                  <span>Reserve Online for ₹999</span>
                </button>

                <div className="flex items-center justify-between text-xs text-[#8B785F] pt-1">
                  <span className="flex items-center gap-1 font-semibold text-[11px]">
                    <Phone className="w-3 h-3 text-[#D27848]" />
                    <span>+91 80 4725 9900</span>
                  </span>
                  <a
                    href={`https://wa.me/918047259900?text=Hi%20Kundapura%20Cars,%20I%20am%20interested%20in%20${encodeURIComponent(car.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#D27848] font-bold hover:underline flex items-center gap-1 text-[11px]"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>WhatsApp Hub</span>
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Clean Segmented Tab Navigation */}
          <div className="pt-2">
            <div className="flex gap-1.5 p-1 bg-[#F5EBE1] rounded-xl overflow-x-auto no-scrollbar border border-[#ECC4A6]/40">
              {[
                { id: 'overview', label: 'Car Overview' },
                { id: 'inspection', label: '200-Pt Inspection' },
                { id: 'specs', label: 'Specs & Features' },
                { id: 'emi', label: 'EMI Calculator' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex-1 py-2 px-3 text-xs font-extrabold rounded-lg transition-all whitespace-nowrap text-center ${
                    activeTab === tab.id
                      ? 'bg-white text-[#D27848] shadow-xs'
                      : 'text-[#6D5D49] hover:text-[#2E271F] hover:bg-white/50'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Tab 1: Clean Car Overview */}
          {activeTab === 'overview' && (
            <div className="space-y-4 animate-fade-in">
              {/* Structured Specs Grid */}
              <div className="bg-white p-4 sm:p-5 rounded-2xl border border-[#ECC4A6]/70 shadow-2xs">
                <h4 className="text-xs font-black text-[#8B785F] uppercase tracking-wider mb-3">
                  Vehicle Specifications
                </h4>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs">
                  <div className="p-2.5 bg-[#FDF8F4] rounded-xl border border-[#ECC4A6]/50 flex items-start gap-2 min-w-0 overflow-hidden">
                    <Calendar className="w-3.5 h-3.5 text-[#D27848] shrink-0 mt-0.5" />
                    <div className="min-w-0 flex-1">
                      <div className="text-[10px] text-[#8B785F] font-semibold uppercase tracking-wider truncate">Year</div>
                      <div className="font-bold text-[#2E271F] text-xs leading-tight mt-0.5 truncate">{car.year}</div>
                    </div>
                  </div>

                  <div className="p-2.5 bg-[#FDF8F4] rounded-xl border border-[#ECC4A6]/50 flex items-start gap-2 min-w-0 overflow-hidden">
                    <Gauge className="w-3.5 h-3.5 text-[#D27848] shrink-0 mt-0.5" />
                    <div className="min-w-0 flex-1">
                      <div className="text-[10px] text-[#8B785F] font-semibold uppercase tracking-wider truncate">Kilometers</div>
                      <div className="font-bold text-[#2E271F] text-xs leading-tight mt-0.5 truncate">{formatKm(car.kilometers)}</div>
                    </div>
                  </div>

                  <div className="p-2.5 bg-[#FDF8F4] rounded-xl border border-[#ECC4A6]/50 flex items-start gap-2 min-w-0 overflow-hidden">
                    <Fuel className="w-3.5 h-3.5 text-[#D27848] shrink-0 mt-0.5" />
                    <div className="min-w-0 flex-1">
                      <div className="text-[10px] text-[#8B785F] font-semibold uppercase tracking-wider truncate">Fuel Type</div>
                      <div className="font-bold text-[#2E271F] text-xs leading-tight mt-0.5 truncate">{car.fuelType}</div>
                    </div>
                  </div>

                  <div className="p-2.5 bg-[#FDF8F4] rounded-xl border border-[#ECC4A6]/50 flex items-start gap-2 min-w-0 overflow-hidden">
                    <Settings className="w-3.5 h-3.5 text-[#D27848] shrink-0 mt-0.5" />
                    <div className="min-w-0 flex-1">
                      <div className="text-[10px] text-[#8B785F] font-semibold uppercase tracking-wider truncate">Transmission</div>
                      <div className="font-bold text-[#2E271F] text-xs leading-tight mt-0.5 truncate">{car.transmission}</div>
                    </div>
                  </div>

                  <div className="p-2.5 bg-[#FDF8F4] rounded-xl border border-[#ECC4A6]/50 flex items-start gap-2 min-w-0 overflow-hidden">
                    <UserCheck className="w-3.5 h-3.5 text-[#D27848] shrink-0 mt-0.5" />
                    <div className="min-w-0 flex-1">
                      <div className="text-[10px] text-[#8B785F] font-semibold uppercase tracking-wider truncate">Ownership</div>
                      <div className="font-bold text-[#2E271F] text-xs leading-tight mt-0.5 truncate">{car.owner}</div>
                    </div>
                  </div>

                  <div className="p-2.5 bg-[#FDF8F4] rounded-xl border border-[#ECC4A6]/50 flex items-start gap-2 min-w-0 overflow-hidden">
                    <FileCheck className="w-3.5 h-3.5 text-[#D27848] shrink-0 mt-0.5" />
                    <div className="min-w-0 flex-1">
                      <div className="text-[10px] text-[#8B785F] font-semibold uppercase tracking-wider truncate">RTO Authority</div>
                      <div className="font-bold text-[#2E271F] text-xs leading-tight mt-0.5 break-words line-clamp-2" title={car.rto}>{car.rto}</div>
                    </div>
                  </div>

                  <div className="p-2.5 bg-[#FDF8F4] rounded-xl border border-[#ECC4A6]/50 flex items-start gap-2 min-w-0 overflow-hidden">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#D27848] shrink-0 mt-0.5" />
                    <div className="min-w-0 flex-1">
                      <div className="text-[10px] text-[#8B785F] font-semibold uppercase tracking-wider truncate">Insurance</div>
                      <div className="font-bold text-[#2E271F] text-xs leading-tight mt-0.5 break-words line-clamp-2" title={car.specs.insuranceValidity}>{car.specs.insuranceValidity}</div>
                    </div>
                  </div>

                  <div className="p-2.5 bg-[#FDF8F4] rounded-xl border border-[#ECC4A6]/50 flex items-start gap-2 min-w-0 overflow-hidden">
                    <Info className="w-3.5 h-3.5 text-[#D27848] shrink-0 mt-0.5" />
                    <div className="min-w-0 flex-1">
                      <div className="text-[10px] text-[#8B785F] font-semibold uppercase tracking-wider truncate">ARAI Mileage</div>
                      <div className="font-bold text-[#2E271F] text-xs leading-tight mt-0.5 break-words line-clamp-2" title={car.specs.mileageARAI}>{car.specs.mileageARAI}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Verified Highlights */}
              <div className="bg-white p-4 sm:p-5 rounded-2xl border border-[#ECC4A6]/70 shadow-2xs">
                <h4 className="text-xs font-black text-[#8B785F] uppercase tracking-wider mb-2.5">
                  Verified Highlights
                </h4>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {car.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 bg-[#FDF3EA] text-[#74351B] text-xs font-bold rounded-lg border border-[#ECC4A6]/50 flex items-center gap-1"
                    >
                      <Sparkles className="w-3 h-3 text-[#D27848]" />
                      <span>{tag}</span>
                    </span>
                  ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#6D5D49]">
                  <div className="p-2 bg-[#FDF8F4] rounded-lg border border-[#ECC4A6]/40 flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#D27848] shrink-0" />
                    <span>Zero structural damage or flood history</span>
                  </div>
                  <div className="p-2 bg-[#FDF8F4] rounded-lg border border-[#ECC4A6]/40 flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#D27848] shrink-0" />
                    <span>Diagnostics clear with zero active error codes</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Tab 2: 200-Point Inspection */}
          {activeTab === 'inspection' && (
            <div className="animate-fade-in">
              <InspectionReport car={car} />
            </div>
          )}

          {/* Tab 3: Detailed Specs & Features */}
          {activeTab === 'specs' && (
            <div className="bg-white p-4 sm:p-5 rounded-2xl border border-[#ECC4A6]/70 shadow-2xs animate-fade-in space-y-4">
              <h4 className="text-xs font-black text-[#8B785F] uppercase tracking-wider">
                Technical Specifications
              </h4>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs">
                <div className="p-2.5 bg-[#FDF8F4] rounded-xl border border-[#ECC4A6]/50 min-w-0 overflow-hidden">
                  <div className="text-[10px] text-[#8B785F] font-semibold uppercase tracking-wider truncate">Engine / Motor</div>
                  <div className="font-bold text-[#2E271F] text-xs leading-tight mt-0.5 break-words">{car.specs.engineCapacity}</div>
                </div>
                <div className="p-2.5 bg-[#FDF8F4] rounded-xl border border-[#ECC4A6]/50 min-w-0 overflow-hidden">
                  <div className="text-[10px] text-[#8B785F] font-semibold uppercase tracking-wider truncate">Max Power</div>
                  <div className="font-bold text-[#2E271F] text-xs leading-tight mt-0.5 break-words">{car.specs.maxPower}</div>
                </div>
                <div className="p-2.5 bg-[#FDF8F4] rounded-xl border border-[#ECC4A6]/50 min-w-0 overflow-hidden">
                  <div className="text-[10px] text-[#8B785F] font-semibold uppercase tracking-wider truncate">Mileage (ARAI)</div>
                  <div className="font-bold text-[#2E271F] text-xs leading-tight mt-0.5 break-words">{car.specs.mileageARAI}</div>
                </div>
                <div className="p-2.5 bg-[#FDF8F4] rounded-xl border border-[#ECC4A6]/50 min-w-0 overflow-hidden">
                  <div className="text-[10px] text-[#8B785F] font-semibold uppercase tracking-wider truncate">Seating Capacity</div>
                  <div className="font-bold text-[#2E271F] text-xs leading-tight mt-0.5 break-words">{car.specs.seatingCapacity} Seater</div>
                </div>
                <div className="p-2.5 bg-[#FDF8F4] rounded-xl border border-[#ECC4A6]/50 min-w-0 overflow-hidden">
                  <div className="text-[10px] text-[#8B785F] font-semibold uppercase tracking-wider truncate">Boot Space</div>
                  <div className="font-bold text-[#2E271F] text-xs leading-tight mt-0.5 break-words">{car.specs.bootSpace}</div>
                </div>
                <div className="p-2.5 bg-[#FDF8F4] rounded-xl border border-[#ECC4A6]/50 min-w-0 overflow-hidden">
                  <div className="text-[10px] text-[#8B785F] font-semibold uppercase tracking-wider truncate">Ground Clearance</div>
                  <div className="font-bold text-[#2E271F] text-xs leading-tight mt-0.5 break-words">{car.specs.groundClearance}</div>
                </div>
              </div>

              <h4 className="text-xs font-black text-[#8B785F] uppercase tracking-wider pt-2">
                Features &amp; Equipment
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {car.features.map((feat, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 text-xs font-semibold text-[#2E271F] p-2 bg-[#FDF8F4] rounded-lg border border-[#ECC4A6]/40"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#D27848] shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 4: EMI Calculator */}
          {activeTab === 'emi' && (
            <div className="animate-fade-in">
              <EmiCalculator carPrice={car.price} />
            </div>
          )}

        </div>

      </div>

      {/* ========================================================================= */}
      {/* FULLSCREEN PHOTO LIGHTBOX / ENLARGED VIEWER WITH TOUCH SWIPING & KEYBOARD */}
      {/* ========================================================================= */}
      {isLightboxOpen && (
        <div 
          className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-md flex flex-col justify-between p-3 sm:p-6 animate-fade-in select-none"
          onClick={closeLightbox}
        >
          {/* Lightbox Top Controls */}
          <div className="flex items-center justify-between text-white z-20" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-white/90">
                {car.year} {car.brand} {car.model}
              </span>
              <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full text-white/80">
                {activeImageIndex + 1} / {car.images.length}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsZoomed(!isZoomed)}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                title={isZoomed ? "Zoom Out" : "Zoom In"}
              >
                {isZoomed ? <ZoomOut className="w-5 h-5" /> : <ZoomIn className="w-5 h-5" />}
              </button>

              <button
                onClick={closeLightbox}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                title="Close (Esc)"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Main Enlarged Image Container with Touch Swipe */}
          <div 
            className="flex-1 flex items-center justify-center relative overflow-hidden my-2"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <img
              src={car.images[activeImageIndex]}
              alt={car.title}
              className={`max-h-[85vh] max-w-[95vw] object-contain rounded-lg transition-transform duration-300 ${
                isZoomed ? 'scale-150 cursor-grab active:cursor-grabbing' : 'scale-100 cursor-pointer'
              }`}
              onClick={() => setIsZoomed(!isZoomed)}
            />

            {/* Previous Photo Button */}
            {car.images.length > 1 && (
              <button
                onClick={prevImage}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-white/20 hover:bg-white/40 text-white transition-all backdrop-blur-xs shadow-lg"
                aria-label="Previous photo"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            )}

            {/* Next Photo Button */}
            {car.images.length > 1 && (
              <button
                onClick={nextImage}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-white/20 hover:bg-white/40 text-white transition-all backdrop-blur-xs shadow-lg"
                aria-label="Next photo"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            )}
          </div>

          {/* Lightbox Bottom Footer / Navigation Hint */}
          <div className="text-center text-xs text-white/60 z-20" onClick={(e) => e.stopPropagation()}>
            <span>{car.images.length > 1 ? 'Swipe or use Arrow Keys (← / →) to switch photos • Double-click to zoom' : 'Click to zoom • Esc or outside to close'}</span>
          </div>
        </div>
      )}

    </div>
  );
};
