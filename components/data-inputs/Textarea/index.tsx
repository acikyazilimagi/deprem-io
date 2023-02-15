import { LegacyRef, useRef, useState } from 'react';

import { TextareaPropsTypes } from '@/lib/types/component-props/form-elements/data-inputs.props';
import { cx } from '@/lib/utils';

import useIsomorphicLayoutEffect from '@/hooks/useIsomorphicLayoutEffect';

const Textarea = ({
  name,
  id,
  onChange,
  value = '',
  className,
  disabled,
  tabIndex,
  innerRef,
  autogrow,
  placeholder,
  ...props
}: TextareaPropsTypes) => {
  const textAreaRef = useRef(innerRef?.current);

  const [currentValue, setCurrentValue] = useState<string>(value as string);

  useIsomorphicLayoutEffect(() => {
    if (autogrow && textAreaRef?.current) {
      textAreaRef.current.style.height = 'auto';
      const scrollHeight = textAreaRef.current.scrollHeight;

      textAreaRef.current.style.height = scrollHeight + 'px';
    }
  }, [autogrow, textAreaRef?.current?.value]);

  const handleOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    let { value: targetValue } = e.target;

    setCurrentValue(targetValue);

    if (onChange) {
      onChange(e);
    }
  };

  const fieldProps = {
    name,
    id: id ?? name,
    value: currentValue,
    className: cx(className, {
      'resize-none': autogrow,
    }),
    onChange: handleOnChange,
    disabled,
    placeholder,
    tabIndex: disabled ? -1 : tabIndex ?? 0,
    'aria-disabled': disabled,
    'aria-label': placeholder,
    ref: textAreaRef as LegacyRef<HTMLTextAreaElement>,
    ...props,
  };

  return <textarea {...fieldProps}></textarea>;
};

export default Textarea;

Textarea.displayName = 'Textarea';
