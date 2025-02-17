import React, { useState, useEffect } from 'react';
import { FaSearch, FaClock, FaFire, FaUtensils, FaHeart, FaLeaf } from 'react-icons/fa';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Recipes = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');

    const categories = ['all', 'breast', 'thighs', 'wings'];

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await axios.get('/api/products');
                if (res.data.success) {
                    setProducts(res.data.products);
                    setLoading(false);
                }
            } catch (error) {
                console.error('Failed to fetch products:', error);
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    const getRecipeDetails = (product) => {
        // Mock recipe details based on product data
        const times = ["20 mins", "35 mins", "45 mins", "1 hr"];
        const difficulties = ["Easy", "Medium"];
        const serves = Math.floor(Math.random() * 4) + 2; // 2-5 serves
        const calories = Math.floor(product.price * 15); // Mock calorie calculation

        return {
            time: times[Math.floor(Math.random() * times.length)],
            difficulty: difficulties[Math.floor(Math.random() * difficulties.length)],
            serves,
            calories,
            tags: product.category ? [product.category] : ['chicken'],
            featured: product.isFeatured
        };
    };

    const filteredProducts = products
        .filter(product =>
            product.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
            (selectedCategory === 'all' || product.category === selectedCategory)
        );

    const LoadingSkeleton = () => (
        <div className="animate-pulse space-y-4">
            {[...Array(6)].map((_, i) => (
                <div key={i} className="h-64 bg-gray-100 rounded-xl" />
            ))}
        </div>
    );

    return (
        <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                            Chicken Recipes
                        </span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Discover mouth-watering recipes featuring our premium chicken products. From quick weeknight dinners to special occasion feasts.
                    </p>
                </div>

                {/* Search and Filters */}
                {/* Sticky Search and Filters */}
                <div className="sticky top-16 bg-white z-30 pt-4 pb-4 shadow-sm mb-12">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        {/* Search Bar */}
                        <div className="relative max-w-2xl mx-auto mb-1">
                            <input
                                type="text"
                                placeholder="Search recipes..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-12 pr-4 py-3 rounded-full border border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent shadow-sm"
                            />
                            <FaSearch className="absolute left-4 top-4 text-amber-500 text-xl" />
                        </div>

                        {/* Filters */}
                        <div className="flex hidden flex-wrap justify-center gap-3 overflow-x-auto pb-2">
                            {categories.map((category, index) => (
                                <button
                                    key={index}
                                    onClick={() => setSelectedCategory(category)}
                                    className={`px-4 py-2 rounded-full transition-colors flex items-center whitespace-nowrap ${selectedCategory === category
                                        ? 'bg-amber-500 text-white shadow-md'
                                        : 'bg-amber-100 text-amber-700 hover:bg-amber-200'
                                        }`}
                                >
                                    <FaUtensils className="mr-2 text-sm" />
                                    {category.charAt(0).toUpperCase() + category.slice(1)}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Recipe Grid */}
                {loading ? (
                    <LoadingSkeleton />
                ) : (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                        {filteredProducts.map((product) => {
                            const recipe = getRecipeDetails(product);

                            return (
                                <div key={product._id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 relative">
                                    {recipe.featured && (
                                        <div className="absolute -top-3 -right-3 bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                                            <FaHeart className="mr-1" /> Featured
                                        </div>
                                    )}
                                    <div className="h-48 bg-amber-100 rounded-t-xl flex items-center justify-center">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="h-full w-full object-cover rounded-t-xl"
                                        />
                                    </div>
                                    <Link to={`/products/${product._id}`} className="">
                                        <div className="p-6">
                                            <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                <span className="flex items-center px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm">
                                                    <FaClock className="mr-1" /> {recipe.time}
                                                </span>
                                                <span className="flex items-center px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm">
                                                    <FaFire className="mr-1" /> {recipe.calories} kcal
                                                </span>
                                            </div>
                                            <div className="flex justify-between items-center mb-4">
                                                <span className="text-sm font-medium text-amber-700">
                                                    Difficulty: {recipe.difficulty}
                                                </span>
                                                <span className="text-sm text-gray-500">
                                                    Serves {recipe.serves}
                                                </span>
                                            </div>
                                            <div className="flex flex-wrap gap-2">
                                                {recipe.tags.map((tag, tagIndex) => (
                                                    <span
                                                        key={tagIndex}
                                                        className="px-2 py-1 bg-gray-100 text-gray-600 rounded-md text-xs font-medium"
                                                    >
                                                        #{tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            );
                        })}
                    </div>
                )}

                {/* Newsletter CTA */}
                <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
                    <FaLeaf className="text-4xl text-amber-600 mx-auto mb-4" />
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                        Get Fresh Recipes Weekly
                    </h2>
                    <p className="text-gray-600 mb-6 max-w-xl mx-auto">
                        Join our newsletter for new recipe ideas, cooking tips, and exclusive offers!
                    </p>
                    <div className="max-w-md hidden mx-auto flex gap-4">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 px-4 py-2 border border-amber-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
                        />
                        <button className="px-6 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Recipes;