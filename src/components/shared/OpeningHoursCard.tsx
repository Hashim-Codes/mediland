import React from 'react';
import { Clock, Ambulance } from 'lucide-react';

interface OpeningHoursCardProps {
  weekdays: string;
  weekends: string;
  emergencyEnabled: boolean;
  emergencySupportText: string;
}

export function OpeningHoursCard({ weekdays, weekends, emergencyEnabled, emergencySupportText }: OpeningHoursCardProps) {
  return (
    <div className="absolute -bottom-8 lg:bottom-12 -left-4 lg:-left-12 bg-white rounded-2xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100 w-[calc(100%-2rem)] sm:w-80 animate-in slide-in-from-bottom-8 duration-700 delay-500">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center shrink-0">
          <Clock className="w-6 h-6 text-gray-700" />
        </div>
        <div>
          <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-2">Opening Hours</h3>
          <div className="space-y-1 text-sm">
            <div className="flex justify-between gap-4">
              <span className="text-gray-500 font-medium">Mon–Sat</span>
              <span className="text-gray-900 font-bold">{weekdays}</span>
            </div>
            <div className="flex justify-between gap-4">
              <span className="text-gray-500 font-medium">Sunday</span>
              <span className="text-gray-900 font-bold">{weekends}</span>
            </div>
          </div>
        </div>
      </div>
      
      {emergencyEnabled && (
        <>
          <div className="h-px bg-gray-100 my-4"></div>
          
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#E53935]/10 flex items-center justify-center shrink-0">
              <Ambulance className="w-5 h-5 text-[#E53935]" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-gray-900">Emergency Support</h4>
              <p className="text-xs font-bold text-[#E53935]">{emergencySupportText}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}


