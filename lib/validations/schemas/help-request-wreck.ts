import { PhysicalState } from '@/lib/enums'
import * as yup from 'yup'
import { IHelpRequestWreck } from '../../../pages/yardim-istek-enkaz/types'

const validationSchema: yup.ObjectSchema<IHelpRequestWreck> = yup
  .object()
  .shape({
    fullName: yup.string().required(),
    email: yup.string().nullable().email(),
    humanCount: yup
      .number()
      .transform((value) => (Number.isNaN(value) ? undefined : value))
      .nullable()
      .moreThan(0),
    address: yup.string().required(),
    addressDetail: yup.string().nullable(),
    physicalCondition: yup.string<PhysicalState>().required(),
    physicalConditionDetail: yup.string().required(),
    tweetUrl: yup.string().nullable(),
    term: yup.bool().required(),
  })
export default validationSchema
