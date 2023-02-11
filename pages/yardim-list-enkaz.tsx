import YardimListFilter from "@/components/yardim-list-filter";
import YardimListTable from "@/components/yardim-list-table";
import { mockYardimListItems } from "@/lib/mock/yardim-list-items";
import useTranslation from "next-translate/useTranslation";

export default function YardimListEnkaz() {
  const { t } = useTranslation("common");
  return (
    <div className="mx-auto max-w-screen-lg">
      <h1>{t("pageHeaders.helpListUnderDebris")}</h1>

      <div className="mt-6">
        <YardimListFilter
          showTransportationStateInput={false}
          onFilter={(values) => console.log(values)}
          onRefresh={() => { console.log('refresh') }}
        />
        <YardimListTable
          items={mockYardimListItems}
        />
      </div>
    </div>
  );
}
