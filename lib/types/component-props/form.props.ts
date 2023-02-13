import { PhysicalState, TransportationState } from '@/lib/enums'
import { ReactNode } from 'react'
import { IconProps } from './Icon.props'

export interface ITextInputProps
  extends Omit<Partial<React.InputHTMLAttributes<HTMLInputElement>>, 'type'> {
  type: Omit<React.InputHTMLAttributes<HTMLInputElement>['type'], 'tel'>
  min?: number
}

interface IPhoneInputProps
  extends Omit<Partial<React.InputHTMLAttributes<HTMLInputElement>>, 'max'> {
  max: number
}

interface ITextAreaProps
  extends Partial<React.TextareaHTMLAttributes<HTMLTextAreaElement>> {
  min?: number
  rows?: number
}

interface IRadioProps
  extends Partial<React.InputHTMLAttributes<HTMLInputElement>> {
  radioGroupData: Array<{
    label: string
    value: PhysicalState | TransportationState
  }>
}

interface ICheckBoxProps
  extends Partial<React.InputHTMLAttributes<HTMLInputElement>> {
  label: string
}

interface IButtonProps {
  label: string
}

interface ISelectProps
  extends Partial<React.SelectHTMLAttributes<HTMLSelectElement>> {
  selectOptions: { value: string | boolean | number; label: string }[]
}

export type TInput =
  | {
      fieldName: 'TextInput'
      fieldProps: ITextInputProps
    }
  | { fieldName: 'PhoneInput'; fieldProps: IPhoneInputProps }
  | { fieldName: 'TextArea'; fieldProps: ITextAreaProps }
  | { fieldName: 'Radio'; fieldProps: IRadioProps }
  | { fieldName: 'CheckBox'; fieldProps: ICheckBoxProps }
  | { fieldName: 'Button'; fieldProps: IButtonProps }
  | { fieldName: 'Select'; fieldProps: ISelectProps }

export type TInputProps = {
  field: any
  className: string
} & TInput

export type IFormControlProps = {
  className?: string
  icon?: IconProps['icon']
  addon?: ReactNode
  showError?: boolean
  name: string
} & TInput
