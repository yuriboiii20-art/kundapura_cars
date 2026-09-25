import React, { useState, useEffect, useRef } from 'react';
import { 
  X, 
  Save, 
  Plus, 
  Trash2, 
  ShieldCheck, 
  Car as CarIcon, 
  CheckCircle2,
  Upload,
  Link as LinkIcon,
  Image as ImageIcon,
  Loader2,
  Cloud
} from 'lucide-react';
import { Car, BodyType, FuelType, TransmissionType, OwnerType, CarSpecs, InspectionCategory } from '../types/car';
import { formatPrice } from '../utils/formatters';
import { compressImageFile } from '../utils/imageCompressor';
import { uploadCarImage } from '../services/firebaseService';
import { isFirebaseConfigured } from '../lib/firebase';

interface CarEditModalProps {
  car: Car | null; // null if creating a new car
  isOpen: boolean;
  onClose: () => void;
  onSave: (carData: Omit<Car, 'id'> & { id?: string }) => void;
}

const BODY_TYPES: BodyType[] = ['SUV', 'Sedan', 'Hatchback', 'MUV', 'Luxury', 'EV'];
const FUEL_TYPES: FuelType[] = ['Petrol', 'Diesel', 'Electric', 'CNG', 'Hybrid'];
const TRANSMISSIONS: TransmissionType[] = ['Manual', 'Automatic'];
const OWNERS: OwnerType[] = ['1st Owner', '2nd Owner', '3rd Owner'];

const DEFAULT_SPECS: CarSpecs = {
  engineCapacity: '1497 cc',
  maxPower: '113.4 bhp @ 4000 rpm',
  mileageARAI: '20.8 kmpl',
  seatingCapacity: 5,
  airbags: 6,
  bootSpace: '433 Litres',
  sunroof: 'Panoramic Electric Sunroof',
  insuranceValidity: 'Comprehensive valid for 11 months',
  groundClearance: '190 mm',
  fuelTank: '50 Litres'
};

const DEFAULT_INSPECTION: Car['inspectionSummary'] = {
  engineTransmission: {
    title: 'Engine, Gearbox & Transmission Unit',
    score: '10/10',
    checksTotal: 48,
    checksPassed: 48,
    status: 'passed',
    highlights: ['Engine compression balanced', 'Smooth clutch engagement', 'Zero abnormal vibration']
  },
  steeringSuspension: {
    title: 'Steering, Suspension & Brakes',
    score: '9.8/10',
    checksTotal: 38,
    checksPassed: 38,
    status: 'passed',
    highlights: ['Brake pads have 85%+ life remaining', 'No play in steering rack', 'Struts in prime condition']
  },
  bodyPaint: {
    title: 'Body, Chassis & Paint Thickness',
    score: '9.6/10',
    checksTotal: 45,
    checksPassed: 44,
    status: 'passed',
    highlights: ['OEM factory paint thickness verified', 'Zero structural damage or flood signs', 'Original glass on all windows']
  },
  interiorElectricals: {
    title: 'Interior, Dashboard & Electricals',
    score: '9.9/10',
    checksTotal: 42,
    checksPassed: 42,
    status: 'passed',
    highlights: ['Touchscreen & digital cluster 100% operational', 'Airbags diagnostic scanned OK', 'Clean non-smoker interior']
  },
  acTyres: {
    title: 'Air Conditioning & Tyres',
    score: '9.7/10',
    checksTotal: 27,
    checksPassed: 27,
    status: 'passed',
    highlights: ['Cabin cooled to 18°C in under 3 minutes', 'Tyre tread depth > 5.5mm (80%+ life)', 'Even tread wear across all 4 tyres']
  }
};

