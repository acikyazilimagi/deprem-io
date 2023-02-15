import { PropsWithChildren } from 'react';

import {
  COMPONENT_SIZES,
  COMPONENT_VARIANTS,
} from '@/lib/constants/COMPONENT_VARIABELS';
import { NavigationLinkPropsTypes } from '@/lib/types/component-props/navigation-link.props';

export type AnchorClickType = (e: React.MouseEvent<HTMLAnchorElement>) => void;
export type ButtonClickType = (e: React.MouseEvent<HTMLButtonElement>) => void;

export type ButtonBasePropsType = {
  className?: string;
  variant?: keyof typeof COMPONENT_VARIANTS | 'link';
  size?: keyof typeof COMPONENT_SIZES;
};

export type ButtonBehaviorPropsType =
  | ({
      isNavigationLink?: false;
      type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
      onClick?: ButtonClickType;
      isOutline?: boolean;
      link?: undefined;
    } & React.ButtonHTMLAttributes<HTMLButtonElement>)
  | {
      isNavigationLink: true;
      type?: undefined;
      onClick?: AnchorClickType;
      isOutline?: boolean;
      link: Omit<NavigationLinkPropsTypes, 'children'>;
    };

export type ButtonPropsType = PropsWithChildren<ButtonBasePropsType> &
  ButtonBehaviorPropsType;
