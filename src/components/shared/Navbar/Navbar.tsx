"use client";
import Image from "next/image";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import Logo from "/public/logo2.png";
import { Button } from "@/components/ui/button";
// import { FlipWords } from "@/components/ui/flip-words";
import { SparklesCore } from "@/components/ui/sparkles";

const Navbar = () => {
  // const words = ["SecureByte", "SafeGuard"];

  return (
    <div className=" backdrop-blur-lg sticky top-0 z-50">
      <div className="max-w-[1140px] mx-auto flex items-center justify-between p-4">
        {/* logo  */}
        <div className="relative">
          <Image src={Logo} alt="logo" width={45} height={10} className="" />
          
          <div className=" absolute -right-32 bottom-0 text-xl font-medium text-white/90">
            <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.5}
            maxSize={1.4}
            particleDensity={1000}
            className="absolute w-full h-full"
            particleColor="#FFFFFF"
          />
          <span>SecureByte</span>
          </div>
        </div>

        <div className="flex items-center gap-6">
          {/* mobile navbar  */}
          <MobileNav />

          {/* desktop nav  */}
          <DesktopNav />

          <Button
            variant="default"
            className="hidden md:block font-semibold px-5 "
          >
            Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
