export interface IHelpListUnderDebris {
  id?: string
  status?: 'waiting' | 'completed' | 'insufficient' | 'failed'
  urgency?: 'critical' | 'moderate' | 'normal'
  maskedNameSurname?: string
  phone?: string
  locationText?: string
  lastUpdateText?: string
}

export interface IHelpListNeedToGetWarm extends IHelpListUnderDebris {}
