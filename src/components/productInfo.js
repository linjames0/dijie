"use client";

import { useState } from 'react';
import styles from './productInfo.module.css';

export default function ProductInfo() {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        { question: "FREE SHIPPING & RETURNS", answer: "Next.js is a React framework for production." },
        { question: "90 DAY WARRANTY", answer: "Tailwind CSS is a utility-first CSS framework for rapid UI development." },
        { question: "TECH SPECS", answer: "You can install Tailwind CSS in a Next.js project and configure it to work with your components." },
    ];

    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div>
            <hr className="border-gray-600"/>
            <p className="text-sm text-gray-400 px-3 py-3">PRODUCT INFO</p>
            <div className={`${styles.accordion}`}>
                <hr className="border-gray-800"/>
                {faqs.map((faq, index) => (
                    <div key={index}>
                        <button
                            onClick={() => toggleFaq(index)}
                            className={`${styles.question}`}
                        >
                            <div className="flex items-center justify-between">
                                <p>{faq.question}</p>
                                <div className={`${openIndex === index ? 'hidden' : 'block'}`}>
                                    <i class="material-icons">chevron_right</i>
                                </div>
                                <div className={`${openIndex === index ? 'block' : 'hidden'}`}>
                                    <i class="material-icons">keyboard_arrow_down</i>
                                </div>
                            </div>
                        </button>
                        <div className={`${styles.answer} ${openIndex === index ? 'block' : 'hidden'}`}>
                            {faq.answer}
                        </div>
                        <hr className="border-gray-800"/>
                    </div>
                ))}
            </div>
            <button className="my-1 mx-3 mb-3">SHARE PRODUCT PAGE</button>
        </div>
    );
}