import React from 'react';
import { motion } from 'framer-motion';
import { FaBalanceScale, FaRegHandshake, FaCreditCard, FaShieldAlt, FaExclamationTriangle } from 'react-icons/fa';
import { staggerContainer, fadeIn } from '../../utils/motion';

const TermsOfService = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 py-16 px-4 sm:px-6 lg:px-8">
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
                        <FaBalanceScale className="text-5xl text-blue-600 mx-auto mb-6" />
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-serif">
                            Terms of Service
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Effective Date: August 2023 | Last Revised: August 2023
                        </p>
                    </div>
                </motion.div>

                {/* Table of Contents */}
                <motion.div
                    variants={fadeIn('up', 'tween', 0.4, 1)}
                    className="bg-white rounded-xl shadow-lg p-6 mb-12"
                >
                    <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                        <FaExclamationTriangle className="mr-2 text-blue-600" />
                        Quick Navigation
                    </h2>
                    <ul className="space-y-3 text-blue-600">
                        {['Acceptance', 'Account', 'Purchases', 'Prohibited', 'Termination',
                            'Liability', 'Changes'].map((item) => (
                                <li key={item}>
                                    <a href={`#${item.toLowerCase()}`}
                                        className="hover:text-blue-800 transition-colors">
                                        {item}
                                    </a>
                                </li>
                            ))}
                    </ul>
                </motion.div>

                {/* Content Sections */}
                <div className="space-y-12">
                    {/* Acceptance Section */}
                    <motion.section
                        variants={fadeIn('up', 'tween', 0.6, 1)}
                        id="acceptance"
                        className="bg-white rounded-2xl shadow-lg p-8"
                    >
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">1. Acceptance of Terms</h2>
                        <p className="text-gray-600 leading-relaxed mb-4">
                            By accessing or using Raju Chicken's services, you agree to be bound by these Terms.
                            If you disagree with any part, you may not access our services.
                        </p>
                        <div className="bg-blue-50 p-6 rounded-xl">
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">Key Conditions:</h3>
                            <ul className="list-disc list-inside space-y-2 text-gray-600">
                                <li>Must be at least 18 years old</li>
                                <li>Valid payment method required</li>
                                <li>Compliance with all applicable laws</li>
                            </ul>
                        </div>
                    </motion.section>

                    {/* Account Section */}
                    <motion.section
                        variants={fadeIn('up', 'tween', 0.8, 1)}
                        id="account"
                        className="bg-white rounded-2xl shadow-lg p-8"
                    >
                        <div className="flex items-center mb-6">
                            <FaShieldAlt className="text-3xl text-blue-600 mr-3" />
                            <h2 className="text-3xl font-bold text-gray-900">2. Account Responsibilities</h2>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-blue-50 p-6 rounded-xl">
                                <h3 className="text-xl font-semibold text-gray-800 mb-3">Your Obligations</h3>
                                <ul className="space-y-2 text-gray-600">
                                    <li>• Maintain account security</li>
                                    <li>• Update information promptly</li>
                                    <li>• Monitor account activity</li>
                                </ul>
                            </div>
                            <div className="bg-blue-50 p-6 rounded-xl">
                                <h3 className="text-xl font-semibold text-gray-800 mb-3">Prohibited Actions</h3>
                                <ul className="space-y-2 text-gray-600">
                                    <li>• Sharing account credentials</li>
                                    <li>• Creating fake accounts</li>
                                    <li>• Any unlawful activities</li>
                                </ul>
                            </div>
                        </div>
                    </motion.section>

                    {/* Purchases Section */}
                    <motion.section
                        variants={fadeIn('up', 'tween', 1.0, 1)}
                        id="purchases"
                        className="bg-white rounded-2xl shadow-lg p-8"
                    >
                        <div className="flex items-center mb-6">
                            <FaCreditCard className="text-3xl text-green-600 mr-3" />
                            <h2 className="text-3xl font-bold text-gray-900">3. Purchases & Payments</h2>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold text-gray-800">Payment Terms</h3>
                                <ul className="list-disc list-inside text-gray-600 space-y-2">
                                    <li>All prices in INR</li>
                                    <li>Payment processed at checkout</li>
                                    <li>Taxes included</li>
                                </ul>
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-xl font-semibold text-gray-800">Refund Policy</h3>
                                <ul className="list-disc list-inside text-gray-600 space-y-2">
                                    <li>Quality issues: 100% refund</li>
                                    <li>Cancellation: 2-hour window</li>
                                    <li>Digital products: Non-refundable</li>
                                </ul>
                            </div>
                        </div>
                    </motion.section>

                    {/* Termination Section */}
                    <motion.section
                        variants={fadeIn('up', 'tween', 1.2, 1)}
                        id="termination"
                        className="bg-white rounded-2xl shadow-lg p-8"
                    >
                        <div className="flex items-center mb-6">
                            <FaRegHandshake className="text-3xl text-red-600 mr-3" />
                            <h2 className="text-3xl font-bold text-gray-900">5. Termination</h2>
                        </div>
                        <div className="space-y-4">
                            <p className="text-gray-600">
                                We reserve the right to suspend or terminate your access to our services
                                immediately, without prior notice, for any breach of these Terms.
                            </p>
                            <div className="bg-red-50 p-6 rounded-xl">
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">Consequences:</h3>
                                <ul className="list-disc list-inside text-gray-600 space-y-2">
                                    <li>Immediate service suspension</li>
                                    <li>Forfeiture of pending orders</li>
                                    <li>Possible legal action</li>
                                </ul>
                            </div>
                        </div>
                    </motion.section>

                    {/* Agreement Section */}
                    <motion.section
                        variants={fadeIn('up', 'tween', 1.4, 1)}
                        className="bg-blue-900 text-white rounded-2xl shadow-xl p-8 text-center"
                    >
                        <h2 className="text-3xl font-bold mb-6">Your Agreement</h2>
                        <p className="text-xl mb-8 max-w-2xl mx-auto">
                            By using our services, you acknowledge that you have read, understood,
                            and agree to be bound by these Terms.
                        </p>
                        <button className="bg-white hidden text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors">
                            Confirm Understanding
                        </button>
                    </motion.section>
                </div>
            </motion.div>
        </div>
    );
};

export default TermsOfService;