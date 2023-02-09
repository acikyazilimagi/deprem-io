import PrimaryButton, { PrimaryButtonEmpty } from "@/components/primary-button";
import Icon, { Icons } from "@/components/icon";

type YardimSaglaProps = {};

export default function YardimSagla({}: YardimSaglaProps) {
  return (
    <section className="mt-20">
      <h3 className="mb-5">Yardım Sağla</h3>

      <div className="grid gap-3 sm:grid-cols-3 sm:gap-6">
        <PrimaryButton href="/yardim-et-ismak">
          <Icon icon={Icons.Key} />
          <span>İş Makinesi Kullanabilirim</span>
        </PrimaryButton>

        <PrimaryButton href="/yardim-et-yolcu-tasi">
          <Icon icon={Icons.Truck} />
          <span>Yolcu Taşıyabilirim</span>
        </PrimaryButton>

        <PrimaryButtonEmpty />
      </div>
    </section>
  );
}
