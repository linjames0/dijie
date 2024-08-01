"use client";

import { useState } from 'react';

export default function ColorButtons() {
    const [activeButton, setActiveButton] = useState(1);

    const handleClick = (buttonNumber) => {
        setActiveButton(buttonNumber);
    };

    const buttonClasses = "border border-black rounded-full w-6 h-6 mr-1.5";

    return (
        <div>
            <button
            onClick={() => handleClick(1)}
            className={`${buttonClasses} ${"bg-gray-800"} ${activeButton === 1 ? 'border-white' : ''}`}
            >
            </button>

            <button
            onClick={() => handleClick(2)}
            className={`${buttonClasses} ${"bg-gray-400"} ${activeButton === 2 ? 'border-white' : ''}`}
            >
            </button>

            <button
            onClick={() => handleClick(3)}
            className={`${buttonClasses} ${"bg-yellow-100"} ${activeButton === 3 ? 'border-white' : ''}`}
            >
            </button>
            <button
            onClick={() => handleClick(4)}
            className={`${buttonClasses} ${"bg-pink-300"} ${activeButton === 4 ? 'border-white' : ''}`}
            >
            </button>
        </div>
    );
}
