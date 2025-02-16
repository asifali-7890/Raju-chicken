import React from 'react';
import { ShieldCheckIcon, DocumentTextIcon, UserIcon, LockClosedIcon, InformationCircleIcon, ArrowUpIcon } from '@heroicons/react/24/outline';

const PrivacyPolicy = () => {
    const sections = [
        {
            icon: ShieldCheckIcon,
            title: "Data Collection",
            content: "We collect only essential information required to provide our services, including contact details, payment information, and usage data. Collection occurs through secure forms and verified third-party services."
        },
        {
            icon: LockClosedIcon,
            title: "Data Protection",
            content: "Your data is protected using enterprise-grade encryption both in transit (SSL/TLS) and at rest (AES-256). Regular security audits and penetration testing ensure ongoing protection of sensitive information."
        },
        {
            icon: UserIcon,
            title: "User Rights",
            content: "You maintain full rights to access, modify, or delete your personal data. Requests can be submitted through our data portal and will be processed within 72 hours."
        },
        {
            icon: DocumentTextIcon,
            title: "Third-Party Sharing",
            content: "We only share data with verified partners essential for service delivery. Full list of subprocessors available upon request. No data is sold to external marketers or advertisers."
        },
        {
            icon: InformationCircleIcon,
            title: "Cookies & Tracking",
            content: "We use essential cookies for site functionality and performance analytics. Full cookie control available through our preference center. Third-party tracking requires explicit opt-in."
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center justify-center bg-blue-100 p-4 rounded-full mb-6">
                        <ShieldCheckIcon className="h-12 w-12 text-blue-600" />
                    </div>
                    <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
                        Privacy & Data Protection Policy
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Last Updated: March 25, 2024 | Effective since January 1, 2020
                    </p>
                </div>

                {/* Table of Contents */}
                <div className="bg-white rounded-xl shadow-sm p-6 mb-12 border border-gray-100">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                        <DocumentTextIcon className="h-6 w-6 text-blue-600 mr-2" />
                        Policy Overview
                    </h2>
                    <nav className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {sections.map((section, index) => (
                            <a
                                key={index}
                                href={`#section-${index}`}
                                className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors"
                            >
                                <section.icon className="h-5 w-5 text-gray-600 mr-3" />
                                <span className="text-gray-700 font-medium">{section.title}</span>
                            </a>
                        ))}
                    </nav>
                </div>

                {/* Policy Content */}
                <div className="space-y-12">
                    {sections.map((section, index) => (
                        <section
                            key={index}
                            id={`section-${index}`}
                            className="bg-white rounded-xl shadow-sm p-8 border border-gray-100"
                        >
                            <div className="flex items-center mb-6">
                                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                                    <section.icon className="h-8 w-8 text-blue-600" />
                                </div>
                                <h2 className="text-2xl font-semibold text-gray-900">
                                    {section.title}
                                </h2>
                            </div>
                            <div className="prose prose-blue max-w-none text-gray-600">
                                <p>{section.content}</p>
                                {index === 0 && (
                                    <ul className="mt-4 pl-6 list-disc">
                                        <li>Contact Information (email, phone, address)</li>
                                        <li>Payment Details (encrypted card information)</li>
                                        <li>Usage Data (IP addresses, device information)</li>
                                        <li>Cookies & Analytics (performance metrics)</li>
                                    </ul>
                                )}
                                {index === 2 && (
                                    <div className="mt-6 bg-blue-50 p-4 rounded-lg">
                                        <h3 className="font-semibold text-blue-800 mb-2">Exercise Your Rights:</h3>
                                        <p className="text-blue-700">
                                            Submit data requests through our secure portal or email
                                            <a href="mailto:privacy@example.com" className="text-blue-600 hover:underline ml-1">
                                                privacy@example.com
                                            </a>
                                        </p>
                                    </div>
                                )}
                            </div>
                        </section>
                    ))}
                </div>

                {/* Compliance & Contact */}
                <div className="mt-16 bg-blue-900 rounded-xl p-8 text-center">
                    <h2 className="text-2xl font-semibold text-white mb-4">Compliance Standards</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                        {['GDPR', 'CCPA', 'ISO 27001', 'SOC 2'].map((standard) => (
                            <div key={standard} className="bg-white bg-opacity-10 p-4 rounded-lg">
                                <span className="text-white font-medium">{standard}</span>
                            </div>
                        ))}
                    </div>
                    <p className="text-blue-200 mb-6">
                        For inquiries or to report privacy concerns, contact our Data Protection Officer:
                    </p>
                    <div className="space-y-2">
                        <p className="text-white">📞 +1 (800) 123-4567</p>
                        <p className="text-white">✉️ dpo@example.com</p>
                        <p className="text-white">📍 123 Security Lane, Data Protection City, DP 12345</p>
                    </div>
                </div>

                {/* Download & Scroll Top */}
                <div className="mt-12 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <button className="bg-white text-blue-600 px-6 py-3 rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition-colors flex items-center">
                        <DocumentTextIcon className="h-5 w-5 mr-2" />
                        Download Full Policy (PDF)
                    </button>
                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center"
                    >
                        <ArrowUpIcon className="h-5 w-5 mr-2" />
                        Back to Top
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;