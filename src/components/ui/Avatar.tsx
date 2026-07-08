import React from 'react';

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string;
  initials?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  ({ className = '', src, initials, size = 'md', ...props }, ref) => {
    const sizes = {
      sm: 'w-8 h-8 text-xs',
      md: 'w-10 h-10 text-sm',
      lg: 'w-12 h-12 text-base',
    };

    const classes = [
      'relative flex shrink-0 overflow-hidden rounded-full bg-[var(--color-primary-100)] text-[var(--color-primary-700)] items-center justify-center font-bold',
      sizes[size],
      className
    ].filter(Boolean).join(' ');

    return (
      <div ref={ref} className={classes} {...props}>
        {src ? (
          <img src={src} alt={initials || 'Avatar'} className="aspect-square h-full w-full object-cover" />
        ) : (
          initials || '?'
        )}
      </div>
    );
  }
);

Avatar.displayName = 'Avatar';

