import React from "react";
import MaxWidthWrapper from "./ui/max-width-wrapper";
import Image from "next/image";
import borderText from "../../public/customTextBorder1.png";

const Service: React.FC = () => {
  return (
    <section id="service" className="py-5 sm:py-10">
      <h2 className="font-bold text-2xl text-center">Послуги які ми надаємо</h2>
      <MaxWidthWrapper className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-6">
        <div className="flex flex-col w-full">
          <div className="relative">
            <h5 className="pt-8 pb-4 px-4 relative text-center font-semibold text-lg">
              Збирання
              <Image fill src={borderText} alt="border-text" aria-hidden />
            </h5>
          </div>
          <p className="text-sm text-muted-foreground mt-5 text-center">
            Збирання сміття - це перша ланка в ланцюжку ефективного управління
            відходами
          </p>
        </div>
        <div className="flex flex-col w-full">
          <div className="relative">
            <h5 className="pt-8 pb-4 px-4 relative text-center font-semibold text-lg">
              Переробка
              <Image fill src={borderText} alt="border-text" aria-hidden />
            </h5>
          </div>
          <p className="text-sm text-muted-foreground mt-5 text-center">
            Переробка сміття - це ключовий етап у зменшенні негативного впливу
            людської діяльності на навколишнє середовище
          </p>
        </div>
        <div className="flex flex-col w-full">
          <div className="relative">
            <h5 className="pt-8 pb-4 px-4 relative text-center font-semibold text-lg">
              Транспортування
              <Image fill src={borderText} alt="border-text" aria-hidden />
            </h5>
          </div>
          <p className="text-sm text-muted-foreground mt-5 text-center">
            Після збору сміття важливо правильно та безпечно транспортувати його
            до місця подальшої переробки
          </p>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Service;
