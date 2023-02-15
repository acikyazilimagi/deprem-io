import useTranslation from 'next-translate/useTranslation';

import { GetHelp, GiveHelp, HelpLists, HelpMaps } from '@/components/home-page';

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
