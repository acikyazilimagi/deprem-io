import Link from 'next/link';
import { cx } from '@/lib/utils';
import { CustomLinkProps } from '@/lib/types/component-props/CustomLink.props';

export default function CustomLink({
  children,
  className,
  ...props
}: CustomLinkProps) {
  return (
    <Link className={cx('text-blue-500 underline')} {...props}>
      {children}
    </Link>
  );
}
