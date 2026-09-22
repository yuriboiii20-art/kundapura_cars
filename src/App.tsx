import React, { useState, useMemo, useEffect } from 'react';
import { 
  SlidersHorizontal, 
  ArrowUpDown, 
  Car as CarIcon, 
  Layers, 
  MessageSquare,
  X
} from 'lucide-react';
import { CARS_DATA } from './data/carsData';
import { Car, FilterState, BodyType } from './types/car';
import { Navbar } from './components/Navbar';
import { HeroBanner } from './components/HeroBanner';
import { FilterSidebar } from './components/FilterSidebar';
import { CarCard } from './components/CarCard';
import { CarDetailModal } from './components/CarDetailModal';
import { TestDriveModal } from './components/TestDriveModal';
import { ReserveModal } from './components/ReserveModal';
import { CompareModal } from './components/CompareModal';
import { WishlistDrawer } from './components/WishlistDrawer';
import { BangaloreHubs } from './components/BangaloreHubs';
import { TrustBadges } from './components/TrustBadges';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';

const INITIAL_FILTERS: FilterState = {
  searchQuery: '',
  bodyTypes: [],
  brands: [],
  fuelTypes: [],
  transmissions: [],
  owners: [],
  minPrice: 0,
  maxPrice: 4000000,
  minYear: 2018,
  maxKm: 100000,
  sortBy: 'recommended'
};

