'use client';

import React, { useEffect, useState } from 'react';
import { Select } from '@headlessui/react';
import { getCategoryData, getCurrentData } from '@/app/api/page/page';
import { CategoryTypes, EventDataTypes } from '@/app/types/types';
import EventCard from '../event-card/event-card';

const CurrentEvent = () => {
    const [CategoryData, setCategoryData] = useState<CategoryTypes | null>(
        null
    );
    const [CurrentData, setCurrentData] = useState<EventDataTypes | null>(null);
    const [SelectedValue, setSelectedValue] = useState<string>('All');

    useEffect(() => {
        getCategoryData().then((res) => {
            setCategoryData(res.results);
        });
    }, []);

    useEffect(() => {
        getCurrentData(SelectedValue).then((res) => {
            setCurrentData(res.results);
        });
    }, [SelectedValue]);

    if (CategoryData && CurrentData)
        return (
            <div className="my-32">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-4xl font-medium">Current Events</h1>
                    <button className="flex items-center py-3 px-6 bg-white rounded-[40px] border border-[#9E9D9A]">
                        <Select
                            name="category"
                            className="bg-white"
                            aria-label="category"
                            value={SelectedValue}
                            onChange={(e) => setSelectedValue(e.target.value)}
                        >
                            <option value="All">All</option>
                            {CategoryData.map((category: any) => (
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
                    {CurrentData.map((data: any) => (
                        <EventCard key={data.uuid} data={data} />
                    ))}
                </div>
            </div>
        );
};

export default CurrentEvent;
