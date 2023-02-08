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
        "flex grow items-center gap-2 rounded-2xl border border-zinc-100 px-5 py-4 font-semibold shadow-md transition hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-800",
        className
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
