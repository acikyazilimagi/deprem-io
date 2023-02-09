import Icon, { Icons } from "@/components/icon";
import PrimaryButton from "@/components/primary-button";

type YardimAlProps = {};

export default function YardimAl({}: YardimAlProps) {
  return (
    <section>
      <h2 className="mb-5">Yardım Al</h2>

      <div className="grid gap-3 sm:grid-cols-3 sm:gap-6">
        <PrimaryButton
          href="/yardim-istek-enkaz"
          className="h-16 text-red-600 shadow-md"
        >
          <Icon icon={Icons.Alert} size={32} />
          <span>Ben / Tanıdığım Enkazda</span>
        </PrimaryButton>

        <PrimaryButton
          href="/yardim-istek-gida"
          className="h-16 text-purple-600 shadow-md"
        >
          <Icon icon={Icons.Info} size={32} />
          <span>Gıdaya İhtiyacım Var</span>
        </PrimaryButton>

        <PrimaryButton
          href="/yardim-istek-isinma"
          className="h-16 text-amber-600 shadow-md"
        >
          <Icon icon={Icons.Fire} size={32} />
          <span>Isınmaya İhtiyacım Var</span>
        </PrimaryButton>
      </div>
    </section>
  );
}
