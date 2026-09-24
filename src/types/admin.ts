export type LeadType = 'test_drive' | 'reservation' | 'emi_inquiry' | 'callback' | 'inspection_booking' | 'price_alert';
export type LeadStatus = 'new' | 'contacted' | 'scheduled' | 'closed' | 'cancelled';

export interface CustomerLead {
  id: string;
  customerName: string;
  phone: string;
  email?: string;
  carId?: string;
  carTitle?: string;
  carImage?: string;
  carPrice?: number;
  type: LeadType;
  status: LeadStatus;
  createdAt: string;
  hubLocation?: string;
  preferredDate?: string;
  preferredTime?: string;
  notes?: string;
  amountPaid?: number;
  paymentMethod?: string;
}

export interface HubData {
  id: string;
  name: string;
  address: string;
  landmark: string;
  timing: string;
  phone: string;
  carCount: string;
  image: string;
  amenities?: string[];
  features?: string[];
  mapUrl?: string;
}

export interface SiteSettings {
  siteName: string;
  tagline: string;
  announcementText: string;
  promoBadgeText: string;
  supportPhone: string;
  whatsappNumber: string;
  supportEmail: string;
  officeAddress: string;
  adminPin: string;
  warrantyPeriodMonths: number;
  freeRcTransfer: boolean;
  moneyBackGuaranteeDays: number;
}
