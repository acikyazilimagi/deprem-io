import { Status, Urgency } from '@/lib/types/DataGrid.types'

export interface IHelpListUnderDebrisRows {
  status: Status
  urgency: Urgency
  maskedNameSurname: string
  phone: string
  locationText: string
  lastUpdateText: string
}
