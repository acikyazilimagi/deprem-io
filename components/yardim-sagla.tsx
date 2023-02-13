import PrimaryButton from '@/components/primary-button';
import Icon from '@/components/icon';
import { Translate } from 'next-translate';

type YardimSaglaProps = {
  t: Translate;
};

export default function YardimSagla({ t }: YardimSaglaProps) {
  return (
    <section className="mt-20">
      <h3 className="mb-5">{t('pageHeaders.giveHelpPage')}</h3>

      <div className="grid gap-3 sm:grid-cols-3 sm:gap-6">
        <PrimaryButton href="/yardim-et-ismak">
          <Icon icon="key" />
          <span>{t('pageHeaders.canUseConstructionMachinePage')}</span>
        </PrimaryButton>

        <PrimaryButton href="/yardim-et-yolcu-tasi">
          <Icon icon="truck" />
          <span>{t('pageHeaders.canTransportPassengerPage')}</span>
        </PrimaryButton>

        <PrimaryButton href="/yardim-et-bagis">
          <Icon icon="dollar" />
          <span>Yolcu Taşıyabilirim</span>
        </PrimaryButton>
      </div>
    </section>
  );
}
