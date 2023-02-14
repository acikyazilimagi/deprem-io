import { IPhoneInputProps } from '@/lib/types/component-props/form.props';
import { phoneNumberAutoFormat } from '@/lib/utils';
import { ControllerRenderProps, FieldValues } from 'react-hook-form';

type TPhoneInputProps = {
  field: ControllerRenderProps<FieldValues, string>;
  fieldProps: IPhoneInputProps;
} & { className?: string };

const PhoneInput = ({ field, fieldProps, className }: TPhoneInputProps) => {
  return (
    <input
      {...field}
      className={className}
      type="tel"
      pattern="\([0-9]{3}\) [0-9]{3}-[0-9]{4}"
      onChange={(e) => field.onChange(phoneNumberAutoFormat(e.target.value))}
      maxLength={fieldProps.max}
    />
  );
};

export default PhoneInput;
