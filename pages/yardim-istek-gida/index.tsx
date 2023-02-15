import Trans from 'next-translate/Trans';
import useTranslation from 'next-translate/useTranslation';

import { PhysicalState, TransportationState } from '@/lib/enums';
import { getConstraintsFromValidation } from '@/lib/utils';
import { helpRequestFoodSchema } from '@/lib/validations/schemas';

import useFormManager from '@/hooks/useFormManager';

import Button from '@/components/actions/button';
import Alert from '@/components/alert';
import FormControl from '@/components/form-elements/form-control';
import RequestHelpMessage from '@/components/request-help-message';

export default function HelpRequestFood() {
  const defaultValues = {
    fullName: '',
    email: '',
    phone: '',
    address: '',
    addressDetail: '',
    humanCount: '',
    physicalCondition: PhysicalState.Orta,
    physicalConditionDetail: '',
    transportationStatus: TransportationState.exists,
    tweetUrl: '',
    term: false,
  };

  const { t } = useTranslation('common');

  const onFormSubmit = async (values: object) => {
    console.log(values);
  };

  const {
    FormManagerProvider,
    formInitializer: { formState },
  } = useFormManager({
    validationSchema: helpRequestFoodSchema,
    onSubmit: onFormSubmit,
    onError: (err) => {
      console.error('onError - err', err);
    },
    defaultValues,
  });

  return (
    <div className="mx-auto max-w-screen-sm">
      <h1>{t('pageHeaders.needFoodPage')}</h1>

      <RequestHelpMessage t={t} />

      <p className="mb-5">{t('warningMessages.requiredFieldsAreMandatory')}</p>
      <FormManagerProvider>
        <div className="grid gap-4 sm:grid-cols-2">
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
          <FormControl
            fieldName="TextInput"
            name="email"
            fieldProps={{ placeholder: 'Email', type: 'email' }}
            wrapperProps={{
              icon: 'email',
            }}
          />
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
              prefix: (
                <span className="pointer-events-none absolute top-0 left-8 flex h-11 w-11 items-center justify-center opacity-60 dark:opacity-40">
                  +90
                </span>
              ),
              icon: 'phone',
              label: t('inputFields.phone'),
            }}
          />
          <div className="sm:col-span-2">
            <FormControl
              fieldName="TextInput"
              name="humanCount"
              fieldProps={{
                placeholder: t('inputFields.peopleCount'),
                type: 'number',
                min: 1,
              }}
              wrapperProps={{
                icon: 'userPlus',
              }}
            />
          </div>
          <div className="sm:col-span-2">
            <FormControl
              fieldName="Textarea"
              name="address"
              fieldProps={{
                placeholder: `* ${t('inputFields.address')}`,
                rows: 2,
              }}
              wrapperProps={{
                icon: 'pin',
              }}
            />
          </div>
          <div className="sm:col-span-2">
            <FormControl
              fieldName="Textarea"
              name="addressDetail"
              fieldProps={{
                placeholder: t('inputFields.addressDetail'),
                rows: 1,
                maxLength: getConstraintsFromValidation(
                  helpRequestFoodSchema,
                  'addressDetail',
                  'max'
                ),
              }}
              wrapperProps={{
                icon: 'addressExtra',
              }}
            />
          </div>
          <div className="sm:col-span-2">
            <Alert>
              <p>
                {t('warningMessages.noPersonalHealthInformation') +
                  t('warningMessages.noPersonalHealthInformationAddonAddress')}
              </p>
            </Alert>
          </div>
          <div className="sm:col-span-2">
            <FormControl
              fieldName="RadioGroup"
              name="physicalCondition"
              fieldProps={{
                options: [
                  {
                    label: t('inputFields.physicalConditions.normal'),
                    value: PhysicalState.Normal,
                  },
                  {
                    label: t('inputFields.physicalConditions.mid'),
                    value: PhysicalState.Orta,
                  },
                  {
                    label: t('inputFields.physicalConditions.critical'),
                    value: PhysicalState.Kritik,
                  },
                ],
              }}
            />
          </div>
          <div className="sm:col-span-2">
            <FormControl
              fieldName="Textarea"
              name="physicalConditionDetail"
              fieldProps={{
                placeholder: `* ${t('inputFields.physicalConditionDetail')}`,
                rows: 2,
              }}
              wrapperProps={{
                icon: 'info',
              }}
            />
          </div>
          <div className="sm:col-span-2">
            <Alert>
              <p>
                {t('warningMessages.noPersonalHealthInformation') +
                  t(
                    'warningMessages.noPersonalHealthInformationAddonPhysicalCondition'
                  )}
              </p>
            </Alert>
          </div>
          <div className="sm:col-span-2">
            <FormControl
              fieldName="TextInput"
              name="tweetUrl"
              fieldProps={{
                placeholder: t('inputFields.tweetUrl'),
                type: 'url',
              }}
              wrapperProps={{
                icon: 'link',
              }}
            />
          </div>
          <div className="sm:col-span-2">
            <FormControl
              fieldName="RadioGroup"
              name="transportationStatus"
              fieldProps={{
                options: [
                  {
                    label: t('inputFields.transportationStatus.exists'),
                    value: TransportationState.exists,
                  },
                  {
                    label: t('inputFields.transportationStatus.noneExists'),
                    value: TransportationState.noneExists,
                  },
                ],
              }}
            />
          </div>
          <div className="sm:col-span-2">
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
                fieldProps={{
                  label: t('inputFields.termsAcceptedLabel'),
                }}
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
