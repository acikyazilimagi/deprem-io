import { LinkProps } from 'next/link';
import { ReactNode } from 'react';

export type YardimHaritalariButtonProps = LinkProps & {
  children: ReactNode;
  className?: string;
  target?: string;
};
