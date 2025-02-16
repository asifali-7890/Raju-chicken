// src/components/common/Sustainability.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Sustainability = () => {
    return (
        <div className="min-h-screen bg-green-50 p-8 flex items-center">
            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
                <h1 className="text-5xl font-bold text-green-900 mb-6 text-center">Sustainability</h1>
                <p className="text-lg text-green-800 leading-relaxed mb-6">
                    We are committed to sustainable practices in every aspect of our operations, ensuring a greener future for all. Our approach focuses on minimizing our environmental impact while maximizing the quality of our products.
                </p>

                <h2 className="text-3xl font-semibold text-green-900 mb-4">Our Sustainable Practices</h2>
                <ul className="list-disc list-inside text-lg text-green-700 mb-6">
                    <li>Utilizing renewable energy sources in our production facilities.</li>
                    <li>Implementing waste reduction strategies to minimize landfill contributions.</li>
                    <li>Partnering with local farmers who practice sustainable agriculture.</li>
                    <li>Investing in eco-friendly packaging solutions.</li>
                </ul>

                <h2 className="text-3xl font-semibold text-green-900 mb-4">Community Engagement</h2>
                <p className="text-lg text-green-800 leading-relaxed mb-6">
                    We believe that sustainability extends beyond our operations. We actively engage with our community to promote environmental awareness and encourage sustainable practices among our customers and partners.
                </p>

                <h2 className="text-3xl font-semibold text-green-900 mb-4">Join Us in Making a Difference</h2>
                <p className="text-lg text-green-800 leading-relaxed mb-6">
                    Together, we can create a more sustainable future. We invite you to join us in our efforts by making conscious choices in your daily life and supporting sustainable brands.
                </p>

                <div className="flex justify-center">
                    <Link to='/contact-us'>
                        <button className="bg-green-600 text-white font-semibold py-2 px-4 rounded hover:bg-green-700 transition duration-300">
                            Get Involved
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Sustainability;