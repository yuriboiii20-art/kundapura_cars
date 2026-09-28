# 🚗 KUNDAPURA CARS — Certified Pre-Owned Car Marketplace

A modern, high-trust web application and dealership platform tailored exclusively for **Kundapura & Coastal Karnataka (KA-20 RTO)** car buyers and dealership operators. Built with **React 18**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and real-time **Firebase Cloud Sync**.

---

## ✨ Features Overview

### 🛍️ 1. Buyer & Customer Experience
- **100% Buy-Focused Marketplace**: Curated, certified inventory with transparent pricing, zero hidden charges, and zero accidental vehicle guarantee.
- **🛡️ The "Kundapura Assured" 4-Pillar Promise**:
  - **200-Point Forensic Inspection**: Engine, transmission, suspension, brakes, high-strength body structure, AC, and electrical diagnostics.
  - **1-Year Comprehensive Warranty**: Complete coverage on engine & gearbox + 24x7 Karnataka Roadside Assistance.
  - **5-Day / 300 km 100% Money-Back Guarantee**: Zero-risk purchase confidence.
  - **Free Karnataka RTO Transfer**: KA-20 (Kundapura) and all Karnataka RTO transfers handled by an in-house desk.
- **🔍 Smart Multi-Facet Filtering & Instant Search**:
  - Filter by budget presets (Under ₹7L, ₹7L–₹12L, ₹12L–₹18L, ₹18L+), body styles (SUV, Sedan, Hatchback, EV, Luxury, MUV), fuel types, transmissions, and brands.
  - Instant live keyword search matching make, model, variant, tags, and RTO codes.
- **🔬 360° Studio Viewer & Deep Car Modal**:
  - Multi-angle photo galleries and simulated 360° exterior view.
  - Detailed technical specifications matrix (engine displacement, mileage, power, torque, ground clearance, boot capacity, airbags, etc.).
- **📊 5-Module Forensic Inspection Report**:
  - Interactive inspection report card covering Engine & Drivetrain, Transmission, Suspension & Brakes, Electrical Systems, and Body Structure with individual health scores.
- **💰 Dynamic EMI & Loan Planner**:
  - Interactive sliders for down payment, loan tenure, and interest rates with instant monthly installment and principal-to-interest breakdown calculations.
- **⚡ Test Drive & ₹999 Reservation Flow**:
  - Book home doorstep test drives or dealership hub visits across Kundapura, Udupi, and Mangalore.
  - 48-hour ₹999 fully refundable vehicle reservation with instant booking vouchers and confetti celebrations.
- **⚖️ Side-by-Side Car Comparison**: Compare up to 3 vehicles across specs, features, inspection scores, and pricing in a unified modal.
- **❤️ Wishlist & Saved Cars**: Persistent drawer to shortlist and compare vehicles across browsing sessions.
- **📱 Mobile-First UX**:
  - Mobile swipe-back gesture history navigation.
  - Native Web Share API integration (share vehicle listings directly to WhatsApp, Telegram, and social media).
  - Floating action buttons and responsive touch sheets.

---

### 🔐 2. Admin & Dealership Management Portal
Accessible via `/admin` route or secret shortcuts (`Ctrl + Alt + A`, `Ctrl + Shift + K`, or triple-tap on mobile logo).
- **🔒 PIN-Protected Authentication**: Secure session-based admin access.
- **🚗 Complete Inventory CRUD**:
  - Add, edit, duplicate, and delete vehicle listings.
  - Multi-photo upload with client-side zero-hang image compression (`imageCompressor.ts`).
  - Edit technical specifications, custom badges ("Featured", "Trending", "Just Arrived", "Kundapura Assured"), pricing, discount tags, and location hubs.
  - Customizable 5-module inspection scores and checklist item status.
- **📋 Real-Time Leads Tracker**:
  - Centralized dashboard for test drive bookings, ₹999 reservations, and contact inquiries.
  - Filter leads by status (`Pending`, `Contacted`, `Completed`, `Cancelled`) with direct phone & WhatsApp outreach actions.
- **🏢 Experience Hubs Manager**:
  - Manage dealership branches and experience yards (e.g., NH 66 Hub, Shastri Circle Yard, Kodi Beach Center).
- **⚙️ Site Settings & Customization**:
  - Dynamically update hero banner titles, subtitles, trust badge metrics, and dealership contact info.
- **☁️ Cloud Sync & Database Manager**:
  - Built-in synchronization with Google Firebase Firestore (real-time NoSQL cloud database) and Firebase Cloud Storage (photo hosting).
  - Resilient local offline fallback with automated memory hydration.

---

## 🛠️ Technology Stack

