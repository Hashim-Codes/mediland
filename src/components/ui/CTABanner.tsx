import React from 'react';
import { ArrowRight } from 'lucide-react';

interface CTABannerProps {
  label?: string;
  heading: string;
  description: string;
  primaryButtonLabel: string;
  secondaryButtonLabel?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  primaryColor: string;
  className?: string;
}

export function CTABanner({
  label,
  heading,
  description,
  primaryButtonLabel,
  secondaryButtonLabel,
  onPrimaryClick,
  onSecondaryClick,
  primaryColor,
  className = ''
}: CTABannerProps) {
  return (
    <div className={`relative overflow-hidden rounded-[2rem] bg-gray-900 text-white px-8 py-16 md:py-24 md:px-16 text-center ${className}`}>
      {/* Decorative Glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 blur-[120px] rounded-full opacity-20 pointer-events-none"
        style={{ backgroundColor: primaryColor }}
      />
      
      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
        {label && (
          <span 
            className="text-sm font-bold tracking-[0.2em] uppercase mb-6 block"
            style={{ color: primaryColor }}
          >
            {label}
          </span>
        )}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6">
          {heading}
        </h2>
        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl">
          {description}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <button
            onClick={onPrimaryClick}
            className="px-8 py-4 rounded-[14px] text-white font-bold text-lg hover:-translate-y-1 hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group"
            style={{ backgroundColor: primaryColor }}
          >
            {primaryButtonLabel}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          
          {secondaryButtonLabel && (
            <button
              onClick={onSecondaryClick}
              className="px-8 py-4 rounded-[14px] bg-white/10 hover:bg-white/20 text-white font-bold text-lg backdrop-blur-md transition-all duration-300"
            >
              {secondaryButtonLabel}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

