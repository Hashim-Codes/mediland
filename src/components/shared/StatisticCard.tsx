import React from 'react';
import { StatItem } from '@/types';

interface StatisticCardProps {
  stat: StatItem;
  index: number;
}

export function StatisticCard({ stat, index }: StatisticCardProps) {
  return (
    <div className={`flex flex-col items-center text-center ${index !== 0 ? 'pt-8 sm:pt-0' : ''}`}>
      <span className="text-4xl lg:text-5xl font-black text-[#E53935] mb-2 tracking-tight">{stat.number}</span>
      <h4 className="text-lg font-bold text-gray-900 mb-1">{stat.title}</h4>
      <p className="text-sm text-gray-500 font-medium">{stat.description}</p>
    </div>
  );
}


