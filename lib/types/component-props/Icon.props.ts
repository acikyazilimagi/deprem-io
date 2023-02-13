import { SVGProps } from 'react';

import { ICON_NAMES } from '@/lib/constants/ICONS';

export type IconProps = SVGProps<SVGSVGElement> & {
  size?: number;
  icon: keyof typeof ICON_NAMES;
};
