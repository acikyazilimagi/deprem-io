import { noop } from '@/lib/utils'
import { useCallback, useMemo, ReactNode, Fragment } from 'react'
import { IDataGridProps } from '@/lib/types/DataGrid.types'

export default function DataGrid({
  rows,
  columns,
  onClick = noop,
}: IDataGridProps) {
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
  )
}
