import React from 'react';

export interface TableProps extends React.TableHTMLAttributes<HTMLTableElement> {
  children: React.ReactNode;
}

export const Table = React.forwardRef<HTMLTableElement, TableProps>(
  ({ className = '', children, ...props }, ref) => {
    return (
      <div className="w-full overflow-auto rounded-lg border border-[var(--color-border)]">
        <table ref={ref} className={`w-full caption-bottom text-sm ${className}`} {...props}>
          {children}
        </table>
      </div>
    );
  }
);
Table.displayName = 'Table';

export const TableHeader = React.forwardRef<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement>>(
  ({ className = '', ...props }, ref) => (
    <thead ref={ref} className={`[&_tr]:border-b border-[var(--color-border)] bg-[var(--color-neutral-50)] ${className}`} {...props} />
  )
);
TableHeader.displayName = 'TableHeader';

export const TableBody = React.forwardRef<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement>>(
  ({ className = '', ...props }, ref) => (
    <tbody ref={ref} className={`[&_tr:last-child]:border-0 ${className}`} {...props} />
  )
);
TableBody.displayName = 'TableBody';

export const TableRow = React.forwardRef<HTMLTableRowElement, React.HTMLAttributes<HTMLTableRowElement>>(
  ({ className = '', ...props }, ref) => (
    <tr ref={ref} className={`border-b border-[var(--color-border)] transition-colors hover:bg-[var(--color-neutral-50)] data-[state=selected]:bg-[var(--color-neutral-100)] ${className}`} {...props} />
  )
);
TableRow.displayName = 'TableRow';

export const TableHead = React.forwardRef<HTMLTableCellElement, React.ThHTMLAttributes<HTMLTableCellElement>>(
  ({ className = '', ...props }, ref) => (
    <th ref={ref} className={`h-12 px-4 text-left align-middle font-medium text-[var(--color-text-secondary)] [&:has([role=checkbox])]:pr-0 ${className}`} {...props} />
  )
);
TableHead.displayName = 'TableHead';

export const TableCell = React.forwardRef<HTMLTableCellElement, React.TdHTMLAttributes<HTMLTableCellElement>>(
  ({ className = '', ...props }, ref) => (
    <td ref={ref} className={`p-4 align-middle [&:has([role=checkbox])]:pr-0 ${className}`} {...props} />
  )
);
TableCell.displayName = 'TableCell';

