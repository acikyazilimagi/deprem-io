import useTranslation from 'next-translate/useTranslation';
import { useMemo } from 'react';

import { IColumns } from '@/lib/types/component-props/data-grid/table.types';
import { IHelpListUnderDebrisRows } from '@/lib/types/list-pages';

import DataGrid from '@/components/data-grid';
import Adress from '@/components/data-grid/table/items/adress';
import HelpStatus from '@/components/data-grid/table/items/help-status';
import LastUpdate from '@/components/data-grid/table/items/last-update';

export default function HelpListWreck() {
  const { t } = useTranslation('common');

  const columns = useMemo(
    (): IColumns<IHelpListUnderDebrisRows>[] => [
      {
        field: 'status',
        renderCell: (row) => (
          <HelpStatus status={row.status} urgency={row.urgency} />
        ),
      },
      {
        field: 'maskedNameSurname',
        renderCell: (row) => (
          <div className="font-bold">{row.maskedNameSurname}</div>
        ),
      },
      {
        field: 'phone',
        renderCell: (row) => <div className="text-right">{row.phone}</div>,
      },
      {
        field: 'locationText',
        renderCell: (row) => <Adress locationText={row.locationText} />,
      },
      {
        field: 'lastUpdateText',
        renderCell: (row) => (
          <LastUpdate id={row.id} lastUpdateText={row.lastUpdateText} />
        ),
      },
    ],
    []
  );

  return (
    <div className="mx-auto max-w-screen-lg">
      <h1>{t('pageHeaders.helpListUnderDebris')}</h1>

      <div className="mt-6">
        <DataGrid
          filter={{
            showTransportationStateInput: false,
            onFilter: (values: any) => console.log(values),
            onRefresh: () => {
              console.log('refresh');
            },
          }}
          table={{
            columns,
            rows: [
              {
                status: 'waiting',
                urgency: 'critical',
                maskedNameSurname: 'asdasd',
                phone: '123456',
                locationText: 'test',
                lastUpdateText: 'last update text',
                id: 1,
              },
            ],
          }}
        />
      </div>
    </div>
  );
}
