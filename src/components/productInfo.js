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
            <div className={`"max-w-2xl p-4" ${styles.accordion}`}>
                <hr className="border-gray-600"/>
                {faqs.map((faq, index) => (
                    <div key={index}>
                        <button
                            onClick={() => toggleFaq(index)}
                            className={styles.question}
                        >
                            {faq.question}
                        </button>
                        <div className={`${styles.answer} ${openIndex === index ? 'block' : 'hidden'}`}>
                            {faq.answer}
                        </div>
                        <hr className="border-gray-600"/>
                    </div>
                ))}
            </div>
            <button className="my-1 mx-3">SHARE PRODUCT PAGE</button>
            <hr className="border-gray-600"/>

        </div>
    );
}