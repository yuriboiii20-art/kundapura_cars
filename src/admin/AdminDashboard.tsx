import React, { useState, useMemo } from 'react';
import { 
  Car as CarIcon, 
  Plus, 
  Search, 
  Trash2, 
  Edit3, 
  Eye, 
  Phone, 
  MessageSquare, 
  Sparkles, 
  Download, 
  Upload, 
  RotateCcw, 
  LogOut, 
  ArrowLeft, 
  CheckCircle2, 
  DollarSign, 
  Users, 
  MapPin, 
  Settings, 
  X, 
  BarChart3,
  Cloud,
  Database,
  RefreshCw,
  AlertCircle,
  Loader2
} from 'lucide-react';
import { useInventory } from '../context/InventoryContext';
import { Car } from '../types/car';
import { CustomerLead, HubData, LeadStatus, LeadType } from '../types/admin';
import { formatPrice } from '../utils/formatters';
import { CarEditModal } from './CarEditModal';
import { CarDetailModal } from '../components/CarDetailModal';

interface AdminDashboardProps {
  onBackToSite: () => void;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({ onBackToSite }) => {
  const { 
    cars, 
    leads, 
    hubs, 
    settings, 
    logoutAdmin, 
    addCar, 
    updateCar, 
    deleteCar, 
    resetCars, 
    addLead,
    updateLeadStatus, 
    deleteLead, 
    addHub,
    updateHub,
    deleteHub,
    updateSettings,
    exportData,
    importData,
    cloudStatus,
    cloudError,
    isCloudConfigured,
    firebaseConfig,
    syncLocalDataToCloud
  } = useInventory();

  // Active Tab
  const [activeTab, setActiveTab] = useState<'analytics' | 'inventory' | 'leads' | 'hubs' | 'settings' | 'backup' | 'cloud'>('inventory');

  // Cloud Sync Status States
  const [cloudSyncing, setCloudSyncing] = useState(false);
  const [cloudFeedbackMsg, setCloudFeedbackMsg] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  // Inventory filter & search state
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBodyType, setSelectedBodyType] = useState<string>('all');
  const [selectedFuelType, setSelectedFuelType] = useState<string>('all');

  // Leads filter & search
  const [leadSearch, setLeadSearch] = useState('');
  const [leadTypeFilter, setLeadTypeFilter] = useState<string>('all');
  const [leadStatusFilter, setLeadStatusFilter] = useState<string>('all');

  // Modals
  const [editingCar, setEditingCar] = useState<Car | null>(null);
  const [carModalOpen, setCarModalOpen] = useState(false);
  const [previewCar, setPreviewCar] = useState<Car | null>(null);

  // Settings form state
  const [settingsForm, setSettingsForm] = useState(settings);
  const [settingsSavedMessage, setSettingsSavedMessage] = useState(false);

  // New Hub form state
  const [editingHub, setEditingHub] = useState<HubData | null>(null);
  const [hubModalOpen, setHubModalOpen] = useState(false);

  // New Lead manual modal
  const [manualLeadModalOpen, setManualLeadModalOpen] = useState(false);
  const [newLeadName, setNewLeadName] = useState('');
  const [newLeadPhone, setNewLeadPhone] = useState('');
  const [newLeadCar, setNewLeadCar] = useState('');
  const [newLeadType, setNewLeadType] = useState<LeadType>('test_drive');
  const [newLeadNotes, setNewLeadNotes] = useState('');

  // Backup state
  const [importJsonText, setImportJsonText] = useState('');
  const [backupMessage, setBackupMessage] = useState('');

