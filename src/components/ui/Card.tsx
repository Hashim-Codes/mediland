import React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  interactive?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className = '', padding = 'md', interactive = false, children, ...props }, ref) => {
    
    const paddings = {
      none: '',
      sm: 'p-3',
      md: 'p-4 md:p-6',
      lg: 'p-6 md:p-8',
    };

    const classes = [
      'bg-white',
      'border border-gray-200',
      'rounded-2xl', // modern premium SaaS uses slightly larger radius
      'shadow-sm',
      interactive ? 'hover:-translate-y-[2px] hover:shadow-lg hover:border-gray-300 transition-all duration-300 cursor-pointer' : '',
      paddings[padding],
      className
    ].filter(Boolean).join(' ');

    return (
      <div ref={ref} className={classes} {...props}>
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

