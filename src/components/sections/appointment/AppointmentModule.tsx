"use client";

import React from 'react';
import { siteConfig } from '@/config/site.config';
import { FormEngine } from '../form-engine/FormEngine';

export function AppointmentModule() {
  const config = siteConfig;
  
  if (!config.appointmentContent || !config.features.appointmentBooking) {
    return null;
  }

  return (
    <section className="relative py-24 bg-gray-50 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-[var(--color-primary)]/5 to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-[var(--color-secondary)]/5 to-transparent" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
        <FormEngine 
          config={config.appointmentContent} 
           
        />
      </div>
    </section>
  );
}



