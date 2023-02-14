export interface IYardimListFilterValues {
  search?: string;
  status?: '' | 'waiting' | 'completed' | 'insufficient' | 'failed';
  urgency?: '' | 'critical' | 'moderate' | 'normal';
  transportationState?: boolean | '';
}

export interface IDataGridFilterProps {
  onFilter?: (values: IYardimListFilterValues) => void;
  onRefresh?: () => void;
  showTransportationStateInput?: boolean;
}
