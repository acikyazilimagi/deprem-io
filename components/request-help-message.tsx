import { Translate } from 'next-translate';
import Trans from 'next-translate/Trans';

import Button from '@/components/actions/button';
import Alert from '@/components/alert';

type RequestHelpMessageProps = {
  t: Translate;
};

export default function RequestHelpMessage({ t }: RequestHelpMessageProps) {
  return (
    <div className="my-6">
      <Alert>
        <p>{t('warningMessages.requestForHelpAgain')}</p>
        <p>
          <Trans
            i18nKey="common:lookAtTheRecordsPage"
            components={[
              <Button
                isNavigationLink
                variant="link"
                key="record"
                link={{
                  href: '/yardim-list-enkaz',
                }}
              />,
            ]}
          />
        </p>
      </Alert>
    </div>
  );
}
