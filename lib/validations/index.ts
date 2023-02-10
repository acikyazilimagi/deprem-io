import * as yup from "yup";

import { LOCALE_VALIDATIONS } from "./localeValidations.ts";

export const setLocaleValidation = () => yup.setLocale(LOCALE_VALIDATIONS);