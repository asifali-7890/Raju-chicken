// src/components/common/QualityStandards.jsx
import React from 'react';

const QualityStandards = () => {
    return (
        <div className="min-h-screen bg-blue-100 p-8">
            <div className="max-w-5xl mx-auto">
                <h1 className="text-5xl font-bold text-blue-900 mb-6 text-center">Our Quality Standards</h1>
                <p className="text-lg text-blue-800 leading-relaxed mb-8 text-center">
                    We adhere to strict quality standards to ensure that every product we deliver meets the highest benchmarks in the industry.
                </p>

                <div className="bg-white shadow-md rounded-lg p-6 mb-8">
                    <h2 className="text-3xl font-semibold text-blue-900 mb-4">Our Commitment to Quality</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        At Raju Chicken, quality is our top priority. We implement rigorous quality control measures at every stage of production, from farm to table.
                    </p>
                    <ul className="list-disc list-inside text-gray-700 mb-4">
                        <li className="mb-2">Regular inspections of our farms and facilities</li>
                        <li className="mb-2">Strict adherence to food safety regulations</li>
                        <li className="mb-2">Continuous training for our staff on best practices</li>
                        <li className="mb-2">Sourcing from trusted suppliers who share our values</li>
                    </ul>
                </div>

                <div className="bg-white shadow-md rounded-lg p-6 mb-8">
                    <h2 className="text-3xl font-semibold text-blue-900 mb-4">Certifications</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        We are proud to hold several industry certifications that reflect our commitment to quality and safety:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 mb-4">
                        <li className="mb-2">ISO 9001: Quality Management Systems</li>
                        <li className="mb-2">HACCP: Hazard Analysis and Critical Control Points</li>
                        <li className="mb-2">USDA Organic Certification</li>
                        <li className="mb-2">Animal Welfare Approved Certification</li>
                    </ul>
                </div>

                <div className="bg-white shadow-md rounded-lg p-6 mb-8">
                    <h2 className="text-3xl font-semibold text-blue-900 mb-4">Customer Satisfaction</h2>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        We believe that our customers deserve the best. That’s why we actively seek feedback and continuously improve our processes to meet and exceed your expectations.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                        If you have any questions or concerns about our quality standards, please feel free to <a href="mailto:info@rajuchicken.com" className="text-blue-600 underline">contact us</a>.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default QualityStandards;