import { Controller, useFormContext } from 'react-hook-form';
import InputWrapper from '@/components/form/input-wrapper';

import { IFormControlProps } from '@/lib/types/component-props/form.props';
import dynamic from 'next/dynamic';
import { useMemo } from 'react';

const FormControl = ({
  fieldName,
  fieldProps,
  name,
  icon,
  className = '',
  addon,
  showError,
}: IFormControlProps) => {
  const formContext = useFormContext();

  if (!formContext) {
    throw new Error('FormProvider not found');
  }

  const lowerCaseFieldName = fieldName.toLowerCase().trim();

  if (!lowerCaseFieldName) {
    throw new Error('Field name is must!');
  }
  const memoizedProps = useMemo(
    () => ({
      fieldProps,
      className,
    }),
    [fieldProps, className]
  );

  const DynamicElement: any = dynamic(
    () => import(`./elements/${lowerCaseFieldName}`)
  );

  const DynamicErrorMessage = dynamic(() => import('./elements/error-message'));

  const classGenerator = (hasError: boolean) => {
    return (
      (icon ? `${memoizedProps.className} pl-10` : memoizedProps.className) +
      ' invalid:text-rose-600' +
      (hasError ? ' text-rose-600' : '')
    );
  };

  return (
    <Controller
      name={name}
      control={formContext.control}
      render={({ field, fieldState }) => {
        const hasError = !!fieldState?.error?.message;

        return (
          <div className="flex flex-col">
            <InputWrapper icon={icon} addon={addon}>
              <DynamicElement
                field={field}
                fieldProps={memoizedProps.fieldProps as any}
                className={classGenerator(hasError)}
                control={formContext.control}
              />
            </InputWrapper>

            {hasError && showError && fieldState?.error?.message && (
              <DynamicErrorMessage message={fieldState.error.message} />
            )}
          </div>
        );
      }}
    />
  );
};

export default FormControl;
