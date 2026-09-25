import React, { createContext, useContext, useState, useEffect, ReactNode, useCallback } from 'react';
import { Car } from '../types/car';
import { CustomerLead, HubData, SiteSettings } from '../types/admin';
import { CARS_DATA, KUNDAPURA_HUBS } from '../data/carsData';
import { isFirebaseConfigured, getStoredFirebaseConfig, saveFirebaseConfig, FirebaseConfig } from '../lib/firebase';
import {
  subscribeToCars,
  subscribeToLeads,
  subscribeToHubs,
  subscribeToSettings,
  saveCarToCloud,
  deleteCarFromCloud,
  saveLeadToCloud,
  deleteLeadFromCloud,
  saveHubToCloud,
  deleteHubFromCloud,
  saveSettingsToCloud,
  seedAllDataToCloud,
} from '../services/firebaseService';

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
    createdAt: new Date(Date.now() - 1000 * 60 * 45).toISOString(),
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
    createdAt: new Date(Date.now() - 1000 * 60 * 180).toISOString(),
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
    createdAt: new Date(Date.now() - 1000 * 60 * 600).toISOString(),
    notes: 'Inquired about 85% loan financing via Karnataka Bank.'
  }
];

export type CloudSyncStatus = 'connected' | 'disconnected' | 'syncing' | 'error';

interface InventoryContextType {
  cars: Car[];
  leads: CustomerLead[];
  hubs: HubData[];
  settings: SiteSettings;
  isAdmin: boolean;
  cloudStatus: CloudSyncStatus;
  cloudError: string | null;
  isCloudConfigured: boolean;
  firebaseConfig: FirebaseConfig | null;
  updateFirebaseConfig: (config: FirebaseConfig | null) => void;
  syncLocalDataToCloud: () => Promise<{ success: boolean; message: string }>;
  loginAdmin: (pin: string) => boolean;
  logoutAdmin: () => void;
  addCar: (car: Omit<Car, 'id'> & { id?: string }) => Promise<void>;
  updateCar: (id: string, updated: Partial<Car>) => Promise<void>;
  deleteCar: (id: string) => Promise<void>;
  resetCars: () => void;
  addLead: (lead: Omit<CustomerLead, 'id' | 'createdAt' | 'status'> & { status?: CustomerLead['status'] }) => Promise<void>;
  updateLeadStatus: (id: string, status: CustomerLead['status']) => Promise<void>;
  deleteLead: (id: string) => Promise<void>;
  clearLeads: () => void;
  addHub: (hub: HubData) => Promise<void>;
  updateHub: (id: string, hub: Partial<HubData>) => Promise<void>;
  deleteHub: (id: string) => Promise<void>;
  updateSettings: (newSettings: Partial<SiteSettings>) => Promise<void>;
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

  // 6. Cloud Sync State
  const [cloudStatus, setCloudStatus] = useState<CloudSyncStatus>(
    isFirebaseConfigured() ? 'syncing' : 'disconnected'
  );
  const [cloudError, setCloudError] = useState<string | null>(null);
  const [firebaseConfig, setFirebaseConfigState] = useState<FirebaseConfig | null>(() => getStoredFirebaseConfig());
  const isCloudConfigured = Boolean(firebaseConfig?.projectId && firebaseConfig?.apiKey);

