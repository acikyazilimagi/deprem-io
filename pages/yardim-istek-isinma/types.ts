import { PhysicalState, TransportationState } from '@/lib/enums'

export interface IYardimIstekGida {
  fullName: string
  email?: string | null
  phone?: string
  address: string
  addressDetail?: string | null
  humanCount?: number | null
  physicalCondition: PhysicalState
  physicalConditionDetail: string
  transportationStatus: TransportationState
  tweetUrl?: string | null
  term: boolean
}
