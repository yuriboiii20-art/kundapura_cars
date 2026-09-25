import {
  collection,
  doc,
  setDoc,
  deleteDoc,
  onSnapshot,
  writeBatch,
  Unsubscribe,
} from 'firebase/firestore';
import {
  ref,
  uploadBytes,
  getDownloadURL,
} from 'firebase/storage';
import { getFirebaseDb, getFirebaseStorage, isFirebaseConfigured } from '../lib/firebase';
import { Car } from '../types/car';
import { CustomerLead, HubData, SiteSettings } from '../types/admin';

const COLLECTIONS = {
  CARS: 'cars',
  LEADS: 'leads',
  HUBS: 'hubs',
  SETTINGS: 'settings',
};

const SETTINGS_DOC_ID = 'global_site_settings';

// ==================== CARS SYNC ====================

export function subscribeToCars(
  onUpdate: (cars: Car[]) => void,
  onError?: (error: any) => void
): Unsubscribe | null {
  const db = getFirebaseDb();
  if (!db) return null;

  try {
    const carsCol = collection(db, COLLECTIONS.CARS);
    return onSnapshot(
      carsCol,
      (snapshot) => {
        const cars: Car[] = [];
        snapshot.forEach((docSnap) => {
          cars.push({ id: docSnap.id, ...docSnap.data() } as Car);
        });
        onUpdate(cars);
      },
      (err) => {
        console.error('Firestore cars subscription error:', err);
        if (onError) onError(err);
      }
    );
  } catch (e) {
    console.error('Failed to subscribe to cars:', e);
    return null;
  }
}

export async function saveCarToCloud(car: Car): Promise<void> {
  const db = getFirebaseDb();
  if (!db) throw new Error('Firebase is not initialized');

  const carDoc = doc(db, COLLECTIONS.CARS, car.id);
  await setDoc(carDoc, car, { merge: true });
}

export async function deleteCarFromCloud(carId: string): Promise<void> {
  const db = getFirebaseDb();
  if (!db) throw new Error('Firebase is not initialized');

  const carDoc = doc(db, COLLECTIONS.CARS, carId);
  await deleteDoc(carDoc);
}

export async function batchSaveCarsToCloud(cars: Car[]): Promise<void> {
  const db = getFirebaseDb();
  if (!db) throw new Error('Firebase is not initialized');

  const batch = writeBatch(db);
  cars.forEach((car) => {
    const carDoc = doc(db, COLLECTIONS.CARS, car.id);
    batch.set(carDoc, car, { merge: true });
  });
  await batch.commit();
}

// ==================== LEADS SYNC ====================

export function subscribeToLeads(
  onUpdate: (leads: CustomerLead[]) => void,
  onError?: (error: any) => void
): Unsubscribe | null {
  const db = getFirebaseDb();
  if (!db) return null;

  try {
    const leadsCol = collection(db, COLLECTIONS.LEADS);
    return onSnapshot(
      leadsCol,
      (snapshot) => {
        const leads: CustomerLead[] = [];
        snapshot.forEach((docSnap) => {
          leads.push({ id: docSnap.id, ...docSnap.data() } as CustomerLead);
        });
        // Sort newest first
        leads.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        onUpdate(leads);
      },
      (err) => {
        console.error('Firestore leads subscription error:', err);
        if (onError) onError(err);
      }
    );
  } catch (e) {
    console.error('Failed to subscribe to leads:', e);
    return null;
  }
}

export async function saveLeadToCloud(lead: CustomerLead): Promise<void> {
  const db = getFirebaseDb();
  if (!db) throw new Error('Firebase is not initialized');

  const leadDoc = doc(db, COLLECTIONS.LEADS, lead.id);
  await setDoc(leadDoc, lead, { merge: true });
}

export async function deleteLeadFromCloud(leadId: string): Promise<void> {
  const db = getFirebaseDb();
  if (!db) throw new Error('Firebase is not initialized');

  const leadDoc = doc(db, COLLECTIONS.LEADS, leadId);
  await deleteDoc(leadDoc);
}

export async function batchSaveLeadsToCloud(leads: CustomerLead[]): Promise<void> {
  const db = getFirebaseDb();
  if (!db) throw new Error('Firebase is not initialized');

  const batch = writeBatch(db);
  leads.forEach((lead) => {
    const leadDoc = doc(db, COLLECTIONS.LEADS, lead.id);
    batch.set(leadDoc, lead, { merge: true });
  });
  await batch.commit();
}

// ==================== HUBS SYNC ====================

