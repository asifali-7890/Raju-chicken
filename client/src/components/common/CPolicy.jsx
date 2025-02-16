// src/components/common/CookiePolicy.jsx
import React from 'react';

const CookiePolicy = () => {
    return (
        <div className="min-h-screen bg-orange-50 p-8 flex items-center">
            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
                <h1 className="text-5xl font-bold text-orange-800 mb-6 text-center">Cookie Policy</h1>
                <p className="text-lg text-orange-700 leading-relaxed mb-6">
                    Our Cookie Policy explains how we use cookies and similar technologies to enhance your browsing experience. By using our website, you consent to the use of cookies in accordance with this policy.
                </p>

                <h2 className="text-3xl font-semibold text-orange-800 mb-4">What Are Cookies?</h2>
                <p className="text-lg text-orange-700 leading-relaxed mb-6">
                    Cookies are small text files that are stored on your device when you visit a website. They help us recognize your device and improve your experience by remembering your preferences and visits.
                </p>

                <h2 className="text-3xl font-semibold text-orange-800 mb-4">How We Use Cookies</h2>
                <ul className="list-disc list-inside text-lg text-orange-700 mb-6">
                    <li>To analyze website traffic and usage patterns.</li>
                    <li>To remember your preferences and settings.</li>
                    <li>To personalize content and advertisements.</li>
                    <li>To improve the functionality of our website.</li>
                </ul>

                <h2 className="text-3xl font-semibold text-orange-800 mb-4">Managing Cookies</h2>
                <p className="text-lg text-orange-700 leading-relaxed mb-6">
                    You can manage your cookie preferences through your browser settings. Most browsers allow you to refuse cookies or alert you when cookies are being sent. However, please note that if you disable cookies, some features of our website may not function properly.
                </p>

                <h2 className="text-3xl font-semibold text-orange-800 mb-4">Changes to This Policy</h2>
                <p className="text-lg text-orange-700 leading-relaxed mb-6">
                    We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new policy on this page. You are advised to review this policy periodically for any changes.
                </p>

                <h2 className="text-3xl font-semibold text-orange-800 mb-4">Contact Us</h2>
                <p className="text-lg text-orange-700 leading-relaxed mb-6">
                    If you have any questions about our Cookie Policy, please contact us at <a href="mailto:support@example.com" className="text-orange-600 underline">support@example.com</a>.
                </p>

                <div className="flex justify-center">
                    <button className="bg-orange-600 text-white font-semibold py-2 px-4 rounded hover:bg-orange-700 transition duration-300">
                        Accept Cookies
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CookiePolicy;