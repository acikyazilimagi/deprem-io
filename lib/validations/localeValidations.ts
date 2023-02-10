import type { ValidationError } from "yup";

export const NAMESPACE: string = "common";
export const DOMAIN_VALIDATIONS: string = "validations";

// For more info about yup validation
//--------------------------------------
// args => https://github.com/jquense/yup/blob/master/src/ValidationError.ts
// locales => https://github.com/jquense/yup/blob/master/src/locale.ts

export const LOCALE_VALIDATIONS: any = {
  mixed: {
    default: (args: ValidationError) => ({
      key: `${NAMESPACE}:${DOMAIN_VALIDATIONS}.mixed.default`,
      args,
    }),
    required: (args: ValidationError) => ({
      key: `${NAMESPACE}:${DOMAIN_VALIDATIONS}.mixed.required`,
      args,
    }),
    imageDimensions: (args: ValidationError) => ({
      key: `${NAMESPACE}:${DOMAIN_VALIDATIONS}.mixed.imageDimensions`,
      args,
    }),
    imageType: (args: ValidationError) => ({
      key: `${NAMESPACE}:${DOMAIN_VALIDATIONS}.mixed.imageType`,
      args,
    }),
  },
  string: {
    length: (args: ValidationError) => ({
      key: `${NAMESPACE}:${DOMAIN_VALIDATIONS}.string.length`,
      args,
    }),
    min: (args: ValidationError) => ({
      key: `${NAMESPACE}:${DOMAIN_VALIDATIONS}.string.min`,
      args,
    }),
    max: (args: ValidationError) => ({
      key: `${NAMESPACE}:${DOMAIN_VALIDATIONS}.string.max`,
      args,
    }),
    matches: (args: ValidationError) => ({
      key: `${NAMESPACE}:${DOMAIN_VALIDATIONS}.string.matches`,
      args,
    }),
    email: (args: ValidationError) => ({
      key: `${NAMESPACE}:${DOMAIN_VALIDATIONS}.string.email`,
      args,
    }),
    trim: (args: ValidationError) => ({
      key: `${NAMESPACE}:${DOMAIN_VALIDATIONS}.string.trim`,
      args,
    }),
    lowercase: (args: ValidationError) => ({
      key: `${NAMESPACE}:${DOMAIN_VALIDATIONS}.string.lowercase`,
      args,
    }),
    uppercase: (args: ValidationError) => ({
      key: `${NAMESPACE}:${DOMAIN_VALIDATIONS}.string.uppercase`,
      args,
    }),
  },
  number: {
    min: (args: ValidationError) => ({
      key: `${NAMESPACE}:${DOMAIN_VALIDATIONS}.number.min`,
      args,
    }),
    max: (args: ValidationError) => ({
      key: `${NAMESPACE}:${DOMAIN_VALIDATIONS}.number.max`,
      args,
    }),
    lessThan: (args: ValidationError) => ({
      key: `${NAMESPACE}:${DOMAIN_VALIDATIONS}.number.lessThan`,
      args,
    }),
    moreThan: (args: ValidationError) => ({
      key: `${NAMESPACE}:${DOMAIN_VALIDATIONS}.number.moreThan`,
      args,
    }),
    positive: (args: ValidationError) => ({
      key: `${NAMESPACE}:${DOMAIN_VALIDATIONS}.number.positive`,
      args,
    }),
    negative: (args: ValidationError) => ({
      key: `${NAMESPACE}:${DOMAIN_VALIDATIONS}.number.negative`,
      args,
    }),
  },
  date: {
    min: (args: ValidationError) => ({
      key: `${NAMESPACE}:${DOMAIN_VALIDATIONS}.date.min`,
      args,
    }),
    max: (args: ValidationError) => ({
      key: `${NAMESPACE}:${DOMAIN_VALIDATIONS}.date.max`,
      args,
    }),
  },
  boolean: {
    isValue: (args: ValidationError) => ({
      key: `${NAMESPACE}:${DOMAIN_VALIDATIONS}.boolean.isValue`,
      args,
    }),
  },
  object: {
    noUnknown: (args: ValidationError) => ({
      key: `${NAMESPACE}:${DOMAIN_VALIDATIONS}.object.noUnknown`,
      args,
    }),
  },
  array: {
    min: (args: ValidationError) => ({
      key: `${NAMESPACE}:${DOMAIN_VALIDATIONS}.array.min`,
      args,
    }),
    max: (args: ValidationError) => ({
      key: `${NAMESPACE}:${DOMAIN_VALIDATIONS}.array.max`,
      args,
    }),
    length: (args: ValidationError) => ({
      key: `${NAMESPACE}:${DOMAIN_VALIDATIONS}.array.length`,
      args,
    }),
  },
};
