import * as yup from 'yup';

import { stripEmptyString } from '@/lib/utils';

export const filterFormSchema = yup.object().shape({
  search: yup.string().optional(),
  status: yup
    .string()
    .oneOf(['', 'waiting', 'completed', 'insufficient', 'failed'])
    .optional(),
  urgency: yup
    .string()
    .oneOf(['', 'critical', 'moderate', 'normal'])
    .optional(),
  transportationState: yup.boolean().optional().transform(stripEmptyString),
});
