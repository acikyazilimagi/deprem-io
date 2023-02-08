import Link, { LinkProps } from "next/link";
import { ReactNode } from "react";
import { cx } from "@/lib/utils";

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
    <Link
      className={cx(
        "flex grow items-center gap-2 rounded-xl border border-gray-100 px-6 py-4 font-semibold text-red-600 shadow-lg transition hover:shadow-xl",
        className
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
