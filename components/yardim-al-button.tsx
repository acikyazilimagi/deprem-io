import { LinkProps } from "next/link";
import { ReactNode } from "react";
import { cx } from "@/lib/utils";
import PrimaryButton from "@/components/primary-button";

type YardimAlButtonProps = LinkProps & {
  children: ReactNode;
  className?: string;
};

export default function YardimAlButton({
  children,
  className,
  ...props
}: YardimAlButtonProps) {
  return (
    <PrimaryButton
      className={cx("h-16 shadow-md hover:shadow-lg", className)}
      {...props}
    >
      {children}
    </PrimaryButton>
  );
}
