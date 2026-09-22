import { Car } from '../types/car';

export const CARS_DATA: Car[] = [
  {
    id: 'kc-creta-2022',
    title: '2022 Hyundai Creta SX (O) Turbo DCT',
    brand: 'Hyundai',
    model: 'Creta',
    variant: 'SX (O) 1.4 Turbo Dual Clutch Automatic',
    year: 2022,
    price: 1545000,
    originalPrice: 1625000,
    emiStarting: 28450,
    kilometers: 23500,
    fuelType: 'Petrol',
    transmission: 'Automatic',
    bodyType: 'SUV',
    owner: '1st Owner',
    rto: 'KA-01 (Koramangala, Bangalore)',
    hubLocation: 'Koramangala 80ft Road Hub',
    color: 'Phantom Black',
    isAssured: true,
    featured: true,
    trending: true,
    tags: ['Single Owner', 'Panoramic Sunroof', 'Ventilated Seats', 'Bangalore RTO', 'Under Warranty'],
    inspectionScore: 9.9,
    inspectionSummary: {
      engineTransmission: {
        title: 'Engine & Dual Clutch Transmission',
        score: '10/10',
        checksTotal: 48,
        checksPassed: 48,
        status: 'passed',
        highlights: ['Smooth DCT shifts with zero delay', 'Turbo boost pressure verified', 'Zero oil leaks or residue']
      },
      steeringSuspension: {
        title: 'Steering, Suspension & Brakes',
        score: '9.8/10',
        checksTotal: 42,
        checksPassed: 42,
        status: 'passed',
        highlights: ['Disc brake pads at 85% life', 'Electronic power steering calibrated', 'Suspension bushings pristine']
      },
      bodyPaint: {
        title: 'Body, Frame & Paint Quality',
        score: '9.9/10',
        checksTotal: 45,
        checksPassed: 45,
        status: 'passed',
        highlights: ['Original factory paint', 'Zero structural frame repairs', 'Clean underbody coating']
      },
      interiorElectricals: {
        title: 'Interior, Infotainment & Airbags',
        score: '10/10',
        checksTotal: 35,
        checksPassed: 35,
        status: 'passed',
        highlights: ['10.25-inch touchscreen fully functional', 'Bose 8-speaker audio tested', 'Ventilated seat motors verified']
      },
      acTyres: {
        title: 'AC Climate Control & Tyres',
        score: '9.8/10',
        checksTotal: 30,
        checksPassed: 30,
        status: 'passed',
        highlights: ['AC vents cool to 6°C in 2 minutes', 'Bridgestone tyres with 78% tread life left', 'Spare tyre unused']
      }
    },
    features: [
      'Panoramic Sunroof',
      'Ventilated Front Seats',
      'Bose 8-Speaker Audio System',
      'Wireless Phone Charger',
      'Electronic Parking Brake with Auto Hold',
      '10.25-inch Touchscreen with Apple CarPlay & Android Auto',
      'Bluelink Connected Car Tech (Active)',
      '6 Airbags & Electronic Stability Control (ESC)'
    ],
    specs: {
      engineCapacity: '1353 cc',
      maxPower: '138 bhp @ 6000 rpm',
      mileageARAI: '16.8 kmpl',
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
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 'kc-thar-2023',
    title: '2023 Mahindra Thar LX 4x4 Hard Top Automatic',
    brand: 'Mahindra',
    model: 'Thar',
    variant: 'LX 2.2 mHawk 4WD Diesel AT',
    year: 2023,
    price: 1690000,
    originalPrice: 1780000,
    emiStarting: 31200,
    kilometers: 16200,
    fuelType: 'Diesel',
    transmission: 'Automatic',
    bodyType: 'SUV',
    owner: '1st Owner',
    rto: 'KA-03 (Indiranagar, Bangalore)',
    hubLocation: 'Indiranagar 100ft Road Hub',
    color: 'Rocky Beige / Deep Forest',
    isAssured: true,
    featured: true,
    trending: true,
    tags: ['4x4 Drivetrain', 'Hard Top', 'Low KM', 'Single Owner', 'Touchscreen'],
    inspectionScore: 9.8,
    inspectionSummary: {
      engineTransmission: {
        title: 'mHawk 2.2L Diesel & 6-Speed AT',
        score: '10/10',
        checksTotal: 48,
        checksPassed: 48,
        status: 'passed',
        highlights: ['4x4 Low & High transfer case shift verified', 'Diesel particulate filter clean', 'No engine noise or vibrations']
      },
      steeringSuspension: {
        title: 'Steering, Heavy Duty Suspension & Brakes',
        score: '9.7/10',
        checksTotal: 42,
        checksPassed: 42,
        status: 'passed',
        highlights: ['All terrain suspension links checked', 'Heavy-duty brake calipers tested', 'Hydraulic assist responsive']
      },
      bodyPaint: {
        title: 'Body, Frame & Underbody Shielding',
        score: '9.9/10',
        checksTotal: 45,
        checksPassed: 45,
        status: 'passed',
        highlights: ['Original factory clear coat', 'Factory hard top seals tight & water tested', 'Chassis rust-free']
      },
      interiorElectricals: {
        title: 'Drizzle-Resistant Interior & Electricals',
        score: '9.8/10',
        checksTotal: 35,
        checksPassed: 35,
        status: 'passed',
        highlights: ['Adventure stats gauges fully working', 'Apple CarPlay tested', 'Roof mounted speakers crystal clear']
      },
      acTyres: {
        title: 'AC & 18-inch Deep Tread All-Terrain Tyres',
        score: '9.8/10',
        checksTotal: 30,
        checksPassed: 30,
        status: 'passed',
        highlights: ['18-inch CEAT Czar A/T tyres 82% tread', 'AC blower and cooling flawless', 'Full size spare wheel verified']
      }
    },
    features: [
      'Shift-on-the-fly 4WD Low / High Gearbox',
      'Factory Fitted Molded Hard Top',
      '7-inch Touchscreen with Adventure Telemetry',
      'Electronic Stability Program (ESP) with Roll-over Mitigation',
      'Cruise Control & Steering Mounted Controls',
      'Roof Mounted Water-Resistant Speakers',
      '18-inch Deep Dish Diamond Cut Alloy Wheels',
      'Tyre Pressure Monitoring System (TPMS)'
    ],
    specs: {
      engineCapacity: '2184 cc',
      maxPower: '130 bhp @ 3750 rpm',
      mileageARAI: '15.2 kmpl',
      seatingCapacity: 4,
      airbags: 2,
      bootSpace: 'NA (Foldable Rear Seats)',
      sunroof: 'Hard Top',
      insuranceValidity: 'Zero Dep till May 2027',
      groundClearance: '226 mm',
      fuelTank: '57 Litres'
    },
    images: [
      'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=1200&q=80'
    ]
  },
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
    rto: 'KA-51 (Electronic City, Bangalore)',
    hubLocation: 'Whitefield Tech Park Hub',
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
      'Front Ventilated Seats for Bangalore Summers',
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
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80'
    ]
  },
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
    rto: 'KA-04 (Yeshwanthpur, Bangalore)',
    hubLocation: 'Hebbal Ring Road Hub',
    color: 'Radiant Red Metallic',
    isAssured: true,
    featured: true,
    trending: false,
    tags: ['Single Owner', 'Sunroof', 'LaneWatch Camera', 'Full Leather', 'KA-04 RTO'],
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
      'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80'
    ]
  },
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
    rto: 'KA-05 (Jayanagar, Bangalore)',
    hubLocation: 'Koramangala 80ft Road Hub',
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
      'UV Cut Solar Glass to reduce Bangalore heat',
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
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 'kc-xuv700-2022',
    title: '2022 Mahindra XUV700 AX7 Luxury Pack Diesel AT',
    brand: 'Mahindra',
    model: 'XUV700',
    variant: 'AX7 L 2.2 mHawk 7-Seater Automatic',
    year: 2022,
    price: 2190000,
    originalPrice: 2320000,
    emiStarting: 40500,
    kilometers: 32000,
    fuelType: 'Diesel',
    transmission: 'Automatic',
    bodyType: 'SUV',
    owner: '1st Owner',
    rto: 'KA-01 (Koramangala, Bangalore)',
    hubLocation: 'Whitefield Tech Park Hub',
    color: 'Midnight Black (Deep Blue Hue)',
    isAssured: true,
    featured: true,
    trending: true,
    tags: ['ADAS Level 2', 'Skyroof', 'Sony 3D Audio', '7-Seater', '360 Camera'],
    inspectionScore: 9.9,
    inspectionSummary: {
      engineTransmission: {
        title: '182 bhp mHawk Diesel & Aisin 6AT',
        score: '10/10',
        checksTotal: 48,
        checksPassed: 48,
        status: 'passed',
        highlights: ['Turbo pulls effortlessly on open expressways', 'Gear shifts silky smooth', 'Zero error codes on OBD']
      },
      steeringSuspension: {
        title: 'FSD (Frequency Selective Damping) Suspension',
        score: '10/10',
        checksTotal: 42,
        checksPassed: 42,
        status: 'passed',
        highlights: ['FSD dampers absorb Bangalore potholes seamlessly', 'Electronic park brake tested', 'Brakes at 84%']
      },
      bodyPaint: {
        title: 'Body, Flush Door Handles & Skyroof',
        score: '9.9/10',
        checksTotal: 45,
        checksPassed: 45,
        status: 'passed',
        highlights: ['Smart motorized flush door handles calibrated', 'Panoramic Skyroof sealed tight', 'Paint gloss score 96%']
      },
      interiorElectricals: {
        title: 'Dual 10.25-inch Screens & ADAS Sensors',
        score: '9.9/10',
        checksTotal: 35,
        checksPassed: 35,
        status: 'passed',
        highlights: ['ADAS radar & camera sensors factory calibrated', 'Sony 12-speaker 3D Sound tested', 'Wireless charger']
      },
      acTyres: {
        title: 'Dual Zone AC & 18-inch Diamond Cut Tyres',
        score: '9.8/10',
        checksTotal: 30,
        checksPassed: 30,
        status: 'passed',
        highlights: ['Dual-zone climate control with 3rd row AC', 'MRF Wanderer tyres at 80% tread', 'TPMS live readings']
      }
    },
    features: [
      'ADAS Level 2 Autonomous Driving Tech (Adaptive Cruise, Lane Keep, AEB)',
      'Panoramic Panoramic "Skyroof" (Largest in Segment)',
      'Sony 12-Speaker Immersive 3D Audio with Roof Speakers',
      'Dual 10.25-inch Monolithic Digital Cockpit Screens',
      'Blind View Monitor with 360-Degree Surround Camera',
      'Memory Driver Seat with Welcome Retract Feature',
      'Wireless Apple CarPlay, Android Auto & Built-in Alexa',
      '7 Airbags & 5-Star Global NCAP Safety Rating'
    ],
    specs: {
      engineCapacity: '2198 cc',
      maxPower: '182 bhp @ 3500 rpm',
      mileageARAI: '16.5 kmpl',
      seatingCapacity: 7,
      airbags: 7,
      bootSpace: '240 Litres (Expandable to 600L)',
      sunroof: 'Panoramic Skyroof',
      insuranceValidity: 'Comprehensive till Sep 2026',
      groundClearance: '200 mm',
      fuelTank: '60 Litres'
    },
    images: [
      'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80'
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
    rto: 'KA-03 (Indiranagar, Bangalore)',
    hubLocation: 'Indiranagar 100ft Road Hub',
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
      'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80'
    ]
  },
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
    rto: 'KA-04 (Yeshwanthpur, Bangalore)',
    hubLocation: 'Hebbal Ring Road Hub',
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
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80'
    ]
  },
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
    rto: 'KA-01 (Koramangala, Bangalore)',
    hubLocation: 'Koramangala 80ft Road Hub',
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
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80'
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
    rto: 'KA-20 (Kundapura / Udupi Transfer to Bangalore)',
    hubLocation: 'Kundapura & Koramangala Hub',
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
        highlights: ['Battery SOH 99.2%', 'Fast DC charging tested on Bangalore Bescom network', 'Silent zippy commute']
      },
      steeringSuspension: {
        title: 'City Agility Steering & Suspension',
        score: '9.9/10',
        checksTotal: 42,
        checksPassed: 42,
        status: 'passed',
        highlights: ['Super light steering for Bangalore traffic', 'Brakes at 92% life', 'Low center of gravity']
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
      'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 'kc-seltos-2022',
    title: '2022 Kia Seltos GTX Plus 1.4 Turbo DCT',
    brand: 'Kia',
    model: 'Seltos',
    variant: 'GTX Plus 1.4 T-GDi Automatic (Top Spec)',
    year: 2022,
    price: 1480000,
    originalPrice: 1560000,
    emiStarting: 27200,
    kilometers: 27600,
    fuelType: 'Petrol',
    transmission: 'Automatic',
    bodyType: 'SUV',
    owner: '1st Owner',
    rto: 'KA-01 (Koramangala, Bangalore)',
    hubLocation: 'Koramangala 80ft Road Hub',
    color: 'Gravity Grey Metallic',
    isAssured: true,
    featured: false,
    trending: true,
    tags: ['Head-Up Display', 'Bose Audio', '360 Camera', 'Ventilated Seats', 'GT-Line Styling'],
    inspectionScore: 9.8,
    inspectionSummary: {
      engineTransmission: {
        title: '1.4L Smartstream Turbo & 7-DCT',
        score: '9.8/10',
        checksTotal: 48,
        checksPassed: 48,
        status: 'passed',
        highlights: ['Crisp throttle response in Sport mode', 'Dual clutch gearbox smooth in traffic', 'Clean spark plugs']
      },
      steeringSuspension: {
        title: 'Suspension & All Disc Brakes',
        score: '9.8/10',
        checksTotal: 42,
        checksPassed: 42,
        status: 'passed',
        highlights: ['All-round disc brakes with 82% life', 'Traction modes (Sand, Mud, Snow) verified', 'Firm cornering stance']
      },
      bodyPaint: {
        title: 'GT-Line Exterior & Red Accents',
        score: '9.9/10',
        checksTotal: 45,
        checksPassed: 45,
        status: 'passed',
        highlights: ['GT-Line signature red bumper trims intact', 'Factory clear coat shine 95%', 'Zero body repainting']
      },
      interiorElectricals: {
        title: 'Smart Air Purifier & 8-inch HUD',
        score: '9.9/10',
        checksTotal: 35,
        checksPassed: 35,
        status: 'passed',
        highlights: ['8-inch Head-Up Display working cleanly', 'Bose 8-Speaker system with Subwoofer', 'Ambient mood lighting tested']
      },
      acTyres: {
        title: 'Smart Purifier AC & 17-inch Crystal Alloys',
        score: '9.8/10',
        checksTotal: 30,
        checksPassed: 30,
        status: 'passed',
        highlights: ['Integrated perfume diffuser and air purifier active', 'Goodyear tyres at 78% tread', 'Alloy rims scratch-free']
      }
    },
    features: [
      '8-inch Smart Head-Up Display (HUD)',
      'Bose Premium 8-Speaker Sound System with Dynamic Speed Compensation',
      '360-Degree Surround Camera with Blind View Monitor',
      'Front Ventilated Cooling Seats for Warm Days',
      'Integrated Smart Pure Air Purifier with Fragrance Dispenser',
      'Multi-Drive Modes (Eco, Normal, Sport) & Multi-Traction Control',
      'Electric Sunroof with One-Touch Operation',
      '6 Airbags & Tyre Pressure Monitoring System (TPMS)'
    ],
    specs: {
      engineCapacity: '1353 cc Turbo',
      maxPower: '138 bhp @ 6000 rpm',
      mileageARAI: '16.5 kmpl',
      seatingCapacity: 5,
      airbags: 6,
      bootSpace: '433 Litres',
      sunroof: 'Electric Sunroof',
      insuranceValidity: 'Comprehensive till Nov 2026',
      groundClearance: '190 mm',
      fuelTank: '50 Litres'
    },
    images: [
      'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80'
    ]
  },
  {
    id: 'kc-hyryder-2023',
    title: '2023 Toyota Urban Cruiser Hyryder Hybrid G',
    brand: 'Toyota',
    model: 'Hyryder',
    variant: 'G Strong Hybrid e-CVT (Electric + Petrol)',
    year: 2023,
    price: 1650000,
    originalPrice: 1740000,
    emiStarting: 30400,
    kilometers: 18200,
    fuelType: 'Hybrid',
    transmission: 'Automatic',
    bodyType: 'SUV',
    owner: '1st Owner',
    rto: 'KA-04 (Yeshwanthpur, Bangalore)',
    hubLocation: 'Hebbal Ring Road Hub',
    color: 'Cafe White & Midnight Black Dual Tone',
    isAssured: true,
    featured: false,
    trending: true,
    tags: ['27.97 kmpl Real Hybrid', 'Toyota e-CVT', 'Panoramic Sunroof', 'Single Owner', 'Silent EV Mode'],
    inspectionScore: 9.9,
    inspectionSummary: {
      engineTransmission: {
        title: 'Toyota Self-Charging Hybrid & e-CVT',
        score: '10/10',
        checksTotal: 48,
        checksPassed: 48,
        status: 'passed',
        highlights: ['Switches seamlessly between pure EV and petrol engine', 'Delivers unmatched 25+ kmpl in Bangalore bumper-to-bumper traffic', 'Zero starter sound']
      },
      steeringSuspension: {
        title: 'Suspension & Regenerative Braking',
        score: '9.9/10',
        checksTotal: 42,
        checksPassed: 42,
        status: 'passed',
        highlights: ['Smooth regenerative deceleration', 'Comfort tuned suspension', 'Brake pads at 88% life']
      },
      bodyPaint: {
        title: 'Dual Tone Body & Exterior Quality',
        score: '9.9/10',
        checksTotal: 45,
        checksPassed: 45,
        status: 'passed',
        highlights: ['Dual tone factory finish', 'Underbody hybrid shield verified', 'No panel repairs']
      },
      interiorElectricals: {
        title: 'Panoramic Glassroof & Digital Cockpit',
        score: '9.8/10',
        checksTotal: 35,
        checksPassed: 35,
        status: 'passed',
        highlights: ['Giant panoramic sunroof blinds and glass fully working', '9-inch SmartPlay Cast with Wireless Auto', 'Head-Up Display']
      },
      acTyres: {
        title: 'Instant Climate AC & Apollo Tyres',
        score: '9.8/10',
        checksTotal: 30,
        checksPassed: 30,
        status: 'passed',
        highlights: ['AC runs directly off high-voltage hybrid battery when parked', 'Tyres at 82% tread life', 'Alloys clean']
      }
    },
    features: [
      'Self-Charging Strong Hybrid Engine (Runs 50% of Bangalore City Drive in Pure EV Mode)',
      'Unbelievable ARAI Mileage of 27.97 kmpl',
      'Panoramic Sunroof with Double Sliding Glass',
      'Head-Up Display (HUD) with Hybrid Power Meter',
      'Wireless Smartphone Charger & 9-inch Smart Touchscreen',
      'Toyota i-Connect Connected Car Technology',
      '6 Airbags, ABS with EBD & Hill Hold Assist',
      '8 Years / 1,60,000 km Toyota Hybrid Battery Warranty'
    ],
    specs: {
      engineCapacity: '1490 cc 3-Cyl Hybrid + Electric Motor',
      maxPower: '114 bhp Combined Output',
      mileageARAI: '27.97 kmpl (Segment Best)',
      seatingCapacity: 5,
      airbags: 6,
      bootSpace: '255 Litres (Hybrid Battery Layout)',
      sunroof: 'Panoramic Sunroof',
      insuranceValidity: 'Zero Dep till Mar 2027',
      groundClearance: '210 mm',
      fuelTank: '45 Litres'
    },
    images: [
      'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80'
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
    rto: 'KA-20 (Kundapura / Transfer to Bangalore Included)',
    hubLocation: 'Kundapura & Koramangala Hub',
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
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80'
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
    rto: 'KA-05 (Jayanagar, Bangalore)',
    hubLocation: 'Indiranagar 100ft Road Hub',
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
      'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80'
    ]
  }
];

