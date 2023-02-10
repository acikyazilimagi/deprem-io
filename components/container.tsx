import { ContainerProps } from '@/lib/types/component-props/Container.props';

export default function Container({ children }: ContainerProps) {
  return <div className="mx-auto max-w-screen-lg px-6">{children}</div>;
}
