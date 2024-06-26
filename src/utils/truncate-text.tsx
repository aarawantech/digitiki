import React from 'react';

const TruncateText = ({
    text,
    maxLength,
}: {
    text: string;
    maxLength: number;
}) => {
    if (text.length <= maxLength) {
        return text;
    }
    return (
        <p>
            {text.substring(0, maxLength)}{' '}
            <a href="#" className="underline font-medium text-[#333333]">
                Learn more
            </a>
        </p>
    );
};

export default TruncateText;
