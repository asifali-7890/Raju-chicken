import React from 'react';
import { Link } from 'react-router-dom';
import { FaLeaf, FaRecycle, FaSolarPanel, FaHandsHelping } from 'react-icons/fa';

const Sustainability = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-green-50 to-emerald-50 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Hero Section */}
                <div className="text-center mb-16">
                    <div className="inline-block bg-green-100 p-4 rounded-full mb-6">
                        <FaLeaf className="text-6xl text-green-600" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-green-900 mb-4">
                        Pioneering Sustainable Excellence
                    </h1>
                    <p className="text-xl text-green-700 max-w-3xl mx-auto">
                        Committed to eco-conscious practices that nurture our planet while delivering premium quality products
                    </p>
                </div>

                {/* Core Practices Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                    {[
                        {
                            icon: <FaSolarPanel className="w-full h-full" />,
                            title: "Renewable Energy",
                            content: "100% of our facilities powered by solar and wind energy"
                        },
                        {
                            icon: <FaRecycle className="w-full h-full" />,
                            title: "Zero Waste",
                            content: "98% production waste recycled or repurposed"
                        },
                        {
                            icon: <FaLeaf className="w-full h-full" />,
                            title: "Organic Farming",
                            content: "Partnership with 200+ certified organic farms"
                        },
                        {
                            icon: <FaHandsHelping className="w-full h-full" />,
                            title: "Community Impact",
                            content: "Educating 10,000+ families annually on sustainability"
                        }
                    ].map((item, index) => (
                        <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                                <span className="text-3xl text-green-600">
                                    {item.icon}
                                </span>
                            </div>
                            <h3 className="text-xl font-semibold text-green-900 mb-2 text-center">
                                {item.title}
                            </h3>
                            <p className="text-green-700 text-center">
                                {item.content}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Detailed Sections */}
                <div className="space-y-16">
                    {/* Environmental Impact Section */}
                    <section className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
                        <div className="flex flex-col md:flex-row gap-8 items-center">
                            <div className="flex-1">
                                <h2 className="text-3xl font-bold text-green-900 mb-6">
                                    Reducing Environmental Footprint
                                </h2>
                                <ul className="space-y-4">
                                    <li className="flex items-start">
                                        <span className="text-green-600 mr-3 mt-1">✓</span>
                                        <p className="text-lg text-green-800">
                                            Carbon-negative operations since 2022
                                        </p>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-600 mr-3 mt-1">✓</span>
                                        <p className="text-lg text-green-800">
                                            Water conservation systems saving 5M gallons annually
                                        </p>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-600 mr-3 mt-1">✓</span>
                                        <p className="text-lg text-green-800">
                                            Biodegradable packaging decomposes in 90 days
                                        </p>
                                    </li>
                                </ul>
                            </div>
                            {/* <div className="flex-1">
                                <img
                                    src="/sustainability-graph.png"
                                    alt="Environmental Impact Metrics"
                                    className="rounded-lg w-full h-auto"
                                />
                            </div> */}
                        </div>
                    </section>

                    {/* Community Section */}
                    <section className="bg-green-900 text-white rounded-2xl shadow-xl p-8 md:p-12">
                        <h2 className="text-3xl font-bold mb-8 text-center">
                            Empowering Communities
                        </h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-white bg-opacity-10 p-6 rounded-xl">
                                <h3 className="text-2xl text-gray-900 font-semibold mb-4">
                                    Education Programs
                                </h3>
                                <p className="text-green-500">
                                    Free workshops on sustainable living practices for local communities
                                </p>
                            </div>
                            <div className="bg-white bg-opacity-10 p-6 rounded-xl">
                                <h3 className="text-2xl text-gray-900 font-semibold mb-4">
                                    Farmer Partnerships
                                </h3>
                                <p className="text-green-500">
                                    Training 500+ farmers annually in regenerative agriculture techniques
                                </p>
                            </div>
                        </div>
                    </section>
                </div>

                {/* CTA Section */}
                <div className="mt-16 text-center">
                    <h2 className="text-3xl font-bold text-green-900 mb-6">
                        Join Our Green Revolution
                    </h2>
                    <p className="text-xl text-green-700 mb-8 max-w-2xl mx-auto">
                        Together we can create a sustainable future. Explore ways to participate in our environmental initiatives.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link
                            to="/contact-us"
                            className="bg-green-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-700 transition-colors"
                        >
                            Partner With Us
                        </Link>
                        <Link
                            to="/sustainability-guide"
                            className="bg-white hidden text-green-600 px-8 py-3 rounded-full font-semibold border-2 border-green-600 hover:bg-green-50 transition-colors"
                        >
                            Learn More
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sustainability;