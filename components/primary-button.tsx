import Link, { LinkProps } from "next/link";
import { ReactNode } from "react";
import { cx } from "@/lib/utils";

type YardimAlButtonProps = LinkProps & {
  children: ReactNode;
  className?: string;
};

export default function PrimaryButton({
  children,
  className,
  ...props
}: YardimAlButtonProps) {
  return (
    <Link
      className={cx(
        "inline-flex h-14 grow items-center gap-4 rounded-xl px-5",
        "border border-zinc-200 font-semibold transition",
        "hover:bg-zinc-100 hover:shadow-lg",
        "dark:border-zinc-700 dark:hover:bg-zinc-800",
        className
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
