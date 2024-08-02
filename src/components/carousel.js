"use client"

import React, { useState, useEffect } from 'react';

export default function Slideshow() {
    const [slideIndex, setSlideIndex] = useState(1);

    useEffect(() => {
        const showSlides = () => {
            const slides = document.getElementsByClassName("slides");
            const dots = document.getElementsByClassName("dot");
            for (let i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";  
            }

            slides[slideIndex].style.display = "block";  
            dots[slideIndex].className += " active";

            setSlideIndex((prevIndex) => {
                let newIndex = prevIndex + 1;
                if (newIndex >= slides.length) {
                    newIndex = 0;
                }
                return newIndex;
            });
            
            for (let i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }
        }

        const timer = setTimeout(showSlides, 2000);

        return () => clearTimeout(timer);
    }, [slideIndex]);

    return (
        <div>
            <div class="relative m-auto">
                <div class="slides fade">
                    <img src="/images/landing1.jpg" class="w-[100%]"/>
                </div>

                <div class="slides fade hidden">
                    <img src="/images/landing2.jpg" class="w-[100%]" />
                </div>

                <div class="slides fade hidden">
                    <img src="/images/landing6.jpg" class="w-[100%]" />
                </div>

                {/* <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
                <a class="next" onclick="plusSlides(1)">&#10095;</a> */}
            </div>
            <br/>
            <div class="text-center">
                <span class="dot" onclick="currentSlide(1)"></span>
                <span class="dot" onclick="currentSlide(2)"></span>
                <span class="dot" onclick="currentSlide(3)"></span>
            </div>
        </div>

    );
}