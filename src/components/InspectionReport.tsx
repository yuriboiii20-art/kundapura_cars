import React, { useState } from 'react';
import { 
  CheckCircle2, 
  ShieldCheck, 
  Activity, 
  Disc, 
  Sparkles, 
  Tv, 
  Wind 
} from 'lucide-react';
import { Car } from '../types/car';

interface InspectionReportProps {
  car: Car;
}

export const InspectionReport: React.FC<InspectionReportProps> = ({ car }) => {
  const [activeTab, setActiveTab] = useState<'engine' | 'suspension' | 'body' | 'electricals' | 'ac'>('engine');

  const categories = [
    { id: 'engine', label: 'Engine & Gearbox', icon: Activity, data: car.inspectionSummary.engineTransmission },
    { id: 'suspension', label: 'Steering & Brakes', icon: Disc, data: car.inspectionSummary.steeringSuspension },
    { id: 'body', label: 'Body & Paint', icon: Sparkles, data: car.inspectionSummary.bodyPaint },
    { id: 'electricals', label: 'Cabin & Electronics', icon: Tv, data: car.inspectionSummary.interiorElectricals },
    { id: 'ac', label: 'AC & Tyres', icon: Wind, data: car.inspectionSummary.acTyres }
  ] as const;

  const currentCategory = categories.find((c) => c.id === activeTab) || categories[0];

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-xs">
      
      {/* Header with 200-Point Pass Badge */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-5 border-b border-slate-100">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </span>
            <h4 className="text-lg font-black text-slate-900">
              200-Point Kundapura Assured Inspection
            </h4>
          </div>
          <p className="text-xs text-slate-500">
            Conducted by certified Bangalore Master Automotive Engineers. 0 Major Accidental History Guaranteed.
          </p>
        </div>

        <div className="flex items-center gap-3 bg-emerald-50 px-4 py-2 rounded-xl border border-emerald-200 shrink-0">
          <div>
            <div className="text-[10px] uppercase font-bold text-emerald-700 tracking-wider">
              Overall Score
            </div>
            <div className="text-xl font-black text-emerald-900">
              {car.inspectionScore} / 10.0
            </div>
          </div>
          <div className="h-8 w-px bg-emerald-200" />
          <div className="text-xs font-bold text-emerald-800">
            200 / 200<br />Checks Passed
          </div>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-4 border-b border-slate-100">
        {categories.map((cat) => {
          const Icon = cat.icon;
          const isActive = activeTab === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id as any)}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all border ${
                isActive
                  ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                  : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
              }`}
            >
              <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-brand-300' : 'text-slate-500'}`} />
              <span>{cat.label}</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-md ${
                isActive ? 'bg-slate-800 text-slate-200' : 'bg-slate-200 text-slate-700'
              }`}>
                {cat.data.checksPassed}/{cat.data.checksTotal}
              </span>
            </button>
          );
        })}
      </div>

      {/* Tab Detail Pane */}
      <div className="pt-5">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h5 className="font-bold text-slate-900 text-sm">
              {currentCategory.data.title}
            </h5>
            <span className="text-xs text-slate-500">
              All {currentCategory.data.checksTotal} critical checkpoints verified with zero defects
            </span>
          </div>

          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-100/80 text-emerald-800 text-xs font-bold">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>Passed ({currentCategory.data.score})</span>
          </div>
        </div>

        {/* Highlights Checklist */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
          {currentCategory.data.highlights.map((item, idx) => (
            <div
              key={idx}
              className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-700"
            >
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span className="font-semibold">{item}</span>
            </div>
          ))}
        </div>

        {/* Diagnostic Confirmation Box */}
        <div className="p-3.5 rounded-xl bg-brand-50/60 border border-brand-100 flex items-center justify-between text-xs">
          <div className="text-slate-700">
            <strong className="text-brand-900 font-bold">Bangalore OBD Diagnostics:</strong> ECU scan verified zero trouble codes (DTCs), odometer tampering check passed, and chassis laser alignment verified.
          </div>
          <span className="text-[10px] font-extrabold uppercase px-2 py-1 rounded bg-brand-600 text-white shrink-0 ml-3">
            Verified
          </span>
        </div>
      </div>

    </div>
  );
};
