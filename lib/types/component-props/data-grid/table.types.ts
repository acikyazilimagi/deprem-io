import { ReactNode } from 'react';

export type CanCarry = {
  from: string;
  to: string;
};

export type Status = 'waiting' | 'completed' | 'insufficient' | 'failed';

export type Urgency = 'critical' | 'moderate' | 'normal';

export type DataGridRows<T = any> = T & { id: string };

export interface IColumns<T = any> {
  field: keyof DataGridRows<T>;
  renderCell?: (item: DataGridRows<T>) => ReactNode;
}

export interface IDataGridTableProps {
  rows: DataGridRows[];
  columns: IColumns[];
  onClick?: (item: DataGridRows) => void;
}
