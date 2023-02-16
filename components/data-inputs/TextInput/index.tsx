import { useMemo } from 'react';

import { TextInputPropsTypes } from '@/lib/types/component-props/form-elements/data-inputs.props';
import { phoneNumberAutoFormat } from '@/lib/utils';

import BaseInput from '@/components/data-inputs/BaseInput';

const TextInput = ({
  name,
  id,
  onChange,
  value = '',
  className,
  disabled,
  tabIndex,
  innerRef,
  placeholder,
  pattern,
  type = 'text',
  ...props
}: TextInputPropsTypes) => {
  const inputPattern = useMemo(() => {
    if (pattern) {
      return pattern;
    }

    switch (type) {
      case 'email':
        return '[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$';
      case 'url':
        return 'https?://.+';
      case 'tel':
        return '([0-9]{3}) [0-9]{3}-[0-9]{4}';
      default:
        return undefined;
    }
  }, [pattern, type]);

  function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    if (onChange) {
      if (type === 'tel') {
        e.target.value = phoneNumberAutoFormat(e.target.value);
      }
    }
    onChange?.(e);
  }

  const fieldProps = {
    type,
    name,
    id: id ?? name,
    value,
    className,
    placeholder,
    onChange: onChangeHandler,
    disabled,
    pattern: inputPattern,
    tabIndex: disabled ? -1 : tabIndex ?? 0,
    'aria-disabled': disabled,
    'aria-label': placeholder,
    innerRef,
    ...props,
  };

  return <BaseInput {...fieldProps} />;
};

export default TextInput;

TextInput.displayName = 'TextInput';
