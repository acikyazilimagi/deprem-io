import Link, { LinkProps } from "next/link";
import { ReactNode } from "react";

type YardimHaritalariButtonProps = LinkProps & {
  children: ReactNode;
  className?: string;
  target?: string;
};

export default function YardimHaritalariButton({
  children,
  className,
  ...props
}: YardimHaritalariButtonProps) {
  return (
    <Link
      className="flex flex-col gap-4 rounded-xl border border-zinc-200 p-4 transition hover:shadow-lg dark:border-zinc-800 dark:hover:bg-zinc-800"
      {...props}
    >
      {children}
    </Link>
  );
}
