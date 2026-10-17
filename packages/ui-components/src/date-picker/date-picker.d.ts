import type { ButtonHTMLAttributes, ReactNode } from 'react';

export type DatePickerChangeHandler = (value: string) => void;

export interface DatePickerProps
  extends Omit<
    ButtonHTMLAttributes<HTMLButtonElement>,
    'children' | 'defaultValue' | 'name' | 'onChange' | 'type' | 'value'
  > {
  buttonClassName?: string;
  defaultValue?: string;
  error?: boolean;
  helperText?: ReactNode;
  label?: ReactNode;
  dateFormat?: string;
  maxDate?: string;
  minDate?: string;
  name?: string;
  onChange?: DatePickerChangeHandler;
  placeholder?: string;
  popoverClassName?: string;
  showMonthYearSelect?: boolean;
  value?: string;
}

declare const DatePicker: import('react').ForwardRefExoticComponent<
  DatePickerProps & import('react').RefAttributes<HTMLButtonElement>
>;

export default DatePicker;