| Layer | Technologies |
|---|---|
| **Frontend Framework** | [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) |
| **Build Tool & Bundler** | [Vite](https://vitejs.dev/) |
| **Styling & Design System** | [Tailwind CSS](https://tailwindcss.com/) + Custom 21st.dev Glassmorphic & Modern Light Aesthetics |
| **Animations & Motion** | [Framer Motion](https://www.framer.com/motion/) + Canvas Confetti |
| **Icons & UI Primitives** | [Lucide React](https://lucide.dev/) + Radix UI Primitives (Slider, Tooltip) |
| **Cloud Backend & Database** | [Google Firebase](https://firebase.google.com/) (Firestore & Firebase Storage) |
| **Image Processing** | Custom HTML5 Canvas Client-Side Lossless Compressor |

---

## 📁 Project Structure

```text
kundapura_cars/
├── .env.example               # Template for Firebase and environment keys
├── index.html                 # HTML Entry point with Google Fonts
├── package.json               # Dependencies and scripts
├── tailwind.config.js         # Tailwind styling and theme configuration
├── tsconfig.json              # TypeScript configuration
├── src/
│   ├── main.tsx               # App mounting & InventoryProvider wrapper
│   ├── App.tsx                # Main customer marketplace application
│   ├── index.css              # Global styles, scrollbars, and Tailwind directives
│   ├── admin/                 # Dedicated Admin Management Portal
│   │   ├── AdminDashboard.tsx # Comprehensive admin tabs & leads/hub manager
│   │   ├── AdminLogin.tsx     # PIN-protected login screen
│   │   └── CarEditModal.tsx   # Complete car editor with photo compression & inspection
│   ├── components/            # UI Components
│   │   ├── CarCard.tsx        # Vehicle listing card with trust tags & quick actions
│   │   ├── CarDetailModal.tsx # Full-screen vehicle details, 360° view, specs & EMI
│   │   ├── CompareModal.tsx   # Side-by-side comparison modal
│   │   ├── EmiCalculator.tsx  # Dynamic loan & amortization calculator
│   │   ├── FilterSidebar.tsx  # Multi-facet filter sidebar & mobile drawer
│   │   ├── HeroBanner.tsx     # Hero section with animated search & highlights
│   │   ├── InspectionReport.tsx# 5-module inspection diagnostics modal
│   │   ├── KundapuraHubs.tsx  # Physical dealership yards and contact info
│   │   ├── MiniMovingCar.tsx  # Delightful micro-interaction animated element
│   │   ├── MobileDrawer.tsx   # Mobile navigation & filters sheet
│   │   ├── Navbar.tsx         # Responsive header with search, hubs & wishlist
│   │   ├── ReserveModal.tsx   # ₹999 booking & doorstep test drive workflow
│   │   ├── TrustBadges.tsx    # 4-pillar warranty & money-back promise banners
│   │   ├── WishlistDrawer.tsx # Saved cars slide-out drawer
│   │   └── ui/                # Base UI elements (labels, sliders, tooltips)
│   ├── context/
│   │   └── InventoryContext.tsx# Centralized state management for cars, leads, hubs & cloud sync
│   ├── data/
│   │   └── carsData.ts        # Default certified vehicle catalogue & initial data
│   ├── lib/
│   │   └── firebase.ts        # Firebase app, Firestore, and Storage initialization
│   ├── services/
│   │   └── firebaseService.ts # Real-time Firestore listeners, CRUD & Storage upload handlers
│   ├── types/
│   │   ├── admin.ts           # Admin, Lead, Hub, and Settings type definitions
│   │   └── car.ts             # Comprehensive Vehicle & Filter TypeScript interfaces
│   └── utils/
│       └── imageCompressor.ts # Client-side image compression utility
```

---

## 🚀 Getting Started

### 1. Prerequisites
- **Node.js** (version 18 or higher recommended)
- **npm** or **yarn** / **pnpm**

### 2. Installation
Clone the repository and install project dependencies:

```bash
git clone https://github.com/yuriboiii20-art/kundapura_cars.git
cd kundapura_cars
npm install
```

### 3. Configure Environment Variables (Optional for Firebase Cloud Sync)
Create a `.env` file in the root directory by copying `.env.example`:

```bash
cp .env.example .env
```

Populate your Firebase configuration keys in `.env`:
```env
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.firebasestorage.app
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

> **Note**: The application operates with seamless local offline storage fallback if Firebase credentials are not provided.

### 4. Running the Development Server
```bash
npm run dev
```
Open [http://localhost:5173/](http://localhost:5173/) in your web browser.

### 5. Building for Production
```bash
npm run build
```
The optimized production bundle will be generated inside the `dist/` directory. You can preview it with:
```bash
npm run preview
```

---

## ⌨️ Admin Shortcuts & Navigation
| Shortcut / Action | Action |
|---|---|
| `Ctrl + Alt + A` | Open Admin Login Modal |
| `Ctrl + Shift + K` | Open Admin Login Modal |
| Triple Click on Navbar Logo | Trigger Admin Login (Mobile / Desktop) |
| Navigate to `/admin` | Directly load Admin Control Center |

---

## 📄 License
This project is open source and available under the [MIT License](LICENSE).
