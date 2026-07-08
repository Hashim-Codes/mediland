'use client';

import React, { useState } from 'react';

export interface TabItem {
  id: string;
  label: string;
  content: React.ReactNode;
}

export interface TabsProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  tabs: TabItem[];
  defaultTabId?: string;
  onChange?: (tabId: string) => void;
}

export const Tabs = React.forwardRef<HTMLDivElement, TabsProps>(
  ({ className = '', tabs, defaultTabId, onChange, ...props }, ref) => {
    const [activeTab, setActiveTab] = useState(defaultTabId || tabs[0]?.id);

    const handleTabClick = (id: string) => {
      setActiveTab(id);
      if (onChange) onChange(id);
    };

    return (
      <div ref={ref} className={`w-full ${className}`} {...props}>
        <div className="flex space-x-1 border-b border-[var(--color-border)] mb-4 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              className={`px-4 py-2 text-sm font-medium transition-colors border-b-2 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-500)] focus:ring-offset-1 rounded-t-md ${
                activeTab === tab.id
                  ? 'border-[var(--color-primary-600)] text-[var(--color-primary-700)] bg-[var(--color-primary-50)]'
                  : 'border-transparent text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:border-[var(--color-neutral-300)] hover:bg-[var(--color-neutral-50)]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div>
          {tabs.find((tab) => tab.id === activeTab)?.content}
        </div>
      </div>
    );
  }
);

Tabs.displayName = 'Tabs';

