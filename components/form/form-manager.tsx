import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import type {
  FieldErrors,
  FieldValues,
  SubmitErrorHandler,
  SubmitHandler,
  UseFormProps,
  UseFormReturn,
} from "react-hook-form";
import * as yup from "yup";

export type TProps = (
  | {
      formInitializer: UseFormReturn<FieldValues, object>;
      onSubmit: (
        data: FieldValues,
        event?: React.BaseSyntheticEvent | undefined
      ) => any | Promise<any>;
      onError?: (
        errors: FieldErrors,
        event?: React.BaseSyntheticEvent | undefined
      ) => any | Promise<any>;
      defaultValues?: undefined;
      validationSchema?: undefined;
      formInitOptions?: undefined;
    }
  | {
      formInitializer?: undefined;
      onSubmit: (
        data: FieldValues,
        event?: React.BaseSyntheticEvent | undefined
      ) => any | Promise<any>;
      onError?: (
        errors: FieldErrors,
        event?: React.BaseSyntheticEvent | undefined
      ) => any | Promise<any>;
      defaultValues?: Record<string, any> | undefined;
      validationSchema?: any;
      formInitOptions?: Omit<UseFormProps, "defaultValues">;
    }
) & {
  children: React.ReactNode;
};

const FormManager = ({
  onSubmit,
  onError,
  validationSchema,
  defaultValues,
  formInitOptions,
  children,
}: TProps) => {
  const defaultFormInitializerProps: Omit<UseFormProps, "defaultValues"> = {
    shouldFocusError: true,
  };

  const initOpts = {
    ...defaultFormInitializerProps,
    ...formInitOptions,
    defaultValues,
  };

  const formInitializer = useForm({
    ...(validationSchema
      ? { resolver: yupResolver(validationSchema) }
      : undefined),

    ...initOpts,
  });

  const onFormValid: SubmitHandler<FieldValues> = (data, event) => {
    event?.preventDefault();
    onSubmit(data, event);
  };

  const onFormErrors: SubmitErrorHandler<FieldValues> = (errors, event) => {
    event?.preventDefault();
    if (onError) {
      onError(errors, event);
    }
  };
  
  return (
    <FormProvider {...formInitializer}>
      <form
        onSubmit={formInitializer.handleSubmit(onFormValid, onFormErrors)}
        noValidate
        autoComplete="off"
      >
        {children}
      </form>
    </FormProvider>
  );
};

export default FormManager;
