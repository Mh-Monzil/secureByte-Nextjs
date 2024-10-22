import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { GoShieldCheck } from "react-icons/go";

const Banner = () => {
  return (
    <div className="h-[40rem] w-full dark:bg-gray-950 bg-white  dark:bg-grid-white/[0.1] bg-grid-black/[0.1] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-gray-950 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      <div className="max-w-[1140px] mx-auto h-[450px] w-full flex flex-col md:flex-row justify-between items-center gap-5 rounded-3xl px-4 md:px-8 lg:px-10">
        <div className="w-full md:w-1/2 mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-[52px] font-bold">
            Next-Level Cyber Defense at Your Fingertips
          </h1>
          <p className="text-lg mt-5 leading-8">
          Secure your systems and prevent threats with advanced firewalls, monitoring, and penetration testing services. Stay one step ahead with our proactive security strategies.
          </p>
          <Button
            variant="outline"
            size="lg"
            className="text-lg capitalize mt-7 py-3 flex items-center gap-2 group border-teal-500"
          >
            <span>Let&#39;s connect</span>
            <ArrowUpRight className="group-hover:rotate-45 transition-all duration-300 ease-in-out group-hover:translate-x-1" />
          </Button>
        </div>
        <div className="w-full md:w-1/2">
          <GoShieldCheck className="text-[280px] mx-auto text-teal-400" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
