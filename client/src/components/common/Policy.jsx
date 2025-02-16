import React from 'react';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaLock, FaUserCheck, FaInfoCircle } from 'react-icons/fa';
import { staggerContainer, fadeIn } from '../../utils/motion';

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8">
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                className="max-w-5xl mx-auto"
            >
                {/* Header Section */}
                <motion.div
                    variants={fadeIn('up', 'tween', 0.2, 1)}
                    className="text-center mb-16"
                >
                    <div className="bg-white p-8 rounded-2xl shadow-lg">
                        <FaShieldAlt className="text-5xl text-blue-600 mx-auto mb-6" />
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-serif">
                            Privacy Policy
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Last Updated: August 2023 | Effective since January 2020
                        </p>
                    </div>
                </motion.div>

                {/* Table of Contents */}
                <motion.div
                    variants={fadeIn('up', 'tween', 0.4, 1)}
                    className="bg-white rounded-xl shadow-lg p-6 mb-12"
                >
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                        <FaInfoCircle className="mr-2 text-blue-600" />
                        Quick Navigation
                    </h2>
                    <ul className="space-y-3 text-blue-600">
                        {['Introduction', 'Data Collection', 'Data Usage', 'Data Sharing',
                            'Security', 'Your Rights', 'Policy Changes'].map((item, index) => (
                                <li key={index}>
                                    <a href={`#${item.toLowerCase().replace(' ', '-')}`}
                                        className="hover:text-blue-800 transition-colors">
                                        {item}
                                    </a>
                                </li>
                            ))}
                    </ul>
                </motion.div>

                {/* Policy Content */}
                <div className="space-y-12">
                    {/* Introduction Section */}
                    <motion.section
                        variants={fadeIn('up', 'tween', 0.6, 1)}
                        id="introduction"
                        className="bg-white rounded-2xl shadow-lg p-8"
                    >
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">1. Introduction</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            At Raju Chicken, we are committed to protecting your privacy. This policy
                            outlines how we collect, use, and safeguard your personal information when
                            you use our services or interact with our digital platforms.
                        </p>
                    </motion.section>

                    {/* Data Collection Section */}
                    <motion.section
                        variants={fadeIn('up', 'tween', 0.8, 1)}
                        id="data-collection"
                        className="bg-white rounded-2xl shadow-lg p-8"
                    >
                        <div className="flex items-center mb-6">
                            <FaLock className="text-3xl text-blue-600 mr-3" />
                            <h2 className="text-3xl font-bold text-gray-900">2. Data We Collect</h2>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold text-gray-800">Personal Information:</h3>
                            <ul className="list-disc list-inside text-gray-600 space-y-2">
                                <li>Contact details (name, email, phone number)</li>
                                <li>Delivery addresses</li>
                                <li>Payment information (processed securely through PCI-compliant services)</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-gray-800 mt-6">Automated Collection:</h3>
                            <ul className="list-disc list-inside text-gray-600 space-y-2">
                                <li>Device information (IP address, browser type)</li>
                                <li>Usage data (pages visited, time spent)</li>
                                <li>Cookies and similar technologies (manage preferences through our cookie banner)</li>
                            </ul>
                        </div>
                    </motion.section>

                    {/* Data Usage Section */}
                    <motion.section
                        variants={fadeIn('up', 'tween', 1.0, 1)}
                        id="data-usage"
                        className="bg-white rounded-2xl shadow-lg p-8"
                    >
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">3. How We Use Your Data</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-blue-50 p-6 rounded-xl">
                                <h3 className="text-xl font-semibold text-gray-800 mb-4">Service Delivery</h3>
                                <ul className="space-y-2 text-gray-600">
                                    <li>• Order processing and fulfillment</li>
                                    <li>• Account management</li>
                                    <li>• Customer support</li>
                                </ul>
                            </div>
                            <div className="bg-blue-50 p-6 rounded-xl">
                                <h3 className="text-xl font-semibold text-gray-800 mb-4">Improvements</h3>
                                <ul className="space-y-2 text-gray-600">
                                    <li>• Service optimization</li>
                                    <li>• Personalized experiences</li>
                                    <li>• Security enhancements</li>
                                </ul>
                            </div>
                        </div>
                    </motion.section>

                    {/* Your Rights Section */}
                    <motion.section
                        variants={fadeIn('up', 'tween', 1.2, 1)}
                        id="your-rights"
                        className="bg-white rounded-2xl shadow-lg p-8"
                    >
                        <div className="flex items-center mb-6">
                            <FaUserCheck className="text-3xl text-green-600 mr-3" />
                            <h2 className="text-3xl font-bold text-gray-900">6. Your Privacy Rights</h2>
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                { title: 'Access', content: 'Request copies of your personal data' },
                                { title: 'Rectification', content: 'Update or correct inaccurate information' },
                                { title: 'Erasure', content: 'Request deletion of your data' },
                                { title: 'Objection', content: 'Opt-out of specific data uses' },
                            ].map((right, index) => (
                                <div key={index} className="bg-green-50 p-6 rounded-xl">
                                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{right.title}</h3>
                                    <p className="text-gray-600">{right.content}</p>
                                </div>
                            ))}
                        </div>
                    </motion.section>

                    {/* Contact Section */}
                    <motion.section
                        variants={fadeIn('up', 'tween', 1.4, 1)}
                        className="bg-blue-900 text-white rounded-2xl shadow-xl p-8 text-center"
                    >
                        <h2 className="text-3xl font-bold mb-6">Need Help?</h2>
                        <p className="text-xl mb-8 max-w-2xl mx-auto">
                            Contact our Data Protection Officer at privacy@rajuchicken.com
                        </p>
                        <button className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors">
                            Contact Privacy Team
                        </button>
                    </motion.section>
                </div>
            </motion.div>
        </div>
    );
};

export default PrivacyPolicy;