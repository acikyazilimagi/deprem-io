import React, {
  ReactNode,
  TextareaHTMLAttributes,
  useMemo,
  WheelEvent,
} from 'react'
import {
  Controller,
  useFormContext,
  ControllerRenderProps,
} from 'react-hook-form'
import InputWrapper from '@/components/form/input-wrapper'
import { IconProps } from '@/lib/types/component-props/Icon.props'
import { phoneNumberAutoFormat } from '@/lib/utils'

type TProps =
  | {
      id?: string
      name: string
      label?: string
      className?: string
      icon?: IconProps['icon']
      addon?: ReactNode
      showError?: boolean
    } & {
      fieldName:
        | 'TextInput'
        | 'TextArea'
        | 'Radio'
        | 'CheckBox'
        | 'Button'
        | 'PhoneInput'
      fieldProps?: Omit<
        | React.InputHTMLAttributes<HTMLInputElement>
        | TextareaHTMLAttributes<HTMLTextAreaElement>,
        'name'
      > & { type?: string; min?: number; rows?: number }
      radioGroupData?: Array<{ label: string; value: string }>
    }

type InputProps = {
  field: ControllerRenderProps
  fieldProps?: Omit<
    React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>,
    'name'
  >
  radioGroupData?: Array<{ label: string; value: string }>
}

const FormControl = ({
  fieldName,
  fieldProps,
  name,
  icon,
  label,
  className,
  radioGroupData,
  addon,
  showError,
}: TProps) => {
  const formContext = useFormContext()
  if (!formContext) {
    throw new Error('FormProvider not found')
  }

  const onWheel = (event: WheelEvent) => {
    const target = event.target as HTMLElement
    if (fieldProps?.type === 'number') target.blur()
  }

  const Input = ({ fieldProps, field }: InputProps) =>
    useMemo(() => {
      switch (fieldName) {
        case 'TextInput':
          return <input {...fieldProps} {...field} onWheel={onWheel} />
        case 'TextArea':
          return <textarea {...fieldProps} {...field} />
        case 'Radio':
          return (
            <div className="flex items-center gap-4">
              {radioGroupData?.map((item) => (
                <label className="flex items-center gap-1" key={item.value}>
                  <input
                    type="radio"
                    {...fieldProps}
                    {...field}
                    onChange={(e) => field.onChange(e.target.value)}
                    checked={field.value === item.value}
                    value={item.value}
                  />
                  <span>{item.label}</span>
                </label>
              ))}
            </div>
          )
        case 'CheckBox':
          return (
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                {...fieldProps}
                {...field}
                checked={!!field.value}
              />
              <span>{label}</span>
            </label>
          )
        case 'Button':
          return (
            <button
              className={`${
                !formContext.formState.isValid ? 'opacity-50' : ''
              } mr-2 mb-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ${className} `}
              disabled={!formContext.formState.isValid}
            >
              {label}
            </button>
          )
        case 'PhoneInput':
          return (
            <input
              {...fieldProps}
              {...field}
              type="tel"
              pattern="\([0-9]{3}\) [0-9]{3}-[0-9]{4}"
              onChange={(e) =>
                field.onChange(phoneNumberAutoFormat(e.target.value))
              }
              onWheel={onWheel}
              maxLength={14}
            />
          )
        default:
          return <span>{fieldName} not supported as an input name</span>
      }
    }, [field, fieldProps])

  return (
    <Controller
      name={name}
      control={formContext?.control}
      render={({ field, fieldState }) => {
        const hasError = !!fieldState?.error?.message
        return (
          <div className="flex flex-col">
            <InputWrapper icon={icon} addon={addon}>
              <Input
                field={field}
                fieldProps={{
                  ...fieldProps,
                  className:
                    (icon ? `${className} pl-10` : className) +
                    ' invalid:text-rose-600',
                }}
              />
            </InputWrapper>
            {hasError && showError && (
              <p>
                <label className="label">
                  <span className="label-text-alt text-error">
                    {fieldState?.error?.message}
                  </span>
                </label>
              </p>
            )}
          </div>
        )
      }}
    />
  )
}

export default FormControl
