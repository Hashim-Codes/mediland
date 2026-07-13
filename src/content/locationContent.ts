import { LocationSectionContent } from '@/types';

export const locationContent: LocationSectionContent = {
  heading: "Visit Us",
  mapEmbedUrl: "https://maps.google.com/maps?q=Mediland+Medicals+Edavanna&t=&z=15&ie=UTF8&iwloc=&output=embed",
  ctaLabel: "Get Directions",
  trustCards: [
    {
      iconName: "users",
      title: "Trusted by Thousands",
      description: "Over 13 years of local service and patient trust.",
      image: "/bg/doctor care.jpg"
    },
    {
      iconName: "user-check",
      title: "Expert Team",
      description: "Qualified and experienced healthcare professionals dedicated to your wellness.",
      image: "/bg/Medicine doctor.jpg"
    },
    {
      iconName: "shield-check",
      title: "Quality Assured",
      description: "Precision diagnostic equipment and high-quality clinical standards.",
      image: "/bg/medical.jpg"
    },
    {
      iconName: "heart",
      title: "Patient First",
      description: "Comfort, compassion, and your satisfaction remain our highest priority.",
      image: "/bg/child care.jpg"
    }
  ]
};

