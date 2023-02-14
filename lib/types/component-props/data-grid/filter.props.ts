import { STATUS, URGENCY } from '@/lib/enums';

export interface IDataGridFilterValues {
  search?: string;
  status?: '' | STATUS;
  urgency?: '' | URGENCY;
  transportationState?: boolean | '';
}

export interface IDataGridFilterProps {
  onFilter?: (values: IDataGridFilterValues) => void;
  onRefresh?: () => void;
  showTransportationStateInput?: boolean;
}
