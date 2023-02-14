import { PHYSICALSTATE, TRANSPORTATIONSTATE } from '@/lib/enums';
import { IBaseValidation } from '@/lib/types/validations/base';

export interface IHelpRequestWarmingValidation extends IBaseValidation {
  address: string;
  addressDetail?: string | null;
  humanCount?: number | null;
  physicalCondition: PHYSICALSTATE;
  physicalConditionDetail: string;
  transportationStatus: TRANSPORTATIONSTATE;
  tweetUrl?: string | null;
  term: boolean;
  phone?: string;
}
