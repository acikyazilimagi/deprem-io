import { CheckboxPropsTypes } from '@/lib/types/component-props/form-elements/data-inputs.props';

const Checkbox = ({
  name,
  id,
  onChange,
  className,
  disabled,
  tabIndex,
  innerRef,
  checked,
  label,
  ...props
}: CheckboxPropsTypes) => {
  const fieldProps = {
    name,
    id: id ?? name,
    type: 'checkbox',
    className,
    onChange,
    disabled,
    tabIndex: disabled ? -1 : tabIndex ?? 0,
    'aria-disabled': disabled,
    'aria-label': label,
    ref: innerRef,
    defaultChecked: checked,
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

export default Checkbox;

Checkbox.displayName = 'Checkbox';
