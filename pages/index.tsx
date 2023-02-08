import YardimAl from "@/components/yardim-al";
import YardimSagla from "@/components/yardim-sagla";
import YardimListeleri from "@/components/yardim-listeleri";
import YardimHaritalari from "@/components/yardim-haritalari";

export default function Home() {
  return (
    <>
      <YardimAl />
      <YardimSagla />
      <YardimListeleri />
      <YardimHaritalari />
    </>
  );
}
