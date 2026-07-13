import { ServicesContent } from '@/types';

export const servicesContent: ServicesContent = {
  label: "OUR SERVICES",
  headingLine1: "Everything You Need",
  headingHighlight: "In One Place",
  description: "Reliable primary healthcare, specialist consultations, and an all-in-one human and veterinary pharmacy — all under one roof.",
  items: [
    { 
      id: "clinic", 
      iconName: "stethoscope", 
      title: "Clinic", 
      description: "General consultation with experienced doctors.", 
      enabled: true,
      image: "/mediland/med-people.png",
      href: "/services/clinic"
    },
    { 
      id: "pharmacy", 
      iconName: "pill", 
      title: "Pharmacy", 
      description: "Genuine medicines available under one roof.", 
      enabled: true,
      image: "/mediland/med-pharmacy.png",
      href: "/services/pharmacy"
    },
    { 
      id: "laboratory", 
      iconName: "microscope", 
      title: "Laboratory", 
      description: "Fast and reliable diagnostic testing.", 
      enabled: true,
      image: "/mediland/mediland-laboratory.png",
      href: "/services/laboratory"
    },
    { id: "ecg", iconName: "activity", title: "12-Channel ECG", description: "Advanced heart monitoring.", enabled: true, image: "/bg/ECG.jpg" },
    { id: "pulmonology", iconName: "wind", title: "Pulmonology", description: "Specialised respiratory and chest care.", enabled: true, image: "/bg/Pulmonology.jpg" },
    { id: "ent", iconName: "ear", title: "ENT", description: "Expert medical care for ear, nose, and throat.", enabled: true, image: "/bg/ENT1.png" },
    { id: "neuro", iconName: "brain", title: "Neurology", description: "Outpatient neurological consultations and care.", enabled: true, image: "/bg/NeuroBrain.jpg" },
    { id: "general", iconName: "user", title: "General Practitioner", description: "Reliable primary care for the whole family.", enabled: true, image: "/bg/Medicine doctor.jpg" },
    { id: "surgery", iconName: "scissors", title: "General Surgery", description: "Surgical consultations and expert medical opinions.", enabled: true, image: "/bg/clinic care.jpg" },
    { id: "childcare", iconName: "baby", title: "Child Care", description: "Compassionate pediatric health services.", enabled: true, image: "/bg/child care.jpg" },
    { id: "minor-procedures", iconName: "band-aid", title: "Minor Procedures", description: "Quick, professional outpatient medical care.", enabled: true, image: "/bg/Minorprocedures.jpg" },
    { id: "emergency", iconName: "ambulance", title: "Extended Day Care", description: "Support for minor medical emergencies from 7:00 AM to 10:00 PM.", enabled: true, image: "/bg/Emergency.jpg" }
  ]
};

