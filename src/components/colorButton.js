"use client";

import { useState } from 'react';

export default function ColorButton() {
    const [activeButton, setActiveButton] = useState(1);

    const handleClick = (buttonNumber) => {
        setActiveButton(buttonNumber);
    };

    const buttonClasses = "border border-black rounded-full w-6 h-6 mr-1.5";

    return (
        <div>
            <div className="flex items-center justify-between p-3 pt-0">
                <img src="/images/colors/black.png" className={`${"w-[200px] h-[200px] mx-auto my-6"} ${activeButton === 1 ? 'block' : 'hidden'}`}/>
                <img src="/images/colors/gray.png" className={`${"w-[200px] h-[200px] mx-auto my-6"} ${activeButton === 2 ? 'block' : 'hidden'}`}/>
                <img src="/images/colors/yellow.png" className={`${"w-[200px] h-[200px] mx-auto my-6"} ${activeButton === 3 ? 'block' : 'hidden'}`}/>
                <img src="/images/colors/pink.png" className={`${"w-[200px] h-[200px] mx-auto my-6"} ${activeButton === 4 ? 'block' : 'hidden'}`}/>
                {/* <p>SELECT COLOR</p> */}
                <div className="flex flex-col gap-2">
                    <div className="flex items-center">
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
                    <p className={`${"text-center"} ${activeButton === 1 ? 'block' : 'hidden'}`}>Charcoal</p>
                    <p className={`${"text-center"} ${activeButton === 2 ? 'block' : 'hidden'}`}>Seafoam Gray</p>
                    <p className={`${"text-center"} ${activeButton === 3 ? 'block' : 'hidden'}`}>Morning Yellow</p>
                    <p className={`${"text-center"} ${activeButton === 4 ? 'block' : 'hidden'}`}>Blossom Pink</p>
                </div>
                
            </div>
        </div>
    );
}
