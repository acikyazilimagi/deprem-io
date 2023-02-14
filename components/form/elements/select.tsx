import { ISelectProps } from '@/lib/types/component-props/form.props';

import { ControllerRenderProps, FieldValues } from 'react-hook-form';

type TSelectProps = {
  field: ControllerRenderProps<FieldValues, string>;
  fieldProps: ISelectProps;
} & { className?: string };

const Input = ({ field, fieldProps, className }: TSelectProps) => {
  return (
    <select
      {...field}
      onChange={(e) => field.onChange(e.target.value)}
      className={className}
    >
      {fieldProps.selectOptions.map(({ value, label }, index) => (
        <option key={index} value={value as string}>
          {label}
        </option>
      ))}
    </select>
  );
};

export default Input;
