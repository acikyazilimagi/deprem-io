import {
  IRadioProps,
  ITextAreaProps,
} from '@/lib/types/component-props/form.props';
import React from 'react';
import { ControllerRenderProps, FieldValues } from 'react-hook-form';

type TRadioProps = {
  field: ControllerRenderProps<FieldValues, string>;
  fieldProps: IRadioProps;
} & { className?: string };

const Radio = ({ field, fieldProps, className }: TRadioProps) => {
  return (
    <div className="flex items-center gap-4">
      {fieldProps.radioGroupData.map((item) => (
        <label className="flex items-center gap-1" key={item.value}>
          <input
            type="radio"
            {...field}
            onChange={(e) => field.onChange(e.target.value)}
            checked={field.value === item.value}
            value={item.value}
            className={className}
          />
          <span>{item.label}</span>
        </label>
      ))}
    </div>
  );
};

export default Radio;
