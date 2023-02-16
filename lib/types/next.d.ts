import type { NextComponentType, NextPageContext } from 'next';
import type { AppProps } from 'next/app';

declare module 'next' {
  type NextLayoutComponentType<P = object> = NextComponentType<
    NextPageContext,
    any,
    P
  > & {
    getLayout?: (page: ReactNode) => ReactNode;
    layout?: ComponentType;
    permissions?: unknown;
  };
}

declare module 'next/app' {
  type AppLayoutProps<P = object> = AppProps & {
    Component: JSX.Element<P>;
  };
}
