import Banner from "@/components/Home/Banner";
import ChooseUs from "@/components/Home/ChooseUs";
import ContactUs from "@/components/Home/ContactUs";
import HowWeWork from "@/components/Home/HowWeWork";
import TrustedCompany from "@/components/Home/TrustedCompany";

export default function Home() {
  return (
    <main>
      <Banner />
      <div className="max-w-[1140px] mx-auto px-4">
        <TrustedCompany />
        <ChooseUs />
        <HowWeWork />
        <ContactUs />
      </div>
    </main>
  );
}
