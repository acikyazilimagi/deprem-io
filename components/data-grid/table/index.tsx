import { Fragment, ReactNode, useCallback, useMemo } from 'react';

import { IDataGridTableProps } from '@/lib/types/component-props/data-grid/table.types';
import { noop } from '@/lib/utils';

export default function DataGridTable({
  rows,
  columns,
  onClick = noop,
}: IDataGridTableProps) {
  return (
    <div className="my-6 flex flex-col gap-6">
      {rows.map((item) => (
        <div
          key={item.id}
          className="cursor-pointer rounded-xl p-3 shadow-md hover:shadow-lg"
          onClick={() => onClick(item)}
        >
          <div className="grid grid-cols-3 gap-3 text-xs">
            {columns.map((column, index) => (
              <Fragment key={item[column.field]}>
                {column?.renderCell ? (
                  column.renderCell(item)
                ) : (
                  <div>{item[column.field]}</div>
                )}
              </Fragment>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
