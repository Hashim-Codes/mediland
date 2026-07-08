import React from 'react';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className = '', label, error, helperText, ...props }, ref) => {
    const baseStyles = 'flex w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary disabled:cursor-not-allowed disabled:opacity-50 transition-all shadow-sm hover:border-gray-300 resize-y min-h-[100px]';
    const errorStyles = error ? 'border-red-500 focus:ring-red-500/50 focus:border-red-500' : '';
    
    return (
      <div className="w-full flex flex-col space-y-1.5">
        {label && (
          <label className="text-sm font-medium text-[var(--color-text-primary)]">
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          className={`${baseStyles} ${errorStyles} ${className}`}
          {...props}
        />
        {(error || helperText) && (
          <p className={`text-xs ${error ? 'text-[var(--color-danger-600)]' : 'text-[var(--color-text-secondary)]'}`}>
            {error || helperText}
          </p>
        )}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';

