import { SelectPropsTypes } from '@/lib/types/component-props/form-elements/data-inputs.props';

const Select = ({
  name,
  id,
  onChange,
  className,
  disabled,
  tabIndex,
  options,
  placeholder,
  innerRef,
  value,
  ...props
}: SelectPropsTypes) => {
  const fieldProps = {
    name,
    id: id ?? name,
    className,
    onChange,
    disabled,
    tabIndex: disabled ? -1 : tabIndex ?? 0,
    'aria-disabled': disabled,
    'aria-label': placeholder,
    ref: innerRef,
    value,
    ...props,
  };

  if (placeholder != null && value == null) {
    throw new Error('Use the `defaultValue` or `value` props on <select>');
  }

  return (
    <select {...fieldProps}>
      {placeholder != null && <option value="">{placeholder}</option>}
      {options.map(({ value, label }, index) => (
        <option key={index} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
};

export default Select;

Select.displayName = 'Select';
