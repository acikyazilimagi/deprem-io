import { IDataGridFilterProps } from '@/lib/types/component-props/data-grid/filter.props';
import { IDataGridTableProps } from '@/lib/types/component-props/data-grid/table.types';
import DataGridFilter from './filter';
import DataGridTable from './table';

type TDataGridProps = {
  filter: IDataGridFilterProps;
  table: IDataGridTableProps;
};

function DataGrid({ table, filter }: TDataGridProps) {
  return (
    <>
      <DataGridFilter {...filter} />
      <DataGridTable {...table} />
    </>
  );
}

export default DataGrid;
