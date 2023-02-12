import useTranslation from 'next-translate/useTranslation';

export default function HelpListFood() {
  const { t } = useTranslation('common');

  return (
    <div className="mx-auto max-w-screen-lg">
      <h1>{t('pageHeaders.helpListNeedFood')}</h1>
    </div>
  );
}
