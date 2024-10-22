import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { GoShieldCheck } from "react-icons/go";
import { FlipWords } from "../ui/flip-words";

const Banner = () => {
  const words = [
    "Fortify Your Future with Cutting-Edge Security Solutions",
    "Protect, Prevent, and Progress with SecureByte",
    "Next-Level Cyber Defense at Your Fingertips",
  ];

  return (
    <div className="h-full md:h-[40rem] w-full dark:bg-gray-950 bg-white  dark:bg-grid-white/[0.1] bg-grid-black/[0.1] relative flex items-center justify-center overflow-hidden">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-gray-950 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      <div className="max-w-[1140px] mx-auto md:h-[450px] w-full flex flex-col-reverse md:flex-row justify-between items-center gap-x-5 gap-y-10 rounded-3xl px-4 md:px-8 lg:px-10 z-20 mt-6 md:mt-4">
        <div className="w-full md:w-1/2 mx-auto text-center md:text-start">
          <span className="text-3xl md:text-4xl lg:text-5xl xl:text-[52px] font-bold w-full">
            <FlipWords words={words} duration={6000} className="text-center md:text-start" />
          </span>
          <p className="text-lg mt-5 leading-8">
            Secure your systems and prevent threats with advanced firewalls,
            monitoring, and penetration testing services. Stay one step ahead
            with our proactive security strategies.
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
          <GoShieldCheck className="text-[200px] sm:text-[280px] mx-auto text-teal-400" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
