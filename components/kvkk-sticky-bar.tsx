import Trans from 'next-translate/Trans';
import useTranslation from 'next-translate/useTranslation';
import { memo } from 'react';

import { useLocalStorage } from '@/hooks/useLocalStorage';

import Button from './actions/button';

function KVKKStickyBar() {
  const { t } = useTranslation('common');
  const [value, setValue] = useLocalStorage<boolean>(
    'KVKKAcceptedStatus',
    false
  );

  return (
    <>
      {value === false ? (
        <div className="fixed left-5 bottom-10 z-50 rounded-xl bg-white shadow-2xl dark:border-zinc-800">
          <div className="flex items-center p-4 text-xs text-gray-500">
            <span className="max-w-[180px]">
              <Trans
                i18nKey="common:kvkkStickyBar"
                components={[
                  <Button
                    isNavigationLink
                    variant="link"
                    key="kvkk-link"
                    link={{
                      href: '/hukuki-kvkk',
                    }}
                  />,
                  <b key="kvkk" />,
                ]}
              />
            </span>
            <Button
              isOutline
              size="xs"
              variant="primary"
              onClick={() => {
                setValue(true);
              }}
            >
              {t('accept')}
            </Button>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default memo(KVKKStickyBar);
