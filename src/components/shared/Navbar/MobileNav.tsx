"use client";
import React, { useEffect, useState } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  //   SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { navLinks } from "./Navlinks";

const MobileNav = () => {
  const [mounted, setMounted] = useState(false);

  // Ensure the component renders only after hydration
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  

  return (
    <div className="block md:hidden">
      <Sheet >
        <SheetTrigger>
          <Button variant="outline">
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle className="text-xl text-start md:text-2xl">
              SecureByte
            </SheetTitle>
          </SheetHeader>

          <div className="flex flex-col items-start gap-4 py-4 ">
            {navLinks.map((navLink) => (
              <SheetClose key={navLink.path}>
                <Link href={`${navLink.path}`} className="text-lg capitalize">
                  {navLink.pageTitle}
                </Link>
              </SheetClose>
            ))}
            {/* <SheetClose>
            <Button variant="link" className="text-lg">About</Button>
          </SheetClose>
          <SheetClose>
            <Button variant="link" className="text-lg">Contact</Button>
          </SheetClose> */}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
