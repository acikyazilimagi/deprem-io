import { PHYSICALSTATE } from '@/lib/enums';
import { IBaseValidation } from '@/lib/types/validations/base';

export interface IHelpRequestWreckValidation extends IBaseValidation {
  address: string;
  addressDetail?: string | null;
  humanCount?: number | null;
  physicalCondition: PHYSICALSTATE;
  physicalConditionDetail: string;
  tweetUrl?: string | null;
  term: boolean;
}