export const BANGALORE_HUBS = [
  {
    id: 'hub-koramangala',
    name: 'Koramangala 80ft Road Hub',
    address: '80 Feet Road, 4th Block, Koramangala, Bengaluru, Karnataka 560034',
    landmark: 'Near Sony World Signal & Forum Mall',
    timing: '9:30 AM - 8:30 PM (Open 7 Days)',
    phone: '+91 80 4725 9900',
    carCount: '85+ Certified Cars in Stock',
    amenities: ['Test Drive Lounge', 'Instant RTO Desk', 'EV Fast Charging Station', 'Free Valet Parking'],
    image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'hub-indiranagar',
    name: 'Indiranagar 100ft Road Hub',
    address: '100 Feet Road, HAL 2nd Stage, Indiranagar, Bengaluru, Karnataka 560038',
    landmark: 'Opposite Toit & CMH Metro Station (500m)',
    timing: '9:30 AM - 8:30 PM (Open 7 Days)',
    phone: '+91 80 4725 9901',
    carCount: '65+ Certified Cars in Stock',
    amenities: ['VIP Consultation Suites', 'Coffee Bar', '360° Vehicle Inspection Bay', 'Finance Desks'],
    image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'hub-whitefield',
    name: 'Whitefield Tech Park Hub',
    address: 'ITPL Main Road, Prestige Shantiniketan Complex, Whitefield, Bengaluru 560066',
    landmark: 'Adjacent to Nexus Shantiniketan Mall',
    timing: '9:30 AM - 8:30 PM (Open 7 Days)',
    phone: '+91 80 4725 9902',
    carCount: '90+ Certified Cars in Stock',
    amenities: ['Multi-Level Car Experience Yard', 'Dedicated EV Zone', 'Express Delivery Lounge'],
    image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'hub-hebbal',
    name: 'Hebbal Ring Road Hub',
    address: 'Outer Ring Road, Near Hebbal Flyover & Esteem Mall, Bengaluru 560024',
    landmark: 'Direct Airport Highway Access',
    timing: '9:30 AM - 8:30 PM (Open 7 Days)',
    phone: '+91 80 4725 9903',
    carCount: '75+ Certified Cars in Stock',
    amenities: ['Highway Test Drive Track', 'Doorstep Delivery Fleet Base', 'Insurance Counter'],
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'hub-kundapura',
    name: 'Kundapura Express Hub (Coastal Karnataka)',
    address: 'Main NH 66 Highway Junction, Near Shastri Circle, Kundapura, Karnataka 576201',
    landmark: 'Connecting Udupi, Mangalore & Direct Transport to Bangalore Hubs',
    timing: '9:00 AM - 8:00 PM (Open 7 Days)',
    phone: '+91 8254 233 440',
    carCount: '45+ Handpicked Coastal Cars',
    amenities: ['Direct Bangalore Transport Desk', 'Single Owner Verified Vehicles', 'Coastal Inspection Specialization'],
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80'
  }
];