export function subscribeToHubs(
  onUpdate: (hubs: HubData[]) => void,
  onError?: (error: any) => void
): Unsubscribe | null {
  const db = getFirebaseDb();
  if (!db) return null;

  try {
    const hubsCol = collection(db, COLLECTIONS.HUBS);
    return onSnapshot(
      hubsCol,
      (snapshot) => {
        const hubs: HubData[] = [];
        snapshot.forEach((docSnap) => {
          hubs.push({ id: docSnap.id, ...docSnap.data() } as HubData);
        });
        if (hubs.length > 0) {
          onUpdate(hubs);
        }
      },
      (err) => {
        console.error('Firestore hubs subscription error:', err);
        if (onError) onError(err);
      }
    );
  } catch (e) {
    console.error('Failed to subscribe to hubs:', e);
    return null;
  }
}

export async function saveHubToCloud(hub: HubData): Promise<void> {
  const db = getFirebaseDb();
  if (!db) throw new Error('Firebase is not initialized');

  const hubDoc = doc(db, COLLECTIONS.HUBS, hub.id);
  await setDoc(hubDoc, hub, { merge: true });
}

export async function deleteHubFromCloud(hubId: string): Promise<void> {
  const db = getFirebaseDb();
  if (!db) throw new Error('Firebase is not initialized');

  const hubDoc = doc(db, COLLECTIONS.HUBS, hubId);
  await deleteDoc(hubDoc);
}

export async function batchSaveHubsToCloud(hubs: HubData[]): Promise<void> {
  const db = getFirebaseDb();
  if (!db) throw new Error('Firebase is not initialized');

  const batch = writeBatch(db);
  hubs.forEach((hub) => {
    const hubDoc = doc(db, COLLECTIONS.HUBS, hub.id);
    batch.set(hubDoc, hub, { merge: true });
  });
  await batch.commit();
}

// ==================== SETTINGS SYNC ====================

export function subscribeToSettings(
  onUpdate: (settings: SiteSettings) => void,
  onError?: (error: any) => void
): Unsubscribe | null {
  const db = getFirebaseDb();
  if (!db) return null;

  try {
    const settingsDoc = doc(db, COLLECTIONS.SETTINGS, SETTINGS_DOC_ID);
    return onSnapshot(
      settingsDoc,
      (docSnap) => {
        if (docSnap.exists()) {
          onUpdate(docSnap.data() as SiteSettings);
        }
      },
      (err) => {
        console.error('Firestore settings subscription error:', err);
        if (onError) onError(err);
      }
    );
  } catch (e) {
    console.error('Failed to subscribe to settings:', e);
    return null;
  }
}

export async function saveSettingsToCloud(settings: SiteSettings): Promise<void> {
  const db = getFirebaseDb();
  if (!db) throw new Error('Firebase is not initialized');

  const settingsDoc = doc(db, COLLECTIONS.SETTINGS, SETTINGS_DOC_ID);
  await setDoc(settingsDoc, settings, { merge: true });
}

// ==================== FIREBASE STORAGE IMAGE UPLOAD ====================
let isStorageDisabled = false;

export async function uploadCarImage(
  fileOrBlob: Blob | File,
  carId: string,
  fileName?: string
): Promise<string> {
  if (isStorageDisabled) {
    throw new Error('Firebase Storage is currently unavailable or disabled');
  }

  const storage = getFirebaseStorage();
  if (!storage) {
    isStorageDisabled = true;
    throw new Error('Firebase Storage is not initialized');
  }

  const safeName = fileName
    ? fileName.replace(/[^a-zA-Z0-9._-]/g, '_')
    : `car_${Date.now()}_${Math.random().toString(36).substring(2, 7)}.jpg`;

  const storagePath = `cars/${carId || 'new_car'}/${safeName}`;
  const imageRef = ref(storage, storagePath);

  // 1.5-second timeout protection: If storage bucket/rules are not set, immediately fallback
  const timeoutPromise = new Promise<never>((_, reject) =>
    setTimeout(() => {
      isStorageDisabled = true;
      reject(new Error('Firebase Storage upload timed out'));
    }, 1500)
  );

  const uploadTask = (async () => {
    try {
      const snapshot = await uploadBytes(imageRef, fileOrBlob, {
        contentType: 'image/jpeg',
        cacheControl: 'public, max-age=31536000',
      });
      return await getDownloadURL(snapshot.ref);
    } catch (err) {
      isStorageDisabled = true;
      throw err;
    }
  })();

  return await Promise.race([uploadTask, timeoutPromise]);
}


// ==================== SEED / FULL CLOUD SYNC ====================

export async function seedAllDataToCloud(
  cars: Car[],
  hubs: HubData[],
  settings: SiteSettings,
  leads: CustomerLead[]
): Promise<{ success: boolean; carsCount: number }> {
  if (!isFirebaseConfigured()) {
    throw new Error('Firebase is not configured yet');
  }

  await batchSaveCarsToCloud(cars);
  await batchSaveHubsToCloud(hubs);
  await saveSettingsToCloud(settings);
  if (leads.length > 0) {
    await batchSaveLeadsToCloud(leads);
  }

  return { success: true, carsCount: cars.length };
}
