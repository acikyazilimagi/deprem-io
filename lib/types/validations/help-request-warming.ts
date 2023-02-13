import { PhysicalState, TransportationState } from '@/lib/enums';
import { IBaseValidation } from '@/lib/types/validations/base';

export interface IHelpRequestWarmingValidation extends IBaseValidation {
  address: string;
  addressDetail?: string | null;
  humanCount?: number | null;
  physicalCondition: PhysicalState;
  physicalConditionDetail: string;
  transportationStatus: TransportationState;
  tweetUrl?: string | null;
  term: boolean;
  phone?: string;
}
