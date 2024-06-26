import Image from 'next/image';
import React from 'react';
import TruncateText from '@/utils/truncate-text';
import BookNow from '../book-now/book-now';

const EventCard = () => (
    <div className="rounded-md w-[360px] drop-shadow-md bg-white">
        <Image
            src="/img/dummy.png"
            alt="dummy"
            width={0}
            height={0}
            sizes="100%"
            className="w-full h-auto"
        />
        <div className="p-4">
            <h1 className="text-xl font-medium">Curious Monkey Session 004</h1>
            <div className="mt-3 font-normal text-[#4A4A4A] mb-6">
                <TruncateText
                    maxLength={45}
                    text="To learn about queer community in Nepal. To learn about queer community in Nepal."
                />
            </div>
            <BookNow type="primary" />
        </div>
    </div>
);

export default EventCard;
