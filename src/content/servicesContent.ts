import { ServicesContent } from '@/types';

export const servicesContent: ServicesContent = {
  label: "OUR SERVICES",
  headingLine1: "Everything You Need",
  headingHighlight: "In One Place",
  description: "Comprehensive healthcare, pharmacy, diagnostics, and specialist consultation — all under one roof.",
  items: [
    { id: "clinic", iconName: "stethoscope", title: "Clinic", description: "Expert consultations.", enabled: true },
    { id: "pharmacy", iconName: "pill", title: "Pharmacy", description: "Genuine medicines.", enabled: true },
    { id: "laboratory", iconName: "microscope", title: "Laboratory", description: "Accurate diagnostics.", enabled: true },
    { id: "ecg", iconName: "activity", title: "12 Channel ECG", description: "Heart monitoring.", enabled: true },
    { id: "pulmonology", iconName: "wind", title: "Pulmonology", description: "Respiratory care.", enabled: true },
    { id: "ent", iconName: "ear", title: "ENT", description: "Ear, nose, throat.", enabled: true },
    { id: "neuro", iconName: "brain", title: "Neuro Surgery", description: "Neurological care.", enabled: true },
    { id: "general", iconName: "user", title: "General Practitioner", description: "Primary care.", enabled: true },
    { id: "surgery", iconName: "scissors", title: "General Surgery", description: "Surgical expertise.", enabled: true },
    { id: "childcare", iconName: "baby", title: "Child Care", description: "Pediatric services.", enabled: true },
    { id: "minor-procedures", iconName: "band-aid", title: "Minor Procedures", description: "Outpatient care.", enabled: true },
    { id: "emergency", iconName: "ambulance", title: "Emergency Care", description: "24/7 support.", enabled: true }
  ]
};

