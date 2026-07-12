import { FacilitiesContent } from '@/types';

export const facilities: FacilitiesContent = {
  label: "MODERN FACILITIES",
  headingLine1: "Modern Technology.",
  headingHighlight: "Better Care.",
  description: "Experience how modern equipment improves diagnosis, treatment, and patient safety in our fully equipped clinic.",
  ctaLabel: "Explore Our Facilities",
  items: [
    {
      iconName: "microscope",
      title: "Modern Laboratory",
      description: "Modern diagnostic laboratory.",
      image: "/mediland/mediland-laboratory.png"
    },
    {
      iconName: "activity",
      title: "12 Channel ECG",
      description: "Accurate cardiac monitoring.",
      image: "/bg/ECG.jpg"
    },
    {
      iconName: "pill",
      title: "Well-Stocked Pharmacy",
      description: "Wide range of genuine medicines.",
      image: "/bg/pharmacy.jpg"
    },
    {
      iconName: "band-aid",
      title: "Minor Procedure Room",
      description: "Safe outpatient procedures.",
      image: "/bg/Minorprocedures.jpg"
    },
    {
      iconName: "shield-check",
      title: "Hygienic & Safe Environment",
      description: "Clean, sanitized clinical spaces.",
      image: "/bg/clinic care.jpg"
    }
  ]
};
