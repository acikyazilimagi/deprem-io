import YardimAl from '@/components/yardim-al';
import YardimSagla from '@/components/yardim-sagla';
import YardimListeleri from '@/components/yardim-listeleri';
import YardimHaritalari from '@/components/yardim-haritalari';
import useTranslation from 'next-translate/useTranslation';

export default function Home() {
  const { t } = useTranslation('common');
  return (
    <>
      <YardimAl t={t} />
      <YardimSagla t={t} />
      <YardimListeleri />
      <YardimHaritalari />
    </>
  );
}
