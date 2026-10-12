import type { ButtonHTMLAttributes, ReactNode } from 'react';

export interface SelectOption {
  label: string;
  value?: string;
  detail?: string;
  description?: string;
  disabled?: boolean;
}

export type SelectOptionInput = string | SelectOption;

export interface SelectProps
  extends Omit<
    ButtonHTMLAttributes<HTMLButtonElement>,
    'children' | 'defaultValue' | 'name' | 'onChange' | 'value'
  > {
  options?: SelectOptionInput[];
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string, option: SelectOption | null) => void;
  multiple?: boolean;
  selectedValues?: string[];
  defaultSelectedValues?: string[];
  onSelectedValuesChange?: (values: string[], changedOption: SelectOption | null) => void;
  name?: string;
  label?: ReactNode;
  helperText?: ReactNode;
  error?: boolean;
  required?: boolean;
  placeholder?: string;
  renderOption?: (
    option: SelectOption,
    state: { isActive: boolean; isSelected: boolean },
  ) => ReactNode;
}

declare const Select: import('react').ForwardRefExoticComponent<
  SelectProps & import('react').RefAttributes<HTMLButtonElement>
>;

export default Select;
