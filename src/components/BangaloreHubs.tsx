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
import { BANGALORE_HUBS } from '../data/carsData';

interface BangaloreHubsProps {
  onFilterByHub?: (hubName: string) => void;
}

export const BangaloreHubs: React.FC<BangaloreHubsProps> = () => {
  const [selectedHub, setSelectedHub] = useState(BANGALORE_HUBS[0].id);

  return (
    <section id="bangalore-hubs" className="py-12 sm:py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 text-brand-700 text-xs font-bold border border-brand-200 mb-3">
            <MapPin className="w-3.5 h-3.5 text-brand-600" />
            <span>Bangalore Physical Experience Centers</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
            Visit Our Bangalore Experience Hubs
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
            Walk into any of our 5 certified experience yards across Bengaluru. Inspect vehicles, take extended test drives, and complete paperwork in 45 minutes.
          </p>
        </div>

        {/* Hubs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BANGALORE_HUBS.map((hub) => {
            const isSelected = selectedHub === hub.id;
            return (
              <div
                key={hub.id}
                onClick={() => setSelectedHub(hub.id)}
                className={`bg-slate-50 hover:bg-white rounded-3xl border transition-all duration-300 overflow-hidden flex flex-col justify-between cursor-pointer ${
                  isSelected
                    ? 'border-brand-500 shadow-hover ring-2 ring-brand-500/10'
                    : 'border-slate-200 shadow-xs hover:border-slate-300'
                }`}
              >
                
                {/* Hub Photo Header */}
                <div className="relative h-44 bg-slate-800 overflow-hidden">
                  <img
                    src={hub.image}
                    alt={hub.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/30" />
                  
                  <div className="absolute top-3 left-3">
                    <span className="badge-pill bg-white/95 text-slate-900 font-bold border border-white">
                      <CarIcon className="w-3 h-3 text-brand-600" />
                      <span>{hub.carCount}</span>
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <h3 className="font-extrabold text-base leading-snug drop-shadow-sm">
                      {hub.name}
                    </h3>
                  </div>
                </div>

                {/* Hub Details */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  
                  <div className="space-y-2.5 text-xs text-slate-600">
                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                      <span>{hub.address}</span>
                    </div>

                    <div className="flex items-center gap-2 text-[11px] text-slate-500 font-medium pl-6">
                      <Sparkles className="w-3 h-3 text-amber-500 shrink-0" />
                      <span>Landmark: {hub.landmark}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                      <span className="font-semibold text-slate-800">{hub.timing}</span>
                    </div>
                  </div>

                  {/* Amenities Chips */}
                  <div className="pt-2 border-t border-slate-200/60">
                    <div className="text-[10px] uppercase font-bold text-slate-400 mb-1.5">
                      Hub Amenities
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {hub.amenities.map((a, i) => (
                        <span
                          key={i}
                          className="text-[10px] font-semibold bg-white text-slate-700 px-2 py-0.5 rounded-md border border-slate-200 flex items-center gap-1"
                        >
                          <CheckCircle2 className="w-2.5 h-2.5 text-emerald-600" />
                          {a}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Hub Actions */}
                  <div className="pt-3 flex gap-2">
                    <a
                      href={`tel:${hub.phone.replace(/\s+/g, '')}`}
                      className="flex-1 py-2 px-3 bg-white hover:bg-slate-100 text-slate-800 text-xs font-bold rounded-xl border border-slate-200 transition-colors flex items-center justify-center gap-1.5"
                    >
                      <Phone className="w-3.5 h-3.5 text-brand-600" />
                      <span>{hub.phone}</span>
                    </a>

                    <a
                      href={`https://maps.google.com/?q=${encodeURIComponent(hub.name + ' ' + hub.address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2 px-3 bg-brand-600 hover:bg-brand-700 text-white text-xs font-extrabold rounded-xl transition-all shadow-xs flex items-center justify-center gap-1"
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
