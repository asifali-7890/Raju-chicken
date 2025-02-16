import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Link, useSearchParams } from 'react-router-dom';
import { FaStar, FaRegHeart, FaFire, FaFilter, FaSearch } from 'react-icons/fa';
import { GiChickenOven } from 'react-icons/gi';
import { CartContext } from '../context/CartContext';

const ProductList = () => {
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

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Header and Search */}
            <div className="mb-8 text-center">
                <h1 className="text-4xl font-bold text-gray-900 mb-2">
                    Fresh Poultry Products
                </h1>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Premium quality chicken products delivered fresh to your doorstep
                </p>
            </div>

            {/* Filters and Sorting */}
            <div className="flex flex-col md:flex-row gap-4 mb-8">
                <div className="relative flex-1">
                    <input
                        type="text"
                        placeholder="Search products..."
                        value={search}
                        onChange={(e) => setSearchParams({ search: e.target.value })}
                        className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                    <FaSearch className="absolute left-4 top-4 text-gray-400" />
                </div>

                <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-orange-500"
                >
                    <option value="featured">Featured</option>
                    <option value="priceLow">Price: Low to High</option>
                    <option value="priceHigh">Price: High to Low</option>
                    <option value="rating">Top Rated</option>
                </select>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-3 mb-8">
                {categories.map(category => (
                    <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`flex items-center px-4 py-2 rounded-full transition-colors ${selectedCategory === category.id
                            ? 'bg-orange-100 text-orange-700'
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                            }`}
                    >
                        <span className="mr-2">{category.icon}</span>
                        {category.name}
                    </button>
                ))}
            </div>

            {/* Product Grid */}
            {loading ? (
                <LoadingSkeleton />
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filteredProducts.map((product) => {
                        const oldPrice = Math.round(product.price * 1.3);
                        const discount = Math.round(((oldPrice - product.price) / oldPrice) * 100);

                        return (
                            <div
                                key={product._id}
                                className="group relative bg-white border border-gray-100 rounded-xl shadow-lg hover:shadow-xl transition-all"
                            >
                                {/* Product Image */}
                                <div className="relative h-60 overflow-hidden rounded-t-xl">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover transition-transform group-hover:scale-105"
                                    />
                                    <div className="absolute top-2 right-2 flex space-x-2">
                                        {product.isFeatured && (
                                            <span className="px-3 py-1 bg-orange-500 text-white rounded-full text-xs font-medium">
                                                Featured
                                            </span>
                                        )}
                                        <button className="p-2 bg-white rounded-full shadow hover:bg-gray-50">
                                            <FaRegHeart className="text-gray-600" />
                                        </button>
                                    </div>
                                    {discount > 0 && (
                                        <span className="absolute top-2 left-2 px-3 py-1 bg-red-500 text-white rounded-full text-xs font-medium">
                                            {discount}% OFF
                                        </span>
                                    )}
                                </div>

                                {/* Product Details */}
                                <Link to={`/products/${product._id}`} className="block p-4">
                                    <h2 className="text-lg font-semibold text-gray-900 line-clamp-2 mb-2">
                                        {product.name}
                                    </h2>

                                    {/* Rating */}
                                    <div className="flex items-center mb-2">
                                        {(() => {
                                            const randomRating = Math.floor(Math.random() * 3) + 3; // Generate random rating between 3 and 5
                                            return (
                                                <>
                                                    <div className="flex text-yellow-400">
                                                        {[...Array(5)].map((_, i) => (
                                                            <FaStar
                                                                key={i}
                                                                className={`w-4 h-4 ${i < randomRating ? 'fill-current' : 'fill-gray-300'}`}
                                                            />
                                                        ))}
                                                    </div>
                                                    <span className="text-sm text-gray-500 ml-2">
                                                        ({randomRating})
                                                    </span>
                                                </>
                                            );
                                        })()}
                                    </div>


                                    {/* Price */}
                                    <div className="flex items-center mb-3">
                                        <span className="text-xl font-bold text-orange-600">
                                            ₹{product.price}
                                        </span>
                                        <span className="text-sm text-gray-500 ml-1">/ {product.weight}</span>
                                        {oldPrice > product.price && (
                                            <span className="text-sm text-gray-400 line-through ml-2">
                                                ₹{oldPrice}
                                            </span>
                                        )}
                                    </div>

                                    {/* Stock Status */}
                                    {/* <div className="flex items-center text-sm">
                                        <span className={`w-2 h-2 rounded-full mr-2 ${product.inStock ? 'bg-green-500' : 'bg-red-500'}`} />
                                        {product.inStock ? 'In Stock' : 'Out of Stock'}
                                    </div> */}
                                </Link>

                                {/* Quick Add to Cart */}
                                <div className="p-4 pt-0">
                                    <button
                                        onClick={() => addToCart(product)}
                                        className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition-colors disabled:opacity-50"
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}

            {/* Empty State */}
            {!loading && filteredProducts.length === 0 && (
                <div className="text-center py-16">
                    <GiChickenOven className="text-6xl text-gray-300 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        No products found
                    </h3>
                    <p className="text-gray-600">
                        Try adjusting your search or filters
                    </p>
                </div>
            )}

            {/* Newsletter CTA */}
            <div className="mt-16 bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl p-8 text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Get Fresh Updates
                </h2>
                <p className="text-gray-600 mb-6 max-w-xl mx-auto">
                    Subscribe to our newsletter for new product alerts, exclusive offers, and cooking tips!
                </p>
                <div className="max-w-md mx-auto flex gap-4">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="flex-1 px-4 py-2 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500"
                    />
                    <button className="px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors">
                        Subscribe
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductList;