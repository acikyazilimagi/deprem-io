import { PhysicalState, TransportationState } from '@/lib/enums'
import * as yup from 'yup'
import { IHelpRequestFoodValidation } from '@/lib/types/validations'

export const helpRequestFoodSchema: yup.ObjectSchema<IHelpRequestFoodValidation> =
  yup.object().shape({
    fullName: yup.string().required(),
    email: yup.string().nullable().email().optional(),
    humanCount: yup
      .number()
      .transform((value) => (Number.isNaN(value) ? undefined : value))
      .nullable()
      .moreThan(0)
      .optional(),
    address: yup.string().required(),
    addressDetail: yup.string().nullable().max(2000).optional(),
    physicalCondition: yup.string<PhysicalState>().required(),
    physicalConditionDetail: yup.string().required(),
    tweetUrl: yup.string().nullable().optional(),
    transportationStatus: yup.string<TransportationState>().required(),
    term: yup.bool().oneOf([true]).required(),
    phone: yup
      .string()
      .matches(/\([0-9]{3}\) [0-9]{3}-[0-9]{4}/g)
      .optional(),
  })
