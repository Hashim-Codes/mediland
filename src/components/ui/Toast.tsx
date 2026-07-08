'use client';

import React, { useState, useEffect } from 'react';

// Basic Toast implementation without a context provider to keep it simple for now.
// A real app would use a toast provider.
export interface ToastProps {
  title: string;
  description?: string;
  type?: 'success' | 'error' | 'info';
  duration?: number;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ title, description, type = 'info', duration = 3000, onClose }) => {
  useEffect(() => {
    if (duration === Infinity) return;
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const icons = {
    success: '✅',
    error: '❌',
    info: 'ℹ️'
  };

  const borders = {
    success: 'border-[var(--color-success-500)]',
    error: 'border-[var(--color-danger-500)]',
    info: 'border-[var(--color-primary-500)]'
  };

  return (
    <div className={`fixed bottom-4 right-4 z-50 flex w-full max-w-sm overflow-hidden bg-[var(--color-surface)] rounded-lg shadow-lg border-l-4 ${borders[type]} border-y border-r border-[var(--color-border)] animate-[fadeIn_0.2s_ease-out]`}>
      <div className="flex items-start p-4">
        <div className="flex-shrink-0 mr-3 text-xl">
          {icons[type]}
        </div>
        <div className="flex-1 w-0">
          <p className="text-sm font-bold text-[var(--color-text-primary)]">{title}</p>
          {description && <p className="mt-1 text-sm text-[var(--color-text-secondary)]">{description}</p>}
        </div>
        <div className="flex-shrink-0 ml-4 flex">
          <button
            onClick={onClose}
            className="inline-flex text-[var(--color-neutral-400)] hover:text-[var(--color-neutral-700)] focus:outline-none"
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  );
};

Toast.displayName = 'Toast';

