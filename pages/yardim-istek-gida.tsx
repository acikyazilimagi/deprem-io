import * as yup from "yup";
import useTranslation from "next-translate/useTranslation";
import Trans from "next-translate/Trans";
import Alert from "@/components/alert";
import CustomLink from "@/components/custom-link";
import FormManager from "@/components/form/form-manager";
import FormControl from "@/components/form/form-control";
import React from "react";
import {ObjectSchema} from "yup";
import {getConstraintsFromValidation} from "@/lib/utils";

enum PhysicalState {
  Kritik = "Kritik",
  Orta = "Orta",
  Normal = "Normal",
}

enum TransportationState {
  exists = "true",
  noneExists = "false",
}

interface IYardimIstekGida {
  fullName: string;
  email?: string | null;
  phone?: string;
  address: string;
  addressDetail?: string | null;
  humanCount?: number | null;
  physicalCondition: PhysicalState;
  physicalConditionDetail: string;
  transportationStatus: TransportationState;
  tweetUrl?: string | null;
  term: boolean;
}

export default function YardimIstekGida() {
  const validationSchema: ObjectSchema<IYardimIstekGida> = yup.object().shape({
    fullName: yup.string().required(),
    email: yup.string().nullable().email().optional(),
    humanCount: yup
      .number()
      .transform((value) => (Number.isNaN(value) ? undefined : value))
      .nullable()
      .moreThan(0)
      .optional(),
    address: yup.string().required(),
    addressDetail: yup.string().nullable().max(2000).optional(),
    physicalCondition: yup.string<PhysicalState>().required(),
    physicalConditionDetail: yup.string().required(),
    tweetUrl: yup.string().nullable().optional(),
    transportationStatus: yup.string<TransportationState>().required(),
    term: yup.bool().oneOf([true]).required(),
    phone: yup.string().matches(/\([0-9]{3}\) [0-9]{3}-[0-9]{4}/g).optional()
  });

  const defaultValues = {
    fullName: "",
    email: "",
    phone: "",
    address: "",
    addressDetail: "",
    humanCount: "",
    physicalCondition: PhysicalState.Orta,
    physicalConditionDetail: "",
    transportationStatus: TransportationState.exists,
    tweetUrl: "",
    term: false,
  };

  const { t } = useTranslation("common");

  const onFormSubmit = async (values: object) => {
    console.log(values);
  };

  return (
    <div className="mx-auto max-w-screen-sm">
      <h1>Ben / Tandığım Enkaz Altında</h1>

      <div className="my-6">
        <Alert>
          <p>{t("warningMessages.requestForHelpAgain")}</p>
          <p>
            <CustomLink href="/yardim-list-enkaz">Mevcut Kayıtlar</CustomLink>{" "}
            sayfasına göz atın.
          </p>
        </Alert>
      </div>


      <p className="mb-5">{t("warningMessages.requiredFieldsAreMandatory")}</p>
      <FormManager
        validationSchema={validationSchema}
        onSubmit={onFormSubmit}
        onError={(err) => {
          console.error("onError - err", err);
        }}
        defaultValues={defaultValues}
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <FormControl
              fieldName="TextInput"
              name="fullName"
              icon="user"
              fieldProps={{ placeholder: `* ${t("inputFields.fullName")}`, type: "text" }}
            />
          </div>
          <FormControl
            fieldName="TextInput"
            name="email"
            icon="email"
            fieldProps={{ placeholder: "Email", type: "email" }}
          />
          <FormControl
            fieldName="PhoneInput"
            name="phone"
            icon="phone"
            addon={(
              <span className="pointer-events-none absolute top-0 left-8 flex h-11 w-11 items-center justify-center opacity-60 dark:opacity-40">
                  +90
                </span>
            )}
            className="pl-[73px]"
            fieldProps={{ placeholder: t("inputFields.phone"), type: "tel" }}
          />
          <div className="sm:col-span-2">
            <FormControl
              fieldName="TextInput"
              name="humanCount"
              icon="userPlus"
              fieldProps={{
                placeholder: t("inputFields.peopleCount"),
                type: "number",
                min: 1,
              }}
            />
          </div>
          <div className="sm:col-span-2">
            <FormControl
              fieldName="TextArea"
              name="address"
              icon="pin"
              className="max-h-32 w-full"
              fieldProps={{
                placeholder: `* ${t("inputFields.address")}`,
                rows: 2,
              }}
            />
          </div>
          <div className="sm:col-span-2">
            <FormControl
              fieldName="TextArea"
              name="addressDetail"
              icon="addressExtra"
              className="max-h-32 w-full"
              fieldProps={{
                placeholder: t("inputFields.addressDetail"),
                rows: 1,
                maxLength: getConstraintsFromValidation(validationSchema, "addressDetail", "max")
              }}
            />
          </div>
          <div className="sm:col-span-2">
            <Alert>
              <p>{t("warningMessages.noPersonalHealthInformation") + t("warningMessages.noPersonalHealthInformationAddonAddress")}</p>
            </Alert>
          </div>
          <div className="sm:col-span-2">
            <FormControl
              fieldName="Radio"
              name="physicalCondition"
              radioGroupData={[
                {label: t("inputFields.physicalConditions.normal"), value: PhysicalState.Normal},
                {label: t("inputFields.physicalConditions.mid"), value: PhysicalState.Orta},
                {label: t("inputFields.physicalConditions.critical"), value: PhysicalState.Kritik},
              ]}
            />
          </div>
          <div className="sm:col-span-2">
            <FormControl
              fieldName="TextArea"
              name="physicalConditionDetail"
              icon="info"
              className="max-h-32 w-full"
              fieldProps={{
                placeholder: `* ${t("inputFields.physicalConditionDetail")}`,
                rows: 2
              }}
            />
          </div>
          <div className="sm:col-span-2">
            <Alert>
              <p>{t("warningMessages.noPersonalHealthInformation") + t("warningMessages.noPersonalHealthInformationAddonPhysicalCondition")}</p>
            </Alert>
          </div>
          <div className="sm:col-span-2">
            <FormControl
              fieldName="TextInput"
              name="tweetUrl"
              icon="link"
              fieldProps={{ placeholder: t("inputFields.tweetUrl"), type: "url" }}
            />
          </div>
          <div className="sm:col-span-2">
            <FormControl
              fieldName="Radio"
              name="transportationStatus"
              radioGroupData={[
                {label: t("inputFields.transportationStatus.exists"), value: TransportationState.exists},
                {label: t("inputFields.transportationStatus.noneExists"), value: TransportationState.noneExists},
              ]}
            />
          </div>
          <div className="sm:col-span-2">
            <p className="text-xs">
              <Trans
                i18nKey="common:kvkk"
                components={[<CustomLink key="kvkk" href="/hukuki-kvkk" />]}
              />
            </p>
            <div className="mt-4">
              <FormControl
                fieldName="CheckBox"
                name="term"
                label={t("inputFields.termsAcceptedLabel")}
              />
            </div>
          </div>
          <div>
            <FormControl
              fieldName="Button"
              name="enkaz-form-submit"
              label={t("submit")}
              fieldProps={{ type: "submit" }}
            />
          </div>
        </div>
      </FormManager>
    </div>
  );
}
