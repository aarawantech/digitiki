'use client';

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import BookNow from '../book-now/book-now';

const carousel = () => {
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
        <Slider {...settings}>
            <div className="relative">
                <Image
                    src="/img/digitiki.png"
                    alt="asd"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full h-auto brightness-[0.3]"
                />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-[818px] text-center text-white ">
                    <h1 className="text-7xl px-10 font-semibold">
                        Curious Monkey Session 004
                    </h1>
                    <p>To learn about queer community in Nepal</p>
                    <div className="w-full flex justify-center items-center mt-[83px]">
                        <BookNow />
                    </div>
                </div>
            </div>
            <div className="relative">
                <Image
                    src="/img/digitiki.png"
                    alt="asd"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full h-auto brightness-[0.3]"
                />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-[818px] text-center text-white ">
                    <h1 className="text-7xl px-10 font-semibold">
                        Curious Monkey Session 004
                    </h1>
                    <p>To learn about queer community in Nepal</p>
                    <div className="w-full flex justify-center items-center mt-[83px]">
                        <BookNow />
                    </div>
                </div>
            </div>
            <div className="relative">
                <Image
                    src="/img/digitiki.png"
                    alt="asd"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full h-auto brightness-[0.3]"
                />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-[818px] text-center text-white ">
                    <h1 className="text-7xl px-10 font-semibold">
                        Curious Monkey Session 004
                    </h1>
                    <p>To learn about queer community in Nepal</p>
                    <div className="w-full flex justify-center items-center mt-[83px]">
                        <BookNow />
                    </div>
                </div>
            </div>
            <div className="relative">
                <Image
                    src="/img/digitiki.png"
                    alt="asd"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full h-auto brightness-[0.3]"
                />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-[818px] text-center text-white ">
                    <h1 className="text-7xl px-10 font-semibold">
                        Curious Monkey Session 004
                    </h1>
                    <p>To learn about queer community in Nepal</p>
                    <div className="w-full flex justify-center items-center mt-[83px]">
                        <BookNow />
                    </div>
                </div>
            </div>
            <div className="relative">
                <Image
                    src="/img/digitiki.png"
                    alt="asd"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full h-auto brightness-[0.3]"
                />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-[818px] text-center text-white ">
                    <h1 className="text-7xl px-10 font-semibold">
                        Curious Monkey Session 004
                    </h1>
                    <p>To learn about queer community in Nepal</p>
                    <div className="w-full flex justify-center items-center mt-[83px]">
                        <BookNow />
                    </div>
                </div>
            </div>
            <div className="relative">
                <Image
                    src="/img/digitiki.png"
                    alt="asd"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full h-auto brightness-[0.3]"
                />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-[818px] text-center text-white ">
                    <h1 className="text-7xl px-10 font-semibold">
                        Curious Monkey Session 004
                    </h1>
                    <p>To learn about queer community in Nepal</p>
                    <div className="w-full flex justify-center items-center mt-[83px]">
                        <BookNow />
                    </div>
                </div>
            </div>
        </Slider>
    );
};

export default carousel;
