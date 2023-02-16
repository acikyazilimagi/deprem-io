import Link from 'next/link';

import Button from '@/components/actions/button';
import Logo from '@/components/logo';
import ThemeButton from '@/components/theme-button';

import ShareDropdown from './share-dropdown';

export default function Header() {
  return (
    <header className="sticky top-0 z-10 mb-10 flex items-center gap-4 bg-zinc-50 px-6 py-4 dark:bg-zinc-800 sm:mb-20">
      <Logo />

      <ThemeButton />

      <ShareDropdown />

      <div className="rounded-lg py-2 px-2 hover:bg-zinc-700">
        <Link href="/test" className="text-sm font-bold text-zinc-400">
          Yararlı Linkler
        </Link>
      </div>

      <div className="ml-auto">
        <Button
          isNavigationLink
          variant="primary"
          isOutline
          link={{
            href: '/iletisim',
          }}
        >
          İletişim
        </Button>
        {/* <Link
          href="/iletisim"
          className="inline-flex h-10 items-center rounded-lg bg-blue-600 px-4 text-white"
        >
          
        </Link> */}
      </div>
    </header>
  );
}
