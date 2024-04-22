import React from "react";
import MaxWidthWrapper from "./ui/max-width-wrapper";
import { CITIES } from "@/config/cities";
import { Building2 } from "lucide-react";

const Cities: React.FC = () => {
  return (
    <section id="places">
      <MaxWidthWrapper className="py-10 flex flex-col gap-6">
        <h2 className="font-bold text-2xl text-center">
          Міста в яких ми працюємо
        </h2>
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-x-2.5 gap-y-4">
          {CITIES.map((city, index) => (
            <li
              key={index}
              className="inline-flex items-center gap-2 w-full mx-auto"
            >
              <Building2 aria-hidden className="text-muted-foreground" />
              <span>{city}</span>
            </li>
          ))}
        </ul>
      </MaxWidthWrapper>
    </section>
  );
};

export default Cities;
