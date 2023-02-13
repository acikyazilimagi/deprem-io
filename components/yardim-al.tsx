import Icon from '@/components/icon';
import PrimaryButton from '@/components/primary-button';
import { Translate } from 'next-translate';

type YardimAlProps = {
  t: Translate;
};

export default function YardimAl({ t }: YardimAlProps) {
  return (
    <section>
      <h2 className="mb-5">{t('pageHeaders.getHelpPage')}</h2>

      <div className="grid gap-3 sm:grid-cols-3 sm:gap-6">
        <PrimaryButton
          href="/yardim-istek-enkaz"
          className="h-16 text-red-600 shadow-md"
        >
          <Icon icon="alert" size={32} />
          <span>{t('pageHeaders.underDebrisPage')}</span>
        </PrimaryButton>

        <PrimaryButton
          href="/yardim-istek-gida"
          className="h-16 text-purple-600 shadow-md"
        >
          <Icon icon="info" size={32} />
          <span>{t('pageHeaders.needFoodPage')}</span>
        </PrimaryButton>

        <PrimaryButton
          href="/yardim-istek-isinma"
          className="h-16 text-amber-600 shadow-md"
        >
          <Icon icon="fire" size={32} />
          <span>{t('pageHeaders.needToWarmPage')}</span>
        </PrimaryButton>
      </div>
    </section>
  );
}
