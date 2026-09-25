import { initializeApp, getApps, getApp, FirebaseApp } from 'firebase/app';
import { getFirestore, Firestore } from 'firebase/firestore';
import { getStorage, FirebaseStorage } from 'firebase/storage';

export interface FirebaseConfig {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
  measurementId?: string;
}

const STORAGE_KEY_FIREBASE = 'kc_firebase_custom_config_v1';

const DEFAULT_FIREBASE_CONFIG: FirebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || 'AIzaSyDfsk9BLSuoUedVJuajxHxqWmvefhRNMH8',
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || 'kundapura-cars.firebaseapp.com',
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || 'kundapura-cars',
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || 'kundapura-cars.firebasestorage.app',
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || '655550480197',
  appId: import.meta.env.VITE_FIREBASE_APP_ID || '1:655550480197:web:838bd8c0e261575800c82c',
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || 'G-MLQXPW2DXD',
};

let cachedApp: FirebaseApp | null = null;
let cachedDb: Firestore | null = null;
let cachedStorage: FirebaseStorage | null = null;

export function getStoredFirebaseConfig(): FirebaseConfig | null {
  try {
    const saved = localStorage.getItem(STORAGE_KEY_FIREBASE);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed.projectId && parsed.apiKey) {
        return parsed as FirebaseConfig;
      }
    }
  } catch (e) {
    console.error('Error reading saved firebase config:', e);
  }

  // Fallback to default / env config
  if (DEFAULT_FIREBASE_CONFIG.projectId && DEFAULT_FIREBASE_CONFIG.apiKey) {
    return DEFAULT_FIREBASE_CONFIG;
  }

  return null;
}

export function saveFirebaseConfig(config: FirebaseConfig | null): void {
  try {
    if (config) {
      localStorage.setItem(STORAGE_KEY_FIREBASE, JSON.stringify(config));
    } else {
      localStorage.removeItem(STORAGE_KEY_FIREBASE);
    }
    // Invalidate cached instances
    cachedApp = null;
    cachedDb = null;
    cachedStorage = null;
  } catch (e) {
    console.error('Failed to save firebase config to storage:', e);
  }
}

export function isFirebaseConfigured(): boolean {
  const config = getStoredFirebaseConfig();
  return Boolean(config && config.projectId && config.apiKey);
}

export function getFirebaseApp(): FirebaseApp | null {
  if (cachedApp) return cachedApp;

  const config = getStoredFirebaseConfig();
  if (!config) return null;

  try {
    if (getApps().length > 0) {
      cachedApp = getApp();
    } else {
      cachedApp = initializeApp(config);
    }
    return cachedApp;
  } catch (e) {
    console.error('Error initializing Firebase App:', e);
    return null;
  }
}

export function getFirebaseDb(): Firestore | null {
  if (cachedDb) return cachedDb;
  const app = getFirebaseApp();
  if (!app) return null;

  try {
    cachedDb = getFirestore(app);
    return cachedDb;
  } catch (e) {
    console.error('Error getting Firestore instance:', e);
    return null;
  }
}

export function getFirebaseStorage(): FirebaseStorage | null {
  if (cachedStorage) return cachedStorage;
  const app = getFirebaseApp();
  if (!app) return null;

  try {
    cachedStorage = getStorage(app);
    return cachedStorage;
  } catch (e) {
    console.error('Error getting Firebase Storage instance:', e);
    return null;
  }
}
