import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import Icon from '@/components/icon';

export default function ThemeButton() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);
  if (!mounted) return <span />;

  return (
    <button
      className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-100 bg-zinc-200 dark:bg-zinc-700"
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
    >
      {resolvedTheme === 'dark' ? (
        <Icon icon="sun" size={22} />
      ) : (
        <Icon icon="moon" size={22} />
      )}
    </button>
  );
}
