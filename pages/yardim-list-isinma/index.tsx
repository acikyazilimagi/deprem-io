import useTranslation from 'next-translate/useTranslation';

export default function HelpListWarm() {
  const { t } = useTranslation('common');

  return (
    <div className="mx-auto max-w-screen-lg">
      <h1>{t('pageHeaders.helpListNeedToGetWarm')}</h1>
    </div>
  );
}
