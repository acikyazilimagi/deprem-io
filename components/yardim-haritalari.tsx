import Image from 'next/image';
import YardimHaritalariButton from '@/components/yardim-haritalari-button';

type YardimHaritalariProps = {};

export default function YardimHaritalari({}: YardimHaritalariProps) {
  return (
    <section className="mt-20">
      <h3 className="mb-5">Yardım Haritaları</h3>

      <div className="grid gap-3 sm:grid-cols-2 sm:gap-6">
        <YardimHaritalariButton href="/yardim-map-enkaz">
          <Image
            src="/map-deprem-io.jpg"
            alt=""
            width={600}
            height={300}
            quality={100}
            className="h-32 rounded object-cover"
          />
          <b>deprem.io</b>
        </YardimHaritalariButton>

        <YardimHaritalariButton href="https://afetharita.com/" target="_blank">
          <Image
            src="/map-afet-harita.jpg"
            alt=""
            width={600}
            height={300}
            quality={100}
            className="h-32 rounded-lg object-cover"
          />
          <b>Afet Harita</b>
        </YardimHaritalariButton>
      </div>
    </section>
  );
}
