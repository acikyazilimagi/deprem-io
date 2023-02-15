import Trans from 'next-translate/Trans';
import useTranslation from 'next-translate/useTranslation';

import { PhysicalState } from '@/lib/enums';
import { helpRequestWreckSchema } from '@/lib/validations/schemas';

import useFormManager from '@/hooks/useFormManager';

import Button from '@/components/actions/button';
import Alert from '@/components/alert';
import FormControl from '@/components/form-elements/form-control';
import RequestHelpMessage from '@/components/request-help-message';

export default function HelpRequestWreck() {
  const defaultValues = {
    fullName: '',
    email: '',
    phone: '',
    address: '',
    addressDetail: '',
    bodyCount: '',
    physicalCondition: PhysicalState.Kritik,
    physicalConditionDetail: '',
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
    validationSchema: helpRequestWreckSchema,
    onSubmit: onFormSubmit,
    onError: (err) => {
      console.error('onError - err', err);
    },
    defaultValues,
  });

  return (
    <div className="mx-auto max-w-screen-sm">
      <h1>{t('pageHeaders.underDebrisPage')}</h1>

      <RequestHelpMessage t={t} />

      <FormManagerProvider>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <FormControl
              name="fullName"
              fieldName="TextInput"
              fieldProps={{
                placeholder: 'Ad Soyad',
                type: 'text',
              }}
              wrapperProps={{
                icon: 'user',
              }}
            />
          </div>
          <FormControl
            name="email"
            fieldName="TextInput"
            fieldProps={{ placeholder: 'Email', type: 'email' }}
            wrapperProps={{
              icon: 'email',
            }}
          />

          <FormControl
            name="phone"
            fieldName="TextInput"
            fieldProps={{ placeholder: 'Telefon', type: 'tel' }}
            wrapperProps={{
              icon: 'phone',
            }}
          />
          <div className="sm:col-span-2">
            <FormControl
              name="bodyCount"
              fieldName="NumberInput"
              fieldProps={{
                placeholder: 'Kişi Sayısı',
                min: 1,
              }}
              wrapperProps={{
                icon: 'userPlus',
              }}
            />
          </div>
          <div className="sm:col-span-2">
            <FormControl
              name="address"
              fieldName="Textarea"
              fieldProps={{
                placeholder: 'Adres',
                rows: 2,
                autogrow: true,
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
                placeholder: 'Adres Tarifi',
                rows: 1,
                autogrow: true,
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
              wrapperProps={{
                label: 'Durum',
              }}
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
              name="physicalConditionDetail"
              fieldName="Textarea"
              fieldProps={{
                placeholder: 'Fiziki Durum Hakkında Bilgi',
                rows: 2,
                autogrow: true,
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
              name="tweetUrl"
              fieldName="TextInput"
              fieldProps={{
                placeholder: 'Tweet Linki',
                type: 'url',
              }}
              wrapperProps={{
                icon: 'link',
              }}
            />
          </div>
          <div className="sm:col-span-2">
            <p className="mb-4 text-xs">
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
            <FormControl
              fieldName="Checkbox"
              name="term"
              fieldProps={{ label: 'Okudum ve aydınlandım.' }}
            />
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
