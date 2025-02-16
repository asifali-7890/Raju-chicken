import React from 'react';
import { GiSeedling, GiStarMedal } from 'react-icons/gi';
import { MdOutlineHandshake, MdTimeline } from 'react-icons/md';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../../utils/motion'; // Create motion configs
import { Link } from 'react-router-dom';

const Vision = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 to-purple-100 py-16 px-4 sm:px-6 lg:px-8">
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                className="max-w-7xl mx-auto"
            >
                {/* Hero Section */}
                <motion.div
                    variants={fadeIn('up', 'tween', 0.2, 1)}
                    className="text-center mb-20"
                >
                    <div className="bg-white rounded-2xl p-8 shadow-xl mb-12">
                        {/* <GiEarthSpin className="text-6xl text-purple-600 mx-auto mb-6" /> */}
                        <h1 className="text-5xl font-bold text-purple-900 mb-6 font-serif">
                            Our Vision for the Future
                        </h1>
                        <p className="text-xl text-purple-700 max-w-3xl mx-auto leading-relaxed">
                            To revolutionize poultry farming through sustainable innovation while
                            maintaining the highest standards of animal welfare and food safety,
                            creating a blueprint for responsible agriculture worldwide.
                        </p>
                    </div>
                </motion.div>

                {/* Mission & Values */}
                <motion.div
                    variants={fadeIn('up', 'tween', 0.4, 1)}
                    className="grid md:grid-cols-2 gap-12 mb-20"
                >
                    <div className="bg-white p-8 rounded-2xl shadow-xl">
                        <h2 className="text-3xl font-bold text-purple-900 mb-6 flex items-center">
                            <MdTimeline className="mr-3 text-purple-600" />
                            Our Mission
                        </h2>
                        <p className="text-lg text-purple-700 mb-6">
                            To deliver premium quality poultry products while pioneering
                            eco-friendly farming practices that benefit both consumers
                            and the environment.
                        </p>
                        <div className="bg-purple-50 p-6 rounded-xl">
                            <h3 className="text-xl font-semibold text-purple-900 mb-4">
                                Core Values
                            </h3>
                            <div className="space-y-4">
                                {[
                                    { icon: GiSeedling, text: 'Sustainable Practices' },
                                    { icon: MdOutlineHandshake, text: 'Ethical Partnerships' },
                                    { icon: GiStarMedal, text: 'Quality Excellence' },
                                ].map((item, index) => (
                                    <div key={index} className="flex items-center space-x-4">
                                        <item.icon className="text-2xl text-purple-600" />
                                        <span className="text-purple-700">{item.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="bg-purple-900 text-white p-8 rounded-2xl shadow-xl">
                        <h2 className="text-3xl font-bold mb-8">2025 Strategic Goals</h2>
                        <div className="space-y-6">
                            {[
                                'Achieve 100% renewable energy usage',
                                'Implement blockchain traceability',
                                'Reduce water consumption by 40%',
                                'Expand to 10 new states',
                                'Train 5,000 farmers in sustainable practices'
                            ].map((goal, index) => (
                                <div key={index} className="flex items-start">
                                    <div className="flex-shrink-0 mt-1">
                                        <div className="w-2 h-2 bg-purple-300 rounded-full"></div>
                                    </div>
                                    <p className="ml-4 text-purple-50">{goal}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Milestones Timeline */}
                <motion.div
                    variants={fadeIn('up', 'tween', 0.6, 1)}
                    className="mb-20"
                >
                    <div className="bg-white p-8 rounded-2xl shadow-xl">
                        <h2 className="text-3xl font-bold text-purple-900 mb-8">Journey Through Time</h2>
                        <div className="relative">
                            {/* Timeline Item 1 */}
                            <div className="border-l-4 border-purple-200 pl-8 pb-8 relative">
                                <div className="absolute w-4 h-4 bg-purple-600 rounded-full -left-[10px] top-0"></div>
                                <h3 className="text-xl font-bold text-purple-900">2005 - Foundation</h3>
                                <p className="text-purple-600 mt-2">Established first farm in Punjab</p>
                            </div>

                            {/* Timeline Item 2 */}
                            <div className="border-l-4 border-purple-200 pl-8 pb-8 relative">
                                <div className="absolute w-4 h-4 bg-purple-600 rounded-full -left-[10px] top-0"></div>
                                <h3 className="text-xl font-bold text-purple-900">2012 - Expansion</h3>
                                <p className="text-purple-600 mt-2">Opened 5 new processing centers</p>
                            </div>

                            {/* Timeline Item 3 */}
                            <div className="border-l-4 border-purple-200 pl-8 relative">
                                <div className="absolute w-4 h-4 bg-purple-600 rounded-full -left-[10px] top-0"></div>
                                <h3 className="text-xl font-bold text-purple-900">2020 - Innovation</h3>
                                <p className="text-purple-600 mt-2">Launched solar-powered farms</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* CTA Section */}
                <motion.div
                    variants={fadeIn('up', 'tween', 0.8, 1)}
                    className="text-center"
                >
                    <div className="bg-purple-900 text-white py-12 px-8 rounded-2xl shadow-xl">
                        <h2 className="text-3xl font-bold mb-6">Join Our Mission</h2>
                        <p className="text-xl mb-8 max-w-2xl mx-auto">
                            Become part of the sustainable agriculture revolution. Let's build a better future together.
                        </p>
                        <div className="flex justify-center space-x-6">
                            <Link to='/contact-us'>
                                <button className="bg-white text-purple-900 px-8 py-3 rounded-full font-semibold hover:bg-purple-50 transition-colors">
                                    Partner With Us
                                </button>
                            </Link>
                            <button className="border-2 hidden border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors">
                                Learn More
                            </button>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Vision;