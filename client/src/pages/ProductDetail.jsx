import { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { CartContext } from '../context/CartContext';

const ProductDetail = () => {
    const { id } = useParams();
    // Destructure all needed functions and cartItems from CartContext
    const { addToCart, cartItems, incrementQuantity, decrementQuantity } = useContext(CartContext);
    const [product, setProduct] = useState(null);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                console.log('Fetching product details...');
                const res = await axios.get(`http://localhost:5000/api/products/${id}`);
                if (res.data.success) {
                    setProduct(res.data.product);
                } else {
                    setError('Failed to fetch product');
                }
            } catch (err) {
                setError('Product not found');
            }
        };
        fetchProduct();
    }, [id]);

    if (error) {
        return <div className="p-4 text-red-500">{error}</div>;
    }

    if (!product) {
        return <div className="p-4">Loading...</div>;
    }

    // Check if the current product is already in the cart
    const existingItem = cartItems.find(item => item.product._id === product._id);

    const handleAddToCart = () => {
        addToCart(product);
    };

    return (
        <div className="max-w-4xl mx-auto p-4">
            <div className="flex flex-col md:flex-row gap-4">
                {/* Product Image */}
                <div className="flex-shrink-0">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-80 h-80 object-cover rounded"
                    />
                </div>

                {/* Product Info */}
                <div>
                    <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
                    <p className="text-gray-600 mb-2">{product.description}</p>
                    <p className="text-gray-700 mb-2">
                        <span className="font-semibold">Weight:</span> {product.weight}
                    </p>
                    <p className="text-xl text-orange-600 font-bold mb-4">₹{product.price}</p>

                    {/* Additional Info */}
                    <div className="bg-gray-100 p-2 rounded mb-4">
                        <p className="text-sm text-gray-500">
                            <span className="font-semibold">Storage Instructions:</span> Store under refrigeration at 4°C or below.
                        </p>
                        <p className="text-sm text-gray-500 mt-1">
                            <span className="font-semibold">Marketed By:</span> Raju Chicken Pvt. Ltd.
                        </p>
                    </div>

                    {/* Plus/Minus Controls (if product exists in the cart) */}
                    {existingItem && (
                        <div className="flex items-center space-x-2 mb-4">
                            <button
                                onClick={() => decrementQuantity(product._id)}
                                className="bg-gray-200  cursor-pointer  w-8 h-8 rounded text-xl flex items-center justify-center hover:bg-gray-300"
                            >
                                –
                            </button>
                            <span className="text-lg font-medium">{existingItem.quantity}</span>
                            <button
                                onClick={() => incrementQuantity(product._id)}
                                className="bg-gray-200  cursor-pointer  w-8 h-8 rounded text-xl flex items-center justify-center hover:bg-gray-300"
                            >
                                +
                            </button>
                        </div>
                    )}

                    {/* Add to Cart Button */}
                    <button
                        onClick={handleAddToCart}
                        className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition-colors"
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
