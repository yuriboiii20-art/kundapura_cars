export type BodyType = 'SUV' | 'Sedan' | 'Hatchback' | 'MUV' | 'Luxury' | 'EV';
export type FuelType = 'Petrol' | 'Diesel' | 'Electric' | 'CNG' | 'Hybrid';
export type TransmissionType = 'Manual' | 'Automatic';
export type OwnerType = '1st Owner' | '2nd Owner' | '3rd Owner';

export interface InspectionCategory {
  title: string;
  score: string;
  checksTotal: number;
  checksPassed: number;
  status: 'passed' | 'good';
  highlights: string[];
}

export interface CarSpecs {
  engineCapacity: string;
  maxPower: string;
  mileageARAI: string;
  seatingCapacity: number;
  airbags: number;
  bootSpace: string;
  sunroof: string;
  insuranceValidity: string;
  groundClearance: string;
  fuelTank: string;
}

export interface Car {
  id: string;
  title: string;
  brand: string;
  model: string;
  variant: string;
  year: number;
  price: number;
  originalPrice?: number;
  emiStarting: number;
  kilometers: number;
  fuelType: FuelType;
  transmission: TransmissionType;
  bodyType: BodyType;
  owner: OwnerType;
  rto: string;
  hubLocation: string;
  images: string[];
  color: string;
  isAssured: boolean;
  featured?: boolean;
  trending?: boolean;
  tags: string[];
  inspectionScore: number;
  inspectionSummary: {
    engineTransmission: InspectionCategory;
    steeringSuspension: InspectionCategory;
    bodyPaint: InspectionCategory;
    interiorElectricals: InspectionCategory;
    acTyres: InspectionCategory;
  };
  features: string[];
  specs: CarSpecs;
}

export interface FilterState {
  searchQuery: string;
  bodyTypes: BodyType[];
  brands: string[];
  fuelTypes: FuelType[];
  transmissions: TransmissionType[];
  owners: OwnerType[];
  minPrice: number;
  maxPrice: number;
  minYear: number;
  maxKm: number;
  sortBy: 'recommended' | 'price-asc' | 'price-desc' | 'km-asc' | 'year-desc';
}

export interface TestDriveBooking {
  carId: string;
  carTitle: string;
  customerName: string;
  phone: string;
  email: string;
  preferredDate: string;
  preferredTimeSlot: string;
  deliveryType: 'hub' | 'home';
  bangaloreArea: string;
}
