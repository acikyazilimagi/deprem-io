import {
  Status,
  Urgency,
} from '@/lib/types/component-props/data-grid/table.types';

export interface IHelpListUnderDebrisRows {
  status: Status;
  urgency: Urgency;
  maskedNameSurname: string;
  phone: string;
  locationText: string;
  lastUpdateText: string;
}
