/* eslint-disable @next/next/no-img-element */

'use client';

import {
    Checkbox,
    Field,
    Input,
    Label,
    Radio,
    RadioGroup,
    Textarea,
} from '@headlessui/react';
import Image from 'next/image';
import React, { useState } from 'react';

const EventBookingForm = () => {
    const Q1Options = [
        'Student',
        'Working Professional',
        'Entrepreneur',
        'None',
    ];
    const [selected, setSelected] = useState(Q1Options[0]);
    const [enabled, setEnabled] = useState(false);

    return (
        <>
            <div className="px-4 md:px-10 lg:px-36">
                <h1 className="text-[32px] font-medium">
                    Curious Monkey : Book My Space{' '}
                </h1>
                <Image
                    src="/img/digitiki.png"
                    alt="digitiki"
                    width={0}
                    height={0}
                    sizes="100%"
                    className="w-full h-full rounded-[10px]"
                />
            </div>
            <div className="relative">
                <img
                    src="/img/form-bg.png"
                    alt="form-bg"
                    className="absolute inset-0 w-full z-0"
                />
                <div className="px-4 md:px-10 lg:px-36">
                    <div>
                        <h1 className="text-3xl mt-7">Form</h1>
                        <form
                            action=""
                            className="bg-white px-10 py-4 relative z-1 rounded-lg mt-9"
                        >
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                <Field className="flex flex-col">
                                    <Label>First Name</Label>
                                    <Input
                                        name="first_name"
                                        className="border rounded-lg h-14"
                                    />
                                </Field>
                                <Field className="flex flex-col">
                                    <Label>Last Name</Label>
                                    <Input
                                        name="last_name"
                                        className="border rounded-lg h-14"
                                    />
                                </Field>
                                <Field className="flex flex-col">
                                    <Label>E-mail</Label>
                                    <Input
                                        name="email"
                                        className="border rounded-lg h-14"
                                    />
                                </Field>
                                <Field className="flex flex-col">
                                    <Label>Phone Number</Label>
                                    <Input
                                        name="phone_number"
                                        className="border rounded-lg h-14"
                                    />
                                </Field>
                            </div>
                            <div className="mt-8">
                                <h1>Q1) Who are you?</h1>
                                <RadioGroup
                                    value={selected}
                                    onChange={setSelected}
                                    aria-label="Server size"
                                >
                                    {Q1Options.map((plan) => (
                                        <Field
                                            key={plan}
                                            className="flex items-center gap-2"
                                        >
                                            <Radio
                                                value={plan}
                                                className="group flex size-5 items-center justify-center rounded-full border bg-white data-[checked]:bg-blue-400"
                                            >
                                                <span className="invisible size-2 rounded-full bg-white group-data-[checked]:visible" />
                                            </Radio>
                                            <Label>{plan}</Label>
                                        </Field>
                                    ))}
                                </RadioGroup>
                            </div>
                            <div className="mt-8">
                                <h1>
                                    Qn) Any question you want us to ask the
                                    guest?
                                </h1>
                                <Textarea
                                    name="description"
                                    className="max-w-[520px] w-full h-48 border rounded-lg"
                                ></Textarea>
                            </div>
                            <div className="flex items-center">
                                <Checkbox
                                    checked={enabled}
                                    onChange={setEnabled}
                                    className="group block size-4 rounded border bg-white data-[checked]:bg-blue-500"
                                >
                                    {/* Checkmark icon */}
                                    <svg
                                        className="stroke-white opacity-0 group-data-[checked]:opacity-100"
                                        viewBox="0 0 14 14"
                                        fill="none"
                                    >
                                        <path
                                            d="M3 8L6 11L11 3.5"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>{' '}
                                </Checkbox>
                                <h1 className="ml-4">Sign in with email</h1>
                            </div>
                            <button className="py-4 px-10 bg-[#193568] text-white mt-8 rounded-lg">
                                Pay Now
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EventBookingForm;
