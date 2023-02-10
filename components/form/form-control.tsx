import React, { useMemo } from "react";
import { Controller, useFormContext } from "react-hook-form";
import InputWrapper from "@/components/form/input-wrapper";
import { IconProps } from "@/lib/types/component-props/Icon.props";
import { cx } from "@/lib/utils";

type TProps =
  | {
      id?: string;
      name: string;
      icon?: IconProps["icon"];
    } & {
      fieldName: "TextInput" | "TextArea" | "Radio" | "CheckBox" | "Button";
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

  const Input = ({ fieldProps, field }) =>
    useMemo(() => {
      switch (fieldName) {
        case "TextInput":
          return (
            <input
              {...fieldProps}
              {...field}
              onWheel={(event) => {
                if (fieldProps.type === "number") event.target.blur();
              }}
            />
          );
        case "TextArea":
          return <textarea {...fieldProps} {...field} />;
        case "Radio":
          return (
            <div className="flex items-center gap-4">
              {fieldProps.fields.map((item) => (
                <label className="flex items-center gap-1" key={item.value}>
                  <input
                    type="radio"
                    {...fieldProps}
                    {...field}
                    onChange={(e) => field.onChange(e.target.checked)}
                    checked={field.value === item.value}
                  />
                  <span>{item.value}</span>
                </label>
              ))}
            </div>
          );
        case "CheckBox":
          return (
            <label className="flex items-center gap-2">
              <input type="checkbox" {...fieldProps} {...field} />
              <span>{fieldProps.label}</span>
            </label>
          );
        case "Button":
          const className = fieldProps?.className ?? "";
          return (
            <button
              {...fieldProps}
              className={`${
                !formContext.formState.isValid ? "opacity-50" : ""
              } ${className}`}
              disabled={!formContext.formState.isValid}
            >
              {fieldProps.label}
            </button>
          );
        default:
          return <span>{fieldName} not supported as an input name</span>;
      }
    }, [field, fieldProps]);

  return (
    <Controller
      name={name}
      control={formContext?.control}
      render={({ field, fieldState }) => {
        const hasError = !!fieldState?.error?.message;
        return (
          <div className="flex flex-col">
            <InputWrapper icon={icon}>
              <Input
                field={field}
                fieldProps={{
                  ...fieldProps,
                  className: icon
                    ? `${fieldProps.className} pl-10`
                    : fieldProps.className,
                }}
              />
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
