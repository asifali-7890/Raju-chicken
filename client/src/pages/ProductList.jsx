import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Link, useSearchParams } from 'react-router-dom';
import { FaStar, FaRegHeart, FaFire, FaSearch, FaTruck, FaShieldAlt } from 'react-icons/fa';
import { GiChickenOven, GiPriceTag } from 'react-icons/gi';
import { motion, AnimatePresence } from 'framer-motion';
import { CartContext } from '../context/CartContext';

const ProductList = () => {
    // ... existing state and logic ...
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchParams, setSearchParams] = useSearchParams();
    const search = searchParams.get('search') || '';
    const [sortBy, setSortBy] = useState('featured');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const { addToCart } = useContext(CartContext);




    const categories = [
        { id: 'all', name: 'All Products', icon: <GiChickenOven /> },
        { id: 'breast', name: 'Breast', icon: <FaFire className="text-red-500" /> },
        { id: 'thighs', name: 'Thighs', icon: <FaRegHeart className="text-pink-500" /> },
        { id: 'wings', name: 'Wings', icon: <FaStar className="text-yellow-500" /> }
    ];

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

    const filteredProducts = products
        .filter(product =>
            product.name.toLowerCase().includes(search.toLowerCase()) &&
            (selectedCategory === 'all' || product.category === selectedCategory)
        )
        .sort((a, b) => {
            switch (sortBy) {
                case 'priceLow': return a.price - b.price;
                case 'priceHigh': return b.price - a.price;
                case 'rating': return b.rating - a.rating;
                default: return b.isFeatured - a.isFeatured;
            }
        });

    const LoadingSkeleton = () => (
        <div className="animate-pulse space-y-4">
            {[...Array(8)].map((_, i) => (
                <div key={i} className="h-64 bg-gray-100 rounded-xl" />
            ))}
        </div>
    );


    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-orange-50 to-amber-50 py-12 px-4 sm:px-6 lg:px-8">
            {/* Enhanced Header */}
            <div className="text-center mb-16 max-w-4xl mx-auto">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
                >
                    <span className="bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                        Premium Poultry Selection
                    </span>
                </motion.h1>
                <p className="text-lg text-gray-600 mb-8">
                    Farm-fresh chicken delivered with care. 100% antibiotic-free, hormone-free, and ethically raised.
                </p>

                {/* Quality Badges */}
                <div className="flex justify-center gap-6 mb-8">
                    <div className="flex items-center text-sm bg-white px-4 py-2 rounded-full shadow-sm">
                        <FaTruck className="text-orange-600 mr-2" />
                        24hr Delivery
                    </div>
                    <div className="flex items-center text-sm bg-white px-4 py-2 rounded-full shadow-sm">
                        <FaShieldAlt className="text-green-600 mr-2" />
                        Quality Guarantee
                    </div>
                </div>
            </div>

            {/* Enhanced Filters */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="sticky top-0 bg-orange-50 z-10 py-6 mb-12 shadow-sm"
            >
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
                        <div className="relative flex-1 w-full">
                            <input
                                type="text"
                                placeholder="Search our products..."
                                value={search}
                                onChange={(e) => setSearchParams({ search: e.target.value })}
                                className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-orange-200 focus:ring-2 focus:ring-orange-500 bg-white"
                            />
                            <FaSearch className="absolute left-4 top-4 text-orange-500 text-lg" />
                        </div>

                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="w-full md:w-64 px-4 py-3 rounded-xl border-2 border-orange-200 focus:ring-2 focus:ring-orange-500 bg-white"
                        >
                            <option value="featured">Featured First</option>
                            <option value="priceLow">Price: Low to High</option>
                            <option value="priceHigh">Price: High to Low</option>
                            <option value="rating">Top Rated</option>
                        </select>
                    </div>

                    {/* Category Chips */}
                    <div className="flex hidden flex-wrap gap-3 mt-4">
                        {categories.map(category => (
                            <motion.button
                                key={category.id}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setSelectedCategory(category.id)}
                                className={`flex items-center px-4 py-2 rounded-xl transition-all ${selectedCategory === category.id
                                    ? 'bg-orange-600 text-white shadow-lg'
                                    : 'bg-white text-gray-600 hover:bg-orange-50 shadow-sm'
                                    }`}
                            >
                                <span className="mr-2 text-lg">{category.icon}</span>
                                {category.name}
                            </motion.button>
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* Product Grid */}
            {loading ? (
                <LoadingSkeleton />
            ) : (
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                    className="max-w-7xl mx-auto"
                >
                    <AnimatePresence>
                        {filteredProducts.length === 0 && !loading && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="text-center py-16"
                            >
                                {/* ... existing empty state ... */}
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {filteredProducts.map((product) => {
                            const oldPrice = Math.round(product.price * 1.3);
                            const discount = Math.round(((oldPrice - product.price) / oldPrice) * 100);

                            return (
                                <motion.div
                                    key={product._id}
                                    variants={itemVariants}
                                    className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all overflow-hidden"
                                >
                                    {/* Image Section */}
                                    <div className="relative h-72 overflow-hidden">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
                                        />

                                        {/* Product Badges */}
                                        <div className="absolute top-3 right-3 flex flex-col gap-2">
                                            {product.isFeatured && (
                                                <div className="px-3 py-1 bg-orange-500 text-white rounded-full text-xs font-medium flex items-center">
                                                    <FaStar className="mr-1" />
                                                    Featured
                                                </div>
                                            )}
                                            {discount > 0 && (
                                                <div className="px-3 py-1 bg-red-500 text-white rounded-full text-xs font-medium">
                                                    {discount}% OFF
                                                </div>
                                            )}
                                        </div>

                                        {/* Quick Actions */}
                                        <div className="absolute bottom-3 left-3 right-3 flex justify-between opacity-0 group-hover:opacity-100 transition-opacity">
                                            <button
                                                className="p-2 bg-white/90 backdrop-blur-sm rounded-lg shadow-sm hover:bg-white transition-colors"
                                                onClick={() => addToCart(product)}
                                            >
                                                <GiPriceTag className="text-xl text-orange-600" />
                                            </button>
                                            <button className="p-2 bg-white/90 backdrop-blur-sm rounded-lg shadow-sm hover:bg-white transition-colors">
                                                <FaRegHeart className="text-xl text-pink-500" />
                                            </button>
                                        </div>
                                    </div>

                                    {/* Product Details */}
                                    <Link to={`/products/${product._id}`} className="block p-6">
                                        <h2 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
                                            {product.name}
                                        </h2>

                                        {/* Nutrition Info */}
                                        <div className="flex gap-2 mb-4">
                                            <div className="flex items-center text-sm bg-orange-100 px-3 py-1 rounded-full">
                                                <FaFire className="text-orange-600 mr-1" />
                                                {Math.round(product.price * 15)}kcal
                                            </div>
                                            <div className="flex items-center text-sm bg-green-100 px-3 py-1 rounded-full text-green-700">
                                                <GiChickenOven className="mr-1" />
                                                {product.category}
                                            </div>
                                        </div>

                                        {/* Price Section */}
                                        <div className="flex items-end gap-2 mb-4">
                                            <span className="text-2xl font-bold text-orange-600">
                                                ₹{product.price}
                                            </span>
                                            <span className="text-sm text-gray-500 mb-1">/ {product.weight}</span>
                                            {oldPrice > product.price && (
                                                <span className="text-sm text-gray-400 line-through ml-2">
                                                    ₹{oldPrice}
                                                </span>
                                            )}
                                        </div>

                                        {/* Stock Status */}
                                        <div className="flex items-center text-sm text-green-600">
                                            <div className="w-2 h-2 bg-green-500 rounded-full mr-2" />
                                            In Stock • Ready to Ship
                                        </div>
                                    </Link>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>
            )}

            {/* Enhanced Newsletter CTA */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="mt-24 bg-gradient-to-br from-orange-500 to-amber-600 rounded-3xl p-12 text-center text-white shadow-2xl"
            >
                <div className="max-w-2xl mx-auto">
                    <h2 className="text-3xl font-bold mb-4">
                        Join Our Poultry Community
                    </h2>
                    <p className="text-lg mb-6 opacity-90">
                        Get exclusive offers, cooking tips, and early access to new products!
                    </p>
                    <div className="flex flex-col hidden sm:flex-row gap-4 max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="flex-1 px-6 py-3 rounded-xl border border-orange-300 bg-white/20 placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white"
                        />
                        <button className="px-8 py-3 bg-white text-orange-600 rounded-xl font-semibold hover:bg-opacity-90 transition-all">
                            Subscribe Now
                        </button>
                    </div>
                    <p className="text-sm mt-4 opacity-75">
                        We respect your privacy. No spam ever.
                    </p>
                </div>
            </motion.div>
        </div>
    );
};

// Updated Loading Skeleton
const LoadingSkeleton = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {[...Array(8)].map((_, i) => (
            <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
                <div className="h-72 bg-gray-100 animate-pulse" />
                <div className="p-6 space-y-4">
                    <div className="h-4 bg-gray-100 rounded w-3/4 animate-pulse" />
                    <div className="h-4 bg-gray-100 rounded w-1/2 animate-pulse" />
                    <div className="h-6 bg-gray-100 rounded w-1/3 animate-pulse" />
                </div>
            </motion.div>
        ))}
    </div>
);

export default ProductList;