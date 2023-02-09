import Link from "next/link";
import ThemeButton from "@/components/theme-button";
import Logo from "@/components/logo";

export default function Header() {
  return (
    <header className="mb-20 flex items-center gap-4 bg-zinc-50 px-6 py-4 dark:bg-zinc-800">
      <Logo />

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
