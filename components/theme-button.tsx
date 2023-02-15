import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

import Button from '@/components/actions/button';
import Icon from '@/components/icon';

export default function ThemeButton() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);
  if (!mounted) return <span />;

  return (
    <>
      <Button
        size="sm"
        onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      >
        <Icon icon={resolvedTheme === 'dark' ? 'sun' : 'moon'} size={22} />
      </Button>
    </>
  );
}
