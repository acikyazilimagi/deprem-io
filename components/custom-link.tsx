import Link, { LinkProps } from "next/link";
import { ReactNode } from "react";
import { cx } from "@/lib/utils";

type CustomLinkProps = LinkProps & {
  children: ReactNode;
  className?: string;
  target?: string;
};

export default function CustomLink({
  children,
  className,
  ...props
}: CustomLinkProps) {
  return (
    <Link className={cx("text-blue-500 underline")} {...props}>
      {children}
    </Link>
  );
}
