"use client";

import React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";
import logo from "../../public/images/logo-new.png";
import Link from "next/link";
import { MENU } from "@/config/menu";

const NavbarMobile: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="lg:hidden rounded-sm">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent className="dark:bg-slate-900">
        <SheetHeader className="flex items-center">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex relative h-14 w-20">
              <Image
                src={logo}
                fill
                alt="Вантажівочка логотип"
                className="hidden dark:block object-contain"
              />
            </Link>
            <div className="flex flex-col gap-0.5 max-w-xs w-full text-start">
              <span className="font-bold uppercase text-sm">Сміттєвозочка</span>
              <span className="text-xs font-medium text-muted-foreground">
                Вивіз сміття у м. Київ та області
              </span>
            </div>
          </div>
        </SheetHeader>
        <nav className="w-full mt-10">
          <ul className="flex flex-col items-start w-full gap-5">
            {MENU.map((item) => (
              <li
                key={item.id}
                className="font-bold text-lg hover:underline hover:text-muted-foreground transition-all underline-offset-8"
                onClick={() => setIsOpen(false)}
              >
                <a href={item.path}>{item.title}</a>
              </li>
            ))}
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default NavbarMobile;
