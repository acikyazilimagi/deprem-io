import Icon from '@/components/icon'

type AdressProps = {
  locationText?: string
}

export default function Adress({ locationText }: AdressProps) {
  return (
    <div className="col-span-2 flex items-center gap-1 text-xs">
      <Icon icon="pin" width={18} height={18} stroke="#4766ff" />
      {locationText}
    </div>
  )
}
