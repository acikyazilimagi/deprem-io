import useTranslation from 'next-translate/useTranslation';
import { useCallback } from 'react';

import {
  IDataGridFilterProps,
  IYardimListFilterValues,
} from '@/lib/types/component-props/data-grid/filter.props';
import { OptionType } from '@/lib/types/component-props/form-elements/data-inputs.props';
import { noop } from '@/lib/utils';
import { filterFormSchema } from '@/lib/validations/schemas/data-grid/filter.schema';

import useFormManager from '@/hooks/useFormManager';

import Button from '@/components/actions/button';
import FormControl from '@/components/form-elements/form-control';
import Icon from '@/components/icon';

const statusOptions = [
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
  { value: true, label: 'Aracı Var' },
  { value: false, label: 'Aracı Yok' },
];

const defaultValues: IYardimListFilterValues = {
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

  const {
    FormManagerProvider,
    formInitializer: { formState },
  } = useFormManager({
    validationSchema: filterFormSchema,
    onSubmit: handleSubmit,
    onError: (err) => {
      console.error('onError - err', err);
    },
    defaultValues,
  });

  return (
    <div className="mt-6">
      <FormManagerProvider>
        <div className="flex flex-wrap items-end gap-3 rounded-lg p-3 shadow-md">
          <div className="flex-grow">
            <FormControl
              fieldName="TextInput"
              name="search"
              fieldProps={{
                placeholder: 'Ad, soyad, il, ilçe, tel no...',
                type: 'text',
              }}
              wrapperProps={{
                icon: 'search',
              }}
            />
          </div>
          <FormControl
            fieldName="Select"
            name="status"
            fieldProps={{
              placeholder: 'Yardım Durumu',
              options: statusOptions,
            }}
            wrapperProps={{
              icon: 'info',
            }}
          />
          <FormControl
            fieldName="Select"
            name="urgency"
            fieldProps={{
              placeholder: 'Aciliyet',
              options: urgencyOptions,
            }}
            wrapperProps={{
              icon: 'alert',
            }}
          />
          {showTransportationStateInput ? (
            <FormControl
              fieldName="Select"
              name="transportationState"
              fieldProps={{
                placeholder: 'Araç Durumu',
                options: transportationStateOptions as OptionType[],
              }}
              wrapperProps={{
                icon: 'truck',
              }}
            />
          ) : undefined}

          <Button type="button" onClick={onRefresh}>
            <Icon icon="refresh" />
          </Button>
          <Button variant="primary" disabled={!formState.isValid}>
            {t('submit')}
          </Button>
          {/* <FormControlOld
            fieldName="Button"
            name="yardim-list-submit"
            fieldProps={{ label: t('filter') }}
          /> */}
        </div>
      </FormManagerProvider>
    </div>
  );
}
