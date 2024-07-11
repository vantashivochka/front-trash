"use client";

import React from "react";
import { FaViber, FaTelegram } from "react-icons/fa";

import MaxWidthWrapper from "@/components/ui/max-width-wrapper";
import { PhoneCall } from "lucide-react";
import { motion } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";
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
        <div className="flex justify-center flex-col items-center gap-6 mt-10 md:pt-16 pb-6 max-w-4xl w-full mx-auto">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-1.5 text-center">
              <motion.h2
                initial="hidden"
                whileInView="visible"
                variants={variants}
                custom={1}
                viewport={{ once: true, amount: 0.2 }}
                className="text-sm md:text-lg text-muted-foreground"
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
                Вивіз сміття в <span className="text-purple-600">м. Київ</span>{" "}
                та <span className="text-purple-600">Київській області</span>
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
                href="tel:+380633082910"
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "flex items-center gap-2 font-semibold text-lg md:text-xl"
                )}
              >
                <PhoneCall aria-hidden />
                (063) 308 29 10
              </a>
              <a
                href="tel:+380633945095"
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "flex items-center gap-2 font-semibold text-lg md:text-xl"
                )}
              >
                <PhoneCall aria-hidden />
                (063) 394 50 95
              </a>
            </motion.div>
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={variants}
            custom={4}
            viewport={{ once: true, amount: 0.3 }}
            className="w-full text-center flex flex-col gap-2 items-center"
          >
            <p className="text-lg font-medium">Напишіть нам в мессенджері:</p>
            <div className="flex items-center gap-4">
              <a
                href="https://t.me/BusanAvto"
                target="_blank"
                className={cn(
                  buttonVariants({
                    variant: "outline",
                    size: "lg",
                  }),
                  "items-center gap-2 text-lg md:text-xl"
                )}
              >
                <FaTelegram aria-hidden />
                Telegram
              </a>
              <a
                href="viber://chat?number=+380962430879"
                target="_blank"
                className={cn(
                  buttonVariants({
                    variant: "outline",
                    size: "lg",
                  }),
                  "items-center gap-2 text-lg md:text-xl"
                )}
              >
                <FaViber aria-hidden />
                Viber
              </a>
            </div>
          </motion.div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Hero;
