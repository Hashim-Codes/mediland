import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', variant = 'primary', size = 'md', fullWidth = false, children, disabled, ...props }, ref) => {
    
    // Base styles: Mobile-first, tap-friendly, responsive typography, micro-interactions
    const baseStyles = 'inline-flex items-center justify-center font-semibold transition-all duration-200 active:scale-95 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none rounded-lg shadow-sm';
    
    const variants = {
      primary: 'bg-primary text-white hover:bg-primary-dark focus:ring-primary/50 shadow-primary/20',
      secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-gray-400 border border-transparent hover:border-gray-300',
      danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500 shadow-red-600/20',
      ghost: 'bg-transparent text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:ring-gray-400 shadow-none',
      outline: 'bg-transparent border border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300 focus:ring-gray-400 shadow-none'
    };

    const sizes = {
      sm: 'h-8 px-3 text-sm',
      md: 'h-10 px-4 py-2 text-sm', // Tap-friendly height for mobile
      lg: 'h-12 px-6 text-base'
    };

    const classes = [
      baseStyles,
      variants[variant],
      sizes[size],
      fullWidth ? 'w-full' : '',
      className
    ].filter(Boolean).join(' ');

    return (
      <button
        ref={ref}
        disabled={disabled}
        className={classes}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

