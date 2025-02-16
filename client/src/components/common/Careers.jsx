// src/components/common/Careers.jsx
import React from 'react';

const Careers = () => {
    return (
        <div className="min-h-screen bg-gray-50 p-8">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-5xl font-bold text-gray-800 mb-6 text-center">Careers at Raju Chicken</h1>
                <p className="text-lg text-gray-700 leading-relaxed mb-8 text-center">
                    Join our passionate team at Raju Chicken. Explore exciting career opportunities and grow with us as we redefine quality in the poultry industry.
                </p>

                <div className="bg-white shadow-md rounded-lg p-6 mb-8">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-4">Why Work With Us?</h2>
                    <ul className="list-disc list-inside text-gray-700">
                        <li className="mb-2">Innovative and dynamic work environment</li>
                        <li className="mb-2">Opportunities for professional growth and development</li>
                        <li className="mb-2">Competitive salary and benefits</li>
                        <li className="mb-2">Commitment to sustainability and ethical practices</li>
                    </ul>
                </div>

                <div className="bg-white shadow-md rounded-lg p-6 mb-8">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-4">Current Openings</h2>
                    <div className="space-y-4">
                        <div className="border-b pb-4">
                            <h3 className="text-xl font-bold text-gray-800">Poultry Farm Manager</h3>
                            <p className="text-gray-600">Location: City, State</p>
                            <p className="text-gray-700">Lead our farm operations and ensure the highest standards of poultry care.</p>
                        </div>
                        <div className="border-b pb-4">
                            <h3 className="text-xl font-bold text-gray-800">Quality Assurance Specialist</h3>
                            <p className="text-gray-600">Location: City, State</p>
                            <p className="text-gray-700">Monitor and improve product quality through rigorous testing and analysis.</p>
                        </div>
                        <div className="border-b pb-4">
                            <h3 className="text-xl font-bold text-gray-800">Sales and Marketing Executive</h3>
                            <p className="text-gray-600">Location: City, State</p>
                            <p className="text-gray-700">Drive sales growth and enhance brand visibility in the market.</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white shadow-md rounded-lg p-6 mb-8">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-4">How to Apply</h2>
                    <p className="text-gray-700 mb-4">
                        If you are interested in joining our team, please send your resume and a cover letter to <a href="mailto:hr@rajuchicken.com" className="text-blue-500 underline">hr@rajuchicken.com</a>.
                    </p>
                    <p className="text-gray-700">
                        We look forward to hearing from you!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Careers;