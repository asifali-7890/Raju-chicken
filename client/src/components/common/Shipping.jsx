
import { TruckIcon, ClockIcon, GlobeAltIcon, CheckCircleIcon, DocumentTextIcon } from '@heroicons/react/24/outline';

const Shipping = () => {
    const faqs = [
        {
            question: "How long does standard shipping take?",
            answer: "Standard shipping typically takes 3-5 business days within the continental US."
        },
        {
            question: "Do you offer international shipping?",
            answer: "Yes, we ship to over 50 countries worldwide with customized international rates."
        },
        {
            question: "Can I change my shipping address?",
            answer: "Address changes are possible within 1 hour of order placement through our order portal."
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-teal-50 to-blue-50 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-extrabold text-teal-900 mb-6">
                        Delivery & Shipping Solutions
                    </h1>
                    <p className="text-xl text-teal-700 max-w-3xl mx-auto leading-relaxed">
                        Experience seamless global delivery with our optimized logistics network.
                        Real-time tracking and premium packaging included with every shipment.
                    </p>
                </div>

                {/* Shipping Options Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    {[
                        {
                            icon: TruckIcon,
                            title: "Standard Shipping",
                            time: "3-5 Business Days",
                            price: "Free"
                        },
                        {
                            icon: ClockIcon,
                            title: "Express Delivery",
                            time: "1-2 Business Days",
                            price: "$9.99"
                        },
                        {
                            icon: GlobeAltIcon,
                            title: "International",
                            time: "5-10 Business Days",
                            price: "From $14.99"
                        }
                    ].map((option, index) => (
                        <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <option.icon className="h-12 w-12 text-teal-600 mb-6" />
                            <h3 className="text-2xl font-semibold text-gray-800 mb-2">{option.title}</h3>
                            <div className="flex items-center space-x-2 mb-4">
                                <span className="text-teal-600 font-medium">{option.time}</span>
                            </div>
                            <p className="text-3xl font-bold text-teal-800">{option.price}</p>
                        </div>
                    ))}
                </div>

                {/* Delivery Process Timeline */}
                <div className="bg-white rounded-2xl shadow-lg p-8 mb-20">
                    <h2 className="text-3xl font-bold text-teal-900 mb-12 text-center">Our Delivery Process</h2>
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
                        {[
                            { step: "Order Placed", status: "Complete" },
                            { step: "Processing", status: "Complete" },
                            { step: "Shipped", status: "Current" },
                            { step: "Out for Delivery", status: "Upcoming" },
                            { step: "Delivered", status: "Upcoming" }
                        ].map((step, index) => (
                            <div key={index} className="flex items-center flex-col text-center">
                                <div className={`h-12 w-12 rounded-full flex items-center justify-center 
                                    ${step.status === 'Complete' ? 'bg-teal-600' :
                                        step.status === 'Current' ? 'bg-teal-300' : 'bg-gray-200'}`}>
                                    {step.status === 'Complete' ? (
                                        <CheckCircleIcon className="h-6 w-6 text-white" />
                                    ) : (
                                        <span className="text-gray-700 font-medium">{index + 1}</span>
                                    )}
                                </div>
                                <span className="mt-4 font-medium text-teal-900">{step.step}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Tracking Form */}
                <div className="bg-teal-900 rounded-2xl p-8 mb-20 text-center">
                    <h2 className="text-3xl font-bold text-white mb-6">Track Your Package</h2>
                    <div className="max-w-md mx-auto">
                        <div className="flex rounded-lg overflow-hidden">
                            <input
                                type="text"
                                placeholder="Enter tracking number"
                                className="flex-1 px-4 py-3 text-lg focus:outline-none"
                            />
                            <button className="bg-teal-500 text-white px-6 py-3 hover:bg-teal-400 transition-colors duration-200">
                                Track
                            </button>
                        </div>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="mb-20">
                    <h2 className="text-3xl font-bold text-teal-900 mb-12 text-center">Shipping FAQs</h2>
                    <div className="space-y-6 max-w-4xl mx-auto">
                        {faqs.map((faq, index) => (
                            <div key={index} className="border-b border-teal-100 pb-6">
                                <h3 className="text-xl font-semibold text-teal-900 mb-2">{faq.question}</h3>
                                <p className="text-teal-700 leading-relaxed">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Contact Section */}
                <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
                    <DocumentTextIcon className="h-12 w-12 text-teal-600 mx-auto mb-6" />
                    <h2 className="text-3xl font-bold text-teal-900 mb-4">Need Help with Shipping?</h2>
                    <p className="text-teal-700 mb-6 max-w-2xl mx-auto">
                        Our logistics team is available 24/7 to assist with any shipping inquiries,
                        customs documentation, or special delivery requests.
                    </p>
                    <div className="flex justify-center space-x-6">
                        <button className="bg-teal-600 text-white px-8 py-3 rounded-lg hover:bg-teal-700 transition-colors duration-200">
                            Contact Support
                        </button>
                        <button className="bg-white text-teal-600 px-8 py-3 rounded-lg border-2 border-teal-600 hover:bg-teal-50 transition-colors duration-200">
                            Shipping Policy
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shipping;