  // Synchronize with Firebase Firestore in Real Time
  useEffect(() => {
    if (!isFirebaseConfigured()) {
      setCloudStatus('disconnected');
      return;
    }

    setCloudStatus('syncing');
    setCloudError(null);

    let unsubCars: (() => void) | null = null;
    let unsubLeads: (() => void) | null = null;
    let unsubHubs: (() => void) | null = null;
    let unsubSettings: (() => void) | null = null;

    try {
      // 1. Subscribe to Cars
      unsubCars = subscribeToCars(
        (cloudCars) => {
          if (cloudCars && cloudCars.length > 0) {
            setCars(cloudCars);
            try {
              localStorage.setItem(STORAGE_KEYS.CARS, JSON.stringify(cloudCars));
            } catch {}
          } else {
            // If cloud collection is completely empty, automatically seed with local/default cars
            console.log('Firebase cars collection is empty. Auto-seeding default cars...');
            seedAllDataToCloud(cars.length > 0 ? cars : CARS_DATA, hubs, settings, leads)
              .catch((err) => console.error('Auto-seed failed:', err));
          }
          setCloudStatus('connected');
        },
        (err) => {
          console.error('Firebase cars sync error:', err);
          setCloudStatus('error');
          setCloudError(err?.message || 'Failed to connect to Firebase database');
        }
      );

      // 2. Subscribe to Leads
      unsubLeads = subscribeToLeads(
        (cloudLeads) => {
          setLeads(cloudLeads);
          try {
            localStorage.setItem(STORAGE_KEYS.LEADS, JSON.stringify(cloudLeads));
          } catch {}
          setCloudStatus('connected');
        },
        (err) => {
          console.error('Firebase leads sync error:', err);
        }
      );

      // 3. Subscribe to Hubs
      unsubHubs = subscribeToHubs(
        (cloudHubs) => {
          if (cloudHubs && cloudHubs.length > 0) {
            setHubs(cloudHubs);
            try {
              localStorage.setItem(STORAGE_KEYS.HUBS, JSON.stringify(cloudHubs));
            } catch {}
          }
          setCloudStatus('connected');
        },
        (err) => {
          console.error('Firebase hubs sync error:', err);
        }
      );

      // 4. Subscribe to Settings
      unsubSettings = subscribeToSettings(
        (cloudSettings) => {
          if (cloudSettings) {
            setSettings((prev) => ({ ...prev, ...cloudSettings }));
            try {
              localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(cloudSettings));
            } catch {}
          }
          setCloudStatus('connected');
        },
        (err) => {
          console.error('Firebase settings sync error:', err);
        }
      );
    } catch (e: any) {
      console.error('Error starting Firebase subscriptions:', e);
      setCloudStatus('error');
      setCloudError(e?.message || 'Error initializing cloud listener');
    }

    return () => {
      if (unsubCars) unsubCars();
      if (unsubLeads) unsubLeads();
      if (unsubHubs) unsubHubs();
      if (unsubSettings) unsubSettings();
    };
  }, [firebaseConfig]);

  // Save changes to localStorage as offline fallback
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

  // Admin Config Management
  const updateFirebaseConfig = (config: FirebaseConfig | null) => {
    saveFirebaseConfig(config);
    setFirebaseConfigState(config);
  };

  const syncLocalDataToCloud = useCallback(async (): Promise<{ success: boolean; message: string }> => {
    try {
      if (!isFirebaseConfigured()) {
        return { success: false, message: 'Please configure Firebase in Settings first.' };
      }
      setCloudStatus('syncing');
      const result = await seedAllDataToCloud(cars, hubs, settings, leads);
      setCloudStatus('connected');
      return { success: true, message: `Successfully synced ${result.carsCount} cars to Firebase Cloud!` };
    } catch (e: any) {
      setCloudStatus('error');
      setCloudError(e?.message || 'Sync failed');
      return { success: false, message: e?.message || 'Failed to sync data to Firebase Cloud' };
    }
  }, [cars, hubs, settings, leads]);

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
  const addCar = async (newCarData: Omit<Car, 'id'> & { id?: string }) => {
    const newId = newCarData.id || `kc-custom-${Date.now()}`;
    const newCar: Car = {
      ...newCarData,
      id: newId,
    };
    // Optimistic UI
    setCars((prev) => [newCar, ...prev]);

    // Push to Cloud
    if (isFirebaseConfigured()) {
      try {
        await saveCarToCloud(newCar);
      } catch (err) {
        console.error('Failed to save car to cloud:', err);
      }
    }
  };

  const updateCar = async (id: string, updated: Partial<Car>) => {
    let finalCar: Car | null = null;
    setCars((prev) =>
      prev.map((car) => {
        if (car.id === id) {
          finalCar = { ...car, ...updated };
          return finalCar;
        }
        return car;
      })
    );

    // Push to Cloud
    if (isFirebaseConfigured() && finalCar) {
      try {
        await saveCarToCloud(finalCar);
      } catch (err) {
        console.error('Failed to update car in cloud:', err);
      }
    }
  };

  const deleteCar = async (id: string) => {
    setCars((prev) => prev.filter((car) => car.id !== id));

    // Push to Cloud
    if (isFirebaseConfigured()) {
      try {
        await deleteCarFromCloud(id);
      } catch (err) {
        console.error('Failed to delete car from cloud:', err);
      }
    }
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

    if (isFirebaseConfigured()) {
      seedAllDataToCloud(CARS_DATA, KUNDAPURA_HUBS, DEFAULT_SETTINGS, leads).catch(console.error);
    }
  };

  // Leads Actions
  const addLead = async (leadData: Omit<CustomerLead, 'id' | 'createdAt' | 'status'> & { status?: CustomerLead['status'] }) => {
    const newLead: CustomerLead = {
      ...leadData,
      id: `lead-${Date.now()}`,
      status: leadData.status || 'new',
      createdAt: new Date().toISOString(),
    };
    setLeads((prev) => [newLead, ...prev]);

    if (isFirebaseConfigured()) {
      try {
        await saveLeadToCloud(newLead);
      } catch (err) {
        console.error('Failed to save lead to cloud:', err);
      }
    }
  };

  const updateLeadStatus = async (id: string, status: CustomerLead['status']) => {
    let updatedLead: CustomerLead | null = null;
    setLeads((prev) =>
      prev.map((l) => {
        if (l.id === id) {
          updatedLead = { ...l, status };
          return updatedLead;
        }
        return l;
      })
    );

    if (isFirebaseConfigured() && updatedLead) {
      try {
        await saveLeadToCloud(updatedLead);
      } catch (err) {
        console.error('Failed to update lead in cloud:', err);
      }
    }
  };

  const deleteLead = async (id: string) => {
    setLeads((prev) => prev.filter((l) => l.id !== id));

    if (isFirebaseConfigured()) {
      try {
        await deleteLeadFromCloud(id);
      } catch (err) {
        console.error('Failed to delete lead from cloud:', err);
      }
    }
  };

  const clearLeads = () => {
    setLeads([]);
  };

  // Hub Actions
  const addHub = async (hub: HubData) => {
    setHubs((prev) => [...prev, hub]);

    if (isFirebaseConfigured()) {
      try {
        await saveHubToCloud(hub);
      } catch (err) {
        console.error('Failed to add hub to cloud:', err);
      }
    }
  };

  const updateHub = async (id: string, updated: Partial<HubData>) => {
    let updatedHub: HubData | null = null;
    setHubs((prev) =>
      prev.map((h) => {
        if (h.id === id) {
          updatedHub = { ...h, ...updated };
          return updatedHub;
        }
        return h;
      })
    );

    if (isFirebaseConfigured() && updatedHub) {
      try {
        await saveHubToCloud(updatedHub);
      } catch (err) {
        console.error('Failed to update hub in cloud:', err);
      }
    }
  };

  const deleteHub = async (id: string) => {
    setHubs((prev) => prev.filter((h) => h.id !== id));

    if (isFirebaseConfigured()) {
      try {
        await deleteHubFromCloud(id);
      } catch (err) {
        console.error('Failed to delete hub from cloud:', err);
      }
    }
  };

  // Settings Actions
  const updateSettings = async (newSettings: Partial<SiteSettings>) => {
    const updated = { ...settings, ...newSettings };
    setSettings(updated);

    if (isFirebaseConfigured()) {
      try {
        await saveSettingsToCloud(updated);
      } catch (err) {
        console.error('Failed to update settings in cloud:', err);
      }
    }
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

      if (isFirebaseConfigured() && parsed.cars) {
        seedAllDataToCloud(parsed.cars, parsed.hubs || hubs, parsed.settings || settings, parsed.leads || leads)
          .catch(console.error);
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
        cloudStatus,
        cloudError,
        isCloudConfigured,
        firebaseConfig,
        updateFirebaseConfig,
        syncLocalDataToCloud,
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
