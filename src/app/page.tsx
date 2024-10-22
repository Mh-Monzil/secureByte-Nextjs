import Banner from "@/components/Home/Banner";
import TrustedCompany from "@/components/Home/TrustedCompany";

export default function Home() {
  return (
    <main>
      <Banner />
      <div className="max-w-[1140px] mx-auto">
        <TrustedCompany />
      </div>
    </main>
  );
}
