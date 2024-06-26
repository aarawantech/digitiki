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
}: {
    text: string;
    maxLength: number;
}) => {
    const [isOpen, setIsOpen] = useState(false);
    if (text.length <= maxLength) {
        return text;
    }
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
                            src="/img/digitiki.png"
                            alt="digitiki"
                            width={0}
                            height={0}
                            sizes="100%"
                            className="w-full h-full rounded-[10px]"
                        />
                        <DialogTitle className="font-semibold text-[#54595E] text-xl">
                            CURIOUS MONKEY : Session #004
                        </DialogTitle>
                        <Description className="text-[#54595E] text-sm font-normal">
                            Mark your calendar and make yourself available.
                            Together, we will explore the LGBTQ+ world,
                            understanding both progress and ongoing challenges.
                            Learn about historical milestones, cultural shifts,
                            and the fight for equality and acceptance.
                        </Description>
                        <div className="flex gap-4 mt-6">
                            <button
                                onClick={() => setIsOpen(false)}
                                className="w-full border px-20"
                            >
                                No, Cancel
                            </button>
                            <BookNow style="px-20" type="primary" />
                        </div>
                    </DialogPanel>
                </div>
            </Dialog>
        </p>
    );
};

export default TruncateText;
