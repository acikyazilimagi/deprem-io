import { PhysicalState } from '@/lib/enums'

export interface IHelpRequestWreck {
  fullName: string
  email?: string | null
  address: string
  addressDetail?: string | null
  humanCount?: number | null
  physicalCondition: PhysicalState
  physicalConditionDetail: string
  tweetUrl?: string | null
  term: boolean
}
