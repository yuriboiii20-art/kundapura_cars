import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Clock, 
  Car as CarIcon, 
  Sparkles, 
  Navigation,
  CheckCircle2
} from 'lucide-react';
import { KUNDAPURA_HUBS } from '../data/carsData';

interface KundapuraHubsProps {
  onFilterByHub?: (hubName: string) => void;
}

export const KundapuraHubs: React.FC<KundapuraHubsProps> = () => {
  const [selectedHub, setSelectedHub] = useState(KUNDAPURA_HUBS[0].id);

  return (
    <section id="kundapura-hubs" className="py-12 sm:py-16 bg-white border-b border-[#ECC4A6]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FDF3EA] text-[#74351B] text-xs font-bold border border-[#ECC4A6] mb-3">
            <MapPin className="w-3.5 h-3.5 text-[#D27848]" />
            <span>Kundapura Experience Centers</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#2E271F] tracking-tight">
            Visit Our Kundapura & Coastal Hubs
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[#8B785F] leading-relaxed">
            Walk into any of our certified experience yards across Kundapura and Coastal Karnataka. Inspect vehicles in person, verify documents, and complete paperwork in 45 minutes.
          </p>
        </div>

        {/* Hubs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {KUNDAPURA_HUBS.map((hub) => {
            const isSelected = selectedHub === hub.id;
            return (
              <div
                key={hub.id}
                onClick={() => setSelectedHub(hub.id)}
                className={`bg-[#FDF8F4] hover:bg-white rounded-3xl border transition-all duration-300 overflow-hidden flex flex-col justify-between cursor-pointer ${
                  isSelected
                    ? 'border-[#D27848] shadow-hover ring-2 ring-[#D27848]/20'
                    : 'border-[#ECC4A6]/70 shadow-subtle hover:border-[#D27848]'
                }`}
              >
                
                {/* Hub Photo Header */}
                <div className="relative h-44 bg-[#241A15] overflow-hidden">
                  <img
                    src={hub.image}
                    alt={hub.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#241A15]/90 via-transparent to-[#241A15]/30" />
                  
                  <div className="absolute top-3 left-3">
                    <span className="badge-pill bg-[#FDF8F4] text-[#74351B] font-bold border border-[#ECC4A6]">
                      <CarIcon className="w-3 h-3 text-[#D27848]" />
                      <span>{hub.carCount}</span>
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 text-[#FDF8F4]">
                    <h3 className="font-extrabold text-base leading-snug drop-shadow-sm">
                      {hub.name}
                    </h3>
                  </div>
                </div>

                {/* Hub Details */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  
                  <div className="space-y-2.5 text-xs text-[#6D5D49]">
                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-[#D27848] shrink-0 mt-0.5" />
                      <span className="text-[#2E271F]">{hub.address}</span>
                    </div>

                    <div className="flex items-center gap-2 text-[11px] text-[#8B785F] font-medium pl-6">
                      <Sparkles className="w-3 h-3 text-[#D27848]" />
                      <span>Landmark: {hub.landmark}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-[#AA957A] shrink-0" />
                      <span className="font-semibold text-[#2E271F]">{hub.timing}</span>
                    </div>
                  </div>

                  {/* Amenities Chips */}
                  <div className="pt-2 border-t border-[#ECC4A6]/50">
                    <div className="text-[10px] uppercase font-bold text-[#AA957A] mb-1.5">
                      Hub Amenities
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {hub.amenities.map((a, i) => (
                        <span
                          key={i}
                          className="text-[10px] font-semibold bg-white text-[#74351B] px-2 py-0.5 rounded-md border border-[#ECC4A6]/70 flex items-center gap-1"
                        >
                          <CheckCircle2 className="w-2.5 h-2.5 text-[#D27848]" />
                          {a}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Hub Actions */}
                  <div className="pt-3 flex gap-2">
                    <a
                      href={`tel:${hub.phone.replace(/\s+/g, '')}`}
                      className="flex-1 py-2 px-3 bg-[#FBF0E6] hover:bg-[#F7DEC9] text-[#74351B] text-xs font-bold rounded-xl border border-[#ECC4A6] transition-colors flex items-center justify-center gap-1.5"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#D27848]" />
                      <span>{hub.phone}</span>
                    </a>

                    <a
                      href={`https://maps.google.com/?q=${encodeURIComponent(hub.name + ' ' + hub.address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2 px-3 bg-[#D27848] hover:bg-[#B95C2E] text-white text-xs font-extrabold rounded-xl transition-all shadow-xs flex items-center justify-center gap-1"
                    >
                      <Navigation className="w-3.5 h-3.5" />
                      <span>Directions</span>
                    </a>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export const BangaloreHubs = KundapuraHubs;
