import { Controller, useForm } from "react-hook-form";
import { cx } from "@/lib/utils";
import Link from "next/link";

enum State {
  Kritik = "kritik",
  Orta = "orta",
  Normal = "normal",
}

export default function YardimIstekEnkaz() {
  const defaultValues = {
    fullName: "",
    email: "",
    phone: "",
    address: "",
    addressDetail: "",
    humanCount: "",
    state: State.Kritik,
    stateDetail: "",
    tweetUrl: "",
    term: false,
  };

  const { handleSubmit, control, formState } = useForm({
    defaultValues,
  });

  const onFormSubmit = async (values: object) => {
    console.log(values);
  };

  return (
    <div className="mx-auto max-w-screen-sm">
      <form onSubmit={handleSubmit(onFormSubmit)}>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <Controller
              name="fullName"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <input type="text" placeholder="Ad Soyad" {...field} />
              )}
            />
          </div>

          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <input type="email" placeholder="Email" {...field} />
            )}
          />

          <Controller
            name="phone"
            control={control}
            render={({ field }) => (
              <input type="tel" placeholder="Telefon" {...field} />
            )}
          />

          <div className="sm:col-span-2">
            <Controller
              name="humanCount"
              control={control}
              render={({ field }) => (
                <input type="number" placeholder="Kişi Sayısı" {...field} />
              )}
            />
          </div>

          <div className="sm:col-span-2">
            <Controller
              name="address"
              control={control}
              render={({ field }) => (
                <textarea
                  className="max-h-32 w-full"
                  rows={2}
                  placeholder="Adres"
                  {...field}
                />
              )}
            />
          </div>

          <div className="sm:col-span-2">
            <Controller
              name="addressDetail"
              control={control}
              render={({ field }) => (
                <textarea
                  className="max-h-32 w-full"
                  rows={1}
                  placeholder="Adres Tarifi"
                  {...field}
                />
              )}
            />
          </div>

          <div className="sm:col-span-2">
            <Controller
              name="stateDetail"
              control={control}
              render={({ field }) => (
                <textarea
                  className="max-h-32 w-full"
                  rows={2}
                  placeholder="Fiziki Durum Hakkında Bilgi"
                  {...field}
                />
              )}
            />
          </div>

          <div className="sm:col-span-2">
            <Controller
              name="tweetUrl"
              control={control}
              render={({ field }) => (
                <input type="url" placeholder="Tweet Linki" {...field} />
              )}
            />
          </div>

          <div className="sm:col-span-2">
            <p className="text-xs">
              6698 sayılı KVKK kapsamında “Uygulamamıza depremzede ya da
              depremzede yakını olarak kaydolan kullanıcılardan ad, soyadı,
              iletişim bilgisi, log kaydı ve depremzedenin sisteme girilen ve
              kendileri tarafından alenileştirilmiş konum verilerini
              topluyoruz.” Veri işleme hukuki sebeplerimizi, amaçlarımızı görmek
              ve haklarınızı öğrenmek için{" "}
              <Link className="text-blue-500 underline" href="/hukuki-kvkk">
                Aydınlatma Metnini
              </Link>{" "}
              ziyaret etmek ister misiniz?
            </p>

            <div className="mt-4">
              <Controller
                name="term"
                control={control}
                rules={{ required: true }}
                render={({ field: { value, ...props } }) => (
                  <label className="flex items-center gap-2">
                    <input type="checkbox" checked={value} {...props} />
                    <span>Okudum ve aydınlandım.</span>
                  </label>
                )}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className={cx(!formState.isValid && "opacity-50")}
            >
              Gönder
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
