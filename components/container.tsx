import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
};

export default function Container({ children }: ContainerProps) {
  return <div className="mx-auto max-w-screen-lg px-6">{children}</div>;
}
