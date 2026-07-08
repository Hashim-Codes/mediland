import React from 'react';
import { Quote } from 'lucide-react';
import { Testimonial } from '@/types';
import { TrustBadge } from '@/components/ui';

interface TestimonialCardProps {
  testimonial: Testimonial;
  primaryColor: string;
}

export function TestimonialCard({ testimonial, primaryColor }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-[20px] p-8 shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100 h-full flex flex-col relative group hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-300">
      <div 
        className="absolute top-8 right-8 opacity-10 group-hover:opacity-20 transition-opacity duration-300"
        style={{ color: primaryColor }}
      >
        <Quote className="w-12 h-12 fill-current" />
      </div>
      
      <TrustBadge type="google" className="mb-6" />
      
      <p className="text-gray-700 text-lg font-medium leading-relaxed mb-8 flex-grow relative z-10">
        &ldquo;{testimonial.text}&rdquo;
      </p>
      
      <div className="mt-auto">
        <h4 className="font-bold text-gray-900 mb-1">{testimonial.author}</h4>
        <div className="flex items-center gap-2">
          {testimonial.role && <p className="text-sm text-gray-500">{testimonial.role}</p>}
          {testimonial.role && <span className="text-gray-300">•</span>}
          <TrustBadge type="verified" />
        </div>
      </div>
    </div>
  );
}



