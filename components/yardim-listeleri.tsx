import PrimaryButton, { PrimaryButtonEmpty } from '@/components/primary-button';
import Icon from '@/components/icon';

type YardimListeleriProps = {};

export default function YardimListeleri({}: YardimListeleriProps) {
  return (
    <section className="mt-20">
      <h3 className="mb-5">Yardım Listeleri</h3>

      <div className="grid gap-3 sm:grid-cols-3 sm:gap-6">
        <PrimaryButton href="/yardim-list-enkaz">
          <Icon icon="alert" />
          <span>Enkaz Altında Olanlar</span>
        </PrimaryButton>

        <PrimaryButton href="/yardim-list-gida">
          <Icon icon="info" />
          <span>Gıda İhtiyacı Olanlar</span>
        </PrimaryButton>

        <PrimaryButton href="/yardim-list-isinma">
          <Icon icon="fire" />
          <span>Isınma İhtiyacı Olanlar</span>
        </PrimaryButton>

        <PrimaryButton href="https://evimmusait.com/" target="_blank">
          <Icon icon="home" />
          <span>Evim Müsait</span>
        </PrimaryButton>

        <PrimaryButton
          href="https://gisibb.maps.arcgis.com/apps/MapSeries/index.html?appid=b49d96adc42e439cbab407b4a27c30d8"
          target="_blank"
        >
          <Icon icon="hotel" />
          <span>Ücretsiz Oteller</span>
        </PrimaryButton>

        <PrimaryButton href="/yardim-list-ismak">
          <Icon icon="key" />
          <span>İş Makinesi Kullanabilenler</span>
        </PrimaryButton>

        <PrimaryButton href="/yardim-list-yolcu-tasi">
          <Icon icon="truck" />
          <span>Yolcu Taşıyabilenler</span>
        </PrimaryButton>

        <PrimaryButton href="/yardim-list-konaklama">
          <Icon icon="box" />
          <span>Köylerin Yardım Durumu</span>
        </PrimaryButton>

        <PrimaryButtonEmpty />
      </div>
    </section>
  );
}
