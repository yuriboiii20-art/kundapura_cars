export function formatPrice(amount: number): string {
  if (amount >= 10000000) {
    const cr = (amount / 10000000).toFixed(2);
    return `₹ ${cr.replace(/\.00$/, '')} Cr`;
  }
  if (amount >= 100000) {
    const lakh = (amount / 100000).toFixed(2);
    return `₹ ${lakh.replace(/\.00$/, '')} Lakh`;
  }
  return `₹ ${amount.toLocaleString('en-IN')}`;
}

export function formatIndianCurrency(amount: number): string {
  return `₹ ${Math.round(amount).toLocaleString('en-IN')}`;
}

export function formatKm(km: number): string {
  return `${km.toLocaleString('en-IN')} km`;
}

export function formatShortKm(km: number): string {
  if (km >= 1000) {
    const k = (km / 1000).toFixed(1);
    return `${k.replace(/\.0$/, '')}K km`;
  }
  return `${km} km`;
}

export function formatShortRto(rto: string): string {
  const match = rto.match(/KA[- ]?(\d+)/i);
  if (match) {
    return `KA${match[1]}`;
  }
  return rto.split(' ')[0] || 'KA01';
}

export function calculateMonthlyEMI(
  principal: number,
  annualInterestRate: number = 9.5,
  tenureYears: number = 5
): {
  monthlyEmi: number;
  totalInterest: number;
  totalAmount: number;
} {
  const monthlyRate = annualInterestRate / (12 * 100);
  const totalMonths = tenureYears * 12;
  
  if (monthlyRate === 0) {
    const monthlyEmi = principal / totalMonths;
    return {
      monthlyEmi,
      totalInterest: 0,
      totalAmount: principal
    };
  }

  const emi =
    (principal * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
    (Math.pow(1 + monthlyRate, totalMonths) - 1);

  const totalAmount = emi * totalMonths;
  const totalInterest = totalAmount - principal;

  return {
    monthlyEmi: Math.round(emi),
    totalInterest: Math.round(totalInterest),
    totalAmount: Math.round(totalAmount)
  };
}

