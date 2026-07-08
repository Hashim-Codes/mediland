# Mediland Clinic Website

This is a standalone Next.js project extracted from the Bizonfy multi-tenant architecture. It is an independent, single-tenant website.

## Project Overview

Mediland Clinic is a modern, high-performance website designed to drive patient acquisitions through appointment bookings and medicine orders.

## Folder Structure

```
Projects/Mediland/
│
├── src/
│   ├── app/             # Next.js App Router (Pages & API routes)
│   ├── api/             # API Endpoints for Form Submissions
│   ├── components/      # React Components
│   │     ├── sections/  # Page-level sections (Hero, Doctors, etc.)
│   │     └── ui/        # Reusable UI primitives (Buttons, Cards, etc.)
│   ├── config/          # Centralized configuration
│   │     ├── site.config.ts   # Main site branding, contacts, and features
│   │     ├── project.ts       # Project identity metadata
│   │     └── deploy.config.ts # Deployment and backend connection settings
│   ├── content/         # Business Data (Doctors, Services, Reviews)
│   ├── services/        # Service abstractions (Appointment, Medicine, Contact)
│   └── lib/             # Utility functions and animations
│
├── public/              # Static assets (images, logos, fonts)
├── .env.local           # Environment Variables
├── package.json         # Project dependencies
└── next.config.ts       # Next.js configuration
```

## Environment Variables

To run the project locally, create a `.env.local` file with the following variables:

```
NEXT_PUBLIC_WHATSAPP="+919876543210"
NEXT_PUBLIC_EMERGENCY_PHONE="+919876543210"
NEXT_PUBLIC_GOOGLE_MAP="https://maps.google.com/?q=Edavanna"

# The backend destination for form submissions
GOOGLE_SCRIPT_URL="YOUR_GOOGLE_SHEET_MACRO_URL"
```

## Setup & Run

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

## How to Update Content

The website content is decoupled from the components. To update content, modify the TypeScript files in `src/content/`:

- **Update Doctors**: Edit `src/content/doctors.ts`.
- **Update Services**: Edit `src/content/servicesContent.ts` and `serviceItems.ts`.
- **Update Reviews**: Edit `src/content/testimonials.ts`.
- **Update FAQs**: Edit `src/content/faq.ts` (if applicable).

## Future-Proofing

This project uses a Service Abstraction layer (`src/services/`) for all data submissions (Appointments, Medicine Orders, Contacts). Currently, these point to Google Sheets, but they are designed to seamlessly switch to the future Bizonfy API without requiring any UI component changes. 

> **Important**: Never directly couple this repository to the Bizonfy monorepo. This project must remain completely standalone and deployable independently.
