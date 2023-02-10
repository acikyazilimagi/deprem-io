import React, { TextareaHTMLAttributes, useMemo, WheelEvent } from "react";
import {
  Controller,
  useFormContext,
  ControllerRenderProps,
} from "react-hook-form";
import InputWrapper from "@/components/form/input-wrapper";
import { IconProps } from "@/lib/types/component-props/Icon.props";
import { cx } from "@/lib/utils";

type TProps =
  | {
      id?: string;
      name: string;
      label?: string;
      className?: string;
      icon?: IconProps["icon"];
    } & {
      fieldName: "TextInput" | "TextArea" | "Radio" | "CheckBox" | "Button";
      fieldProps?: Omit<
        | React.InputHTMLAttributes<HTMLInputElement>
        | TextareaHTMLAttributes<HTMLTextAreaElement>,
        "name"
      > & { type?: string; min?: number; rows?: number };
      radioLabels?: Array<string>;
    };

type InputProps = {
  field: ControllerRenderProps;
  fieldProps?: Omit<
    React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>,
    "name"
  >;
  radioLabels?: Array<string>;
};

const FormControl = ({
  fieldName,
  fieldProps,
  id,
  name,
  icon,
  label,
  className,
  radioLabels,
}: TProps) => {
  const formContext = useFormContext();
  if (!formContext) {
    throw new Error("FormProvider not found");
  }

  const onWheel = (event: WheelEvent) => {
    const target = event.target as HTMLElement;
    if (fieldProps?.type === "number") target.blur();
  };

  const Input = ({ fieldProps, field }: InputProps) =>
    useMemo(() => {
      switch (fieldName) {
        case "TextInput":
          return <input {...fieldProps} {...field} onWheel={onWheel} />;
        case "TextArea":
          return <textarea {...fieldProps} {...field} />;
        case "Radio":
          return (
            <div className="flex items-center gap-4">
              {radioLabels?.map((item) => (
                <label className="flex items-center gap-1" key={item}>
                  <input
                    type="radio"
                    {...fieldProps}
                    {...field}
                    onChange={(e) => field.onChange(e.target.checked)}
                    checked={field.value === item}
                  />
                  <span>{item}</span>
                </label>
              ))}
            </div>
          );
        case "CheckBox":
          return (
            <label className="flex items-center gap-2">
              <input type="checkbox" {...fieldProps} {...field} />
              <span>{label}</span>
            </label>
          );
        case "Button":
          return (
            <button
              className={`${
                !formContext.formState.isValid ? "opacity-50" : ""
              } ${className}`}
              disabled={!formContext.formState.isValid}
            >
              {label}
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
                  className: icon ? `${className} pl-10` : className,
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
