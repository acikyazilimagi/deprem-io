import Icon from '@/components/icon';
import { AlertProps } from '@/lib/types/component-props/Alert.props';

export default function Alert({ children }: AlertProps) {
  return (
    <div
      className="flex items-center gap-4 rounded-xl border border-l-2
        border-zinc-100 border-l-amber-500 p-4 text-sm
        dark:border-zinc-800 dark:border-l-amber-500 "
    >
      <span className="text-amber-500">
        <Icon icon="info" size={32} />
      </span>

      <div>{children}</div>
    </div>
  );
}
