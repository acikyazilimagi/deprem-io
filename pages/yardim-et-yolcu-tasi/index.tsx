import Trans from 'next-translate/Trans';
import useTranslation from 'next-translate/useTranslation';

import cities from '@/lib/cities';
import { OptionType } from '@/lib/types/component-props/form-elements/data-inputs.props';
import { getConstraintsFromValidation } from '@/lib/utils';
import { helpPassengerCarriageSchema } from '@/lib/validations/schemas';

import useFormManager from '@/hooks/useFormManager';

import Button from '@/components/actions/button';
import Alert from '@/components/alert';
import FormControl from '@/components/form-elements/form-control';
import RequestHelpMessage from '@/components/request-help-message';

export default function HelpPassengerCarriage() {
  const defaultValues = {
    fullName: '',
    email: '',
    phone: '',
    info: '',
    term: false,
    fromCity: '',
    toCity: '',
  };

  const { t } = useTranslation('common');

  const onFormSubmit = async (values: object) => {
    console.log(values);
  };

  const {
    FormManagerProvider,
    formInitializer: { formState },
  } = useFormManager({
    validationSchema: helpPassengerCarriageSchema,
    onSubmit: onFormSubmit,
    onError: (err) => {
      console.error('onError - err', err);
    },
    defaultValues,
  });

  const citiesFromList = [...cities];
  const citiesToList = [...cities];
  return (
    <div className="mx-auto max-w-screen-sm">
      <h1>{t('pageHeaders.canTransportPassengerPage')}</h1>

      <RequestHelpMessage t={t} />

      <p className="mb-5">{t('warningMessages.requiredFieldsAreMandatory')}</p>
      <FormManagerProvider>
        <div className="grid gap-4 sm:grid-cols-6">
          <div className="sm:col-span-2">
            <FormControl
              fieldName="TextInput"
              name="fullName"
              fieldProps={{
                placeholder: `* ${t('inputFields.fullName')}`,
                type: 'text',
              }}
              wrapperProps={{
                icon: 'user',
              }}
            />
          </div>
          <div className="sm:col-span-2">
            <FormControl
              fieldName="TextInput"
              name="email"
              fieldProps={{ placeholder: 'Email', type: 'email' }}
              wrapperProps={{
                icon: 'email',
              }}
            />
          </div>
          <div className="sm:col-span-2">
            <FormControl
              fieldName="TextInput"
              name="phone"
              fieldProps={{
                placeholder: t('inputFields.phone'),
                type: 'tel',
                max: 14,
                className: 'pl-[73px]',
              }}
              wrapperProps={{
                icon: 'phone',
                prefix: (
                  <span className="pointer-events-none absolute top-0 left-8 flex h-11 w-11 items-center justify-center opacity-60 dark:opacity-40">
                    +90
                  </span>
                ),
              }}
            />
          </div>
          <div className="sm:col-span-3">
            <FormControl
              fieldName="Select"
              name="fromCity"
              fieldProps={{
                options: citiesFromList as OptionType[],
                placeholder: `* ${t('inputFields.helpFromCity')}`,
              }}
              wrapperProps={{
                icon: 'pin',
              }}
            />
          </div>
          <div className="sm:col-span-3">
            <FormControl
              fieldName="Select"
              name="toCity"
              fieldProps={{
                options: citiesToList as OptionType[],
                placeholder: `* ${t('inputFields.helpToCity')}`,
              }}
              wrapperProps={{
                icon: 'pin',
              }}
            />
          </div>
          <div className="sm:col-span-6">
            <FormControl
              fieldName="Textarea"
              name="info"
              fieldProps={{
                placeholder: `* ${t('inputFields.helpInfo')}`,
                rows: 3,
                maxLength: getConstraintsFromValidation(
                  helpPassengerCarriageSchema,
                  'info',
                  'max'
                ),
              }}
              wrapperProps={{
                icon: 'info',
              }}
            />
          </div>
          <div className="sm:col-span-6">
            <Alert>
              <p>
                {t('warningMessages.noPersonalHealthInformation') +
                  t('warningMessages.noPersonalHealthInformationAddonHelpInfo')}
              </p>
            </Alert>
          </div>
          <div className="sm:col-span-6">
            <p className="text-xs">
              <Trans
                i18nKey="common:kvkk"
                components={[
                  <Button
                    isNavigationLink
                    variant="link"
                    key="kvkk"
                    link={{
                      href: '/hukuki-kvkk',
                      target: '_blank',
                    }}
                  />,
                ]}
              />
            </p>
            <div className="mt-4">
              <FormControl
                fieldName="Checkbox"
                name="term"
                fieldProps={{ label: t('inputFields.termsAcceptedLabel') }}
              />
            </div>
          </div>
          <div>
            <Button variant="primary" disabled={!formState.isValid}>
              {t('submit')}
            </Button>

            {/* <FormControlOld
              fieldName="Button"
              name="enkaz-form-submit"
              fieldProps={{ label: t('submit') }}
            /> */}
          </div>
        </div>
      </FormManagerProvider>
    </div>
  );
}
