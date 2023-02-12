import * as yup from 'yup'
import { IYardimIstekGida } from '../../../pages/yardim-et-ismak/types'

const validationSchema: yup.ObjectSchema<IYardimIstekGida> = yup
  .object()
  .shape({
    fullName: yup.string().required(),
    email: yup.string().nullable().email().optional(),
    city: yup.string().notOneOf(['']).required(),
    info: yup.string().nullable().max(2000).optional(),
    term: yup.bool().oneOf([true]).required(),
    phone: yup
      .string()
      .matches(/\([0-9]{3}\) [0-9]{3}-[0-9]{4}/g)
      .optional(),
  })

export default validationSchema
