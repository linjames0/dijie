"use client";

import { useState } from 'react';
import styles from './productInfo.module.css';

export default function ProductInfo() {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        { question: "What is Next.js?", answer: "Next.js is a React framework for production." },
        { question: "What is Tailwind CSS?", answer: "Tailwind CSS is a utility-first CSS framework for rapid UI development." },
        { question: "How to use Tailwind with Next.js?", answer: "You can install Tailwind CSS in a Next.js project and configure it to work with your components." },
    ];

    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div>
            <div className={`"max-w-2xl m-2 p-4" ${styles.accordion}`}>
            <hr/>
            {faqs.map((faq, index) => (
                <div key={index} className="mb-4">
                <button
                    onClick={() => toggleFaq(index)}
                    className={styles.question}
                >
                    {faq.question}
                </button>
                <div className={`${styles.answer} ${openIndex === index ? 'block' : 'hidden'}`}>
                    {faq.answer}
                </div>
                <hr/>
                </div>
            ))}
            </div>
        </div>
    );
}