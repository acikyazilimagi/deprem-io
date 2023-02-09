import { ReactNode } from "react";
import Icon, { Icons } from "@/components/icon";

type AlertProps = {
  children: ReactNode;
};

export default function Alert({ children }: AlertProps) {
  return (
    <div className="flex items-center gap-4 rounded-xl border border-l-2 border-zinc-100 border-l-amber-500 p-4 text-sm">
      <span className="text-amber-500">
        <Icon icon={Icons.Info} size={32} />
      </span>

      <div>{children}</div>
    </div>
  );
}
