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
    <div className="bg-white rounded-3xl border border-[#ECC4A6] p-5 sm:p-6 shadow-subtle">
      
      {/* Title */}
      <div className="flex items-center justify-between pb-4 border-b border-[#ECC4A6]/60 mb-6">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-[#241A15] text-[#D27848] flex items-center justify-center border border-[#451E10]">
            <Calculator className="w-4 h-4" />
          </div>
          <div>
            <h4 className="font-extrabold text-[#2E271F] text-base">
              Customized EMI &amp; Loan Planner
            </h4>
            <p className="text-xs text-[#8B785F]">
              Partnered with top banks &amp; financiers for instant Kundapura approvals
            </p>
          </div>
        </div>

        <div className="hidden sm:flex items-center gap-1.5 text-[#74351B] bg-[#FDF3EA] px-2.5 py-1 rounded-xl text-xs font-bold border border-[#ECC4A6]">
          <Shield className="w-3.5 h-3.5 text-[#D27848]" />
          <span>Zero Foreclosure Fees</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        
        {/* Sliders column */}
        <div className="lg:col-span-7 space-y-5">
          
          {/* Down Payment Slider */}
          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label className="text-xs font-bold text-[#2E271F]">
                Down Payment ({Math.round((downPayment / carPrice) * 100)}%)
              </label>
              <span className="text-xs font-extrabold text-white bg-[#D27848] px-2 py-0.5 rounded-md">
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
              className="w-full h-2 bg-[#F7DEC9] rounded-lg cursor-pointer accent-[#D27848]"
            />
            <div className="flex justify-between text-[10px] text-[#8B785F] font-semibold mt-1">
              <span>Min 10% ({formatIndianCurrency(carPrice * 0.1)})</span>
              <span>Max 70%</span>
            </div>
          </div>

          {/* Tenure Slider */}
          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label className="text-xs font-bold text-[#2E271F] flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-[#D27848]" />
                Loan Tenure ({tenureYears} Years / {tenureYears * 12} Months)
              </label>
              <span className="text-xs font-extrabold text-[#74351B] bg-[#FDF3EA] px-2 py-0.5 rounded-md border border-[#ECC4A6]">
                {tenureYears} Years
              </span>
            </div>
            <div className="flex gap-2">
              {[2, 3, 4, 5, 6, 7].map((yr) => (
                <button
                  key={yr}
                  onClick={() => setTenureYears(yr)}
                  className={`flex-1 py-1.5 rounded-xl text-xs font-bold transition-all border ${
                    tenureYears === yr
                      ? 'bg-[#D27848] text-white border-[#B95C2E] shadow-xs'
                      : 'bg-[#FBF0E6] hover:bg-[#F7DEC9] text-[#74351B] border-[#ECC4A6]'
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
              <label className="text-xs font-bold text-[#2E271F] flex items-center gap-1">
                <Percent className="w-3.5 h-3.5 text-[#D27848]" />
                Annual Interest Rate
              </label>
              <span className="text-xs font-extrabold text-[#74351B] bg-[#FDF3EA] px-2 py-0.5 rounded-md border border-[#ECC4A6]">
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
              className="w-full h-2 bg-[#F7DEC9] rounded-lg cursor-pointer accent-[#D27848]"
            />
            <div className="flex justify-between text-[10px] text-[#8B785F] font-semibold mt-1">
              <span>8.0% (Prime Bank)</span>
              <span>9.5% (Average)</span>
              <span>14.0%</span>
            </div>
          </div>

        </div>

        {/* EMI Summary Card (Warm Dark Espresso with Warm Apricot highlights) */}
        <div className="lg:col-span-5 bg-[#241A15] text-[#FDF8F4] p-5 sm:p-6 rounded-3xl shadow-xl border border-[#451E10]">
          <div className="text-xs font-bold text-[#ECC4A6] uppercase tracking-wider mb-1">
            Estimated Monthly Payment
          </div>
          <div className="text-3xl font-black text-[#D27848] mb-4">
            {formatIndianCurrency(monthlyEmi)}
            <span className="text-xs font-medium text-[#DFCFBA] ml-1">/ month</span>
          </div>

          {/* Ratio bar */}
          <div className="space-y-2 mb-4">
            <div className="h-2.5 w-full bg-[#17100D] rounded-full overflow-hidden flex">
              <div
                style={{ width: `${principalPercentage}%` }}
                className="bg-[#D27848] h-full"
                title={`Principal: ${principalPercentage}%`}
              />
              <div
                style={{ width: `${interestPercentage}%` }}
                className="bg-[#ECC4A6] h-full"
                title={`Interest: ${interestPercentage}%`}
              />
            </div>
            <div className="flex justify-between text-[11px] text-[#DFCFBA] font-medium">
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-[#D27848]" />
                Principal: {formatIndianCurrency(loanAmount)}
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-[#ECC4A6]" />
                Interest: {formatIndianCurrency(totalInterest)}
              </span>
            </div>
          </div>

          <div className="pt-3 border-t border-[#451E10] flex justify-between text-xs font-semibold text-[#DFCFBA] mb-4">
            <span>Total Payable Amount</span>
            <span className="font-extrabold text-[#FDF8F4]">{formatIndianCurrency(totalAmount + downPayment)}</span>
          </div>

          <div className="flex items-center gap-2 text-[11px] text-[#DFCFBA] bg-[#17100D] border border-[#451E10] p-2.5 rounded-2xl">
            <CheckCircle className="w-4 h-4 text-[#D27848] shrink-0" />
            <span>Instant approval with KYC in 30 minutes in Kundapura</span>
          </div>
        </div>

      </div>

    </div>
  );
};

