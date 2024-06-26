/* eslint-disable consistent-return */

import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const BookNow = ({
    type,
    style,
}: {
    type: 'primary' | 'secondary';
    style?: string;
}) => {
    if (type === 'primary')
        return (
            <button
                className={`text-center text-white w-full py-4 px-12 font-bold border border-1 bg-[#193568] ${style}`}
            >
                Book Now
            </button>
        );
    if (type === 'secondary') {
        return (
            <button className="flex items-center py-4 px-12 border border-1">
                Book Now <FaArrowRight className="ml-2" />
            </button>
        );
    }
};
export default BookNow;
