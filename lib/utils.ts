import { ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { ObjectSchema, SchemaDescription } from 'yup'
import * as yup from 'yup'

export function cx(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export const phoneNumberAutoFormat = (phoneNumber: string): string => {
  let number = '(' + phoneNumber.trim().replace(/[^0-9]/g, '')
  if (number.substring(0, 2) === '(0') number = number.replace('0', '')

  if (number.length < 4) return number
  if (number.length < 8) return number.replace(/(\d{3})(\d{1})/, '$1) $2')
  return number.replace(/(\d{3})(\d{3})(\d{1})/, '$1) $2-$3').substring(0, 14)
}

export const getConstraintsFromValidation = (
  schema: ObjectSchema<any>,
  field: string,
  constraintName: string
) => {
  const fieldRule: any = (
    schema.describe().fields[field] as SchemaDescription
  ).tests.find((rule) => rule.name === constraintName)
  return fieldRule?.params[constraintName]
}

export const stripEmptyString = (value: any) =>
  value === '' ? undefined : value

export const noop = () => {}
