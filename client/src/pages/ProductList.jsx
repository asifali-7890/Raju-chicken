import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await axios.get('http://localhost:5000/api/products'); // Adjust if your API is at a different base URL
                console.log('res.data', res);
                if (res.data.success) {
                    setProducts(res.data.products);
                }
            } catch (error) {
                console.error('Failed to fetch products:', error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
            {products.map((product) => (
                <Link
                    to={`/products/${product._id}`}
                    key={product._id}
                    className="border-none shadow-md hover:scale-105 rounded-lg p-4 shadow hover:shadow-lg transition-shadow"
                >
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-48 object-cover mb-2 rounded"
                    />
                    <h2 className="text-lg font-semibold">{product.name}</h2>
                    <p className="text-sm text-gray-700 mt-1">₹{product.price}</p>
                </Link>
            ))}
        </div>
    );
};

export default ProductList;