export const App: React.FC = () => {
  const [filters, setFilters] = useState<FilterState>(INITIAL_FILTERS);
  const [selectedBudgetLabel, setSelectedBudgetLabel] = useState('All Budgets');
  
  // Wishlist state with localStorage persistence
  const [wishlistIds, setWishlistIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('kc_wishlist');
      return saved ? JSON.parse(saved) : ['kc-creta-2022'];
    } catch {
      return ['kc-creta-2022'];
    }
  });

  // Compare state (up to 3 cars)
  const [compareList, setCompareList] = useState<Car[]>([]);

  // Modals
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  const [testDriveCar, setTestDriveCar] = useState<Car | null>(null);
  const [reserveCar, setReserveCar] = useState<Car | null>(null);
  const [wishlistDrawerOpen, setWishlistDrawerOpen] = useState(false);
  const [compareModalOpen, setCompareModalOpen] = useState(false);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Sync wishlist to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('kc_wishlist', JSON.stringify(wishlistIds));
    } catch (e) {
      console.error(e);
    }
  }, [wishlistIds]);

  const toggleWishlist = (carId: string) => {
    setWishlistIds((prev) =>
      prev.includes(carId) ? prev.filter((id) => id !== carId) : [...prev, carId]
    );
  };

  const toggleCompare = (car: Car) => {
    setCompareList((prev) => {
      const exists = prev.some((c) => c.id === car.id);
      if (exists) {
        return prev.filter((c) => c.id !== car.id);
      }
      if (prev.length >= 3) {
        alert('You can compare up to 3 cars side-by-side.');
        return prev;
      }
      return [...prev, car];
    });
  };

  const removeCompareCar = (carId: string) => {
    setCompareList((prev) => prev.filter((c) => c.id !== carId));
  };

  // Available brands list derived from data
  const availableBrands = useMemo(() => {
    const brandsSet = new Set<string>();
    CARS_DATA.forEach((c) => brandsSet.add(c.brand));
    return Array.from(brandsSet).sort();
  }, []);

  // Filter and Sort Engine
  const filteredCars = useMemo(() => {
    return CARS_DATA.filter((car) => {
      // Search Query
      if (filters.searchQuery.trim()) {
        const q = filters.searchQuery.toLowerCase().trim();
        const matchesTitle = car.title.toLowerCase().includes(q);
        const matchesBrand = car.brand.toLowerCase().includes(q);
        const matchesModel = car.model.toLowerCase().includes(q);
        const matchesVariant = car.variant.toLowerCase().includes(q);
        const matchesBody = car.bodyType.toLowerCase().includes(q);
        const matchesFuel = car.fuelType.toLowerCase().includes(q);
        const matchesRto = car.rto.toLowerCase().includes(q);
        const matchesTags = car.tags.some((t) => t.toLowerCase().includes(q));

        if (!matchesTitle && !matchesBrand && !matchesModel && !matchesVariant && !matchesBody && !matchesFuel && !matchesRto && !matchesTags) {
          return false;
        }
      }

      // Body Type
      if (filters.bodyTypes.length > 0 && !filters.bodyTypes.includes(car.bodyType)) {
        return false;
      }

      // Brand
      if (filters.brands.length > 0 && !filters.brands.includes(car.brand)) {
        return false;
      }

      // Fuel Type
      if (filters.fuelTypes.length > 0 && !filters.fuelTypes.includes(car.fuelType)) {
        return false;
      }

      // Transmission
      if (filters.transmissions.length > 0 && !filters.transmissions.includes(car.transmission)) {
        return false;
      }

      // Owner
      if (filters.owners.length > 0 && !filters.owners.includes(car.owner)) {
        return false;
      }

      // Price Range
      if (car.price > filters.maxPrice || car.price < filters.minPrice) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      switch (filters.sortBy) {
        case 'price-asc':
          return a.price - b.price;
        case 'price-desc':
          return b.price - a.price;
        case 'km-asc':
          return a.kilometers - b.kilometers;
        case 'year-desc':
          return b.year - a.year;
        case 'recommended':
        default:
          if (a.featured && !b.featured) return -1;
          if (!a.featured && b.featured) return 1;
          return b.inspectionScore - a.inspectionScore;
      }
    });
  }, [filters]);

  // Wishlist Cars list
  const wishlistCars = useMemo(() => {
    return CARS_DATA.filter((car) => wishlistIds.includes(car.id));
  }, [wishlistIds]);

  // Budget preset selection
  const handleSelectBudgetPreset = (min: number, max: number) => {
    setFilters((prev) => ({
      ...prev,
      minPrice: min,
      maxPrice: max
    }));
    if (min === 0 && max >= 10000000) setSelectedBudgetLabel('All Budgets');
    else if (max <= 700000) setSelectedBudgetLabel('Under ₹7 Lakh');
    else if (min === 700000 && max <= 1200000) setSelectedBudgetLabel('₹7L - ₹12 Lakh');
    else if (min === 1200000 && max <= 1800000) setSelectedBudgetLabel('₹12L - ₹18 Lakh');
    else setSelectedBudgetLabel('Above ₹18 Lakh');
  };

  const handleSelectBodyType = (type: BodyType | undefined) => {
    setFilters((prev) => ({
      ...prev,
      bodyTypes: type ? [type] : []
    }));
  };

  const handleResetFilters = () => {
    setFilters(INITIAL_FILTERS);
    setSelectedBudgetLabel('All Budgets');
  };

  const activeFilterCount =
    filters.bodyTypes.length +
    filters.brands.length +
    filters.fuelTypes.length +
    filters.transmissions.length +
    filters.owners.length +
    (filters.maxPrice < 4000000 ? 1 : 0) +
    (filters.searchQuery ? 1 : 0);

  const scrollToHubs = () => {
    document.getElementById('bangalore-hubs')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAssurance = () => {
    document.getElementById('kundapura-assured')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc] text-slate-800">
      
      {/* 1. Header / Navbar */}
      <Navbar
        searchQuery={filters.searchQuery}
        onSearchChange={(q) => setFilters((prev) => ({ ...prev, searchQuery: q }))}
        wishlistCount={wishlistIds.length}
        compareList={compareList}
        onOpenWishlist={() => setWishlistDrawerOpen(true)}
        onOpenCompare={() => setCompareModalOpen(true)}
        onOpenHubs={scrollToHubs}
        onOpenAssurance={scrollToAssurance}
        onOpenMobileFilters={() => setMobileFilterOpen(true)}
        activeFilterCount={activeFilterCount}
      />

      {/* 2. Hero Banner with Bangalore lock & 21st.dev quick pills */}
      <HeroBanner
        selectedBodyType={filters.bodyTypes.length === 1 ? filters.bodyTypes[0] : undefined}
        onSelectBodyType={handleSelectBodyType}
        onSelectBudgetPreset={handleSelectBudgetPreset}
        selectedBudgetLabel={selectedBudgetLabel}
        totalCarsCount={filteredCars.length}
      />

      {/* 3. Main Catalog Section */}
      <main id="car-catalog" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 w-full flex-1">
        
        {/* Catalog Control Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-200">
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2">
              <span>Bangalore Certified Cars</span>
              <span className="text-xs font-extrabold px-2.5 py-1 rounded-full bg-brand-50 text-brand-700 border border-brand-200">
                {filteredCars.length} Available
              </span>
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Every car is 200-point inspected, available at Bangalore Hubs or for doorstep test drive.
            </p>
          </div>

          {/* Sort Selector & Mobile Filter Trigger */}
          <div className="flex items-center gap-2.5 self-end sm:self-auto">
            
            {/* Mobile Filter Button */}
            <button
              onClick={() => setMobileFilterOpen(true)}
              className="md:hidden flex items-center gap-1.5 px-3 py-2 bg-white text-slate-800 text-xs font-bold rounded-xl border border-slate-200 shadow-xs"
            >
              <SlidersHorizontal className="w-3.5 h-3.5 text-brand-600" />
              <span>Filters</span>
              {activeFilterCount > 0 && (
                <span className="w-4 h-4 bg-brand-600 text-white rounded-full text-[9px] flex items-center justify-center font-bold">
                  {activeFilterCount}
                </span>
              )}
            </button>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-xl border border-slate-200 text-xs shadow-xs">
              <ArrowUpDown className="w-3.5 h-3.5 text-slate-400" />
              <span className="text-slate-500 font-medium hidden sm:inline">Sort by:</span>
              <select
                value={filters.sortBy}
                onChange={(e) => setFilters((prev) => ({ ...prev, sortBy: e.target.value as any }))}
                className="bg-transparent font-bold text-slate-800 outline-none cursor-pointer"
              >
                <option value="recommended">Featured &amp; Recommended</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="km-asc">Lowest Kilometers</option>
                <option value="year-desc">Newest Model Year</option>
              </select>
            </div>
          </div>
        </div>

        {/* Active Filter Chips bar (if any) */}
        {activeFilterCount > 0 && (
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <span className="text-xs font-bold text-slate-400">Active:</span>

            {filters.searchQuery && (
              <span className="badge-pill bg-white text-slate-800 border border-slate-200 shadow-2xs">
                <span>"{filters.searchQuery}"</span>
                <button onClick={() => setFilters((prev) => ({ ...prev, searchQuery: '' }))}>
                  <X className="w-3 h-3 text-slate-400 hover:text-slate-600" />
                </button>
              </span>
            )}

            {filters.bodyTypes.map((t) => (
              <span key={t} className="badge-pill bg-brand-50 text-brand-800 border border-brand-200">
                <span>{t}</span>
                <button onClick={() => setFilters((prev) => ({ ...prev, bodyTypes: prev.bodyTypes.filter((x) => x !== t) }))}>
                  <X className="w-3 h-3 text-brand-500 hover:text-brand-700" />
                </button>
              </span>
            ))}

            {filters.brands.map((b) => (
              <span key={b} className="badge-pill bg-brand-50 text-brand-800 border border-brand-200">
                <span>{b}</span>
                <button onClick={() => setFilters((prev) => ({ ...prev, brands: prev.brands.filter((x) => x !== b) }))}>
                  <X className="w-3 h-3 text-brand-500 hover:text-brand-700" />
                </button>
              </span>
            ))}

            {filters.fuelTypes.map((f) => (
              <span key={f} className="badge-pill bg-brand-50 text-brand-800 border border-brand-200">
                <span>{f}</span>
                <button onClick={() => setFilters((prev) => ({ ...prev, fuelTypes: prev.fuelTypes.filter((x) => x !== f) }))}>
                  <X className="w-3 h-3 text-brand-500 hover:text-brand-700" />
                </button>
              </span>
            ))}

            {filters.transmissions.map((tr) => (
              <span key={tr} className="badge-pill bg-brand-50 text-brand-800 border border-brand-200">
                <span>{tr}</span>
                <button onClick={() => setFilters((prev) => ({ ...prev, transmissions: prev.transmissions.filter((x) => x !== tr) }))}>
                  <X className="w-3 h-3 text-brand-500 hover:text-brand-700" />
                </button>
              </span>
            ))}

            <button
              onClick={handleResetFilters}
              className="text-xs font-bold text-rose-600 hover:text-rose-700 hover:underline ml-2"
            >
              Clear All Filters
            </button>
          </div>
        )}

        {/* Content Layout: Sidebar + Car Grid */}
        <div className="flex gap-8 items-start">
          
          {/* Desktop Filter Sidebar */}
          <div className="hidden md:block">
            <FilterSidebar
              filters={filters}
              onFilterChange={setFilters}
              onResetFilters={handleResetFilters}
              availableBrands={availableBrands}
              totalResults={filteredCars.length}
            />
          </div>

          {/* Car Cards Grid */}
          <div className="flex-1 min-w-0">
            {filteredCars.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredCars.map((car) => (
                  <CarCard
                    key={car.id}
                    car={car}
                    isWishlisted={wishlistIds.includes(car.id)}
                    onToggleWishlist={toggleWishlist}
                    isCompared={compareList.some((c) => c.id === car.id)}
                    onToggleCompare={toggleCompare}
                    onSelectCar={setSelectedCar}
                    onBookTestDrive={setTestDriveCar}
                  />
                ))}
              </div>
            ) : (
              /* Empty State */
              <div className="bg-white rounded-3xl p-10 sm:p-16 border border-slate-200 text-center shadow-xs">
                <div className="w-16 h-16 rounded-2xl bg-slate-100 flex items-center justify-center mx-auto text-slate-400 mb-4">
                  <CarIcon className="w-8 h-8 text-slate-400" />
                </div>
                <h3 className="text-lg font-black text-slate-900 mb-1">
                  No Certified Cars Match Your Filters
                </h3>
                <p className="text-xs text-slate-500 max-w-md mx-auto mb-6">
                  Try adjusting your budget slider, fuel type, or body style to view more cars available in Bangalore.
                </p>
                <button
                  onClick={handleResetFilters}
                  className="px-5 py-2.5 bg-brand-600 hover:bg-brand-700 text-white font-extrabold text-xs rounded-xl shadow-md transition-all"
                >
                  Reset All Filters
                </button>
              </div>
            )}
          </div>

        </div>

      </main>

      {/* 4. The Kundapura Cars Assured 4 Pillars */}
      <TrustBadges />

      {/* 5. Bangalore Experience Hubs Showcase */}
      <BangaloreHubs />

      {/* 6. FAQ Section */}
      <FaqSection />

      {/* 7. Footer */}
      <Footer onOpenHubs={scrollToHubs} onOpenAssurance={scrollToAssurance} />

      {/* Floating Compare Bar (when 1+ cars selected) */}
      {compareList.length > 0 && (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 bg-slate-900/95 backdrop-blur-md text-white px-5 py-3 rounded-2xl shadow-2xl border border-slate-700 flex items-center gap-4 animate-slide-up max-w-lg w-[92%] sm:w-auto">
          <div className="flex items-center gap-2 text-xs font-bold">
            <Layers className="w-4 h-4 text-brand-400" />
            <span>{compareList.length} Selected for Compare</span>
          </div>

          <div className="flex -space-x-2 overflow-hidden">
            {compareList.map((c) => (
              <img
                key={c.id}
                src={c.images[0]}
                alt={c.title}
                className="inline-block h-7 w-7 rounded-full ring-2 ring-slate-900 object-cover"
              />
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setCompareModalOpen(true)}
              className="px-3.5 py-1.5 bg-brand-600 hover:bg-brand-500 text-white text-xs font-extrabold rounded-xl transition-all shadow-xs"
            >
              Compare Now
            </button>
            <button
              onClick={() => setCompareList([])}
              className="p-1 text-slate-400 hover:text-white"
              title="Clear"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Floating WhatsApp Quick Action */}
      <a
        href="https://wa.me/918047259900?text=Hi%20Kundapura%20Cars%20Bangalore,%20I%20would%20like%20to%20inquire%20about%20certified%20used%20cars."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-30 w-12 h-12 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg flex items-center justify-center transition-all hover:scale-110 active:scale-95"
        title="Chat with Bangalore Hub on WhatsApp"
      >
        <MessageSquare className="w-6 h-6" />
      </a>

      {/* Modals */}
      {selectedCar && (
        <CarDetailModal
          car={selectedCar}
          onClose={() => setSelectedCar(null)}
          isWishlisted={wishlistIds.includes(selectedCar.id)}
          onToggleWishlist={toggleWishlist}
          onBookTestDrive={(c) => {
            setSelectedCar(null);
            setTestDriveCar(c);
          }}
          onReserveCar={(c) => {
            setSelectedCar(null);
            setReserveCar(c);
          }}
          isCompared={compareList.some((c) => c.id === selectedCar.id)}
          onToggleCompare={toggleCompare}
        />
      )}

      {testDriveCar && (
        <TestDriveModal
          car={testDriveCar}
          onClose={() => setTestDriveCar(null)}
        />
      )}

      {reserveCar && (
        <ReserveModal
          car={reserveCar}
          onClose={() => setReserveCar(null)}
        />
      )}

      {compareModalOpen && (
        <CompareModal
          cars={compareList}
          onClose={() => setCompareModalOpen(false)}
          onRemoveCar={removeCompareCar}
          onSelectCar={setSelectedCar}
          onBookTestDrive={setTestDriveCar}
        />
      )}

      <WishlistDrawer
        isOpen={wishlistDrawerOpen}
        onClose={() => setWishlistDrawerOpen(false)}
        wishlistCars={wishlistCars}
        onRemoveWishlist={toggleWishlist}
        onSelectCar={setSelectedCar}
        onBookTestDrive={setTestDriveCar}
      />

      {mobileFilterOpen && (
        <FilterSidebar
          filters={filters}
          onFilterChange={setFilters}
          onResetFilters={handleResetFilters}
          availableBrands={availableBrands}
          totalResults={filteredCars.length}
          isMobileModal={true}
          onCloseMobileModal={() => setMobileFilterOpen(false)}
        />
      )}

    </div>
  );
};
