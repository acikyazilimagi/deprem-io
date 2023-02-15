import { NumberInputPropsTypes } from '@/lib/types/component-props/form-elements/data-inputs.props';

import BaseInput from '@/components/data-inputs/BaseInput';

const NumberInput = ({
  name,
  id,
  onChange,
  value = '',
  className,
  disabled,
  tabIndex,
  innerRef,
  placeholder,
  onWheel,
  ...props
}: NumberInputPropsTypes) => {
  function onWheelHandler(event: React.WheelEvent<HTMLInputElement>) {
    const target = event.target as HTMLElement;
    onWheel?.(event);
    target.blur();
  }

  const fieldProps = {
    name,
    id: id ?? name,
    value,
    className,
    placeholder,
    onChange,
    onWheel: onWheelHandler,
    disabled,
    tabIndex: disabled ? -1 : tabIndex ?? 0,
    'aria-disabled': disabled,
    'aria-label': placeholder,
    innerRef,
    ...props,
  };

  return <BaseInput type="number" {...fieldProps} />;
};

export default NumberInput;

NumberInput.displayName = 'NumberInput';
