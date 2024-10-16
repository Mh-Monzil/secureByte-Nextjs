import Image from "next/image";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import Logo from "/public/logo2.png";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4">
      {/* logo  */}
      <div className="relative">
        <Image src={Logo} alt="logo" width={45} height={10} className="" />
        <span className="absolute -right-24 bottom-0 text-lg font-medium text-white/80 ">
          SecureByte
        </span>
      </div>

      <div className="flex items-center gap-6">
        {/* mobile navbar  */}
        <MobileNav />

        {/* desktop nav  */}
        <DesktopNav />

        <Button variant="default" className="hidden md:block font-semibold px-5 ">
          Login
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
