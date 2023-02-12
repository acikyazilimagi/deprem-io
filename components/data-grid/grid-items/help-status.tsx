import useTranslation from 'next-translate/useTranslation'
import Icon from '@/components/icon'

type HelpStatusProps = {
  status?: 'waiting' | 'completed' | 'insufficient' | 'failed'
  urgency?: 'critical' | 'moderate' | 'normal'
}

export default function HelpStatus({ status, urgency }: HelpStatusProps) {
  const { t } = useTranslation('common')
  return (
    <div className="flex items-center gap-1">
      <Icon
        icon="circle"
        fill="#ff5762"
        stroke="transparent"
        width={15}
        height={15}
      />
      <div className="text-xs">
        {t(`helpStatuses.${status}`)} - {t(`helpUrgency.${urgency}`)}
      </div>
    </div>
  )
}
