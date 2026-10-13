import type { HTMLAttributes } from 'react';

export interface PaginationProps extends Omit<HTMLAttributes<HTMLElement>, 'onChange'> {
  count?: number;
  page?: number;
  onChange?: (event: React.MouseEvent<HTMLButtonElement>, page: number) => void;
  siblingCount?: number;
  boundaryCount?: number;
  showFirstButton?: boolean;
  showLastButton?: boolean;
  disabled?: boolean;
  getItemAriaLabel?: (
    type: 'page' | 'first' | 'previous' | 'next' | 'last',
    page: number,
  ) => string;
}
declare const Pagination: import('react').ForwardRefExoticComponent<
  PaginationProps & import('react').RefAttributes<HTMLElement>
>;
export default Pagination;
