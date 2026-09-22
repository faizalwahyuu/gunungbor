export interface ServiceItem {
  id: number;
  number: string;
  title: string;
  shortDescription: string;
  description: string;
  scope: string[];
  fieldConditions: string[];
  image: string;
  fallbackImage: string;
  tag: string;
}

export interface ProjectItem {
  id: number;
  number: string;
  title: string;
  location: string;
  province: string;
  category: string;
  image: string;
  fallbackImage: string;
  description: string;
  challenge: string;
  depthMeters: number;
  equipmentUsed: string;
  year: string;
}

export interface EquipmentItem {
  id: number;
  number: string;
  name: string;
  type: string;
  application: string;
  mobility: string;
  terrainRating: string;
  maxDepth: string;
  powerSource: string;
  description: string;
  image: string;
  fallbackImage: string;
  specs: { label: string; value: string }[];
}

export interface WorkProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
}

export interface StatItem {
  value: number;
  suffix: string;
  label: string;
  sublabel: string;
}

export interface SiteConfig {
  companyName: string;
  tagline: string;
  phone: string;
  phoneDisplay: string;
  whatsapp: string;
  whatsappDisplay: string;
  email: string;
  address: string;
  operationalArea: string;
  operationalHours: string;
  socials: {
    instagram: string;
    linkedin: string;
  };
}
