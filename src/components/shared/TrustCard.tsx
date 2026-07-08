import React from 'react';
import { Shield } from 'lucide-react';

interface TrustCardProps {
  badgeText: string;
}

export function TrustCard({ badgeText }: TrustCardProps) {
  return (
    <div className="inline-flex items-center gap-2 bg-white border border-[#E53935]/20 px-3 py-1.5 rounded-full mb-8 shadow-sm">
      <Shield className="w-4 h-4 text-[#E53935]" />
      <span className="text-xs font-bold text-gray-800 tracking-wide uppercase">
        {badgeText}
      </span>
    </div>
  );
}


