import Image from "next/image";
import YardimHaritalariButton from "@/components/yardim-haritalari-button";

type YardimHaritalariProps = {};

export default function YardimHaritalari({}: YardimHaritalariProps) {
  return (
    <section className="mt-20">
      <h3 className="mb-5">Yardım Haritaları</h3>

      <div className="grid gap-6 sm:grid-cols-3">
        <YardimHaritalariButton href="/yardim-map-enkaz">
          <Image
            src="/map-deprem-io.jpg"
            alt=""
            width={600}
            height={300}
            quality={100}
            className="rounded object-cover"
          />
          <b>deprem.io</b>
        </YardimHaritalariButton>

        <YardimHaritalariButton
          href="https://afetharita.com/"
          target="_blank"
        >
          <Image
            src="/map-afet-harita.jpg"
            alt=""
            width={600}
            height={300}
            quality={100}
            className="rounded-lg object-cover"
          />
          <b>Afet Harita</b>
        </YardimHaritalariButton>

        <YardimHaritalariButton
          href="https://depremenkaz.xyz/"
          target="_blank"
        >
          <Image
            src="/map-deprem-enkaz.jpg"
            alt=""
            width={600}
            height={300}
            quality={100}
            className="rounded-lg object-cover"
          />
          <b>Deprem Enkaz</b>
        </YardimHaritalariButton>
      </div>
    </section>
  );
}
