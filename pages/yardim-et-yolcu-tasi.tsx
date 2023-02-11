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
import RequestHelpMessage from "@/components/request-help-message";
import cities from "@/lib/cities";

interface IYardimIstekGida {
  fullName: string;
  email?: string | null;
  phone?: string;
  fromCity: string;
  toCity: string;
  info?: string | null;
  term: boolean;
}

export default function YardimEtYolcuTasi() {
  const validationSchema: ObjectSchema<IYardimIstekGida> = yup.object().shape({
    fullName: yup.string().required(),
    email: yup.string().nullable().email().optional(),
    fromCity: yup.string().notOneOf([""]).required(),
    toCity: yup.string().notOneOf([""]).required(),
    info: yup.string().nullable().max(2000).optional(),
    term: yup.bool().oneOf([true]).required(),
    phone: yup.string().matches(/\([0-9]{3}\) [0-9]{3}-[0-9]{4}/g).optional()
  });

  const defaultValues = {
    fullName: "",
    email: "",
    phone: "",
    info: "",
    term: false,
  };

  const { t } = useTranslation("common");

  const onFormSubmit = async (values: object) => {
    console.log(values);
  };

  const citiesFromList = [{ value: "", label: `* ${t("inputFields.helpFromCity")}`}, ...cities];
  const citiesToList = [{ value: "", label: `* ${t("inputFields.helpToCity")}`}, ...cities];
  return (
    <div className="mx-auto max-w-screen-sm">
      <h1>{t("pageHeaders.canTransportPassengerPage")}</h1>

      <RequestHelpMessage t={t} />

      <p className="mb-5">{t("warningMessages.requiredFieldsAreMandatory")}</p>
      <FormManager
        validationSchema={validationSchema}
        onSubmit={onFormSubmit}
        onError={(err) => {
          console.error("onError - err", err);
        }}
        defaultValues={defaultValues}
      >
        <div className="grid gap-4 sm:grid-cols-6">
          <div className="sm:col-span-2">
            <FormControl
              fieldName="TextInput"
              name="fullName"
              icon="user"
              fieldProps={{ placeholder: `* ${t("inputFields.fullName")}`, type: "text" }}
            />
          </div>
          <div className="sm:col-span-2">
            <FormControl
              fieldName="TextInput"
              name="email"
              icon="email"
              fieldProps={{ placeholder: "Email", type: "email" }}
            />
          </div>
          <div className="sm:col-span-2">
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
          </div>
          <div className="sm:col-span-3">
            <FormControl
              fieldName="Select"
              name="fromCity"
              icon="pin"
              selectOptions={citiesFromList}
            />
          </div>
          <div className="sm:col-span-3">
            <FormControl
              fieldName="Select"
              name="toCity"
              icon="pin"
              selectOptions={citiesToList}
            />
          </div>
          <div className="sm:col-span-6">
            <FormControl
              fieldName="TextArea"
              name="info"
              icon="info"
              className="max-h-32 w-full"
              fieldProps={{
                placeholder: `* ${t("inputFields.helpInfo")}`,
                rows: 3,
                maxLength: getConstraintsFromValidation(validationSchema, "info", "max")
              }}
            />
          </div>
          <div className="sm:col-span-6">
            <Alert>
              <p>{t("warningMessages.noPersonalHealthInformation") + t("warningMessages.noPersonalHealthInformationAddonHelpInfo")}</p>
            </Alert>
          </div>
          <div className="sm:col-span-6">
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
