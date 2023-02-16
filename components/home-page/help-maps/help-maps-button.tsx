import Link from 'next/link';

import { HelpMapsButtonProps } from '@/lib/types/component-props/help-maps-button.props';

export function HelpMapsButton({
  children,
  className,
  ...props
}: HelpMapsButtonProps) {
  return (
    <Link
      className="flex flex-col gap-4 rounded-xl border border-zinc-200 p-4 transition hover:shadow-lg dark:border-zinc-800 dark:hover:bg-zinc-800"
      {...props}
    >
      {children}
    </Link>
  );
}
