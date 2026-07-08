'use client';

import React, { useEffect } from 'react';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, description, children, footer }) => {
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-sm animate-[fadeIn_0.15s_ease-out]"
        onClick={onClose}
        aria-hidden="true"
      />
      
      {/* Modal Dialog */}
      <div 
        role="dialog"
        aria-modal="true"
        className="relative bg-[var(--color-surface)] rounded-xl shadow-2xl w-full max-w-lg overflow-hidden animate-[fadeIn_0.15s_ease-out] transform transition-all"
      >
        <div className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h2 className="text-xl font-bold text-[var(--color-text-primary)]">{title}</h2>
              {description && (
                <p className="text-sm text-[var(--color-text-secondary)] mt-1">{description}</p>
              )}
            </div>
            <button 
              onClick={onClose}
              className="p-1 ml-4 text-[var(--color-neutral-400)] hover:text-[var(--color-neutral-800)] rounded focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-500)]"
              aria-label="Close dialog"
            >
              ✕
            </button>
          </div>
          
          <div className="mt-2">
            {children}
          </div>
        </div>

        {footer && (
          <div className="px-6 py-4 bg-[var(--color-neutral-50)] border-t border-[var(--color-border)] flex items-center justify-end space-x-3">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
};

Modal.displayName = 'Modal';

