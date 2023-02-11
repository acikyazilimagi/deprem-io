import PrimaryButton from "@/components/primary-button";
import Icon, { Icons } from "@/components/icon";

type YardimAraclariProps = {};

export default function YardimAraclari({ }: YardimAraclariProps) {
    return (
        <section className="mt-20">
            <h3 className="mb-5">Yardım Araçları</h3>

            <div className="grid gap-3 sm:grid-cols-3 sm:gap-6">
                <PrimaryButton
                    href="https://web.itu.edu.tr/sariero/dinleme.html"
                    target="_blank"
                >
                    <Icon icon={Icons.Fire} />
                    <span>Enkaz Dinleme Uygulaması</span>
                </PrimaryButton>
            </div>
        </section>
    );
}
