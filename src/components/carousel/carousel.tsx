'use client';

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import BookNow from '../book-now/book-now';

const Carousel = ({ CarouselData }: any) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        className: 'slides',
    };

    return (
        <div className="max-w-[1440px] m-auto">
            <Slider {...settings}>
                {CarouselData.map((feature: any) => (
                    <div key={feature.uuid} className="relative h-[577px]">
                        <Image
                            src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${feature.feature_photo}`}
                            alt={feature.name}
                            width={0}
                            height={0}
                            sizes="100%"
                            className="w-[1440px] h-[577px] brightness-[0.3]"
                        />
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-[818px] text-center text-white ">
                            <h1 className="text-xl md:text-4xl lg:text-7xl px-10 font-semibold">
                                {feature.name}
                            </h1>
                            <p className="max-w-2xl text-sm md:text-base mt-0 md:mt-3">
                                {feature.short_description}
                            </p>
                            <div className="w-full flex justify-center items-center mt-5 lg:mt-[83px]">
                                <BookNow
                                    link={`/event-booking/${feature.uuid}`}
                                    type="secondary"
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Carousel;
