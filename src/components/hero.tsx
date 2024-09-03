"use client";

import React from "react";
import MaxWidthWrapper from "./ui/max-width-wrapper";
import { PhoneCall } from "lucide-react";
import { motion } from "framer-motion";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";

const Hero: React.FC = () => {
  const variants = {
    hidden: {
      y: -30,
      opacity: 0,
    },
    visible: (custom: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.45,
        delay: custom * 0.3,
      },
    }),
  };

  return (
    <section>
      <MaxWidthWrapper id="about-us">
        <div className="flex justify-center mt-10 md:pt-16 pb-6 max-w-4xl w-full mx-auto">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-1.5 text-center">
              <motion.h2
                initial="hidden"
                whileInView="visible"
                variants={variants}
                custom={1}
                viewport={{ once: true, amount: 0.2 }}
                className="text-sm md:text-lg text-primary"
              >
                По завжди актуальним цінам
              </motion.h2>
              <motion.h1
                initial="hidden"
                whileInView="visible"
                variants={variants}
                custom={2}
                viewport={{ once: true, amount: 0.2 }}
                className="text-3xl md:text-4xl font-bold tracking-tight"
              >
                Вивіз сміття в{" "}
                <span className="text-purple-600">м. Київ</span> та{" "}
                <span className="text-purple-600">Київській області</span>
              </motion.h1>
            </div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={variants}
              custom={3}
              viewport={{ once: true, amount: 0.2 }}
              className="flex justify-center gap-4 md:flex-row flex-col items-center"
            >
              <a
                href="tel:+380633945095"
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "flex items-center gap-2 font-semibold text-lg md:text-xl"
                )}
              >
                <PhoneCall aria-hidden />
                (063) 394-50-95
              </a>
              <a
                href="tel:+380994162272"
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "flex items-center gap-2 font-semibold text-lg md:text-xl"
                )}
              >
                <PhoneCall aria-hidden />
                (099) 416-22-72
              </a>
            </motion.div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Hero;
