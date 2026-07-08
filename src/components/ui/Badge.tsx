import React from 'react';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'neutral' | 'primary' | 'success' | 'warning' | 'danger';
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className = '', variant = 'neutral', children, ...props }, ref) => {
    
    const variants = {
      neutral: 'bg-[var(--color-neutral-100)] text-[var(--color-neutral-700)] border border-[var(--color-neutral-200)]',
      primary: 'bg-[var(--color-primary-50)] text-[var(--color-primary-700)] border border-[var(--color-primary-200)]',
      success: 'bg-[var(--color-success-50)] text-[var(--color-success-700)] border border-[var(--color-success-200)]',
      warning: 'bg-[var(--color-warning-50)] text-[var(--color-warning-700)] border border-[var(--color-warning-200)]',
      danger: 'bg-[var(--color-danger-50)] text-[var(--color-danger-700)] border border-[var(--color-danger-200)]',
    };

    const classes = [
      'inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium',
      variants[variant],
      className
    ].filter(Boolean).join(' ');

    return (
      <span ref={ref} className={classes} {...props}>
        {children}
      </span>
    );
  }
);

Badge.displayName = 'Badge';

