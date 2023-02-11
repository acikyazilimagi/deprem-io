import FormControl from "@/components/form/form-control"
import FormManager from "@/components/form/form-manager"
import { ICON_NAMES } from "@/lib/constants/ICONS"
import Icon from "@/components/icon"
import useTranslation from "next-translate/useTranslation";
import * as yup from 'yup'
import { InferType } from "yup";
import { useCallback } from "react";
import { noop, stripEmptyString } from "@/lib/utils";

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
]

const transportationStateOptions = [
  { value: '', label: 'Araç Durumu' },
  { value: true, label: 'Aracı Var' },
  { value: false, label: 'Aracı Yok' },
]


const formSchema = yup.object().shape({
  search: yup.string().optional(),
  status: yup.string().oneOf(['', 'waiting', 'completed', 'insufficient', 'failed']).optional(),
  urgency: yup.string().oneOf(['', 'critical', 'moderate', 'normal']).optional(),
  transportationState: yup.boolean().optional().transform(stripEmptyString),
})

interface IYardimListFilterValues {
  search?: string;
  status?: '' | 'waiting' | 'completed' | 'insufficient' | 'failed';
  urgency?: '' | 'critical' | 'moderate' | 'normal';
  transportationState?: boolean | '';
};

const defaultValues: IYardimListFilterValues = {
  search: '',
  status: '',
  urgency: '',
  transportationState: false,
}

interface IYardimListFilterProps {
  onFilter?: (values: IYardimListFilterValues) => void;
  onRefresh?: () => void;
  showTransportationStateInput?: boolean;
}


export default function YardimListFilter({
  onFilter = noop,
  onRefresh = noop,
  showTransportationStateInput,
}: IYardimListFilterProps) {

  const { t } = useTranslation("common");

  const handleSubmit = useCallback(async (values: object) => {
    onFilter(values);
  }, [onFilter])

  return (
    <div className="mt-6">
      <FormManager validationSchema={formSchema} onSubmit={handleSubmit} defaultValues={defaultValues}>
        <div className="flex flex-wrap gap-3 p-3 shadow-md rounded-lg">
          <div className="flex-grow">
            <FormControl
              fieldName="TextInput"
              name="search"
              icon={ICON_NAMES.search}
              fieldProps={{ placeholder: "Ad, soyad, il, ilçe, tel no...", type: "text" }}
            />
          </div>
          <FormControl
            fieldName="Select"
            name="status"
            icon={ICON_NAMES.info}
            fieldProps={{ placeholder: "Yardım Durumu", type: "text" }}
            selectOptions={statusOptions}
          />
          <FormControl
            fieldName="Select"
            name="urgency"
            icon={ICON_NAMES.alert}
            fieldProps={{ placeholder: "Aciliyet", type: "text" }}
            selectOptions={urgencyOptions}
          />
          {
            showTransportationStateInput
              ?
              <FormControl
                fieldName="Select"
                name="transportationState"
                icon={ICON_NAMES.truck}
                fieldProps={{ placeholder: "Araç Durumu", type: "text" }}
                selectOptions={transportationStateOptions}
              />
              : undefined
          }
          <button type="button" onClick={onRefresh} className="px-2 pb-2 flex items-center">
            <Icon icon="refresh" />
          </button>
          <FormControl
            fieldName="Button"
            name="yardim-list-submit"
            label={t('filter')}
            fieldProps={{ type: 'submit' }}
          />
        </div>
      </FormManager>
    </div>
  )
}