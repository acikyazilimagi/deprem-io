import CustomLink from "@/components/custom-link";
import Alert from "@/components/alert";
import {Translate} from "next-translate";
import Trans from "next-translate/Trans";

type RequestHelpMessageProps = {
  t: Translate;
};

export default function RequestHelpMessage({t}: RequestHelpMessageProps) {
  return (
    <div className="my-6">
      <Alert>
        <p>{t("warningMessages.requestForHelpAgain")}</p>
        <p>
          <Trans
            i18nKey="common:lookAtTheRecordsPage"
            components={[<CustomLink key="record" href="/yardim-list-enkaz"/>]}
          />
        </p>
      </Alert>
    </div>
  );
}
