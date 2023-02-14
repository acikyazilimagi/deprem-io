import { ICheckBoxProps } from '@/lib/types/component-props/form.props';
import { ControllerRenderProps, FieldValues } from 'react-hook-form';

type TCheckBoxProps = {
  field: ControllerRenderProps<FieldValues, string>;
  fieldProps: ICheckBoxProps;
} & { className?: string };

const CheckBox = ({ field, fieldProps, className }: TCheckBoxProps) => {
  return (
    <label className="flex items-center gap-2">
      <input
        type="checkbox"
        {...field}
        checked={!!field.value}
        className={className}
      />
      <span>{fieldProps.label}</span>
    </label>
  );
};

export default CheckBox;
