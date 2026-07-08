import { HeroContent } from '@/types';

export const hero: HeroContent = {
  trustBadge: "🏥 Trusted Healthcare Since 2004",
  headingLine1: "Trusted Care",
  headingHighlight: "For A Better Life",
  description: "Comprehensive healthcare, pharmacy, diagnostics, and specialist consultation — all under one roof.",
  primaryCtaLabel: "Book Appointment",
  secondaryCtaLabel: "View Doctors",
  heroImage: "/mediland/med-building.png",
  features: [
    { iconName: "stethoscope", title: "Expert Doctors", subtitle: "Multiple Specialists" },
    { iconName: "pill", title: "Genuine Medicines", subtitle: "Pharmacy" },
    { iconName: "activity", title: "12 Channel ECG", subtitle: "Heart Care" },
    { iconName: "microscope", title: "Laboratory", subtitle: "Accurate Tests" }
  ],
  anniversaryBadge: {
    years: "22",
    title: "22 Years",
    subtitle: "Of Trust",
    subtext: "Thousands of Happy Patients"
  },
  infoBar: {
    opdDays: "Open Now",
    opdTimings: "6:30 AM–8:30 PM",
    emergencyText: "Emergency 24/7",
    emergencyContact: "Available"
  }
};

