import Header from "@/components/header";
import YardimAlButton from "@/components/yardim-al-button";

export default function Home() {
  return (
    <main className="mx-auto max-w-screen-lg px-10">
      <Header />

      <section>
        <h2 className="mb-3">Yardım Al</h2>

        <div className="flex items-center gap-4">
          <YardimAlButton
            href="/yardim-istek-enkaz"
            className="text-red-600 hover:bg-red-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
              width={32}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.249-8.25-3.286zm0 13.036h.008v.008H12v-.008z"
              ></path>
            </svg>
            <span>Ben / Tanıdığım Enkazda</span>
          </YardimAlButton>

          <YardimAlButton
            href="/yardim-istek-gida"
            className="text-purple-600 hover:bg-purple-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
              width={32}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
              ></path>
            </svg>
            <span>Gıdaya İhtiyacım Var</span>
          </YardimAlButton>

          <YardimAlButton
            href="/yardim-istek-isinma"
            className="text-amber-600 hover:bg-amber-50"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
              width={32}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"
              ></path>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z"
              ></path>
            </svg>
            <span>Isınmaya İhtiyacım Var</span>
          </YardimAlButton>
        </div>
      </section>
    </main>
  );
}
