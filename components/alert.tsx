import { useMemo } from 'react';

import { AlertPropsType } from '@/lib/types/component-props/alert.props';
import { cx } from '@/lib/utils';

import Icon from '@/components/icon';

export default function Alert({
  children,
  variant = 'warning',
  className,
  size = 'regular',
  isOutline = true,
  withIcon = true,
}: AlertPropsType) {
  const _className = useMemo(() => {
    return {
      holder: cx(
        'alert',
        {
          'alert-default': !variant || variant === 'default',
          'alert-primary': variant === 'primary',
          'alert-secondary': variant === 'secondary',
          'alert-info': variant === 'info',
          'alert-error': variant === 'error',
          'alert-warning': variant === 'warning',
          'alert-success': variant === 'success',
          'alert-xs': size === 'xs',
          'alert-sm': size === 'sm',
          'alert-lg': size === 'lg',
          'alert-xl': size === 'xl',
          'alert-outline': isOutline,
        },
        className
      ),
      icon: cx(
        !isOutline
          ? 'text-current'
          : {
              'text-default': !variant || variant === 'default',
              'text-primary': variant === 'primary',
              'text-secondary': variant === 'secondary',
              'text-info': variant === 'info',
              'text-error': variant === 'error',
              'text-warning': variant === 'warning',
              'text-success': variant === 'success',
            }
      ),
    };
  }, [className, isOutline, size, variant]);

  return (
    <div className={_className.holder}>
      {withIcon && (
        <span className={_className.icon}>
          <Icon icon="info" size={32} />
        </span>
      )}

      <div className="flex flex-col">{children}</div>
    </div>
  );
}
