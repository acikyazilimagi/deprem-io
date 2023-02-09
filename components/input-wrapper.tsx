import React from "react";
import Icon, { Icons } from "@/components/icon";

type InputProps = React.HTMLProps<HTMLInputElement> & {
  icon?: Icons;
  children: React.ReactNode;
};

export default function InputWrapper({ children, icon }: InputProps) {
  const childs: React.ReactNode[] = React.Children.map(
    // @ts-ignore
    children,
    (child: React.ReactElement) => {
      return React.cloneElement(child, {
        className: `${child.props.className} pl-10`,
      });
    }
  );

  return (
    <div className="relative">
      {icon && (
        <span className="pointer-events-none absolute top-0 left-0 flex h-11 w-11 items-center justify-center opacity-60">
          <Icon icon={icon} size={20} />
        </span>
      )}
      {childs}
    </div>
  );
}
