'use client';

import React, { useEffect, useRef } from 'react';

export interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  position?: 'right' | 'left';
}

export const Drawer: React.FC<DrawerProps> = ({ isOpen, onClose, title, children, footer, position = 'right' }) => {
  const drawerRef = useRef<HTMLDivElement>(null);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/30 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />
      
      {/* Drawer Panel */}
      <div 
        ref={drawerRef}
        role="dialog"
        aria-modal="true"
        className={`relative flex flex-col bg-[var(--color-surface)] shadow-[var(--shadow-drawer)] w-full max-w-md h-full transform transition-transform animate-[slideIn_0.2s_ease-out] ${
          position === 'right' ? 'ml-auto' : 'mr-auto'
        }`}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-[var(--color-border)] shrink-0">
          <h2 className="text-xl font-bold text-[var(--color-text-primary)]">{title}</h2>
          <button 
            onClick={onClose}
            className="p-2 -mr-2 text-[var(--color-neutral-500)] hover:text-[var(--color-neutral-900)] hover:bg-[var(--color-neutral-100)] rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-500)]"
            aria-label="Close panel"
          >
            ✕
          </button>
        </div>
        
        <div className="flex-1 overflow-y-auto p-6">
          {children}
        </div>

        {footer && (
          <div className="px-6 py-4 border-t border-[var(--color-border)] shrink-0 bg-[var(--color-neutral-50)]">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
};

Drawer.displayName = 'Drawer';

