import useTranslation from 'next-translate/useTranslation'
import Trans from 'next-translate/Trans'
import Alert from '@/components/alert'
import CustomLink from '@/components/custom-link'
import FormManager from '@/components/form/form-manager'
import FormControl from '@/components/form/form-control'
import { getConstraintsFromValidation } from '@/lib/utils'
import RequestHelpMessage from '@/components/request-help-message'
import cities from '@/lib/cities'
import { helpRequestConstructionMachineSchema } from '@/lib/validations/schemas'

export default function HelpConstructionMachine() {
  const defaultValues = {
    fullName: '',
    email: '',
    phone: '',
    info: '',
    term: false,
  }

  const { t } = useTranslation('common')

  const onFormSubmit = async (values: object) => {
    console.log(values)
  }

  const citiesList = [
    { value: '', label: `* ${t('inputFields.helpCity')}` },
    ...cities,
  ]
  return (
    <div className="mx-auto max-w-screen-sm">
      <h1>{t('pageHeaders.canUseConstructionMachinePage')}</h1>

      <RequestHelpMessage t={t} />

      <p className="mb-5">{t('warningMessages.requiredFieldsAreMandatory')}</p>
      <FormManager
        validationSchema={helpRequestConstructionMachineSchema}
        onSubmit={onFormSubmit}
        onError={(err) => {
          console.error('onError - err', err)
        }}
        defaultValues={defaultValues}
      >
        <div className="grid gap-4 sm:grid-cols-3">
          <FormControl
            fieldName="TextInput"
            name="fullName"
            icon="user"
            fieldProps={{
              placeholder: `* ${t('inputFields.fullName')}`,
              type: 'text',
            }}
          />
          <FormControl
            fieldName="TextInput"
            name="email"
            icon="email"
            fieldProps={{ placeholder: 'Email', type: 'email' }}
          />
          <FormControl
            fieldName="PhoneInput"
            name="phone"
            icon="phone"
            addon={
              <span className="pointer-events-none absolute top-0 left-8 flex h-11 w-11 items-center justify-center opacity-60 dark:opacity-40">
                +90
              </span>
            }
            className="pl-[73px]"
            fieldProps={{
              placeholder: t('inputFields.phone'),
              type: 'tel',
              max: 14,
            }}
          />
          <div className="sm:col-span-3">
            <FormControl
              fieldName="Select"
              name="city"
              icon="pin"
              selectOptions={citiesList}
            />
          </div>
          <div className="sm:col-span-3">
            <FormControl
              fieldName="TextArea"
              name="info"
              icon="info"
              className="max-h-32 w-full"
              fieldProps={{
                placeholder: `* ${t('inputFields.helpInfo')}`,
                rows: 3,
                maxLength: getConstraintsFromValidation(
                  helpRequestConstructionMachineSchema,
                  'info',
                  'max'
                ),
              }}
            />
          </div>
          <div className="sm:col-span-3">
            <Alert>
              <p>
                {t('warningMessages.noPersonalHealthInformation') +
                  t('warningMessages.noPersonalHealthInformationAddonHelpInfo')}
              </p>
            </Alert>
          </div>
          <div className="sm:col-span-3">
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
                fieldProps={{ label: t('inputFields.termsAcceptedLabel') }}
              />
            </div>
          </div>
          <div>
            <FormControl
              fieldName="Button"
              name="enkaz-form-submit"
              fieldProps={{ type: 'submit', label: t('submit') }}
            />
          </div>
        </div>
      </FormManager>
    </div>
  )
}
