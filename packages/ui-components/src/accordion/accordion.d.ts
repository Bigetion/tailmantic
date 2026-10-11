import type { ReactNode } from 'react';

export interface AccordionProps {
  children?: ReactNode;
}

export interface AccordionItemProps {
  /** Header title rendered inside the trigger button */
  title: ReactNode;
  /** Optional numeric index displayed as a zero-padded label */
  index?: number;
  /** Panel content */
  children?: ReactNode;
  /** Controlled expanded state */
  expanded?: boolean;
  /** Initial expanded state for uncontrolled usage */
  defaultExpanded?: boolean;
  /** When true, the item is non-interactive */
  disabled?: boolean;
  /** Called when the trigger is clicked, receives the next expanded value */
  onChange?: (expanded: boolean) => void;
}

export interface AccordionHelperProps {
  children?: ReactNode;
}

export interface AccordionToolbarProps {
  children?: ReactNode;
}

export declare function AccordionItem(props: AccordionItemProps): JSX.Element;
export declare function AccordionHelper(props: AccordionHelperProps): JSX.Element;
export declare function AccordionToolbar(props: AccordionToolbarProps): JSX.Element;

declare const Accordion: (props: AccordionProps) => JSX.Element;
export default Accordion;
