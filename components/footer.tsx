import Container from "@/components/container";
import Logo from "@/components/logo";

export default function Footer() {
  return (
    <footer className="mt-20 bg-zinc-50 py-20 dark:bg-zinc-800">
      <Container>
        <Logo />

        <div className="mt-10 space-y-4 text-xs opacity-50">
          <h6>Kişisel Verilerin İşlenmesine İlişkin Aydınlatma:</h6>

          <p>
            Bu uygulama, 6 Şubat 2023 tarihinde Türkiye’de meydana gelen büyük
            deprem felaketinde, arama kurtarma çalışmaları ile yardım ve destek
            taleplerini ortak bir veri tabanında toplayarak yetkili kurum ve
            kuruluşlara aktarmak amacı ile bilişim teknolojileri alanında
            çalışan gönüllüler tarafından oluşturulmuştur. Yardım ya da desteğe
            ihtiyacı olduğunu belirttiğiniz kişilerin kişisel verileri ‘’Fiili
            imkânsızlık nedeniyle rızasını açıklayamayacak durumda bulunan veya
            rızasına hukuki geçerlilik tanınmayan kişinin kendisinin ya da bir
            başkasının hayatı veya beden bütünlüğünün korunması için zorunlu
            olması’’ hukuki sebebine dayanarak, otomatik yollarla işlenecektir.
            Tarafınıza ait kişisel veriler, ‘’Bir hakkın tesisi, kullanılması
            veya korunması için veri işlemenin zorunlu olması’’ hukuki sebebine
            dayanarak işlenecektir.
          </p>
          <p>
            Paylaşacağınız yardım, destek taleplerinde yer alan isim, soy isim,
            telefon ve adres gibi kişisel veriler, veli, vasi, temsilci bilgisi,
            medeni durum ve sağlık bilgileri tarafımızca oluşturulan ve
            sunucuları yurtiçi ve yurtdışında bulunan veri tabanında toplanarak,
            Afad, Akut, Kızılay gibi yetkili arama kurtarma kuruluşlarının yanı
            sıra destek ve yardım taleplerini karşılayabilecek sivil toplum
            kuruluşları ile kişisel veri işleme amacı ile sınırlı olarak
            paylaşılacaktır.
          </p>
          <p>
            Bu platform kar amacı gütmeden imece usulu bilgi paylaşımı için
            geliştirildi, hiçbir kurum ve kuruluşla ilişiği yoktur.
          </p>
          <p>
            Gerektiğinde yetkili merci ve kurumlara bilgi sağlanabilir ve
            işbirliği yapılabilir.
          </p>
          <p>&copy; 2023</p>
        </div>
      </Container>
    </footer>
  );
}
