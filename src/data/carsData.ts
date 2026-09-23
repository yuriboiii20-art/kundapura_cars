import { Car } from '../types/car';

export const CARS_DATA: Car[] = [
  // ==========================================
  // 1. SUV CATEGORY (5 CARS)
  // ==========================================
  {
    id: 'kc-thar-2022',
    title: '2022 Mahindra Thar LX 4x4 Hard Top Manual',
    brand: 'Mahindra',
    model: 'Thar',
    variant: 'LX 2.2 mHawk 4WD Diesel Manual Hard Top',
    year: 2022,
    price: 1445000,
    originalPrice: 1530000,
    emiStarting: 26600,
    kilometers: 36800,
    fuelType: 'Diesel',
    transmission: 'Manual',
    bodyType: 'SUV',
    owner: '2nd Owner',
    rto: 'KA-20 (Kundapura RTO)',
    hubLocation: 'Kundapura Beach Road Hub',
    color: 'Red Rage',
    isAssured: true,
    featured: true,
    trending: true,
    tags: ['4x4 Drivetrain', 'Hard Top', '2nd Owner', 'Off-Road Ready', 'KA-20 RTO'],
    inspectionScore: 9.8,
    inspectionSummary: {
      engineTransmission: {
        title: 'mHawk 2.2L Diesel & 6-Speed Manual 4WD',
        score: '10/10',
        checksTotal: 48,
        checksPassed: 48,
        status: 'passed',
        highlights: ['4x4 Low & High transfer case shift verified', 'Clutch plate and pressure plate healthy', 'Zero oil leaks or residue']
      },
      steeringSuspension: {
        title: 'Steering, Heavy Duty Suspension & Brakes',
        score: '9.7/10',
        checksTotal: 42,
        checksPassed: 42,
        status: 'passed',
        highlights: ['All-terrain suspension links checked', 'Heavy-duty brake calipers tested', 'Hydraulic assist responsive']
      },
      bodyPaint: {
        title: 'Body, Frame & Underbody Shielding',
        score: '9.9/10',
        checksTotal: 45,
        checksPassed: 45,
        status: 'passed',
        highlights: ['Original factory Red Rage finish', 'Factory hard top seals tight & water tested', 'Chassis 100% rust-free']
      },
      interiorElectricals: {
        title: 'Drizzle-Resistant Interior & Electricals',
        score: '9.8/10',
        checksTotal: 35,
        checksPassed: 35,
        status: 'passed',
        highlights: ['Adventure stats gauges fully working', 'Apple CarPlay & Android Auto tested', 'Roof mounted speakers crystal clear']
      },
      acTyres: {
        title: 'AC & 18-inch Deep Tread All-Terrain Tyres',
        score: '9.8/10',
        checksTotal: 30,
        checksPassed: 30,
        status: 'passed',
        highlights: ['18-inch CEAT Czar A/T tyres with 80% tread', 'AC blower and cooling verified at 7°C', 'Full size spare wheel inspected']
      }
    },
    features: [
      'Shift-on-the-fly 4WD Low / High Gearbox with Mechanical Locking Rear Diff',
      'Factory Fitted Molded Hard Top with Tinted Rear Glass',
      '7-inch Touchscreen with Adventure Telemetry & Compass',
      'Electronic Stability Program (ESP) with Roll-over Mitigation',
      'Cruise Control & Steering Mounted Controls',
      'Roof Mounted Water-Resistant Speakers',
      '18-inch Deep Dish Diamond Cut Alloy Wheels',
      'Tyre Pressure Monitoring System (TPMS)'
    ],
    specs: {
      engineCapacity: '2184 cc mHawk',
      maxPower: '130 bhp @ 3750 rpm',
      mileageARAI: '15.2 kmpl',
      seatingCapacity: 4,
      airbags: 2,
      bootSpace: 'Foldable Rear Seats',
      sunroof: 'Hard Top',
      insuranceValidity: 'Comprehensive till Nov 2026',
      groundClearance: '226 mm',
      fuelTank: '57 Litres'
    },
    images: [
      'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1506015391300-4802dc74de2e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 'kc-scorpio-n-2023',
    title: '2023 Mahindra Scorpio-N Z8L 4x4 Diesel AT',
    brand: 'Mahindra',
    model: 'Scorpio-N',
    variant: 'Z8L 2.2 mHawk 4XPLOR 7-Seater Automatic',
    year: 2023,
    price: 2190000,
    originalPrice: 2340000,
    emiStarting: 40500,
    kilometers: 24500,
    fuelType: 'Diesel',
    transmission: 'Automatic',
    bodyType: 'SUV',
    owner: '1st Owner',
    rto: 'KA-20 (Kundapura RTO)',
    hubLocation: 'Kundapura NH 66 Highway Hub',
    color: 'Deep Forest Green',
    isAssured: true,
    featured: true,
    trending: true,
    tags: ['4x4 4XPLOR', 'Sony 12-Speaker 3D Audio', 'Sunroof', '7-Seater', 'Under Factory Warranty'],
    inspectionScore: 9.9,
    inspectionSummary: {
      engineTransmission: {
        title: '172 bhp mHawk Diesel & 6-Speed AT',
        score: '10/10',
        checksTotal: 48,
        checksPassed: 48,
        status: 'passed',
        highlights: ['4XPLOR Terrain management modes tested', 'Automatic gearshifts silky smooth', 'Zero engine vibration']
      },
      steeringSuspension: {
        title: 'Pentalink Rear Suspension & FSD Dampers',
        score: '9.9/10',
        checksTotal: 42,
        checksPassed: 42,
        status: 'passed',
        highlights: ['Frequency Dependent Damping absorbs rough roads', 'Electric power steering featherlight', 'Brake pads at 88%']
      },
      bodyPaint: {
        title: 'Body, Frame & Paint Quality',
        score: '9.9/10',
        checksTotal: 45,
        checksPassed: 45,
        status: 'passed',
        highlights: ['Original metallic Deep Forest paint', 'Zero denting or repaints', 'Hydroformed ladder frame intact']
      },
      interiorElectricals: {
        title: 'Sony 3D Sound, Alexa & Infotainment',
        score: '9.9/10',
        checksTotal: 35,
        checksPassed: 35,
        status: 'passed',
        highlights: ['Sony 12-speaker audio with roof speakers tested', '8-inch touchscreen fully functional', 'Front and rear parking cameras clear']
      },
      acTyres: {
        title: 'Dual Zone AC & 18-inch Diamond Cut Alloys',
        score: '9.8/10',
        checksTotal: 30,
        checksPassed: 30,
        status: 'passed',
        highlights: ['Dual-zone climate control cools efficiently', 'Bridgestone Dueler tyres at 82% tread life', 'Spare tyre brand new']
      }
    },
    features: [
      '4XPLOR Intelligent Terrain Management System (Normal, Snow, Mud, Sand)',
      'Sony 12-Speaker Immersive 3D Sound System with Subwoofer',
      'Electric Sunroof with Anti-Pinch Technology',
      'Dual Zone FATC Automatic Climate Control',
      '8-inch Touchscreen Infotainment with Built-in Alexa & Connected Car Tech',
      'Driver Drowsiness Alert & Electronic Stability Control',
      '6 Airbags & 5-Star Global NCAP Adult Safety Rating',
      '18-inch Diamond Cut Machined Alloy Wheels'
    ],
    specs: {
      engineCapacity: '2198 cc mHawk Diesel',
      maxPower: '172 bhp @ 3500 rpm',
      mileageARAI: '16.2 kmpl',
      seatingCapacity: 7,
      airbags: 6,
      bootSpace: '460 Litres (Expanded)',
      sunroof: 'Electric Sunroof',
      insuranceValidity: 'Zero Dep till May 2027',
      groundClearance: '187 mm',
      fuelTank: '57 Litres'
    },
    images: [
      'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 'kc-harrier-2021',
    title: '2021 Tata Harrier XZA Plus Dark Edition AT',
    brand: 'Tata',
    model: 'Harrier',
    variant: 'XZA Plus Dark Edition 2.0 Kryotec Automatic',
    year: 2021,
    price: 1520000,
    originalPrice: 1630000,
    emiStarting: 28100,
    kilometers: 51200,
    fuelType: 'Diesel',
    transmission: 'Automatic',
    bodyType: 'SUV',
    owner: '3rd Owner',
    rto: 'KA-20 (Kundapura RTO)',
    hubLocation: 'Koteshwara Highway Yard',
    color: 'Oberon Black (Dark Edition)',
    isAssured: true,
    featured: false,
    trending: true,
    tags: ['Dark Edition', 'Panoramic Sunroof', 'JBL 9-Speaker Audio', '3rd Owner', 'Ventilated Seats'],
    inspectionScore: 9.8,
    inspectionSummary: {
      engineTransmission: {
        title: '170 bhp Kryotec Diesel & Hyundai 6-Speed AT',
        score: '9.8/10',
        checksTotal: 48,
        checksPassed: 48,
        status: 'passed',
        highlights: ['Robust torque delivery from 1750 rpm', 'Automatic gearbox shifts seamless', 'Turbocharger pressure certified']
      },
      steeringSuspension: {
        title: 'Land Rover D8 Derived OMEGA-Arc Chassis',
        score: '9.9/10',
        checksTotal: 42,
        checksPassed: 42,
        status: 'passed',
        highlights: ['Outstanding high-speed highway stability', 'All-round disc brakes at 80% life', 'Steering feedback accurate']
      },
      bodyPaint: {
        title: 'Signature Dark Edition Body & Blackstone Alloys',
        score: '9.8/10',
        checksTotal: 45,
        checksPassed: 45,
        status: 'passed',
        highlights: ['Oberon Black clear coat polished', 'No panel replacements', 'Underbody rust protection intact']
      },
      interiorElectricals: {
        title: 'All-Black Benecke-Kaliko Leather & JBL Audio',
        score: '9.9/10',
        checksTotal: 35,
        checksPassed: 35,
        status: 'passed',
        highlights: ['JBL 9-speaker system with acoustic amplifier tested', '8.8-inch touchscreen responsive', 'Driver seat electric adjust verified']
      },
      acTyres: {
        title: 'Auto Climate Control & 18-inch Blackstone Alloys',
        score: '9.7/10',
        checksTotal: 30,
        checksPassed: 30,
        status: 'passed',
        highlights: ['Automatic climate control cooling tested at 6.5°C', 'Goodyear tyres at 75% tread life', 'Clean air filter']
      }
    },
    features: [
      'Dark Edition Exclusive Oberon Black Paint with Blackstone 18-inch Alloys',
      'Panoramic Sunroof with Global Close & Anti-Pinch',
      'JBL 9-Speaker High Definition Sound System with Subwoofer',
      '6-Way Powered Driver Seat with Adjustable Lumbar Support',
      'Front Ventilated Cooling Seats for Coastal Summers',
      'Terrain Response Modes (Normal, Rough, Wet)',
      '6 Airbags & Advanced Electronic Stability Program (ESP)',
      'Aerodynamic Xenon HID Projector Headlamps'
    ],
    specs: {
      engineCapacity: '1956 cc Kryotec Diesel',
      maxPower: '168 bhp @ 3750 rpm',
      mileageARAI: '16.35 kmpl',
      seatingCapacity: 5,
      airbags: 6,
      bootSpace: '425 Litres',
      sunroof: 'Panoramic Sunroof',
      insuranceValidity: 'Comprehensive till Jan 2027',
      groundClearance: '205 mm',
      fuelTank: '50 Litres'
    },
    images: [
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 'kc-creta-2022',
    title: '2022 Hyundai Creta SX (O) 1.5 Diesel Automatic',
    brand: 'Hyundai',
    model: 'Creta',
    variant: 'SX (O) 1.5 CRDi VGT 6-Speed Automatic',
    year: 2022,
    price: 1495000,
    originalPrice: 1580000,
    emiStarting: 27500,
    kilometers: 29600,
    fuelType: 'Diesel',
    transmission: 'Automatic',
    bodyType: 'SUV',
    owner: '2nd Owner',
    rto: 'KA-20 (Kundapura RTO)',
    hubLocation: 'Udupi - Kundapura Expressway Hub',
    color: 'Polar White with Phantom Black Roof',
    isAssured: true,
    featured: true,
    trending: true,
    tags: ['Panoramic Sunroof', 'Bose 8-Speaker Audio', 'Ventilated Seats', '2nd Owner', 'Bluelink Connected'],
    inspectionScore: 9.9,
    inspectionSummary: {
      engineTransmission: {
        title: '1.5L CRDi Diesel & 6-Speed Torque Converter AT',
        score: '10/10',
        checksTotal: 48,
        checksPassed: 48,
        status: 'passed',
        highlights: ['Refined diesel engine with exceptional mileage (18.5 kmpl)', 'Torque converter shifts smooth', 'No smoke or residue']
      },
      steeringSuspension: {
        title: 'Steering, Suspension & Brakes',
        score: '9.8/10',
        checksTotal: 42,
        checksPassed: 42,
        status: 'passed',
        highlights: ['All 4 disc brakes with 84% life', 'Electronic power steering calibrated', 'Suspension silent over bumps']
      },
      bodyPaint: {
        title: 'Dual Tone Body & Paint Quality',
        score: '9.9/10',
        checksTotal: 45,
        checksPassed: 45,
        status: 'passed',
        highlights: ['Factory dual-tone paint finish intact', 'Zero accident repairs', 'Clean underbody coating']
      },
      interiorElectricals: {
        title: '10.25-inch Touchscreen, Bose Audio & Sunroof',
        score: '10/10',
        checksTotal: 35,
        checksPassed: 35,
        status: 'passed',
        highlights: ['Voice-enabled panoramic sunroof working flawlessly', 'Bose 8-speaker audio tested', 'Ventilated seat motors checked']
      },
      acTyres: {
        title: 'AC Climate Control & 17-inch Alloys',
        score: '9.8/10',
        checksTotal: 30,
        checksPassed: 30,
        status: 'passed',
        highlights: ['AC vents chill to 6°C in under 2 minutes', 'Bridgestone tyres at 80% tread life', 'Spare tyre unused']
      }
    },
    features: [
      'Voice-Enabled Smart Panoramic Sunroof',
      'Front Ventilated Cooling Seats for Coastal Weather',
      'Bose Premium 8-Speaker Sound System with Subwoofer',
      '10.25-inch HD Touchscreen with Apple CarPlay & Android Auto',
      'Hyundai Bluelink Connected Car Technology with 50+ Features',
      'Electronic Parking Brake with Auto Hold Function',
      'Traction Control Modes (Snow, Sand, Mud) & Drive Modes',
      '6 Airbags & Electronic Stability Control (ESC)'
    ],
    specs: {
      engineCapacity: '1493 cc CRDi Diesel',
      maxPower: '113 bhp @ 4000 rpm',
      mileageARAI: '18.5 kmpl (Segment Best Diesel)',
      seatingCapacity: 5,
      airbags: 6,
      bootSpace: '433 Litres',
      sunroof: 'Panoramic Sunroof',
      insuranceValidity: 'Comprehensive till Oct 2026',
      groundClearance: '190 mm',
      fuelTank: '50 Litres'
    },
    images: [
      'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 'kc-fortuner-2021',
    title: '2021 Toyota Fortuner 4x4 Sigma 4 Diesel AT',
    brand: 'Toyota',
    model: 'Fortuner',
    variant: '4x4 Sigma 4 2.8L D-4D Automatic',
    year: 2021,
    price: 3350000,
    originalPrice: 3550000,
    emiStarting: 61800,
    kilometers: 54200,
    fuelType: 'Diesel',
    transmission: 'Automatic',
    bodyType: 'SUV',
    owner: '2nd Owner',
    rto: 'KA-20 (Kundapura RTO)',
    hubLocation: 'Kundapura NH 66 Highway Hub',
    color: 'Super White Pearl',
    isAssured: true,
    featured: true,
    trending: true,
    tags: ['4x4 Sigma 4', '500 Nm Torque', '7-Seater Legend', 'Toyota Bulletproof Reliability', '2nd Owner'],
    inspectionScore: 9.9,
    inspectionSummary: {
      engineTransmission: {
        title: 'Toyota 2.8L D-4D 201 bhp / 500 Nm & 6-Speed AT',
        score: '10/10',
        checksTotal: 48,
        checksPassed: 48,
        status: 'passed',
        highlights: ['Massive 500 Nm pulling power verified', 'Sigma 4 4WD High/Low transfer case flawless', 'Engine compression 100% factory spec']
      },
      steeringSuspension: {
        title: 'Heavy Duty Ladder Frame & Double Wishbone Suspension',
        score: '10/10',
        checksTotal: 42,
        checksPassed: 42,
        status: 'passed',
        highlights: ['Indestructible ladder frame in pristine condition', 'Heavy-duty front & rear ventilated disc brakes at 82%', 'Hydraulic steering centered']
      },
      bodyPaint: {
        title: 'Super White Pearl Coat & Underbody Inspection',
        score: '9.9/10',
        checksTotal: 45,
        checksPassed: 45,
        status: 'passed',
        highlights: ['Original Toyota Pearl White finish', 'Zero structural body damage', 'Full underbody anti-corrosion coating']
      },
      interiorElectricals: {
        title: '7-Seater Chamois Leather Cabin & 11-Speaker JBL Audio',
        score: '9.9/10',
        checksTotal: 35,
        checksPassed: 35,
        status: 'passed',
        highlights: ['11-speaker JBL sound system tested', '8-inch touchscreen with Apple CarPlay & Android Auto', 'Dual power front seats working']
      },
      acTyres: {
        title: 'Dual Climate AC & 18-inch All-Terrain Tyres',
        score: '9.8/10',
        checksTotal: 30,
        checksPassed: 30,
        status: 'passed',
        highlights: ['Dual air conditioning with ceiling vents for all 3 rows', 'Bridgestone Dueler A/T tyres at 78% tread', 'Full-size alloy spare']
      }
    },
    features: [
      'Sigma 4 4WD High & Low Transfer Case with Rear Differential Lock',
      'Massive 201 bhp & 500 Nm 2.8L Turbo Diesel Engine',
      '11-Speaker JBL Concert Sound System with Subwoofer',
      'Ventilated Driver & Passenger Front Cooling Seats',
      '8-Way Electrically Adjustable Driver & Front Passenger Seats',
      'Power Tailgate with Hands-Free Kick Sensor & Height Memory',
      'Drive Modes (Eco, Normal, Sport) with Downhill Assist Control (DAC)',
      '7 Airbags, Vehicle Stability Control (VSC) & Hill Start Assist'
    ],
    specs: {
      engineCapacity: '2755 cc D-4D Turbo Diesel',
      maxPower: '201 bhp @ 3000 rpm',
      mileageARAI: '14.2 kmpl',
      seatingCapacity: 7,
      airbags: 7,
      bootSpace: '296 Litres (Expandable to 710L)',
      sunroof: 'None',
      insuranceValidity: 'Comprehensive till Dec 2026',
      groundClearance: '225 mm',
      fuelTank: '80 Litres'
    },
    images: [
      'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1200&q=80'
    ]
  },

  // ==========================================
  // 2. SEDAN CATEGORY (5 CARS)
  // ==========================================
  {
    id: 'kc-city-2022',
    title: '2022 Honda City ZX CVT (5th Gen)',
    brand: 'Honda',
    model: 'City',
    variant: 'ZX i-VTEC CVT (Top End)',
    year: 2022,
    price: 1180000,
    originalPrice: 1250000,
    emiStarting: 21700,
    kilometers: 28400,
    fuelType: 'Petrol',
    transmission: 'Automatic',
    bodyType: 'Sedan',
    owner: '1st Owner',
    rto: 'KA-20 (Kundapura RTO)',
    hubLocation: 'Udupi - Kundapura Expressway Hub',
    color: 'Radiant Red Metallic',
    isAssured: true,
    featured: true,
    trending: false,
    tags: ['Single Owner', 'Sunroof', 'LaneWatch Camera', 'Full Leather', 'KA-20 RTO'],
    inspectionScore: 9.9,
    inspectionSummary: {
      engineTransmission: {
        title: '1.5L i-VTEC & 7-Speed Step CVT',
        score: '10/10',
        checksTotal: 48,
        checksPassed: 48,
        status: 'passed',
        highlights: ['Legendary i-VTEC revs cleanly to 7000 rpm', 'Paddle shifters responsive', 'Zero engine oil leaks']
      },
      steeringSuspension: {
        title: 'Sedan Comfort Suspension & Steering',
        score: '9.8/10',
        checksTotal: 42,
        checksPassed: 42,
        status: 'passed',
        highlights: ['Plush highway ride quality', 'Brake discs checked at 82%', 'Steering alignment centered']
      },
      bodyPaint: {
        title: 'Exterior Paint & Body Panels',
        score: '9.9/10',
        checksTotal: 45,
        checksPassed: 45,
        status: 'passed',
        highlights: ['Deep metallic gloss finish', 'Full LED headlamp cluster pristine', 'No dents or scratches']
      },
      interiorElectricals: {
        title: 'Premium Leather Cabin & Electronics',
        score: '10/10',
        checksTotal: 35,
        checksPassed: 35,
        status: 'passed',
        highlights: ['Honda LaneWatch blind spot camera active', 'Soft touch perforated leather', 'One-touch power sunroof']
      },
      acTyres: {
        title: 'Auto Climate Control & R16 Tyres',
        score: '9.7/10',
        checksTotal: 30,
        checksPassed: 30,
        status: 'passed',
        highlights: ['Rear AC vents cool rapidly', 'Yokohama BlueEarth tyres at 75% tread', 'Clean cabin filter']
      }
    },
    features: [
      'Honda LaneWatch Blind Spot Camera System',
      'One-Touch Electric Sunroof',
      'Full LED Headlamps with 9 LED Array',
      'Premium Perforated Leather Upholstery',
      'Paddle Shifters for Manual CVT Control',
      '8-inch Touchscreen with Alexa Connectivity',
      '6 Airbags & Vehicle Stability Assist (VSA)',
      'Walk Away Auto Lock & Remote Engine Start'
    ],
    specs: {
      engineCapacity: '1498 cc',
      maxPower: '119 bhp @ 6600 rpm',
      mileageARAI: '18.4 kmpl',
      seatingCapacity: 5,
      airbags: 6,
      bootSpace: '506 Litres',
      sunroof: 'Electric Sunroof',
      insuranceValidity: 'Comprehensive till Aug 2026',
      groundClearance: '165 mm',
      fuelTank: '40 Litres'
    },
    images: [
      'https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 'kc-virtus-2023',
    title: '2023 Volkswagen Virtus GT Plus 1.5 TSI DSG',
    brand: 'Volkswagen',
    model: 'Virtus',
    variant: 'GT Plus 1.5L TSI EVO DSG Automatic',
    year: 2023,
    price: 1575000,
    originalPrice: 1680000,
    emiStarting: 29100,
    kilometers: 14500,
    fuelType: 'Petrol',
    transmission: 'Automatic',
    bodyType: 'Sedan',
    owner: '1st Owner',
    rto: 'KA-20 (Kundapura RTO)',
    hubLocation: 'Kundapura Beach Road Hub',
    color: 'Wild Cherry Red',
    isAssured: true,
    featured: true,
    trending: true,
    tags: ['150 bhp TSI', '7-Speed DSG', '5-Star Safety', 'Cylinder Deactivation', 'Under VW Warranty'],
    inspectionScore: 9.9,
    inspectionSummary: {
      engineTransmission: {
        title: '1.5 TSI EVO with Active Cylinder Tech & DSG',
        score: '10/10',
        checksTotal: 48,
        checksPassed: 48,
        status: 'passed',
        highlights: ['Lightning fast 7-speed DSG shifts', 'Active cylinder deactivation gives 19+ kmpl on highway', 'Zero vibrations']
      },
      steeringSuspension: {
        title: 'German High Speed Suspension & Chassis',
        score: '10/10',
        checksTotal: 42,
        checksPassed: 42,
        status: 'passed',
        highlights: ['Razor sharp steering feedback', 'Brakes tested from 100-0 km/h with zero fade', 'Rock solid stability']
      },
      bodyPaint: {
        title: 'Laser Welded German Body & Red Calipers',
        score: '9.9/10',
        checksTotal: 45,
        checksPassed: 45,
        status: 'passed',
        highlights: ['Gloss Cherry Red with black contrast roof', 'GT red front brake calipers clean', '5-Star GNCAP frame']
      },
      interiorElectricals: {
        title: '10.1-inch VW Play & Digital Cockpit',
        score: '9.9/10',
        checksTotal: 35,
        checksPassed: 35,
        status: 'passed',
        highlights: ['Virtual digital cockpit display tested', 'Wireless CarPlay tested', 'Ventilated leather seats verified']
      },
      acTyres: {
        title: 'Climatronic AC & Goodyear Eagle F1 Tyres',
        score: '9.8/10',
        checksTotal: 30,
        checksPassed: 30,
        status: 'passed',
        highlights: ['Touch Climatronic AC chilled to 5.5°C', '16-inch razor alloys with 88% tread', 'Clean spare']
      }
    },
    features: [
      '1.5L TSI EVO 4-Cylinder Turbo Engine (150 PS / 250 Nm)',
      '7-Speed DSG Dual Clutch Automatic with Paddle Shifters',
      'Active Cylinder Technology (ACT) for High Mileage',
      'Front Ventilated Leather Seats',
      '8-inch Digital Cockpit Instrument Cluster',
      '10.1-inch VW Play Touchscreen with Wireless Apps',
      'Electric Sunroof & Ambient Lighting',
      '5-Star Adult & Child Global NCAP Crash Safety'
    ],
    specs: {
      engineCapacity: '1498 cc Turbo',
      maxPower: '148 bhp @ 5000 rpm',
      mileageARAI: '19.62 kmpl',
      seatingCapacity: 5,
      airbags: 6,
      bootSpace: '521 Litres (Massive)',
      sunroof: 'Electric Sunroof',
      insuranceValidity: 'Zero Dep till Jul 2027',
      groundClearance: '179 mm',
      fuelTank: '45 Litres'
    },
    images: [
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 'kc-slavia-2022',
    title: '2022 Skoda Slavia Style 1.5 TSI DSG',
    brand: 'Skoda',
    model: 'Slavia',
    variant: 'Style 1.5 TSI DSG Automatic (Sunroof)',
    year: 2022,
    price: 1495000,
    originalPrice: 1580000,
    emiStarting: 27500,
    kilometers: 21000,
    fuelType: 'Petrol',
    transmission: 'Automatic',
    bodyType: 'Sedan',
    owner: '1st Owner',
    rto: 'KA-20 (Kundapura RTO)',
    hubLocation: 'Kundapura Beach Road Hub',
    color: 'Crystal Blue Metallic',
    isAssured: true,
    featured: false,
    trending: false,
    tags: ['150 bhp TSI', 'Ventilated Seats', 'Subwoofer Audio', '5-Star Safety', 'Sunroof'],
    inspectionScore: 9.9,
    inspectionSummary: {
      engineTransmission: {
        title: '1.5 TSI Turbo & 7-Speed DSG',
        score: '10/10',
        checksTotal: 48,
        checksPassed: 48,
        status: 'passed',
        highlights: ['0-100 in 8.8s with explosive turbo punch', 'DSG shifts instantly without lag', 'Clean engine bay']
      },
      steeringSuspension: {
        title: 'European Road Manners & Brakes',
        score: '9.9/10',
        checksTotal: 42,
        checksPassed: 42,
        status: 'passed',
        highlights: ['European suspension firmness gives supreme confidence', 'Brake pads at 85%', 'Electronic Differential Lock (EDL)']
      },
      bodyPaint: {
        title: 'Crystal Blue Paint & High Tensile Steel',
        score: '9.9/10',
        checksTotal: 45,
        checksPassed: 45,
        status: 'passed',
        highlights: ['Stunning Skoda crystalline design cues', '5-Star Global NCAP crash rating', 'Paint thickness verified']
      },
      interiorElectricals: {
        title: '10-inch Infotainment & 8-Speaker Subwoofer',
        score: '9.9/10',
        checksTotal: 35,
        checksPassed: 35,
        status: 'passed',
        highlights: ['Skoda Premium Audio with boot subwoofer', 'Ventilated leather seats verified', 'Virtual cockpit working']
      },
      acTyres: {
        title: 'Climatronic with Air Care & 16-inch Ving Alloys',
        score: '9.8/10',
        checksTotal: 30,
        checksPassed: 30,
        status: 'passed',
        highlights: ['Touch Climatronic AC with Air Care filtration', 'Tyres at 80% tread life', 'Clean spare wheel']
      }
    },
    features: [
      '1.5L TSI 4-Cylinder Turbo Petrol Engine (150 PS / 250 Nm)',
      '7-Speed DSG Automatic Transmission with Paddle Shifters',
      'Skoda Premium Sound System with 8 Speakers and Boot Subwoofer',
      'Electric Sunroof with Anti-Pinch Technology',
      'Front Ventilated Leather Seats with Perforated Design',
      '10-inch Touchscreen Infotainment with Wireless Smartphone Link',
      '6 Airbags & Electronic Stability Control (ESC) as Standard',
      '521 Litres Best-in-Class Boot Capacity'
    ],
    specs: {
      engineCapacity: '1498 cc Turbo',
      maxPower: '148 bhp @ 5000 rpm',
      mileageARAI: '18.72 kmpl',
      seatingCapacity: 5,
      airbags: 6,
      bootSpace: '521 Litres',
      sunroof: 'Electric Sunroof',
      insuranceValidity: 'Comprehensive till Nov 2026',
      groundClearance: '179 mm',
      fuelTank: '45 Litres'
    },
    images: [
      'https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 'kc-verna-2023',
    title: '2023 Hyundai Verna SX (O) 1.5 Turbo DCT',
    brand: 'Hyundai',
    model: 'Verna',
    variant: 'SX (O) 1.5 Turbo GDi 7-Speed DCT',
    year: 2023,
    price: 1585000,
    originalPrice: 1690000,
    emiStarting: 29200,
    kilometers: 17400,
    fuelType: 'Petrol',
    transmission: 'Automatic',
    bodyType: 'Sedan',
    owner: '1st Owner',
    rto: 'KA-20 (Kundapura RTO)',
    hubLocation: 'Kundapura NH 66 Highway Hub',
    color: 'Abyss Black Pearl',
    isAssured: true,
    featured: false,
    trending: true,
    tags: ['160 PS Monster', 'ADAS Level 2', 'Bose Audio', 'Heated & Ventilated Seats', 'Single Owner'],
    inspectionScore: 9.9,
    inspectionSummary: {
      engineTransmission: {
        title: '160 PS 1.5L Turbo GDi & 7-Speed Dual Clutch',
        score: '10/10',
        checksTotal: 48,
        checksPassed: 48,
        status: 'passed',
        highlights: ['Segment fastest 0-100 km/h in 8.1 seconds', 'Sport mode shifts aggressive and instant', 'OBD diagnostics 100% clear']
      },
      steeringSuspension: {
        title: 'All-Disc Braking & High Speed Chassis',
        score: '9.9/10',
        checksTotal: 42,
        checksPassed: 42,
        status: 'passed',
        highlights: ['All 4 disc brakes tested with 88% life', 'Electronic stability & traction control active', 'Smooth high-speed tracking']
      },
      bodyPaint: {
        title: 'Fastback Sedan Body & Horizon LED Lightbar',
        score: '9.9/10',
        checksTotal: 45,
        checksPassed: 45,
        status: 'passed',
        highlights: ['Parametric jewel body styling pristine', 'Full width connecting horizon LED bar working', 'Factory clear coat']
      },
      interiorElectricals: {
        title: 'Dual 10.25-inch Curved Screens & Bose Audio',
        score: '10/10',
        checksTotal: 35,
        checksPassed: 35,
        status: 'passed',
        highlights: ['ADAS radar & camera sensors tested', 'Bose 8-speaker audio crystal clear', '64-color ambient light']
      },
      acTyres: {
        title: 'Switchable AC Controls & 16-inch Black Alloys',
        score: '9.8/10',
        checksTotal: 30,
        checksPassed: 30,
        status: 'passed',
        highlights: ['Dual zone auto climate control', 'Tyres at 82% tread life', 'Full size spare wheel']
      }
    },
    features: [
      '1.5L Turbo GDi Petrol Engine (160 PS / 253 Nm - Fastest in Class)',
      'Hyundai SmartSense ADAS Level 2 with 17 Safety Features',
      'Dual 10.25-inch Integrated Cockpit Displays',
      'Bose Premium 8-Speaker Audio System with Subwoofer',
      'Heated & Ventilated Front Seats',
      'Smart Electric Sunroof with Voice Assist',
      'Electronic Parking Brake with Auto Hold',
      '6 Airbags, ESC, VSM & Hill Start Assist Standard'
    ],
    specs: {
      engineCapacity: '1482 cc Turbo',
      maxPower: '158 bhp @ 5500 rpm',
      mileageARAI: '20.60 kmpl',
      seatingCapacity: 5,
      airbags: 6,
      bootSpace: '528 Litres (Largest)',
      sunroof: 'Electric Sunroof',
      insuranceValidity: 'Zero Dep till May 2027',
      groundClearance: '170 mm',
      fuelTank: '45 Litres'
    },
    images: [
      'https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 'kc-ciaz-2022',
    title: '2022 Maruti Suzuki Ciaz Alpha 1.5 Smart Hybrid AT',
    brand: 'Maruti Suzuki',
    model: 'Ciaz',
    variant: 'Alpha 1.5 K15B Smart Hybrid Automatic',
    year: 2022,
    price: 925000,
    originalPrice: 990000,
    emiStarting: 17100,
    kilometers: 34200,
    fuelType: 'Petrol',
    transmission: 'Automatic',
    bodyType: 'Sedan',
    owner: '1st Owner',
    rto: 'KA-20 (Kundapura RTO)',
    hubLocation: 'Koteshwara Highway Yard',
    color: 'Pearl Metallic Dignity Brown',
    isAssured: true,
    featured: false,
    trending: false,
    tags: ['Chauffeur Lounge Comfort', 'Smart Hybrid', '20.04 kmpl', 'Cruise Control', 'Low Maintenance'],
    inspectionScore: 9.8,
    inspectionSummary: {
      engineTransmission: {
        title: '1.5L K15B Petrol with Dual Battery Smart Hybrid',
        score: '9.9/10',
        checksTotal: 48,
        checksPassed: 48,
        status: 'passed',
        highlights: ['Smooth torque assist on acceleration', 'Automatic transmission shifts seamlessly', 'Zero fluid leakages']
      },
      steeringSuspension: {
        title: 'Plush Lounge Suspension & Brakes',
        score: '9.7/10',
        checksTotal: 42,
        checksPassed: 42,
        status: 'passed',
        highlights: ['Ultra comfortable rear seat ride', 'Brakes responsive at 82% life', 'Power steering centered']
      },
      bodyPaint: {
        title: 'Dignity Brown Paint & Chrome Accents',
        score: '9.8/10',
        checksTotal: 45,
        checksPassed: 45,
        status: 'passed',
        highlights: ['Original metallic clear coat', 'LED projector headlamps clean', 'No structural repairs']
      },
      interiorElectricals: {
        title: 'Birch Blonde Wood Cabin & SmartPlay Studio',
        score: '9.8/10',
        checksTotal: 35,
        checksPassed: 35,
        status: 'passed',
        highlights: ['7-inch SmartPlay screen tested', 'Cruise control verified', 'Rear sunshade intact']
      },
      acTyres: {
        title: 'Auto Climate Control & 16-inch Precision Alloys',
        score: '9.8/10',
        checksTotal: 30,
        checksPassed: 30,
        status: 'passed',
        highlights: ['Rear AC vents chill rapidly', 'Tyres at 78% tread life', 'Clean spare tyre']
      }
    },
    features: [
      'Executive Rear Legroom with Rear Reading Lamps & Sunshade',
      'Smart Hybrid Dual-Battery Idle Stop-Start System',
      'LED Projector Headlamps with Daytime Running Lights',
      'Cruise Control & Automatic Climate Control',
      'Leather Seat Upholstery with Wood Grain Accents',
      '7-inch SmartPlay Studio with Apple CarPlay & Android Auto',
      '16-inch Precision Cut Metallic Alloy Wheels',
      'Reverse Parking Camera with Sensor Guidelines'
    ],
    specs: {
      engineCapacity: '1462 cc',
      maxPower: '103 bhp @ 6000 rpm',
      mileageARAI: '20.04 kmpl',
      seatingCapacity: 5,
      airbags: 2,
      bootSpace: '510 Litres',
      sunroof: 'No Sunroof',
      insuranceValidity: 'Comprehensive till Oct 2026',
      groundClearance: '170 mm',
      fuelTank: '43 Litres'
    },
    images: [
      'https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80'
    ]
  },

  // ==========================================
  // 3. HATCHBACK CATEGORY (5 CARS)
  // ==========================================
  {
    id: 'kc-baleno-2021',
    title: '2021 Maruti Suzuki Baleno Alpha DualJet',
    brand: 'Maruti Suzuki',
    model: 'Baleno',
    variant: 'Alpha 1.2 DualJet Smart Hybrid',
    year: 2021,
    price: 685000,
    originalPrice: 720000,
    emiStarting: 12600,
    kilometers: 31200,
    fuelType: 'Petrol',
    transmission: 'Manual',
    bodyType: 'Hatchback',
    owner: '1st Owner',
    rto: 'KA-20 (Kundapura RTO)',
    hubLocation: 'Kundapura NH 66 Highway Hub',
    color: 'Nexa Blue',
    isAssured: true,
    featured: false,
    trending: true,
    tags: ['Low Maintenance', '23.8 kmpl Mileage', 'SmartPlay Studio', 'UV Cut Glass'],
    inspectionScore: 9.8,
    inspectionSummary: {
      engineTransmission: {
        title: '1.2L K12N DualJet Engine & 5MT',
        score: '10/10',
        checksTotal: 48,
        checksPassed: 48,
        status: 'passed',
        highlights: ['Smart hybrid idle start-stop smooth', 'Clutch bite point optimal at 40%', 'Super fuel-efficient']
      },
      steeringSuspension: {
        title: 'Suspension & Braking',
        score: '9.7/10',
        checksTotal: 42,
        checksPassed: 42,
        status: 'passed',
        highlights: ['Front shock absorbers tested', 'Brake shoe and pad life > 80%', 'Light city steering']
      },
      bodyPaint: {
        title: 'Body & Paint Inspection',
        score: '9.8/10',
        checksTotal: 45,
        checksPassed: 45,
        status: 'passed',
        highlights: ['Glossy Nexa Blue body', 'No panel replacements', 'Clean chrome accents']
      },
      interiorElectricals: {
        title: 'SmartPlay Infotainment & Cabin',
        score: '9.9/10',
        checksTotal: 35,
        checksPassed: 35,
        status: 'passed',
        highlights: ['7-inch SmartPlay Pro tested', 'Keyless Push Button start', 'Auto-dimming IRVM working']
      },
      acTyres: {
        title: 'Automatic Climate Control & Tyres',
        score: '9.8/10',
        checksTotal: 30,
        checksPassed: 30,
        status: 'passed',
        highlights: ['Chilling AC with fast cabin cooling', 'Goodyear tyres 76% life', 'Clean spare wheel']
      }
    },
    features: [
      'SmartPlay Studio Touchscreen with Voice Commands',
      'UV Cut Solar Glass to reduce Coastal heat',
      'LED Projector Headlamps with DRLs',
      'Automatic Climate Control',
      'Push Button Engine Start/Stop',
      '16-inch Precision Cut Alloy Wheels',
      'Dual Front Airbags & ABS with EBD',
      'Rear Parking Camera with Dynamic Guidelines'
    ],
    specs: {
      engineCapacity: '1197 cc',
      maxPower: '89 bhp @ 6000 rpm',
      mileageARAI: '23.87 kmpl',
      seatingCapacity: 5,
      airbags: 2,
      bootSpace: '318 Litres',
      sunroof: 'No Sunroof',
      insuranceValidity: 'Comprehensive till Nov 2026',
      groundClearance: '170 mm',
      fuelTank: '37 Litres'
    },
    images: [
      'https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 'kc-swift-2022',
    title: '2022 Maruti Suzuki Swift ZXi+ Dual Tone',
    brand: 'Maruti Suzuki',
    model: 'Swift',
    variant: 'ZXi+ 1.2 DualJet 5-Speed Manual',
    year: 2022,
    price: 695000,
    originalPrice: 740000,
    emiStarting: 12800,
    kilometers: 22400,
    fuelType: 'Petrol',
    transmission: 'Manual',
    bodyType: 'Hatchback',
    owner: '1st Owner',
    rto: 'KA-20 (Kundapura / Udupi RTO)',
    hubLocation: 'Kundapura NH 66 Highway Hub',
    color: 'Solid Fire Red with Midnight Black Roof',
    isAssured: true,
    featured: false,
    trending: false,
    tags: ['Kundapura Origin', 'Single Owner', '23.2 kmpl', 'Cruise Control', 'Low Maintenance'],
    inspectionScore: 9.8,
    inspectionSummary: {
      engineTransmission: {
        title: '1.2L K-Series DualJet Engine',
        score: '9.9/10',
        checksTotal: 48,
        checksPassed: 48,
        status: 'passed',
        highlights: ['Peppy engine with instant revs', 'Smooth short-throw 5-speed shifter', 'Idle start-stop working']
      },
      steeringSuspension: {
        title: 'Sporty Suspension & Braking',
        score: '9.7/10',
        checksTotal: 42,
        checksPassed: 42,
        status: 'passed',
        highlights: ['Swift signature fun-to-drive handling', 'Brake pads at 84% life', 'Tight turning radius']
      },
      bodyPaint: {
        title: 'Dual Tone Red & Black Exterior',
        score: '9.8/10',
        checksTotal: 45,
        checksPassed: 45,
        status: 'passed',
        highlights: ['Factory Dual Tone paint', 'LED projector headlamps clean', 'No minor dents or marks']
      },
      interiorElectricals: {
        title: 'SmartPlay Studio & Cruise Control',
        score: '9.8/10',
        checksTotal: 35,
        checksPassed: 35,
        status: 'passed',
        highlights: ['Cruise control buttons responsive', 'Touchscreen infotainment verified', 'Keyless entry working']
      },
      acTyres: {
        title: 'Climate Control & Precision Cut Alloys',
        score: '9.8/10',
        checksTotal: 30,
        checksPassed: 30,
        status: 'passed',
        highlights: ['Chilling AC with fast cooling', '15-inch precision alloys with 80% tread life', 'Clean boot']
      }
    },
    features: [
      'Cruise Control for Relaxed Highway Driving',
      '7-inch SmartPlay Studio Touchscreen with Apple CarPlay / Android Auto',
      'LED Projector Headlamps with Signature DRLs',
      'Precision Cut Two-Tone Alloy Wheels',
      'Automatic Climate Control & Push Button Engine Start',
      'Electrically Foldable ORVMs with Turn Indicators',
      'Dual Airbags, ABS with EBD & ISOFIX Child Seat Mounts',
      'Free Karnataka RTO Transfer directly handled by Kundapura Cars'
    ],
    specs: {
      engineCapacity: '1197 cc',
      maxPower: '89 bhp @ 6000 rpm',
      mileageARAI: '23.20 kmpl',
      seatingCapacity: 5,
      airbags: 2,
      bootSpace: '268 Litres',
      sunroof: 'No Sunroof',
      insuranceValidity: 'Comprehensive till Oct 2026',
      groundClearance: '163 mm',
      fuelTank: '37 Litres'
    },
    images: [
      'https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 'kc-i20-2023',
    title: '2023 Hyundai i20 Asta (O) 1.0 Turbo DCT',
    brand: 'Hyundai',
    model: 'i20',
    variant: 'Asta (O) 1.0 Turbo Dual Clutch Automatic',
    year: 2023,
    price: 1045000,
    originalPrice: 1120000,
    emiStarting: 19300,
    kilometers: 19800,
    fuelType: 'Petrol',
    transmission: 'Automatic',
    bodyType: 'Hatchback',
    owner: '1st Owner',
    rto: 'KA-20 (Kundapura RTO)',
    hubLocation: 'Kundapura Beach Road Hub',
    color: 'Fiery Red with Black Roof',
    isAssured: true,
    featured: false,
    trending: true,
    tags: ['120 PS Turbo', 'Bose 7-Speaker Sound', 'Sunroof', 'Air Purifier', 'Single Owner'],
    inspectionScore: 9.9,
    inspectionSummary: {
      engineTransmission: {
        title: '1.0L Turbo GDi & 7-Speed DCT',
        score: '10/10',
        checksTotal: 48,
        checksPassed: 48,
        status: 'passed',
        highlights: ['0-100 in 9.9 seconds', 'Paddle shifters responsive on hilly ghat roads', 'Engine bay clean']
      },
      steeringSuspension: {
        title: 'Sporty Tuned Suspension & Brakes',
        score: '9.8/10',
        checksTotal: 42,
        checksPassed: 42,
        status: 'passed',
        highlights: ['Tight European chassis response', 'Front disc brake pads at 85%', 'Electronic stability control tested']
      },
      bodyPaint: {
        title: 'Sensuous Sportiness Body & Contrast Roof',
        score: '9.9/10',
        checksTotal: 45,
        checksPassed: 45,
        status: 'passed',
        highlights: ['Z-shaped LED taillights pristine', 'Fiery Red paint with zero scratches', 'Factory finish']
      },
      interiorElectricals: {
        title: '10.25-inch Touchscreen & Bose Subwoofer',
        score: '10/10',
        checksTotal: 35,
        checksPassed: 35,
        status: 'passed',
        highlights: ['Bose 7-Speaker sound system tested', 'Wireless phone charger active', 'Digital cluster clear']
      },
      acTyres: {
        title: 'Oxyboost Air Purifier AC & R16 Diamond Wheels',
        score: '9.8/10',
        checksTotal: 30,
        checksPassed: 30,
        status: 'passed',
        highlights: ['Air purifier with live AQI reading', 'Tyres at 80% tread life', 'Spare wheel verified']
      }
    },
    features: [
      '1.0L Turbo GDi 3-Cylinder Engine (120 PS / 172 Nm)',
      '7-Speed Dual Clutch Transmission with Paddle Shifters',
      'Electric Sunroof with One-Touch Operation',
      'Bose Premium 7-Speaker Audio System with Subwoofer',
      '10.25-inch HD Touchscreen Infotainment with Navigation',
      'Oxyboost Air Purifier with AQI Display',
      '6 Airbags & Electronic Stability Control (ESC)',
      'Bluelink Connected Car Suite with Remote Start'
    ],
    specs: {
      engineCapacity: '998 cc Turbo',
      maxPower: '118 bhp @ 6000 rpm',
      mileageARAI: '20.25 kmpl',
      seatingCapacity: 5,
      airbags: 6,
      bootSpace: '311 Litres',
      sunroof: 'Electric Sunroof',
      insuranceValidity: 'Comprehensive till Jun 2027',
      groundClearance: '170 mm',
      fuelTank: '37 Litres'
    },
    images: [
      'https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 'kc-altroz-2022',
    title: '2022 Tata Altroz XZ+ i-Turbo',
    brand: 'Tata',
    model: 'Altroz',
    variant: 'XZ+ 1.2L Turbocharged Petrol Manual',
    year: 2022,
    price: 795000,
    originalPrice: 850000,
    emiStarting: 14650,
    kilometers: 26500,
    fuelType: 'Petrol',
    transmission: 'Manual',
    bodyType: 'Hatchback',
    owner: '1st Owner',
    rto: 'KA-20 (Kundapura RTO)',
    hubLocation: 'Udupi - Kundapura Expressway Hub',
    color: 'High Street Gold / Opera Blue',
    isAssured: true,
    featured: false,
    trending: false,
    tags: ['5-Star GNCAP Safety', 'Harman Audio', '90° Door Opening', 'Leatherette Seats', 'Turbocharged'],
    inspectionScore: 9.8,
    inspectionSummary: {
      engineTransmission: {
        title: '1.2L i-Turbo 3-Cylinder & 5MT',
        score: '9.8/10',
        checksTotal: 48,
        checksPassed: 48,
        status: 'passed',
        highlights: ['Punchy 110 PS turbo engine', 'Clutch and gear shifts smooth', 'No exhaust smoke or residue']
      },
      steeringSuspension: {
        title: 'ALFA Architecture Chassis & Steering',
        score: '9.9/10',
        checksTotal: 42,
        checksPassed: 42,
        status: 'passed',
        highlights: ['Solid high-speed road manners', 'Corner stability control tested', 'Brakes at 82% life']
      },
      bodyPaint: {
        title: '5-Star GNCAP High Strength Steel Body',
        score: '10/10',
        checksTotal: 45,
        checksPassed: 45,
        status: 'passed',
        highlights: ['Heavy built doors with solid thud sound', 'Original metallic finish', 'Zero panel gaps']
      },
      interiorElectricals: {
        title: 'Harman 8-Speaker Sound & 7-inch TFT Cluster',
        score: '9.8/10',
        checksTotal: 35,
        checksPassed: 35,
        status: 'passed',
        highlights: ['Harman studio tuned acoustics', 'Digital instrument display tested', 'Ambient light working']
      },
      acTyres: {
        title: 'Xpress Cool Climate AC & 16-inch Laser Alloys',
        score: '9.7/10',
        checksTotal: 30,
        checksPassed: 30,
        status: 'passed',
        highlights: ['Xpress Cool feature brings cabin temp down in 60s', 'Tyres at 78% tread life', 'Good spare']
      }
    },
    features: [
      '5-Star Global NCAP Adult Safety Rating',
      '1.2L Revotron Turbo Petrol Engine (110 PS / 140 Nm)',
      '90-Degree Opening Doors for Effortless Ingress/Egress',
      'Harman 8-Speaker Acoustic Sound System',
      '7-inch Floating Touchscreen with Apple CarPlay & Android Auto',
      'Perforated Premium Leatherette Upholstery',
      'Automatic Headlamps & Rain Sensing Wipers',
      'Cruise Control & Xpress Cool AC Feature'
    ],
    specs: {
      engineCapacity: '1199 cc Turbo',
      maxPower: '108 bhp @ 5500 rpm',
      mileageARAI: '18.15 kmpl',
      seatingCapacity: 5,
      airbags: 2,
      bootSpace: '345 Litres',
      sunroof: 'No Sunroof',
      insuranceValidity: 'Comprehensive till Nov 2026',
      groundClearance: '165 mm',
      fuelTank: '37 Litres'
    },
    images: [
      'https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 'kc-polo-2021',
    title: '2021 Volkswagen Polo GT 1.0 TSI Automatic',
    brand: 'Volkswagen',
    model: 'Polo',
    variant: 'GT 1.0L TSI 6-Speed Torque Converter AT',
    year: 2021,
    price: 875000,
    originalPrice: 930000,
    emiStarting: 16150,
    kilometers: 29800,
    fuelType: 'Petrol',
    transmission: 'Automatic',
    bodyType: 'Hatchback',
    owner: '1st Owner',
    rto: 'KA-20 (Kundapura RTO)',
    hubLocation: 'Kundapura NH 66 Highway Hub',
    color: 'Flash Red',
    isAssured: true,
    featured: false,
    trending: true,
    tags: ['Legendary German Hatch', '110 PS Turbo', 'Cornering Stability', 'Single Owner', 'Collector Spec'],
    inspectionScore: 9.9,
    inspectionSummary: {
      engineTransmission: {
        title: '1.0L TSI Turbo & 6-Speed AT with Sport Mode',
        score: '10/10',
        checksTotal: 48,
        checksPassed: 48,
        status: 'passed',
        highlights: ['Legendary TSI punch from 1750 rpm', 'Quick automatic downshifts in S mode', 'Pristine German block']
      },
      steeringSuspension: {
        title: 'German Hot Hatch Suspension & Disc Brakes',
        score: '10/10',
        checksTotal: 42,
        checksPassed: 42,
        status: 'passed',
        highlights: ['Benchmark handling and steering precision', 'Braking distance superior', 'Suspension silent']
      },
      bodyPaint: {
        title: 'Hot Hatch Flash Red Paint & GT Badging',
        score: '9.9/10',
        checksTotal: 45,
        checksPassed: 45,
        status: 'passed',
        highlights: ['Original Flash Red with black rear spoiler', 'Laser seam welded roof', 'Zero body damage']
      },
      interiorElectricals: {
        title: 'GT Chequered Upholstery & Composition Media',
        score: '9.8/10',
        checksTotal: 35,
        checksPassed: 35,
        status: 'passed',
        highlights: ['Composition Media touchscreen with Apple CarPlay', 'Flat bottom GT steering with cruise control', 'Clean cluster']
      },
      acTyres: {
        title: 'Climatronic AC & 16-inch Portago Alloys',
        score: '9.8/10',
        checksTotal: 30,
        checksPassed: 30,
        status: 'passed',
        highlights: ['Automatic climate control ice cool', 'Continental tyres at 80% tread life', 'Clean spare']
      }
    },
    features: [
      '1.0L TSI 3-Cylinder Turbo Petrol Engine (110 PS / 175 Nm)',
      '6-Speed Automatic Transmission with Tiptronic Manual Mode',
      'GT Signature Black Rear Spoiler & Honeycomb Front Grille',
      'Flat Bottom Leather-Wrapped Steering Wheel with Cruise Control',
      'Composition Media Touchscreen with Apple CarPlay & Android Auto',
      'Climatronic Automatic Climate Control System',
      '16-inch Portago Dark Grey Alloy Wheels',
      'Electronic Stability Program (ESP) & Anti-Slip Regulation (ASR)'
    ],
    specs: {
      engineCapacity: '999 cc Turbo',
      maxPower: '108 bhp @ 5000 rpm',
      mileageARAI: '18.24 kmpl',
      seatingCapacity: 5,
      airbags: 2,
      bootSpace: '280 Litres',
      sunroof: 'No Sunroof',
      insuranceValidity: 'Comprehensive till Dec 2026',
      groundClearance: '168 mm',
      fuelTank: '45 Litres'
    },
    images: [
      'https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80'
    ]
  },

  // ==========================================
  // 4. MUV CATEGORY (5 CARS)
  // ==========================================
  {
    id: 'kc-innova-2021',
    title: '2021 Toyota Innova Crysta 2.4 ZX 7S Automatic',
    brand: 'Toyota',
    model: 'Innova Crysta',
    variant: '2.4 ZX 7-Seater Luxury Captain Seats AT',
    year: 2021,
    price: 2240000,
    originalPrice: 2380000,
    emiStarting: 41500,
    kilometers: 42000,
    fuelType: 'Diesel',
    transmission: 'Automatic',
    bodyType: 'MUV',
    owner: '1st Owner',
    rto: 'KA-20 (Kundapura RTO)',
    hubLocation: 'Udupi - Kundapura Expressway Hub',
    color: 'Super White',
    isAssured: true,
    featured: false,
    trending: true,
    tags: ['Bulletproof Reliability', 'Captain Seats', 'Single Owner', 'Full Toyota Service Record'],
    inspectionScore: 9.9,
    inspectionSummary: {
      engineTransmission: {
        title: 'Toyota 2.4L GD Turbo Diesel & 6-Speed Torque Converter',
        score: '10/10',
        checksTotal: 48,
        checksPassed: 48,
        status: 'passed',
        highlights: ['Runs like new (capable of 5,00,000 km)', 'Smooth torque converter transmission', 'Zero oil consumption']
      },
      steeringSuspension: {
        title: 'Heavy Duty Ladder Frame Suspension',
        score: '9.8/10',
        checksTotal: 42,
        checksPassed: 42,
        status: 'passed',
        highlights: ['Glide-over-bad-roads comfort', 'Heavy-duty brake rotors at 85%', 'Steering pump tested']
      },
      bodyPaint: {
        title: 'Body, Paint & Ladder Frame',
        score: '9.9/10',
        checksTotal: 45,
        checksPassed: 45,
        status: 'passed',
        highlights: ['Original Super White factory coat', 'Zero underbody damage', 'Pristine chrome accents']
      },
      interiorElectricals: {
        title: 'Executive Captain Seats & Dual AC',
        score: '9.9/10',
        checksTotal: 35,
        checksPassed: 35,
        status: 'passed',
        highlights: ['Middle row captain seats with fold-out tables', 'Roof ambient illumination', 'Power driver seat working']
      },
      acTyres: {
        title: 'Automatic Dual AC & Bridgestone Tyres',
        score: '9.8/10',
        checksTotal: 30,
        checksPassed: 30,
        status: 'passed',
        highlights: ['Independent rear AC cooling controls', '17-inch alloy wheels with 80% tread', 'Clean spare wheel']
      }
    },
    features: [
      'Middle Row Luxury Captain Seats with One-Touch Tumble & Armrests',
      '8-Way Power Adjustable Driver Seat',
      'Dual Auto Climate Control with Individual Roof Vents for all 3 Rows',
      'Eco & Power Drive Modes for Mileage or Instant Highway Overtakes',
      '7 Airbags, ABS, EBD, Brake Assist & Hill Start Assist',
      'Cruise Control & Touchscreen Infotainment with Apple CarPlay',
      '17-inch Diamond-Cut Alloy Wheels',
      'Complete Authorized Toyota Dealership Service History'
    ],
    specs: {
      engineCapacity: '2393 cc Diesel',
      maxPower: '148 bhp @ 3400 rpm',
      mileageARAI: '15.6 kmpl',
      seatingCapacity: 7,
      airbags: 7,
      bootSpace: '300 Litres (expandable to 784L)',
      sunroof: 'No Sunroof',
      insuranceValidity: 'Comprehensive till Oct 2026',
      groundClearance: '178 mm',
      fuelTank: '55 Litres'
    },
    images: [
      'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 'kc-ertiga-2022',
    title: '2022 Maruti Suzuki Ertiga ZXi+ 1.5 AT',
    brand: 'Maruti Suzuki',
    model: 'Ertiga',
    variant: 'ZXi+ 1.5 K15C Smart Hybrid 6-Speed Automatic',
    year: 2022,
    price: 1065000,
    originalPrice: 1140000,
    emiStarting: 19600,
    kilometers: 28000,
    fuelType: 'Petrol',
    transmission: 'Automatic',
    bodyType: 'MUV',
    owner: '1st Owner',
    rto: 'KA-20 (Kundapura RTO)',
    hubLocation: 'Kundapura NH 66 Highway Hub',
    color: 'Splendid Silver',
    isAssured: true,
    featured: false,
    trending: true,
    tags: ['7-Seater Family Car', 'Paddle Shifters', '20.3 kmpl Mileage', 'Smart Hybrid', 'Single Owner'],
    inspectionScore: 9.8,
    inspectionSummary: {
      engineTransmission: {
        title: '1.5L DualJet Smart Hybrid & 6-Speed AT',
        score: '9.9/10',
        checksTotal: 48,
        checksPassed: 48,
        status: 'passed',
        highlights: ['Paddle shifters for active overtakes', 'Smooth torque converter 6-speed AT', 'Zero vibration at idle']
      },
      steeringSuspension: {
        title: '7-Passenger Suspension & Braking',
        score: '9.8/10',
        checksTotal: 42,
        checksPassed: 42,
        status: 'passed',
        highlights: ['Comfortable ride with full passenger load', 'Brakes at 84% life', 'Tight 5.2m turning radius']
      },
      bodyPaint: {
        title: 'Silver Metallic Finish & Chrome Grille',
        score: '9.8/10',
        checksTotal: 45,
        checksPassed: 45,
        status: 'passed',
        highlights: ['Factory Splendid Silver paint intact', 'Chrome winged front grille pristine', 'Clean underbody']
      },
      interiorElectricals: {
        title: '7-inch SmartPlay Pro & 3-Row Air Vents',
        score: '9.8/10',
        checksTotal: 35,
        checksPassed: 35,
        status: 'passed',
        highlights: ['Roof mounted rear AC blower tested', 'SmartPlay Pro audio working', 'Cruise control responsive']
      },
      acTyres: {
        title: 'Dual AC Climate & 15-inch Two-Tone Alloys',
        score: '9.8/10',
        checksTotal: 30,
        checksPassed: 30,
        status: 'passed',
        highlights: ['Independent rear AC cooling', 'Bridgestone tyres at 78% tread life', 'Spare tyre clean']
      }
    },
    features: [
      'Spacious 7-Seater Cabin with Reclining 3rd Row Seats',
      '6-Speed Automatic Transmission with Steering Paddle Shifters',
      'Dual Battery Smart Hybrid Idle Start/Stop Technology',
      'Roof-Mounted Air Conditioning Vents for 2nd & 3rd Row',
      '7-inch SmartPlay Pro Touchscreen Infotainment System',
      'Cruise Control & Automatic Headlamps with Follow-Me-Home',
      '4 Airbags (Dual Front + Front Seat Side Airbags)',
      'Cooled Cup Holders in Center Console'
    ],
    specs: {
      engineCapacity: '1462 cc',
      maxPower: '102 bhp @ 6000 rpm',
      mileageARAI: '20.30 kmpl',
      seatingCapacity: 7,
      airbags: 4,
      bootSpace: '209 Litres (Expandable to 550L)',
      sunroof: 'No Sunroof',
      insuranceValidity: 'Comprehensive till Oct 2026',
      groundClearance: '180 mm',
      fuelTank: '45 Litres'
    },
    images: [
      'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 'kc-carens-2023',
    title: '2023 Kia Carens Luxury Plus 1.4 Turbo DCT',
    brand: 'Kia',
    model: 'Carens',
    variant: 'Luxury Plus 1.4 T-GDi 7-Seater Automatic',
    year: 2023,
    price: 1590000,
    originalPrice: 1680000,
    emiStarting: 29300,
    kilometers: 21500,
    fuelType: 'Petrol',
    transmission: 'Automatic',
    bodyType: 'MUV',
    owner: '1st Owner',
    rto: 'KA-20 (Kundapura RTO)',
    hubLocation: 'Kundapura Beach Road Hub',
    color: 'Imperial Blue Metallic',
    isAssured: true,
    featured: false,
    trending: true,
    tags: ['Ventilated Seats', 'Bose 8-Speaker', 'One-Touch Electric Tumble', 'Sunroof', '6 Airbags Standard'],
    inspectionScore: 9.9,
    inspectionSummary: {
      engineTransmission: {
        title: '1.4L Turbo GDi & 7-Speed Dual Clutch',
        score: '10/10',
        checksTotal: 48,
        checksPassed: 48,
        status: 'passed',
        highlights: ['Effortless 140 PS power for full family trips', 'Silky smooth DCT shifts', 'Clean exhaust test']
      },
      steeringSuspension: {
        title: 'Long Wheelbase Comfort Suspension',
        score: '9.8/10',
        checksTotal: 42,
        checksPassed: 42,
        status: 'passed',
        highlights: ['Longest wheelbase in segment delivers plush ride', 'All 4 disc brakes tested at 85%', 'Light power steering']
      },
      bodyPaint: {
        title: 'Imperial Blue Exterior & Star Map DRLs',
        score: '9.9/10',
        checksTotal: 45,
        checksPassed: 45,
        status: 'passed',
        highlights: ['Deep Imperial Blue gloss finish', 'Crown jewel LED headlamps pristine', 'Zero body dents']
      },
      interiorElectricals: {
        title: '10.25-inch Touchscreen & Electric Tumble Seats',
        score: '10/10',
        checksTotal: 35,
        checksPassed: 35,
        status: 'passed',
        highlights: ['One-touch electric tumble middle row verified', 'Bose audio tested', '64-color ambient light']
      },
      acTyres: {
        title: 'Roof AC Vents for all 3 Rows & 16-inch Crystal Alloys',
        score: '9.8/10',
        checksTotal: 30,
        checksPassed: 30,
        status: 'passed',
        highlights: ['Smart pure air purifier with virus protection', 'Tyres at 82% tread life', 'Clean spare']
      }
    },
    features: [
      'One-Touch Electric Tumble 2nd Row Seat for Instant 3rd Row Entry',
      'Front Ventilated Cooling Seats for Warm Coastal Drives',
      'Bose Premium 8-Speaker Audio System with Dynamic Speed Volume',
      '10.25-inch HD Touchscreen with Kia Connect & Navigation',
      'Electric Sunroof with Anti-Pinch Safety',
      'Smart Pure Air Purifier with Virus & Bacteria Protection',
      '6 Airbags, ESC, VSM, BAS & Hill Start Assist as Standard',
      'Retractable Cup Holders & Seatback Folding Tables'
    ],
    specs: {
      engineCapacity: '1353 cc Turbo',
      maxPower: '138 bhp @ 6000 rpm',
      mileageARAI: '16.5 kmpl',
      seatingCapacity: 7,
      airbags: 6,
      bootSpace: '216 Litres (Expandable to 645L)',
      sunroof: 'Electric Sunroof',
      insuranceValidity: 'Zero Dep till Aug 2027',
      groundClearance: '195 mm',
      fuelTank: '45 Litres'
    },
    images: [
      'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 'kc-hycross-2023',
    title: '2023 Toyota Innova Hycross ZX (O) Strong Hybrid',
    brand: 'Toyota',
    model: 'Innova Hycross',
    variant: 'ZX (O) 2.0L Self-Charging Hybrid e-CVT Ottoman',
    year: 2023,
    price: 2980000,
    originalPrice: 3150000,
    emiStarting: 55400,
    kilometers: 18900,
    fuelType: 'Hybrid',
    transmission: 'Automatic',
    bodyType: 'MUV',
    owner: '1st Owner',
    rto: 'KA-20 (Kundapura RTO)',
    hubLocation: 'Kundapura NH 66 Highway Hub',
    color: 'Blackish Ageha Glass Flake',
    isAssured: true,
    featured: true,
    trending: true,
    tags: ['23.24 kmpl Hybrid', 'Ottoman Captain Seats', 'Panoramic Sunroof', 'Toyota Safety Sense ADAS', 'Flagship MUV'],
    inspectionScore: 10.0,
    inspectionSummary: {
      engineTransmission: {
        title: '5th Gen 2.0L TNGA Strong Hybrid & e-Drive',
        score: '10/10',
        checksTotal: 48,
        checksPassed: 48,
        status: 'passed',
        highlights: ['184 bhp combined hybrid power', 'Instant EV drive silence in city traffic', 'Zero starter vibrations']
      },
      steeringSuspension: {
        title: 'TNGA-C Monocoque Platform & Electronic Steering',
        score: '10/10',
        checksTotal: 42,
        checksPassed: 42,
        status: 'passed',
        highlights: ['Car-like sedan ride quality replaces traditional ladder frame', 'Brakes at 90% life', 'Regenerative braking smooth']
      },
      bodyPaint: {
        title: 'Glass Flake Deep Pearl Finish & SUV Stance',
        score: '10/10',
        checksTotal: 45,
        checksPassed: 45,
        status: 'passed',
        highlights: ['Color changes under sunlight from deep green to black', 'Zero scratch marks', 'Factory paint depth verified']
      },
      interiorElectricals: {
        title: 'Powered Ottoman Seats, JBL 9-Speaker & ADAS',
        score: '10/10',
        checksTotal: 35,
        checksPassed: 35,
        status: 'passed',
        highlights: ['Powered leg rest Ottoman captain seats working', 'Panoramic roof tested', 'JBL audio studio quality']
      },
      acTyres: {
        title: 'Multi-Zone Climate AC & 18-inch Super Chrome Wheels',
        score: '9.9/10',
        checksTotal: 30,
        checksPassed: 30,
        status: 'passed',
        highlights: ['Multi-zone climate cooling directly from hybrid pack', 'Tyres at 85% tread life', 'TPMS sensor live']
      }
    },
    features: [
      'Powered Middle-Row Ottoman Captain Seats with Leg Rest & Recline',
      'Panoramic Sunroof with Mood Lighting & Electrochromic Glass',
      'Toyota Safety Sense (TSS 3.0) ADAS with Adaptive Cruise & Lane Keep',
      'JBL Premium 9-Speaker Audio System with Subwoofer',
      'Self-Charging Strong Hybrid Powertrain delivering 23.24 kmpl ARAI',
      '10.1-inch Floating Audio Display with Wireless Apple CarPlay',
      'Ventilated Front Seats & 8-Way Power Driver Seat with Memory',
      '8 Years / 1,60,000 km Toyota Hybrid Battery Warranty'
    ],
    specs: {
      engineCapacity: '1987 cc 4-Cyl Hybrid + Electric Motor',
      maxPower: '184 bhp Combined Power',
      mileageARAI: '23.24 kmpl',
      seatingCapacity: 7,
      airbags: 6,
      bootSpace: '300 Litres (Expandable to 991L)',
      sunroof: 'Panoramic Sunroof',
      insuranceValidity: 'Zero Dep till Apr 2027',
      groundClearance: '185 mm',
      fuelTank: '52 Litres'
    },
    images: [
      'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 'kc-rumion-2023',
    title: '2023 Toyota Rumion V Automatic',
    brand: 'Toyota',
    model: 'Rumion',
    variant: 'V 1.5L K-Series NeoDrive 6-Speed AT',
    year: 2023,
    price: 1240000,
    originalPrice: 1310000,
    emiStarting: 22800,
    kilometers: 15200,
    fuelType: 'Petrol',
    transmission: 'Automatic',
    bodyType: 'MUV',
    owner: '1st Owner',
    rto: 'KA-20 (Kundapura RTO)',
    hubLocation: 'Koteshwara Highway Yard',
    color: 'Rustic Brown Metallic',
    isAssured: true,
    featured: false,
    trending: false,
    tags: ['Toyota Reliability', '7-Seater', 'Paddle Shifters', 'Toyota i-Connect', 'Low KM'],
    inspectionScore: 9.9,
    inspectionSummary: {
      engineTransmission: {
        title: '1.5L K-Series Engine & 6-Speed AT with Paddle Shifters',
        score: '10/10',
        checksTotal: 48,
        checksPassed: 48,
        status: 'passed',
        highlights: ['Smooth city commuting and highway cruise', 'Automatic shifts with zero shift shock', 'Toyota certified']
      },
      steeringSuspension: {
        title: 'Suspension & Braking Dynamics',
        score: '9.8/10',
        checksTotal: 42,
        checksPassed: 42,
        status: 'passed',
        highlights: ['Supple coastal suspension setup', 'Brakes at 88% life', 'Electronic stability active']
      },
      bodyPaint: {
        title: 'Toyota Rustic Brown Finish & Chrome Elements',
        score: '9.9/10',
        checksTotal: 45,
        checksPassed: 45,
        status: 'passed',
        highlights: ['Pristine metallic brown paint coat', 'Signature Toyota chrome grille flawless', 'Zero scratches']
      },
      interiorElectricals: {
        title: '7-inch Smartplay Screen & Toyota i-Connect',
        score: '9.8/10',
        checksTotal: 35,
        checksPassed: 35,
        status: 'passed',
        highlights: ['Toyota i-Connect active', 'Steering paddle shifters tested', 'Push button start functional']
      },
      acTyres: {
        title: 'Roof Mounted AC & 15-inch Two Tone Alloys',
        score: '9.8/10',
        checksTotal: 30,
        checksPassed: 30,
        status: 'passed',
        highlights: ['Automatic climate control with rear roof blowers', 'Tyres 84% life remaining', 'Spare wheel unused']
      }
    },
    features: [
      '7-Seater Flexible Seating with Slide and Recline Function',
      'Toyota i-Connect Telematics with 55+ Smart Features',
      'Paddle Shifters for Manual Control of 6-Speed AT',
      '7-inch Smartplay Cast Audio with Wireless Apple CarPlay & Android Auto',
      'Roof Mounted Rear AC Vents for 2nd & 3rd Row Passengers',
      'Front Dual Airbags + Front Seat Side Airbags (4 Airbags)',
      'Engine Push Start/Stop with Smart Keyless Entry',
      'Toyota 3-Year / 1,00,000 km Standard Warranty Transferrable'
    ],
    specs: {
      engineCapacity: '1462 cc',
      maxPower: '102 bhp @ 6000 rpm',
      mileageARAI: '20.11 kmpl',
      seatingCapacity: 7,
      airbags: 4,
      bootSpace: '209 Litres (Expandable to 550L)',
      sunroof: 'No Sunroof',
      insuranceValidity: 'Comprehensive till Sep 2026',
      groundClearance: '180 mm',
      fuelTank: '45 Litres'
    },
    images: [
      'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80'
    ]
  },

  // ==========================================
  // 5. LUXURY CATEGORY (5 CARS)
  // ==========================================
  {
    id: 'kc-bmw-330i-2021',
    title: '2021 BMW 3 Series 330i M Sport',
    brand: 'BMW',
    model: '3 Series',
    variant: '330i M Sport 2.0L TwinPower Turbo',
    year: 2021,
    price: 3650000,
    originalPrice: 3890000,
    emiStarting: 67800,
    kilometers: 26000,
    fuelType: 'Petrol',
    transmission: 'Automatic',
    bodyType: 'Luxury',
    owner: '1st Owner',
    rto: 'KA-20 (Kundapura RTO)',
    hubLocation: 'Kundapura NH 66 Highway Hub',
    color: 'Portimao Blue Metallic',
    isAssured: true,
    featured: true,
    trending: true,
    tags: ['255 bhp Pure Power', 'M Sport Package', 'Harman Kardon', 'Laser Lights', 'Single Owner'],
    inspectionScore: 10.0,
    inspectionSummary: {
      engineTransmission: {
        title: 'B48 2.0L TwinPower Turbo & ZF 8-Speed Steptronic',
        score: '10/10',
        checksTotal: 48,
        checksPassed: 48,
        status: 'passed',
        highlights: ['0-100 km/h in 5.8 seconds tested', 'ZF transmission sport calibration perfect', 'Pristine Bavarian engineering']
      },
      steeringSuspension: {
        title: '50:50 Weight Distribution & M Sport Suspension',
        score: '10/10',
        checksTotal: 42,
        checksPassed: 42,
        status: 'passed',
        highlights: ['Variable Sport Steering responsive', 'M Sport upgraded brakes at 90% life', 'Cornering stability pristine']
      },
      bodyPaint: {
        title: 'Portimao Blue Paint & M Aerodynamic Kit',
        score: '10/10',
        checksTotal: 45,
        checksPassed: 45,
        status: 'passed',
        highlights: ['Ceramic coating protected finish', 'Zero rock chips or scratches', 'BMW Laserlight headlights clear']
      },
      interiorElectricals: {
        title: 'Live Cockpit Professional & Harman Kardon',
        score: '10/10',
        checksTotal: 35,
        checksPassed: 35,
        status: 'passed',
        highlights: ['16-Speaker Harman Kardon 464W sound system', 'Wireless Apple CarPlay & Gesture Control', 'Vernasca leather pristine']
      },
      acTyres: {
        title: '3-Zone Climate Control & Michelin Pilot Sport 4',
        score: '9.9/10',
        checksTotal: 30,
        checksPassed: 30,
        status: 'passed',
        highlights: ['Michelin Pilot Sport 4 tyres with 84% life', '3-zone climate control ice cold', 'M 18-inch Bicolour alloys pristine']
      }
    },
    features: [
      '2.0L 4-Cylinder BMW TwinPower Turbo (255 bhp / 400 Nm)',
      'ZF 8-Speed Steptronic Sport Automatic Transmission with Launch Control',
      'BMW Live Cockpit Professional with 12.3-inch Digital Cluster & 10.25-inch Display',
      'Harman Kardon Surround Sound System with 16 Speakers & 464W Amplifier',
      'BMW Laserlight Headlights with High-Beam Assistant (500m throw)',
      'M Sport Aerodynamics Package with M Steering Wheel & Anthracite Headliner',
      'Vernasca Leather Sport Seats with Memory Function',
      'Park Assistant Plus with Reversing Assistant (auto backs up 50m)'
    ],
    specs: {
      engineCapacity: '1998 cc Turbo',
      maxPower: '255 bhp @ 5000 rpm (0-100 in 5.8s)',
      mileageARAI: '16.13 kmpl',
      seatingCapacity: 5,
      airbags: 6,
      bootSpace: '480 Litres',
      sunroof: 'Electric Glass Sunroof',
      insuranceValidity: 'Comprehensive till Dec 2026',
      groundClearance: '136 mm',
      fuelTank: '59 Litres'
    },
    images: [
      'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 'kc-c200-2022',
    title: '2022 Mercedes-Benz C-Class C200 Progressive',
    brand: 'Mercedes-Benz',
    model: 'C-Class',
    variant: 'C200 Progressive Mild-Hybrid 9G-TRONIC',
    year: 2022,
    price: 4250000,
    originalPrice: 4500000,
    emiStarting: 78900,
    kilometers: 19500,
    fuelType: 'Petrol',
    transmission: 'Automatic',
    bodyType: 'Luxury',
    owner: '1st Owner',
    rto: 'KA-20 (Kundapura RTO)',
    hubLocation: 'Kundapura Beach Road Hub',
    color: 'Obsidian Black Metallic',
    isAssured: true,
    featured: true,
    trending: true,
    tags: ['Baby S-Class', '11.9-inch Portrait Screen', 'Burmester 3D', 'EQ Boost', 'Under MB Warranty'],
    inspectionScore: 10.0,
    inspectionSummary: {
      engineTransmission: {
        title: '1.5L Turbo + 48V Integrated Starter Generator & 9G-TRONIC',
        score: '10/10',
        checksTotal: 48,
        checksPassed: 48,
        status: 'passed',
        highlights: ['204 bhp + 20 bhp EQ Boost instant surge', '9G-TRONIC 9-speed automatic silky shifts', 'Zero engine residue']
      },
      steeringSuspension: {
        title: 'Agility Control Suspension & Adaptive Damping',
        score: '10/10',
        checksTotal: 42,
        checksPassed: 42,
        status: 'passed',
        highlights: ['Supremely serene cabin noise isolation', 'Brake calipers and pads at 90% life', 'High-speed composure']
      },
      bodyPaint: {
        title: 'Obsidian Black Metallic & Star Pattern Grille',
        score: '10/10',
        checksTotal: 45,
        checksPassed: 45,
        status: 'passed',
        highlights: ['Deep obsidian glass shine', 'High performance LED headlamps pristine', 'Zero imperfections']
      },
      interiorElectricals: {
        title: '11.9-inch MBUX Portrait Screen & Burmester 3D Sound',
        score: '10/10',
        checksTotal: 35,
        checksPassed: 35,
        status: 'passed',
        highlights: ['15-Speaker 710W Burmester 3D audio tested', 'Fingerprint scanner biometric authentication', '64-color ambient light']
      },
      acTyres: {
        title: 'Thermatic Dual Zone AC & Pirelli Cinturato Tyres',
        score: '9.9/10',
        checksTotal: 30,
        checksPassed: 30,
        status: 'passed',
        highlights: ['Thermatic AC cools rapidly with HEPA air filter', 'Pirelli run-flat tyres at 85% life', '17-inch 5-spoke alloys clean']
      }
    },
    features: [
      '11.9-inch Centrally Mounted High-Res Portrait Touchscreen with NTG7 MBUX',
      'Burmester 3D Surround Sound System with 15 Speakers (710 Watts)',
      '48V EQ Boost Integrated Starter Generator (+200 Nm torque boost)',
      'Panoramic Sliding Glass Sunroof with Rain Sensor Closure',
      'Biometric Fingerprint Scanner for Driver Profile Customization',
      'Active Brake Assist with Pedestrian Detection & Attention Assist',
      'ARTICO Leather Upholstery with Memory Electric Front Seats',
      'Mercedes-Benz Complete Star Care Package Valid till 2027'
    ],
    specs: {
      engineCapacity: '1496 cc Turbo + EQ Boost',
      maxPower: '201 bhp @ 5800 rpm',
      mileageARAI: '16.90 kmpl',
      seatingCapacity: 5,
      airbags: 7,
      bootSpace: '455 Litres',
      sunroof: 'Panoramic Sunroof',
      insuranceValidity: 'Zero Dep till Sep 2027',
      groundClearance: '140 mm',
      fuelTank: '66 Litres'
    },
    images: [
      'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 'kc-a4-2022',
    title: '2022 Audi A4 40 TFSI Technology',
    brand: 'Audi',
    model: 'A4',
    variant: '40 TFSI Technology 2.0L Turbo S-Tronic',
    year: 2022,
    price: 3490000,
    originalPrice: 3750000,
    emiStarting: 64800,
    kilometers: 24000,
    fuelType: 'Petrol',
    transmission: 'Automatic',
    bodyType: 'Luxury',
    owner: '1st Owner',
    rto: 'KA-20 (Kundapura RTO)',
    hubLocation: 'Kundapura NH 66 Highway Hub',
    color: 'Ibis White',
    isAssured: true,
    featured: false,
    trending: true,
    tags: ['190 bhp Turbo', 'Virtual Cockpit Plus', 'Bang & Olufsen 3D', 'Matrix LED', 'Single Owner'],
    inspectionScore: 9.9,
    inspectionSummary: {
      engineTransmission: {
        title: '2.0L TFSI Turbo & 7-Speed S-Tronic Dual Clutch',
        score: '10/10',
        checksTotal: 48,
        checksPassed: 48,
        status: 'passed',
        highlights: ['0-100 in 7.3s with effortless overtaking punch', 'S-Tronic dual clutch transmission tested', 'Engine bay in showroom condition']
      },
      steeringSuspension: {
        title: 'Comfort Heavy Duty Suspension & Progressive Steering',
        score: '9.9/10',
        checksTotal: 42,
        checksPassed: 42,
        status: 'passed',
        highlights: ['Supremely comfortable suspension tuned for Indian roads', 'Brakes at 86% life', 'Rock solid highway tracking']
      },
      bodyPaint: {
        title: 'Ibis White Paint & Matrix LED Headlamps',
        score: '9.9/10',
        checksTotal: 45,
        checksPassed: 45,
        status: 'passed',
        highlights: ['Audi Matrix LED headlamps with dynamic turn indicators', 'Original factory paint coat', 'Zero scratches']
      },
      interiorElectricals: {
        title: 'Audi Virtual Cockpit Plus & B&O 3D Sound',
        score: '10/10',
        checksTotal: 35,
        checksPassed: 35,
        status: 'passed',
        highlights: ['19-Speaker 755W Bang & Olufsen 3D sound system tested', '12.3-inch Virtual Cockpit navigation display', 'Wireless charging']
      },
      acTyres: {
        title: '3-Zone Deluxe AC & 17-inch 5-Arm Alloys',
        score: '9.8/10',
        checksTotal: 30,
        checksPassed: 30,
        status: 'passed',
        highlights: ['3-Zone automatic climate control tested', 'Michelin tyres at 82% tread life', 'Clean spare wheel']
      }
    },
    features: [
      '2.0L 4-Cylinder TFSI Turbo Petrol (190 bhp / 320 Nm)',
      '7-Speed S-Tronic Dual Clutch Automatic Transmission',
      'Audi Virtual Cockpit Plus with Full HD Google 3D Navigation Display',
      'Bang & Olufsen 3D Premium Sound System with 19 Speakers (755W)',
      'Audi Matrix LED Headlights with Dynamic Indicators & Welcome Staging',
      'Audi Drive Select with 5 Modes (Efficiency, Comfort, Auto, Dynamic, Individual)',
      'Park Assist with 360-Degree Camera & Auto Steering Entry',
      '8 Airbags & Audi Pre-Sense Safety System'
    ],
    specs: {
      engineCapacity: '1984 cc Turbo',
      maxPower: '188 bhp @ 4200 rpm',
      mileageARAI: '17.42 kmpl',
      seatingCapacity: 5,
      airbags: 8,
      bootSpace: '460 Litres',
      sunroof: 'Electric Glass Sunroof',
      insuranceValidity: 'Comprehensive till Oct 2026',
      groundClearance: '145 mm',
      fuelTank: '54 Litres'
    },
    images: [
      'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 'kc-x1-2022',
    title: '2022 BMW X1 sDrive20d M Sport',
    brand: 'BMW',
    model: 'X1',
    variant: 'sDrive20d M Sport 2.0L Turbo Diesel Steptronic',
    year: 2022,
    price: 3280000,
    originalPrice: 3490000,
    emiStarting: 60900,
    kilometers: 27500,
    fuelType: 'Diesel',
    transmission: 'Automatic',
    bodyType: 'Luxury',
    owner: '1st Owner',
    rto: 'KA-20 (Kundapura RTO)',
    hubLocation: 'Koteshwara Highway Yard',
    color: 'Storm Bay Metallic',
    isAssured: true,
    featured: false,
    trending: true,
    tags: ['190 bhp Diesel', 'M Sport Body Kit', 'Panoramic Sunroof', '19.6 kmpl Mileage', 'Single Owner'],
    inspectionScore: 9.9,
    inspectionSummary: {
      engineTransmission: {
        title: '2.0L TwinPower Turbo Diesel & 8-Speed Steptronic',
        score: '10/10',
        checksTotal: 48,
        checksPassed: 48,
        status: 'passed',
        highlights: ['Massive 400 Nm torque pulls effortlessly on Western Ghat highways', '8-speed gearbox flawless', 'Zero oil leaks']
      },
      steeringSuspension: {
        title: 'M Sport Suspension & Variable Assist Steering',
        score: '9.8/10',
        checksTotal: 42,
        checksPassed: 42,
        status: 'passed',
        highlights: ['High-speed SUV roadholding', 'M Sport brakes at 85% life', 'Suspension links tight']
      },
      bodyPaint: {
        title: 'Storm Bay Grey Paint & Shadow Line Gloss',
        score: '9.9/10',
        checksTotal: 45,
        checksPassed: 45,
        status: 'passed',
        highlights: ['M Aerodynamics front and rear bumpers pristine', 'LED headlights with cornering lights clean', 'Factory coat']
      },
      interiorElectricals: {
        title: '8.8-inch iDrive & Panoramic Glass Roof',
        score: '9.9/10',
        checksTotal: 35,
        checksPassed: 35,
        status: 'passed',
        highlights: ['Panoramic sunroof fully functional', 'Sensatec sport seats with memory verified', 'Wireless Apple CarPlay']
      },
      acTyres: {
        title: '2-Zone AC & 18-inch M Double Spoke Alloys',
        score: '9.8/10',
        checksTotal: 30,
        checksPassed: 30,
        status: 'passed',
        highlights: ['2-Zone climate control chilled to 5.5°C', 'Bridgestone Turanza tyres at 80% life', 'Clean spare tyre']
      }
    },
    features: [
      '2.0L BMW TwinPower Turbo 4-Cylinder Diesel (190 bhp / 400 Nm)',
      '8-Speed Steptronic Automatic Transmission with Paddle Shifters',
      'Panorama Glass Roof with Electric Slide and Sunblind',
      'M Sport Aerodynamic Body Styling with High-Gloss Shadowline',
      'BMW iDrive Touch Infotainment with Wireless Apple CarPlay',
      'BMW Head-Up Display (HUD) & Parking Assistant with Rear Camera',
      'Sensatec Perforated Sport Seats with Electric Memory',
      '6 Airbags, Dynamic Traction Control (DTC) & Cornering Brake Control (CBC)'
    ],
    specs: {
      engineCapacity: '1995 cc Diesel Turbo',
      maxPower: '188 bhp @ 4000 rpm',
      mileageARAI: '19.62 kmpl',
      seatingCapacity: 5,
      airbags: 6,
      bootSpace: '505 Litres',
      sunroof: 'Panoramic Sunroof',
      insuranceValidity: 'Comprehensive till Nov 2026',
      groundClearance: '183 mm',
      fuelTank: '51 Litres'
    },
    images: [
      'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 'kc-gla-2022',
    title: '2022 Mercedes-Benz GLA 200 Progressive',
    brand: 'Mercedes-Benz',
    model: 'GLA',
    variant: 'GLA 200 1.3L Turbo 7G-DCT Progressive Line',
    year: 2022,
    price: 3540000,
    originalPrice: 3790000,
    emiStarting: 65700,
    kilometers: 22100,
    fuelType: 'Petrol',
    transmission: 'Automatic',
    bodyType: 'Luxury',
    owner: '1st Owner',
    rto: 'KA-20 (Kundapura RTO)',
    hubLocation: 'Kundapura Beach Road Hub',
    color: 'Polar White',
    isAssured: true,
    featured: false,
    trending: false,
    tags: ['Panoramic Sunroof', 'Dual 10.25-inch MBUX Screens', 'Wireless CarPlay', 'LED High Performance', 'Single Owner'],
    inspectionScore: 9.9,
    inspectionSummary: {
      engineTransmission: {
        title: '1.33L Turbo Engine with Cylinder Shut-off & 7G-DCT',
        score: '10/10',
        checksTotal: 48,
        checksPassed: 48,
        status: 'passed',
        highlights: ['163 bhp turbocharged power with quick spool', '7G-DCT transmission shifts smoothly', 'Zero diagnostic faults']
      },
      steeringSuspension: {
        title: 'Comfort Heavy Duty SUV Suspension & Steering',
        score: '9.8/10',
        checksTotal: 42,
        checksPassed: 42,
        status: 'passed',
        highlights: ['183mm ground clearance glides over road bumps', 'Brakes at 84% life', 'Direct-steer system calibrated']
      },
      bodyPaint: {
        title: 'Polar White Paint & Chrome SUV Skid Plates',
        score: '9.9/10',
        checksTotal: 45,
        checksPassed: 45,
        status: 'passed',
        highlights: ['Original Polar White factory finish', 'LED High Performance headlamps with DRLs clean', 'No scratches']
      },
      interiorElectricals: {
        title: 'Dual 10.25-inch Widescreen Cockpit & "Hey Mercedes"',
        score: '10/10',
        checksTotal: 35,
        checksPassed: 35,
        status: 'passed',
        highlights: ['Voice activated "Hey Mercedes" AI tested', 'Wireless phone charging tested', '64-color ambient lighting']
      },
      acTyres: {
        title: 'Thermotronic AC & 18-inch 5-Twin Spoke Alloys',
        score: '9.8/10',
        checksTotal: 30,
        checksPassed: 30,
        status: 'passed',
        highlights: ['Turbine style AC vents chill cabin rapidly', 'Bridgestone tyres at 80% life', 'Clean spare tyre']
      }
    },
    features: [
      'Dual 10.25-inch Widescreen Digital Cockpit & Media Display',
      'Panoramic Sliding Sunroof with Dual Stage Sunblind',
      'MBUX Voice Control AI with Natural Speech Recognition ("Hey Mercedes")',
      'LED High Performance Headlights with Adaptive Highbeam Assist',
      'Front Memory Seats with Lumbar Adjustment & ARTICO Leather',
      'Active Braking Assist, Blind Spot Assist & Attention Assist',
      '18-inch 5-Twin Spoke Light Alloy Wheels',
      '7 Airbags, Pre-Safe System & Tyre Pressure Loss Warning'
    ],
    specs: {
      engineCapacity: '1332 cc Turbo',
      maxPower: '161 bhp @ 5500 rpm',
      mileageARAI: '17.40 kmpl',
      seatingCapacity: 5,
      airbags: 7,
      bootSpace: '425 Litres',
      sunroof: 'Panoramic Sunroof',
      insuranceValidity: 'Comprehensive till Dec 2026',
      groundClearance: '183 mm',
      fuelTank: '43 Litres'
    },
    images: [
      'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80'
    ]
  },

  // ==========================================
  // 6. EV CATEGORY (5 CARS)
  // ==========================================
  {
    id: 'kc-nexon-ev-2023',
    title: '2023 Tata Nexon EV Max Fearless+ 40.5 kWh',
    brand: 'Tata',
    model: 'Nexon EV',
    variant: 'Max Fearless+ (437 km Long Range)',
    year: 2023,
    price: 1395000,
    originalPrice: 1480000,
    emiStarting: 25600,
    kilometers: 19800,
    fuelType: 'Electric',
    transmission: 'Automatic',
    bodyType: 'EV',
    owner: '1st Owner',
    rto: 'KA-20 (Kundapura RTO)',
    hubLocation: 'Koteshwara Highway Yard',
    color: 'Intensi-Teal / Pristine White',
    isAssured: true,
    featured: true,
    trending: true,
    tags: ['Zero Emission', '8 Yr Battery Warranty', '437 km Range', 'Ventilated Seats', 'Fast Charging'],
    inspectionScore: 10.0,
    inspectionSummary: {
      engineTransmission: {
        title: 'Permanent Magnet Motor & Battery Pack',
        score: '10/10',
        checksTotal: 48,
        checksPassed: 48,
        status: 'passed',
        highlights: ['Battery State of Health (SOH) at 98.4%', 'Fast DC charging tested on 50kW charger', 'Instant single-speed torque']
      },
      steeringSuspension: {
        title: 'Electronic Steering & Regen Braking',
        score: '10/10',
        checksTotal: 42,
        checksPassed: 42,
        status: 'passed',
        highlights: ['Multi-mode regenerative braking fully active', '4-wheel disc brakes with 90% pad life', 'Smooth low-speed glide']
      },
      bodyPaint: {
        title: 'High Strength Structure & Body',
        score: '10/10',
        checksTotal: 45,
        checksPassed: 45,
        status: 'passed',
        highlights: ['5-Star GNCAP structure', 'IP67 waterproof battery compartment verified', 'Original finish']
      },
      interiorElectricals: {
        title: '10.25-inch Cinematic Screen & Cabin',
        score: '10/10',
        checksTotal: 35,
        checksPassed: 35,
        status: 'passed',
        highlights: ['Wireless Apple CarPlay / Android Auto', 'Air purifier with AQI readout', 'Jeweled gear selector']
      },
      acTyres: {
        title: 'AC with Pre-cooling & EV Tyres',
        score: '10/10',
        checksTotal: 30,
        checksPassed: 30,
        status: 'passed',
        highlights: ['Low rolling resistance tyres 85% life', 'Remote AC on via ZConnect app', 'Full diagnostic pass']
      }
    },
    features: [
      '40.5 kWh High Energy Density Lithium-ion Battery',
      '437 km Certified ARAI Range on Single Charge',
      'Multi-mode Regenerative Braking with Paddle Shifters',
      'Front Ventilated Seats for Coastal Summers',
      'Electric Sunroof with Tilt Function',
      'Wireless Smartphone Fast Charger',
      'Air Purifier with AQI Real-time Display',
      '8 Years / 1,60,000 km Tata Battery & Motor Warranty'
    ],
    specs: {
      engineCapacity: '143 PS / 250 Nm EV Motor',
      maxPower: '141 bhp Electric Instant Torque',
      mileageARAI: '437 km / full charge',
      seatingCapacity: 5,
      airbags: 6,
      bootSpace: '350 Litres',
      sunroof: 'Electric Sunroof',
      insuranceValidity: 'Comprehensive till Dec 2026',
      groundClearance: '190 mm',
      fuelTank: '40.5 kWh Battery'
    },
    images: [
      'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 'kc-tiago-ev-2023',
    title: '2023 Tata Tiago EV XZ+ Tech LUX 24 kWh',
    brand: 'Tata',
    model: 'Tiago EV',
    variant: 'XZ+ Tech LUX Long Range (Fast Charging)',
    year: 2023,
    price: 845000,
    originalPrice: 890000,
    emiStarting: 15600,
    kilometers: 11200,
    fuelType: 'Electric',
    transmission: 'Automatic',
    bodyType: 'EV',
    owner: '1st Owner',
    rto: 'KA-20 (Kundapura / Udupi RTO)',
    hubLocation: 'Kundapura NH 66 Highway Hub',
    color: 'Teal Blue Metallic',
    isAssured: true,
    featured: false,
    trending: true,
    tags: ['Kundapura Origin', 'Zero Emission', '315 km Range', 'Single Owner', 'Under Warranty'],
    inspectionScore: 10.0,
    inspectionSummary: {
      engineTransmission: {
        title: 'Permanent Magnet Synchronous Motor & 24 kWh Pack',
        score: '10/10',
        checksTotal: 48,
        checksPassed: 48,
        status: 'passed',
        highlights: ['Battery SOH 99.2%', 'Fast DC charging tested on Karnataka EV network', 'Silent zippy commute']
      },
      steeringSuspension: {
        title: 'City Agility Steering & Suspension',
        score: '9.9/10',
        checksTotal: 42,
        checksPassed: 42,
        status: 'passed',
        highlights: ['Super light steering for city traffic', 'Brakes at 92% life', 'Low center of gravity']
      },
      bodyPaint: {
        title: 'Structure & Paint',
        score: '9.9/10',
        checksTotal: 45,
        checksPassed: 45,
        status: 'passed',
        highlights: ['Factory Teal Blue with contrast roof', '4-Star Global NCAP frame', 'IP67 motor rating']
      },
      interiorElectricals: {
        title: 'Harman 8-Speaker Audio & Leatherette',
        score: '10/10',
        checksTotal: 35,
        checksPassed: 35,
        status: 'passed',
        highlights: ['Harman premium audio system tuned', 'Connected car app ZConnect active', 'Cruise control working']
      },
      acTyres: {
        title: 'Automatic Climate Control & Tyres',
        score: '9.9/10',
        checksTotal: 30,
        checksPassed: 30,
        status: 'passed',
        highlights: ['AC cools rapidly with eco/sport modes', 'Tyres 88% tread life remaining', 'Inflator kit included']
      }
    },
    features: [
      '24 kWh Liquid-Cooled IP67 Lithium-ion Battery',
      '315 km ARAI Certified Driving Range',
      'Harman 8-Speaker High Fidelity Audio System',
      'ZConnect Smart Connected Vehicle Suite with 45+ features',
      'Multi-mode Regenerative Braking with 4 levels',
      'Leatherette Upholstery with Teal Accent Stitching',
      'DC Fast Charging: 10% to 80% in 57 minutes',
      '8 Years / 1,60,000 km Manufacturer Warranty on Battery'
    ],
    specs: {
      engineCapacity: '74 bhp / 114 Nm Electric Motor',
      maxPower: '74 bhp Instant Torque',
      mileageARAI: '315 km / charge',
      seatingCapacity: 5,
      airbags: 2,
      bootSpace: '240 Litres',
      sunroof: 'No Sunroof',
      insuranceValidity: 'Comprehensive till Oct 2026',
      groundClearance: '165 mm',
      fuelTank: '24 kWh Battery'
    },
    images: [
      'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 'kc-zsev-2023',
    title: '2023 MG ZS EV Exclusive Pro 50.3 kWh',
    brand: 'MG',
    model: 'ZS EV',
    variant: 'Exclusive Pro 50.3 kWh Long Range ADAS',
    year: 2023,
    price: 1790000,
    originalPrice: 1920000,
    emiStarting: 33100,
    kilometers: 16800,
    fuelType: 'Electric',
    transmission: 'Automatic',
    bodyType: 'EV',
    owner: '1st Owner',
    rto: 'KA-20 (Kundapura RTO)',
    hubLocation: 'Kundapura NH 66 Highway Hub',
    color: 'Current Red Metallic',
    isAssured: true,
    featured: false,
    trending: true,
    tags: ['461 km Range', 'ADAS Level 2', 'Panoramic Sunroof', '360 Camera', '8 Yr Battery Warranty'],
    inspectionScore: 10.0,
    inspectionSummary: {
      engineTransmission: {
        title: '176 PS Permanent Magnet Motor & 50.3 kWh Prismatic Battery',
        score: '10/10',
        checksTotal: 48,
        checksPassed: 48,
        status: 'passed',
        highlights: ['Battery SOH 99.1%', '0-100 in 8.5 seconds instant silent acceleration', 'IP69K battery enclosure']
      },
      steeringSuspension: {
        title: 'Electric Power Steering & 3-Level KERS Regen',
        score: '9.9/10',
        checksTotal: 42,
        checksPassed: 42,
        status: 'passed',
        highlights: ['3-level Kinetic Energy Recovery System (KERS) tested', '4-wheel disc brakes at 88%', 'Smooth highway ride']
      },
      bodyPaint: {
        title: 'Current Red Metallic & LED Hawkeye Headlamps',
        score: '10/10',
        checksTotal: 45,
        checksPassed: 45,
        status: 'passed',
        highlights: ['Aerodynamic closed-off front grille with hidden charging port', 'Paint thickness verified', 'Zero dents']
      },
      interiorElectricals: {
        title: '10.1-inch HD Touchscreen & ADAS Level 2 Radar',
        score: '10/10',
        checksTotal: 35,
        checksPassed: 35,
        status: 'passed',
        highlights: ['ADAS Lane Departure Warning & Blind Spot Detection working', 'Wireless smartphone charger active', '360 camera crystal clear']
      },
      acTyres: {
        title: 'PM 2.5 Filter AC & 17-inch Tomahawk Aero Alloys',
        score: '9.9/10',
        checksTotal: 30,
        checksPassed: 30,
        status: 'passed',
        highlights: ['Dual-zone climate AC with PM 2.5 air filtration', 'Low rolling resistance Michelin EV tyres 84% life', 'Clean boot']
      }
    },
    features: [
      '50.3 kWh Advanced Prismatic Cell Battery (461 km ARAI Range)',
      '176 PS / 280 Nm Instant Electric Torque',
      'ADAS Level 2 Autonomous Safety Features (Traffic Jam Assist, Lane Keep, AEB)',
      'Dual Pane Panoramic "Skyroof" (Largest in Class)',
      '360-Degree Surround View Camera with Dynamic Parking Guidelines',
      '10.1-inch HD Touchscreen with i-SMART 75+ Connected Features',
      '6-Way Power Adjustable Driver Seat & Digital Bluetooth Key',
      '8 Years / 1,60,000 km Battery Pack Warranty Transferrable'
    ],
    specs: {
      engineCapacity: '174 bhp Electric Motor',
      maxPower: '174 bhp Instant Torque',
      mileageARAI: '461 km / charge',
      seatingCapacity: 5,
      airbags: 6,
      bootSpace: '448 Litres',
      sunroof: 'Panoramic Skyroof',
      insuranceValidity: 'Zero Dep till Jul 2027',
      groundClearance: '177 mm',
      fuelTank: '50.3 kWh Battery'
    },
    images: [
      'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 'kc-xuv400-2023',
    title: '2023 Mahindra XUV400 EV EL Pro 39.4 kWh',
    brand: 'Mahindra',
    model: 'XUV400 EV',
    variant: 'EL Pro 39.4 kWh (456 km Range) Fast Charging',
    year: 2023,
    price: 1425000,
    originalPrice: 1530000,
    emiStarting: 26300,
    kilometers: 14200,
    fuelType: 'Electric',
    transmission: 'Automatic',
    bodyType: 'EV',
    owner: '1st Owner',
    rto: 'KA-20 (Kundapura RTO)',
    hubLocation: 'Kundapura Beach Road Hub',
    color: 'Napoli Black with Satin Copper Roof',
    isAssured: true,
    featured: false,
    trending: false,
    tags: ['0-100 in 8.3s', 'Satin Copper Styling', '456 km Range', 'Single Pedal Driving', 'Single Owner'],
    inspectionScore: 9.9,
    inspectionSummary: {
      engineTransmission: {
        title: '150 PS Synchronous Motor & 39.4 kWh IP67 Battery',
        score: '10/10',
        checksTotal: 48,
        checksPassed: 48,
        status: 'passed',
        highlights: ['0-100 km/h in 8.3 seconds tested', 'Battery SOH at 99.4%', 'DC fast charging port verified']
      },
      steeringSuspension: {
        title: '3-Drive Modes (Fun, Fast, Fearless) & Suspension',
        score: '9.9/10',
        checksTotal: 42,
        checksPassed: 42,
        status: 'passed',
        highlights: ['Fun / Fast / Fearless drive and steering modes tested', 'All 4 disc brakes at 88%', 'Solid ground clearance']
      },
      bodyPaint: {
        title: 'Napoli Black Body with Satin Copper Accents',
        score: '9.9/10',
        checksTotal: 45,
        checksPassed: 45,
        status: 'passed',
        highlights: ['Satin copper twin peaks logo & roof pristine', 'Factory paint shine 97%', 'Zero scratches']
      },
      interiorElectricals: {
        title: '10.25-inch Touchscreen & Wireless Android Auto',
        score: '9.9/10',
        checksTotal: 35,
        checksPassed: 35,
        status: 'passed',
        highlights: ['10.25-inch screen and digital instrument cluster clear', 'Single pedal "Lively" mode tested', 'Sunroof working']
      },
      acTyres: {
        title: 'Dual Zone Climate Control & 16-inch Diamond Wheels',
        score: '9.8/10',
        checksTotal: 30,
        checksPassed: 30,
        status: 'passed',
        highlights: ['Dual-zone climate control chills quickly', 'Tyres at 86% tread life', 'Inflator kit complete']
      }
    },
    features: [
      '39.4 kWh High Density Lithium-ion Battery with 456 km ARAI Range',
      '0 to 100 km/h in 8.3 Seconds (Fastest Indian EV Crossover)',
      '10.25-inch HD Touchscreen & 10.25-inch Digital Instrument Display',
      'Electric Sunroof with Anti-Pinch Technology',
      'Dual-Zone Automatic Climate Control with Rear Vents',
      'Wireless Apple CarPlay & Wireless Android Auto',
      '6 Airbags, All 4 Disc Brakes, ESP & Hill Hold Assist',
      '8 Years / 1,60,000 km Manufacturer Warranty on Battery & Motor'
    ],
    specs: {
      engineCapacity: '150 PS / 310 Nm Electric Motor',
      maxPower: '148 bhp Instant Torque',
      mileageARAI: '456 km / charge',
      seatingCapacity: 5,
      airbags: 6,
      bootSpace: '378 Litres',
      sunroof: 'Electric Sunroof',
      insuranceValidity: 'Comprehensive till Oct 2026',
      groundClearance: '200 mm',
      fuelTank: '39.4 kWh Battery'
    },
    images: [
      'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 'kc-atto3-2023',
    title: '2023 BYD Atto 3 Superior 60.48 kWh',
    brand: 'BYD',
    model: 'Atto 3',
    variant: 'Superior 60.48 kWh Blade Battery (521 km Range)',
    year: 2023,
    price: 2650000,
    originalPrice: 2890000,
    emiStarting: 49200,
    kilometers: 13500,
    fuelType: 'Electric',
    transmission: 'Automatic',
    bodyType: 'EV',
    owner: '1st Owner',
    rto: 'KA-20 (Kundapura RTO)',
    hubLocation: 'Udupi - Kundapura Expressway Hub',
    color: 'Bolder Grey Metallic',
    isAssured: true,
    featured: false,
    trending: true,
    tags: ['Ultra-Safe Blade Battery', '521 km Range', 'Rotating 12.8-inch Screen', 'ADAS Level 2', 'NFC Key Card'],
    inspectionScore: 10.0,
    inspectionSummary: {
      engineTransmission: {
        title: '204 PS Motor & BYD Blade Battery Pack (Passed Nail Penetration Test)',
        score: '10/10',
        checksTotal: 48,
        checksPassed: 48,
        status: 'passed',
        highlights: ['Battery SOH 99.6%', '0-100 in 7.3 seconds', 'World safest Blade Battery technology']
      },
      steeringSuspension: {
        title: 'Multi-Link Rear Suspension & ADAS Steering',
        score: '10/10',
        checksTotal: 42,
        checksPassed: 42,
        status: 'passed',
        highlights: ['Multi-link independent rear suspension glides over road imperfections', 'Brakes at 92%', 'ADAS lane center tested']
      },
      bodyPaint: {
        title: 'Dragon Face 3.0 Aerodynamic Stance',
        score: '10/10',
        checksTotal: 45,
        checksPassed: 45,
        status: 'passed',
        highlights: ['Bolder Grey finish with metallic flake', 'Full LED headlights and connecting rear lightbar clean', 'Zero defects']
      },
      interiorElectricals: {
        title: '12.8-inch Rotating Touchscreen & Guitar String Door Panels',
        score: '10/10',
        checksTotal: 35,
        checksPassed: 35,
        status: 'passed',
        highlights: ['Motorized rotating touchscreen (Landscape/Portrait) tested', 'Dirac HD 8-speaker sound tested', 'NFC card entry active']
      },
      acTyres: {
        title: 'Heat Pump Climate System & 18-inch Windmill Alloys',
        score: '10/10',
        checksTotal: 30,
        checksPassed: 30,
        status: 'passed',
        highlights: ['High-efficiency heat pump AC works seamlessly', 'Continental tyres at 88% tread life', 'Clean spare/puncture kit']
      }
    },
    features: [
      '60.48 kWh Ultra-Safe BYD Blade Battery (521 km ARAI Range)',
      '12.8-inch Motorized Electrically Rotating Touchscreen (Portrait & Landscape)',
      'Full ADAS Level 2 Suite (Adaptive Cruise with Stop & Go, AEB, Lane Departure)',
      'Panoramic Sunroof with Electric Sliding Shade',
      'NFC Key Card Unlocking & Mobile App Remote Climate Control',
      'Dirac HD 8-Speaker Immersive Audio System',
      'Vehicle-to-Load (V2L) Power Outlet to run external home appliances (3.3 kW)',
      '8 Years / 1,60,000 km Warranty on Blade Battery & Drive Motor'
    ],
    specs: {
      engineCapacity: '201 bhp / 310 Nm Electric Motor',
      maxPower: '201 bhp Instant Torque (0-100 in 7.3s)',
      mileageARAI: '521 km / charge',
      seatingCapacity: 5,
      airbags: 7,
      bootSpace: '440 Litres (Expandable to 1340L)',
      sunroof: 'Panoramic Sunroof',
      insuranceValidity: 'Zero Dep till Aug 2027',
      groundClearance: '175 mm',
      fuelTank: '60.48 kWh Battery'
    },
    images: [
      'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80'
    ]
  }
];

export const KUNDAPURA_HUBS = [
  {
    id: 'hub-kundapura-main',
    name: 'Kundapura NH 66 Highway Hub',
    address: 'Main NH 66 Highway Junction, Near Shastri Circle, Kundapura, Karnataka 576201',
    landmark: 'Near Shastri Circle & Kundapura KSRTC Bus Stand',
    timing: '9:00 AM - 8:30 PM (Open 7 Days)',
    phone: '+91 8254 233 440',
    carCount: '85+ Certified Cars in Stock',
    amenities: ['Customer Experience Lounge', 'Instant RTO Desk', 'EV Fast Charging Station', 'Free Valet Parking'],
    image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'hub-koteshwara',
    name: 'Koteshwara Highway Yard',
    address: 'NH 66 Bypass, Near Kotilingeshwara Temple Road, Koteshwara, Kundapura 576222',
    landmark: 'Opposite NH 66 Toll Plaza Junction',
    timing: '9:00 AM - 8:30 PM (Open 7 Days)',
    phone: '+91 8254 233 441',
    carCount: '65+ Certified Cars in Stock',
    amenities: ['VIP Consultation Suites', 'Coffee Bar', '360° Vehicle Inspection Bay', 'Finance Desks'],
    image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'hub-kodi-beach',
    name: 'Kundapura Beach Road Hub',
    address: 'Beach Road, Near Kodi Sea Walk & Lighthouse, Kundapura 576201',
    landmark: 'Near Kodi Beach Promenade',
    timing: '9:00 AM - 8:30 PM (Open 7 Days)',
    phone: '+91 8254 233 442',
    carCount: '90+ Certified Cars in Stock',
    amenities: ['Multi-Level Car Experience Yard', 'Dedicated EV Zone', 'Express Delivery Lounge'],
    image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'hub-udupi-expressway',
    name: 'Udupi - Kundapura Expressway Hub',
    address: 'Main Highway Road, Near Kalsanka Junction, Udupi - Kundapura Highway 576102',
    landmark: 'Direct Highway Access & Inspection Facility',
    timing: '9:00 AM - 8:30 PM (Open 7 Days)',
    phone: '+91 8254 233 443',
    carCount: '75+ Certified Cars in Stock',
    amenities: ['Highway Inspection Track', 'Doorstep Delivery Fleet Base', 'Insurance Counter'],
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'hub-byndoor',
    name: 'Byndoor Coastal Hub',
    address: 'NH 66 Bypass, Near Mookambika Road Junction, Byndoor, Kundapura 576214',
    landmark: 'Connecting Kollur & Coastal Highway',
    timing: '9:00 AM - 8:00 PM (Open 7 Days)',
    phone: '+91 8254 233 444',
    carCount: '45+ Handpicked Coastal Cars',
    amenities: ['Direct Coastal Transport Desk', 'Single Owner Verified Vehicles', 'Coastal Inspection Specialization'],
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80'
  }
];

export const BANGALORE_HUBS = KUNDAPURA_HUBS;

export const FAQ_ITEMS = [
  {
    question: 'How is Kundapura Assured different from regular used car dealers?',
    answer: 'Every Kundapura Cars vehicle passes an uncompromising 200-point rigorous technical inspection conducted by certified automotive engineers. We inspect everything from engine compression, chassis integrity, electronics, AC performance to brake wear. We offer a 1-Year Comprehensive Warranty, 5-Day Money-Back Guarantee with 100% refund, fixed non-negotiable transparent pricing with no hidden charges, and hassle-free free RC transfer across Kundapura & Karnataka RTOs.'
  },
  {
    question: 'Can I get doorstep delivery in Kundapura?',
    answer: 'Yes! You can reserve your car online and request doorstep delivery directly to your home or office anywhere across the Kundapura & Udupi region at your chosen date and time.'
  },
  {
    question: 'How does the 5-Day Money Back Guarantee work?',
    answer: 'Drive the car for 5 days or up to 300 km. If you feel it does not suit your lifestyle or preferences for any reason, return it to us and get a 100% full refund of your purchase amount with zero questions asked.'
  },
  {
    question: 'How does the ₹999 online reservation work?',
    answer: 'When you find your dream car, click "Reserve for ₹999". This instantly locks the car exclusively for you for 48 hours so nobody else can buy it while you finalize financing and paperwork. The ₹999 token is 100% refundable if you decide not to proceed.'
  },
  {
    question: 'Do you help with car loan financing and RC transfer in Kundapura?',
    answer: 'Absolutely. We have partnered with top banks (HDFC, ICICI, SBI, Axis, Canara Bank, Karnataka Bank) to offer instant loan approvals up to 90% financing at attractive interest rates starting from 8.5%. Our dedicated operations team manages the entire Karnataka RTO name transfer process and delivers the updated RC smartcard directly to your doorstep.'
  }
];
