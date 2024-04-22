import React from "react";
import MaxWidthWrapper from "./ui/max-width-wrapper";
import { ArrowLeft, CheckCircle } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";

const ThankYoubanner: React.FC = () => {
  return (
    <MaxWidthWrapper className="flex flex-col flex-1 h-full py-10">
      <div className="flex flex-col h-full flex-1 items-center justify-center gap-4 max-w-md w-full mx-auto">
        <span>
          <CheckCircle className="w-12 h-12 text-green-500" />
        </span>
        <div className="flex flex-col gap-2 text-center">
          <h3 className="font-semibold text-xl">Дякуємо!</h3>
          <p className="text-muted-foreground">
            Ваша заявка прийнята. Наш менеджер зв&apos;яжеться з вами найближчим
            часом
          </p>
        </div>
        <Link
          href="/"
          className={cn(buttonVariants(), "inline-flex items-center gap-2 group")}
        >
          <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition" />
          Повернутись на головну
        </Link>
      </div>
    </MaxWidthWrapper>
  );
};

export default ThankYoubanner;
