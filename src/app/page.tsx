import dynamic from "next/dynamic";
import Cities from "@/components/cities";
import Hero from "./_components/hero";
import Prices from "./_components/prices";
import Reviews from "./_components/reviews/reviews";
import Service from "./_components/service";
import { buttonVariants } from "@/components/ui/button";
import MaxWidthWrapper from "@/components/ui/max-width-wrapper";
import { cn } from "@/lib/utils";
import { ArrowUp } from "lucide-react";

const HeroPhotos = dynamic(() => import("@/components/hero-photos/hero-photos"), {
  ssr: false,
  loading: () => <div className="mt-10 mb-6 h-[300px] mx-2.5 md:mx-20 rounded-lg bg-muted animate-pulse" />,
});

export default function Home() {
  return (
    <>
      <Hero />
      <HeroPhotos />
      <Prices />
      <div>
        <Cities />
        <Reviews />
        <Service />
      </div>
      <section className="my-10">
        <MaxWidthWrapper className="flex justify-center">
          <a
            href="/#contact-us"
            className={cn(
              buttonVariants({ size: "lg" }),
              "group inline-flex items-center gap-2"
            )}
          >
            <ArrowUp className="group-hover:animate-bounce transition-transform w-4 h-4" />
            Замовити дзвінок
          </a>
        </MaxWidthWrapper>
      </section>
    </>
  );
}
