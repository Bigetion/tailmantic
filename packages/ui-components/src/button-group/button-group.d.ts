import type { HTMLAttributes, MouseEvent, ReactNode } from 'react';

export type ButtonGroupOrientation = 'horizontal' | 'vertical';
export type ButtonGroupVariant = 'default' | 'segmented' | 'spaced';

export interface ButtonGroupProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  orientation?: ButtonGroupOrientation;
  variant?: ButtonGroupVariant;
}

export interface SplitButtonAction {
  disabled?: boolean;
  label: ReactNode;
  value: string;
}

export interface SplitButtonGroupProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onAction'> {
  actions?: SplitButtonAction[];
  children?: never;
  defaultOpen?: boolean;
  disabled?: boolean;
  onAction?: (value: string, action: SplitButtonAction) => void;
  onOpenChange?: (open: boolean) => void;
  onPrimaryClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  open?: boolean;
  primaryIcon?: ReactNode;
  primaryLabel: ReactNode;
}

declare const ButtonGroup: import('react').ForwardRefExoticComponent<
  ButtonGroupProps & import('react').RefAttributes<HTMLDivElement>
>;

export declare const SplitButtonGroup: import('react').ForwardRefExoticComponent<
  SplitButtonGroupProps & import('react').RefAttributes<HTMLDivElement>
>;

export default ButtonGroup;
