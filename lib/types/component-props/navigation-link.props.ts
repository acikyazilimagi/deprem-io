import { LinkProps } from 'next/link';
import { HTMLAttributeAnchorTarget, HTMLAttributes } from 'react';

export type NavigationLinkPropsTypes = {
  isExternal?: boolean;
  className?: string;
  children: React.ReactNode;
  target?: HTMLAttributeAnchorTarget;
} & LinkProps &
  HTMLAttributes<HTMLAnchorElement>;
