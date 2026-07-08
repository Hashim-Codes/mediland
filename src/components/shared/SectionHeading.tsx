import React from 'react';

interface SectionHeadingProps {
  label: string;
  headingLine1: string;
  headingHighlight: string;
  description: string;
  primaryColor: string;
}

export function SectionHeading({ label, headingLine1, headingHighlight, description, primaryColor }: SectionHeadingProps) {
  return (
    <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16">
      <span 
        className="text-xs font-bold tracking-[0.2em] uppercase mb-4"
        style={{ color: primaryColor }}
      >
        {label}
      </span>
      <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-6">
        {headingLine1} <br className="hidden sm:block" />
        <span style={{ color: primaryColor }}>{headingHighlight}</span>
      </h2>
      <p className="text-gray-600 text-lg font-medium leading-relaxed max-w-xl">
        {description}
      </p>
    </div>
  );
}


