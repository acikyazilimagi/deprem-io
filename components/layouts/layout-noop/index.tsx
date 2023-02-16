import React, { PropsWithChildren } from 'react';

type LayoutNoopPropsType = PropsWithChildren<{}>;
const LayoutNoop = ({ children }: LayoutNoopPropsType) => {
  return <>{children}</>;
};

export default LayoutNoop;

LayoutNoop.displayName = 'LayoutNoop';
