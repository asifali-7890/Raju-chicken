// src/components/common/Mission.jsx
import React from 'react';

const Mission = () => {
    return (
        <div className="min-h-screen bg-gradient-to-r from-green-100 to-green-50 p-8 flex items-center">
            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
                <h1 className="text-5xl font-bold text-green-800 mb-6 text-center">Our Mission</h1>
                <p className="text-lg text-green-700 leading-relaxed mb-6">
                    We aim to provide fresh, high-quality chicken products through ethical practices and sustainable operations, ensuring customer satisfaction every step of the way.
                </p>
                <h2 className="text-3xl font-semibold text-green-800 mb-4">Our Values</h2>
                <ul className="list-disc list-inside text-lg text-green-600 mb-6">
                    <li>Quality: We prioritize the highest standards in our products.</li>
                    <li>Integrity: We operate with honesty and transparency.</li>
                    <li>Sustainability: We are committed to environmentally friendly practices.</li>
                    <li>Community: We support local farmers and communities.</li>
                </ul>
                <h2 className="text-3xl font-semibold text-green-800 mb-4">Our Commitment</h2>
                <p className="text-lg text-green-700 leading-relaxed mb-6">
                    We are dedicated to continuous improvement and innovation in our processes, ensuring that we not only meet but exceed the expectations of our customers. Our team works tirelessly to maintain the highest standards of quality and service.
                </p>
                <h2 className="text-3xl font-semibold text-green-800 mb-4">Join Us on Our Journey</h2>
                <p className="text-lg text-green-700 leading-relaxed mb-6">
                    We invite you to be a part of our mission. Together, we can make a difference in the food industry and contribute to a healthier planet. Follow us on our social media channels to stay updated on our latest initiatives and products.
                </p>
                <div className="flex justify-center">
                    <button className="bg-green-600 text-white font-semibold py-2 px-4 rounded hover:bg-green-700 transition duration-300">
                        Learn More
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Mission;