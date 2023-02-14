import { memo } from 'react'
import Trans from 'next-translate/Trans'
import useTranslation from 'next-translate/useTranslation'
import CustomLink from '@/components/custom-link'
import { useLocalStorage } from '@/hooks/useLocalStorage'

function KVKKStickyBar() {
  const { t } = useTranslation('common')
  const [value, setValue] = useLocalStorage<boolean>(
    'KVKKAcceptedStatus',
    false
  )

  return (
    <>
      {value === false ? (
        <div className="fixed left-5 bottom-10 z-50 rounded-xl bg-white shadow-2xl dark:border-zinc-800">
          <div className="flex items-center p-4 text-xs text-gray-500">
            <span className="max-w-[180px]">
              <Trans
                i18nKey="common:kvkkStickyBar"
                components={[
                  <CustomLink key="kvkk-link" href="/hukuki-kvkk" />,
                  <b key="kvkk" />,
                ]}
              />
            </span>
            <button
              onClick={() => {
                setValue(true)
              }}
              className="rounded-lg border-2 border-indigo-400 bg-indigo-100 px-3 py-1.5 font-medium text-indigo-500 hover:bg-indigo-200 dark:bg-blue-600 dark:text-indigo-100 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              {t('accept')}
            </button>
          </div>
        </div>
      ) : null}
    </>
  )
}

export default memo(KVKKStickyBar)
