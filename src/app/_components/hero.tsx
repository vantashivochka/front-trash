"use client";

import React, { Suspense } from "react";
import { FaViber, FaTelegram } from "react-icons/fa";
import { motion } from "framer-motion";
import { PhoneCall } from "lucide-react";

import MaxWidthWrapper from "@/components/ui/max-width-wrapper";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import ContactForm from "./contact-form";

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
    <section className="bg-[url('/images/hero-bg.jpg')] bg-no-repeat bg-center bg-cover pb-6">
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
                className="text-sm md:text-lg text-primary font-bold"
              >
                По завжди актуальним цінам<br/>
                Першим клієнтам - знижка 10%
              </motion.h2>
              <motion.h1
                initial="hidden"
                whileInView="visible"
                variants={variants}
                custom={2}
                viewport={{ once: true, amount: 0.2 }}
                className="text-3xl md:text-4xl font-bold tracking-tight bg-accent-foreground px-1.5 py-1 rounded-md text-muted"
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
                href="tel:+380633945095"
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "flex items-center gap-2 font-semibold text-lg md:text-xl"
                )}
              >
                <PhoneCall aria-hidden />
                (063) 394 50 95
              </a>
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
            <p className="text-lg font-bold text-primary">Оцінка по фото. Напишіть нам в мессенджері:</p>
            <div className="flex items-center gap-4">
              <a
                href="https://t.me/BusanAvto"
                target="_blank"
                className={cn(
                  buttonVariants({
                    variant: "outline",
                    size: "lg",
                  }),
                  "items-center gap-2 text-lg md:text-xl bg-[#24A1DE]"
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
                  "items-center gap-2 text-lg md:text-xl bg-[#7360f2]"
                )}
              >
                <FaViber aria-hidden />
                Viber
              </a>
            </div>
          </motion.div>
        </div>
        <Suspense>
          <ContactForm />
        </Suspense>
      </MaxWidthWrapper>
    </section>
  );
};

export default Hero;
