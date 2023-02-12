import { useMemo } from 'react';
import YardimListFilter from '@/components/yardim-list-filter';
import DataGrid, { IColumns } from '@/components/data-grid';
import HelpStatus from '@/components/data-grid/grid-items/help-status';
import Icon from '@/components/icon';
import { mockYardimListItems } from '@/lib/mock/yardim-list-items';
import useTranslation from 'next-translate/useTranslation';

export default function HelpListWreck() {
  const { t } = useTranslation('common');

  const columns = useMemo(
    (): IColumns[] => [
      {
        field: 'status',
        renderCell: (row) => (
          <HelpStatus status={row.status} urgency={row.urgency} />
        ),
      },
      {
        field: 'maskedNameSurname',
      },
      {
        field: 'phone',
      },
      {
        field: 'locationText',
        renderCell: (row) => (
          <div className="col-span-2 flex gap-1">
            <Icon icon="pin" />
            {row.locationText}
          </div>
        ),
      },
      {
        field: 'lastUpdateText',
        renderCell: (row) => (
          <div>
            <span className="text-neutral-400">{row.lastUpdateText}</span>
            <span className="ml-3">#{row.id}</span>
          </div>
        ),
      },
    ],
    []
  );

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
