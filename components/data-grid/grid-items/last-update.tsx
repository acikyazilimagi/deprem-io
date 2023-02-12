type LastUpdateProps = {
  id?: string
  lastUpdateText?: string
}

export default function LastUpdate({ id, lastUpdateText }: LastUpdateProps) {
  return (
    <div className="text-right text-xs">
      <span className="text-neutral-400">{lastUpdateText}</span>
      <span className="ml-3">#{id}</span>
    </div>
  )
}
