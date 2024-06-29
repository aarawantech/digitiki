import { useState, useRef } from 'react';
import { useForm } from './use-form'; // Replace with path to your store

function InputField({ uuid, type }: { uuid: string; type?: string }) {
    const { answers, setAnswer } = useForm();
    const [inputValue, setInputValue] = useState(
        answers.find((a: any) => a.uuid === uuid)?.answer_field || ''
    );
    const inputRef = useRef(null);

    const handleChange = (event: any) => {
        if (type === 'number') {
            const newValue = event.target.value.replace(/[^0-9\b]/g, '');
            setInputValue(newValue);
            setAnswer(uuid, newValue);
        } else {
            setInputValue(event.target.value);
            setAnswer(uuid, event.target.value);
        }
    };

    return (
        <div key={uuid}>
            <input
                type="text"
                id={`input-${uuid}`}
                value={inputValue}
                onChange={handleChange}
                ref={inputRef}
                className="border rounded-lg max-w-md h-14 px-6 py-4"
            />
        </div>
    );
}

export default InputField;
