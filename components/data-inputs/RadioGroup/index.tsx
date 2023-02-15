import { RadioGroupPropsTypes } from '@/lib/types/component-props/form-elements/data-inputs.props';

import Radio from '@/components/data-inputs/Radio';

const RadioGroup = ({
  name,
  id,
  onChange,
  className,
  disabled,
  tabIndex,
  innerRef,
  checked,
  label,
  options,
  value,
  ...props
}: RadioGroupPropsTypes) => {
  const fieldProps = {
    name,
    type: 'radio',
    className,
    onChange,
    disabled,
    tabIndex: disabled ? -1 : tabIndex ?? 0,
    'aria-disabled': disabled,
    innerRef,
    ...props,
  };

  return (
    <div className="grid grid-flow-row gap-4 sm:grid-flow-col">
      {options.map((radioItem, index) => {
        const id = `${radioItem.value}-${index}`;

        return (
          <Radio
            key={id}
            {...fieldProps}
            id={id}
            aria-label={radioItem.label}
            label={radioItem.label}
            checked={value === radioItem.value}
            value={radioItem.value}
          />
        );
      })}
    </div>
  );
};

export default RadioGroup;

RadioGroup.displayName = 'RadioGroup';
