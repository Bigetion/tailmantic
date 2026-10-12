import type { InputHTMLAttributes, ReactNode } from 'react';

export interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  endAdornment?: ReactNode;
  error?: boolean;
  errorText?: ReactNode;
  helperText?: ReactNode;
  inputClassName?: string;
  label?: ReactNode;
  startAdornment?: ReactNode;
}

declare const TextField: import('react').ForwardRefExoticComponent<
  TextFieldProps & import('react').RefAttributes<HTMLInputElement>
>;

export default TextField;
