import dynamic from 'next/dynamic';
import { ComponentType } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import { FormControlPropsType } from '@/lib/types/component-props/form-elements/data-inputs.props';
import { cx } from '@/lib/utils';

import DataInputWrapper from '@/components/data-inputs/DataInputWrapper';

const FormControl = ({
  fieldName,
  fieldProps,
  name,
  wrapperProps,
  showError = true,
  withLabel = true,
  label,
}: FormControlPropsType) => {
  const formContext = useFormContext();

  if (!formContext) {
    throw new Error('Form Provider not found!');
  }

  const { className, placeholder, ...restFieldProps } = fieldProps as any;

  const FormInputElement: ComponentType<any> = dynamic(
    async () => import(`@/components/data-inputs/${fieldName}`),
    {
      ssr: true,
    }
  );

  const wrapperLabel = withLabel
    ? label ?? wrapperProps?.label ?? placeholder
    : null;

  return (
    <Controller
      name={name}
      control={formContext.control}
      render={({ field, fieldState }) => {
        const { ref, ...restField } = field;
        const hasError = !!fieldState?.error?.message;
        return (
          <DataInputWrapper
            {...wrapperProps}
            label={wrapperLabel}
            elementId={fieldProps?.id ?? name}
          >
            <FormInputElement
              innerRef={ref}
              className={cx(className, {
                'pl-10': wrapperProps?.icon,
              })}
              placeholder={placeholder}
              {...restFieldProps}
              {...restField}
            />
            {hasError && showError && (
              <p className="pl-2 text-sm text-error">
                {fieldState?.error?.message}
              </p>
            )}
          </DataInputWrapper>
        );
      }}
    />
  );
};

export default FormControl;
