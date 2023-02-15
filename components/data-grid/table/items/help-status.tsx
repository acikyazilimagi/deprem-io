import useTranslation from 'next-translate/useTranslation';

import {
  Status,
  Urgency,
} from '@/lib/types/component-props/data-grid/table.types';

import Icon from '@/components/icon';

type HelpStatusProps = {
  status?: Status;
  urgency?: Urgency;
};

export default function HelpStatus({ status, urgency }: HelpStatusProps) {
  const { t } = useTranslation('common');

  return (
    <div className="flex items-center gap-1">
      <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
      <div className="text-xs">
        {t(`helpStatuses.${status}`)} - {t(`helpUrgency.${urgency}`)}
      </div>
    </div>
  );
}
