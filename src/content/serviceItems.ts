import { ServiceCardItem } from '@/types';

export const serviceItems: ServiceCardItem[] = [
  {
    id: "general",
    iconName: "stethoscope",
    title: "General Consultation",
    description: "Consult experienced doctors for routine health concerns and personalized treatment.",
    enabled: true
  },
  {
    id: "pharmacy",
    iconName: "pill",
    title: "Pharmacy",
    description: "Wide selection of genuine medicines and healthcare essentials.",
    enabled: true
  },
  {
    id: "lab",
    iconName: "microscope",
    title: "Lab & Diagnostics",
    description: "Modern laboratory with fast and accurate diagnostic testing.",
    enabled: true
  },
  {
    id: "ecg",
    iconName: "heart-pulse",
    title: "ECG & Cardiac Care",
    description: "Heart screening and cardiac health monitoring using modern diagnostic equipment.",
    enabled: true
  },
  {
    id: "checkups",
    iconName: "clipboard",
    title: "Health Checkups",
    description: "Preventive health packages designed for every age group.",
    enabled: true
  },
  {
    id: "emergency",
    iconName: "briefcase-medical",
    title: "Emergency Care",
    description: "Immediate emergency medical assistance whenever you need it.",
    enabled: true
  }
];

