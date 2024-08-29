"use client"

import { useEffect } from 'react';

import styles from '@/components/carousel.module.css';
import ColorButton from '@/components/colorButton';
import ProductInfo from '@/components/productInfo';
import SupportInfo from '@/components/supportInfo';
import Carousel from '@/components/carousel';

// 3D model imports
import Model from '@/components/model';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

export default function Home() {
    useEffect(() => {
        document.addEventListener("scroll", function () {
            const colorBox = document.getElementById("colorBox");
            const scrollY = window.scrollY;
            const maxScroll = document.body.scrollHeight - window.innerHeight;
            const scrollTriggerPoint = 300;
            
            // Normalize scroll position between 0 and 1
            const scrollFraction = scrollY / maxScroll;

            // Only start scroll animation at a certain height
            if (window.scrollY > scrollTriggerPoint) {
                colorBox.classList.add("scrolled");
            } else {
                colorBox.classList.remove("scrolled");
            }
        
            // Calculate a dynamic color based on scroll position
            const red = Math.min(255, Math.floor(scrollFraction * 255));
            const green = Math.min(255, Math.floor((1 - scrollFraction) * 255));
            const blue = 150; // You can keep one color constant for a more defined effect
            
            if (colorBox.classList.contains("scrolled")) {
                colorBox.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
            }
        });
    });

    return (
        <div>            
            {/* <Canvas class="w-[800px] h-[600px]">
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 10]} />
                <OrbitControls />
                <Model objPath="/models/camera.obj" mtlPath="/models/camera.mtl" />
            </Canvas> */}

            <Carousel />

            {/* <div class="w-[200px] h-[200px] bg-blue-400 transition-colors ease-linear" id="colorBox">I change color as you scroll!</div> */}
            
            <div className="h-3"></div>
            <hr className="border-gray-600"/>

            <p className="text-sm text-gray-400 p-3">START TAKING DIJIES</p>

            {/* <div class="flex items-center justify-between p-3 pt-0">
                <p>SELECT COLOR</p>
                <div class="flex items-center">
                    <ColorButton />
                </div>
            </div> */}
            <ColorButton />
            <button className="w-[98vw] mb-5 mx-1 px-2 text-black font-bold bg-blueAccent active:bg-white">
                <div className="flex items-center justify-between">
                    <p>BUY NOW</p>
                    <p>$195</p>
                </div>
                
            </button>

            <ProductInfo />

            <SupportInfo />
            <div className="h-16"/>
        </div>
    );
}
