'use client';

import React, { useEffect, useState } from 'react';
import { getCategoryData, getUpcomingData } from '@/app/api/page/page';
import { Select } from '@headlessui/react';
import EventCard from '../event-card/event-card';

const UpcomingEvents = () => {
    const [CategoryData, setCategoryData] = useState<any>();
    const [UpcomingData, setUpcomingData] = useState<any>();
    const [SelectedValue, setSelectedValue] = useState<any>('All');

    useEffect(() => {
        getCategoryData().then((res) => {
            setCategoryData(res);
        });
    }, []);

    useEffect(() => {
        getUpcomingData(SelectedValue).then((res) => {
            setUpcomingData(res);
        });
    }, [SelectedValue]);

    if (CategoryData && UpcomingData)
        return (
            <div className="my-32">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-4xl font-medium">Upcoming Events</h1>
                    <button className="flex items-center py-3 px-6 bg-white rounded-[40px] border border-[#9E9D9A]">
                        <Select
                            name="category"
                            className="bg-white"
                            aria-label="category"
                            value={SelectedValue}
                            onChange={(e) => setSelectedValue(e.target.value)}
                        >
                            <option value="All">All</option>
                            {CategoryData.results.map((category: any) => (
                                <option
                                    key={category.uuid}
                                    value={category.uuid}
                                >
                                    {category.name}
                                </option>
                            ))}
                        </Select>
                    </button>
                </div>
                <div className="flex justify-between flex-wrap gap-6">
                    {UpcomingData.results.map((data: any) => (
                        <EventCard key={data.uuid} data={data} />
                    ))}
                </div>
            </div>
        );
};

export default UpcomingEvents;
