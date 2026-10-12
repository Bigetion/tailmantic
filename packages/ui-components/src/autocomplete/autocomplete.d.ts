import type {
  ChangeEvent,
  ComponentPropsWithoutRef,
  ForwardRefExoticComponent,
  ReactNode,
  RefAttributes,
} from 'react';

export interface AutocompleteOption {
  label: string;
  value?: string;
  description?: string;
  detail?: string;
  group?: string;
  mark?: string;
}

export type AutocompleteOptionInput = string | AutocompleteOption;

export interface AutocompleteProps
  extends Omit<ComponentPropsWithoutRef<'input'>, 'type' | 'value' | 'defaultValue' | 'onChange'> {
  options?: AutocompleteOptionInput[];
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string, option: AutocompleteOption | null) => void;
  multiple?: boolean;
  selectedValues?: string[];
  defaultSelectedValues?: string[];
  onSelectedValuesChange?: (values: string[], changedOption: AutocompleteOption | null) => void;
  freeSolo?: boolean;
  label?: string;
  hint?: ReactNode;
  leadingAdornment?: ReactNode;
  trailingAdornment?: ReactNode;
  clearAdornment?: ReactNode;
  removeAdornment?: ReactNode;
  renderOption?: (
    option: AutocompleteOption,
    state: { isActive: boolean; isSelected: boolean },
  ) => ReactNode;
  renderCreateOption?: (value: string) => ReactNode;
  renderEmpty?: ReactNode;
  inputValue?: string;
  defaultInputValue?: string;
  onInputValueChange?: (value: string, event?: ChangeEvent<HTMLInputElement>) => void;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  filterOptions?: (options: AutocompleteOption[], inputValue: string) => AutocompleteOption[];
}

declare const Autocomplete: ForwardRefExoticComponent<
  AutocompleteProps & RefAttributes<HTMLInputElement>
>;

export default Autocomplete;
