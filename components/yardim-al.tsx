import YardimAlButton from "@/components/yardim-al-button";
import Icon, { Icons } from "@/components/icon";

type YardimAlProps = {};

export default function YardimAl({}: YardimAlProps) {
  return (
    <section>
      <h2 className="mb-4">Yardım Al</h2>

      <div className="grid gap-4 sm:grid-cols-3">
        <YardimAlButton href="/yardim-istek-enkaz" className="text-red-600">
          <Icon icon={Icons.Alert} size={32} />
          <span>Ben / Tanıdığım Enkazda</span>
        </YardimAlButton>

        <YardimAlButton href="/yardim-istek-gida" className="text-purple-600">
          <Icon icon={Icons.Info} size={32} />
          <span>Gıdaya İhtiyacım Var</span>
        </YardimAlButton>

        <YardimAlButton href="/yardim-istek-isinma" className="text-amber-600">
          <Icon icon={Icons.Fire} size={32} />
          <span>Isınmaya İhtiyacım Var</span>
        </YardimAlButton>
      </div>
    </section>
  );
}
