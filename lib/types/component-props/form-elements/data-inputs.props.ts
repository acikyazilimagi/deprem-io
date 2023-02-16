import {
  HTMLInputTypeAttribute,
  InputHTMLAttributes,
  MutableRefObject,
  SelectHTMLAttributes,
  TextareaHTMLAttributes,
} from 'react';

import { DataInputWrapperPropsType } from './data-input-wrapper.props';

export type BaseFormElementPropsType<T = any> = {
  name: string;
  innerRef?: MutableRefObject<T>;
  label?: string;
  showError?: boolean;
  withLabel?: boolean;
};

export type OptionType<T = any> = {
  value: T;
  label: string;
};

export type BaseHTMLInputTypeAttribute = Exclude<
  HTMLInputTypeAttribute,
  | 'button'
  | 'checkbox'
  | 'file'
  | 'image'
  | 'submit'
  | 'radio'
  | 'reset'
  | 'range'
>;

export type TextHTMLInputTypeAttribute = Exclude<
  BaseHTMLInputTypeAttribute,
  'password' | 'number'
>;

export type BaseInputElementPropsType = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'type'
> &
  BaseFormElementPropsType<HTMLInputElement> & {
    type: BaseHTMLInputTypeAttribute;
  };

export type WithoutTypeBaseInputElementPropsType = Omit<
  BaseInputElementPropsType,
  'type'
>;

// ===========================================

export type TextInputPropsTypes = WithoutTypeBaseInputElementPropsType & {
  type: TextHTMLInputTypeAttribute;
};

export type NumberInputPropsTypes = WithoutTypeBaseInputElementPropsType;

export type TextareaPropsTypes = TextareaHTMLAttributes<HTMLTextAreaElement> &
  BaseFormElementPropsType<HTMLTextAreaElement> & {
    autogrow?: boolean;
  };

export type SelectPropsTypes = SelectHTMLAttributes<HTMLSelectElement> &
  BaseFormElementPropsType<HTMLSelectElement> & {
    options: OptionType<string>[];
  };

export type CheckboxPropsTypes = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'type'
> &
  BaseFormElementPropsType<HTMLInputElement> & {
    label?: string;
  };

export type RadioPropsTypes = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'type'
> &
  BaseFormElementPropsType<HTMLInputElement> & {
    label?: string;
  };

export type RadioGroupPropsTypes = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'type'
> &
  BaseFormElementPropsType<HTMLInputElement> & {
    options: OptionType<string>[];
  };

// ===========================================

export type FormControlPropsType = {
  wrapperProps?: Omit<DataInputWrapperPropsType, 'elementId'>;
} & BaseFormElementPropsType &
  (
    | {
        fieldName: 'TextInput';
        fieldProps?: Omit<TextInputPropsTypes, keyof BaseFormElementPropsType>;
      }
    | {
        fieldName: 'NumberInput';
        fieldProps?: Omit<
          NumberInputPropsTypes,
          keyof BaseFormElementPropsType
        >;
      }
    | {
        fieldName: 'Textarea';
        fieldProps?: Omit<TextareaPropsTypes, keyof BaseFormElementPropsType>;
      }
    | {
        fieldName: 'Select';
        fieldProps?: Omit<SelectPropsTypes, keyof BaseFormElementPropsType>;
      }
    | {
        fieldName: 'Checkbox';
        fieldProps?: Omit<
          CheckboxPropsTypes,
          Exclude<keyof BaseFormElementPropsType, 'label'>
        >;
      }
    | {
        fieldName: 'Radio';
        fieldProps?: Omit<
          RadioPropsTypes,
          Exclude<keyof BaseFormElementPropsType, 'label'>
        >;
      }
    | {
        fieldName: 'RadioGroup';
        fieldProps?: Omit<RadioGroupPropsTypes, keyof BaseFormElementPropsType>;
      }
  );
