"use client";

import React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ReviewCard from "./review-card";
import { REVIEWS } from "@/config/reviews";

export interface ReviewItem {
  id: string;
  createdAt: string;
  updatedAt: string;
  name: string;
  text: string;
  rating: number;
}

const Reviews: React.FC = () => {
  return (
    <section
      className="mx-auto w-full max-w-screen-2xl px-2.5 md:px-20 py-10 flex flex-col gap-6"
      id="reviews"
    >
      <h2 className="font-bold text-2xl text-center">Що люди кажуть про нас</h2>
      <Carousel
        opts={{ align: "start", loop: true }}
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
        className="w-full"
      >
        <CarouselContent className="items-center">
          {REVIEWS.map((review, index) => (
            <CarouselItem
              key={index}
              className="basis-full md:basis-1/2 lg:basis-1/3"
            >
              <div className="p-1">
                <ReviewCard key={review.id} {...review} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex md:block justify-center gap-6 mt-8 md:mt-0">
          <CarouselPrevious className="static md:absolute" />
          <CarouselNext className="static md:absolute" />
        </div>
      </Carousel>
    </section>
  );
};

export default Reviews;
