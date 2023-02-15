import { BaseInputElementPropsType } from '@/lib/types/component-props/form-elements/data-inputs.props';

const BaseInput = ({
  disabled,
  tabIndex,
  innerRef,
  placeholder,
  ...props
}: BaseInputElementPropsType) => {
  const fieldProps = {
    placeholder,
    disabled,
    tabIndex: disabled ? -1 : tabIndex ?? 0,
    'aria-disabled': disabled,
    ref: innerRef,
    ...props,
  };

  return <input {...fieldProps} />;
};

export default BaseInput;

BaseInput.displayName = 'BaseInput';
