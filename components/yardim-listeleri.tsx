import PrimaryButton from "@/components/primary-button";
import Icon, { Icons } from "@/components/icon";

type YardimListeleriProps = {};

export default function YardimListeleri({}: YardimListeleriProps) {
  return (
    <section className="mt-20">
      <h3 className="mb-5">Yardım Listeleri</h3>

      <div className="grid gap-6 sm:grid-cols-3">
        <PrimaryButton href="/yardim-list-enkaz">
          <Icon icon={Icons.Alert} />
          <span>Enkaz Altında Olanlar</span>
        </PrimaryButton>

        <PrimaryButton href="/yardim-list-gida">
          <Icon icon={Icons.Info} />
          <span>Gıda İhtiyacı Olanlar</span>
        </PrimaryButton>

        <PrimaryButton href="/yardim-list-isinma">
          <Icon icon={Icons.Fire} />
          <span>Isınma İhtiyacı Olanlar</span>
        </PrimaryButton>

        <PrimaryButton href="/yardim-list-konaklama">
          <Icon icon={Icons.Home} />
          <span>Konaklama Sağlayanlar</span>
        </PrimaryButton>

        <PrimaryButton href="/yardim-list-ismak">
          <Icon icon={Icons.Key} />
          <span>İş Makinesi Kullanabilenler</span>
        </PrimaryButton>

        <PrimaryButton href="/yardim-list-yolcu-tasi">
          <Icon icon={Icons.Truck} />
          <span>Yolcu Taşıyabilenler</span>
        </PrimaryButton>
      </div>
    </section>
  );
}
