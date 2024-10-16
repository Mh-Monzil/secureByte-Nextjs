import React from "react";
import { navLinks } from "./Navlinks";
import Link from "next/link";

const DesktopNav = () => {
  return (
    <div className="hidden md:flex items-center gap-6">
      {navLinks.map((navLink) => (
        <Link href={`${navLink.path}`} key={navLink.path} className="before:w-0 hover:before:w-full before:bg-white before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:-bottom-0.5 transition-all duration-300 before:left-0 cursor-pointer text-base capitalize">
          {navLink.pageTitle}
        </Link>
      ))}
    </div>
  );
};

export default DesktopNav;
