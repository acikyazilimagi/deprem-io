import { LinkProps } from 'next/link';
import { ReactNode } from 'react';

export type HelpMapsButtonProps = LinkProps & {
  children: ReactNode;
  className?: string;
  target?: string;
};
