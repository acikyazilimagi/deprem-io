import { IconProps } from '@/lib/types/component-props/icon.props';
import { ReactNode } from 'react';
import { ICON_PATHS_MAP } from '@/lib/constants/icons';

export default function Icon({ size = 24, icon, ...props }: IconProps) {
  const children: ReactNode = ICON_PATHS_MAP.get(icon);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      aria-hidden="true"
      width={size}
      height={size}
      {...props}
    >
      {children}
    </svg>
  );
}
