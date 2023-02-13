import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="/" className="text-xl font-semibold">
      <span className="bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent">
        deprem
      </span>
      <span className="opacity-80 dark:opacity-50">.io</span>
    </Link>
  );
}
