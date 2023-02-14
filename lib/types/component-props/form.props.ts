import { PHYSICALSTATE, TRANSPORTATIONSTATE } from '@/lib/enums';
import { ReactNode } from 'react';
import { IconProps } from './icon.props';

export interface ITextInputProps
  extends Omit<Partial<React.InputHTMLAttributes<HTMLInputElement>>, 'type'> {
  type: Omit<React.InputHTMLAttributes<HTMLInputElement>['type'], 'tel'>;
  min?: number;
}

export interface IPhoneInputProps
  extends Omit<Partial<React.InputHTMLAttributes<HTMLInputElement>>, 'max'> {
  max: number;
}

export interface ITextAreaProps
  extends Partial<React.TextareaHTMLAttributes<HTMLTextAreaElement>> {
  min?: number;
  rows?: number;
}

export interface IRadioProps
  extends Partial<React.InputHTMLAttributes<HTMLInputElement>> {
  radioGroupData: Array<{
    label: string;
    value: PHYSICALSTATE | TRANSPORTATIONSTATE;
  }>;
}

export interface ICheckBoxProps
  extends Partial<React.InputHTMLAttributes<HTMLInputElement>> {
  label: string;
}

export interface IButtonProps {
  label: string;
  className?: string;
}

export interface ISelectProps
  extends Partial<React.SelectHTMLAttributes<HTMLSelectElement>> {
  selectOptions: { value: string | boolean | number; label: string }[];
}

export type TInput =
  | {
      fieldProps: ITextInputProps;
    }
  | { fieldProps: IPhoneInputProps }
  | { fieldProps: ITextAreaProps }
  | { fieldProps: IRadioProps }
  | { fieldProps: ICheckBoxProps }
  | { fieldProps: IButtonProps }
  | { fieldProps: ISelectProps };

export type TInputProps = {
  field: any;
  className: string;
} & TInput;

export type IFormControlProps = {
  className?: string;
  icon?: IconProps['icon'];
  addon?: ReactNode;
  showError?: boolean;
  name: string;
  fieldName: string;
} & TInput;
