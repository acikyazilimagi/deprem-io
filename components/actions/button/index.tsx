import React, { ButtonHTMLAttributes, useMemo } from 'react';

import {
  AnchorClickType,
  ButtonClickType,
  ButtonPropsType,
} from '@/lib/types/component-props/button.props';
import { cx } from '@/lib/utils';

import NavigationLink from '@/components/actions/navigation-link';

function Button({
  type,
  children,
  onClick,
  isNavigationLink,
  isOutline,
  link,
  variant,
  size,
  className,
  ...rest
}: ButtonPropsType) {
  const _className = useMemo(() => {
    return cx(
      'btn',
      {
        'btn-default': !variant || variant === 'default',
        'btn-primary': variant === 'primary',
        'btn-secondary': variant === 'secondary',
        'btn-info': variant === 'info',
        'btn-error': variant === 'error',
        'btn-warning': variant === 'warning',
        'btn-success': variant === 'success',
        'btn-link': variant === 'link',
        'btn-outline': isOutline,
        'btn-xs': size === 'xs',
        'btn-sm': size === 'sm',
        'btn-lg': size === 'lg',
        'btn-xl': size === 'xl',
      },
      className
    );
  }, [className, isOutline, size, variant]);

  if (isNavigationLink) {
    return (
      <NavigationLink
        className={_className}
        onClick={onClick as AnchorClickType}
        {...link}
      >
        {children}
      </NavigationLink>
    );
  }

  const restButtonAttibutes = {
    ...rest,
  } as ButtonHTMLAttributes<HTMLButtonElement>;

  return (
    <button
      className={_className}
      type={type}
      onClick={onClick as ButtonClickType}
      {...restButtonAttibutes}
    >
      {children}
    </button>
  );
}

export default Button;
