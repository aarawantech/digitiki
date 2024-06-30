/* eslint-disable no-unused-vars */
/* eslint-disable array-callback-return */
/* eslint-disable @next/next/no-img-element */

'use client';

import { getBookingForm } from '@/app/api/page/page';
import {
    Checkbox,
    Field,
    Input,
    Label,
    Radio,
    RadioGroup,
} from '@headlessui/react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useSession } from 'next-auth/react';
import InputField from './input-field';
import { useForm } from './use-form';

const EventBookingForm = ({ bookingId }: { bookingId: string }) => {
    const [SelectedCheckBoxValue, setSelectedCheckBoxValue] = useState<any>([]);
    const [getFormData, setGetFormData] = useState<any>();
    const [date, setDate] = useState(new Date());
    const formStore = useForm();

    const handleCheckBoxValues = (value: string, checkboxUuid: string) => {
        const newSelectedCheckBoxValue = [...SelectedCheckBoxValue];
        if (SelectedCheckBoxValue.includes(value)) {
            const index = newSelectedCheckBoxValue.indexOf(value);
            newSelectedCheckBoxValue.splice(index, 1);
        } else {
            newSelectedCheckBoxValue.push(value);
        }
        setSelectedCheckBoxValue(newSelectedCheckBoxValue);
        formStore.setAnswer(checkboxUuid, newSelectedCheckBoxValue);
    };
    const handleRadioValue = (value: string, radioUuid: string) => {
        formStore.setAnswer(radioUuid, value);
    };

    useEffect(() => {
        if (bookingId) {
            getBookingForm(bookingId).then((res) => setGetFormData(res));
        }
    }, [bookingId]);

    const sessionData = useSession();

    const handleSubmitForm = async (e: any) => {
        e.preventDefault();
        if (sessionData) {
            const formData = {
                registration: {
                    full_name: sessionData.data?.user?.name,
                    event: bookingId,
                    email: sessionData.data?.user?.email,
                },
                answers: formStore.answers,
            };
            const res = await fetch(
                `${process.env.NEXT_PUBLIC_BASE_URL}/form/submit/`,
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formData),
                }
            );
            if (!res.ok) {
                throw new Error(`Error: ${res.status} - ${res.statusText}`);
            }
            const resData = await res.json();
            console.log(resData);
        }
    };

    if (getFormData)
        return (
            <>
                <div className="px-4 md:px-10 lg:px-36">
                    <h1 className="text-[32px] font-medium">
                        {getFormData.form_name}
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
                            <h1 className="text-3xl mt-7 w-full bg-white px-2 md:px-10 py-1 md:py-4 rounded-lg relative z-1">
                                Booking Form
                            </h1>
                            <form
                                action=""
                                className="bg-white px-2 md:px-10 py-1 md:py-4 relative z-1 rounded-lg mt-9"
                            >
                                <div className="grid grid-cols-1 gap-8">
                                    {getFormData.question.map((data: any) => (
                                        <Field
                                            key={data.uuid}
                                            className="flex flex-col"
                                        >
                                            <Label>{data.question}</Label>
                                            {data.question_type
                                                .question_type === 'text' && (
                                                <InputField uuid={data.uuid} />
                                            )}
                                            {data.question_type
                                                .question_type === 'number' && (
                                                <InputField
                                                    type="number"
                                                    uuid={data.uuid}
                                                />
                                            )}
                                            {data.question_type
                                                .question_type ===
                                                'multiple_choice' && (
                                                <div key={data.uuid}>
                                                    {data.choices.map(
                                                        (choice: any) => (
                                                            <div
                                                                key={
                                                                    choice.uuid
                                                                }
                                                                className="flex items-center"
                                                            >
                                                                <Checkbox
                                                                    checked={SelectedCheckBoxValue.includes(
                                                                        choice.choice_text
                                                                    )}
                                                                    onChange={() =>
                                                                        handleCheckBoxValues(
                                                                            choice.choice_text,
                                                                            data.uuid
                                                                        )
                                                                    }
                                                                    className="group block size-4 rounded border bg-white data-[checked]:bg-blue-500"
                                                                >
                                                                    <svg
                                                                        className="stroke-white opacity-0 group-data-[checked]:opacity-100"
                                                                        viewBox="0 0 14 14"
                                                                        fill="none"
                                                                    >
                                                                        <path
                                                                            d="M3 8L6 11L11 3.5"
                                                                            strokeWidth={
                                                                                2
                                                                            }
                                                                            strokeLinecap="round"
                                                                            strokeLinejoin="round"
                                                                        />
                                                                    </svg>
                                                                </Checkbox>
                                                                <h1 className="ml-4">
                                                                    {
                                                                        choice.choice_text
                                                                    }
                                                                </h1>
                                                            </div>
                                                        )
                                                    )}
                                                </div>
                                            )}
                                            {data.question_type
                                                .question_type === 'radio' && (
                                                <div key={data.uuid}>
                                                    <RadioGroup
                                                        onChange={(value) =>
                                                            handleRadioValue(
                                                                value,
                                                                data.uuid
                                                            )
                                                        }
                                                        aria-label="Server size"
                                                    >
                                                        {data.choices.map(
                                                            (choice: any) => (
                                                                <Field
                                                                    key={
                                                                        choice.choice_text
                                                                    }
                                                                    className="flex items-center gap-2"
                                                                >
                                                                    <Radio
                                                                        value={
                                                                            choice.choice_text
                                                                        }
                                                                        className="group flex size-5 items-center justify-center rounded-full border bg-white data-[checked]:bg-blue-400"
                                                                    >
                                                                        <span className="invisible size-2 rounded-full bg-white group-data-[checked]:visible" />
                                                                    </Radio>
                                                                    <Label>
                                                                        {
                                                                            choice.choice_text
                                                                        }
                                                                    </Label>
                                                                </Field>
                                                            )
                                                        )}
                                                    </RadioGroup>
                                                </div>
                                            )}
                                            {data.question_type
                                                .question_type === 'date' && (
                                                <div key={data.uuid}>
                                                    <DatePicker
                                                        selected={date}
                                                        onChange={(
                                                            date1: any
                                                        ) =>
                                                            formStore.setAnswer(
                                                                data.uuid,
                                                                date1
                                                            )
                                                        }
                                                        className="max-w-md border px-6 py-4 h-14 rounded-lg"
                                                    />
                                                </div>
                                            )}
                                        </Field>
                                    ))}
                                </div>
                                <button
                                    onClick={handleSubmitForm}
                                    className="py-4 px-10 bg-[#193568] text-white mt-8 rounded-lg"
                                >
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
