import React, { useMemo } from "react";
import { Controller, useFormContext } from "react-hook-form";
import InputWrapper from "@/components/form/input-wrapper";
import { IconProps } from "@/lib/types/component-props/Icon.props";

type TProps =
  | {
      id?: string;
      name: string;
      icon?: IconProps["icon"];
    } & {
      fieldName: "TextInput";
      fieldProps?: Omit<React.InputHTMLAttributes<HTMLInputElement>, "name">;
    };

const FormControl = (
  { fieldName, fieldProps, id, name, icon }: TProps,
  ref
) => {
  const formContext = useFormContext();
  if (!formContext) {
    throw new Error("FormProvider not found");
  }

  const Input = useMemo(
    ({ fieldProps, field }) => {
      switch (fieldName) {
        case "TextInput":
          return <input {...fieldProps} {...field} />;
          break;
        default:
          return <span>{fieldName} not supported as an input name</span>;
          break;
      }
    },
    [fieldName]
  );

  return (
    <Controller
      name={name}
      control={formContext?.control}
      render={({ field, fieldState }) => {
        const hasError = !!fieldState?.error?.message;
        return (
          <div className="flex flex-col">
            <InputWrapper icon={icon}>
              <Input {...fieldProps} {...field} />
            </InputWrapper>
            {hasError && (
              <label className="label">
                <span className="label-text-alt text-error">
                  {fieldState?.error?.message}
                </span>
              </label>
            )}
          </div>
        );
      }}
    />
  );
};

export default FormControl;
