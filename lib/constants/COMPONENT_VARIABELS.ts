import dynamicKeyValuePairs from '@/lib/helpers/dynamic-key-value-pairs';

// For more info: https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods
export const COMPONENT_VARIANTS = {
  ...dynamicKeyValuePairs({
    keys: ['default', 'primary', 'secondary', 'ghost'],
  }),
} as const;

export const COMPONENT_SIZES = {
  ...dynamicKeyValuePairs({
    keys: ['xs', 'sm', 'regular', 'lg', 'xl'],
  }),
} as const;
