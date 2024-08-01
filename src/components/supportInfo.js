"use client";

import { useState } from 'react';
import styles from './supportInfo.module.css';

export default function SupportInfo() {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        { question: "TRACK MY ORDER", answer: "support" },
        { question: "CUSTOMER SERVICE", answer: "support" },
    ];

    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div>
            <hr className="border-gray-600"/>
            <p className="text-sm text-gray-400 px-3 py-3">SUPPORT</p>
            <div className={`"max-w-2xl p-4" ${styles.accordion}`}>
                <hr className="border-gray-800"/>
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
                        <hr className="border-gray-800"/>
                    </div>
                ))}
            </div>

        </div>
    );
}