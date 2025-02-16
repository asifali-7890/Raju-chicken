import React from 'react';
import { CalendarIcon, UserIcon, TagIcon, BookOpenIcon } from '@heroicons/react/24/outline';

const Blog = () => {
    const categories = ['Poultry Care', 'Industry News', 'Farm Management', 'Nutrition Guide', 'Sustainability'];
    const popularPosts = [
        {
            title: 'Modern Poultry Farming Techniques',
            excerpt: 'Discover the latest innovations in automated farming systems and their impact on productivity...',
            date: 'Mar 15, 2024',
            category: 'Farm Management'
        },
        {
            title: 'Sustainable Feed Solutions',
            excerpt: 'Exploring eco-friendly feed alternatives that reduce environmental impact without compromising quality...',
            date: 'Mar 10, 2024',
            category: 'Nutrition Guide'
        },
        {
            title: 'Disease Prevention Strategies',
            excerpt: 'Comprehensive guide to maintaining flock health through proactive disease management...',
            date: 'Mar 5, 2024',
            category: 'Poultry Care'
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-extrabold text-indigo-900 mb-4">
                        Poultry Insights Blog
                    </h1>
                    <p className="text-xl text-indigo-700 max-w-2xl mx-auto leading-relaxed">
                        Expert knowledge, industry trends, and practical advice for modern poultry professionals.
                    </p>
                </div>

                {/* Featured Post */}
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                        <div className="h-96 bg-[url('https://images.unsplash.com/photo-1587923623987-c7e4083beb23?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80')] bg-cover bg-center" />
                        <div className="p-12">
                            <span className="bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-medium">
                                Featured Article
                            </span>
                            <h2 className="text-4xl font-bold text-indigo-900 mt-6 mb-4">
                                The Future of Poultry Farming Technology
                            </h2>
                            <div className="flex items-center space-x-4 text-indigo-600 mb-6">
                                <div className="flex items-center">
                                    <UserIcon className="h-5 w-5 mr-2" />
                                    <span>Dr. Sarah Thompson</span>
                                </div>
                                <div className="flex items-center">
                                    <CalendarIcon className="h-5 w-5 mr-2" />
                                    <span>March 20, 2024</span>
                                </div>
                            </div>
                            <p className="text-lg text-indigo-700 leading-relaxed mb-6">
                                Explore how AI-driven monitoring systems and IoT-enabled devices are revolutionizing
                                poultry health management and operational efficiency in modern farms...
                            </p>
                            <button className="bg-indigo-600 hidden text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors duration-200">
                                Read Full Article
                            </button>
                        </div>
                    </div>
                </div>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {popularPosts.map((post, index) => (
                        <article key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                            {/* <div className="h-48 bg-indigo-100 rounded-lg mb-4" /> */}
                            <div className="flex items-center space-x-2 mb-4">
                                <TagIcon className="h-5 w-5 text-indigo-600" />
                                <span className="text-indigo-600 font-medium">{post.category}</span>
                            </div>
                            <h3 className="text-2xl font-bold text-indigo-900 mb-2">{post.title}</h3>
                            <p className="text-indigo-600 mb-4">{post.excerpt}</p>
                            <div className="flex items-center justify-between text-indigo-500">
                                <div className="flex items-center">
                                    <CalendarIcon className="h-5 w-5 mr-2" />
                                    <span>{post.date}</span>
                                </div>
                                <button className="flex items-center text-indigo-600 hover:text-indigo-800">
                                    <BookOpenIcon className="h-5 w-5 ml-2" />
                                </button>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Categories & Newsletter */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16 hidden">
                    {/* Categories */}
                    <div className="lg:col-span-2 bg-white p-8 rounded-2xl shadow-lg">
                        <h2 className="text-3xl font-bold text-indigo-900 mb-6">Explore Categories</h2>
                        <div className="flex flex-wrap gap-3">
                            {categories.map((category, index) => (
                                <button key={index} className="px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full 
                                  hover:bg-indigo-200 transition-colors duration-200">
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Newsletter */}
                    <div className="bg-indigo-900 p-8 rounded-2xl shadow-lg">
                        <div className="text-center">
                            {/* <ChatIcon className="h-12 w-12 text-white mx-auto mb-4" /> */}
                            <h3 className="text-2xl font-bold text-white mb-2">Stay Informed</h3>
                            <p className="text-indigo-200 mb-6">Subscribe to our newsletter for weekly updates</p>
                            <div className="space-y-4">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full px-4 py-3 rounded-lg focus:outline-none"
                                />
                                <button className="w-full bg-white text-indigo-900 px-6 py-3 rounded-lg 
                                  hover:bg-indigo-50 transition-colors duration-200 font-semibold">
                                    Subscribe Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Author Spotlight */}
                <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
                    <div className="flex items-center flex-col md:flex-row">
                        <img
                            src="https://www.rushu.rush.edu/sites/default/files/styles/faculty_profile/public/legacy/Rush%20Medical%20College/chen_michael_rmc.jpg?itok=wSqeNcrK"
                            alt="Expert Author"
                            className="w-32 h-32 rounded-full object-cover mb-6 md:mb-0 md:mr-8"
                        />
                        <div>
                            <h3 className="text-2xl font-bold text-indigo-900 mb-2">Featured Author: Dr. Michael Chen</h3>
                            <p className="text-indigo-600 mb-4">Poultry Nutrition Specialist with 15+ years experience</p>
                            <p className="text-indigo-700 leading-relaxed">
                                "Understanding the nutritional needs of poultry at different growth stages is crucial
                                for optimizing health and productivity. In my upcoming series, I'll break down..."
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;