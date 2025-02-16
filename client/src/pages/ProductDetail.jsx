import { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { motion } from 'framer-motion';
import { CartContext } from '../context/CartContext';
import {
    ShieldCheckIcon,
    SparklesIcon,
    CheckBadgeIcon,
    TruckIcon,
    ClockIcon,
    HeartIcon,
    ChartBarIcon
} from '@heroicons/react/24/solid';

const ProductDetail = () => {
    const { id } = useParams();
    const { addToCart, cartItems, incrementQuantity, decrementQuantity } = useContext(CartContext);
    const [product, setProduct] = useState(null);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await axios.get(`/api/products/${id}`);
                if (res.data.success) {
                    setProduct(res.data.product);
                } else {
                    setError('Product not available');
                }
            } catch (err) {
                setError('Failed to load product');
            } finally {
                setLoading(false);
            }
        };
        fetchProduct();
    }, [id]);

    const existingItem = cartItems.find((item) => item.product._id === product?._id);
    const oldPrice = product ? Math.round(product.price * 1.3) : 0;
    const discountPercentage = ((oldPrice - product?.price) / oldPrice * 100).toFixed(0);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-4 border-orange-500 border-t-transparent"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen flex items-center justify-center text-red-600 text-xl">
                {error}
            </div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"
        >
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-12">
                    {/* Image Section */}
                    <motion.div
                        initial={{ x: -50 }}
                        animate={{ x: 0 }}
                        className="relative group"
                    >
                        <div className="bg-white p-8 rounded-3xl shadow-xl">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-96 object-contain transform group-hover:scale-105 transition-transform duration-300"
                            />
                            {discountPercentage && (
                                <div className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                                    {discountPercentage}% OFF
                                </div>
                            )}
                        </div>
                    </motion.div>

                    {/* Product Details */}
                    <motion.div
                        initial={{ x: 50 }}
                        animate={{ x: 0 }}
                        className="space-y-6"
                    >
                        <h1 className="text-4xl font-bold text-gray-900">{product.name}</h1>

                        {/* Price Section */}
                        <div className="flex items-center space-x-4">
                            <span className="text-3xl font-bold text-orange-600">
                                ₹{product.price}
                            </span>
                            <span className="text-xl text-gray-400 line-through">
                                ₹{oldPrice}
                            </span>
                            <span className="text-sm text-gray-500">({product.weight})</span>
                        </div>

                        {/* Quality Badges */}
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            <div className="flex items-center p-3 bg-green-50 rounded-lg">
                                <ShieldCheckIcon className="h-6 w-6 text-green-600 mr-2" />
                                <span className="text-sm">Antibiotic-Free</span>
                            </div>
                            <div className="flex items-center p-3 bg-orange-50 rounded-lg">
                                <SparklesIcon className="h-6 w-6 text-orange-600 mr-2" />
                                <span className="text-sm">Fresh Daily</span>
                            </div>
                            <div className="flex items-center p-3 bg-blue-50 rounded-lg">
                                <CheckBadgeIcon className="h-6 w-6 text-blue-600 mr-2" />
                                <span className="text-sm">FSSAI Certified</span>
                            </div>
                        </div>

                        {/* Product Description */}
                        <div className="space-y-4">
                            <h2 className="text-xl font-semibold text-gray-900">Product Details</h2>
                            <p className="text-gray-600 leading-relaxed">
                                {product.description}
                            </p>
                        </div>

                        {/* Nutrition & Benefits */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-white p-6 rounded-xl shadow-sm">
                                <h3 className="flex items-center text-lg font-semibold mb-3">
                                    <ChartBarIcon className="h-5 w-5 text-purple-600 mr-2" />
                                    Nutritional Value (per 100g)
                                </h3>
                                <ul className="space-y-2 text-gray-600">
                                    <li>• Protein: 27g</li>
                                    <li>• Calories: 165kcal</li>
                                    <li>• Fat: 3.6g</li>
                                </ul>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-sm">
                                <h3 className="flex items-center text-lg font-semibold mb-3">
                                    <HeartIcon className="h-5 w-5 text-red-600 mr-2" />
                                    Health Benefits
                                </h3>
                                <ul className="space-y-2 text-gray-600">
                                    <li>• High-quality protein source</li>
                                    <li>• Rich in essential vitamins</li>
                                    <li>• Low in saturated fats</li>
                                </ul>
                            </div>
                        </div>

                        {/* Cart Controls */}
                        <div className="space-y-6">
                            <div className="flex items-center space-x-4">
                                {existingItem ? (
                                    <>
                                        <button
                                            onClick={() => decrementQuantity(product._id)}
                                            className="bg-gray-100 w-10 h-10 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors"
                                        >
                                            −
                                        </button>
                                        <span className="text-xl font-medium w-8 text-center">
                                            {existingItem.quantity}
                                        </span>
                                        <button
                                            onClick={() => incrementQuantity(product._id)}
                                            className="bg-gray-100 w-10 h-10 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors"
                                        >
                                            +
                                        </button>
                                    </>
                                ) : (
                                    <button
                                        onClick={() => addToCart(product)}
                                        className="bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-700 transition-colors flex items-center"
                                    >
                                        <TruckIcon className="h-5 w-5 mr-2" />
                                        Add to Cart
                                    </button>
                                )}
                            </div>

                            {/* Trust Badges */}
                            <div className="flex flex-wrap gap-4 pt-6 border-t border-gray-200">
                                <div className="flex items-center text-sm text-gray-600">
                                    <ClockIcon className="h-5 w-5 text-green-600 mr-2" />
                                    24hr Delivery Guarantee
                                </div>
                                <div className="flex items-center text-sm text-gray-600">
                                    <ShieldCheckIcon className="h-5 w-5 text-blue-600 mr-2" />
                                    100% Safe & Secure
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

export default ProductDetail;