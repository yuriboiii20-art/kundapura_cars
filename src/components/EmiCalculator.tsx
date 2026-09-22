import React, { useState } from 'react';
import { Calculator, CheckCircle, Percent, Calendar, Shield } from 'lucide-react';
import { formatIndianCurrency, calculateMonthlyEMI } from '../utils/formatters';

interface EmiCalculatorProps {
  carPrice: number;
}

export const EmiCalculator: React.FC<EmiCalculatorProps> = ({ carPrice }) => {
  // Down payment default 20%
  const defaultDownPayment = Math.round(carPrice * 0.2);
  const [downPayment, setDownPayment] = useState(defaultDownPayment);
  const [tenureYears, setTenureYears] = useState(5);
  const [interestRate, setInterestRate] = useState(9.5);

  const loanAmount = Math.max(0, carPrice - downPayment);
  const { monthlyEmi, totalInterest, totalAmount } = calculateMonthlyEMI(
    loanAmount,
    interestRate,
    tenureYears
  );

  const principalPercentage = Math.round((loanAmount / totalAmount) * 100) || 0;
  const interestPercentage = 100 - principalPercentage;

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-xs">
      
      {/* Title */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center">
            <Calculator className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-extrabold text-slate-900 text-base">
              Customized EMI &amp; Loan Planner
            </h4>
            <p className="text-xs text-slate-500">
              Partnered with HDFC, ICICI, SBI, Axis &amp; Kotak for instant Bangalore approvals
            </p>
          </div>
        </div>

        <div className="hidden sm:flex items-center gap-1.5 text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg text-xs font-bold border border-emerald-200">
          <Shield className="w-3.5 h-3.5 text-emerald-600" />
          <span>Zero Foreclosure Fees</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        
        {/* Sliders column */}
        <div className="lg:col-span-7 space-y-5">
          
          {/* Down Payment Slider */}
          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label className="text-xs font-bold text-slate-700">
                Down Payment ({Math.round((downPayment / carPrice) * 100)}%)
              </label>
              <span className="text-xs font-extrabold text-brand-600 bg-brand-50 px-2 py-0.5 rounded border border-brand-200">
                {formatIndianCurrency(downPayment)}
              </span>
            </div>
            <input
              type="range"
              min={Math.round(carPrice * 0.1)}
              max={Math.round(carPrice * 0.7)}
              step={10000}
              value={downPayment}
              onChange={(e) => setDownPayment(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg cursor-pointer accent-brand-600"
            />
            <div className="flex justify-between text-[10px] text-slate-400 font-semibold mt-1">
              <span>Min 10% ({formatIndianCurrency(carPrice * 0.1)})</span>
              <span>Max 70%</span>
            </div>
          </div>

          {/* Tenure Slider */}
          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label className="text-xs font-bold text-slate-700 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-slate-500" />
                Loan Tenure ({tenureYears} Years / {tenureYears * 12} Months)
              </label>
              <span className="text-xs font-extrabold text-slate-900 bg-slate-100 px-2 py-0.5 rounded">
                {tenureYears} Years
              </span>
            </div>
            <div className="flex gap-2">
              {[2, 3, 4, 5, 6, 7].map((yr) => (
                <button
                  key={yr}
                  onClick={() => setTenureYears(yr)}
                  className={`flex-1 py-1.5 rounded-lg text-xs font-bold transition-all border ${
                    tenureYears === yr
                      ? 'bg-slate-900 text-white border-slate-900'
                      : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
                  }`}
                >
                  {yr}Y
                </button>
              ))}
            </div>
          </div>

          {/* Interest Rate Slider */}
          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label className="text-xs font-bold text-slate-700 flex items-center gap-1">
                <Percent className="w-3.5 h-3.5 text-slate-500" />
                Annual Interest Rate
              </label>
              <span className="text-xs font-extrabold text-slate-900 bg-slate-100 px-2 py-0.5 rounded">
                {interestRate}% p.a.
              </span>
            </div>
            <input
              type="range"
              min="8.0"
              max="14.0"
              step="0.25"
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg cursor-pointer accent-brand-600"
            />
            <div className="flex justify-between text-[10px] text-slate-400 font-semibold mt-1">
              <span>8.0% (Prime Bank)</span>
              <span>9.5% (Average)</span>
              <span>14.0%</span>
            </div>
          </div>

        </div>

        {/* EMI Summary Card */}
        <div className="lg:col-span-5 bg-gradient-to-br from-brand-900 to-indigo-950 text-white p-5 rounded-2xl shadow-md">
          <div className="text-xs font-bold text-brand-200 uppercase tracking-wider mb-1">
            Estimated Monthly Payment
          </div>
          <div className="text-3xl font-black text-white mb-4">
            {formatIndianCurrency(monthlyEmi)}
            <span className="text-xs font-medium text-brand-200 ml-1">/ month</span>
          </div>

          {/* Ratio bar */}
          <div className="space-y-2 mb-4">
            <div className="h-2 w-full bg-white/20 rounded-full overflow-hidden flex">
              <div
                style={{ width: `${principalPercentage}%` }}
                className="bg-brand-400 h-full"
                title={`Principal: ${principalPercentage}%`}
              />
              <div
                style={{ width: `${interestPercentage}%` }}
                className="bg-amber-400 h-full"
                title={`Interest: ${interestPercentage}%`}
              />
            </div>
            <div className="flex justify-between text-[11px] text-slate-300 font-medium">
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-brand-400" />
                Principal: {formatIndianCurrency(loanAmount)}
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                Interest: {formatIndianCurrency(totalInterest)}
              </span>
            </div>
          </div>

          <div className="pt-3 border-t border-white/10 flex justify-between text-xs font-semibold text-slate-200 mb-4">
            <span>Total Payable Amount</span>
            <span className="font-extrabold text-white">{formatIndianCurrency(totalAmount + downPayment)}</span>
          </div>

          <div className="flex items-center gap-2 text-[11px] text-brand-200 bg-white/10 p-2.5 rounded-xl">
            <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Instant approval with KYC in 30 minutes in Bangalore</span>
          </div>
        </div>

      </div>

    </div>
  );
};
