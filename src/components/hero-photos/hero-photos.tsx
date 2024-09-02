'use client';

import React from 'react';
import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper';
import { Keyboard, Navigation, Pagination } from 'swiper/modules';

import MaxWidthWrapper from '../ui/max-width-wrapper';
import { CAROUSEL_PHOTOS } from './photos';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const HeroPhotos: React.FC = () => {
    const swiperRef = React.useRef<SwiperType>();

    return (
        <MaxWidthWrapper className="mt-10 mb-6">
            <Swiper
                onBeforeInit={(swiper) => (swiperRef.current = swiper)}
                slidesPerView={4}
                spaceBetween={26}
                modules={[Keyboard, Navigation, Pagination]}
                grabCursor={true}
                pagination={{ clickable: true }}
                loop={true}
                keyboard={true}
                autoHeight
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    870: {
                        slidesPerView: 2,
                        spaceBetween: 26,
                        centeredSlides: true,
                    }
                }}
            >
                {CAROUSEL_PHOTOS.map((image, index) => (
                    <SwiperSlide
                        key={index}
                        className='relative self-center flex h-full max-h-[400px] w-full flex-col items-center justify-center rounded-lg overflow-hidden'>
                        <Image
                            src={image}
                            alt={`Product image ${index + 1}`}
                            width={818}
                            height={300}
                            quality={100}
                            className='h-full w-full object-contain object-bottom'
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </MaxWidthWrapper>
    )
}

export default HeroPhotos;