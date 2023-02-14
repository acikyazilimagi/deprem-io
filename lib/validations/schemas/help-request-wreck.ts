import { PHYSICALSTATE } from '@/lib/enums';
import * as yup from 'yup';
import { IHelpRequestWreckValidation } from '@/lib/types/validations';

export const helpRequestWreckSchema: yup.ObjectSchema<IHelpRequestWreckValidation> =
  yup.object().shape({
    fullName: yup.string().required(),
    email: yup.string().nullable().email(),
    humanCount: yup
      .number()
      .transform((value) => (Number.isNaN(value) ? undefined : value))
      .nullable()
      .moreThan(0),
    address: yup.string().required(),
    addressDetail: yup.string().nullable(),
    physicalCondition: yup.string<PHYSICALSTATE>().required(),
    physicalConditionDetail: yup.string().required(),
    tweetUrl: yup.string().nullable(),
    term: yup.bool().required().isTrue(),
  });
