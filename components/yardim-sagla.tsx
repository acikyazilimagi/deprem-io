import PrimaryButton from '@/components/primary-button'
import Icon from '@/components/icon'

type YardimSaglaProps = {}

export default function YardimSagla({}: YardimSaglaProps) {
  return (
    <section className="mt-20">
      <h3 className="mb-5">Yardım Sağla</h3>

      <div className="grid gap-3 sm:grid-cols-3 sm:gap-6">
        <PrimaryButton href="/yardim-et-ismak">
          <Icon icon="key" />
          <span>İş Makinesi Kullanabilirim</span>
        </PrimaryButton>

        <PrimaryButton href="/yardim-et-yolcu-tasi">
          <Icon icon="truck" />
          <span>Yolcu Taşıyabilirim</span>
        </PrimaryButton>

        <PrimaryButton href="/yardim-et-bagis">
          <Icon icon="dollar" />
          <span>Yolcu Taşıyabilirim</span>
        </PrimaryButton>
      </div>
    </section>
  )
}
