import React from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import EventCard from '../event-card/event-card';

const CurrentEvent = () => (
    <div className="my-32">
        <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl font-medium">Current Events</h1>
            <button className="flex items-center py-3 px-6 bg-white rounded-[40px] border border-[#9E9D9A]">
                <span>All</span> <IoIosArrowDown className="ml-2" />
            </button>
        </div>
        <div className="flex justify-between flex-wrap gap-6">
            <EventCard />
            <EventCard />
            <EventCard />
        </div>
    </div>
);

export default CurrentEvent;
