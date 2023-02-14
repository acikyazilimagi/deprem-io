import { ITextInputProps } from '@/lib/types/component-props/form.props';
import { onWheelListener } from '@/lib/utils';
import { ControllerRenderProps, FieldValues } from 'react-hook-form';

type TInputProps = {
  field: ControllerRenderProps<FieldValues, string>;
  fieldProps: ITextInputProps;
} & { className?: string };

const Input = ({ field, fieldProps, className }: TInputProps) => {
  return (
    <input
      {...(fieldProps as any)}
      {...field}
      onWheel={onWheelListener(fieldProps?.type as string)}
      className={className}
    />
  );
};

export default Input;
