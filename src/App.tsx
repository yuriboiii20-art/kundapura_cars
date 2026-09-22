import React, { useState, useMemo, useEffect, useRef } from 'react';
import { 
  SlidersHorizontal, 
  ArrowUpDown, 
  ChevronDown,
  Check,
  Car as CarIcon, 
  Layers, 
  MessageSquare,
  X
} from 'lucide-react';
import { CARS_DATA } from './data/carsData';
import { Car, FilterState, BodyType } from './types/car';
import { Navbar } from './components/Navbar';
import { HeroBanner } from './components/HeroBanner';
import { MobileDrawer } from './components/MobileDrawer';
import { FilterSidebar } from './components/FilterSidebar';
import { CarCard } from './components/CarCard';
import { CarDetailModal } from './components/CarDetailModal';
import { TestDriveModal } from './components/TestDriveModal';
import { ReserveModal } from './components/ReserveModal';
import { CompareModal } from './components/CompareModal';
import { WishlistDrawer } from './components/WishlistDrawer';
import { KundapuraHubs } from './components/KundapuraHubs';
import { TrustBadges } from './components/TrustBadges';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';

const SORT_OPTIONS: { id: FilterState['sortBy']; label: string }[] = [
  { id: 'recommended', label: 'Featured & Recommended' },
  { id: 'price-asc', label: 'Price: Low to High' },
  { id: 'price-desc', label: 'Price: High to Low' },
  { id: 'km-asc', label: 'Lowest Kilometers' },
  { id: 'year-desc', label: 'Newest Model Year' },
];

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
  const [sortDropdownOpen, setSortDropdownOpen] = useState(false);
  const sortDropdownRef = useRef<HTMLDivElement>(null);
  
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

  // Modals & Drawers
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  const [testDriveCar, setTestDriveCar] = useState<Car | null>(null);
  const [reserveCar, setReserveCar] = useState<Car | null>(null);
  const [wishlistDrawerOpen, setWishlistDrawerOpen] = useState(false);
  const [compareModalOpen, setCompareModalOpen] = useState(false);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const handleSelectCategory = (category: string) => {
    if (category === 'Luxury') {
      setFilters(prev => ({ ...prev, minPrice: 1500000, maxPrice: 4000000 }));
    } else if (category === 'Premium') {
      setFilters(prev => ({ ...prev, minPrice: 800000, maxPrice: 2500000, minYear: 2020 }));
    } else if (category === 'Assured') {
      setFilters(INITIAL_FILTERS);
    } else if (category === 'Budget') {
      setFilters(prev => ({ ...prev, minPrice: 0, maxPrice: 700000 }));
    }
    setTimeout(() => {
      document.getElementById('car-catalog')?.scrollIntoView({ behavior: 'smooth' });
    }, 150);
  };

  const handleSelectBodyType = (bodyType: BodyType) => {
    setFilters(prev => ({ ...prev, bodyTypes: [bodyType] }));
    setTimeout(() => {
      document.getElementById('car-catalog')?.scrollIntoView({ behavior: 'smooth' });
    }, 150);
  };

  // Close sort dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sortDropdownRef.current && !sortDropdownRef.current.contains(event.target as Node)) {
        setSortDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

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

  const handleResetFilters = () => {
    setFilters(INITIAL_FILTERS);
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
    document.getElementById('kundapura-hubs')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAssurance = () => {
    document.getElementById('kundapura-assured')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#2E271F]">
      
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
        onOpenDrawer={() => setMobileDrawerOpen(true)}
      />

      {/* Desktop Full-Height Fixed Filter Sidebar */}
      <div className="hidden md:block">
        <FilterSidebar
          filters={filters}
          onFilterChange={setFilters}
          onResetFilters={handleResetFilters}
          availableBrands={availableBrands}
          totalResults={filteredCars.length}
        />
      </div>

      {/* Main Right Scrollable Content Area */}
      <div className="md:pl-72 lg:pl-80 flex-1 flex flex-col min-w-0">
        
        {/* 2. Hero Banner */}
        <HeroBanner />

        {/* 3. Main Catalog Section */}
        <main id="car-catalog" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 w-full flex-1">
          
          {/* Catalog Control Bar */}
          <div className="flex items-center justify-between gap-3 mb-6 pb-4 border-b border-[#ECC4A6]/60">
            {/* Left: Mobile Filter Button */}
            <div>
              <button
                type="button"
                onClick={() => setMobileFilterOpen(true)}
                className="md:hidden flex items-center gap-1.5 px-3.5 py-2 bg-[#D27848] hover:bg-[#B95C2E] text-white text-xs font-bold rounded-xl border border-[#B95C2E] shadow-xs transition-colors"
              >
                <SlidersHorizontal className="w-3.5 h-3.5 text-white" />
                <span>Filters</span>
                {activeFilterCount > 0 && (
                  <span className="w-4 h-4 bg-white text-[#D27848] rounded-full text-[9px] flex items-center justify-center font-bold">
                    {activeFilterCount}
                  </span>
                )}
              </button>
            </div>

            {/* Right: Custom Themed Sort Dropdown (Bug-free, no native blue OS popups) */}
            <div className="relative" ref={sortDropdownRef}>
              <button
                type="button"
                onClick={() => setSortDropdownOpen(!sortDropdownOpen)}
                className="flex items-center gap-2 bg-[#FDF8F4] hover:bg-[#FBF0E6] px-3.5 py-2 rounded-xl border border-[#ECC4A6] text-xs font-bold text-[#2E271F] shadow-subtle transition-all cursor-pointer"
                aria-expanded={sortDropdownOpen}
                aria-haspopup="listbox"
              >
                <ArrowUpDown className="w-3.5 h-3.5 text-[#D27848] shrink-0" />
                <span className="text-[#8B785F] font-medium hidden sm:inline">Sort by:</span>
                <span className="font-extrabold text-[#2E271F]">
                  {SORT_OPTIONS.find((opt) => opt.id === filters.sortBy)?.label || 'Featured'}
                </span>
                <ChevronDown
                  className={`w-3.5 h-3.5 text-[#8B785F] transition-transform duration-200 ${
                    sortDropdownOpen ? 'rotate-180 text-[#D27848]' : ''
                  }`}
                />
              </button>

              {/* Dropdown Menu Popover */}
              {sortDropdownOpen && (
                <div className="absolute right-0 top-full mt-1.5 z-40 w-56 bg-white rounded-2xl border border-[#ECC4A6] shadow-xl p-1.5 space-y-1 animate-slide-up">
                  {SORT_OPTIONS.map((option) => {
                    const isSelected = filters.sortBy === option.id;
                    return (
                      <button
                        key={option.id}
                        type="button"
                        onClick={() => {
                          setFilters((prev) => ({ ...prev, sortBy: option.id }));
                          setSortDropdownOpen(false);
                        }}
                        className={`w-full px-3 py-2 text-left rounded-xl text-xs font-bold transition-colors flex items-center justify-between ${
                          isSelected
                            ? 'bg-[#FDF3EA] text-[#D27848] font-extrabold'
                            : 'text-[#2E271F] hover:bg-[#FDF8F4] hover:text-[#D27848]'
                        }`}
                      >
                        <span>{option.label}</span>
                        {isSelected && <Check className="w-3.5 h-3.5 text-[#D27848] shrink-0" />}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          </div>

          {/* Active Filter Chips bar (if any) */}
          {activeFilterCount > 0 && (
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <span className="text-xs font-bold text-[#AA957A]">Active:</span>

              {filters.searchQuery && (
                <span className="badge-pill bg-[#FDF8F4] text-[#74351B] border border-[#ECC4A6] shadow-2xs">
                  <span>"{filters.searchQuery}"</span>
                  <button onClick={() => setFilters((prev) => ({ ...prev, searchQuery: '' }))}>
                    <X className="w-3 h-3 text-[#AA957A] hover:text-[#74351B]" />
                  </button>
                </span>
              )}

              {filters.bodyTypes.map((t) => (
                <span key={t} className="badge-pill bg-[#FDF3EA] text-[#74351B] border border-[#ECC4A6] shadow-2xs">
                  <span>{t}</span>
                  <button onClick={() => setFilters((prev) => ({ ...prev, bodyTypes: prev.bodyTypes.filter((x) => x !== t) }))}>
                    <X className="w-3 h-3 text-[#AA957A] hover:text-[#74351B]" />
                  </button>
                </span>
              ))}

              {filters.brands.map((b) => (
                <span key={b} className="badge-pill bg-[#FDF3EA] text-[#74351B] border border-[#ECC4A6] shadow-2xs">
                  <span>{b}</span>
                  <button onClick={() => setFilters((prev) => ({ ...prev, brands: prev.brands.filter((x) => x !== b) }))}>
                    <X className="w-3 h-3 text-[#AA957A] hover:text-[#74351B]" />
                  </button>
                </span>
              ))}

              {filters.fuelTypes.map((f) => (
                <span key={f} className="badge-pill bg-[#FDF3EA] text-[#74351B] border border-[#ECC4A6] shadow-2xs">
                  <span>{f}</span>
                  <button onClick={() => setFilters((prev) => ({ ...prev, fuelTypes: prev.fuelTypes.filter((x) => x !== f) }))}>
                    <X className="w-3 h-3 text-[#AA957A] hover:text-[#74351B]" />
                  </button>
                </span>
              ))}

              {filters.transmissions.map((tr) => (
                <span key={tr} className="badge-pill bg-[#FDF3EA] text-[#74351B] border border-[#ECC4A6] shadow-2xs">
                  <span>{tr}</span>
                  <button onClick={() => setFilters((prev) => ({ ...prev, transmissions: prev.transmissions.filter((x) => x !== tr) }))}>
                    <X className="w-3 h-3 text-[#AA957A] hover:text-[#74351B]" />
                  </button>
                </span>
              ))}

              <button
                onClick={handleResetFilters}
                className="text-xs font-bold text-[#D27848] hover:text-[#B95C2E] hover:underline ml-2"
              >
                Clear All Filters
              </button>
            </div>
          )}

          {/* Car Cards Grid */}
          <div className="w-full">
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
              <div className="bg-[#FDF8F4] rounded-3xl p-10 sm:p-16 border border-[#ECC4A6] text-center shadow-subtle">
                <div className="w-16 h-16 rounded-2xl bg-[#FBF0E6] flex items-center justify-center mx-auto text-[#D27848] mb-4 border border-[#ECC4A6]">
                  <CarIcon className="w-8 h-8 text-[#D27848]" />
                </div>
                <h3 className="text-lg font-black text-[#2E271F] mb-1">
                  No Certified Cars Match Your Filters
                </h3>
                <p className="text-xs text-[#8B785F] max-w-md mx-auto mb-6">
                  Try adjusting your budget slider, fuel type, or body style to view more cars available in Kundapura.
                </p>
                <button
                  onClick={handleResetFilters}
                  className="px-5 py-2.5 bg-[#D27848] hover:bg-[#B95C2E] text-white font-extrabold text-xs rounded-xl shadow-md transition-all"
                >
                  Reset All Filters
                </button>
              </div>
            )}
          </div>

        </main>

        {/* 4. The Kundapura Cars Assured 4 Pillars */}
        <TrustBadges />

        {/* 5. Kundapura Experience Hubs Showcase */}
        <KundapuraHubs />

        {/* 6. FAQ Section */}
        <FaqSection />

        {/* 7. Footer */}
        <Footer onOpenHubs={scrollToHubs} onOpenAssurance={scrollToAssurance} />

      </div>

      {/* Floating Compare Bar (when 1+ cars selected) */}
      {compareList.length > 0 && (
        <div className="fixed bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 z-40 bg-[#241A15]/95 backdrop-blur-md text-[#FDF8F4] px-3.5 sm:px-5 py-2 sm:py-3 rounded-2xl shadow-2xl border border-[#451E10] flex items-center justify-between gap-2.5 sm:gap-4 animate-slide-up w-[calc(100%-1.5rem)] sm:w-auto max-w-lg">
          <div className="flex items-center gap-2 text-xs font-bold text-[#FDF8F4] min-w-0">
            <Layers className="w-4 h-4 text-[#D27848] shrink-0" />
            <span className="truncate">{compareList.length} to Compare</span>
          </div>

          <div className="flex -space-x-2 overflow-hidden shrink-0">
            {compareList.map((c) => (
              <img
                key={c.id}
                src={c.images[0]}
                alt={c.title}
                className="inline-block h-6 w-6 sm:h-7 sm:w-7 rounded-full ring-2 ring-[#241A15] object-cover"
              />
            ))}
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <button
              onClick={() => setCompareModalOpen(true)}
              className="px-3 sm:px-3.5 py-1.5 bg-[#D27848] hover:bg-[#B95C2E] text-white text-[11px] sm:text-xs font-extrabold rounded-xl transition-all shadow-xs"
            >
              Compare
            </button>
            <button
              onClick={() => setCompareList([])}
              className="p-1 text-[#AA957A] hover:text-[#FDF8F4]"
              title="Clear"
            >
              <X className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Floating WhatsApp Quick Action */}
      <a
        href="https://wa.me/918254233440?text=Hi%20Kundapura%20Cars,%20I%20would%20like%20to%20inquire%20about%20certified%20used%20cars."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 sm:bottom-5 sm:right-5 z-30 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#241A15] hover:bg-[#451E10] text-[#FDF8F4] shadow-hover flex items-center justify-center transition-all hover:scale-110 active:scale-95 border border-[#ECC4A6]/70"
        title="Chat with Kundapura Hub on WhatsApp"
      >
        <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 text-[#D27848]" />
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

      <MobileDrawer
        isOpen={mobileDrawerOpen}
        onClose={() => setMobileDrawerOpen(false)}
        onSelectCategory={handleSelectCategory}
        onSelectBodyType={handleSelectBodyType}
        onOpenHubs={scrollToHubs}
        onOpenAssurance={scrollToAssurance}
        onOpenEmiCalculator={() => {
          if (filteredCars.length > 0) {
            setSelectedCar(filteredCars[0]);
          }
        }}
      />

    </div>
  );
};
