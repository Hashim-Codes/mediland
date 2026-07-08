import React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className = '', label, error, helperText, ...props }, ref) => {
    const baseInputStyles = 'flex h-12 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm placeholder:text-white/40 text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary disabled:cursor-not-allowed disabled:opacity-50 transition-all shadow-sm hover:border-white/20';
    const errorStyles = error ? 'border-red-500 focus:ring-red-500/50 focus:border-red-500' : '';
    
    return (
      <div className="w-full flex flex-col space-y-1.5">
        {label && (
          <label className="text-sm font-medium text-white/90">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={`${baseInputStyles} ${errorStyles} ${className}`}
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

Input.displayName = 'Input';

