import Image from "next/image";
import YardimHaritalariButton from "@/components/yardim-haritalari-button";

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
            className="rounded object-cover h-32"
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
            className="rounded-lg object-cover h-32"
          />
          <b>Afet Harita</b>
        </YardimHaritalariButton>

        <YardimHaritalariButton href="https://www.google.com/maps/@37.7671501,36.8329901,7.97z/data=!5m1!1e1" target="_blank">
          <Image
            src="/map-google-trafik.png"
            alt=""
            width={600}
            height={300}
            quality={100}
            className="rounded-lg object-cover h-32"
          />
          <b>Google Trafik Haritası</b>
        </YardimHaritalariButton>

        <YardimHaritalariButton href="https://yandex.com.tr/harita/trafik/?ll=36.624451%2C37.469498&z=8.48" target="_blank">
          <Image
            src="/map-yandex-trafik.png"
            alt=""
            width={600}
            height={300}
            quality={100}
            className="rounded-lg object-cover h-32"
          />
          <b>Yandex Trafik Haritası</b>
        </YardimHaritalariButton>
      </div>
    </section>
  );
}
