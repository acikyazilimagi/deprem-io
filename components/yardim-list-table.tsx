import { noop } from "@/lib/utils";
import { useCallback, useMemo } from "react";
import Icon from "./icon";

export interface IYardimListItem {
  id?: string;
  status?: 'waiting' | 'completed' | 'insufficient' | 'failed';
  urgency?: 'critical' | 'moderate' | 'normal';
  maskedNameSurname?: string;
  phone?: string;
  locationText?: string;
  lastUpdateText?: string;
}

interface IYardimListTableProps {
  items?: IYardimListItem[];
  onClick?: (item: IYardimListItem) => void;
}

export default function YardimListTable({ items = [], onClick = noop, }: IYardimListTableProps) {

  return (
    <div className="my-6 flex flex-col gap-6">
      {items.map((item) => (
        <div key={item.id} className="rounded-xl p-3 shadow-md hover:shadow-lg cursor-pointer" onClick={() => onClick(item)}>
          <div className="grid grid-cols-3 gap-3">
            <div>{item.status} - {item.urgency}</div>
            <div>{item.maskedNameSurname}</div>
            <div>{item.phone}</div>
            <div className="col-span-2 flex gap-1">
              <Icon icon="pin" />
              {item.locationText}
            </div>
            <div>
              <span className="text-neutral-400">{item.lastUpdateText}</span>
              <span className="ml-3">#{item.id}</span>
            </div>
          </div>
        </div>
      ))
      }
    </div>
  )

}

