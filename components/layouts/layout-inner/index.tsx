import React, { PropsWithChildren } from 'react';

type LayaoutInnerPropsType = PropsWithChildren<{}>;

const LayoutInner = ({ children }: LayaoutInnerPropsType) => {
  return <>{children}</>;
};

export default LayoutInner;

LayoutInner.displayName = 'LayoutInner';
