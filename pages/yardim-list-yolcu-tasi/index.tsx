import YardimListFilter from '@/components/data-grid/filter';
import useTranslation from 'next-translate/useTranslation';

export default function HelpListPassengerCarriage() {
  const { t } = useTranslation('common');
  return (
    <div className="mx-auto max-w-screen-lg">
      <h1>{t('pageHeaders.helpListUnderDebris')}</h1>

      <div className="mt-6">
        <YardimListFilter
          showTransportationStateInput={false}
          onFilter={(values) => console.log(values)}
          onRefresh={() => {
            console.log('refresh');
          }}
        />
      </div>
    </div>
  );
}
