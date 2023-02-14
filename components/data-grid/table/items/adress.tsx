import Icon from '@/components/icon';
import { CanCarry } from '@/lib/types/component-props/data-grid/table.types';

type AdressProps = {
  locationText?: string;
  canCarry?: CanCarry;
};

export default function Adress({ locationText, canCarry }: AdressProps) {
  return (
    <div className="col-span-2 flex items-center gap-1 text-xs">
      <Icon icon="pin" width={18} height={18} stroke="#4766ff" />
      {locationText ? (
        <div>{locationText}</div>
      ) : (
        <div className="flex items-center gap-1">
          <span>{canCarry?.from}</span>
          <Icon icon="arrow" width={18} height={18} stroke="#4766ff" />
          <span>{canCarry?.to}</span>
        </div>
      )}
    </div>
  );
}
