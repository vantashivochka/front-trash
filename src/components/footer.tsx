import React from "react";
import MaxWidthWrapper from "./ui/max-width-wrapper";
import { PhoneCall } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary mt-20 border-t border-gray-200">
      <MaxWidthWrapper className="flex flex-col gap-6 py-10">
        <span className="text-center">в будь-який час, без вихідних</span>
        <div className="flex justify-center md:flex-row flex-col gap-4 items-center">
          <a
            href="tel:+380994162272"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "flex items-center gap-2 font-semibold text-lg md:text-xl"
            )}
          >
            <PhoneCall aria-hidden />
            (099) 416 22 72
          </a>
          <a
            href="tel:+380633082910"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "flex items-center gap-2 font-semibold text-lg md:text-xl"
            )}
          >
            <PhoneCall aria-hidden />
            (063) 308 29 10
          </a>
        </div>
        <span className="font-bold text-sm text-muted-foreground text-center">
          Vantazhivochka, {new Date().getFullYear()} © Всі права захищені
        </span>
      </MaxWidthWrapper>
    </footer>
  );
};

export default Footer;
