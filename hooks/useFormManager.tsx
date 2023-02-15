import { yupResolver } from '@hookform/resolvers/yup';
import { FormProvider, UseFormProps, useForm } from 'react-hook-form';
import type {
  FieldErrors,
  FieldValues,
  SubmitErrorHandler,
  SubmitHandler,
  UseFormReturn,
} from 'react-hook-form';

type TProps = {
  formInitializer?: UseFormReturn<FieldValues, object>;
  defaultValues?: Record<string, any> | undefined;
  validationSchema?: any;
  onSubmit: (
    data: FieldValues,
    event?: React.BaseSyntheticEvent | undefined
  ) => any | Promise<any>;
  onError?: (
    errors: FieldErrors,
    event?: React.BaseSyntheticEvent | undefined
  ) => any | Promise<any>;
};

const useFormManager = ({
  defaultValues,
  validationSchema,
  onSubmit,
  onError,
}: TProps) => {
  const defaultInitializerOptions: UseFormProps = {
    shouldFocusError: true,
    defaultValues,
    mode: 'onChange',
  };

  const formInitializer = useForm({
    ...(validationSchema
      ? {
          resolver: yupResolver(validationSchema),
        }
      : undefined),
    ...defaultInitializerOptions,
  });

  const FormManagerProvider = ({ children }: { children: React.ReactNode }) => {
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

  return {
    FormManagerProvider,
    formInitializer,
  };
};

export default useFormManager;
