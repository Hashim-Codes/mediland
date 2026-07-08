import React from 'react';
import { Calendar, Pill, ChevronRight } from 'lucide-react';

interface HeroCTAGroupProps {
  primaryLabel: string;
  secondaryLabel: string;
  phone: string;
}

export function HeroCTAGroup({ primaryLabel, secondaryLabel, phone }: HeroCTAGroupProps) {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-16">
      <a 
        href={`tel:${phone}`}
        className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#E53935] text-white px-8 py-4 rounded-xl font-bold text-lg shadow-[0_8px_25px_-8px_rgba(229,57,53,0.6)] hover:shadow-[0_12px_35px_-8px_rgba(229,57,53,0.7)] hover:-translate-y-1 transition-all duration-300 group"
      >
        <Calendar className="w-5 h-5" />
        {primaryLabel}
        <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </a>
      <a 
        href="#pharmacy"
        className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-gray-900 border-2 border-gray-200 px-8 py-4 rounded-xl font-bold text-lg hover:border-[#E53935] hover:bg-[#E53935]/5 hover:text-[#E53935] transition-all duration-300"
      >
        <Pill className="w-5 h-5" />
        {secondaryLabel}
      </a>
    </div>
  );
}


