import EventBookingForm from '@/components/event-booking-components/event-booking-form';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
import React from 'react';

const page = ({ params }: Params) => (
    <div className="max-w-[1440px] m-auto py-7">
        <EventBookingForm bookingId={params.eventId[0]} />
    </div>
);

export default page;
