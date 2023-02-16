import { RadioPropsTypes } from '@/lib/types/component-props/form-elements/data-inputs.props';

const Radio = ({
  name,
  id,
  onChange,
  className,
  disabled,
  tabIndex,
  innerRef,
  label,
  ...props
}: RadioPropsTypes) => {
  const fieldProps = {
    name,
    id: id ?? name,
    type: 'radio',
    className,
    onChange,
    disabled,
    tabIndex: disabled ? -1 : tabIndex ?? 0,
    'aria-disabled': disabled,
    'aria-label': label,
    ref: innerRef,
    ...props,
  };

  return (
    <div className="flex items-center gap-2">
      <input {...fieldProps} />
      <label htmlFor={fieldProps.id} className="cursor-pointer font-semibold">
        {label}
      </label>
    </div>
  );
};

export default Radio;

Radio.displayName = 'Radio';
