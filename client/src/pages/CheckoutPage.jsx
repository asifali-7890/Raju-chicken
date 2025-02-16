import { useContext, useState } from 'react';
import axios from 'axios';
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const CheckoutPage = () => {
    const { cartItems, clearCart } = useContext(CartContext);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    // Safe total price calculation
    const totalPrice = cartItems?.reduce(
        (sum, item) => sum + (item?.product?.price || 0) * (item?.quantity || 0),
        0
    ) || 0;

    const handleCheckout = async () => {
        setLoading(true);
        setError('');
        try {
            const res = await axios.post(
                '/api/orders/checkout',
                {},
                {
                    headers: { Authorization: `Bearer ${localStorage.getItem('authToken')}` },
                }
            );
            if (res.data.success) {
                clearCart();
                navigate('/order-success');
            }
        } catch (err) {
            setError(err.response?.data?.error || 'Checkout failed. Please try again.');
        }
        setLoading(false);
    };

    // Add these calculations
    const shippingFee = 49;
    const taxes = (totalPrice * 0.18) || 0;
    const grandTotal = (totalPrice + shippingFee + taxes) || 0;

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
            <h1 className="text-3xl font-bold mb-6 text-center">Checkout</h1>

            {!cartItems || cartItems.length === 0 ? (
                <div className="text-center text-lg text-gray-600">Your cart is empty.</div>
            ) : (
                <>
                    <div className="mb-4">
                        {cartItems
                            .filter(item => item?.product) // Filter out invalid items
                            .map((item) => (
                                <div
                                    key={item.product?._id || Math.random()}
                                    className="flex items-center justify-between p-4 border-b"
                                >
                                    <div>
                                        <h2 className="font-semibold text-lg">
                                            {item.product?.name || 'Unnamed Product'}
                                        </h2>
                                        <p className="text-gray-600">
                                            {item.quantity} x ₹{(item.product?.price || 0).toFixed(2)}
                                        </p>
                                    </div>
                                    <div>
                                        <p className="font-bold text-lg">
                                            ₹{((item.product?.price || 0) * item.quantity).toFixed(2)}
                                        </p>
                                    </div>
                                </div>
                            ))}
                    </div>

                    {/* Add order summary section */}
                    <div className="space-y-4 mt-6">
                        <div className="flex justify-between">
                            <span className="text-gray-600">Subtotal</span>
                            <span className="font-medium">₹{totalPrice.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-600">Shipping</span>
                            <span className="font-medium">₹{shippingFee.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-gray-600">Taxes (18%)</span>
                            <span className="font-medium">₹{taxes.toFixed(2)}</span>
                        </div>
                        <div className="border-t pt-4">
                            <div className="flex justify-between font-bold text-gray-900">
                                <span>Total</span>
                                <span>₹{grandTotal.toFixed(2)}</span>
                            </div>
                        </div>
                    </div>

                    {error && <p className="text-red-500 mt-2 text-center">{error}</p>}

                    <button
                        onClick={handleCheckout}
                        disabled={loading || totalPrice === 0}
                        className={`mt-6 w-full py-2 rounded transition-colors ${loading || totalPrice === 0 ? 'bg-gray-400' : 'bg-orange-500 hover:bg-orange-600'} text-white`}
                    >
                        {loading ? (
                            <span className="flex items-center justify-center">
                                <svg className="animate-spin h-5 w-5 mr-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                                </svg>
                                Placing Order...
                            </span>
                        ) : (
                            'Place Order'
                        )}
                    </button>
                </>
            )}
        </div>
    );
};

export default CheckoutPage;