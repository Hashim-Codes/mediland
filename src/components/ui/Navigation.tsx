import React from 'react';

export interface TopBarProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  title?: React.ReactNode;
  actions?: React.ReactNode;
}

export const TopBar = React.forwardRef<HTMLDivElement, TopBarProps>(
  ({ className = '', title, actions, ...props }, ref) => (
    <header
      ref={ref}
      className={`sticky top-0 z-30 flex h-16 items-center justify-between border-b border-[var(--color-border)] bg-[var(--color-surface)]/80 backdrop-blur-md px-4 sm:px-6 lg:px-8 ${className}`}
      {...props}
    >
      <div className="flex items-center gap-4 text-lg font-bold text-[var(--color-text-primary)]">
        {title}
      </div>
      {actions && <div className="flex items-center gap-3">{actions}</div>}
    </header>
  )
);
TopBar.displayName = 'TopBar';

export interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const Sidebar = React.forwardRef<HTMLDivElement, SidebarProps>(
  ({ className = '', children, ...props }, ref) => (
    <aside
      ref={ref}
      className={`hidden md:flex flex-col w-64 border-r border-[var(--color-border)] bg-[var(--color-neutral-50)] h-screen overflow-y-auto ${className}`}
      {...props}
    >
      {children}
    </aside>
  )
);
Sidebar.displayName = 'Sidebar';

export interface NavItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode;
  label: string;
  active?: boolean;
}

export const NavItem = React.forwardRef<HTMLButtonElement, NavItemProps>(
  ({ className = '', icon, label, active, ...props }, ref) => (
    <button
      ref={ref}
      className={`flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-500)] ${
        active
          ? 'bg-[var(--color-primary-50)] text-[var(--color-primary-700)]'
          : 'text-[var(--color-text-secondary)] hover:bg-[var(--color-neutral-100)] hover:text-[var(--color-text-primary)]'
      } ${className}`}
      {...props}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      {label}
    </button>
  )
);
NavItem.displayName = 'NavItem';

