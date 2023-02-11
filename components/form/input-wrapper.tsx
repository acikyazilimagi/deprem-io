import React from "react";
import Icon from "@/components/icon";
import { IconProps } from "@/lib/types/component-props/Icon.props";

type InputProps = React.HTMLProps<HTMLInputElement> & {
  icon?: IconProps["icon"];
  children: React.ReactNode;
};

export default function InputWrapper({ children, icon }: InputProps) {
  return (
    <div className="relative">
      {icon && (
        <span className="pointer-events-none absolute top-0 left-0 flex h-11 w-11 items-center justify-center opacity-60 dark:opacity-40">
          <Icon icon={icon} size={20} />
        </span>
      )}
      {children}
    </div>
  );
}
