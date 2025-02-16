import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon, ArrowLeftIcon, LockClosedIcon, TruckIcon } from '@heroicons/react/24/outline';
import { ShoppingBagIcon } from '@heroicons/react/24/solid';

const CartPage = () => {
    const {
        cartItems,
        incrementQuantity,
        decrementQuantity,
        removeFromCart
    } = useContext(CartContext);

    // Safe total calculation with fallbacks
    const totalPrice = cartItems?.reduce(
        (sum, item) => sum + (item?.product?.price || 0) * (item?.quantity || 0),
        0
    ) || 0;

    const shippingFee = 49;
    const taxes = (totalPrice * 0.18) || 0;

    if (!cartItems?.length) {
        return (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-white p-8 text-center"
            >
                <div className="max-w-md space-y-6">
                    <div className="inline-flex bg-orange-100 p-6 rounded-full">
                        <ShoppingBagIcon className="w-16 h-16 text-orange-500" />
                    </div>
                    <h1 className="text-3xl font-bold text-gray-900">Your Cart Feels Lonely</h1>
                    <p className="text-gray-600">Your shopping cart is waiting to be filled. Let's find something special!</p>
                    <Link
                        to="/"
                        className="inline-flex items-center justify-center px-8 py-3 bg-orange-600 text-white rounded-lg font-medium hover:bg-orange-700 transition-colors"
                    >
                        <ArrowLeftIcon className="w-5 h-5 mr-2" />
                        Continue Shopping
                    </Link>
                </div>
            </motion.div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="min-h-screen bg-gray-50 py-6 sm:py-12 px-4 sm:px-6 lg:px-8"
        >
            <div className="max-w-7xl mx-auto">
                {/* Responsive Header */}
                <div className="flex flex-col sm:flex-row items-center mb-6 sm:mb-8 space-y-4 sm:space-y-0">
                    <Link
                        to="/"
                        className="flex items-center text-gray-600 hover:text-orange-600 sm:mb-0 self-start sm:self-auto"
                    >
                        <ArrowLeftIcon className="w-5 h-5 mr-1" />
                        <span className="sm:hidden">Back</span>
                        <span className="hidden sm:inline">Continue Shopping</span>
                    </Link>
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mx-auto text-center">
                        Your Shopping Cart
                    </h1>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
                    {/* Cart Items - Responsive Layout */}
                    <div className="lg:col-span-2 space-y-4 sm:space-y-6">
                        <AnimatePresence>
                            {cartItems
                                .filter(item => item?.product?._id)
                                .map((item) => (
                                    <motion.div
                                        key={item.product._id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, x: -50 }}
                                        className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-4 sm:p-6 flex flex-col sm:flex-row gap-4"
                                    >
                                        {/* Product Image */}
                                        <div className="w-full sm:w-32 flex-shrink-0">
                                            <img
                                                src={item.product.image}
                                                alt={item.product.name}
                                                className="w-full h-48 sm:h-32 object-contain rounded-lg"
                                            />
                                        </div>

                                        {/* Product Details */}
                                        <div className="flex-1 w-full">
                                            <div className="flex justify-between items-start">
                                                <div className="pr-4">
                                                    <h2 className="text-lg font-semibold text-gray-900 line-clamp-2">
                                                        {item.product.name}
                                                    </h2>
                                                    <p className="text-sm text-gray-500 mt-1">
                                                        {item.product.weight || 'N/A'}
                                                    </p>
                                                </div>
                                                <button
                                                    onClick={() => removeFromCart(item.product._id)}
                                                    className="text-gray-400 hover:text-red-600 transition-colors flex-shrink-0"
                                                >
                                                    <XMarkIcon className="w-6 h-6" />
                                                </button>
                                            </div>

                                            {/* Quantity Controls */}
                                            <div className="mt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                                                <div className="flex items-center space-x-3 w-full sm:w-auto">
                                                    <button
                                                        onClick={() => decrementQuantity(item.product._id)}
                                                        className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
                                                    >
                                                        −
                                                    </button>
                                                    <span className="w-8 text-center font-medium text-lg">
                                                        {item.quantity}
                                                    </span>
                                                    <button
                                                        onClick={() => incrementQuantity(item.product._id)}
                                                        className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
                                                    >
                                                        +
                                                    </button>
                                                </div>
                                                <span className="text-lg font-bold text-orange-600 sm:text-right">
                                                    ₹{((item.product.price || 0) * item.quantity).toFixed(2)}
                                                </span>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                        </AnimatePresence>
                    </div>

                    {/* Order Summary - Responsive Sticky */}
                    <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6 lg:sticky lg:top-8">
                        <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6">
                            Order Summary
                        </h2>

                        <div className="space-y-3 sm:space-y-4">
                            <div className="flex justify-between text-sm sm:text-base">
                                <span className="text-gray-600">Subtotal</span>
                                <span className="font-medium">₹{totalPrice.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between text-sm sm:text-base">
                                <span className="text-gray-600">Shipping</span>
                                <span className="font-medium">₹{shippingFee.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between text-sm sm:text-base">
                                <span className="text-gray-600">Taxes (18%)</span>
                                <span className="font-medium">₹{taxes.toFixed(2)}</span>
                            </div>
                            <div className="border-t pt-3 sm:pt-4">
                                <div className="flex justify-between font-bold text-gray-900 text-base sm:text-lg">
                                    <span>Total</span>
                                    <span>₹{(totalPrice + shippingFee + taxes).toFixed(2)}</span>
                                </div>
                            </div>
                        </div>

                        {/* Trust Badges */}
                        <div className="mt-4 sm:mt-6 space-y-3">
                            <div className="flex items-center space-x-2 text-xs sm:text-sm text-gray-600">
                                <LockClosedIcon className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                                <span>Secure SSL Encryption</span>
                            </div>
                            <div className="flex items-center space-x-2 text-xs sm:text-sm text-gray-600">
                                <TruckIcon className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                                <span>Free Delivery Over ₹999</span>
                            </div>
                        </div>

                        {/* Checkout Button */}
                        <Link
                            to="/checkout"
                            className="mt-6 w-full bg-orange-600 text-white py-2 sm:py-3 rounded-lg font-medium hover:bg-orange-700 transition-colors flex items-center justify-center text-sm sm:text-base"
                        >
                            Proceed to Checkout
                        </Link>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default CartPage;