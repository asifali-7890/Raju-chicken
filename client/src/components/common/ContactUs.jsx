

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { fadeIn, staggerContainer } from '../../utils/motion';
import axios from 'axios';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            const response = await axios.post('/api/contact', formData);

            if (response.data.success) {
                setSubmitStatus({
                    type: 'success',
                    message: 'Message sent successfully!',
                    key: Date.now()
                });

                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                });
            }
        } catch (error) {
            setSubmitStatus({
                type: 'error',
                message: error.response?.data?.message || 'Failed to send message. Please try again.'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-50 to-pink-100 py-16 px-4 sm:px-6 lg:px-8">
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                className="max-w-7xl mx-auto"
            >
                {/* ... (keep existing header section) ... */}
                {/* Header Section */}
                <motion.div
                    variants={fadeIn('up', 'tween', 0.2, 1)}
                    className="text-center mb-16"
                >
                    <h1 className="text-5xl font-bold text-pink-900 mb-4 font-serif">
                        Get in Touch
                    </h1>
                    <p className="text-xl text-pink-700 max-w-2xl mx-auto">
                        We're here to help! Reach out to us for any inquiries, feedback, or support needs.
                    </p>
                </motion.div>

                {/* Status Messages */}
                {submitStatus && (
                    <motion.div
                        variants={fadeIn('up', 'tween', 0.2, 1)}
                        className={`p-4 rounded-lg mb-6 ${submitStatus.type === 'success'
                            ? 'bg-green-100 text-green-700'
                            : 'bg-red-100 text-red-700'
                            }`}
                    >
                        {submitStatus.message}
                    </motion.div>
                )}

                {/* Contact Content */}
                <motion.div
                    variants={fadeIn('up', 'tween', 0.4, 1)}
                    className="grid md:grid-cols-2 gap-12 mb-16"
                >
                    {/* ... (keep existing contact information section) ... */}
                    {/* Contact Information */}
                    <div className="bg-white p-8 rounded-2xl shadow-xl">
                        <h2 className="text-3xl font-bold text-pink-900 mb-8">Contact Information</h2>

                        <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                                <div className="bg-pink-100 p-3 rounded-lg">
                                    <FaMapMarkerAlt className="text-2xl text-pink-600" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-pink-900">Our Office</h3>
                                    <p className="text-pink-600">123 Poultry Lane<br />Chicken City, PC 400001</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="bg-pink-100 p-3 rounded-lg">
                                    <FaPhone className="text-2xl text-pink-600" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-pink-900">Phone Numbers</h3>
                                    <p className="text-pink-600">
                                        Sales: +91 12345 67890<br />
                                        Support: +91 09876 54321
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="bg-pink-100 p-3 rounded-lg">
                                    <FaEnvelope className="text-2xl text-pink-600" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-pink-900">Email Addresses</h3>
                                    <p className="text-pink-600">
                                        Sales: sales@rajuchicken.com<br />
                                        Support: support@rajuchicken.com
                                    </p>
                                </div>
                            </div>

                            <div className="pt-6">
                                <h3 className="text-lg font-semibold text-pink-900 mb-4">Follow Us</h3>
                                <div className="flex space-x-4">
                                    <a href="#" className="text-pink-600 hover:text-pink-800 transition-colors">
                                        <FaFacebook className="text-2xl" />
                                    </a>
                                    <a href="#" className="text-pink-600 hover:text-pink-800 transition-colors">
                                        <FaTwitter className="text-2xl" />
                                    </a>
                                    <a href="#" className="text-pink-600 hover:text-pink-800 transition-colors">
                                        <FaInstagram className="text-2xl" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* Updated Contact Form */}
                    <div className="bg-white p-8 rounded-2xl shadow-xl">
                        <h2 className="text-3xl font-bold text-pink-900 mb-8">Send Us a Message</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-pink-700 mb-2">Your Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full p-3 border border-pink-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                                    placeholder="Enter your name"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-pink-700 mb-2">Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full p-3 border border-pink-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                                    placeholder="Enter your email"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-pink-700 mb-2">Subject</label>
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full p-3 border border-pink-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                                    placeholder="Enter subject"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-pink-700 mb-2">Message</label>
                                <textarea
                                    rows="4"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full p-3 border border-pink-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                                    placeholder="Type your message here..."
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-pink-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-pink-700 transition-colors disabled:opacity-50 flex justify-center items-center"
                            >
                                {isSubmitting ? (
                                    <>
                                        <svg
                                            className="animate-spin h-5 w-5 mr-3 text-white"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                        >
                                            <circle
                                                className="opacity-25"
                                                cx="12"
                                                cy="12"
                                                r="10"
                                                stroke="currentColor"
                                                strokeWidth="4"
                                            ></circle>
                                            <path
                                                className="opacity-75"
                                                fill="currentColor"
                                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                                            ></path>
                                        </svg>
                                        Sending...
                                    </>
                                ) : (
                                    'Send Message'
                                )}
                            </button>

                        </form>
                    </div>
                </motion.div>

                {/* ... (keep existing map section) ... */}
                {/* Map Section */}
                <motion.div
                    variants={fadeIn('up', 'tween', 0.6, 1)}
                    className="bg-white rounded-2xl shadow-xl overflow-hidden"
                >
                    <iframe
                        title="Office Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.265588856372!2d73.91455741522115!3d18.56206868738439!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c147b8b3a3bf%3A0x6f7fdcc8e4d6c77e!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1625047742917!5m2!1sen!2sin"
                        width="100%"
                        height="400"
                        className="border-0"
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default ContactUs;