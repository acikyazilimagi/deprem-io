import ThemeButton from "@/components/theme-button";
import Link from "next/link";

export default function Header() {
  return (
    <header className="mb-20 flex items-center gap-4 bg-zinc-100 px-6 py-6 dark:bg-zinc-800">
      <Link href="/" className="text-lg font-bold">
        deprem.io
      </Link>

      <ThemeButton />

      <div className="ml-auto">
        <Link
          href="/iletisim"
          className="inline-flex h-10 items-center rounded-lg bg-blue-600 px-4 text-white"
        >
          İletişim
        </Link>
      </div>
    </header>
  );
}