export const FAQ_ITEMS = [
  {
    question: 'How is Kundapura Assured different from regular used car dealers?',
    answer: 'Every Kundapura Cars vehicle passes an uncompromising 200-point rigorous technical inspection conducted by certified automotive engineers. We inspect everything from engine compression, chassis integrity, electronics, AC performance to brake wear. We offer a 1-Year Comprehensive Warranty, 5-Day Money-Back Guarantee with 100% refund, fixed non-negotiable transparent pricing with no hidden charges, and hassle-free free RC transfer across Bangalore RTOs.'
  },
  {
    question: 'Can I get a home test drive in Bangalore?',
    answer: 'Yes! You can book a Free Test Drive either at any of our 5 Experience Hubs in Bangalore (Koramangala, Indiranagar, Whitefield, Hebbal) or request a Doorstep Test Drive directly to your home or office anywhere within Bengaluru BBMP limits at your chosen date and time.'
  },
  {
    question: 'How does the 5-Day Money Back Guarantee work?',
    answer: 'Drive the car for 5 days or up to 300 km. If you feel it does not suit your lifestyle or preferences for any reason, return it to us and get a 100% full refund of your purchase amount with zero questions asked.'
  },
  {
    question: 'How does the ₹999 online reservation work?',
    answer: 'When you find your dream car, click "Reserve for ₹999". This instantly locks the car exclusively for you for 48 hours so nobody else can buy it while you test drive and finalize financing. The ₹999 token is 100% refundable if you decide not to proceed.'
  },
  {
    question: 'Do you help with car loan financing and RC transfer in Bangalore?',
    answer: 'Absolutely. We have partnered with top banks (HDFC, ICICI, SBI, Axis, Kotak) to offer instant loan approvals up to 90% financing at attractive interest rates starting from 8.5%. Our dedicated operations team manages the entire Karnataka RTO name transfer process and delivers the updated RC smartcard directly to your doorstep.'
  }
];
