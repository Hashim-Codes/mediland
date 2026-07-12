export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  qualifications: string;
  timing: string;
  branch: string;
  status: 'available' | 'busy' | 'leave';
  image?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon?: string;
}

export interface Testimonial {
  id: string;
  author: string;
  role?: string;
  text: string;
  rating: number;
}

export interface NavigationItem {
  label: string;
  href: string;
}

export interface FeatureItem {
  title: string;
  subtitle: string;
  iconName: string;
}

export interface StatItem {
  number: string;
  title: string;
  description: string;
}

export interface HeroContent {
  trustBadge: string;
  headingLine1: string;
  headingLine2?: string;
  headingHighlight: string;
  description: string;
  features: FeatureItem[];
  primaryCtaLabel: string;
  secondaryCtaLabel: string;
  heroImage: string;
  anniversaryBadge: {
    years: string;
    title: string;
    subtitle: string;
    subtext: string;
  };
  infoBar: {
    opdTimings: string;
    opdDays: string;
    emergencyText: string;
    emergencyContact: string;
  };
}

export interface ServiceCardItem {
  id: string;
  iconName: string;
  title: string;
  description: string;
  enabled: boolean;
  image?: string;
  href?: string;
}

export interface ServicesContent {
  label: string;
  headingLine1: string;
  headingHighlight: string;
  description: string;
  items: ServiceCardItem[];
}

export interface DoctorsContent {
  label: string;
  headingLine1: string;
  headingHighlight: string;
  description: string;
  ctaLabel: string;
}

export interface FacilityItem {
  iconName: string;
  title: string;
  description: string;
}

export interface FacilitiesContent {
  label: string;
  headingLine1: string;
  headingHighlight: string;
  description: string;
  ctaLabel: string;
  items: FacilityItem[];
}

export interface InsurancePartner {
  id: string;
  name: string;
  logoUrl: string;
}

export interface InsuranceContent {
  label: string;
  heading: string;
  description: string;
  partners: InsurancePartner[];
}

export interface CTAContent {
  label?: string;
  heading: string;
  description: string;
  primaryButtonLabel: string;
  secondaryButtonLabel?: string;
}

export interface TrustFeatureItem {
  iconName: string;
  title: string;
  description: string;
}

export interface WhyChooseContent {
  label: string;
  headingLine1: string;
  headingHighlight: string;
  description: string;
  image: string;
  features: TrustFeatureItem[];
  ctaLabel: string;
}

export interface TestimonialsSectionContent {
  label: string;
  headingLine1: string;
  headingHighlight: string;
  description: string;
  storefrontImage: string;
}

export interface SpecialtyCardItem {
  iconName: string;
  title: string;
  description: string;
}

export interface SpecialtiesSectionContent {
  label: string;
  headingLine1: string;
  headingHighlight: string;
  description: string;
  items: SpecialtyCardItem[];
  receptionImage: string;
  ctaLabel: string;
}

export interface LocationSectionContent {
  heading: string;
  mapEmbedUrl: string;
  ctaLabel: string;
  trustCards: {
    iconName: string;
    title: string;
    description: string;
  }[];
}

export interface PremiumFooterContent {
  newsletter: {
    heading: string;
    description: string;
  };
  anniversary: {
    years: string;
    message: string;
    ctaLabel: string;
  };
  gallery: {
    label: string;
    headingLine1: string;
    headingHighlight: string;
    description: string;
    ctaLabel: string;
    images: string[];
  };
  finalCta: {
    headingLine1: string;
    headingLine2: string;
    description: string;
    primaryCtaLabel: string;
    secondaryCtaLabel: string;
  };
  missionStatement: string;
}

// ==========================================
// FORM ENGINE TYPES
// ==========================================
export type FormFieldType = 'text' | 'tel' | 'email' | 'number' | 'date' | 'time' | 'select' | 'radio' | 'checkbox' | 'textarea';

export interface FormFieldOption {
  label: string;
  value: string;
}

export interface FormFieldConfig {
  id: string;
  type: FormFieldType;
  label: string;
  placeholder?: string;
  required?: boolean;
  options?: FormFieldOption[]; // For select, radio
  dependsOn?: string; // ID of another field this field depends on
  dependencyMap?: Record<string, FormFieldOption[]>; // e.g. { "ENT": [{label:"Dr. Smith", value:"smith"}] }
  min?: string | number;
  max?: string | number;
  width?: 'full' | 'half'; // For grid layout
}

export interface FormSuccessConfig {
  title: string;
  timeline: string[];
  primaryAction?: { label: string; action: 'call' | 'whatsapp' | 'home' };
  secondaryAction?: { label: string; action: 'call' | 'whatsapp' | 'home' };
  tertiaryAction?: { label: string; action: 'call' | 'whatsapp' | 'home' };
}

export interface FormConfig {
  id: string;
  title: string;
  subtitle: string;
  fields: FormFieldConfig[];
  submitLabel: string;
  successScreen: FormSuccessConfig;
  integration: 'whatsapp' | 'email' | 'google_sheets' | 'bizonfy_crm' | 'api';
}

export interface TenantConfig {
  branding: {
    name: string;
    subtitle?: string;
    logo?: string;
    primaryColor?: string;
  };
  contact: {
    phone: string;
    email: string;
    address: string;
    mapUrl?: string;
  };
  seo: {
    title: string;
    metaDescription: string;
    keywords: string[];
  };
  social: {
    whatsapp?: string;
    instagram?: string;
    facebook?: string;
  };
  openingHours: {
    weekdays: string;
    weekends: string;
  };
  emergency: {
    enabled: boolean;
    phone: string;
    label: string;
    supportText: string;
  };
  features: {
    doctorAvailability: boolean;
    medicineOrdering: boolean;
    testimonials: boolean;
    gallery: boolean;
    labReports: boolean;
    appointmentBooking: boolean;
    healthPackages: boolean;
  };
  navigation: NavigationItem[];
  hero: HeroContent;
  heroFeatures: FeatureItem[];
  stats: StatItem[];
  servicesContent: ServicesContent;
  doctorsContent: DoctorsContent;
  facilities: FacilitiesContent;
  insurance: InsuranceContent;
  whyChoose: WhyChooseContent;
  cta: CTAContent;
  doctors: Doctor[];
  testimonials: Testimonial[];
  testimonialsContent: TestimonialsSectionContent;
  specialties: SpecialtiesSectionContent;
  locationContent: LocationSectionContent;
  premiumFooter: PremiumFooterContent;
  appointmentContent?: FormConfig;
  trustSignals: {
    years: number;
    happyPatients: string;
    reviews: number;
  };
  integrations: {
    medicineOrderTarget: 'google_sheets' | 'email' | 'whatsapp' | 'bizonfy_crm';
    appointmentTarget?: 'google_sheets' | 'email' | 'whatsapp' | 'bizonfy_crm';
    webhookUrl?: string;
  };
}
