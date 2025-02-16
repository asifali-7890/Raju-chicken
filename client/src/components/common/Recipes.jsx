import React from 'react';
import { FaSearch, FaClock, FaFire, FaUtensils, FaHeart, FaLeaf } from 'react-icons/fa';

const Recipes = () => {
    const categories = ['All', 'Quick Meals', 'Family Dinners', 'Grilled', 'Baked', 'Salads'];
    const recipes = [
        {
            title: "Honey Garlic Chicken",
            time: "35 mins",
            difficulty: "Easy",
            serves: 4,
            calories: 420,
            tags: ["dinner", "family-friendly", "gluten-free"],
            featured: true
        },
        {
            title: "Lemon Herb Roast Chicken",
            time: "1 hr 20 mins",
            difficulty: "Medium",
            serves: 6,
            calories: 380,
            tags: ["weekend", "special-occasion"],
            featured: false
        },
        {
            title: "Spicy Chicken Stir-Fry",
            time: "25 mins",
            difficulty: "Easy",
            serves: 3,
            calories: 320,
            tags: ["quick", "low-carb"],
            featured: true
        },
        {
            title: "Chicken Caesar Salad",
            time: "20 mins",
            difficulty: "Easy",
            serves: 2,
            calories: 280,
            tags: ["lunch", "healthy"],
            featured: false
        },
        {
            title: "Creamy Chicken Pasta",
            time: "40 mins",
            difficulty: "Medium",
            serves: 4,
            calories: 550,
            tags: ["comfort-food", "dinner"],
            featured: true
        },
        {
            title: "BBQ Chicken Skewers",
            time: "45 mins",
            difficulty: "Medium",
            serves: 4,
            calories: 390,
            tags: ["grilled", "summer"],
            featured: false
        },
    ];

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
                <div className="mb-12">
                    <div className="relative max-w-2xl mx-auto mb-8">
                        <input
                            type="text"
                            placeholder="Search recipes..."
                            className="w-full pl-12 pr-4 py-3 rounded-full border border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                        />
                        <FaSearch className="absolute left-4 top-4 text-amber-500 text-xl" />
                    </div>

                    <div className="flex flex-wrap justify-center gap-3">
                        {categories.map((category, index) => (
                            <button
                                key={index}
                                className="px-4 py-2 rounded-full bg-amber-100 text-amber-700 hover:bg-amber-200 transition-colors flex items-center"
                            >
                                <FaUtensils className="mr-2" />
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Recipe Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {recipes.map((recipe, index) => (
                        <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 relative">
                            {recipe.featured && (
                                <div className="absolute -top-3 -right-3 bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                                    <FaHeart className="mr-1" /> Featured
                                </div>
                            )}
                            <div className="h-48 bg-amber-100 rounded-t-xl flex items-center justify-center">
                                <FaUtensils className="text-4xl text-amber-600 opacity-50" />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">{recipe.title}</h3>
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
                        </div>
                    ))}
                </div>

                {/* Pagination */}
                <div className="flex justify-center gap-2 mb-16">
                    <button className="px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-colors">
                        1
                    </button>
                    <button className="px-4 py-2 bg-amber-100 text-amber-700 rounded-lg hover:bg-amber-200 transition-colors">
                        2
                    </button>
                    <button className="px-4 py-2 bg-amber-100 text-amber-700 rounded-lg hover:bg-amber-200 transition-colors">
                        3
                    </button>
                    <span className="px-4 py-2">...</span>
                </div>

                {/* Newsletter CTA */}
                <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
                    <FaLeaf className="text-4xl text-amber-600 mx-auto mb-4" />
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                        Get Fresh Recipes Weekly
                    </h2>
                    <p className="text-gray-600 mb-6 max-w-xl mx-auto">
                        Join our newsletter for new recipe ideas, cooking tips, and exclusive offers!
                    </p>
                    <div className="max-w-md mx-auto flex gap-4">
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