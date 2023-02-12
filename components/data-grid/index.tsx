import { noop } from '@/lib/utils'
import { useCallback, useMemo, ReactNode, Fragment } from 'react'
import {
  IHelpListUnderDebris,
  IHelpListNeedToGetWarm,
} from '@/lib/types/DataGrid.types'

export interface IRows extends IHelpListUnderDebris, IHelpListNeedToGetWarm {}

export interface IColumns {
  field: keyof IRows
  flex?: number
  renderCell?: (item: IRows) => ReactNode
}

interface IDataGridProps {
  rows?: IRows[]
  columns: IColumns[]
  onClick?: (item: IRows) => void
}

export default function DataGrid({
  rows = [],
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
          <div className="grid grid-cols-3 gap-3">
            {columns.map((column, index) => (
              <Fragment key={column.field}>
                {column?.renderCell ? (
                  column.renderCell(item)
                ) : (
                  <div className="text-xs">{item[column.field]}</div>
                )}
              </Fragment>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
