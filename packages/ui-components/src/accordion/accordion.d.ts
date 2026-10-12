import type { HTMLAttributes, ReactNode } from 'react';

export interface AccordionProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

export interface AccordionItemProps
  extends Omit<HTMLAttributes<HTMLElement>, 'onChange' | 'title'> {
  title: ReactNode;
  index?: number;
  children?: ReactNode;
  expanded?: boolean;
  defaultExpanded?: boolean;
  disabled?: boolean;
  onChange?: (expanded: boolean) => void;
}

export interface AccordionHelperProps extends HTMLAttributes<HTMLSpanElement> {
  children?: ReactNode;
}

export interface AccordionToolbarProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

export declare const AccordionItem: import('react').ForwardRefExoticComponent<
  AccordionItemProps & import('react').RefAttributes<HTMLElement>
>;
export declare const AccordionHelper: import('react').ForwardRefExoticComponent<
  AccordionHelperProps & import('react').RefAttributes<HTMLSpanElement>
>;
export declare const AccordionToolbar: import('react').ForwardRefExoticComponent<
  AccordionToolbarProps & import('react').RefAttributes<HTMLDivElement>
>;

declare const Accordion: import('react').ForwardRefExoticComponent<
  AccordionProps & import('react').RefAttributes<HTMLDivElement>
>;
export default Accordion;
