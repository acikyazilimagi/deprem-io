import React, { PropsWithChildren } from 'react';

import { DataInputWrapperPropsType } from '@/lib/types/component-props/form-elements/data-input-wrapper.props';

import Icon from '@/components/icon';

export default function DataInputWrapper({
  children,
  label,
  elementId,
  icon,
  prefix,
  suffix,
}: PropsWithChildren<DataInputWrapperPropsType>) {
  return (
    <div className="flex flex-col gap-2">
      {!!label && (
        <div>
          <label className="text-sm font-semibold" htmlFor={elementId}>
            {label}
          </label>
        </div>
      )}
      <div className="relative">
        {icon && (
          <span className="pointer-events-none absolute top-0 left-0 flex h-11 w-11 items-center justify-center opacity-60 dark:opacity-40">
            <Icon icon={icon} size={20} />
          </span>
        )}
        {prefix}
        {children}
        {suffix}
      </div>
    </div>
  );
}
