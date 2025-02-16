import React from 'react';
import { FaHeadset, FaWhatsapp, FaClock, FaEnvelope, FaTools, FaComments } from 'react-icons/fa';
import ContactUs from './ContactUs';
import { Link } from 'react-router-dom';

const ServiceAndSupport = () => {
    const faqs = [
        {
            question: "What are your support hours?",
            answer: "We provide 24/7 support through our chat and email systems. Phone support is available from 8 AM to 10 PM GMT."
        },
        {
            question: "How long does it take to get a response?",
            answer: "Average response time is under 30 minutes for premium users and within 2 hours for standard accounts."
        },
        {
            question: "Do you offer on-site support?",
            answer: "Yes, we provide on-site technical support in over 50 countries. Contact our team to check availability in your region."
        }
    ];

    const testimonials = [
        {
            name: "Sarah Johnson",
            role: "CTO at TechStart",
            text: "Their support team is phenomenal! Quick responses and deep technical knowledge make all the difference."
        },
        {
            name: "Michael Chen",
            role: "E-commerce Manager",
            text: "24/7 chat support has been a lifesaver during our product launches. Highly recommended!"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-50 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                            Service & Support
                        </span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Experience premium support with multiple channels, rapid response times, and expert technical assistance tailored to your needs.
                    </p>
                </div>

                {/* Support Channels Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <div className="flex items-center mb-4">
                            <div className="bg-pink-100 p-3 rounded-lg mr-4">
                                <FaHeadset className="text-3xl text-pink-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900">Live Chat</h3>
                        </div>
                        <p className="text-gray-600 mb-4">Instant connection with our support experts</p>
                        <Link to='/contact-us'>
                            <button className="bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition-colors">
                                Start Chat
                            </button>
                        </Link>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <div className="flex items-center mb-4">
                            <div className="bg-purple-100 p-3 rounded-lg mr-4">
                                <FaWhatsapp className="text-3xl text-purple-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900">WhatsApp</h3>
                        </div>
                        <p className="text-gray-600 mb-4">+1 (555) 123-4567</p>

                        <Link to='/contact-us'>
                            <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                                Message Us
                            </button>
                        </Link>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <div className="flex items-center mb-4">
                            <div className="bg-blue-100 p-3 rounded-lg mr-4">
                                <FaTools className="text-3xl text-blue-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900">Technical Support</h3>
                        </div>
                        <p className="text-gray-600 mb-4">Enterprise-grade technical assistance</p>
                        <Link to='/contact-us'>
                            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                                Request Support
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Contact Form */}
                <ContactUs />

                {/* FAQ Section */}
                <div className="mb-16">
                    <h2 className="text-3xl mt-3 font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
                    <div className="space-y-4 max-w-3xl mx-auto">
                        {faqs.map((faq, index) => (
                            <div key={index} className="border rounded-xl p-4 hover:border-pink-300 transition-colors">
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                                <p className="text-gray-600">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Testimonials */}
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                            <FaComments className="text-3xl text-pink-600 mb-4" />
                            <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                            <div className="font-semibold text-gray-900">{testimonial.name}</div>
                            <div className="text-sm text-gray-500">{testimonial.role}</div>
                        </div>
                    ))}
                </div>

                {/* Footer Note */}
                <div className="text-center text-gray-600">
                    <FaClock className="mx-auto text-3xl text-pink-600 mb-4" />
                    <p className="text-xl font-semibold">24/7 Support Center Available</p>
                    <p>Average response time: 22 minutes</p>
                </div>
            </div>
        </div>
    );
};

export default ServiceAndSupport;