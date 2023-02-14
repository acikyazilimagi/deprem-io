/* eslint-disable */
const {
  DOMAIN_VALIDATIONS,
} = require('@/lib/validations/localeValidations.ts');

module.exports = {
  [DOMAIN_VALIDATIONS]: {
    mixed: {
      required: 'Bu alan gereklidir',
    },
    string: {
      length: 'Bu alan {{length}} karakter uzunluğunda olmalıdır',
      min: 'Bu alan en az {{min}} karakter uzunluğunda olmalıdır',
      max: 'Bu alan en fazla {{max}} karakter uzunluğunda olmalıdır',
      matches: "Bu alan '{{regex}}' ile eşleşmelidir",
      email: 'Bu alan geçerli bir e-posta adresi olmalıdır',
      trim: 'Bu alanda boşluk karakteri kullanılmamalıdır',
      lowercase: 'Bu alan küçük harflerden oluşmalıdır',
      uppercase: 'Bu alan büyük harflerden oluşmalıdır',
    },
    number: {
      min: 'Bu alan {{min}} değerine eşit veya fazla olmalıdır',
      max: 'Bu alan {{max}} değerine eşit veya az olmalıdır',
      lessThan: 'Bu alan {{less}} değerinden az olmalıdır',
      moreThan: 'Bu alan {{more}} değerinden büyük olmalıdır.',
      positive: 'Bu alan pozitif bir değer olmalıdır',
      negative: 'Bu alan negatif bir değer olmalıdır',
      type: 'Bu alana sadece sayı girilmelidir',
    },
    date: {
      min: "Bu alan '{{label}}' tarihinden sonra olmalıdır",
      max: "Bu alan '{{label}}' tarihinden önce olmalıdır",
      between: 'Bu alan {{min}} ve {{max}} tarihleri arasında olmalıdır',
    },
    boolean: {
      isValue: 'Bu alan {{value}} değerine eşit olmalıdır',
    },
    object: {
      noUnknown: 'Bu alan tanımlanamayan anahtar barındırmaktadır: {{unknown}]',
    },
    array: {
      min: 'Bu alanda en az {{min}} öğe olmalıdır',
      max: 'Bu alandaki öğe sayısı {{max}} değerine eşit veya daha az olmalıdır',
      length: 'Bu alan {{length}} öğe içermelidir',
    },
  },
  successMessages: {
    create: '{{key}} başarıyla oluşturuldu',
    edit: '{{key}} başarıyla güncellendi',
    copy: '{{key}} başarıyla kopyalandı',
    import: '{{key}} başarıyla içe aktarıldı',
    delete: '{{key}} başarıyla silindi',
    keys: {
      foodAidRequest: 'Gıda yardım talebi',
    },
  },
  errorMessages: {
    anErrorOccurred:
      'Beklenmedik bir hata oluştu. Lütfen daha sonra tekrar deneyiniz.',
  },
  warningMessages: {
    requestForHelpAgain:
      'Eğer bu yardım talebini daha önce gönderdiysen lütfen tekrar gönderme. Kayıtlarda kopya bilgi olması kurtarma operasyonlarını olumsuz etkiler.',
    requiredFieldsAreMandatory: '* ile başlayan alanlar zorunludur.',
    noPersonalHealthInformation:
      'Lütfen kişisel ve sağlıkla ilgili bilgi girmeyiniz, ',
    noPersonalHealthInformationAddonAddress:
      'sadece açık adres bilgisi giriniz.',
    noPersonalHealthInformationAddonPhysicalCondition:
      'sadece durumunuzu giriniz.',
    noPersonalHealthInformationAddonHelpInfo:
      'sadece yardım hakkında bilgi giriniz.',
  },
  requiredFieldsNotice: '* ile başlayan alanlar zorunludur.',
  submit: 'Gönder',
  filter: 'Filtrele',
  goDetail: 'Detaya Git',
  accept: 'Kabul Et',
  kvkk: '6698 sayılı KVKK kapsamında “Uygulamamıza depremzede ya da depremzede yakını olarak kaydolan kullanıcılardan ad, soyadı, iletişim bilgisi, log kaydı ve depremzedenin sisteme girilen ve kendileri tarafından alenileştirilmiş konum verilerini topluyoruz.” Veri işleme hukuki sebeplerimizi, amaçlarımızı görmek ve haklarınızı öğrenmek için <0>Aydınlatma Metnini</0> ziyaret etmek ister misiniz? ',
  kvkkStickyBar:
    '<0><1>KVKK</1></0> Aydınlatma metnini okudum ve kabul ediyorum.',
  inputFields: {
    fullName: 'Ad Soyad',
    phone: 'Telefon',
    peopleCount: 'Kişi Sayısı',
    address: 'Adres',
    addressDetail: 'Adres Tarifi',
    physicalConditions: {
      normal: 'Normal',
      mid: 'Orta',
      critical: 'Kritik',
    },
    physicalConditionDetail: 'Fiziki Durum Hakkında Bilgi',
    tweetUrl: 'Tweet Linki',
    transportationStatus: {
      exists: 'Aracım var, yardımı kendim teslim alabilirim.',
      noneExists: 'Aracım yok, yardımın teslim edilmesi gerek.',
    },
    termsAcceptedLabel: 'Okudum ve aydınlandım.',
    helpCity: 'Yardım verebileceğin şehir',
    helpInfo: 'Yardımın hakkında bilgi',
    helpFromCity: 'Yolcu Alacağın Şehir',
    helpToCity: 'Yolcuyu Bırakacağın Şehir',
  },
  pageHeaders: {
    underDebrisPage: 'Ben / Tandığım Enkaz Altında',
    needFoodPage: 'Gıdaya İhtiyacım Var',
    needToWarmPage: 'Isınmaya İhtiyacım Var',
    canUseConstructionMachinePage: 'İş Makinesi Yardımı Sağla',
    giveHelpPage: 'Yardım Sağla',
    getHelpPage: 'Yardım Al',
    helpListUnderDebris: 'Enkaz Altında Olanlar',
    helpListNeedFood: 'Gıda İhtiyacı Olanlar',
    helpListNeedToGetWarm: 'Isınma İhtiyacı Olanlar',
    canTransportPassengerPage: 'Yolcu Taşıma Yardımı Sağla',
  },
  helpStatuses: {
    waiting: 'Yardım Bekleniyor',
    completed: 'Yardım Edildi',
    insufficient: 'Yetersiz Bilgi',
    failed: 'Yardım Edilemedi',
    readyToHelp: 'Yardıma Hazır',
    helped: 'Yardım Etti',
  },
  helpUrgency: {
    critical: 'Kritik',
    moderate: 'Orta',
    normal: 'Normal',
  },
  lookAtTheRecordsPage: '<0>Mevcut Kayıtlar</0> sayfasına göz atın.',
};