export const CarEditModal: React.FC<CarEditModalProps> = ({ car, isOpen, onClose, onSave }) => {
  const [activeTab, setActiveTab] = useState<'basics' | 'pricing' | 'specs' | 'inspection' | 'media'>('basics');
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Form states
  const [title, setTitle] = useState('');
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [variant, setVariant] = useState('');
  const [year, setYear] = useState<number>(2022);
  const [price, setPrice] = useState<number>(1000000);
  const [originalPrice, setOriginalPrice] = useState<number>(1150000);
  const [emiStarting, setEmiStarting] = useState<number>(18500);
  const [kilometers, setKilometers] = useState<number>(35000);
  const [fuelType, setFuelType] = useState<FuelType>('Petrol');
  const [transmission, setTransmission] = useState<TransmissionType>('Manual');
  const [bodyType, setBodyType] = useState<BodyType>('SUV');
  const [owner, setOwner] = useState<OwnerType>('1st Owner');
  const [rto, setRto] = useState('KA-20 (Kundapura RTO)');
  const [hubLocation, setHubLocation] = useState('Kundapura NH 66 Central Hub');
  const [color, setColor] = useState('Polar White');
  const [isAssured, setIsAssured] = useState(true);
  const [featured, setFeatured] = useState(false);
  const [trending, setTrending] = useState(false);
  
  // Inspection score (can be any value from 0 to 10)
  const [inspectionScore, setInspectionScore] = useState<number | string>(9.6);
  
  // Detailed 5 inspection modules
  const [inspectionSummary, setInspectionSummary] = useState<Car['inspectionSummary']>(DEFAULT_INSPECTION);

  // Arrays & Objects
  const [images, setImages] = useState<string[]>([]);
  const [newImageUrl, setNewImageUrl] = useState('');
  const [tagsInput, setTagsInput] = useState('');
  const [featuresInput, setFeaturesInput] = useState('');
  const [specs, setSpecs] = useState<CarSpecs>(DEFAULT_SPECS);

  // Upload Progress States
  const [isUploadingPhotos, setIsUploadingPhotos] = useState(false);
  const [uploadProgressMsg, setUploadProgressMsg] = useState('');

  // Populate form on car change
  useEffect(() => {
    if (car) {
      setTitle(car.title);
      setBrand(car.brand);
      setModel(car.model);
      setVariant(car.variant);
      setYear(car.year);
      setPrice(car.price);
      setOriginalPrice(car.originalPrice || Math.round(car.price * 1.08));
      setEmiStarting(car.emiStarting || Math.round(car.price / 55));
      setKilometers(car.kilometers);
      setFuelType(car.fuelType);
      setTransmission(car.transmission);
      setBodyType(car.bodyType);
      setOwner(car.owner);
      setRto(car.rto);
      setHubLocation(car.hubLocation);
      setColor(car.color);
      setIsAssured(car.isAssured);
      setFeatured(!!car.featured);
      setTrending(!!car.trending);
      setInspectionScore(car.inspectionScore !== undefined ? car.inspectionScore : 9.5);
      setInspectionSummary(car.inspectionSummary || DEFAULT_INSPECTION);
      setImages(car.images || []);
      setTagsInput(car.tags ? car.tags.join(', ') : '');
      setFeaturesInput(car.features ? car.features.join('\n') : '');
      setSpecs(car.specs || DEFAULT_SPECS);
    } else {
      // New Car defaults
      setTitle('2023 Hyundai Creta SX (O) 1.5');
      setBrand('Hyundai');
      setModel('Creta');
      setVariant('SX (O) 1.5 Diesel Automatic');
      setYear(2023);
      setPrice(1550000);
      setOriginalPrice(1690000);
      setEmiStarting(28500);
      setKilometers(24500);
      setFuelType('Diesel');
      setTransmission('Automatic');
      setBodyType('SUV');
      setOwner('1st Owner');
      setRto('KA-20 (Kundapura RTO)');
      setHubLocation('Kundapura NH 66 Central Hub');
      setColor('Titan Grey');
      setIsAssured(true);
      setFeatured(true);
      setTrending(false);
      setInspectionScore(9.7);
      setInspectionSummary(DEFAULT_INSPECTION);
      setImages([
        'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80'
      ]);
      setTagsInput('Top End Variant, Single Owner, Sunroof, KA-20 RTO, Complete Service History');
      setFeaturesInput('Panoramic Sunroof\n10.25-inch HD Touchscreen with Apple CarPlay\nVentilated Front Leather Seats\nBose 8-Speaker Premium Sound System\nElectronic Parking Brake with Auto Hold\n6 Airbags + ESC + Hill Assist\nRear AC Vents with Fast USB Chargers');
      setSpecs(DEFAULT_SPECS);
    }
  }, [car, isOpen]);

  if (!isOpen) return null;

  // Add Image URL
  const handleAddImageUrl = () => {
    let url = newImageUrl.trim();
    if (!url) return;
    if (!url.startsWith('http://') && !url.startsWith('https://') && !url.startsWith('data:') && !url.startsWith('/')) {
      url = `https://${url}`;
    }
    setImages((prev) => [...prev, url]);
    setNewImageUrl('');
  };

  // Upload Local Files (Compresses & adds photos instantly)
  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    setIsUploadingPhotos(true);
    const fileList = Array.from(files);

    try {
      for (let i = 0; i < fileList.length; i++) {
        const file = fileList[i];
        setUploadProgressMsg(`Processing photo ${i + 1} of ${fileList.length}...`);

        try {
          // Compress photo to web-optimized dimensions & size (e.g. 10MB -> ~50KB)
          const compressed = await compressImageFile(file, 1400, 1050, 0.78);
          let finalUrl = compressed.dataUrl;

          if (isFirebaseConfigured()) {
            try {
              setUploadProgressMsg(`Syncing photo ${i + 1}/${fileList.length}...`);
              const cloudUrl = await uploadCarImage(compressed.blob, car?.id || `kc_${Date.now()}`, file.name);
              if (cloudUrl) {
                finalUrl = cloudUrl;
              }
            } catch (cloudErr) {
              console.warn('Firebase Storage bypassed, using optimized direct image:', cloudErr);
            }
          }

          // Instantly add to photos list so user sees it right away
          setImages((prev) => [...prev, finalUrl]);
        } catch (err) {
          console.error('Failed to process photo:', file.name, err);
        }
      }
    } catch (globalErr) {
      console.error('Error during photo upload:', globalErr);
    } finally {
      setIsUploadingPhotos(false);
      setUploadProgressMsg('');
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  const handleRemoveImage = (index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  // Helper to update specific inspection module
  const handleUpdateInspectionCategory = (
    categoryKey: keyof Car['inspectionSummary'],
    field: keyof InspectionCategory,
    value: any
  ) => {
    setInspectionSummary((prev) => ({
      ...prev,
      [categoryKey]: {
        ...prev[categoryKey],
        [field]: value,
      },
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !brand.trim() || !model.trim()) {
      alert('Please fill in Title, Brand, and Model.');
      return;
    }

    const tags = tagsInput
      .split(',')
      .map((t) => t.trim())
      .filter(Boolean);

    const features = featuresInput
      .split('\n')
      .map((f) => f.trim())
      .filter(Boolean);

    const carData: Omit<Car, 'id'> & { id?: string } = {
      ...(car ? { id: car.id } : {}),
      title: title.trim(),
      brand: brand.trim(),
      model: model.trim(),
      variant: variant.trim(),
      year: Number(year),
      price: Number(price),
      originalPrice: Number(originalPrice) || Number(price),
      emiStarting: Number(emiStarting) || Math.round(Number(price) / 55),
      kilometers: Number(kilometers),
      fuelType,
      transmission,
      bodyType,
      owner,
      rto: rto.trim(),
      hubLocation: hubLocation.trim(),
      images: images, // Do NOT replace with fallback if user deleted them
      color: color.trim(),
      isAssured,
      featured,
      trending,
      tags: tags.length > 0 ? tags : ['Verified', 'KA-20 RTO'],
      features: features.length > 0 ? features : ['1-Year Comprehensive Warranty', '200-Point Inspected'],
      specs,
      inspectionScore: Number(inspectionScore) || 0,
      inspectionSummary,
    };

    onSave(carData);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#17100D]/80 backdrop-blur-sm flex justify-center p-2 sm:p-4 md:p-6 animate-fade-in font-sans">
      
      <div className="bg-white w-full max-w-4xl rounded-3xl shadow-2xl border border-[#ECC4A6] overflow-hidden my-auto flex flex-col max-h-[92vh]">
        
        {/* Modal Header */}
        <div className="p-4 sm:p-5 bg-[#FAF7F2] border-b border-[#ECC4A6] flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-2xl bg-[#241A15] text-[#D27848] flex items-center justify-center font-black border border-[#451E10]">
              <CarIcon className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-black text-[#2E271F] tracking-tight">
                {car ? `Edit Car: ${car.title}` : 'Add New Certified Car to Inventory'}
              </h3>
              <p className="text-[11px] text-[#8B785F] font-semibold">
                Kundapura Cars Inventory Management Portal
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-[#8B785F] hover:text-[#2E271F] rounded-full bg-white border border-[#ECC4A6] hover:bg-[#FDF8F4] transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="bg-[#FDF8F4] px-4 pt-2 border-b border-[#ECC4A6] flex gap-1 overflow-x-auto no-scrollbar shrink-0">
          {[
            { id: 'basics', label: '1. Basic Info' },
            { id: 'pricing', label: '2. Pricing & KM' },
            { id: 'specs', label: '3. Specs & Features' },
            { id: 'inspection', label: '4. 200-Pt Inspection' },
            { id: 'media', label: '5. Photos & Badges' },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-3.5 py-2.5 text-xs font-extrabold rounded-t-xl transition-all border-t border-x whitespace-nowrap cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-white text-[#D27848] border-[#ECC4A6] border-b-transparent shadow-xs'
                  : 'text-[#8B785F] hover:text-[#2E271F] border-transparent'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-6">
          
          {/* TAB 1: BASIC INFO */}
          {activeTab === 'basics' && (
            <div className="space-y-4 animate-fade-in">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-[#74351B] mb-1">
                    Listing Title *
                  </label>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="e.g. 2022 Mahindra Thar LX 4x4 Hard Top Manual"
                    required
                    className="w-full px-3.5 py-2.5 bg-[#FAF7F2] rounded-xl border border-[#ECC4A6] text-xs font-bold text-[#2E271F] focus:bg-white focus:border-[#D27848] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#74351B] mb-1">
                    Brand / Manufacturer *
                  </label>
                  <input
                    type="text"
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                    placeholder="e.g. Mahindra, Hyundai, Tata, Maruti"
                    required
                    className="w-full px-3.5 py-2.5 bg-[#FAF7F2] rounded-xl border border-[#ECC4A6] text-xs font-bold text-[#2E271F] focus:bg-white focus:border-[#D27848] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#74351B] mb-1">
                    Model *
                  </label>
                  <input
                    type="text"
                    value={model}
                    onChange={(e) => setModel(e.target.value)}
                    placeholder="e.g. Thar, Creta, Nexon, Swift"
                    required
                    className="w-full px-3.5 py-2.5 bg-[#FAF7F2] rounded-xl border border-[#ECC4A6] text-xs font-bold text-[#2E271F] focus:bg-white focus:border-[#D27848] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#74351B] mb-1">
                    Variant *
                  </label>
                  <input
                    type="text"
                    value={variant}
                    onChange={(e) => setVariant(e.target.value)}
                    placeholder="e.g. LX 2.2 mHawk 4WD Diesel"
                    required
                    className="w-full px-3.5 py-2.5 bg-[#FAF7F2] rounded-xl border border-[#ECC4A6] text-xs font-bold text-[#2E271F] focus:bg-white focus:border-[#D27848] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#74351B] mb-1">
                    Manufacturing Year *
                  </label>
                  <input
                    type="number"
                    value={year}
                    onChange={(e) => setYear(Number(e.target.value))}
                    min={2000}
                    max={2030}
                    required
                    className="w-full px-3.5 py-2.5 bg-[#FAF7F2] rounded-xl border border-[#ECC4A6] text-xs font-bold text-[#2E271F] focus:bg-white focus:border-[#D27848] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#74351B] mb-1">
                    Exterior Color
                  </label>
                  <input
                    type="text"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                    placeholder="e.g. Polar White, Red Rage, Stealth Black"
                    className="w-full px-3.5 py-2.5 bg-[#FAF7F2] rounded-xl border border-[#ECC4A6] text-xs font-bold text-[#2E271F] focus:bg-white focus:border-[#D27848] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#74351B] mb-1">
                    RTO Registration *
                  </label>
                  <input
                    type="text"
                    value={rto}
                    onChange={(e) => setRto(e.target.value)}
                    placeholder="e.g. KA-20 (Kundapura RTO)"
                    required
                    className="w-full px-3.5 py-2.5 bg-[#FAF7F2] rounded-xl border border-[#ECC4A6] text-xs font-bold text-[#2E271F] focus:bg-white focus:border-[#D27848] outline-none"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-[#74351B] mb-1">
                    Hub Yard Location *
                  </label>
                  <select
                    value={hubLocation}
                    onChange={(e) => setHubLocation(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-[#FAF7F2] rounded-xl border border-[#ECC4A6] text-xs font-bold text-[#2E271F] focus:bg-white focus:border-[#D27848] outline-none cursor-pointer"
                  >
                    <option value="Kundapura NH 66 Central Hub">Kundapura NH 66 Central Hub</option>
                    <option value="Koteshwara Highway Experience Yard">Koteshwara Highway Experience Yard</option>
                    <option value="Kundapura Beach Road Hub">Kundapura Beach Road Hub</option>
                    <option value="Udupi - Kundapura Expressway Hub">Udupi - Kundapura Expressway Hub</option>
                    <option value="Byndoor Coastal Hub">Byndoor Coastal Hub</option>
                  </select>
                </div>

              </div>
            </div>
          )}

          {/* TAB 2: PRICING & KM */}
          {activeTab === 'pricing' && (
            <div className="space-y-4 animate-fade-in">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                <div>
                  <label className="block text-xs font-bold text-[#74351B] mb-1">
                    Selling Price (₹) *
                  </label>
                  <input
                    type="number"
                    value={price}
                    onChange={(e) => {
                      const val = Number(e.target.value);
                      setPrice(val);
                      if (!emiStarting || emiStarting === Math.round(price / 55)) {
                        setEmiStarting(Math.round(val / 55));
                      }
                      if (!originalPrice || originalPrice < val) {
                        setOriginalPrice(Math.round(val * 1.08));
                      }
                    }}
                    step={1000}
                    required
                    className="w-full px-3.5 py-2.5 bg-[#FAF7F2] rounded-xl border border-[#ECC4A6] text-xs font-bold text-[#2E271F] focus:bg-white focus:border-[#D27848] outline-none"
                  />
                  <span className="text-[11px] text-[#D27848] font-bold mt-1 block">
                    Displays as: {formatPrice(price)}
                  </span>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#74351B] mb-1">
                    Original / Showroom Strike Price (₹)
                  </label>
                  <input
                    type="number"
                    value={originalPrice}
                    onChange={(e) => setOriginalPrice(Number(e.target.value))}
                    step={1000}
                    className="w-full px-3.5 py-2.5 bg-[#FAF7F2] rounded-xl border border-[#ECC4A6] text-xs font-bold text-[#2E271F] focus:bg-white focus:border-[#D27848] outline-none"
                  />
                  <span className="text-[11px] text-[#8B785F] mt-1 block">
                    Displays strike-through discount: {formatPrice(originalPrice)}
                  </span>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#74351B] mb-1">
                    Starting Monthly EMI (₹ / month) *
                  </label>
                  <input
                    type="number"
                    value={emiStarting}
                    onChange={(e) => setEmiStarting(Number(e.target.value))}
                    step={100}
                    required
                    className="w-full px-3.5 py-2.5 bg-[#FAF7F2] rounded-xl border border-[#ECC4A6] text-xs font-bold text-[#2E271F] focus:bg-white focus:border-[#D27848] outline-none"
                  />
                  <span className="text-[11px] text-[#8B785F] mt-1 block">
                    e.g. ₹{emiStarting.toLocaleString('en-IN')}/mo
                  </span>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#74351B] mb-1">
                    Kilometers Driven (KM) *
                  </label>
                  <input
                    type="number"
                    value={kilometers}
                    onChange={(e) => setKilometers(Number(e.target.value))}
                    step={500}
                    required
                    className="w-full px-3.5 py-2.5 bg-[#FAF7F2] rounded-xl border border-[#ECC4A6] text-xs font-bold text-[#2E271F] focus:bg-white focus:border-[#D27848] outline-none"
                  />
                  <span className="text-[11px] text-[#8B785F] mt-1 block">
                    e.g. {kilometers.toLocaleString('en-IN')} km
                  </span>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#74351B] mb-1">
                    Ownership History *
                  </label>
                  <select
                    value={owner}
                    onChange={(e) => setOwner(e.target.value as OwnerType)}
                    className="w-full px-3.5 py-2.5 bg-[#FAF7F2] rounded-xl border border-[#ECC4A6] text-xs font-bold text-[#2E271F] focus:bg-white focus:border-[#D27848] outline-none"
                  >
                    {OWNERS.map((o) => (
                      <option key={o} value={o}>{o}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#74351B] mb-1">
                    Body Type *
                  </label>
                  <select
                    value={bodyType}
                    onChange={(e) => setBodyType(e.target.value as BodyType)}
                    className="w-full px-3.5 py-2.5 bg-[#FAF7F2] rounded-xl border border-[#ECC4A6] text-xs font-bold text-[#2E271F] focus:bg-white focus:border-[#D27848] outline-none"
                  >
                    {BODY_TYPES.map((b) => (
                      <option key={b} value={b}>{b}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#74351B] mb-1">
                    Fuel Type *
                  </label>
                  <select
                    value={fuelType}
                    onChange={(e) => setFuelType(e.target.value as FuelType)}
                    className="w-full px-3.5 py-2.5 bg-[#FAF7F2] rounded-xl border border-[#ECC4A6] text-xs font-bold text-[#2E271F] focus:bg-white focus:border-[#D27848] outline-none"
                  >
                    {FUEL_TYPES.map((f) => (
                      <option key={f} value={f}>{f}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#74351B] mb-1">
                    Transmission *
                  </label>
                  <select
                    value={transmission}
                    onChange={(e) => setTransmission(e.target.value as TransmissionType)}
                    className="w-full px-3.5 py-2.5 bg-[#FAF7F2] rounded-xl border border-[#ECC4A6] text-xs font-bold text-[#2E271F] focus:bg-white focus:border-[#D27848] outline-none"
                  >
                    {TRANSMISSIONS.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>

              </div>
            </div>
          )}

          {/* TAB 3: SPECS & FEATURES */}
          {activeTab === 'specs' && (
            <div className="space-y-4 animate-fade-in">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                
                <div>
                  <label className="block text-[11px] font-bold text-[#74351B] mb-1">Engine Capacity</label>
                  <input
                    type="text"
                    value={specs.engineCapacity}
                    onChange={(e) => setSpecs({ ...specs, engineCapacity: e.target.value })}
                    className="w-full px-3 py-2 bg-[#FAF7F2] rounded-xl border border-[#ECC4A6] text-xs font-bold text-[#2E271F] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-[#74351B] mb-1">Max Power</label>
                  <input
                    type="text"
                    value={specs.maxPower}
                    onChange={(e) => setSpecs({ ...specs, maxPower: e.target.value })}
                    className="w-full px-3 py-2 bg-[#FAF7F2] rounded-xl border border-[#ECC4A6] text-xs font-bold text-[#2E271F] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-[#74351B] mb-1">ARAI Mileage</label>
                  <input
                    type="text"
                    value={specs.mileageARAI}
                    onChange={(e) => setSpecs({ ...specs, mileageARAI: e.target.value })}
                    className="w-full px-3 py-2 bg-[#FAF7F2] rounded-xl border border-[#ECC4A6] text-xs font-bold text-[#2E271F] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-[#74351B] mb-1">Seating Capacity</label>
                  <input
                    type="number"
                    value={specs.seatingCapacity}
                    onChange={(e) => setSpecs({ ...specs, seatingCapacity: Number(e.target.value) })}
                    className="w-full px-3 py-2 bg-[#FAF7F2] rounded-xl border border-[#ECC4A6] text-xs font-bold text-[#2E271F] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-[#74351B] mb-1">Airbags</label>
                  <input
                    type="number"
                    value={specs.airbags}
                    onChange={(e) => setSpecs({ ...specs, airbags: Number(e.target.value) })}
                    className="w-full px-3 py-2 bg-[#FAF7F2] rounded-xl border border-[#ECC4A6] text-xs font-bold text-[#2E271F] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-[#74351B] mb-1">Ground Clearance</label>
                  <input
                    type="text"
                    value={specs.groundClearance}
                    onChange={(e) => setSpecs({ ...specs, groundClearance: e.target.value })}
                    className="w-full px-3 py-2 bg-[#FAF7F2] rounded-xl border border-[#ECC4A6] text-xs font-bold text-[#2E271F] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-[#74351B] mb-1">Boot Space</label>
                  <input
                    type="text"
                    value={specs.bootSpace}
                    onChange={(e) => setSpecs({ ...specs, bootSpace: e.target.value })}
                    className="w-full px-3 py-2 bg-[#FAF7F2] rounded-xl border border-[#ECC4A6] text-xs font-bold text-[#2E271F] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-[#74351B] mb-1">Sunroof Spec</label>
                  <input
                    type="text"
                    value={specs.sunroof}
                    onChange={(e) => setSpecs({ ...specs, sunroof: e.target.value })}
                    className="w-full px-3 py-2 bg-[#FAF7F2] rounded-xl border border-[#ECC4A6] text-xs font-bold text-[#2E271F] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-[#74351B] mb-1">Insurance Validity</label>
                  <input
                    type="text"
                    value={specs.insuranceValidity}
                    onChange={(e) => setSpecs({ ...specs, insuranceValidity: e.target.value })}
                    className="w-full px-3 py-2 bg-[#FAF7F2] rounded-xl border border-[#ECC4A6] text-xs font-bold text-[#2E271F] outline-none"
                  />
                </div>

              </div>

              <div>
                <label className="block text-xs font-bold text-[#74351B] mb-1">
                  Key Features &amp; Equipment (1 per line)
                </label>
                <textarea
                  rows={4}
                  value={featuresInput}
                  onChange={(e) => setFeaturesInput(e.target.value)}
                  placeholder="Enter key vehicle features (e.g. Wireless Charger, Cruise Control, Leatherette Seats)..."
                  className="w-full p-3 bg-[#FAF7F2] rounded-xl border border-[#ECC4A6] text-xs font-mono text-[#2E271F] focus:bg-white focus:border-[#D27848] outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#74351B] mb-1">
                  Search Tags &amp; Badges (comma-separated)
                </label>
                <input
                  type="text"
                  value={tagsInput}
                  onChange={(e) => setTagsInput(e.target.value)}
                  placeholder="e.g. 4x4, Sunroof, Single Owner, KA-20 RTO, Automatic"
                  className="w-full px-3.5 py-2.5 bg-[#FAF7F2] rounded-xl border border-[#ECC4A6] text-xs font-bold text-[#2E271F] focus:bg-white focus:border-[#D27848] outline-none"
                />
              </div>

            </div>
          )}

          {/* TAB 4: INSPECTION SCORE & EDITABLE MODULES */}
          {activeTab === 'inspection' && (
            <div className="space-y-5 animate-fade-in">
              
              {/* Overall Score with NO MIN LIMIT */}
              <div className="p-4 rounded-2xl bg-[#FDF8F4] border border-[#ECC4A6]">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-2">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-[#D27848]" />
                    <span className="text-xs font-black text-[#2E271F]">Overall Inspection Score (0 to 10)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="number"
                      step="any"
                      value={inspectionScore}
                      onChange={(e) => setInspectionScore(e.target.value)}
                      placeholder="e.g. 9.8"
                      className="w-24 px-3 py-1.5 bg-white rounded-xl border border-[#ECC4A6] text-sm font-black text-[#D27848] text-center outline-none focus:border-[#D27848]"
                    />
                    <span className="text-xs font-bold text-[#8B785F]">/ 10.0</span>
                  </div>
                </div>

                <p className="text-[11px] text-[#8B785F]">
                  You can type any number (e.g. 10, 9.8, 8.5, 7.0, etc.). It displays on the car card, vehicle detail modal, and certificate.
                </p>
              </div>

              {/* Editable 5 Inspection Modules */}
              <div className="space-y-4">
                <div className="text-xs font-extrabold text-[#74351B] uppercase tracking-wider">
                  Edit Inspection Category Scores &amp; Details
                </div>
                
                {[
                  { key: 'engineTransmission' as const, label: 'Engine, Gearbox & Transmission Unit', defaultChecks: 48 },
                  { key: 'steeringSuspension' as const, label: 'Steering, Suspension & Brakes', defaultChecks: 38 },
                  { key: 'bodyPaint' as const, label: 'Body, Chassis & Paint Thickness', defaultChecks: 45 },
                  { key: 'interiorElectricals' as const, label: 'Interior, Dashboard & Electricals', defaultChecks: 42 },
                  { key: 'acTyres' as const, label: 'Air Conditioning & Tyres', defaultChecks: 27 },
                ].map((mod) => {
                  const data = inspectionSummary[mod.key] || DEFAULT_INSPECTION[mod.key];
                  return (
                    <div key={mod.key} className="p-3.5 sm:p-4 rounded-2xl bg-[#FAF7F2] border border-[#ECC4A6] space-y-3">
                      
                      {/* Top Header of Category */}
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#389E0D] shrink-0" />
                          <span className="font-bold text-xs text-[#2E271F]">{mod.label}</span>
                        </div>

                        <div className="flex items-center gap-2">
                          <input
                            type="text"
                            value={data.score}
                            onChange={(e) => handleUpdateInspectionCategory(mod.key, 'score', e.target.value)}
                            placeholder="e.g. 10/10"
                            className="w-20 px-2 py-1 bg-white text-xs font-bold text-[#389E0D] text-center rounded-lg border border-[#ECC4A6] outline-none"
                          />

                          <select
                            value={data.status}
                            onChange={(e) => handleUpdateInspectionCategory(mod.key, 'status', e.target.value)}
                            className="px-2 py-1 bg-white text-[11px] font-bold text-[#74351B] rounded-lg border border-[#ECC4A6] outline-none"
                          >
                            <option value="passed">Passed</option>
                            <option value="good">Good</option>
                          </select>
                        </div>
                      </div>

                      {/* Checks Numbers & Highlights */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                        <div className="flex items-center gap-2">
                          <span className="text-[11px] font-semibold text-[#74351B] whitespace-nowrap">Checks Passed:</span>
                          <input
                            type="number"
                            value={data.checksPassed}
                            onChange={(e) => handleUpdateInspectionCategory(mod.key, 'checksPassed', Number(e.target.value))}
                            className="w-16 px-2 py-1 bg-white text-xs font-bold rounded-lg border border-[#ECC4A6] outline-none text-center"
                          />
                          <span className="text-[11px] text-[#8B785F]">/</span>
                          <input
                            type="number"
                            value={data.checksTotal}
                            onChange={(e) => handleUpdateInspectionCategory(mod.key, 'checksTotal', Number(e.target.value))}
                            className="w-16 px-2 py-1 bg-white text-xs font-bold rounded-lg border border-[#ECC4A6] outline-none text-center"
                          />
                          <span className="text-[11px] text-[#8B785F]">Total</span>
                        </div>

                        {/* Highlights summary */}
                        <div>
                          <input
                            type="text"
                            value={data.highlights ? data.highlights.join(', ') : ''}
                            onChange={(e) => handleUpdateInspectionCategory(mod.key, 'highlights', e.target.value.split(',').map(s => s.trim()).filter(Boolean))}
                            placeholder="Highlights (e.g. Zero leak, Clutch healthy)"
                            className="w-full px-2.5 py-1 bg-white text-[11px] text-[#2E271F] rounded-lg border border-[#ECC4A6] outline-none"
                          />
                        </div>
                      </div>

                    </div>
                  );
                })}
              </div>

            </div>
          )}

          {/* TAB 5: PHOTOS & BADGES */}
          {activeTab === 'media' && (
            <div className="space-y-5 animate-fade-in">
              
              {/* Badges Toggles */}
              <div className="p-4 rounded-2xl bg-[#FDF8F4] border border-[#ECC4A6] grid grid-cols-1 sm:grid-cols-3 gap-3">
                <label className="flex items-center gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={isAssured}
                    onChange={(e) => setIsAssured(e.target.checked)}
                    className="w-4 h-4 text-[#D27848] rounded border-[#ECC4A6] focus:ring-[#D27848]"
                  />
                  <div>
                    <div className="text-xs font-bold text-[#2E271F]">Kundapura Assured</div>
                    <div className="text-[10px] text-[#8B785F]">1-Year Warranty badge</div>
                  </div>
                </label>

                <label className="flex items-center gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={featured}
                    onChange={(e) => setFeatured(e.target.checked)}
                    className="w-4 h-4 text-[#D27848] rounded border-[#ECC4A6] focus:ring-[#D27848]"
                  />
                  <div>
                    <div className="text-xs font-bold text-[#2E271F]">Featured Listing</div>
                    <div className="text-[10px] text-[#8B785F]">Top sort priority</div>
                  </div>
                </label>

                <label className="flex items-center gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={trending}
                    onChange={(e) => setTrending(e.target.checked)}
                    className="w-4 h-4 text-[#D27848] rounded border-[#ECC4A6] focus:ring-[#D27848]"
                  />
                  <div>
                    <div className="text-xs font-bold text-[#2E271F]">Trending Car</div>
                    <div className="text-[10px] text-[#8B785F]">Popular badge</div>
                  </div>
                </label>
              </div>

              {/* Photos Gallery */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label className="block text-xs font-bold text-[#74351B]">
                    Car Photos ({images.length} Attached)
                  </label>
                  {images.length > 0 && (
                    <button
                      type="button"
                      onClick={() => setImages([])}
                      className="text-[11px] font-bold text-red-600 hover:underline cursor-pointer"
                    >
                      Delete All Photos
                    </button>
                  )}
                </div>
                
                {/* Method 1: Local Device Upload Button */}
                <div className="p-4 rounded-2xl bg-[#FDF8F4] border-2 border-dashed border-[#ECC4A6] flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white border border-[#ECC4A6] flex items-center justify-center text-[#D27848]">
                      {isUploadingPhotos ? (
                        <Loader2 className="w-5 h-5 animate-spin" />
                      ) : (
                        <Upload className="w-5 h-5" />
                      )}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#2E271F] flex items-center gap-2 justify-center sm:justify-start">
                        <span>Upload Photos from Laptop or Mobile Phone</span>
                        {isFirebaseConfigured() && (
                          <span className="px-2 py-0.5 rounded-md bg-[#241A15] text-[#D27848] text-[10px] font-bold flex items-center gap-1">
                            <Cloud className="w-3 h-3" /> Cloud Storage
                          </span>
                        )}
                      </div>
                      <div className="text-[10px] text-[#8B785F]">
                        {uploadProgressMsg || 'Auto-compressed & optimized for high-speed mobile loading'}
                      </div>
                    </div>
                  </div>

                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    multiple
                    disabled={isUploadingPhotos}
                    onChange={handleFileUpload}
                    className="hidden"
                    id="car-photo-file-picker"
                  />
                  <label
                    htmlFor="car-photo-file-picker"
                    className={`px-4 py-2 bg-[#241A15] hover:bg-[#451E10] text-white text-xs font-bold rounded-xl shadow-xs transition-all cursor-pointer inline-flex items-center gap-1.5 shrink-0 ${
                      isUploadingPhotos ? 'opacity-50 pointer-events-none' : ''
                    }`}
                  >
                    {isUploadingPhotos ? (
                      <>
                        <Loader2 className="w-3.5 h-3.5 animate-spin text-[#D27848]" />
                        <span>Uploading...</span>
                      </>
                    ) : (
                      <>
                        <Upload className="w-3.5 h-3.5 text-[#D27848]" />
                        <span>Select Files</span>
                      </>
                    )}
                  </label>
                </div>

                {/* Method 2: Paste URL Input */}
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <LinkIcon className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#AA957A]" />
                    <input
                      type="text"
                      value={newImageUrl}
                      onChange={(e) => setNewImageUrl(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          e.preventDefault();
                          handleAddImageUrl();
                        }
                      }}
                      placeholder="Or paste direct image URL (https://... or unsplash.com/...)"
                      className="w-full pl-10 pr-3.5 py-2.5 bg-[#FAF7F2] rounded-xl border border-[#ECC4A6] text-xs text-[#2E271F] focus:bg-white focus:border-[#D27848] outline-none"
                    />
                  </div>

                  <button
                    type="button"
                    onClick={handleAddImageUrl}
                    className="px-4 py-2 bg-[#D27848] hover:bg-[#B95C2E] text-white text-xs font-bold rounded-xl flex items-center gap-1.5 transition-colors cursor-pointer shrink-0"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Add Photo</span>
                  </button>
                </div>

                {/* Photo Previews or Empty State */}
                {images.length > 0 ? (
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                    {images.map((img, idx) => (
                      <div key={idx} className="relative group rounded-2xl overflow-hidden border border-[#ECC4A6] aspect-4/3 bg-[#FAF7F2] shadow-xs">
                        <img
                          src={img}
                          alt={`Car photo ${idx + 1}`}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            (e.target as HTMLElement).setAttribute('src', 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80');
                          }}
                        />
                        <div className="absolute top-1.5 left-1.5 px-2 py-0.5 rounded-full bg-black/70 text-white text-[9px] font-bold">
                          {idx === 0 ? 'Cover Photo' : `#${idx + 1}`}
                        </div>
                        <button
                          type="button"
                          onClick={() => handleRemoveImage(idx)}
                          className="absolute top-1.5 right-1.5 p-1.5 rounded-full bg-red-600 hover:bg-red-700 text-white shadow-md transition-transform hover:scale-110 cursor-pointer"
                          title="Delete this photo"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="p-8 rounded-2xl bg-[#FAF7F2] border border-[#ECC4A6] text-center text-[#8B785F]">
                    <ImageIcon className="w-8 h-8 mx-auto text-[#AA957A] mb-2" />
                    <div className="text-xs font-bold text-[#2E271F]">No Photos Attached</div>
                    <p className="text-[11px] text-[#8B785F] mt-0.5">
                      Upload from your device or paste an image link above. If empty, the car will display a clean "Photo Pending" badge.
                    </p>
                  </div>
                )}
              </div>

            </div>
          )}

          {/* Footer Action Buttons */}
          <div className="pt-4 border-t border-[#ECC4A6] flex items-center justify-between gap-3 shrink-0">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 bg-[#FAF7F2] hover:bg-[#FDF3EA] text-[#74351B] text-xs font-bold rounded-xl border border-[#ECC4A6] transition-colors cursor-pointer"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-6 py-2.5 bg-gradient-to-r from-[#D27848] to-[#B95C2E] hover:from-[#B95C2E] hover:to-[#964521] text-white text-xs font-black rounded-xl shadow-md transition-all flex items-center gap-2 cursor-pointer"
            >
              <Save className="w-4 h-4" />
              <span>{car ? 'Save Car Updates' : 'Add Car to Kundapura Inventory'}</span>
            </button>
          </div>

        </form>

      </div>
    </div>
  );
};
