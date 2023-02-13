import { HTMLInputTypeAttribute, WheelEvent } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import InputWrapper from '@/components/form/input-wrapper'
import { phoneNumberAutoFormat } from '@/lib/utils'

import {
  IFormControlProps,
  ITextInputProps,
  TInputProps,
} from '@/lib/types/component-props/form.props'

const onWheelListener = (type?: string) => (event: WheelEvent) => {
  const target = event.target as HTMLElement
  if (type === 'number') {
    target.blur()
  }
}

const FormControl = ({
  fieldName,
  fieldProps,
  name,
  icon,
  className,
  addon,
  showError,
}: IFormControlProps) => {
  const formContext = useFormContext()

  if (!formContext) {
    throw new Error('FormProvider not found')
  }

  const Input = ({ field, className, fieldProps, fieldName }: TInputProps) => {
    switch (fieldName) {
      case 'TextInput':
        return (
          <input
            {...fieldProps}
            {...field}
            onWheel={onWheelListener(fieldProps?.type as string)}
            className={className}
          />
        )
      case 'TextArea':
        return <textarea {...fieldProps} {...field} className={className} />
      case 'Radio':
        return (
          <div className="flex items-center gap-4">
            {fieldProps.radioGroupData.map((item) => (
              <label className="flex items-center gap-1" key={item.value}>
                <input
                  type="radio"
                  {...field}
                  onChange={(e) => field.onChange(e.target.value)}
                  checked={field.value === item.value}
                  value={item.value}
                  className={className}
                />
                <span>{item.label}</span>
              </label>
            ))}
          </div>
        )
      case 'CheckBox':
        console.log(className)
        return (
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              {...field}
              checked={!!field.value}
              className={className}
            />
            <span>{fieldProps.label}</span>
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
            {fieldProps.label}
          </button>
        )
      case 'PhoneInput':
        return (
          <input
            {...field}
            className={className}
            type="tel"
            pattern="\([0-9]{3}\) [0-9]{3}-[0-9]{4}"
            onChange={(e) =>
              field.onChange(phoneNumberAutoFormat(e.target.value))
            }
            maxLength={fieldProps.max}
          />
        )
      case 'Select':
        return (
          <select
            {...field}
            onChange={(e) => field.onChange(e.target.value)}
            className={className}
          >
            {fieldProps.selectOptions.map(({ value, label }, index) => (
              <option key={index} value={value as string}>
                {label}
              </option>
            ))}
          </select>
        )
      default:
        return <span>{fieldName} not supported as an input name</span>
    }
  }

  return (
    <Controller
      name={name}
      control={formContext.control}
      render={({ field, fieldState }) => {
        const hasError = !!fieldState?.error?.message

        return (
          <div className="flex flex-col">
            <InputWrapper icon={icon} addon={addon}>
              <Input
                field={field}
                fieldName={fieldName as any}
                fieldProps={fieldProps as any}
                className={
                  (icon ? `${className} pl-10` : className) +
                  ' invalid:text-rose-600' +
                  (hasError ? ' text-rose-600' : '')
                }
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
