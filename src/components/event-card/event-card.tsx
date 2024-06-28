import Image from 'next/image';
import React from 'react';
import TruncateText from '@/utils/truncate-text';
import { EventDataType } from '@/app/types/types';
import BookNow from '../book-now/book-now';

const EventCard = ({ data }: { data: EventDataType }) => {
    if (data)
        return (
            <div className="rounded-md w-[360px] drop-shadow-md bg-white">
                <div className="w-full h-[300px] overflow-hidden">
                    <Image
                        src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${data?.feature_photo}`}
                        alt="dummy"
                        width={0}
                        height={0}
                        sizes="100%"
                        className="w-full h-full"
                        style={{ objectFit: 'cover' }}
                        priority
                    />
                </div>
                <div className="p-4">
                    <h1 className="text-xl font-medium">{data.name}</h1>
                    <div className="mt-3 font-normal text-[#4A4A4A] mb-6">
                        <TruncateText
                            data={data}
                            maxLength={45}
                            text={data.long_description}
                        />
                    </div>
                    <BookNow
                        link={`/event-booking/${data.uuid}`}
                        type="primary"
                    />
                </div>
            </div>
        );
};

export default EventCard;
