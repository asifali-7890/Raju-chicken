import { useContext, useState } from 'react';
import axios from 'axios';
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const CheckoutPage = () => {
    const { cartItems, clearCart } = useContext(CartContext);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    // Calculate the total price
    const totalPrice = cartItems.reduce(
        (sum, item) => sum + item.product.price * item.quantity,
        0
    );

    const handleCheckout = async () => {
        setLoading(true);
        setError('');
        try {
            const res = await axios.post(
                '/api/orders/checkout',
                {}, // No body needed here unless you want to send additional data
                {
                    headers: { Authorization: `Bearer ${localStorage.getItem('authToken')}` },
                }
            );
            if (res.data.success) {
                clearCart(); // Clear the cart after successful checkout
                navigate('/order-success'); // Redirect to order confirmation page
            } else {
                setError('Checkout failed. Please try again.');
            }
        } catch (err) {
            setError(err.response?.data?.error || 'Checkout failed. Please try again.');
        }
        setLoading(false);
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
            <h1 className="text-3xl font-bold mb-6 text-center">Checkout</h1>
            {cartItems.length === 0 ? (
                <div className="text-center text-lg text-gray-600">Your cart is empty.</div>
            ) : (
                <>
                    <div className="mb-4">
                        {cartItems.map((item) => (
                            <div key={item.product._id} className="flex items-center justify-between p-4 border-b">
                                <div>
                                    <h2 className="font-semibold text-lg">{item.product.name}</h2>
                                    <p className="text-gray-600">
                                        {item.quantity} x ₹{item.product.price.toFixed(2)}
                                    </p>
                                </div>
                                <div>
                                    <p className="font-bold text-lg">₹{(item.product.price * item.quantity).toFixed(2)}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-between mt-4">
                        <p className="text-xl font-bold">Total:</p>
                        <p className="text-xl font-bold">₹{totalPrice.toFixed(2)}</p>
                    </div>
                    {error && <p className="text-red-500 mt-2 text-center">{error}</p>}
                    <button
                        onClick={handleCheckout}
                        disabled={loading}
                        className={`mt-6 w-full py-2 rounded transition-colors ${loading ? 'bg-gray-400' : 'bg-orange-500 hover:bg-orange-600'} text-white`}
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