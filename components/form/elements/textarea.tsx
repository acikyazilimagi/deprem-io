import { ITextAreaProps } from '@/lib/types/component-props/form.props';
import React from 'react';
import { ControllerRenderProps, FieldValues } from 'react-hook-form';

type TTextAreAProps = {
  field: ControllerRenderProps<FieldValues, string>;
  fieldProps: ITextAreaProps;
} & { className?: string };

function TextArea({ field, fieldProps, className }: TTextAreAProps) {
  return <textarea {...fieldProps} {...field} className={className} />;
}

export default TextArea;
