import React from 'react';

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'rectangular' | 'circular' | 'text';
}

export const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  ({ className = '', variant = 'rectangular', ...props }, ref) => {
    const variants = {
      rectangular: 'rounded-md',
      circular: 'rounded-full',
      text: 'rounded h-4 w-3/4',
    };

    const classes = [
      'animate-pulse bg-[var(--color-neutral-200)]',
      variants[variant],
      className
    ].filter(Boolean).join(' ');

    return <div ref={ref} className={classes} {...props} />;
  }
);

Skeleton.displayName = 'Skeleton';

