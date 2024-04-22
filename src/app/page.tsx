import Cities from "@/components/cities";
import ContactForm from "@/components/contact-form";
import Faq from "@/components/faq";
import Hero from "@/components/hero";
import Prices from "@/components/prices/prices";
import Reviews from "@/components/reviews/reviews";
import Service from "@/components/service";
import { buttonVariants } from "@/components/ui/button";
import MaxWidthWrapper from "@/components/ui/max-width-wrapper";
import { cn } from "@/lib/utils";
import { ArrowUp } from "lucide-react";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <Hero />
      <Suspense>
        <ContactForm />
      </Suspense>
      <Prices />
      <div
        style={{
          background:
            "url(https://sieben-umzuege-images.fra1.cdn.digitaloceanspaces.com/sieben-umzuege/images/BG/lightBlueShape.svg) 100% no-repeat",
        }}
      >
        <Cities />
        <Reviews />
        <Service />
      </div>
      <Faq />
      <section className="my-10">
        <MaxWidthWrapper className="flex justify-center">
          <a
            href="/#contact-us"
            className={cn(buttonVariants({ size: "lg" }), "group inline-flex items-center gap-2")}
          >
            <ArrowUp className="group-hover:animate-bounce transition-transform w-4 h-4" />
            Замовити дзвінок
          </a>
        </MaxWidthWrapper>
      </section>
    </>
  );
}
