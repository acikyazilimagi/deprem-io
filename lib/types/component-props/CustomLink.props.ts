import { LinkProps } from "next/link";
import { ReactNode } from "react";

export type CustomLinkProps = LinkProps & {
  children?: ReactNode;
  className?: string;
  target?: string;
  key?: string;
};
