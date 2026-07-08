import React from 'react';
import { Star, CheckCircle } from 'lucide-react';

interface TrustBadgeProps {
  type: 'google' | 'verified' | 'certified' | 'emergency';
  text?: string;
  className?: string;
}

export function TrustBadge({ type, text, className = '' }: TrustBadgeProps) {
  if (type === 'google') {
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        <div className="flex text-yellow-400">
          <Star className="w-4 h-4 fill-current" />
          <Star className="w-4 h-4 fill-current" />
          <Star className="w-4 h-4 fill-current" />
          <Star className="w-4 h-4 fill-current" />
          <Star className="w-4 h-4 fill-current" />
        </div>
        {text && <span className="text-sm font-bold text-gray-700">{text}</span>}
      </div>
    );
  }

  if (type === 'verified') {
    return (
      <div className={`flex items-center gap-1.5 text-green-600 ${className}`}>
        <CheckCircle className="w-4 h-4" />
        <span className="text-xs font-bold uppercase tracking-wider">{text || 'Verified'}</span>
      </div>
    );
  }

  return null;
}

