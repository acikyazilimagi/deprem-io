import FormControl from '@/components/form/form-control';
import FormManager from '@/components/form/form-manager';
import { ICON_NAMES } from '@/lib/constants/icons';
import Icon from '@/components/icon';
import useTranslation from 'next-translate/useTranslation';
import { useCallback } from 'react';
import { noop } from '@/lib/utils';
import {
  IDataGridFilterProps,
  IDataGridFilterValues,
} from '@/lib/types/component-props/data-grid/filter.props';
import { filterFormSchema } from '@/lib/validations/schemas/data-grid/filter.schema';

const statusOptions = [
  { value: '', label: 'Yardım Durumu' },
  { value: 'waiting', label: 'Yardım Bekleniyor' },
  { value: 'completed', label: 'Yardım Edildi' },
  { value: 'insufficient', label: 'Yetersiz Bilgi' },
  { value: 'failed', label: 'Yardım Edilemedi' },
];

const urgencyOptions = [
  { value: '', label: 'Aciliyet' },
  { value: 'critical', label: 'Kritik' },
  { value: 'moderate', label: 'Orta' },
  { value: 'normal', label: 'Normal' },
];

const transportationStateOptions = [
  { value: '', label: 'Araç Durumu' },
  { value: true, label: 'Aracı Var' },
  { value: false, label: 'Aracı Yok' },
];

const defaultValues: IDataGridFilterValues = {
  search: '',
  status: '',
  urgency: '',
  transportationState: false,
};

export default function DataGridFilter({
  onFilter = noop,
  onRefresh = noop,
  showTransportationStateInput,
}: IDataGridFilterProps) {
  const { t } = useTranslation('common');

  const handleSubmit = useCallback(
    async (values: object) => {
      onFilter(values);
    },
    [onFilter]
  );

  return (
    <div className="mt-6">
      <FormManager
        validationSchema={filterFormSchema}
        onSubmit={handleSubmit}
        defaultValues={defaultValues}
      >
        <div className="flex flex-wrap gap-3 rounded-lg p-3 shadow-md">
          <div className="flex-grow">
            <FormControl
              fieldName="TextInput"
              name="search"
              icon={ICON_NAMES.search}
              fieldProps={{
                placeholder: 'Ad, soyad, il, ilçe, tel no...',
                type: 'text',
              }}
            />
          </div>
          <FormControl
            fieldName="Select"
            name="status"
            icon={ICON_NAMES.info}
            fieldProps={{
              placeholder: 'Yardım Durumu',
              selectOptions: statusOptions,
            }}
          />
          <FormControl
            fieldName="Select"
            name="urgency"
            icon={ICON_NAMES.alert}
            fieldProps={{
              placeholder: 'Aciliyet',
              selectOptions: urgencyOptions,
            }}
          />
          {showTransportationStateInput ? (
            <FormControl
              fieldName="Select"
              name="transportationState"
              icon={ICON_NAMES.truck}
              fieldProps={{
                placeholder: 'Araç Durumu',
                selectOptions: transportationStateOptions,
              }}
            />
          ) : undefined}
          <button
            type="button"
            onClick={onRefresh}
            className="flex items-center px-2 pb-2"
          >
            <Icon icon="refresh" />
          </button>
          <FormControl
            fieldName="Button"
            name="yardim-list-submit"
            fieldProps={{ label: t('filter') }}
          />
        </div>
      </FormManager>
    </div>
  );
}
