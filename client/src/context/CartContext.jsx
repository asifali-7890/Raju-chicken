import { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from './AuthContext';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const { isLoggedIn } = useContext(AuthContext);
    const [cartItems, setCartItems] = useState([]);
    const [loading, setLoading] = useState(true);
    axios.defaults.withCredentials = true;

    // Fetch cart from backend on mount
    // context/CartContext.jsx
    useEffect(() => {
        const fetchCart = async () => {
            try {
                if (!isLoggedIn) {
                    setCartItems([]);
                    setLoading(false);
                    return;
                }

                const res = await axios.get('/api/cart', {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('authToken')}`
                    }
                });

                if (res.data.success) {
                    setCartItems(res.data.cart.items || []);
                }
            } catch (error) {
                console.error('Error fetching cart:', error);
                if (error.response?.status === 401) {
                    // Handle logout or token refresh here
                }
            }
            setLoading(false);
        };

        fetchCart();
    }, [isLoggedIn]);

    const addToCart = async (product) => {
        try {
            // console.log('testing addToCart');
            const res = await axios.post(
                '/api/cart/add',
                { productId: product._id },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('authToken')}`,
                        'Content-Type': 'application/json'
                    }
                }
            );
            if (res.data.success) {
                setCartItems(res.data.cart.items);
            }
        } catch (error) {
            console.error('Error adding to cart:', error);
        }
    };

    const updateQuantity = async (productId, quantity) => {
        try {
            const res = await axios.post(
                '/api/cart/update',
                { productId, quantity },
                { headers: { Authorization: `Bearer ${localStorage.getItem('authToken')}` } }
            );
            if (res.data.success) {
                setCartItems(res.data.cart.items);
            }
        } catch (error) {
            console.error('Error updating cart:', error);
        }
    };

    const incrementQuantity = (productId) => {
        const item = cartItems.find((i) => i.product?._id === productId);
        if (item) {
            updateQuantity(productId, item.quantity + 1);
        }
    };

    const decrementQuantity = (productId) => {
        const item = cartItems.find((i) => i.product?._id === productId);
        if (item) {
            updateQuantity(productId, item.quantity - 1);
        }
    };

    // Clear cart state (to be called on logout)
    const clearCart = () => {
        setCartItems([]);
    };

    return (
        <CartContext.Provider value={{ clearCart, cartItems, addToCart, incrementQuantity, decrementQuantity }}>
            {!loading && children}
        </CartContext.Provider>
    );
};
