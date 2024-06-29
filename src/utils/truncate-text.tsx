'use client';

import BookNow from '@/components/book-now/book-now';
import {
    Description,
    Dialog,
    DialogPanel,
    DialogTitle,
} from '@headlessui/react';
import Image from 'next/image';
import React, { useState } from 'react';

const TruncateText = ({
    text,
    maxLength,
    data,
}: {
    text: string;
    maxLength: number;
    data: any;
}) => {
    const [isOpen, setIsOpen] = useState(false);
    if (text.length <= maxLength) {
        return text;
    }
    if (data)
        return (
            <p>
                {text.substring(0, maxLength)}{' '}
                <button
                    onClick={() => setIsOpen(true)}
                    className="underline font-medium text-[#333333]"
                >
                    Learn more
                </button>
                <Dialog
                    open={isOpen}
                    onClose={() => setIsOpen(false)}
                    className="relative z-50"
                >
                    <div className="fixed inset-0 flex w-screen items-center justify-center p-4 bg-black bg-opacity-75">
                        <DialogPanel className="max-w-2xl space-y-4 border bg-white p-10  rounded-lg">
                            <Image
                                src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${data.feature_photo}`}
                                alt="digitiki"
                                width={0}
                                height={0}
                                sizes="100%"
                                className="w-full h-full rounded-[10px]"
                            />
                            <DialogTitle className="font-semibold text-[#54595E] text-xl">
                                {data.name}
                            </DialogTitle>
                            <Description className="text-[#54595E] text-sm font-normal">
                                {data.long_description}
                            </Description>
                            <div className="flex gap-4 mt-6">
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="w-full border px-20"
                                >
                                    No, Cancel
                                </button>
                                <BookNow
                                    link={`/booking/${data.uuid}`}
                                    style="px-20"
                                    type="primary"
                                />
                            </div>
                        </DialogPanel>
                    </div>
                </Dialog>
            </p>
        );
};

export default TruncateText;
