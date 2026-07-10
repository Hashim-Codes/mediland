import { FormConfig } from '@/types';

export const appointmentContent: FormConfig = {
  id: "appointment",
  title: "Book an Appointment",
  subtitle: "Choose your doctor and preferred time. Our team will confirm your appointment shortly.",
  integration: "api",
  submitLabel: "Request Appointment",
  successScreen: {
    title: "അപ്പോയിന്റ്മെന്റ് ലഭിച്ചു",
    message: [
      "നന്ദി!",
      "നിങ്ങളുടെ അപ്പോയിന്റ്മെന്റ് വിജയകരമായി ലഭിച്ചിട്ടുണ്ട്.",
      "ഞങ്ങളുടെ ടീം ഉടൻ തന്നെ ഫോൺ വഴിയോ WhatsApp വഴിയോ നിങ്ങളെ ബന്ധപ്പെടുന്നതാണ്.",
      "അടിയന്തര സഹായം ആവശ്യമാണെങ്കിൽ താഴെയുള്ള ബട്ടണുകൾ ഉപയോഗിച്ച് ഞങ്ങളെ നേരിട്ട് ബന്ധപ്പെടാം."
    ],
    primaryAction: { label: "ക്ലിനിക്കിലേക്ക് വിളിക്കുക", action: "call" },
    secondaryAction: { label: "WhatsApp വഴി ബന്ധപ്പെടുക", action: "whatsapp" },
    tertiaryAction: { label: "ഹോം പേജിലേക്ക് മടങ്ങുക", action: "home" }
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
    },
    {
      id: "department",
      type: "select",
      label: "Department",
      required: true,
      options: [
        { label: "Pulmonology", value: "Pulmonology" },
        { label: "ENT", value: "ENT" },
        { label: "General Practitioner", value: "General Practitioner" },
        { label: "General Surgery", value: "General Surgery" },
        { label: "Neurology", value: "Neurology" },
        { label: "Ayurveda", value: "Ayurveda" }
      ],
      width: "half"
    },
    {
      id: "doctor",
      type: "select",
      label: "Doctor",
      required: true,
      dependsOn: "department",
      dependencyMap: {
        "Pulmonology": [{ label: "Dr. Binu Raj C", value: "Dr. Binu Raj C" }],
        "ENT": [{ label: "Dr. Yusuf Puthalath", value: "Dr. Yusuf Puthalath" }],
        "General Practitioner": [{ label: "Dr. Anis V.P.", value: "Dr. Anis V.P." }],
        "General Surgery": [{ label: "Dr. Basim M.", value: "Dr. Basim M." }],
        "Neurology": [{ label: "Dr. Prakashan K", value: "Dr. Prakashan K" }],
        "Ayurveda": [{ label: "Dr. Abdul Jalil", value: "Dr. Abdul Jalil" }]
      },
      width: "full"
    },
    {
      id: "preferredDate",
      type: "date",
      label: "Preferred Date",
      required: true,
      width: "half"
    },
    {
      id: "preferredTime",
      type: "time",
      label: "Preferred Time",
      required: true,
      width: "half"
    },
    {
      id: "reason",
      type: "textarea",
      label: "Reason for Visit",
      placeholder: "Briefly describe your symptoms or reason for visit...",
      required: false,
      width: "full"
    },
    {
      id: "existingPatient",
      type: "radio",
      label: "Are you an existing patient?",
      required: true,
      options: [
        { label: "Yes", value: "yes" },
        { label: "No", value: "no" }
      ],
      width: "half"
    },
    {
      id: "contactMethod",
      type: "radio",
      label: "Preferred Contact Method",
      required: true,
      options: [
        { label: "Phone", value: "phone" },
        { label: "WhatsApp", value: "whatsapp" }
      ],
      width: "half"
    },
    {
      id: "consent",
      type: "checkbox",
      label: "I agree to be contacted regarding my appointment.",
      required: true,
      width: "full"
    }
  ]
};

