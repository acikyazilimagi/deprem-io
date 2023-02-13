import { useMemo } from 'react';
import useTranslation from 'next-translate/useTranslation';
import YardimListFilter from '@/components/yardim-list-filter';
import DataGrid from '@/components/data-grid';
import HelpStatus from '@/components/data-grid/grid-items/help-status';
import Adress from '@/components/data-grid/grid-items/adress';
import LastUpdate from '@/components/data-grid/grid-items/last-update';
import Icon from '@/components/icon';
import { mockYardimListItems } from '@/lib/mock/yardim-list-items';
import { IColumns, Status, Urgency } from '@/lib/types/DataGrid.types';
import { IHelpListUnderDebrisRows } from '@/lib/types/list-pages';

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
