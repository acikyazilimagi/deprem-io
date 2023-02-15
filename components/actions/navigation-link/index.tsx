import Link from 'next/link';

import { NavigationLinkPropsTypes } from '@/lib/types/component-props/navigation-link.props';

export default function NavigationLink({
  isExternal,
  className,
  href,
  children,
  target,
  ...rest
}: NavigationLinkPropsTypes) {
  if (href) {
    const props = {
      ...rest,
      ...(isExternal ? { target: '_blank' } : { target }),
    };

    if (isExternal) {
      return (
        <a href={href.toString()} className={className} {...props}>
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={className} {...props}>
        {children}
      </Link>
    );
  }
  return <></>;
}
