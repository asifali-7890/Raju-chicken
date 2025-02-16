
import { GiChickenOven, GiFarmTractor, GiChefToque } from 'react-icons/gi';
import { MdOutlineHealthAndSafety, MdSupportAgent } from 'react-icons/md';
import { motion } from 'framer-motion';
import teamMember1 from '../../assets/team1.png'; // Add your actual image paths
import teamMember2 from '../../assets/team2.png';
import teamMember3 from '../../assets/team3.png';
import team4 from '../../assets/team4.png';
import { Link } from 'react-router-dom';

const AboutUs = () => {
    const fadeIn = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.8 } },
    };

    const staggerChildren = {
        visible: { transition: { staggerChildren: 0.2 } },
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-16 px-4 sm:px-6 lg:px-8">
            <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerChildren}
                className="max-w-7xl mx-auto"
            >
                {/* Header Section */}
                <motion.div variants={fadeIn} className="text-center mb-16">
                    <h1 className="text-5xl font-bold text-blue-900 mb-6 font-serif">
                        About Raju Chicken
                    </h1>
                    <p className="text-xl text-blue-800 max-w-2xl mx-auto leading-relaxed">
                        Committed to excellence in poultry farming and delivery since 2005
                    </p>
                </motion.div>

                {/* Hero Section */}
                <motion.div variants={fadeIn} className="mb-20">
                    <div className="bg-blue-900 rounded-2xl p-8 text-white shadow-xl transform hover:scale-[1.01] transition-transform">
                        <h2 className="text-3xl font-bold mb-6">Premium Quality Chicken</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <p className="text-lg leading-relaxed">
                                    At Raju Chicken, we combine traditional farming values with modern
                                    technology to bring you the healthiest, most flavorful chicken
                                    products. Our free-range chickens are raised with care and fed
                                    natural, organic diets.
                                </p>
                            </div>
                            <div className="flex justify-center items-center">
                                <GiChickenOven className="text-8xl text-blue-200" />
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Features Grid */}
                <motion.div variants={fadeIn} className="mb-20">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                            <GiFarmTractor className="text-4xl text-blue-600 mb-4" />
                            <h3 className="text-xl font-bold mb-3">Sustainable Farming</h3>
                            <p className="text-gray-600">
                                Eco-friendly practices with zero antibiotics and ethical treatment
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                            <MdOutlineHealthAndSafety className="text-4xl text-green-600 mb-4" />
                            <h3 className="text-xl font-bold mb-3">Quality Assurance</h3>
                            <p className="text-gray-600">
                                Rigorous quality checks from farm to your table
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                            <GiChefToque className="text-4xl text-red-600 mb-4" />
                            <h3 className="text-xl font-bold mb-3">Expert Processing</h3>
                            <p className="text-gray-600">
                                Hygienic processing supervised by food safety experts
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* Our Story */}
                <motion.div variants={fadeIn} className="mb-20">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="relative rounded-2xl overflow-hidden">
                            <img
                                src={team4}
                                alt="Chicken Farm"
                                className="w-full h-96 object-cover"
                            />
                            <div className="absolute inset-0 bg-blue-900/30"></div>
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold text-blue-900 mb-6">Our Story</h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                What started as a small family farm in rural Punjab has grown into
                                one of India's most trusted poultry providers. Through three
                                generations, we've maintained our commitment to quality while
                                embracing sustainable innovations.
                            </p>
                            <div className="flex items-center space-x-4 mt-6">
                                <div className="flex-1 border-t-2 border-blue-200"></div>
                                <span className="text-blue-600 font-semibold">
                                    Since 2005 • 500+ Farms • 1M+ Happy Customers
                                </span>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Team Section */}
                <motion.div variants={fadeIn} className="mb-20">
                    <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">Our Leadership</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[teamMember1, teamMember2, teamMember3].map((member, index) => (
                            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                                <img src={member} alt={`Team member ${index + 1}`} className="w-full h-64 object-cover object-top" />
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-2">Raju Bhai</h3>
                                    <p className="text-blue-600">CEO & Founder</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* CTA Section */}
                <motion.div variants={fadeIn} className="text-center">
                    <div className="bg-blue-900 text-white py-12 px-8 rounded-2xl shadow-xl">
                        <MdSupportAgent className="text-6xl mx-auto mb-6 text-blue-200" />
                        <h2 className="text-3xl font-bold mb-4">Have Questions?</h2>
                        <p className="text-xl mb-8">Our team is here to help 24/7</p>
                        <Link to='/contact-us'>
                            <button className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors">
                                Contact Support
                            </button>
                        </Link>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default AboutUs;