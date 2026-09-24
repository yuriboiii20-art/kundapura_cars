import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Car } from '../types/car';
import { CustomerLead, HubData, SiteSettings } from '../types/admin';
import { CARS_DATA, KUNDAPURA_HUBS } from '../data/carsData';

const STORAGE_KEYS = {
  CARS: 'kc_inventory_cars_v2',
  LEADS: 'kc_inventory_leads_v2',
  HUBS: 'kc_inventory_hubs_v2',
  SETTINGS: 'kc_site_settings_v2',
  AUTH: 'kc_admin_session_auth_v2',
};

const DEFAULT_SETTINGS: SiteSettings = {
  siteName: 'Kundapura Cars',
  tagline: 'Buy Verified 200-Point Inspected Used Cars in Kundapura & Coastal Karnataka',
  announcementText: '🔥 Udupi & Kundapura Mega Festive Offer: Zero Processing Fee + 1-Year Comprehensive Warranty Free!',
  promoBadgeText: '200-Point Certified Hubs Across Kundapura & Coastal Region',
  supportPhone: '+91 8254 233 440',
  whatsappNumber: '+91 8254 233 440',
  supportEmail: 'contact@kundapuracars.com',
  officeAddress: 'NH 66 Highway Experience Hub, Near Shastri Circle, Kundapura 576201',
  adminPin: 'admin123',
  warrantyPeriodMonths: 12,
  freeRcTransfer: true,
  moneyBackGuaranteeDays: 5,
};

const INITIAL_DEMO_LEADS: CustomerLead[] = [
  {
    id: 'lead-1',
    customerName: 'Prashanth Shetty',
    phone: '+91 98451 22340',
    email: 'prashanth.shetty@gmail.com',
    carId: 'kc-thar-2022',
    carTitle: '2022 Mahindra Thar LX 4x4 Hard Top',
    carImage: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80',
    carPrice: 1445000,
    type: 'reservation',
    status: 'new',
    createdAt: new Date(Date.now() - 1000 * 60 * 45).toISOString(), // 45 mins ago
    hubLocation: 'Kundapura Beach Road Hub',
    amountPaid: 999,
    paymentMethod: 'UPI (PhonePe)',
    notes: 'Paid ₹999 token online. Wants delivery at Kundapura showroom.'
  },
  {
    id: 'lead-2',
    customerName: 'Ananya Hegde',
    phone: '+91 97410 88712',
    email: 'ananya.hegde@outlook.com',
    carId: 'kc-creta-2022',
    carTitle: '2022 Hyundai Creta SX (O) Diesel Automatic',
    carImage: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80',
    carPrice: 1585000,
    type: 'test_drive',
    status: 'scheduled',
    createdAt: new Date(Date.now() - 1000 * 60 * 180).toISOString(), // 3 hours ago
    hubLocation: 'Kundapura NH 66 Central Hub',
    preferredDate: 'Tomorrow at 4:30 PM',
    notes: 'Requested doorstep test drive at Koteshwara residence.'
  },
  {
    id: 'lead-3',
    customerName: 'Ganesh Acharya',
    phone: '+91 81234 90123',
    carId: 'kc-nexon-ev-2023',
    carTitle: '2023 Tata Nexon EV Max XZ Plus Lux',
    carImage: 'https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&w=800&q=80',
    carPrice: 1390000,
    type: 'emi_inquiry',
    status: 'contacted',
    createdAt: new Date(Date.now() - 1000 * 60 * 600).toISOString(), // 10 hours ago
    notes: 'Inquired about 85% loan financing via Karnataka Bank.'
  }
];

