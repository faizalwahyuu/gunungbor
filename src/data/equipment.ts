import { EquipmentItem } from '../types';

export const equipmentList: EquipmentItem[] = [
  {
    id: 1,
    number: "01",
    name: "Hydraulic Mountain Crawler Drill Rig",
    type: "HYDRAULIC CRAWLER",
    application: "HARD ROCK & SLOPE",
    mobility: "SELF-PROPELLED CRAWLER",
    terrainRating: "EXTREME GRADE (35°+)",
    maxDepth: "350 m (NQ) / 250 m (HQ)",
    powerSource: "Turbo Diesel 110 kW",
    description: "Rig hidraulik berpemandu roda rantai baja dengan daya cengkeram tinggi pada tebing berbatu dan kemiringan curam. Dilengkapi mast multi-angle tilting dan winch penahan beban keselamatan ganda.",
    image: "/images/equipment-rig.webp",
    fallbackImage: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80",
    specs: [
      { label: "Rotation Speed", value: "0 - 1,200 RPM" },
      { label: "Pullback Capacity", value: "92 kN (9.3 Ton)" },
      { label: "Feeding Stroke", value: "3.5 Meter" },
      { label: "Climbing Grade", value: "38° Max Gradient" }
    ]
  },
  {
    id: 2,
    number: "02",
    name: "Diamond Wireline Core Rig (Deep Target)",
    type: "SPINDLE & HYDRAULIC",
    application: "PRECISION CORE SAMPLING",
    mobility: "SKID / TRUCK MOUNTED",
    terrainRating: "RUGGED / REMOTE",
    maxDepth: "500 m (NQ) / 350 m (HQ)",
    powerSource: "Water-Cooled Diesel 85 HP",
    description: "Rig pemboran inti dalam dengan sistem wireline otomatis untuk pengangkatan tabung core barrel tanpa perlu mencabut seluruh rangkaian pipa bor. Menghasilkan recovery sample mendekati 98%.",
    image: "/images/equipment-rig-core.webp",
    fallbackImage: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1200&q=80",
    specs: [
      { label: "Core Barrel", value: "HQ3 / NQ3 Triple Tube" },
      { label: "Spindle Stroke", value: "600 mm" },
      { label: "Winch Speed", value: "0 - 180 m/min" },
      { label: "Torque Output", value: "2,850 Nm" }
    ]
  },
  {
    id: 3,
    number: "03",
    name: "Modular Man-Portable Mountain Rig",
    type: "MODULAR KNOCK-DOWN",
    application: "INACCESSIBLE CLIFFS & PEAKS",
    mobility: "MAN-PORTABLE (SUB-80KG MODULES)",
    terrainRating: "VERTICAL & CLIFF WALLS",
    maxDepth: "120 m (BQ) / 80 m (NQ)",
    powerSource: "Modular Air/Hydraulic Pack",
    description: "Rig bor modular yang dirancang dapat dibongkar pasang menjadi komponen berbobot di bawah 80 kg. Dapat diangkut secara manual oleh tim porter, winch sling lereng, maupun diikat pada dinding tebing terisolir.",
    image: "/images/equipment-portable.webp",
    fallbackImage: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
    specs: [
      { label: "Module Weight", value: "< 75 kg per piece" },
      { label: "Assembly Time", value: "45 Menit di Lokasi" },
      { label: "Anchoring", value: "Heavy-Duty Rock Anchor" },
      { label: "Working Angle", value: "0° (Horiz) s/d 90° (Vert)" }
    ]
  },
  {
    id: 4,
    number: "04",
    name: "High-Pressure Dual-Stage Air Compressor",
    type: "SCREW COMPRESSOR",
    application: "DTH HAMMER & FLUSHING",
    mobility: "OFF-ROAD TRAILER",
    terrainRating: "HEAVY INDUSTRIAL & MOUNTAIN",
    maxDepth: "Mendukung DTH s/d 250 m",
    powerSource: "Heavy Duty Diesel 240 kW",
    description: "Kompresor udara bertekanan tinggi 25 Bar (365 PSI) untuk membersihkan serbuk bor batu (drill cuttings) secara cepat dan menyuplai daya impak ke mata bor Down-The-Hole pada batuan masif.",
    image: "/images/equipment-compressor.webp",
    fallbackImage: "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80",
    specs: [
      { label: "Working Pressure", value: "25 Bar / 365 PSI" },
      { label: "Air Delivery", value: "900 CFM (25.5 m³/min)" },
      { label: "Cooling System", value: "Heavy Tropical Radiator" },
      { label: "Altitude Rating", value: "Tested to 3,200 mdpl" }
    ]
  },
  {
    id: 5,
    number: "05",
    name: "Diamond Impregnated Drill Rods & Bits",
    type: "TOOLING & CONSUMABLES",
    application: "EXTREME HARD ROCK CUTTING",
    mobility: "CONTAINERIZED ON-SITE",
    terrainRating: "ALL GEOLOGICAL STRATA",
    maxDepth: "Series 600m Available",
    powerSource: "N/A - Precision Tooling",
    description: "Rangkaian batang bor baja paduan chrome-moly seamless grade S135 dengan ulir taper tahan torsi ekstrem, dipadu mata bor intan sintetis konsentrasi tinggi untuk membelah batuan silika dan andesit terkeras.",
    image: "/images/equipment-rods.webp",
    fallbackImage: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80",
    specs: [
      { label: "Rod Diameters", value: "BQ, NQ, HQ, PQ Standard" },
      { label: "Bit Matrix", value: "Hard Ultra Matrix 9-10 Mohs" },
      { label: "Thread Seal", value: "High-Pressure Tapered" },
      { label: "Quality Grade", value: "ISO 9001 Metallurgy" }
    ]
  },
  {
    id: 6,
    number: "06",
    name: "Heavy-Duty Slope Winch & Anchor Safety Pack",
    type: "AUXILIARY SAFETY & WINCH",
    application: "RIG TETHERING & LOGISTICS",
    mobility: "SKID / TRUCK MOUNTED WINCH",
    terrainRating: "VERTICAL TERRAIN SUPPORT",
    maxDepth: "Sling Jangkauan 600 m",
    powerSource: "Hydraulic Drive 45 kW",
    description: "Sistem derek keselamatan bersertifikasi untuk menambatkan rig dan peralatan logistik pada kecuraman lereng bukit terjal. Memastikan kestabilan mutlak rig dari pergeseran tanah maupun getaran pemboran.",
    image: "/images/equipment-winch.webp",
    fallbackImage: "https://images.unsplash.com/photo-1541888946425-d0fbb180c5f7?auto=format&fit=crop&w=1200&q=80",
    specs: [
      { label: "Line Pull Rating", value: "12 Ton Continuous" },
      { label: "Cable Spec", value: "22 mm Non-Rotating Steel" },
      { label: "Braking System", value: "Automatic Hydraulic Lock" },
      { label: "Safety Factor", value: "5:1 Certified Standard" }
    ]
  }
];
