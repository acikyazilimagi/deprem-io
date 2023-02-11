import PrimaryButton, { PrimaryButtonEmpty } from "@/components/primary-button";
import Icon, { Icons } from "@/components/icon";

type YardimListeleriProps = {};

export default function YardimListeleri({}: YardimListeleriProps) {
  return (
    <section className="mt-20">
      <h3 className="mb-5">Yardım Listeleri</h3>

      <div className="grid gap-3 sm:grid-cols-3 sm:gap-6">
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

        <PrimaryButton href="https://evimmusait.com/" target="_blank">
          <Icon icon={Icons.Home} />
          <span>Evim Müsait</span>
        </PrimaryButton>

        <PrimaryButton
          href="https://www.otelz.com/tr/gecmisolsunturkiyem"
          target="_blank"
        >
          <Icon icon={Icons.Hotel} />
          <span>Ücretsiz Oteller</span>
        </PrimaryButton>

        <PrimaryButton href="/yardim-list-ismak">
          <Icon icon={Icons.Key} />
          <span>İş Makinesi Kullanabilenler</span>
        </PrimaryButton>

        <PrimaryButton href="/yardim-list-yolcu-tasi">
          <Icon icon={Icons.Truck} />
          <span>Yolcu Taşıyabilenler</span>
        </PrimaryButton>

        <PrimaryButton href="/yardim-list-konaklama">
          <Icon icon={Icons.Box} />
          <span>Köylerin Yardım Durumu</span>
        </PrimaryButton>

        <PrimaryButtonEmpty />
      </div>
    </section>
  );
}
