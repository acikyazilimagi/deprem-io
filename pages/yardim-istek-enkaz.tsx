import { Controller, useForm } from "react-hook-form";
import { cx } from "@/lib/utils";

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
    term: false
  };

  const { handleSubmit, control, formState } = useForm({
    defaultValues
  });

  const onFormSubmit = async (values: object) => {
    console.log(values);
  };

  return (
    <div className="max-w-screen-sm mx-auto">
      <form onSubmit={handleSubmit(onFormSubmit)}>
        <div className="grid sm:grid-cols-2 gap-4">
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

          <button
            type="submit"
            className={cx(!formState.isValid && "opacity-50")}
          >
            Gönder
          </button>
        </div>
      </form>
    </div>
  );
}
