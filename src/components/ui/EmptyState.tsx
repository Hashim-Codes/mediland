import React from 'react';

export interface EmptyStateProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  action?: React.ReactNode;
}

export const EmptyState = React.forwardRef<HTMLDivElement, EmptyStateProps>(
  ({ className = '', title, description, icon, action, ...props }, ref) => {
    const classes = [
      'flex flex-col items-center justify-center p-8 md:p-12 text-center rounded-xl border border-dashed border-[var(--color-neutral-300)] bg-[var(--color-neutral-50)]',
      className
    ].filter(Boolean).join(' ');

    return (
      <div ref={ref} className={classes} {...props}>
        {icon && (
          <div className="mb-4 text-[var(--color-neutral-400)]">
            {icon}
          </div>
        )}
        <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-2">
          {title}
        </h3>
        {description && (
          <p className="text-sm text-[var(--color-text-secondary)] mb-6 max-w-sm">
            {description}
          </p>
        )}
        {action && <div>{action}</div>}
      </div>
    );
  }
);

EmptyState.displayName = 'EmptyState';

