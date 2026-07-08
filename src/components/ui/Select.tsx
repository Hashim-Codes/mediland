import React from 'react';

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  helperText?: string;
  options: { value: string; label: string }[];
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className = '', label, error, helperText, options, ...props }, ref) => {
    const baseStyles = 'flex h-12 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary disabled:cursor-not-allowed disabled:opacity-50 transition-shadow appearance-none text-white [&>option]:bg-surface [&>option]:text-white';
    const errorStyles = error ? 'border-[var(--color-danger-500)] focus:ring-[var(--color-danger-500)]' : '';
    
    return (
      <div className="w-full flex flex-col space-y-1.5 relative">
        {label && (
          <label className="text-sm font-medium text-white/90">
            {label}
          </label>
        )}
        <div className="relative">
          <select
            ref={ref}
            className={`${baseStyles} ${errorStyles} ${className}`}
            {...props}
          >
            {options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[var(--color-neutral-500)]">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
        {(error || helperText) && (
          <p className={`text-xs ${error ? 'text-[var(--color-danger-600)]' : 'text-[var(--color-text-secondary)]'}`}>
            {error || helperText}
          </p>
        )}
      </div>
    );
  }
);

Select.displayName = 'Select';

