// src/components/common/FAQ.jsx
import React, { useState } from 'react';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            question: "What types of poultry products do you offer?",
            answer: "We offer a wide range of poultry products including whole chickens, chicken parts, and specialty items such as organic and free-range options."
        },
        {
            question: "How can I place an order?",
            answer: "You can place an order through our website or by contacting our sales team directly. We also offer bulk ordering options for businesses."
        },
        {
            question: "What is your return policy?",
            answer: "We have a 30-day return policy for unopened products. If you have any issues with your order, please contact our customer service team."
        },
        {
            question: "Do you offer delivery services?",
            answer: "Yes, we offer delivery services for both individual and bulk orders. Delivery options may vary based on your location."
        },
        {
            question: "How do you ensure the quality of your products?",
            answer: "We adhere to strict quality control measures and work closely with our suppliers to ensure that all products meet our high standards."
        },
    ];

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="min-h-screen bg-yellow-50 p-8">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-5xl font-bold text-yellow-800 mb-6 text-center">Frequently Asked Questions</h1>
                <p className="text-lg text-yellow-700 leading-relaxed mb-8 text-center">
                    Find answers to your most common questions about our products, services, and company policies.
                </p>

                <div className="bg-white shadow-md rounded-lg p-6">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border-b last:border-b-0">
                            <button
                                className="flex justify-between items-center w-full py-4 text-left text-lg font-semibold text-yellow-800 focus:outline-none"
                                onClick={() => toggleFAQ(index)}
                            >
                                <span>{faq.question}</span>
                                <span className="text-yellow-600">{activeIndex === index ? '-' : '+'}</span>
                            </button>
                            {activeIndex === index && (
                                <p className="text-gray-700 leading-relaxed mb-4">{faq.answer}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FAQ;