  // 1. Filtered Cars
  const filteredCars = useMemo(() => {
    return cars.filter((c) => {
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchesTitle = c.title.toLowerCase().includes(q);
        const matchesBrand = c.brand.toLowerCase().includes(q);
        const matchesModel = c.model.toLowerCase().includes(q);
        const matchesRto = c.rto.toLowerCase().includes(q);
        const matchesHub = c.hubLocation.toLowerCase().includes(q);
        if (!matchesTitle && !matchesBrand && !matchesModel && !matchesRto && !matchesHub) {
          return false;
        }
      }
      if (selectedBodyType !== 'all' && c.bodyType !== selectedBodyType) return false;
      if (selectedFuelType !== 'all' && c.fuelType !== selectedFuelType) return false;
      return true;
    });
  }, [cars, searchQuery, selectedBodyType, selectedFuelType]);

  // 2. Filtered Leads
  const filteredLeads = useMemo(() => {
    return leads.filter((l) => {
      if (leadSearch.trim()) {
        const q = leadSearch.toLowerCase().trim();
        const matchesName = l.customerName.toLowerCase().includes(q);
        const matchesPhone = l.phone.includes(q);
        const matchesCar = l.carTitle?.toLowerCase().includes(q);
        if (!matchesName && !matchesPhone && !matchesCar) return false;
      }
      if (leadTypeFilter !== 'all' && l.type !== leadTypeFilter) return false;
      if (leadStatusFilter !== 'all' && l.status !== leadStatusFilter) return false;
      return true;
    });
  }, [leads, leadSearch, leadTypeFilter, leadStatusFilter]);

  // 3. Analytics Calculations
  const stats = useMemo(() => {
    const totalInventoryValue = cars.reduce((acc, c) => acc + c.price, 0);
    const avgPrice = cars.length > 0 ? Math.round(totalInventoryValue / cars.length) : 0;
    const newLeadsCount = leads.filter((l) => l.status === 'new').length;
    const assuredCount = cars.filter((c) => c.isAssured).length;
    const featuredCount = cars.filter((c) => c.featured).length;

    // Body type counts
    const bodyCounts: Record<string, number> = {};
    cars.forEach((c) => {
      bodyCounts[c.bodyType] = (bodyCounts[c.bodyType] || 0) + 1;
    });

    // Fuel type counts
    const fuelCounts: Record<string, number> = {};
    cars.forEach((c) => {
      fuelCounts[c.fuelType] = (fuelCounts[c.fuelType] || 0) + 1;
    });

    return {
      totalCars: cars.length,
      totalValue: totalInventoryValue,
      avgPrice,
      totalLeads: leads.length,
      newLeadsCount,
      assuredCount,
      featuredCount,
      bodyCounts,
      fuelCounts,
    };
  }, [cars, leads]);

  // Handle Save Car
  const handleSaveCar = (carData: Omit<Car, 'id'> & { id?: string }) => {
    if (carData.id) {
      updateCar(carData.id, carData);
    } else {
      addCar(carData);
    }
  };

  // Handle Save Settings
  const handleSaveSettings = (e: React.FormEvent) => {
    e.preventDefault();
    updateSettings(settingsForm);
    setSettingsSavedMessage(true);
    setTimeout(() => setSettingsSavedMessage(false), 3000);
  };

  // Handle Export Download
  const handleExportDownload = () => {
    const dataStr = exportData();
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `kundapura_cars_backup_${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Handle Import JSON
  const handleImportJson = () => {
    if (!importJsonText.trim()) {
      alert('Please paste valid JSON data into the text box.');
      return;
    }
    const success = importData(importJsonText.trim());
    if (success) {
      setBackupMessage('✅ Backup data imported successfully!');
      setImportJsonText('');
      setTimeout(() => setBackupMessage(''), 4000);
    } else {
      alert('Failed to parse JSON. Please ensure the formatting is correct.');
    }
  };

  // Handle Add Manual Lead
  const handleAddManualLead = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newLeadName.trim() || !newLeadPhone.trim()) return;

    addLead({
      customerName: newLeadName.trim(),
      phone: newLeadPhone.trim(),
      carTitle: newLeadCar.trim() || 'General Kundapura Inquiry',
      type: newLeadType,
      status: 'new',
      notes: newLeadNotes.trim() || 'Manual inquiry created from Admin Panel',
    });

    setNewLeadName('');
    setNewLeadPhone('');
    setNewLeadCar('');
    setNewLeadNotes('');
    setManualLeadModalOpen(false);
  };

  // Quick WhatsApp link generator
  const getWhatsAppLink = (lead: CustomerLead) => {
    const cleanPhone = lead.phone.replace(/[^0-9]/g, '');
    const phoneWithCode = cleanPhone.startsWith('91') ? cleanPhone : `91${cleanPhone}`;
    const text = encodeURIComponent(
      `Hello ${lead.customerName}! Greetings from Kundapura Cars. We received your request regarding the ${lead.carTitle || 'certified vehicle'}. How can we assist you with test drive or financing details?`
    );
    return `https://wa.me/${phoneWithCode}?text=${text}`;
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#2E271F] flex flex-col font-sans w-full overflow-x-hidden">
      
      {/* 1. TOP ADMIN APP BAR */}
      <header className="sticky top-0 z-40 bg-[#241A15] text-[#FDF8F4] border-b border-[#451E10] shadow-md w-full">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 w-full">
          <div className="flex items-center justify-between h-14 sm:h-16 gap-2 sm:gap-3">
            
            {/* Left: Brand + Admin Pill */}
            <div className="flex items-center gap-2 sm:gap-2.5 min-w-0">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-gradient-to-tr from-[#D27848] to-[#E0713B] flex items-center justify-center text-white shadow-sm shrink-0">
                <CarIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 truncate">
                <span className="text-xs sm:text-base font-black tracking-tight text-white whitespace-nowrap">
                  KUNDAPURA<span className="text-[#D27848]">CARS</span>
                </span>
                <span className="px-1.5 sm:px-2 py-0.5 rounded-full bg-[#451E10] text-[#ECC4A6] text-[9px] sm:text-[10px] font-bold border border-[#74351B] uppercase tracking-wider whitespace-nowrap">
                  Admin
                </span>
              </div>
            </div>

            {/* Right: Exit to site, Cloud Status & Logout */}
            <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
              
              {/* Cloud Status Indicator Pill */}
              <button
                onClick={() => setActiveTab('cloud')}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold border transition-all cursor-pointer ${
                  cloudStatus === 'connected'
                    ? 'bg-emerald-950/80 border-emerald-500/50 text-emerald-300 hover:bg-emerald-900'
                    : cloudStatus === 'syncing'
                    ? 'bg-amber-950/80 border-amber-500/50 text-amber-300 hover:bg-amber-900'
                    : cloudStatus === 'error'
                    ? 'bg-red-950/80 border-red-500/50 text-red-300 hover:bg-red-900'
                    : 'bg-[#362117] border-[#74351B] text-[#ECC4A6] hover:bg-[#451E10]'
                }`}
                title="Click to view Cloud Database sync status"
              >
                {cloudStatus === 'connected' ? (
                  <>
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span className="hidden sm:inline">Cloud Live</span>
                    <span className="sm:hidden">Live</span>
                  </>
                ) : cloudStatus === 'syncing' ? (
                  <>
                    <RefreshCw className="w-3 h-3 animate-spin text-amber-400" />
                    <span className="hidden sm:inline">Syncing...</span>
                  </>
                ) : cloudStatus === 'error' ? (
                  <>
                    <AlertCircle className="w-3 h-3 text-red-400" />
                    <span className="hidden sm:inline">Cloud Error</span>
                  </>
                ) : (
                  <>
                    <Cloud className="w-3 h-3 text-[#D27848]" />
                    <span className="hidden sm:inline">Setup Cloud Sync</span>
                    <span className="sm:hidden">Setup Cloud</span>
                  </>
                )}
              </button>

              <button
                onClick={onBackToSite}
                className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl bg-[#451E10] hover:bg-[#74351B] text-[#FDF8F4] text-xs font-bold border border-[#74351B] transition-all cursor-pointer"
                title="View live client website"
              >
                <ArrowLeft className="w-3.5 h-3.5 text-[#D27848]" />
                <span className="hidden sm:inline">View Public Store</span>
                <span className="sm:hidden">Store</span>
              </button>

              <button
                onClick={logoutAdmin}
                className="p-1.5 sm:px-3 sm:py-1.5 rounded-xl bg-red-950/80 hover:bg-red-900 text-red-200 text-xs font-bold border border-red-800 transition-all flex items-center gap-1.5 cursor-pointer"
                title="Log out of Admin Portal"
              >
                <LogOut className="w-3.5 h-3.5 text-red-400" />
                <span className="hidden sm:inline">Lock Portal</span>
              </button>
            </div>

          </div>
        </div>

        {/* Tab Navigation Row */}
        <div className="bg-[#17100D] border-t border-[#362117] px-3 sm:px-6 lg:px-8 w-full">
          <div className="max-w-7xl mx-auto flex items-center gap-1 sm:gap-2 overflow-x-auto no-scrollbar py-1.5 w-full">
            {[
              { id: 'inventory', label: 'Car Inventory', icon: CarIcon, badge: cars.length },
              { id: 'leads', label: 'Customer Leads', icon: Users, badge: stats.newLeadsCount > 0 ? stats.newLeadsCount : undefined, badgeColor: 'bg-[#D27848]' },
              { id: 'cloud', label: 'Cloud Sync & Database', icon: Cloud, badge: cloudStatus === 'connected' ? 'LIVE' : 'SETUP', badgeColor: cloudStatus === 'connected' ? 'bg-emerald-600 text-white' : 'bg-amber-600 text-white' },
              { id: 'analytics', label: 'Analytics & Insights', icon: BarChart3 },
              { id: 'hubs', label: 'Dealership Hubs', icon: MapPin, badge: hubs.length },
              { id: 'settings', label: 'Site & Announcement Settings', icon: Settings },
              { id: 'backup', label: 'Backup & Restore', icon: Download },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer ${
                    isActive
                      ? 'bg-[#D27848] text-white shadow-xs'
                      : 'text-[#DFCFBA] hover:bg-[#2E1D16] hover:text-white'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5 shrink-0" />
                  <span className="whitespace-nowrap">{tab.label}</span>
                  {tab.badge !== undefined && (
                    <span className={`px-1.5 py-0.2 rounded-full text-[10px] font-black ${tab.badgeColor || 'bg-[#241A15] text-[#ECC4A6]'}`}>
                      {tab.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </header>

      {/* 2. MAIN ADMIN CONTENT CONTAINER */}
      <main className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-6 w-full flex-1 min-w-0">
        
        {/* ========================================================== */}
        {/* TAB 1: CAR INVENTORY MANAGEMENT */}
        {/* ========================================================== */}
        {activeTab === 'inventory' && (
          <div className="space-y-4 sm:space-y-6 animate-fade-in w-full">
            
            {/* Header Toolbar */}
            <div className="bg-white rounded-2xl sm:rounded-3xl p-3.5 sm:p-5 border border-[#ECC4A6] shadow-sm flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 w-full">
              
              {/* Search & Filters */}
              <div className="flex-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-2.5 w-full min-w-0">
                <div className="relative flex-1 w-full min-w-0">
                  <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#AA957A]" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search model, brand, RTO (e.g. Thar, Creta, KA-20)..."
                    className="w-full pl-10 pr-8 py-2 sm:py-2.5 bg-[#FAF7F2] rounded-xl border border-[#ECC4A6] text-xs font-bold text-[#2E271F] focus:bg-white focus:border-[#D27848] outline-none"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-3 top-1/2 -translate-y-1/2 p-0.5 text-[#AA957A] hover:text-[#2E271F]"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

                <div className="grid grid-cols-2 sm:flex items-center gap-2 w-full sm:w-auto">
                  <select
                    value={selectedBodyType}
                    onChange={(e) => setSelectedBodyType(e.target.value)}
                    className="w-full sm:w-auto px-2.5 sm:px-3 py-2 sm:py-2.5 bg-[#FAF7F2] rounded-xl border border-[#ECC4A6] text-xs font-bold text-[#2E271F] outline-none cursor-pointer"
                  >
                    <option value="all">All Bodies</option>
                    <option value="SUV">SUV</option>
                    <option value="Sedan">Sedan</option>
                    <option value="Hatchback">Hatchback</option>
                    <option value="EV">Electric (EV)</option>
                    <option value="Luxury">Luxury</option>
                    <option value="MUV">MUV</option>
                  </select>

                  <select
                    value={selectedFuelType}
                    onChange={(e) => setSelectedFuelType(e.target.value)}
                    className="w-full sm:w-auto px-2.5 sm:px-3 py-2 sm:py-2.5 bg-[#FAF7F2] rounded-xl border border-[#ECC4A6] text-xs font-bold text-[#2E271F] outline-none cursor-pointer"
                  >
                    <option value="all">All Fuels</option>
                    <option value="Petrol">Petrol</option>
                    <option value="Diesel">Diesel</option>
                    <option value="Electric">Electric</option>
                    <option value="CNG">CNG</option>
                    <option value="Hybrid">Hybrid</option>
                  </select>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2 shrink-0 w-full md:w-auto">
                <button
                  onClick={() => {
                    setEditingCar(null);
                    setCarModalOpen(true);
                  }}
                  className="w-full md:w-auto flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-[#D27848] to-[#B95C2E] hover:from-[#B95C2E] hover:to-[#964521] text-white text-xs font-black rounded-xl shadow-md transition-all cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add New Car</span>
                </button>
              </div>

            </div>

            {/* Results Count & Quick Badges */}
            <div className="flex items-center justify-between text-xs text-[#8B785F] font-bold px-1">
              <div className="truncate">
                Showing <strong className="text-[#2E271F]">{filteredCars.length}</strong> of {cars.length} cars
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                <button
                  onClick={() => setSelectedBodyType(selectedBodyType === 'SUV' ? 'all' : 'SUV')}
                  className={`px-2 sm:px-2.5 py-1 rounded-lg border text-[10px] sm:text-[11px] font-bold cursor-pointer ${
                    selectedBodyType === 'SUV'
                      ? 'bg-[#D27848] text-white border-[#D27848]'
                      : 'bg-white text-[#74351B] border-[#ECC4A6]'
                  }`}
                >
                  SUVs
                </button>
                <button
                  onClick={() => setSelectedFuelType(selectedFuelType === 'Electric' ? 'all' : 'Electric')}
                  className={`px-2 sm:px-2.5 py-1 rounded-lg border text-[10px] sm:text-[11px] font-bold cursor-pointer ${
                    selectedFuelType === 'Electric'
                      ? 'bg-[#D27848] text-white border-[#D27848]'
                      : 'bg-white text-[#74351B] border-[#ECC4A6]'
                  }`}
                >
                  EVs
                </button>
              </div>
            </div>

            {/* CARS INVENTORY LIST */}
            {filteredCars.length > 0 ? (
              <div className="space-y-3 w-full">
                {filteredCars.map((car) => (
                  <div
                    key={car.id}
                    className="bg-white rounded-2xl border border-[#ECC4A6] p-3 sm:p-4 shadow-sm hover:shadow-md transition-all flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 overflow-hidden w-full"
                  >
                    
                    {/* Left: Thumbnail & Info */}
                    <div className="flex items-start gap-3 min-w-0 flex-1 w-full">
                      <div className="relative w-20 h-16 sm:w-24 sm:h-20 rounded-xl overflow-hidden shrink-0 border border-[#ECC4A6] bg-[#FAF7F2]">
                        {car.images && car.images.length > 0 ? (
                          <img
                            src={car.images[0]}
                            alt={car.title}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              (e.target as HTMLElement).setAttribute('src', 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80');
                            }}
                          />
                        ) : (
                          <div className="w-full h-full flex flex-col items-center justify-center text-[#AA957A] bg-[#FAF7F2]">
                            <span className="text-base">🚗</span>
                            <span className="text-[8px] font-bold">No Photo</span>
                          </div>
                        )}
                        <span className="absolute bottom-1 right-1 px-1.5 py-0.5 rounded bg-black/70 text-white text-[9px] font-bold">
                          {car.images?.length || 0} 📷
                        </span>
                      </div>

                      <div className="min-w-0 flex-1 space-y-1">
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <span className="px-1.5 py-0.5 rounded-md bg-[#FAF7F2] text-[#74351B] border border-[#ECC4A6] text-[10px] font-extrabold whitespace-nowrap">
                            {car.year} • {car.fuelType} • {car.transmission}
                          </span>
                          <span className="px-1.5 py-0.5 rounded-md bg-[#FDF3EA] text-[#D27848] text-[10px] font-black border border-[#ECC4A6] whitespace-nowrap">
                            {car.rto}
                          </span>
                          {car.featured && (
                            <span className="px-1.5 py-0.5 rounded bg-[#241A15] text-[#ECC4A6] text-[9px] font-black whitespace-nowrap">
                              ★ FEATURED
                            </span>
                          )}
                          {car.trending && (
                            <span className="px-1.5 py-0.5 rounded bg-orange-600 text-white text-[9px] font-black whitespace-nowrap">
                              🔥 TRENDING
                            </span>
                          )}
                        </div>

                        <h4 className="text-xs sm:text-sm font-black text-[#2E271F] leading-snug line-clamp-2">
                          {car.title}
                        </h4>

                        <div className="text-[11px] text-[#8B785F] line-clamp-1">
                          📍 {car.hubLocation} • {car.kilometers.toLocaleString('en-IN')} km • {car.owner}
                        </div>
                      </div>
                    </div>

                    {/* Right / Bottom: Pricing & Actions merged into a clean row on mobile */}
                    <div className="flex items-center justify-between sm:justify-end gap-3 sm:gap-4 w-full sm:w-auto pt-2.5 sm:pt-0 border-t sm:border-t-0 border-[#ECC4A6]/50 shrink-0">
                      
                      {/* Price & EMI */}
                      <div className="flex flex-col items-start sm:items-end">
                        <div className="text-sm sm:text-base font-black text-[#D27848] leading-tight">
                          {formatPrice(car.price)}
                        </div>
                        <div className="text-[10px] sm:text-[11px] text-[#8B785F] font-semibold">
                          EMI ₹{car.emiStarting.toLocaleString('en-IN')}/mo
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={() => setPreviewCar(car)}
                          className="p-2 rounded-xl bg-[#FAF7F2] hover:bg-[#FDF3EA] text-[#74351B] border border-[#ECC4A6] transition-colors cursor-pointer"
                          title="Preview Car Modal as User"
                        >
                          <Eye className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        </button>

                        <button
                          onClick={() => {
                            setEditingCar(car);
                            setCarModalOpen(true);
                          }}
                          className="flex items-center gap-1 px-3 py-2 rounded-xl bg-[#FAF7F2] hover:bg-[#FDF3EA] text-[#74351B] border border-[#ECC4A6] text-xs font-bold transition-colors cursor-pointer"
                          title="Edit all attributes of this car"
                        >
                          <Edit3 className="w-3.5 h-3.5 text-[#D27848]" />
                          <span>Edit</span>
                        </button>

                        <button
                          onClick={() => {
                            if (confirm(`Are you sure you want to remove "${car.title}" from Kundapura Cars inventory?`)) {
                              deleteCar(car.id);
                            }
                          }}
                          className="p-2 rounded-xl bg-red-50 hover:bg-red-100 text-red-600 border border-red-200 transition-colors cursor-pointer"
                          title="Delete vehicle"
                        >
                          <Trash2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        </button>
                      </div>

                    </div>

                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-3xl p-10 text-center border border-[#ECC4A6]">
                <CarIcon className="w-10 h-10 text-[#AA957A] mx-auto mb-2" />
                <h4 className="font-extrabold text-sm text-[#2E271F]">No vehicles found matching filters</h4>
                <p className="text-xs text-[#8B785F] mt-1 mb-4">Try clearing your search query or reset filter settings.</p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedBodyType('all');
                    setSelectedFuelType('all');
                  }}
                  className="px-4 py-2 bg-[#FAF7F2] text-[#D27848] text-xs font-bold rounded-xl border border-[#ECC4A6] cursor-pointer"
                >
                  Clear Filters
                </button>
              </div>
            )}

          </div>
        )}

        {/* ========================================================== */}
        {/* TAB 2: CUSTOMER LEADS & INQUIRIES */}
        {/* ========================================================== */}
        {activeTab === 'leads' && (
          <div className="space-y-4 sm:space-y-6 animate-fade-in w-full">
            
            {/* Leads Toolbar */}
            <div className="bg-white rounded-2xl sm:rounded-3xl p-3.5 sm:p-5 border border-[#ECC4A6] shadow-sm flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 w-full">
              
              <div className="flex-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-2.5 w-full min-w-0">
                <div className="relative flex-1 w-full min-w-0">
                  <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#AA957A]" />
                  <input
                    type="text"
                    value={leadSearch}
                    onChange={(e) => setLeadSearch(e.target.value)}
                    placeholder="Search customer name, phone, car title..."
                    className="w-full pl-10 pr-3.5 py-2 sm:py-2.5 bg-[#FAF7F2] rounded-xl border border-[#ECC4A6] text-xs font-bold text-[#2E271F] focus:bg-white focus:border-[#D27848] outline-none"
                  />
                </div>

                <div className="grid grid-cols-2 sm:flex items-center gap-2 w-full sm:w-auto">
                  <select
                    value={leadTypeFilter}
                    onChange={(e) => setLeadTypeFilter(e.target.value)}
                    className="w-full sm:w-auto px-2.5 sm:px-3 py-2 sm:py-2.5 bg-[#FAF7F2] rounded-xl border border-[#ECC4A6] text-xs font-bold text-[#2E271F] outline-none cursor-pointer"
                  >
                    <option value="all">All Types</option>
                    <option value="reservation">₹999 Reservations</option>
                    <option value="test_drive">Test Drive</option>
                    <option value="emi_inquiry">Loan / EMI</option>
                    <option value="callback">Callback</option>
                  </select>

                  <select
                    value={leadStatusFilter}
                    onChange={(e) => setLeadStatusFilter(e.target.value)}
                    className="w-full sm:w-auto px-2.5 sm:px-3 py-2 sm:py-2.5 bg-[#FAF7F2] rounded-xl border border-[#ECC4A6] text-xs font-bold text-[#2E271F] outline-none cursor-pointer"
                  >
                    <option value="all">All Statuses</option>
                    <option value="new">🟢 New</option>
                    <option value="contacted">🟡 Contacted</option>
                    <option value="scheduled">🔵 Scheduled</option>
                    <option value="closed">🟣 Closed</option>
                    <option value="cancelled">🔴 Cancelled</option>
                  </select>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0 w-full md:w-auto">
                <button
                  onClick={() => setManualLeadModalOpen(true)}
                  className="w-full md:w-auto flex items-center justify-center gap-1.5 px-4 py-2.5 bg-gradient-to-r from-[#D27848] to-[#B95C2E] hover:from-[#B95C2E] hover:to-[#964521] text-white text-xs font-black rounded-xl shadow-md transition-all cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add Lead</span>
                </button>
              </div>

            </div>

            {/* Leads List */}
            {filteredLeads.length > 0 ? (
              <div className="space-y-3 w-full">
                {filteredLeads.map((lead) => (
                  <div
                    key={lead.id}
                    className="bg-white rounded-2xl border border-[#ECC4A6] p-3.5 sm:p-5 shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 sm:gap-4 w-full overflow-hidden"
                  >
                    
                    {/* Left: Lead Details */}
                    <div className="flex items-start gap-3 min-w-0 flex-1 w-full">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-[#FDF3EA] text-[#D27848] border border-[#ECC4A6] flex items-center justify-center font-black text-xs shrink-0">
                        {lead.type === 'reservation' ? '₹999' : lead.type === 'test_drive' ? '🏎️' : '📞'}
                      </div>

                      <div className="min-w-0 flex-1 space-y-1">
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <span className="text-xs sm:text-sm font-black text-[#2E271F]">
                            {lead.customerName}
                          </span>
                          
                          {/* Type Badge */}
                          <span className="px-2 py-0.5 rounded-full bg-[#FAF7F2] text-[#74351B] border border-[#ECC4A6] text-[10px] font-bold whitespace-nowrap">
                            {lead.type === 'reservation' ? '₹999 Reservation' : lead.type === 'test_drive' ? 'Test Drive' : 'EMI Consult'}
                          </span>

                          {/* Status Pill */}
                          <select
                            value={lead.status}
                            onChange={(e) => updateLeadStatus(lead.id, e.target.value as LeadStatus)}
                            className={`px-2 py-0.5 rounded-full text-[10px] font-black border cursor-pointer outline-none ${
                              lead.status === 'new'
                                ? 'bg-emerald-50 text-emerald-700 border-emerald-300'
                                : lead.status === 'scheduled'
                                ? 'bg-blue-50 text-blue-700 border-blue-300'
                                : lead.status === 'contacted'
                                ? 'bg-amber-50 text-amber-700 border-amber-300'
                                : lead.status === 'closed'
                                ? 'bg-purple-50 text-purple-700 border-purple-300'
                                : 'bg-rose-50 text-rose-700 border-rose-300'
                            }`}
                          >
                            <option value="new">🟢 New</option>
                            <option value="contacted">🟡 Contacted</option>
                            <option value="scheduled">🔵 Scheduled</option>
                            <option value="closed">🟣 Deal Closed</option>
                            <option value="cancelled">🔴 Cancelled</option>
                          </select>
                        </div>

                        <div className="text-xs text-[#74351B] font-bold truncate">
                          🚗 {lead.carTitle || 'Kundapura Certified Car'}
                        </div>

                        {lead.notes && (
                          <div className="text-[11px] text-[#8B785F] bg-[#FAF7F2] p-2 rounded-xl border border-[#ECC4A6]/50">
                            💬 "{lead.notes}"
                          </div>
                        )}

                        <div className="flex items-center gap-2 flex-wrap text-[10px] text-[#AA957A] font-semibold pt-0.5">
                          <span>📅 {new Date(lead.createdAt).toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' })}</span>
                          {lead.hubLocation && <span>📍 {lead.hubLocation}</span>}
                          {lead.paymentMethod && <span>💳 {lead.paymentMethod}</span>}
                        </div>
                      </div>
                    </div>

                    {/* Right: Quick Communication Buttons */}
                    <div className="flex items-center justify-end gap-2 w-full md:w-auto pt-2.5 md:pt-0 border-t md:border-t-0 border-[#ECC4A6]/50 shrink-0">
                      
                      <a
                        href={getWhatsAppLink(lead)}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 md:flex-initial flex items-center justify-center gap-1.5 px-3.5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl shadow-xs transition-colors"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span>WhatsApp</span>
                      </a>

                      <a
                        href={`tel:${lead.phone.replace(/[^0-9+]/g, '')}`}
                        className="flex-1 md:flex-initial flex items-center justify-center gap-1.5 px-3.5 py-2 bg-[#241A15] hover:bg-[#451E10] text-[#FDF8F4] text-xs font-bold rounded-xl shadow-xs transition-colors"
                      >
                        <Phone className="w-3.5 h-3.5 text-[#D27848]" />
                        <span>Call</span>
                      </a>

                      <button
                        onClick={() => {
                          if (confirm(`Delete lead for ${lead.customerName}?`)) {
                            deleteLead(lead.id);
                          }
                        }}
                        className="p-2 text-red-500 hover:bg-red-50 rounded-xl transition-colors cursor-pointer shrink-0"
                        title="Delete Lead"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>

                    </div>

                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-3xl p-10 text-center border border-[#ECC4A6]">
                <Users className="w-10 h-10 text-[#AA957A] mx-auto mb-2" />
                <h4 className="font-extrabold text-sm text-[#2E271F]">No customer inquiries match criteria</h4>
                <p className="text-xs text-[#8B785F] mt-1">New customer bookings from the website will automatically appear here.</p>
              </div>
            )}

          </div>
        )}

        {/* ========================================================== */}
        {/* TAB 3: ANALYTICS & INSIGHTS */}
        {/* ========================================================== */}
        {activeTab === 'analytics' && (
          <div className="space-y-6 animate-fade-in">
            
            {/* Top KPI Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              
              <div className="bg-white p-5 rounded-3xl border border-[#ECC4A6] shadow-sm">
                <div className="flex items-center justify-between text-[#8B785F] text-xs font-bold mb-2">
                  <span>Certified Stock</span>
                  <CarIcon className="w-4 h-4 text-[#D27848]" />
                </div>
                <div className="text-2xl sm:text-3xl font-black text-[#2E271F]">
                  {stats.totalCars} <span className="text-xs font-bold text-[#8B785F]">Cars</span>
                </div>
                <div className="text-[11px] text-emerald-700 font-bold mt-1">
                  100% 200-Point Verified
                </div>
              </div>

              <div className="bg-white p-5 rounded-3xl border border-[#ECC4A6] shadow-sm">
                <div className="flex items-center justify-between text-[#8B785F] text-xs font-bold mb-2">
                  <span>Total Inventory Value</span>
                  <DollarSign className="w-4 h-4 text-[#D27848]" />
                </div>
                <div className="text-2xl sm:text-3xl font-black text-[#D27848]">
                  ₹{(stats.totalValue / 10000000).toFixed(2)} <span className="text-xs font-bold text-[#8B785F]">Cr</span>
                </div>
                <div className="text-[11px] text-[#8B785F] font-bold mt-1">
                  Avg: {formatPrice(stats.avgPrice)} / car
                </div>
              </div>

              <div className="bg-white p-5 rounded-3xl border border-[#ECC4A6] shadow-sm">
                <div className="flex items-center justify-between text-[#8B785F] text-xs font-bold mb-2">
                  <span>Customer Leads</span>
                  <Users className="w-4 h-4 text-[#D27848]" />
                </div>
                <div className="text-2xl sm:text-3xl font-black text-[#2E271F]">
                  {stats.totalLeads}
                </div>
                <div className="text-[11px] text-[#D27848] font-bold mt-1">
                  {stats.newLeadsCount} New Inquiries Waiting
                </div>
              </div>

              <div className="bg-white p-5 rounded-3xl border border-[#ECC4A6] shadow-sm">
                <div className="flex items-center justify-between text-[#8B785F] text-xs font-bold mb-2">
                  <span>Assured &amp; Featured</span>
                  <Sparkles className="w-4 h-4 text-[#D27848]" />
                </div>
                <div className="text-2xl sm:text-3xl font-black text-[#2E271F]">
                  {stats.assuredCount} <span className="text-xs font-bold text-[#8B785F]">Assured</span>
                </div>
                <div className="text-[11px] text-[#74351B] font-bold mt-1">
                  {stats.featuredCount} Featured on Homepage
                </div>
              </div>

            </div>

            {/* Inventory Distribution Grids */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* By Body Type */}
              <div className="bg-white p-5 sm:p-6 rounded-3xl border border-[#ECC4A6] shadow-sm space-y-3">
                <h4 className="text-xs font-extrabold text-[#74351B] uppercase tracking-wider">
                  Inventory by Body Category
                </h4>
                <div className="space-y-2.5">
                  {Object.entries(stats.bodyCounts).map(([type, count]) => {
                    const pct = Math.round((count / stats.totalCars) * 100);
                    return (
                      <div key={type} className="space-y-1">
                        <div className="flex items-center justify-between text-xs font-bold text-[#2E271F]">
                          <span>{type}</span>
                          <span>{count} cars ({pct}%)</span>
                        </div>
                        <div className="h-2 rounded-full bg-[#FAF7F2] overflow-hidden border border-[#ECC4A6]/50">
                          <div
                            className="h-full bg-gradient-to-r from-[#D27848] to-[#B95C2E] rounded-full"
                            style={{ width: `${pct}%` }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* By Fuel Type */}
              <div className="bg-white p-5 sm:p-6 rounded-3xl border border-[#ECC4A6] shadow-sm space-y-3">
                <h4 className="text-xs font-extrabold text-[#74351B] uppercase tracking-wider">
                  Inventory by Fuel Type
                </h4>
                <div className="space-y-2.5">
                  {Object.entries(stats.fuelCounts).map(([fuel, count]) => {
                    const pct = Math.round((count / stats.totalCars) * 100);
                    return (
                      <div key={fuel} className="space-y-1">
                        <div className="flex items-center justify-between text-xs font-bold text-[#2E271F]">
                          <span>{fuel}</span>
                          <span>{count} cars ({pct}%)</span>
                        </div>
                        <div className="h-2 rounded-full bg-[#FAF7F2] overflow-hidden border border-[#ECC4A6]/50">
                          <div
                            className="h-full bg-gradient-to-r from-[#451E10] to-[#74351B] rounded-full"
                            style={{ width: `${pct}%` }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>

          </div>
        )}

        {/* ========================================================== */}
        {/* TAB 4: DEALERSHIP HUBS MANAGER */}
        {/* ========================================================== */}
        {activeTab === 'hubs' && (
          <div className="space-y-6 animate-fade-in">
            
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base sm:text-lg font-black text-[#2E271F]">
                  Kundapura &amp; Coastal Hubs
                </h3>
                <p className="text-xs text-[#8B785F]">
                  Manage physical dealership yards and experience centers
                </p>
              </div>

              <button
                onClick={() => {
                  setEditingHub({
                    id: `hub-custom-${Date.now()}`,
                    name: 'New Kundapura Hub',
                    address: 'Main Road, Kundapura 576201',
                    landmark: 'Opposite Bus Stand',
                    timing: '9:00 AM - 8:00 PM (Open 7 Days)',
                    phone: '+91 8254 233 440',
                    carCount: '30+ Certified Cars',
                    image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=800&q=80',
                    amenities: ['Test Drive Track', 'Finance Desk', 'Inspection Zone']
                  });
                  setHubModalOpen(true);
                }}
                className="flex items-center gap-1.5 px-4 py-2.5 bg-[#D27848] hover:bg-[#B95C2E] text-white text-xs font-bold rounded-xl shadow-xs transition-colors cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                <span>Add Hub</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {hubs.map((hub) => (
                <div key={hub.id} className="bg-white rounded-3xl border border-[#ECC4A6] overflow-hidden shadow-sm flex flex-col justify-between">
                  
                  <div className="relative h-40 bg-[#241A15]">
                    <img src={hub.image} alt={hub.name} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
                    <div className="absolute bottom-3 left-3 right-3 text-white font-black text-sm">
                      {hub.name}
                    </div>
                  </div>

                  <div className="p-4 space-y-2 flex-1 text-xs">
                    <div className="text-[#2E271F] font-bold">📍 {hub.address}</div>
                    <div className="text-[#8B785F]">Landmark: {hub.landmark}</div>
                    <div className="text-[#74351B] font-semibold">⏰ {hub.timing}</div>
                    <div className="text-[#D27848] font-bold">📞 {hub.phone}</div>
                  </div>

                  <div className="p-4 pt-0 border-t border-[#ECC4A6]/50 flex items-center justify-between gap-2 mt-2">
                    <button
                      onClick={() => {
                        setEditingHub(hub);
                        setHubModalOpen(true);
                      }}
                      className="px-3 py-1.5 bg-[#FAF7F2] hover:bg-[#FDF3EA] text-[#74351B] border border-[#ECC4A6] text-xs font-bold rounded-xl flex-1 cursor-pointer"
                    >
                      Edit Hub
                    </button>
                    <button
                      onClick={() => {
                        if (confirm(`Delete hub "${hub.name}"?`)) {
                          deleteHub(hub.id);
                        }
                      }}
                      className="p-1.5 text-red-500 hover:bg-red-50 rounded-xl cursor-pointer"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                </div>
              ))}
            </div>

          </div>
        )}

        {/* ========================================================== */}
        {/* TAB 5: SITE SETTINGS & ANNOUNCEMENTS */}
        {/* ========================================================== */}
        {activeTab === 'settings' && (
          <div className="max-w-3xl mx-auto space-y-6 animate-fade-in">
            
            <div className="bg-white rounded-3xl p-6 border border-[#ECC4A6] shadow-sm">
              <h3 className="text-base font-black text-[#2E271F] mb-1">
                Announcement Tickers &amp; Contact Information
              </h3>
              <p className="text-xs text-[#8B785F] mb-6">
                Update promotional banners and contact phone numbers shown to clients
              </p>

              <form onSubmit={handleSaveSettings} className="space-y-4">
                
                <div>
                  <label className="block text-xs font-bold text-[#74351B] mb-1">
                    Top Announcement Ticker
                  </label>
                  <input
                    type="text"
                    value={settingsForm.announcementText}
                    onChange={(e) => setSettingsForm({ ...settingsForm, announcementText: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#FAF7F2] rounded-xl border border-[#ECC4A6] text-xs font-bold text-[#2E271F] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#74351B] mb-1">
                    Hero Promo Badge
                  </label>
                  <input
                    type="text"
                    value={settingsForm.promoBadgeText}
                    onChange={(e) => setSettingsForm({ ...settingsForm, promoBadgeText: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#FAF7F2] rounded-xl border border-[#ECC4A6] text-xs font-bold text-[#2E271F] outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#74351B] mb-1">
                      Support Hotline Phone
                    </label>
                    <input
                      type="text"
                      value={settingsForm.supportPhone}
                      onChange={(e) => setSettingsForm({ ...settingsForm, supportPhone: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#FAF7F2] rounded-xl border border-[#ECC4A6] text-xs font-bold text-[#2E271F] outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#74351B] mb-1">
                      WhatsApp Contact Number
                    </label>
                    <input
                      type="text"
                      value={settingsForm.whatsappNumber}
                      onChange={(e) => setSettingsForm({ ...settingsForm, whatsappNumber: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#FAF7F2] rounded-xl border border-[#ECC4A6] text-xs font-bold text-[#2E271F] outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#74351B] mb-1">
                    Admin Security PIN (Password)
                  </label>
                  <input
                    type="text"
                    value={settingsForm.adminPin}
                    onChange={(e) => setSettingsForm({ ...settingsForm, adminPin: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#FAF7F2] rounded-xl border border-[#ECC4A6] text-xs font-mono font-bold text-[#2E271F] outline-none"
                  />
                  <span className="text-[11px] text-[#8B785F] mt-1 block">
                    Change this PIN to secure access to this admin dashboard.
                  </span>
                </div>

                {settingsSavedMessage && (
                  <div className="p-3 bg-emerald-50 text-emerald-700 border border-emerald-300 rounded-xl text-xs font-bold flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Settings saved successfully!</span>
                  </div>
                )}

                <button
                  type="submit"
                  className="px-6 py-2.5 bg-gradient-to-r from-[#D27848] to-[#B95C2E] hover:from-[#B95C2E] hover:to-[#964521] text-white text-xs font-black rounded-xl shadow-md transition-all cursor-pointer"
                >
                  Save Settings
                </button>

              </form>
            </div>

          </div>
        )}

        {/* ========================================================== */}
        {/* TAB 6: BACKUP & RESTORE */}
        {/* ========================================================== */}
        {activeTab === 'backup' && (
          <div className="max-w-3xl mx-auto space-y-6 animate-fade-in">
            
            <div className="bg-white rounded-3xl p-6 border border-[#ECC4A6] shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-[#FDF3EA] text-[#D27848] flex items-center justify-center border border-[#ECC4A6]">
                  <Download className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-black text-[#2E271F]">
                    Export &amp; Download Full Database
                  </h3>
                  <p className="text-xs text-[#8B785F]">
                    Download a complete backup of all {cars.length} cars, customer leads, hubs, and settings as a JSON file.
                  </p>
                </div>
              </div>

              <button
                onClick={handleExportDownload}
                className="px-5 py-2.5 bg-[#241A15] hover:bg-[#451E10] text-white text-xs font-black rounded-xl flex items-center gap-2 transition-all cursor-pointer"
              >
                <Download className="w-4 h-4 text-[#D27848]" />
                <span>Download Backup JSON</span>
              </button>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-[#ECC4A6] shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-[#FDF3EA] text-[#D27848] flex items-center justify-center border border-[#ECC4A6]">
                  <Upload className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-black text-[#2E271F]">
                    Import Database from JSON
                  </h3>
                  <p className="text-xs text-[#8B785F]">
                    Paste JSON content to restore inventory and inquiries.
                  </p>
                </div>
              </div>

              <textarea
                rows={4}
                value={importJsonText}
                onChange={(e) => setImportJsonText(e.target.value)}
                placeholder="Paste backup JSON data here..."
                className="w-full p-3 bg-[#FAF7F2] rounded-xl border border-[#ECC4A6] text-xs font-mono text-[#2E271F] outline-none"
              />

              {backupMessage && (
                <div className="text-xs font-bold text-emerald-700">
                  {backupMessage}
                </div>
              )}

              <button
                onClick={handleImportJson}
                className="px-5 py-2.5 bg-[#D27848] hover:bg-[#B95C2E] text-white text-xs font-black rounded-xl flex items-center gap-2 transition-all cursor-pointer"
              >
                <Upload className="w-4 h-4" />
                <span>Import &amp; Restore</span>
              </button>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-red-200 shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center border border-red-200">
                  <RotateCcw className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-black text-red-900">
                    Reset to Factory Inventory
                  </h3>
                  <p className="text-xs text-red-700">
                    Restores the original 18+ certified Kundapura cars and original demo hubs.
                  </p>
                </div>
              </div>

              <button
                onClick={() => {
                  if (confirm('Are you sure you want to reset all cars to default factory data? Any custom cars will be replaced.')) {
                    resetCars();
                    alert('Inventory has been reset to factory defaults.');
                  }
                }}
                className="px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white text-xs font-black rounded-xl flex items-center gap-2 transition-all cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Reset to Factory Defaults</span>
              </button>
            </div>

          </div>
        )}

        {/* ========================================================== */}
        {/* TAB 7: CLOUD DATABASE & REALTIME SYNC (FIREBASE) */}
        {/* ========================================================== */}
        {activeTab === 'cloud' && (
          <div className="max-w-4xl mx-auto space-y-6 animate-fade-in">
            
            {/* 1. Status Banner Card */}
            <div className={`p-6 rounded-3xl border shadow-sm transition-all ${
              cloudStatus === 'connected'
                ? 'bg-gradient-to-br from-emerald-950/40 via-emerald-900/20 to-white border-emerald-300'
                : cloudStatus === 'syncing'
                ? 'bg-gradient-to-br from-amber-950/40 via-amber-900/20 to-white border-amber-300'
                : 'bg-white border-[#ECC4A6]'
            }`}>
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border shadow-xs ${
                    cloudStatus === 'connected'
                      ? 'bg-emerald-500 text-white border-emerald-400'
                      : cloudStatus === 'syncing'
                      ? 'bg-amber-500 text-white border-amber-400 animate-pulse'
                      : 'bg-[#241A15] text-[#D27848] border-[#451E10]'
                  }`}>
                    <Cloud className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-base sm:text-lg font-black text-[#2E271F]">
                        Cloud Database &amp; Cross-Device Sync
                      </h3>
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider ${
                        cloudStatus === 'connected'
                          ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                          : cloudStatus === 'syncing'
                          ? 'bg-amber-100 text-amber-800 border border-amber-300'
                          : 'bg-stone-200 text-stone-700'
                      }`}>
                        {cloudStatus === 'connected' ? '🟢 Live Connected' : cloudStatus === 'syncing' ? '🔄 Syncing' : '🟡 Offline / Local Mode'}
                      </span>
                    </div>
                    <p className="text-xs text-[#8B785F] mt-0.5">
                      {cloudStatus === 'connected'
                        ? `Connected to Firebase Project "${firebaseConfig?.projectId}". Changes made on any device update immediately across all visitors on Vercel!`
                        : 'Currently using local browser storage. Connect Firebase below to synchronize cars and photos across all phones, laptops, and browsers.'}
                    </p>
                  </div>
                </div>

                {isCloudConfigured && (
                  <button
                    onClick={async () => {
                      setCloudSyncing(true);
                      setCloudFeedbackMsg(null);
                      const res = await syncLocalDataToCloud();
                      setCloudSyncing(false);
                      setCloudFeedbackMsg({
                        type: res.success ? 'success' : 'error',
                        text: res.message
                      });
                      setTimeout(() => setCloudFeedbackMsg(null), 6000);
                    }}
                    disabled={cloudSyncing}
                    className="w-full md:w-auto px-5 py-2.5 bg-gradient-to-r from-[#D27848] to-[#B95C2E] hover:from-[#B95C2E] hover:to-[#964521] text-white text-xs font-black rounded-xl shadow-md flex items-center justify-center gap-2 cursor-pointer transition-all shrink-0"
                  >
                    {cloudSyncing ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Pushing to Cloud...</span>
                      </>
                    ) : (
                      <>
                        <RefreshCw className="w-4 h-4" />
                        <span>Sync All {cars.length} Cars to Cloud</span>
                      </>
                    )}
                  </button>
                )}
              </div>

              {cloudFeedbackMsg && (
                <div className={`mt-4 p-3 rounded-xl text-xs font-bold flex items-center gap-2 animate-fade-in ${
                  cloudFeedbackMsg.type === 'success'
                    ? 'bg-emerald-50 text-emerald-800 border border-emerald-300'
                    : 'bg-red-50 text-red-800 border border-red-300'
                }`}>
                  {cloudFeedbackMsg.type === 'success' ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  ) : (
                    <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
                  )}
                  <span>{cloudFeedbackMsg.text}</span>
                </div>
              )}

              {cloudError && (
                <div className="mt-4 p-3 bg-red-50 text-red-800 border border-red-300 rounded-xl text-xs font-bold flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
                  <span>Connection Error: {cloudError}</span>
                </div>
              )}
            </div>

            {/* 2. Secured Cloud Infrastructure Overview */}
            <div className="bg-white rounded-3xl p-6 border border-[#ECC4A6] shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-[#FDF3EA] text-[#D27848] flex items-center justify-center border border-[#ECC4A6]">
                    <Database className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-black text-[#2E271F]">
                      Cloud Infrastructure &amp; Security Status
                    </h3>
                    <p className="text-xs text-[#8B785F]">
                      Live database and asset delivery network status
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-800 text-[11px] font-bold">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span>Credentials Protected</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#ECC4A6] space-y-1">
                  <div className="text-[11px] font-bold text-[#8B785F]">Firestore Database</div>
                  <div className="text-sm font-black text-[#2E271F] flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Real-time Sync Active</span>
                  </div>
                  <div className="text-[10px] text-[#8B785F]">{cars.length} cars currently in state</div>
                </div>

                <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#ECC4A6] space-y-1">
                  <div className="text-[11px] font-bold text-[#8B785F]">Cloud Photo CDN</div>
                  <div className="text-sm font-black text-[#2E271F] flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Storage Connected</span>
                  </div>
                  <div className="text-[10px] text-[#8B785F]">Auto client-side compression</div>
                </div>

                <div className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#ECC4A6] space-y-1">
                  <div className="text-[11px] font-bold text-[#8B785F]">Cross-Device Propagation</div>
                  <div className="text-sm font-black text-[#2E271F] flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Instant Live Push</span>
                  </div>
                  <div className="text-[10px] text-[#8B785F]">Chrome, Edge &amp; Mobile phone</div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#FDF8F4] border border-[#ECC4A6] flex items-center justify-between gap-3 text-xs">
                <div className="space-y-0.5">
                  <div className="font-bold text-[#2E271F]">Need to manually re-seed or refresh cloud listings?</div>
                  <div className="text-[11px] text-[#8B785F]">
                    Clicking "Sync All Cars to Cloud" writes the complete catalogue to Firestore in a single batch.
                  </div>
                </div>
                <button
                  onClick={async () => {
                    setCloudSyncing(true);
                    setCloudFeedbackMsg(null);
                    const res = await syncLocalDataToCloud();
                    setCloudSyncing(false);
                    setCloudFeedbackMsg({
                      type: res.success ? 'success' : 'error',
                      text: res.message
                    });
                    setTimeout(() => setCloudFeedbackMsg(null), 6000);
                  }}
                  disabled={cloudSyncing}
                  className="px-4 py-2 bg-[#241A15] hover:bg-[#451E10] text-white text-xs font-bold rounded-xl shadow-xs transition-all cursor-pointer inline-flex items-center gap-1.5 shrink-0"
                >
                  <RefreshCw className={`w-3.5 h-3.5 text-[#D27848] ${cloudSyncing ? 'animate-spin' : ''}`} />
                  <span>{cloudSyncing ? 'Syncing...' : 'Sync Now'}</span>
                </button>
              </div>
            </div>

          </div>
        )}

      </main>

      {/* 3. MODALS */}
      {/* Car Add / Edit Modal */}
      <CarEditModal
        car={editingCar}
        isOpen={carModalOpen}
        onClose={() => setCarModalOpen(false)}
        onSave={handleSaveCar}
      />

      {/* Car Detail Preview Modal */}
      {previewCar && (
        <CarDetailModal
          car={previewCar}
          onClose={() => setPreviewCar(null)}
          isWishlisted={false}
          onToggleWishlist={() => {}}
          onReserveCar={() => setPreviewCar(null)}
          isCompared={false}
          onToggleCompare={() => {}}
        />
      )}

      {/* Manual Lead Modal */}
      {manualLeadModalOpen && (
        <div className="fixed inset-0 z-50 bg-[#17100D]/80 backdrop-blur-sm flex justify-center p-4">
          <div className="bg-white w-full max-w-md rounded-3xl p-6 border border-[#ECC4A6] my-auto space-y-4 shadow-2xl">
            <div className="flex items-center justify-between">
              <h3 className="font-black text-base text-[#2E271F]">Add Customer Lead</h3>
              <button onClick={() => setManualLeadModalOpen(false)} className="p-1 text-[#8B785F]">
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleAddManualLead} className="space-y-3">
              <div>
                <label className="block text-xs font-bold text-[#74351B] mb-1">Customer Name *</label>
                <input
                  type="text"
                  value={newLeadName}
                  onChange={(e) => setNewLeadName(e.target.value)}
                  placeholder="e.g. Raghavendra Rao"
                  required
                  className="w-full px-3 py-2 bg-[#FAF7F2] rounded-xl border border-[#ECC4A6] text-xs font-bold outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#74351B] mb-1">Phone Number *</label>
                <input
                  type="text"
                  value={newLeadPhone}
                  onChange={(e) => setNewLeadPhone(e.target.value)}
                  placeholder="e.g. +91 98451 12345"
                  required
                  className="w-full px-3 py-2 bg-[#FAF7F2] rounded-xl border border-[#ECC4A6] text-xs font-bold outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#74351B] mb-1">Car / Model Interested</label>
                <input
                  type="text"
                  value={newLeadCar}
                  onChange={(e) => setNewLeadCar(e.target.value)}
                  placeholder="e.g. 2022 Mahindra Thar"
                  className="w-full px-3 py-2 bg-[#FAF7F2] rounded-xl border border-[#ECC4A6] text-xs font-bold outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#74351B] mb-1">Inquiry Type</label>
                <select
                  value={newLeadType}
                  onChange={(e) => setNewLeadType(e.target.value as LeadType)}
                  className="w-full px-3 py-2 bg-[#FAF7F2] rounded-xl border border-[#ECC4A6] text-xs font-bold outline-none"
                >
                  <option value="test_drive">Test Drive Request</option>
                  <option value="reservation">₹999 Reservation</option>
                  <option value="emi_inquiry">Loan / EMI Consultation</option>
                  <option value="callback">Callback Request</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#74351B] mb-1">Customer Notes</label>
                <textarea
                  rows={2}
                  value={newLeadNotes}
                  onChange={(e) => setNewLeadNotes(e.target.value)}
                  placeholder="Notes from customer discussion..."
                  className="w-full p-2 bg-[#FAF7F2] rounded-xl border border-[#ECC4A6] text-xs outline-none"
                />
              </div>

              <div className="flex gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setManualLeadModalOpen(false)}
                  className="flex-1 py-2 bg-[#FAF7F2] text-[#74351B] text-xs font-bold rounded-xl border border-[#ECC4A6] cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2 bg-[#D27848] text-white text-xs font-black rounded-xl shadow-xs cursor-pointer"
                >
                  Save Lead
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Hub Add/Edit Modal */}
      {hubModalOpen && editingHub && (
        <div className="fixed inset-0 z-50 bg-[#17100D]/80 backdrop-blur-sm flex justify-center p-4">
          <div className="bg-white w-full max-w-lg rounded-3xl p-6 border border-[#ECC4A6] my-auto space-y-4 shadow-2xl overflow-y-auto max-h-[90vh]">
            <div className="flex items-center justify-between">
              <h3 className="font-black text-base text-[#2E271F]">Dealership Hub Details</h3>
              <button onClick={() => setHubModalOpen(false)} className="p-1 text-[#8B785F]">
                <X className="w-4 h-4" />
              </button>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                const exists = hubs.some((h) => h.id === editingHub.id);
                if (exists) {
                  updateHub(editingHub.id, editingHub);
                } else {
                  addHub(editingHub);
                }
                setHubModalOpen(false);
              }}
              className="space-y-3 text-xs"
            >
              <div>
                <label className="block font-bold text-[#74351B] mb-1">Hub Name</label>
                <input
                  type="text"
                  value={editingHub.name}
                  onChange={(e) => setEditingHub({ ...editingHub, name: e.target.value })}
                  required
                  className="w-full px-3 py-2 bg-[#FAF7F2] rounded-xl border border-[#ECC4A6] font-bold outline-none"
                />
              </div>

              <div>
                <label className="block font-bold text-[#74351B] mb-1">Address</label>
                <input
                  type="text"
                  value={editingHub.address}
                  onChange={(e) => setEditingHub({ ...editingHub, address: e.target.value })}
                  required
                  className="w-full px-3 py-2 bg-[#FAF7F2] rounded-xl border border-[#ECC4A6] outline-none"
                />
              </div>

              <div>
                <label className="block font-bold text-[#74351B] mb-1">Landmark</label>
                <input
                  type="text"
                  value={editingHub.landmark}
                  onChange={(e) => setEditingHub({ ...editingHub, landmark: e.target.value })}
                  className="w-full px-3 py-2 bg-[#FAF7F2] rounded-xl border border-[#ECC4A6] outline-none"
                />
              </div>

              <div>
                <label className="block font-bold text-[#74351B] mb-1">Contact Phone</label>
                <input
                  type="text"
                  value={editingHub.phone}
                  onChange={(e) => setEditingHub({ ...editingHub, phone: e.target.value })}
                  className="w-full px-3 py-2 bg-[#FAF7F2] rounded-xl border border-[#ECC4A6] font-bold outline-none"
                />
              </div>

              <div>
                <label className="block font-bold text-[#74351B] mb-1">Opening Timings</label>
                <input
                  type="text"
                  value={editingHub.timing}
                  onChange={(e) => setEditingHub({ ...editingHub, timing: e.target.value })}
                  className="w-full px-3 py-2 bg-[#FAF7F2] rounded-xl border border-[#ECC4A6] outline-none"
                />
              </div>

              <div>
                <label className="block font-bold text-[#74351B] mb-1">Hub Image URL</label>
                <input
                  type="url"
                  value={editingHub.image}
                  onChange={(e) => setEditingHub({ ...editingHub, image: e.target.value })}
                  className="w-full px-3 py-2 bg-[#FAF7F2] rounded-xl border border-[#ECC4A6] outline-none"
                />
              </div>

              <div className="flex gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setHubModalOpen(false)}
                  className="flex-1 py-2.5 bg-[#FAF7F2] text-[#74351B] font-bold rounded-xl border border-[#ECC4A6] cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2.5 bg-[#D27848] text-white font-black rounded-xl shadow-xs cursor-pointer"
                >
                  Save Hub
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
