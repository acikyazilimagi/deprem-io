import { GiveHelp, GetHelp, HelpMaps, HelpLists } from '@/components/home-page';
import useTranslation from 'next-translate/useTranslation';

export default function Home() {
  const { t } = useTranslation('common');
  return (
    <>
      <GetHelp t={t} />
      <GiveHelp t={t} />
      <HelpLists />
      <HelpMaps />
    </>
  );
}
