"use client"

import React, { useState, useEffect } from 'react';

export default function Slideshow() {
    const [slideIndex, setSlideIndex] = useState(1);

    useEffect(() => {
        const showSlides = () => {
            const slides = document.getElementsByClassName("slides");
            // const dots = document.getElementsByClassName("dot");
            for (let i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";  
            }

            slides[slideIndex].style.display = "block";  
            // dots[slideIndex].className += " active";

            setSlideIndex((prevIndex) => {
                let newIndex = prevIndex + 1;
                if (newIndex >= slides.length) {
                    newIndex = 0;
                }
                return newIndex;
            });
            
            // for (let i = 0; i < dots.length; i++) {
            //     dots[i].className = dots[i].className.replace(" active", "");
            // }
        }

        const timer = setTimeout(showSlides, 6000);

        return () => clearTimeout(timer);
    }, [slideIndex]);

    return (
        <div>
            <div className="relative m-auto">
                <div className="slides fade">
                    <img src="/images/landing2.jpg" className="w-[100%]"/>
                    <div className="mt-5 mb-5 h-[8vh]">
                        <p className="text-blueAccent text-center font-bold">NEW</p>
                        <h1 className="text-5xl text-center">dijie shooter</h1>
                    </div>
                </div>

                <div className="slides fade hidden">
                    <img src="/images/landing6.jpg" className="w-[100%]" />
                    <div className="mt-5 mb-5 h-[8vh]">
                        <p className="text-blueAccent text-center font-bold">Introducing Dijie Shooter</p>
                        <p className="px-14 text-center">A bold modernization of the classic digicam, available now in four stunning finishes. Swipe to view unedited dijies from users, shot on Dijie Shooter.</p>
                    </div>
                </div>

                <div className="slides fade hidden">
                    <img src="/images/landing1.png" className="w-[100%]" />
                    <div className="mt-5 mb-5 h-[8vh]">
                        <p className="text-blueAccent text-center font-bold">Point. Shoot. Share.</p>
                        <p className="px-14 text-center">Dijie is the point-and-shoot digital camera made for social. Download your dijies wirelessly and share with friends and family instantly.</p>
                    </div>
                </div>

                <div className="slides fade hidden">
                    <img src="/images/landing1.png" className="w-[100%]" />
                    <div className="mt-5 mb-5 h-[8vh]">
                        <p className="text-blueAccent text-center font-bold">Through Your Lens</p>
                        <p className="px-14 text-center">Capture memories while living in the moment. Dijie’s compact aluminum architecture lets you document your POV from anywhere, in expansive quality.</p>
                    </div>
                </div>

                <div className="slides fade hidden">
                    <img src="/images/landing1.png" className="w-[100%]" />
                    <div className="mt-5 mb-5 h-[8vh]">
                        <p className="text-blueAccent text-center font-bold">Make Them Shutter</p>
                        <p className="px-14 text-center">Being the digital camera friend has never been this fun. Bring friends to every frame with 5k videos and 56MP images on a full touch display.</p>
                    </div>
                </div>

                <div className="slides fade hidden">
                    <img src="/images/landing1.png" className="w-[100%]" />
                    <div className="mt-5 mb-5 h-[8vh]">
                        <p className="text-blueAccent text-center font-bold">Ditch Your SD</p>
                        <p className="px-14 text-center">Built-in WiFi enables fast and seamless content transfer with zero image degradation. View, download, and share full quality dijies right from the app.</p>
                    </div>
                </div>

                <div className="slides fade hidden">
                    <img src="/images/landing1.png" className="w-[100%]" />
                    <div className="mt-5 mb-5 h-[8vh]">
                        <p className="text-blueAccent text-center font-bold">It Just Clicks</p>
                        <p className="px-14 text-center">Keep the look you love without the drawbacks of outdated technology. Dijie takes the perfect shot while remaining naturally intuitive and easy to use.</p>
                    </div>
                </div>

                <div className="slides fade hidden">
                    <img src="/images/landing1.png" className="w-[100%]" />
                    <div className="mt-5 mb-5 h-[8vh]">
                        <p className="text-blueAccent text-center font-bold">Zoom In On This</p>
                        <p className="px-14 text-center">See detail with striking clarity on Dijie’s 5x optical zoom and 16MP CMOS sensor. Produce powerful shots through a retractable lens that fits in your pocket.</p>
                    </div>
                </div>

                <div className="slides fade hidden">
                    <img src="/images/landing1.png" className="w-[100%]" />
                    <div className="mt-5 mb-5 h-[8vh]">
                        <p className="text-blueAccent text-center font-bold">Light Up The Room</p>
                        <p className="px-14 text-center">Define shadows, enhance contrast, and create the aesthetic we know and love. Equipped with a spring-loaded xenon flash essential for nights out and hitting the town.</p>
                    </div>
                </div>

                <div className="slides fade hidden">
                    <img src="/images/landing1.png" className="w-[100%]" />
                    <div className="mt-5 mb-5 h-[8vh]">
                        <p className="text-blueAccent text-center font-bold">Your Good Side, Everytime</p>
                        <p className="px-14 text-center">Glow from any angle using the 360° ultra-bright ring light. Perfect for personal vlogs, close-up selfies, and a wide variety of portraits.</p>
                    </div>
                </div>

                <div className="slides fade hidden">
                    <img src="/images/landing1.png" className="w-[100%]" />
                    <div className="mt-5 mb-5 h-[8vh]">
                        <p className="text-blueAccent text-center font-bold">Infinite Memories</p>
                        <p className="px-14 text-center">Never worry about running out of space again. With 256GB of internal and 256GB of free cloud storage, you’ll always have room for more memories.</p>
                    </div>
                </div>

                <div className="slides fade hidden">
                    <img src="/images/landing1.png" className="w-[100%]" />
                    <div className="mt-5 mb-5 h-[8vh]">
                        <p className="text-blueAccent text-center font-bold">Long Social Battery</p>
                        <p className="px-14 text-center">Let the good times roll with accelerated recharging that plugs into USB-C. Achieve over 100 minutes of photo shutter per charge cycle.</p>
                    </div>
                </div>

                <div className="slides fade hidden">
                    <img src="/images/landing1.png" className="w-[100%]" />
                    <div className="mt-5 mb-5 h-[8vh]">
                        <p className="text-blueAccent text-center font-bold">Timeless Design</p>
                        <p className="px-14 text-center">Inspired by vintage film cameras while embracing cutting-edge capability. Dijie’s elegant yet simple construction is designed to remain forever in style.</p>
                    </div>
                </div>

                <div className="slides fade hidden">
                    <img src="/images/landing1.png" className="w-[100%]" />
                    <div className="mt-5 mb-5 h-[8vh]">
                        <p className="text-blueAccent text-center font-bold">To Our Friends & Family</p>
                        <p className="px-14 text-center">Dijie was made to celebrate and preserve the moments, memories, and people that add meaning to our lives. We can’t wait to see how you’ll create with Dijie.</p>
                    </div>
                </div>

                {/* <a className="prev" onclick="plusSlides(-1)">&#10094;</a>
                <a className="next" onclick="plusSlides(1)">&#10095;</a> */}
            </div>
            <br/>
            <div className="text-center">
                <span className="dot" onclick="currentSlide(1)"></span>
                <span className="dot" onclick="currentSlide(2)"></span>
                <span className="dot" onclick="currentSlide(3)"></span>
            </div>
        </div>

    );
}