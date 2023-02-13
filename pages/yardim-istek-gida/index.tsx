import useTranslation from 'next-translate/useTranslation'
import Trans from 'next-translate/Trans'
import Alert from '@/components/alert'
import CustomLink from '@/components/custom-link'
import FormManager from '@/components/form/form-manager'
import FormControl from '@/components/form/form-control'
import { getConstraintsFromValidation } from '@/lib/utils'
import RequestHelpMessage from '@/components/request-help-message'
import { PhysicalState, TransportationState } from '@/lib/enums'
import { helpRequestFoodSchema } from '@/lib/validations/schemas'

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
  }

  const { t } = useTranslation('common')

  const onFormSubmit = async (values: object) => {
    console.log(values)
  }

  return (
    <div className="mx-auto max-w-screen-sm">
      <h1>{t('pageHeaders.needFoodPage')}</h1>

      <RequestHelpMessage t={t} />

      <p className="mb-5">{t('warningMessages.requiredFieldsAreMandatory')}</p>
      <FormManager
        validationSchema={helpRequestFoodSchema}
        onSubmit={onFormSubmit}
        onError={(err) => {
          console.error('onError - err', err)
        }}
        defaultValues={defaultValues}
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <FormControl
              fieldName="TextInput"
              name="fullName"
              icon="user"
              fieldProps={{
                placeholder: `* ${t('inputFields.fullName')}`,
                type: 'text',
              }}
            />
          </div>
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
          <div className="sm:col-span-2">
            <FormControl
              fieldName="TextInput"
              name="humanCount"
              icon="userPlus"
              fieldProps={{
                placeholder: t('inputFields.peopleCount'),
                type: 'number',
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
                placeholder: `* ${t('inputFields.address')}`,
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
                placeholder: t('inputFields.addressDetail'),
                rows: 1,
                maxLength: getConstraintsFromValidation(
                  helpRequestFoodSchema,
                  'addressDetail',
                  'max'
                ),
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
              fieldName="Radio"
              name="physicalCondition"
              fieldProps={{
                radioGroupData: [
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
              fieldName="TextArea"
              name="physicalConditionDetail"
              icon="info"
              className="max-h-32 w-full"
              fieldProps={{
                placeholder: `* ${t('inputFields.physicalConditionDetail')}`,
                rows: 2,
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
              icon="link"
              fieldProps={{
                placeholder: t('inputFields.tweetUrl'),
                type: 'url',
              }}
            />
          </div>
          <div className="sm:col-span-2">
            <FormControl
              fieldName="Radio"
              name="transportationStatus"
              fieldProps={{
                radioGroupData: [
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
                components={[<CustomLink key="kvkk" href="/hukuki-kvkk" />]}
              />
            </p>
            <div className="mt-4">
              <FormControl
                fieldName="CheckBox"
                name="term"
                fieldProps={{
                  label: t('inputFields.termsAcceptedLabel'),
                }}
              />
            </div>
          </div>
          <div>
            <FormControl
              fieldName="Button"
              name="enkaz-form-submit"
              fieldProps={{ label: t('submit') }}
            />
          </div>
        </div>
      </FormManager>
    </div>
  )
}
