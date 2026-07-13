import { FormConfig } from '@/types';

export const appointmentContent: FormConfig = {
  id: "appointment",
  title: "Book an Appointment",
  subtitle: "Choose your doctor and preferred time. Our team will confirm your appointment shortly.",
  integration: "whatsapp",
  submitLabel: "Request via WhatsApp",
  successScreen: {
    title: "Appointment Request Received",
    timeline: [
      "Request Submitted",
      "Clinic Reviews Request",
      "Clinic Confirms Appointment",
      "Visit Clinic"
    ],
    primaryAction: { label: "Call Clinic", action: "call" },
    secondaryAction: { label: "WhatsApp Clinic", action: "whatsapp" },
    tertiaryAction: { label: "Return Home", action: "home" }
  },
  fields: [
    {
      id: "patientName",
      type: "text",
      label: "Patient Name",
      placeholder: "Full Name",
      required: true,
      width: "full"
    },
    {
      id: "phoneNumber",
      type: "tel",
      label: "Mobile Number",
      placeholder: "e.g. +91 94472 29973",
      required: true,
      width: "half"
    },
    {
      id: "age",
      type: "number",
      label: "Age",
      placeholder: "Years",
      required: true,
      min: 0,
      max: 120,
      width: "half"
    },
    {
      id: "gender",
      type: "select",
      label: "Gender",
      required: true,
      options: [
        { label: "Male", value: "male" },
        { label: "Female", value: "female" },
        { label: "Other", value: "other" }
      ],
      width: "half"
    }
  ]
};

