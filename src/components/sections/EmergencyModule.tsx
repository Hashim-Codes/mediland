"use client";

import React from 'react';
import { siteConfig } from '@/config/site.config';
import { PhoneCall } from 'lucide-react';

export function EmergencyModule() {
  const config = siteConfig;
  const { emergency } = config;

  if (!emergency.enabled) return null;

  return (
    <div className="bg-red-600 text-white px-4 py-2 text-sm font-medium">
      <div className="container mx-auto flex items-center justify-center gap-2">
        <PhoneCall className="w-4 h-4" />
        <span>{emergency.label}</span>
        <a 
          href={`tel:${emergency.phone}`} 
          className="font-bold underline underline-offset-2 hover:text-red-100 transition-colors"
        >
          {emergency.phone}
        </a>
      </div>
    </div>
  );
}



