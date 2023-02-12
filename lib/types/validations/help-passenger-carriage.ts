import { IBaseValidation } from '@/lib/types/validations/base'

export interface IHelpPassengerCarriageValidation extends IBaseValidation {
  fromCity: string
  toCity: string
  info?: string | null
  term: boolean
  phone?: string
}
