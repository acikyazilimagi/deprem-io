import { PropsWithChildren } from 'react';

import {
  COMPONENT_SIZES,
  COMPONENT_VARIANTS,
  SEVERITIES,
} from '@/lib/constants/COMPONENT_VARIABELS';

export type AlertPropsType = PropsWithChildren<{
  variant?: keyof typeof COMPONENT_VARIANTS | keyof typeof SEVERITIES;
  size?: keyof typeof COMPONENT_SIZES;
  className?: string;
  isOutline?: boolean;
  withIcon?: boolean;
}>;
