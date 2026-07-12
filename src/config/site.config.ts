import { doctors } from '../content/doctors';
import { testimonials } from '../content/testimonials';
import { hero } from '../content/hero';
import { navigation } from '../content/navigation';
import { stats } from '../content/stats';
import { features as heroFeatures } from '../content/features';
import { servicesContent } from '../content/servicesContent';
import { whyChoose } from '../content/whyChoose';
import { facilities } from '../content/facilities';
import { cta } from '../content/cta';
import { doctorsContent } from '../content/doctorsContent';
import { insurance } from '../content/insurance';
import { testimonialsContent } from '../content/testimonialsContent';
import { specialties } from '../content/specialties';
import { locationContent } from '../content/locationContent';
import { appointmentContent } from '../content/appointment';
import { premiumFooter } from '../content/premiumFooter';

export const siteConfig = {
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://medilandclinic.com",
  branding: {
    name: "MEDILAND",
    subtitle: "Medicals & Clinic",
    logo: "/mediland-logo.png",
    primaryColor: "#D62828", // Medical Red
  },
  contact: {
    phone: process.env.NEXT_PUBLIC_EMERGENCY_PHONE || "+91 94472 29973",
    email: "edavannamediland@gmail.com",
    address: "MEDILAND Clinic, Main Road, Edavanna, Kerala 676541",
    mapUrl: process.env.NEXT_PUBLIC_GOOGLE_MAP || "https://maps.google.com/?q=Edavanna",
  },
  seo: {
    title: "MEDILAND Clinic Edavanna - Trusted Medical Care",
    metaDescription: "Experience comprehensive healthcare with expert doctors, genuine medicines, and advanced diagnostics—all under one modern roof.",
    keywords: ["MEDILAND Clinic Edavanna", "Clinic near me", "Doctor in Edavanna", "Medical shop Edavanna", "General Physician Edavanna"],
  },
  social: {
    whatsapp: process.env.NEXT_PUBLIC_WHATSAPP || "+919447229973",
    instagram: "https://www.instagram.com/mediland_clinic_edavanna",
    facebook: "https://www.facebook.com/p/mediland-edavanna-61562019393286/",
    youtube: "https://www.youtube.com/@medilandmedicalsclinicedav1249",
  },
  openingHours: {
    weekdays: "8:30 AM - 8:30 PM",
    weekends: "9:00 AM - 1:00 PM",
  },
  emergency: {
    enabled: true,
    phone: process.env.NEXT_PUBLIC_EMERGENCY_PHONE || "+91 94472 29973",
    label: "Emergency Support",
    supportText: "24/7 Available"
  },
  features: {
    doctorAvailability: true,
    medicineOrdering: true,
    testimonials: true,
    gallery: false,
    labReports: false,
    appointmentBooking: true,
    healthPackages: false,
  },
  trustSignals: {
    years: 22,
    happyPatients: "Thousands",
    reviews: 5.0,
  },
  integrations: {
    medicineOrderTarget: "api",
    appointmentTarget: "api",
    webhookUrl: process.env.NEXT_PUBLIC_WEBHOOK_URL || "",
  },
  // Datasets from content/ directory
  hero,
  navigation,
  stats,
  heroFeatures,
  servicesContent,
  doctorsContent,
  facilities,
  insurance,
  whyChoose,
  cta,
  doctors,
  testimonials,
  testimonialsContent,
  specialties,
  locationContent,
  premiumFooter,
  appointmentContent,
};