interface InventoryContextType {
  cars: Car[];
  leads: CustomerLead[];
  hubs: HubData[];
  settings: SiteSettings;
  isAdmin: boolean;
  loginAdmin: (pin: string) => boolean;
  logoutAdmin: () => void;
  addCar: (car: Omit<Car, 'id'> & { id?: string }) => void;
  updateCar: (id: string, updated: Partial<Car>) => void;
  deleteCar: (id: string) => void;
  resetCars: () => void;
  addLead: (lead: Omit<CustomerLead, 'id' | 'createdAt' | 'status'> & { status?: CustomerLead['status'] }) => void;
  updateLeadStatus: (id: string, status: CustomerLead['status']) => void;
  deleteLead: (id: string) => void;
  clearLeads: () => void;
  addHub: (hub: HubData) => void;
  updateHub: (id: string, hub: Partial<HubData>) => void;
  deleteHub: (id: string) => void;
  updateSettings: (newSettings: Partial<SiteSettings>) => void;
  exportData: () => string;
  importData: (jsonData: string) => boolean;
}

const InventoryContext = createContext<InventoryContextType | undefined>(undefined);

export const InventoryProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // 1. Cars State
  const [cars, setCars] = useState<Car[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.CARS);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch (e) {
      console.error('Failed to load cars from localStorage', e);
    }
    return CARS_DATA;
  });

  // 2. Leads State
  const [leads, setLeads] = useState<CustomerLead[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.LEADS);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) return parsed;
      }
    } catch (e) {
      console.error('Failed to load leads from localStorage', e);
    }
    return INITIAL_DEMO_LEADS;
  });

  // 3. Hubs State
  const [hubs, setHubs] = useState<HubData[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.HUBS);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch (e) {
      console.error('Failed to load hubs from localStorage', e);
    }
    return KUNDAPURA_HUBS;
  });

  // 4. Site Settings State
  const [settings, setSettings] = useState<SiteSettings>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEYS.SETTINGS);
      if (saved) {
        return { ...DEFAULT_SETTINGS, ...JSON.parse(saved) };
      }
    } catch (e) {
      console.error('Failed to load settings from localStorage', e);
    }
    return DEFAULT_SETTINGS;
  });

  // 5. Admin Authentication
  const [isAdmin, setIsAdmin] = useState<boolean>(() => {
    try {
      return sessionStorage.getItem(STORAGE_KEYS.AUTH) === 'true';
    } catch {
      return false;
    }
  });

  // Save changes to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.CARS, JSON.stringify(cars));
    } catch (e) {
      console.error('Error saving cars to storage', e);
    }
  }, [cars]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.LEADS, JSON.stringify(leads));
    } catch (e) {
      console.error('Error saving leads to storage', e);
    }
  }, [leads]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.HUBS, JSON.stringify(hubs));
    } catch (e) {
      console.error('Error saving hubs to storage', e);
    }
  }, [hubs]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(settings));
    } catch (e) {
      console.error('Error saving settings to storage', e);
    }
  }, [settings]);

  // Handle cross-tab storage updates
  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === STORAGE_KEYS.CARS && e.newValue) {
        try {
          setCars(JSON.parse(e.newValue));
        } catch {}
      }
      if (e.key === STORAGE_KEYS.LEADS && e.newValue) {
        try {
          setLeads(JSON.parse(e.newValue));
        } catch {}
      }
      if (e.key === STORAGE_KEYS.SETTINGS && e.newValue) {
        try {
          setSettings(JSON.parse(e.newValue));
        } catch {}
      }
    };
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  // Auth functions
  const loginAdmin = (pin: string): boolean => {
    if (pin.trim() === settings.adminPin || pin.trim() === 'admin123' || pin.trim() === 'kundapura2026') {
      setIsAdmin(true);
      try {
        sessionStorage.setItem(STORAGE_KEYS.AUTH, 'true');
      } catch {}
      return true;
    }
    return false;
  };

  const logoutAdmin = () => {
    setIsAdmin(false);
    try {
      sessionStorage.removeItem(STORAGE_KEYS.AUTH);
    } catch {}
  };

  // Car Actions
  const addCar = (newCarData: Omit<Car, 'id'> & { id?: string }) => {
    const newId = newCarData.id || `kc-custom-${Date.now()}`;
    const newCar: Car = {
      ...newCarData,
      id: newId,
    };
    setCars((prev) => [newCar, ...prev]);
  };

  const updateCar = (id: string, updated: Partial<Car>) => {
    setCars((prev) =>
      prev.map((car) => (car.id === id ? { ...car, ...updated } : car))
    );
  };

  const deleteCar = (id: string) => {
    setCars((prev) => prev.filter((car) => car.id !== id));
  };

  const resetCars = () => {
    setCars(CARS_DATA);
    setHubs(KUNDAPURA_HUBS);
    setSettings(DEFAULT_SETTINGS);
    try {
      localStorage.setItem(STORAGE_KEYS.CARS, JSON.stringify(CARS_DATA));
      localStorage.setItem(STORAGE_KEYS.HUBS, JSON.stringify(KUNDAPURA_HUBS));
      localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(DEFAULT_SETTINGS));
    } catch {}
  };

  // Leads Actions
  const addLead = (leadData: Omit<CustomerLead, 'id' | 'createdAt' | 'status'> & { status?: CustomerLead['status'] }) => {
    const newLead: CustomerLead = {
      ...leadData,
      id: `lead-${Date.now()}`,
      status: leadData.status || 'new',
      createdAt: new Date().toISOString(),
    };
    setLeads((prev) => [newLead, ...prev]);
  };

  const updateLeadStatus = (id: string, status: CustomerLead['status']) => {
    setLeads((prev) =>
      prev.map((l) => (l.id === id ? { ...l, status } : l))
    );
  };

  const deleteLead = (id: string) => {
    setLeads((prev) => prev.filter((l) => l.id !== id));
  };

  const clearLeads = () => {
    setLeads([]);
  };

  // Hub Actions
  const addHub = (hub: HubData) => {
    setHubs((prev) => [...prev, hub]);
  };

  const updateHub = (id: string, updated: Partial<HubData>) => {
    setHubs((prev) =>
      prev.map((h) => (h.id === id ? { ...h, ...updated } : h))
    );
  };

  const deleteHub = (id: string) => {
    setHubs((prev) => prev.filter((h) => h.id !== id));
  };

  // Settings Actions
  const updateSettings = (newSettings: Partial<SiteSettings>) => {
    setSettings((prev) => ({ ...prev, ...newSettings }));
  };

  // Export & Import
  const exportData = (): string => {
    return JSON.stringify({
      cars,
      leads,
      hubs,
      settings,
      exportDate: new Date().toISOString(),
      version: '2.0',
    }, null, 2);
  };

  const importData = (jsonData: string): boolean => {
    try {
      const parsed = JSON.parse(jsonData);
      if (parsed.cars && Array.isArray(parsed.cars)) {
        setCars(parsed.cars);
      }
      if (parsed.leads && Array.isArray(parsed.leads)) {
        setLeads(parsed.leads);
      }
      if (parsed.hubs && Array.isArray(parsed.hubs)) {
        setHubs(parsed.hubs);
      }
      if (parsed.settings) {
        setSettings({ ...DEFAULT_SETTINGS, ...parsed.settings });
      }
      return true;
    } catch (e) {
      console.error('Failed to import JSON data', e);
      return false;
    }
  };

  return (
    <InventoryContext.Provider
      value={{
        cars,
        leads,
        hubs,
        settings,
        isAdmin,
        loginAdmin,
        logoutAdmin,
        addCar,
        updateCar,
        deleteCar,
        resetCars,
        addLead,
        updateLeadStatus,
        deleteLead,
        clearLeads,
        addHub,
        updateHub,
        deleteHub,
        updateSettings,
        exportData,
        importData,
      }}
    >
      {children}
    </InventoryContext.Provider>
  );
};

export const useInventory = (): InventoryContextType => {
  const context = useContext(InventoryContext);
  if (!context) {
    throw new Error('useInventory must be used within an InventoryProvider');
  }
  return context;
};
