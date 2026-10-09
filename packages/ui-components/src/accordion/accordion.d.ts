import type { HTMLAttributes, MouseEvent, ReactNode } from 'react';

export interface AccordionProps extends Omit<HTMLAttributes<HTMLElement>, 'onChange' | 'title'> {
  children?: ReactNode;
  defaultExpanded?: boolean;
  disabled?: boolean;
  disabledLabel?: ReactNode;
  expandIcon?: ReactNode;
  expanded?: boolean;
  index?: number;
  onChange?: (event: MouseEvent<HTMLButtonElement>, expanded: boolean) => void;
  title: ReactNode;
}

export interface AccordionGroupProps extends Omit<HTMLAttributes<HTMLElement>, 'onChange'> {
  children?: ReactNode;
  defaultExpanded?: number | number[];
  expanded?: number | number[];
  helperText?: ReactNode;
  label?: ReactNode;
  multiple?: boolean;
  onChange?: (event: MouseEvent<HTMLButtonElement>, expanded: number[]) => void;
  showExpandAll?: boolean;
}

declare const Accordion: import('react').ForwardRefExoticComponent<
  AccordionProps & import('react').RefAttributes<HTMLElement>
>;

export declare const AccordionGroup: import('react').ForwardRefExoticComponent<
  AccordionGroupProps & import('react').RefAttributes<HTMLElement>
>;

export default Accordion;
